"use strict";(self.webpackChunkzhengwe=self.webpackChunkzhengwe||[]).push([[558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={slug:"mysql",title:"Mysql \u5e38\u7528\u8bed\u53e5",authors:["innocence"],tags:["linux"]},o=void 0,i={permalink:"/mysql",source:"@site/blog/2023-12-14/index.md",title:"Mysql \u5e38\u7528\u8bed\u53e5",description:"Mysql\u7684infromation_schema\u5e93\uff0c\u53ef\u4ee5\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u6bcf\u4e2a\u8868\u5360\u7528\u7684\u7a7a\u95f4\u3001\u8868\u8bb0\u5f55\u884c\u6570",date:"2023-12-14T00:00:00.000Z",formattedDate:"December 14, 2023",tags:[{label:"linux",permalink:"/tags/linux"}],readingTime:1.68,hasTruncateMarker:!1,authors:[{name:"Innocence",title:"zheng wei",url:"https://github.com/zhengwe.com",imageURL:"https://zhengwe.com/img/logo.svg",key:"innocence"}],frontMatter:{slug:"mysql",title:"Mysql \u5e38\u7528\u8bed\u53e5",authors:["innocence"],tags:["linux"]},nextItem:{title:"Nginx \u5e38\u7528\u914d\u7f6e",permalink:"/nginx"}},s={authorsImageUrls:[void 0]},c=[{value:"\u67e5\u770b\u6240\u6709\u5e93\u5927\u5c0f",id:"\u67e5\u770b\u6240\u6709\u5e93\u5927\u5c0f",level:4},{value:"\u67e5\u770b\u6307\u5b9a\u5e93\u5927\u5c0f",id:"\u67e5\u770b\u6307\u5b9a\u5e93\u5927\u5c0f",level:4},{value:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u5927\u5c0f",id:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u5927\u5c0f",level:4},{value:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u7d22\u5f15\u5927\u5c0f",id:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u7d22\u5f15\u5927\u5c0f",level:4},{value:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u7d22\u5f15\u5927\u5c0f",id:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u7d22\u5f15\u5927\u5c0f",level:4},{value:"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u7684\u60c5\u51b5",id:"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u7684\u60c5\u51b5",level:4},{value:"\u67e5\u770b\u975e Sleep \u72b6\u6001\u7684\u94fe\u63a5\uff0c\u6309\u6d88\u8017\u65f6\u95f4\u5012\u5e8f\u5c55\u793a",id:"\u67e5\u770b\u975e-sleep-\u72b6\u6001\u7684\u94fe\u63a5\u6309\u6d88\u8017\u65f6\u95f4\u5012\u5e8f\u5c55\u793a",level:4},{value:"\u67e5\u8be2\u6267\u884c\u65f6\u95f4\u8d85\u8fc72\u5206\u949f\u7684\u7ebf\u7a0b\uff0c\u7136\u540e\u62fc\u63a5\u6210kill\u8bed\u53e5",id:"\u67e5\u8be2\u6267\u884c\u65f6\u95f4\u8d85\u8fc72\u5206\u949f\u7684\u7ebf\u7a0b\u7136\u540e\u62fc\u63a5\u6210kill\u8bed\u53e5",level:4},{value:"\u5feb\u901f\u6740\u6b7b\u6240\u6709\u8fdb\u7a0b",id:"\u5feb\u901f\u6740\u6b7b\u6240\u6709\u8fdb\u7a0b",level:4}],m={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mysql\u7684infromation_schema\u5e93\uff0c\u53ef\u4ee5\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u6bcf\u4e2a\u8868\u5360\u7528\u7684\u7a7a\u95f4\u3001\u8868\u8bb0\u5f55\u884c\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TABLE_SCHEMA: \u6570\u636e\u5e93\u540d"),(0,l.kt)("li",{parentName:"ul"},"TABLE_NAME: \u8868\u540d"),(0,l.kt)("li",{parentName:"ul"},"ENGINE: \u4f7f\u7528\u7684\u5b58\u50a8\u5f15\u64ce"),(0,l.kt)("li",{parentName:"ul"},"TABLES_ROWS: \u8bb0\u5f55\u6570"),(0,l.kt)("li",{parentName:"ul"},"DATA_LENGTH: \u6570\u636e\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"INDEX_LENGTH: \u7d22\u5f15\u5927\u5c0f")),(0,l.kt)("h4",{id:"\u67e5\u770b\u6240\u6709\u5e93\u5927\u5c0f"},"\u67e5\u770b\u6240\u6709\u5e93\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"use information_schema;\nselect concat(round(sum(DATA_LENGTH/1024/1024),2),'MB') as data  from TABLES;\n")),(0,l.kt)("h4",{id:"\u67e5\u770b\u6307\u5b9a\u5e93\u5927\u5c0f"},"\u67e5\u770b\u6307\u5b9a\u5e93\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select concat(round(sum(DATA_LENGTH/1024/1024),2),'MB') as data  from TABLES where table_schema='xxx';\n")),(0,l.kt)("h4",{id:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u5927\u5c0f"},"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select concat(round(sum(DATA_LENGTH/1024/1024),2),'MB') as data  from TABLES where table_schema='xxx' and table_name='xxx';\n")),(0,l.kt)("h4",{id:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u7d22\u5f15\u5927\u5c0f"},"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u7d22\u5f15\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT(ROUND(SUM(index_length)/(1024*1024), 2), ' MB') AS 'Total Index Size' FROM TABLES  WHERE table_schema = 'xxx';\n")),(0,l.kt)("h4",{id:"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u7d22\u5f15\u5927\u5c0f"},"\u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u7d22\u5f15\u5927\u5c0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT(ROUND(SUM(index_length)/(1024*1024), 2), ' MB') AS 'Total Index Size' FROM TABLES  WHERE table_schema = 'xxx' and table_name='xxx';\n")),(0,l.kt)("h4",{id:"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u7684\u60c5\u51b5"},"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u7684\u60c5\u51b5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT(table_schema,'.',table_name) AS 'Table Name', CONCAT(ROUND(table_rows/1000000,4),'M') AS 'Number of Rows', CONCAT(ROUND(data_length/(1024*1024*1024),4),'G') AS 'Data Size', CONCAT(ROUND(index_length/(1024*1024*1024),4),'G') AS 'Index Size', CONCAT(ROUND((data_length+index_length)/(1024*1024*1024),4),'G') AS'Total'FROM information_schema.TABLES WHERE table_schema LIKE 'xxx';\n")),(0,l.kt)("h4",{id:"\u67e5\u770b\u975e-sleep-\u72b6\u6001\u7684\u94fe\u63a5\u6309\u6d88\u8017\u65f6\u95f4\u5012\u5e8f\u5c55\u793a"},"\u67e5\u770b\u975e Sleep \u72b6\u6001\u7684\u94fe\u63a5\uff0c\u6309\u6d88\u8017\u65f6\u95f4\u5012\u5e8f\u5c55\u793a"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"show full processlist"),"\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u94fe\u63a5\u60c5\u51b5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select id, db, user, host, command, time, state, info\nfrom information_schema.processlist\nwhere command != 'Sleep'\norder by time desc; \n")),(0,l.kt)("h4",{id:"\u67e5\u8be2\u6267\u884c\u65f6\u95f4\u8d85\u8fc72\u5206\u949f\u7684\u7ebf\u7a0b\u7136\u540e\u62fc\u63a5\u6210kill\u8bed\u53e5"},"\u67e5\u8be2\u6267\u884c\u65f6\u95f4\u8d85\u8fc72\u5206\u949f\u7684\u7ebf\u7a0b\uff0c\u7136\u540e\u62fc\u63a5\u6210kill\u8bed\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select concat('kill ', id, ';')\nfrom information_schema.processlist\nwhere command != 'Sleep'\nand time > 2*60\norder by time desc;\n")),(0,l.kt)("h4",{id:"\u5feb\u901f\u6740\u6b7b\u6240\u6709\u8fdb\u7a0b"},"\u5feb\u901f\u6740\u6b7b\u6240\u6709\u8fdb\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql -e "show full processlist;" -ss | awk \'{print "KILL "$1";"}\'| mysql\n')))}p.isMDXComponent=!0}}]);