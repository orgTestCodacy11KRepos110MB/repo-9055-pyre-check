(self.webpackChunk=self.webpackChunk||[]).push([[331],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,f=d["".concat(a,".").concat(p)]||d[p]||m[p]||i;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83070:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,metadata:()=>d,toc:()=>u,default:()=>f});var r,o=t(22122),i=t(19756),a=(t(67294),t(3905)),c=t(44256),s=["components"],l={id:"code-6065-public",title:"6065 - Commandline arguments injection",sidebar_label:"6065 - Commandline arguments injection"},d={unversionedId:"warning_codes/code-6065-public",id:"warning_codes/code-6065-public",isDocsHomePage:!1,title:"6065 - Commandline arguments injection",description:"TL;DR",source:"@site/docs/warning_codes/6065.md",sourceDirName:"warning_codes",slug:"/warning_codes/code-6065-public",permalink:"/docs/warning_codes/code-6065-public",editUrl:"https://github.com/facebook/pyre-check/tree/master/documentation/website/docs/warning_codes/6065.md",version:"current",sidebar_label:"6065 - Commandline arguments injection",frontMatter:{id:"code-6065-public",title:"6065 - Commandline arguments injection",sidebar_label:"6065 - Commandline arguments injection"},sidebar:"pysa",previous:{title:"5001 - Code Injection",permalink:"/docs/warning_codes/code-5001-public"},next:{title:"Additional Resources",permalink:"/docs/pysa-additional-resources"}},u=[{value:"TL;DR",id:"tldr",children:[{value:"ISSUE",id:"issue",children:[]},{value:"EXAMPLE",id:"example",children:[]},{value:"RECOMMENDED SOLUTION",id:"recommended-solution",children:[]}]}],p=(r="Fb6065Solution",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),m={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.mdx)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"tldr"},"TL;DR"),(0,a.mdx)("p",null,"This category indicates that user-controlled input flows into a command-line argument used to execute an external process. Unlike category 5001, this leads to a Remote Code Execution issue only in specific cases (e.g., ",(0,a.mdx)("inlineCode",{parentName:"p"},"shell=True")," parameter or when executing particular binaries)."),(0,a.mdx)("h3",{id:"issue"},"ISSUE"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"subprocess.Popen"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"subprocess.run"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"subprocess.call"),", and other functions do a good job in preventing by default the command injection issues we described in category ",(0,a.mdx)("a",{parentName:"p",href:"/docs/warning_codes/code-5001-public"},"5001"),". The values supplied in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"args")," parameter (excluding the first which represents the executable) are considered only as arguments and not as commands to be interpreted in a system shell (more details in the python ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library/subprocess.html#subprocess.Popen"},"documentation"),"). However, this safe behaviour can be manually bypassed by specifying the ",(0,a.mdx)("inlineCode",{parentName:"p"},"shell=True")," parameter, which reintroduces the command injection issue."),(0,a.mdx)("h3",{id:"example"},"EXAMPLE"),(0,a.mdx)("p",null,"The following code is intended to run the spellcheck binary on a user provided text:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def spellcheck(request: HttpRequest):\n    command = \"/usr/bin/spellcheck -l {}\".format(request.GET['text'])\n    return subprocess.run(command, shell=True)\n")),(0,a.mdx)("p",null,"An attacker, however, can supply a path such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"'test' && rm -rf /"),", which would result in the following command being executed: ",(0,a.mdx)("inlineCode",{parentName:"p"},"/usr/bin/spellcheck -l 'test' && rm -rf /"),". Since this command is executed in a system shell the ",(0,a.mdx)("inlineCode",{parentName:"p"},"rm -rf /")," command will be executed after the spellcheck command."),(0,a.mdx)("h3",{id:"recommended-solution"},"RECOMMENDED SOLUTION"),(0,a.mdx)(c.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"In general, we recommend avoiding creation of a subprocess and prefer using the API provided by the language.\nHowever, if you need to create a subprocess, we recommend using a safe API such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"subprocess.run")," and avoiding use of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"shell=True")," argument. If this is not possible, we recommend ensuring that the user-controlled values are shell-escaped with ",(0,a.mdx)("inlineCode",{parentName:"p"},"shlex.quote"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def spellcheck(request: HttpRequest):\n    command = ["/usr/bin/spellcheck", "-l", request.GET[\'text\']]\n    subprocess.run(command)\n')),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"NOTE: be conscious of the fact that arguments to an executable can still lead to code execution (e.g., the ",(0,a.mdx)("inlineCode",{parentName:"em"},"-exec")," argument of ",(0,a.mdx)("inlineCode",{parentName:"em"},"find"),")."))),(0,a.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)(p,{mdxType:"Fb6065Solution"})))}f.isMDXComponent=!0},47596:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){"use strict";var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,o=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=o++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),t}))}},24855:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855));const a=["internal","external"];function c(e){return l(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=l,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}},17483:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);