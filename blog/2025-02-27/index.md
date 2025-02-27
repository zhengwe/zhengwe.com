---
slug: kubernetes
title: K8s Ingress 自动管理证书
authors: [goblin]
tags: [kubernetes]
---

### 前提条件
- 一个运行的kubernetes集群
- 一个阿里云账号，并且已经创建了一个 DNS 域名
- 阿里云的 AccessKey 和 SecretKey，用于 cert-manager 自动配置 DNS 记录

### 安装 Cert Manager
[官网地址](https://cert-manager.io/docs/installation/)
```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.17.0/cert-manager.yaml
```

### DNS01
[官网地址](https://cert-manager.io/docs/configuration/acme/dns01/), `http01` 不支持泛域名
- 安装 [alidns-webhook](https://github.com/DEVmachine-fr/cert-manager-alidns-webhook)
```bash
helm repo add cert-manager-alidns-webhook https://devmachine-fr.github.io/cert-manager-alidns-webhook
helm repo update
helm install alidns-webhook cert-manager-alidns-webhook/alidns-webhook --set groupName=example.com
```
- 创建阿里云 DNS 访问权限
```bash
  apiVersion: v1
  kind: Secret
  metadata:
    name: alidns-secrets
    namespace: cert-manager
  stringData:
    access-key: xxx
    secret-key: xxx
```
- 创建 ClusterIssuer
```bash
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt
spec:
  acme:
    email: contact@example.com
    server: https://acme-v02.api.letsencrypt.org/directory  # 测试可以使用 staging (https://acme-staging-v02.api.letsencrypt.org/directory)
    privateKeySecretRef:
      name: letsencrypt
    solvers:
    - dns01:
        webhook:
            config:
              accessTokenSecretRef:
                key: access-key
                name: alidns-secrets
              regionId: cn-beijing # this value your aliyun region
              secretKeySecretRef:
                key: secret-key
                name: alidns-secrets
            groupName: example.com # groupName must match the one configured on webhook deployment (see Helm chart's values) !
            solverName: alidns-solver
```
- 创建 certification 使用 ClusterIssuer
```bash
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: example-tls
spec:
  secretName: example-com-tls
  commonName: example.com
  dnsNames:
  - example.com
  - "*.example.com"
  issuerRef:
    name: letsencrypt
    kind: ClusterIssuer
```

### 配置 Ingress 自动申请证书
```bash
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: 'true'
    cert-manager.io/cluster-issuer: "letsencrypt"  # 跟 ClusterIssuer 一致
spec:
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        backend:
          serviceName: app
          servicePort: 80
  tls:
  - hosts:
    - app.example.com
    secretName: example-com-tls
```
