"use strict";(self.webpackChunkzhengwe=self.webpackChunkzhengwe||[]).push([[446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(k,l(l({ref:t},i),{},{components:r})):n.createElement(k,l({ref:t},i))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={slug:"etcd",title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d",authors:["goblin"],tags:["kubernetes"]},l=void 0,p={permalink:"/etcd",source:"@site/blog/2023-12-25/index.md",title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d",description:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",date:"2023-12-25T00:00:00.000Z",formattedDate:"December 25, 2023",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"}],readingTime:.855,hasTruncateMarker:!1,authors:[{name:"goblin",title:"zheng wei",url:"https://github.com/zhengwe.com",imageURL:"https://zhengwe.com/img/logo.svg",key:"goblin"}],frontMatter:{slug:"etcd",title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d",authors:["goblin"],tags:["kubernetes"]},prevItem:{title:"K8s Ingress \u81ea\u52a8\u7ba1\u7406\u8bc1\u4e66",permalink:"/kubernetes"},nextItem:{title:"Mysql \u5e38\u7528\u8bed\u53e5",permalink:"/mysql"}},o={authorsImageUrls:[void 0]},c=[{value:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",level:4},{value:"\u83b7\u53d6\u67d0\u4e2a Key \u4fe1\u606f",id:"\u83b7\u53d6\u67d0\u4e2a-key-\u4fe1\u606f",level:4},{value:"\u83b7\u53d6\u6240\u6709 Key",id:"\u83b7\u53d6\u6240\u6709-key",level:4},{value:"\u4f7f\u7528 Snapshot Save \u5907\u4efd",id:"\u4f7f\u7528-snapshot-save-\u5907\u4efd",level:4},{value:"\u5907\u4efd\u4fdd\u7559 10 \u5929",id:"\u5907\u4efd\u4fdd\u7559-10-\u5929",level:4},{value:"\u6062\u590d\u5907\u4efd",id:"\u6062\u590d\u5907\u4efd",level:4}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"},"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 endpoint health\n\nhttps://10.0.1.2:2379 is healthy: successfully committed proposal: took = 1.698385ms \nhttps://10.0.1.3:2379 is healthy: successfully committed proposal: took = 1.577913ms \nhttps://10.0.1.4:2379 is healthy: successfully committed proposal: took = 5.616079ms\n")),(0,a.kt)("h4",{id:"\u83b7\u53d6\u67d0\u4e2a-key-\u4fe1\u606f"},"\u83b7\u53d6\u67d0\u4e2a Key \u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 get /registry/apiregistration.k8s.io/apiservices/v1.apps\n")),(0,a.kt)("h4",{id:"\u83b7\u53d6\u6240\u6709-key"},"\u83b7\u53d6\u6240\u6709 Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 get / --prefix --keys-only\n")),(0,a.kt)("h4",{id:"\u4f7f\u7528-snapshot-save-\u5907\u4efd"},"\u4f7f\u7528 Snapshot Save \u5907\u4efd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 snapshot save /data/etcd_backup/etcd-snapshot-`date +%Y%m%d`.db\n")),(0,a.kt)("h4",{id:"\u5907\u4efd\u4fdd\u7559-10-\u5929"},"\u5907\u4efd\u4fdd\u7559 10 \u5929"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"find /data/etcd_backup/ -name *.db -mtime +10 -exec rm -f {} \\;\n")),(0,a.kt)("h4",{id:"\u6062\u590d\u5907\u4efd"},"\u6062\u590d\u5907\u4efd"),(0,a.kt)("p",null,"\u62f7\u8d1d",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),"\u5907\u4efd\u5feb\u7167\uff0c\u505c\u6b62\u96c6\u7fa4\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\u670d\u52a1\uff0c\u505c\u6b62\u96c6\u7fa4\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"ETCD"),"\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ETCDCTL_API=3 etcdctl snapshot restore /data/etcd_backup/etcd-snapshot-20231225.db \\\n  --name etcd-0 \\\n  --initial-cluster "etcd-0=https://10.0.1.2:2380,etcd-1=https://10.0.1.3:2380,etcd-2=https://10.0.1.4:2380" \\\n  --initial-cluster-token etcd-cluster \\\n  --initial-advertise-peer-urls https://10.0.1.2:2380 \\\n  --data-dir=/var/lib/etcd/default.etcd\n')))}d.isMDXComponent=!0}}]);