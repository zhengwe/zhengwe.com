"use strict";(self.webpackChunkzhengwe=self.webpackChunkzhengwe||[]).push([[926],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(t),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||s;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const s={slug:"kubernetes",title:"K8s Ingress \u81ea\u52a8\u7ba1\u7406\u8bc1\u4e66",authors:["goblin"],tags:["kubernetes"]},l=void 0,o={permalink:"/kubernetes",source:"@site/blog/2025-02-27/index.md",title:"K8s Ingress \u81ea\u52a8\u7ba1\u7406\u8bc1\u4e66",description:"\u524d\u63d0\u6761\u4ef6",date:"2025-02-27T00:00:00.000Z",formattedDate:"February 27, 2025",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"}],readingTime:1.36,hasTruncateMarker:!1,authors:[{name:"goblin",title:"zheng wei",url:"https://github.com/zhengwe.com",imageURL:"https://zhengwe.com/img/logo.svg",key:"goblin"}],frontMatter:{slug:"kubernetes",title:"K8s Ingress \u81ea\u52a8\u7ba1\u7406\u8bc1\u4e66",authors:["goblin"],tags:["kubernetes"]},nextItem:{title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d",permalink:"/etcd"}},c={authorsImageUrls:[void 0]},i=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u5b89\u88c5 Cert Manager",id:"\u5b89\u88c5-cert-manager",level:3},{value:"DNS01",id:"dns01",level:3},{value:"\u914d\u7f6e Ingress \u81ea\u52a8\u7533\u8bf7\u8bc1\u4e66",id:"\u914d\u7f6e-ingress-\u81ea\u52a8\u7533\u8bf7\u8bc1\u4e66",level:3}],p={toc:i},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8fd0\u884c\u7684kubernetes\u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u963f\u91cc\u4e91\u8d26\u53f7\uff0c\u5e76\u4e14\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a DNS \u57df\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91\u7684 AccessKey \u548c SecretKey\uff0c\u7528\u4e8e cert-manager \u81ea\u52a8\u914d\u7f6e DNS \u8bb0\u5f55")),(0,a.kt)("h3",{id:"\u5b89\u88c5-cert-manager"},"\u5b89\u88c5 Cert Manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/"},"\u5b98\u7f51\u5730\u5740")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.17.0/cert-manager.yaml\n")),(0,a.kt)("h3",{id:"dns01"},"DNS01"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/configuration/acme/dns01/"},"\u5b98\u7f51\u5730\u5740"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"http01")," \u4e0d\u652f\u6301\u6cdb\u57df\u540d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/DEVmachine-fr/cert-manager-alidns-webhook"},"alidns-webhook"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add cert-manager-alidns-webhook https://devmachine-fr.github.io/cert-manager-alidns-webhook\nhelm repo update\nhelm install alidns-webhook cert-manager-alidns-webhook/alidns-webhook --set groupName=example.com\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u963f\u91cc\u4e91 DNS \u8bbf\u95ee\u6743\u9650")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  apiVersion: v1\n  kind: Secret\n  metadata:\n    name: alidns-secrets\n    namespace: cert-manager\n  stringData:\n    access-key: xxx\n    secret-key: xxx\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa ClusterIssuer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: cert-manager.io/v1\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt\nspec:\n  acme:\n    email: contact@example.com\n    server: https://acme-v02.api.letsencrypt.org/directory  # \u6d4b\u8bd5\u53ef\u4ee5\u4f7f\u7528 staging (https://acme-staging-v02.api.letsencrypt.org/directory)\n    privateKeySecretRef:\n      name: letsencrypt\n    solvers:\n    - dns01:\n        webhook:\n            config:\n              accessTokenSecretRef:\n                key: access-key\n                name: alidns-secrets\n              regionId: cn-beijing # this value your aliyun region\n              secretKeySecretRef:\n                key: secret-key\n                name: alidns-secrets\n            groupName: example.com # groupName must match the one configured on webhook deployment (see Helm chart's values) !\n            solverName: alidns-solver\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa certification \u4f7f\u7528 ClusterIssuer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: example-tls\nspec:\n  secretName: example-com-tls\n  dnsNames:\n  - example.com\n  - "*.example.com"\n  issuerRef:\n    name: letsencrypt\n    kind: ClusterIssuer\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e-ingress-\u81ea\u52a8\u7533\u8bf7\u8bc1\u4e66"},"\u914d\u7f6e Ingress \u81ea\u52a8\u7533\u8bf7\u8bc1\u4e66"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app\n  annotations:\n    nginx.ingress.kubernetes.io/ssl-redirect: 'true'\nspec:\n  rules:\n  - host: app.example.com\n    http:\n      paths:\n      - path: /\n        backend:\n          serviceName: app\n          servicePort: 80\n  tls:\n  - hosts:\n    - app.example.com\n    secretName: example-com-tls\n")))}u.isMDXComponent=!0}}]);