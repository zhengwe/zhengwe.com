---
slug: etcd
title: Etcd 备份与恢复
authors: [innocence]
tags: [kubernetes]
---

#### 查看集群状态
```bash
$ ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 endpoint health

https://10.0.1.2:2379 is healthy: successfully committed proposal: took = 1.698385ms 
https://10.0.1.3:2379 is healthy: successfully committed proposal: took = 1.577913ms 
https://10.0.1.4:2379 is healthy: successfully committed proposal: took = 5.616079ms
```

#### 获取某个 Key 信息
```bash
ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 get /registry/apiregistration.k8s.io/apiservices/v1.apps
```

#### 获取所有 Key
```bash
ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 get / --prefix --keys-only
```

#### 使用 Snapshot Save 备份
```bash
ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 snapshot save /data/etcd_backup/etcd-snapshot-`date +%Y%m%d`.db
```

#### 备份保留 10 天
```bash
find /data/etcd_backup/ -name *.db -mtime +10 -exec rm -f {} \;
```

#### 恢复备份
拷贝`etcd`备份快照，停止集群所有`kube-apiserver`服务，停止集群所有`ETCD`服务
```bash
ETCDCTL_API=3 etcdctl snapshot restore /data/etcd_backup/etcd-snapshot-20231225.db \
  --name etcd-0 \
  --initial-cluster "etcd-0=https://10.0.1.2:2380,etcd-1=https://10.0.1.3:2380,etcd-2=https://10.0.1.4:2380" \
  --initial-cluster-token etcd-cluster \
  --initial-advertise-peer-urls https://10.0.1.2:2380 \
  --data-dir=/var/lib/etcd/default.etcd
```