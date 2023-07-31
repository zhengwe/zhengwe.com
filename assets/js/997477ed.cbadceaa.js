"use strict";(self.webpackChunkzhengwe=self.webpackChunkzhengwe||[]).push([[7],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_positon:1},o="\u57fa\u7840\u8bed\u6cd5",i={unversionedId:"golang/base",id:"golang/base",title:"\u57fa\u7840\u8bed\u6cd5",description:"\u53d8\u91cf",source:"@site/docs/golang/base.md",sourceDirName:"golang",slug:"/golang/base",permalink:"/docs/golang/base",draft:!1,tags:[],version:"current",frontMatter:{sidebar_positon:1},sidebar:"tutorialSidebar",previous:{title:"golang",permalink:"/docs/category/golang"}},p={},c=[{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u58f0\u660e",id:"\u58f0\u660e",level:3},{value:"\u53d8\u91cf\u521d\u59cb\u5316",id:"\u53d8\u91cf\u521d\u59cb\u5316",level:3},{value:"\u533f\u540d\u53d8\u91cf",id:"\u533f\u540d\u53d8\u91cf",level:3},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:2},{value:"Fmt",id:"fmt",level:2}],u={toc:c},s="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u7840\u8bed\u6cd5"},"\u57fa\u7840\u8bed\u6cd5"),(0,a.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,a.kt)("p",null,"Go\u8bed\u8a00\u4e2d\u7684\u53d8\u91cf\u9700\u8981\u58f0\u660e\u540e\u624d\u80fd\u4f7f\u7528\uff0c\u540c\u4e00\u4e2a\u4f5c\u7528\u57df\u5185\u4e0d\u80fd\u91cd\u590d\u58f0\u660e\uff0c\u53d8\u91cf\u58f0\u660e\u540e\u5fc5\u987b\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u58f0\u660e"},"\u58f0\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"var \u53d8\u91cf\u540d \u53d8\u91cf\u7c7b\u578b\n\nvar name string\nvar age int\nvar ok bool\n\n// \u591a\u4e2a\u58f0\u660e\nvar (\n    name string\n    age int\n    ok bool\n)\n")),(0,a.kt)("h3",{id:"\u53d8\u91cf\u521d\u59cb\u5316"},"\u53d8\u91cf\u521d\u59cb\u5316"),(0,a.kt)("p",null,"Go\u8bed\u8a00\u5728\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u4f1a\u5728\u5bf9\u5e94\u7684\u5185\u5b58\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u6574\u578b\u548c\u6d6e\u70b9\u578b\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5b57\u7b26\u4e32\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u7a7a\u5b57\u7b26\u4e32"),"\uff0c\u5e03\u5c14\u578b\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5207\u7247\u3001\u51fd\u6570\u3001\u6307\u9488\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002"),(0,a.kt)("p",null,"\u58f0\u660e\u53d8\u91cf\u5e76\u6307\u5b9a\u521d\u59cb\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'var \u53d8\u91cf\u540d \u7c7b\u578b = \u8868\u8fbe\u5f0f\n\nvar name string = "golang"\nvar age = 0     // \u7701\u7565\u7c7b\u578b\uff0c\u7f16\u8bd1\u5668\u4f1a\u6839\u636e\u53f3\u8fb9\u7684\u503c\u6765\u81ea\u52a8\u63a8\u5bfc\u53d8\u91cf\u7c7b\u578b\n')),(0,a.kt)("p",null,"\u53ea\u80fd\u5728\u51fd\u6570\u5185\u4f7f\u7528\uff0c\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},":="),"\u58f0\u660e\u521d\u59cb\u5316\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'package main\nimport "fmt"\nfunc main () {\n    name := "golang"\n    age := 20\n    fmt.Println(name, age)\n}\n')),(0,a.kt)("h3",{id:"\u533f\u540d\u53d8\u91cf"},"\u533f\u540d\u53d8\u91cf"),(0,a.kt)("p",null,"\u533f\u540d\u53d8\u91cf\u7528\u4e00\u4e2a\u4e0b\u5212\u7ebf",(0,a.kt)("inlineCode",{parentName:"p"},"_"),"\u8868\u793a\uff0c\u7528\u4e8e\u5ffd\u7565\u67d0\u4e2a\u503c\u3002\u533f\u540d\u53d8\u91cf\u4e0d\u5360\u7528\u547d\u540d\u7a7a\u95f4\uff0c\u4e0d\u5206\u914d\u5185\u5b58\uff0c\u53ef\u4ee5\u91cd\u590d\u58f0\u660e\u3002"),(0,a.kt)("h2",{id:"\u5e38\u91cf"},"\u5e38\u91cf"),(0,a.kt)("p",null,"\u5e38\u91cf\u662f\u4e0d\u53d8\u7684\u503c\uff0c\u7528\u4e8e\u5b9a\u4e49\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\u4e0d\u6539\u53d8\u7684\u503c\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5e38\u91cf\u5728\u5b9a\u4e49\u65f6\u5fc5\u987b\u8d4b\u503c"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"const z = 200\nconst w = 500\n\n// \u591a\u4e2a\u58f0\u660e\nconst (\n    z = 200\n    w = 500\n)\n")),(0,a.kt)("p",null,"Go\u8bed\u8a00\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u591a\u884c\u5b57\u7b26\u4e32\uff0c\u5fc5\u987b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u53cd\u5f15\u53f7"),"\uff0c\u53cd\u5f15\u53f7\u6362\u884c\u4f1a\u88ab\u4f5c\u4e3a\u5b57\u7b26\u4e32\u4e2d\u7684\u6362\u884c\uff0c\u5176\u5185\u7684\u8f6c\u4e49\u5b57\u7b26\u65e0\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"zw := `abc\nzzz\nwww\n`\n")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u8f6c\u6362"},"\u7c7b\u578b\u8f6c\u6362"),(0,a.kt)("p",null,"Go\u8bed\u8a00\u53ea\u6709\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\uff0c\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"T(\u8868\u8fbe\u5f0f)   // T\u8868\u793a\u8981\u8f6c\u6362\u7684\u7c7b\u578b\n")),(0,a.kt)("h2",{id:"fmt"},"Fmt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Println\uff1a\u4e00\u6b21\u8f93\u51fa\u591a\u4e2a\u503c\uff0c\u4e2d\u95f4\u6709\u7a7a\u683c\uff0c\u4f1a\u81ea\u52a8\u6362\u884c"),(0,a.kt)("li",{parentName:"ul"},"Print\uff1a\u4e00\u6b21\u8f93\u51fa\u591a\u4e2a\u503c\uff0c\u4e2d\u95f4\u6ca1\u6709\u7a7a\u683c\uff0c\u4e0d\u4f1a\u81ea\u52a8\u6362\u884c"),(0,a.kt)("li",{parentName:"ul"},"Printf\uff1a\u683c\u5f0f\u5316\u8f93\u51fa"),(0,a.kt)("li",{parentName:"ul"},"Sprintf\uff1a\u683c\u5f0f\u5316\u8f93\u51fa\uff0c\u4e0d\u6253\u5370\u8fd4\u56de\u503c\uff0c\u5e38\u7528\u4e8e\u53d8\u91cf\u62fc\u63a5\u3001\u8d4b\u503c")))}g.isMDXComponent=!0}}]);