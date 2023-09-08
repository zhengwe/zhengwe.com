"use strict";(self.webpackChunkzhengwe=self.webpackChunkzhengwe||[]).push([[7],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},m=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=u(a),k=l,c=g["".concat(o,".").concat(k)]||g[k]||d[k]||r;return a?t.createElement(c,p(p({ref:n},m),{},{components:a})):t.createElement(c,p({ref:n},m))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[g]="string"==typeof e?e:l,p[1]=i;for(var u=2;u<r;u++)p[u]=a[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3218:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=a(7462),l=(a(7294),a(3905));const r={sidebar_positon:1},p="\u57fa\u7840\u8bed\u6cd5",i={unversionedId:"golang/base",id:"golang/base",title:"\u57fa\u7840\u8bed\u6cd5",description:"\u53d8\u91cf",source:"@site/docs/golang/base.md",sourceDirName:"golang",slug:"/golang/base",permalink:"/docs/golang/base",draft:!1,tags:[],version:"current",frontMatter:{sidebar_positon:1},sidebar:"tutorialSidebar",previous:{title:"Golang",permalink:"/docs/category/golang"}},o={},u=[{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u58f0\u660e",id:"\u58f0\u660e",level:3},{value:"\u53d8\u91cf\u521d\u59cb\u5316",id:"\u53d8\u91cf\u521d\u59cb\u5316",level:3},{value:"\u533f\u540d\u53d8\u91cf",id:"\u533f\u540d\u53d8\u91cf",level:3},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:2},{value:"byte &amp; rune",id:"byte--rune",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:2},{value:"Fmt",id:"fmt",level:2},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:2},{value:"\u6570\u7ec4\u904d\u5386",id:"\u6570\u7ec4\u904d\u5386",level:3},{value:"\u591a\u7ef4\u6570\u7ec4",id:"\u591a\u7ef4\u6570\u7ec4",level:3},{value:"\u5207\u7247",id:"\u5207\u7247",level:2},{value:"\u5207\u7247\u7684\u5b9a\u4e49",id:"\u5207\u7247\u7684\u5b9a\u4e49",level:3},{value:"append",id:"append",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:3},{value:"Map",id:"map",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"delete\u51fd\u6570",id:"delete\u51fd\u6570",level:3}],m={toc:u},g="wrapper";function d(e){let{components:n,...a}=e;return(0,l.kt)(g,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u57fa\u7840\u8bed\u6cd5"},"\u57fa\u7840\u8bed\u6cd5"),(0,l.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("p",null,"Go\u8bed\u8a00\u4e2d\u7684\u53d8\u91cf\u9700\u8981\u58f0\u660e\u540e\u624d\u80fd\u4f7f\u7528\uff0c\u540c\u4e00\u4e2a\u4f5c\u7528\u57df\u5185\u4e0d\u80fd\u91cd\u590d\u58f0\u660e\uff0c\u53d8\u91cf\u58f0\u660e\u540e\u5fc5\u987b\u4f7f\u7528\u3002"),(0,l.kt)("h3",{id:"\u58f0\u660e"},"\u58f0\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"var \u53d8\u91cf\u540d \u53d8\u91cf\u7c7b\u578b\n\nvar name string\nvar age int\nvar ok bool\n\n// \u591a\u4e2a\u58f0\u660e\nvar (\n    name string\n    age int\n    ok bool\n)\n")),(0,l.kt)("h3",{id:"\u53d8\u91cf\u521d\u59cb\u5316"},"\u53d8\u91cf\u521d\u59cb\u5316"),(0,l.kt)("p",null,"Go\u8bed\u8a00\u5728\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u4f1a\u5728\u5bf9\u5e94\u7684\u5185\u5b58\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u6574\u578b\u548c\u6d6e\u70b9\u578b\u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5b57\u7b26\u4e32\u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"\u7a7a\u5b57\u7b26\u4e32"),"\uff0c\u5e03\u5c14\u578b\u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5207\u7247\u3001\u51fd\u6570\u3001\u6307\u9488\u9ed8\u8ba4\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002"),(0,l.kt)("p",null,"\u58f0\u660e\u53d8\u91cf\u5e76\u6307\u5b9a\u521d\u59cb\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'var \u53d8\u91cf\u540d \u7c7b\u578b = \u8868\u8fbe\u5f0f\n\nvar name string = "golang"\nvar age = 0     // \u7701\u7565\u7c7b\u578b\uff0c\u7f16\u8bd1\u5668\u4f1a\u6839\u636e\u53f3\u8fb9\u7684\u503c\u6765\u81ea\u52a8\u63a8\u5bfc\u53d8\u91cf\u7c7b\u578b\n')),(0,l.kt)("p",null,"\u53ea\u80fd\u5728\u51fd\u6570\u5185\u4f7f\u7528\uff0c\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},":="),"\u58f0\u660e\u521d\u59cb\u5316\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'package main\nimport "fmt"\nfunc main () {\n    name := "golang"\n    age := 20\n    fmt.Println(name, age)\n}\n')),(0,l.kt)("h3",{id:"\u533f\u540d\u53d8\u91cf"},"\u533f\u540d\u53d8\u91cf"),(0,l.kt)("p",null,"\u533f\u540d\u53d8\u91cf\u7528\u4e00\u4e2a\u4e0b\u5212\u7ebf",(0,l.kt)("inlineCode",{parentName:"p"},"_"),"\u8868\u793a\uff0c\u7528\u4e8e\u5ffd\u7565\u67d0\u4e2a\u503c\u3002\u533f\u540d\u53d8\u91cf\u4e0d\u5360\u7528\u547d\u540d\u7a7a\u95f4\uff0c\u4e0d\u5206\u914d\u5185\u5b58\uff0c\u53ef\u4ee5\u91cd\u590d\u58f0\u660e\u3002"),(0,l.kt)("h2",{id:"\u5e38\u91cf"},"\u5e38\u91cf"),(0,l.kt)("p",null,"\u5e38\u91cf\u662f\u4e0d\u53d8\u7684\u503c\uff0c\u7528\u4e8e\u5b9a\u4e49\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\u4e0d\u6539\u53d8\u7684\u503c\uff0c\u5e38\u91cf\u901a\u5e38\u4e3a\u5927\u5199\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5e38\u91cf\u5728\u5b9a\u4e49\u65f6\u5fc5\u987b\u8d4b\u503c"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"const HTTP_STATUS_OK = 200\nconst HTTP_STATUS_BADGATEWAY = 500\n\n// \u591a\u4e2a\u58f0\u660e\nconst (\n    HTTP_STATUS_OK = 200\n    HTTP_STATUS_BADGATEWAY = 500\n)\n")),(0,l.kt)("p",null,"Go\u8bed\u8a00\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u591a\u884c\u5b57\u7b26\u4e32\uff0c\u5fc5\u987b\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"\u53cd\u5f15\u53f7"),"\uff0c\u53cd\u5f15\u53f7\u6362\u884c\u4f1a\u88ab\u4f5c\u4e3a\u5b57\u7b26\u4e32\u4e2d\u7684\u6362\u884c\uff0c\u5176\u5185\u7684\u8f6c\u4e49\u5b57\u7b26\u65e0\u6548\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"zw := `abc\nzzz\nwww\n`\n")),(0,l.kt)("h2",{id:"byte--rune"},"byte & rune"),(0,l.kt)("p",null,"uint8\u7c7b\u578b\uff0c\u4e5f\u662fbyte\u578b\uff0c\u8868\u793a\u4e00\u4e2aASCII\u5b57\u7b26"),(0,l.kt)("p",null,"rune\u7c7b\u578b\uff0c\u8868\u793a\u4e00\u4e2aUTF-8\u5b57\u7b26"),(0,l.kt)("h2",{id:"\u7c7b\u578b\u8f6c\u6362"},"\u7c7b\u578b\u8f6c\u6362"),(0,l.kt)("p",null,"Go\u8bed\u8a00\u53ea\u6709\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\uff0c\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"T(\u8868\u8fbe\u5f0f)   // T\u8868\u793a\u8981\u8f6c\u6362\u7684\u7c7b\u578b\n")),(0,l.kt)("h2",{id:"fmt"},"Fmt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Println\uff1a\u4e00\u6b21\u8f93\u51fa\u591a\u4e2a\u503c\uff0c\u4e2d\u95f4\u6709\u7a7a\u683c\uff0c\u4f1a\u81ea\u52a8\u6362\u884c"),(0,l.kt)("li",{parentName:"ul"},"Print\uff1a\u4e00\u6b21\u8f93\u51fa\u591a\u4e2a\u503c\uff0c\u4e2d\u95f4\u6ca1\u6709\u7a7a\u683c\uff0c\u4e0d\u4f1a\u81ea\u52a8\u6362\u884c"),(0,l.kt)("li",{parentName:"ul"},"Printf\uff1a\u683c\u5f0f\u5316\u8f93\u51fa"),(0,l.kt)("li",{parentName:"ul"},"Sprintf\uff1a\u683c\u5f0f\u5316\u8f93\u51fa\uff0c\u4e0d\u6253\u5370\u8fd4\u56de\u503c\uff0c\u5e38\u7528\u4e8e\u53d8\u91cf\u62fc\u63a5\u3001\u8d4b\u503c")),(0,l.kt)("h2",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,l.kt)("p",null,"\u6570\u7ec4\u5728\u58f0\u660e\u65f6\u5c31\u786e\u5b9a\uff0c\u4f7f\u7528\u65f6\u53ef\u4ee5\u4fee\u6539\uff0c\u6570\u7ec4\u5927\u5c0f\u4e0d\u80fd\u53d8\u5316\uff0c\u6570\u7ec4\u662f\u503c\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"var a [3]int  //\u6570\u7ec4\u957f\u5ea6\u4e00\u65e6\u5b9a\u4e49\uff0c\u4e0d\u80fd\u6539\u53d8\nvar b = [2]int{1, 2}  //\u521d\u59cb\u5316\u6307\u5b9a\u503c\nvar c = [...]int{1, 2, 3}  //\u81ea\u52a8\u63a8\u5bfc\u6570\u7ec4\u957f\u5ea6\n")),(0,l.kt)("h3",{id:"\u6570\u7ec4\u904d\u5386"},"\u6570\u7ec4\u904d\u5386"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'var a = [...]string{"golang", "java", "rust"}\n//\u65b9\u6cd5\u4e00\uff1afor\u5faa\u73af\u904d\u5386\nfor i := 0; i < len(a); i++ {\n    fmt.Println(a[i])\n}\n\n//\u65b9\u6cd5\u4e8c\uff1afor range\nfor index, value := range a {\n    fmt.Println(index, value)\n}\n')),(0,l.kt)("h3",{id:"\u591a\u7ef4\u6570\u7ec4"},"\u591a\u7ef4\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'a := [3][2]string {\n    {"golang", "rust"},\n    {"vue", "react"},\n    {"k8s", "p8s"},\n}\nfmt.Println(a)\nfmt.Println(a[2][1]) //\u652f\u6301\u7d22\u5f15\u53d6\u503c\n\nfor _, value := range a {\n    for _, value1 := range value {\n        fmt.Printf("%s\\t", value1)\n    }\n    fmt.Println()\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},'\u6570\u7ec4\u652f\u6301"=="\u3001"!="\u64cd\u4f5c\u7b26\uff0c\u56e0\u4e3a\u5185\u5b58\u662f\u521d\u59cb\u5316\u8fc7'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"[n]",(0,l.kt)("em",{parentName:"strong"},"T\u8868\u793a\u6307\u9488\u6570\u7ec4\uff0c"),"[n]","T\u8868\u793a\u6570\u7ec4\u6307\u9488")))),(0,l.kt)("h2",{id:"\u5207\u7247"},"\u5207\u7247"),(0,l.kt)("p",null,"\u5207\u7247\u662f\u4e00\u4e2a\u62e5\u6709\u76f8\u540c\u7c7b\u578b\u5143\u7d20\u7684\u53ef\u53d8\u957f\u5ea6\u7684\u5e8f\u5217\uff0c\u57fa\u4e8e\u6570\u7ec4\u7c7b\u578b\u505a\u7684\u4e00\u5c42\u5c01\u88c5\uff0c\u652f\u6301\u81ea\u52a8\u6269\u7f29\u5bb9\uff0c\u662f\u5f15\u7528\u7c7b\u578b"),(0,l.kt)("h3",{id:"\u5207\u7247\u7684\u5b9a\u4e49"},"\u5207\u7247\u7684\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"var a []string  //\u58f0\u660e\u5b57\u7b26\u4e32\u5207\u7247\nfmt.Println(a == nil)  //[] true\nvar b = []int  //\u58f0\u660e\u6574\u578b\u5207\u7247\u5e76\u521d\u59cb\u5316\nfmt.Println(b == nil)  //[] false\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5207\u7247\u4e4b\u95f4\u4e0d\u80fd\u6bd4\u8f83\uff0c\u4e0d\u80fd\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"=="),"\u6765\u5224\u65ad\u4e8c\u4e2a\u5207\u7247\u662f\u5426\u542b\u6709\u76f8\u7b49\u5143\u7d20\uff0c\u53ef\u4ee5\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"nil"),"\u6bd4\u8f83\uff0c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"nil"),"\u503c\u7684\u5207\u7247\u6ca1\u6709\u5e95\u5c42\u6570\u7ec4\uff0c\u957f\u5ea6\u548c\u5bb9\u91cf\u90fd\u662f0")),(0,l.kt)("h3",{id:"append"},"append"),(0,l.kt)("p",null,"append()\u53ef\u4ee5\u4e3a\u5207\u7247\u52a8\u6001\u6dfb\u52a0\u5143\u7d20"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"var a []int  //\u96f6\u503c\u5207\u7247\u53ef\u4ee5\u5728append()\u51fd\u6570\u76f4\u63a5\u4f7f\u7528\uff0c\u65e0\u9700\u521d\u59cb\u5316\na = append(a, 1)  //\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\na = append(a, 2, 3, 4)  //\u6dfb\u52a0\u591a\u4e2a\u5143\u7d20\nvar s = []int{5, 6, 7}\na = append(a, s...)  //\u6dfb\u52a0\u5207\u7247\u4e2d\u7684\u5143\u7d20\n")),(0,l.kt)("h3",{id:"\u5220\u9664"},"\u5220\u9664"),(0,l.kt)("p",null,"go\u8bed\u8a00\u4e2d\u6ca1\u6709\u5220\u9664\u5207\u7247\u5143\u7d20\u7684\u4e13\u7528\u65b9\u6cd5\uff0c\u53ef\u4ee5\u4f7f\u7528\u5207\u7247\u672c\u8eab\u7684\u7279\u6027\u6765\u5220\u9664\u5143\u7d20"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"var a = []int{1, 2, 3, 4, 5, 6, 7}\na = append(a[:2], a[5:]...)\n")),(0,l.kt)("h2",{id:"map"},"Map"),(0,l.kt)("p",null,"map\u662f\u4e00\u79cd\u65e0\u5e8f\u7684\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"key-value"),"\u7684\u6570\u636e\u7ed3\u6784\uff0cmap\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u5fc5\u987b\u521d\u59cb\u5316\u624d\u80fd\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'var a = make(map[string]int, 10)\na["go"] = 10\n\n// \u5224\u65admap\u952e\u662f\u5426\u5b58\u5728\nvalue, ok := a["go"]\nif ok {\n    fmt.Println(value)\n    } else {\n        fmt.Println("false")\n    }\n')),(0,l.kt)("h3",{id:"delete\u51fd\u6570"},"delete\u51fd\u6570"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"delete()"),"\u5185\u5efa\u51fd\u6570\u4ecemap\u4e2d\u5220\u9664\u4e00\u7ec4\u952e\u503c\u5bf9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},"delete(map, key)\n// map\u8868\u793a\u8981\u5220\u9664\u952e\u503c\u5bf9\u7684map\n// key\u8868\u793a\u8981\u5220\u9664\u952e\u503c\u5bf9\u7684key\n")))}d.isMDXComponent=!0}}]);