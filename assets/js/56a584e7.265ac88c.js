"use strict";(self.webpackChunkzhengwe=self.webpackChunkzhengwe||[]).push([[166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),g=l,f=s["".concat(p,".").concat(g)]||s[g]||m[g]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={slug:"kernel",title:"Centos\u5185\u6838\u5347\u7ea7",authors:["innocence"],tags:["linux"]},o=void 0,i={permalink:"/kernel",source:"@site/blog/2023-09-08/index.md",title:"Centos\u5185\u6838\u5347\u7ea7",description:"\u5bfc\u5165\u4ed3\u5e93\u6e90",date:"2023-09-08T00:00:00.000Z",formattedDate:"September 8, 2023",tags:[{label:"linux",permalink:"/tags/linux"}],readingTime:.6,hasTruncateMarker:!1,authors:[{name:"Innocence",title:"zheng wei",url:"https://github.com/zhengwe.com",imageURL:"https://zhengwe.com/img/logo.svg",key:"innocence"}],frontMatter:{slug:"kernel",title:"Centos\u5185\u6838\u5347\u7ea7",authors:["innocence"],tags:["linux"]},prevItem:{title:"Istio \u8fd4\u56de 426 \u72b6\u6001\u7801",permalink:"/istio"},nextItem:{title:"\u624b\u5199\u7684\u4ece\u524d",permalink:"/promise"}},p={authorsImageUrls:[void 0]},c=[{value:"\u5bfc\u5165\u4ed3\u5e93\u6e90",id:"\u5bfc\u5165\u4ed3\u5e93\u6e90",level:3},{value:"\u67e5\u770b\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305",id:"\u67e5\u770b\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305",level:3},{value:"\u67e5\u770b\u73b0\u6709\u5185\u6838\u542f\u52a8\u987a\u5e8f",id:"\u67e5\u770b\u73b0\u6709\u5185\u6838\u542f\u52a8\u987a\u5e8f",level:3},{value:"\u8bbe\u7f6e\u5185\u6838\u542f\u52a8\u5e8f\u53f7",id:"\u8bbe\u7f6e\u5185\u6838\u542f\u52a8\u5e8f\u53f7",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u5bfc\u5165\u4ed3\u5e93\u6e90"},"\u5bfc\u5165\u4ed3\u5e93\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\n\nrpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305"},"\u67e5\u770b\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# ML \u7248\u672c\u4e3a\u6700\u65b0\u7248\u672c\uff0cTL \u7248\u672c\u4e3a\u7a33\u5b9a\u7248\u672c\nyum --enablerepo="elrepo-kernel" list --showduplicates | sort -r | grep kernel-ml.x86_64\n\n# \u5b89\u88c5 ML \u7248\u672c\nyum --enablerepo=elrepo-kernel install  kernel-ml-devel kernel-ml -y\n\n# \u5b89\u88c5 LT \u7248\u672c\nyum --enablerepo=elrepo-kernel install kernel-lt-devel kernel-lt -y\n')),(0,l.kt)("h3",{id:"\u67e5\u770b\u73b0\u6709\u5185\u6838\u542f\u52a8\u987a\u5e8f"},"\u67e5\u770b\u73b0\u6709\u5185\u6838\u542f\u52a8\u987a\u5e8f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"awk -F\\' '$1==\"menuentry \" {print $2}' /etc/grub2.cfg\n\nCentOS Linux (4.4.179-1.el7.elrepo.x86_64) 7 (Core)\n\nCentOS Linux (3.10.0-693.el7.x86_64) 7 (Core)\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u5185\u6838\u542f\u52a8\u5e8f\u53f7"},"\u8bbe\u7f6e\u5185\u6838\u542f\u52a8\u5e8f\u53f7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grub2-set-default 0\n")))}m.isMDXComponent=!0}}]);