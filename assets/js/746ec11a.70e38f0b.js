"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7331],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){return function(n){var t=p(n.components);return r.createElement(e,a({},n,{components:t}))}},p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,s(s({ref:n},l),{},{components:t})):r.createElement(h,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},76387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r,o=t(83117),a=t(80102),i=(t(67294),t(3905)),s=t(86341),c=["components"],l={id:"code-6065-public",title:"6065 - Commandline arguments injection",sidebar_label:"6065 - Commandline arguments injection"},d=void 0,p={unversionedId:"warning_codes/code-6065-public",id:"warning_codes/code-6065-public",title:"6065 - Commandline arguments injection",description:"TL;DR",source:"@site/docs/warning_codes/6065.md",sourceDirName:"warning_codes",slug:"/warning_codes/code-6065-public",permalink:"/docs/warning_codes/code-6065-public",draft:!1,editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/warning_codes/6065.md",tags:[],version:"current",frontMatter:{id:"code-6065-public",title:"6065 - Commandline arguments injection",sidebar_label:"6065 - Commandline arguments injection"},sidebar:"pysa",previous:{title:"5001 - Code Injection",permalink:"/docs/warning_codes/code-5001-public"},next:{title:"Additional Resources",permalink:"/docs/pysa-additional-resources"}},m={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"ISSUE",id:"issue",level:3},{value:"EXAMPLE",id:"example",level:3},{value:"RECOMMENDED SOLUTION",id:"recommended-solution",level:3}],h=(r="Fb6065Solution",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:u};function b(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.mdx)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"tldr"},"TL;DR"),(0,i.mdx)("p",null,"This category indicates that user-controlled input flows into a command-line argument used to execute an external process. Unlike category 5001, this leads to a Remote Code Execution issue only in specific cases (e.g., ",(0,i.mdx)("inlineCode",{parentName:"p"},"shell=True")," parameter or when executing particular binaries)."),(0,i.mdx)("h3",{id:"issue"},"ISSUE"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"subprocess.Popen"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"subprocess.run"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"subprocess.call"),", and other functions do a good job in preventing by default the command injection issues we described in category ",(0,i.mdx)("a",{parentName:"p",href:"/docs/warning_codes/code-5001-public"},"5001"),". The values supplied in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"args")," parameter (excluding the first which represents the executable) are considered only as arguments and not as commands to be interpreted in a system shell (more details in the python ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library/subprocess.html#subprocess.Popen"},"documentation"),"). However, this safe behaviour can be manually bypassed by specifying the ",(0,i.mdx)("inlineCode",{parentName:"p"},"shell=True")," parameter, which reintroduces the command injection issue."),(0,i.mdx)("h3",{id:"example"},"EXAMPLE"),(0,i.mdx)("p",null,"The following code is intended to run the spellcheck binary on a user provided text:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def spellcheck(request: HttpRequest):\n    command = \"/usr/bin/spellcheck -l {}\".format(request.GET['text'])\n    return subprocess.run(command, shell=True)\n")),(0,i.mdx)("p",null,"An attacker, however, can supply a path such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"'test' && rm -rf /"),", which would result in the following command being executed: ",(0,i.mdx)("inlineCode",{parentName:"p"},"/usr/bin/spellcheck -l 'test' && rm -rf /"),". Since this command is executed in a system shell the ",(0,i.mdx)("inlineCode",{parentName:"p"},"rm -rf /")," command will be executed after the spellcheck command."),(0,i.mdx)("h3",{id:"recommended-solution"},"RECOMMENDED SOLUTION"),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"In general, we recommend avoiding creation of a subprocess and prefer using the API provided by the language.\nHowever, if you need to create a subprocess, we recommend using a safe API such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"subprocess.run")," and avoiding use of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"shell=True")," argument. If this is not possible, we recommend ensuring that the user-controlled values are shell-escaped with ",(0,i.mdx)("inlineCode",{parentName:"p"},"shlex.quote"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def spellcheck(request: HttpRequest):\n    command = ["/usr/bin/spellcheck", "-l", request.GET[\'text\']]\n    subprocess.run(command)\n')),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"NOTE: be conscious of the fact that arguments to an executable can still lead to code execution (e.g., the ",(0,i.mdx)("inlineCode",{parentName:"em"},"-exec")," argument of ",(0,i.mdx)("inlineCode",{parentName:"em"},"find"),")."))),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(h,{mdxType:"Fb6065Solution"})))}b.isMDXComponent=!0}}]);