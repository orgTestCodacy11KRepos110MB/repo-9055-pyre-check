"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>c});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),c=function(e){return function(n){var t=m(n.components);return o.createElement(e,i({},n,{components:t}))}},m=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(t),p=r,f=c["".concat(a,".").concat(p)]||c[p]||u[p]||i;return t?o.createElement(f,l(l({ref:n},d),{},{components:t})):o.createElement(f,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19733:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>m,toc:()=>p,default:()=>h});var o,r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=t(44256),s=["components"],d={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},c=void 0,m={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Pyre can be run without a configuration (see Command Line Arguments) but we do recommend that you create a configuration (see Getting Started) and commit that to your version control system to make sure everyone working on your project is using the same settings.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"pyre",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Types in Python",permalink:"/docs/types-in-python"}},p=[{value:"Configuration Files",id:"configuration-files",children:[{value:"The Global Configuration",id:"the-global-configuration",children:[]},{value:"Local Configurations",id:"local-configurations",children:[]}]},{value:"Command Line Arguments",id:"command-line-arguments",children:[{value:"Commands",id:"commands",children:[]},{value:"Commonly Used Flags",id:"commonly-used-flags",children:[]}]}],u=(o="FbConfiguration",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),f={toc:p};function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)(u,{mdxType:"FbConfiguration"})),(0,a.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"Pyre can be run without a configuration (see ",(0,a.mdx)("a",{parentName:"p",href:"/docs/configuration#command-line-arguments"},"Command Line Arguments"),") but we do recommend that you create a configuration (see ",(0,a.mdx)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started"),") and commit that to your version control system to make sure everyone working on your project is using the same settings."),(0,a.mdx)("h2",{id:"configuration-files"},"Configuration Files"),(0,a.mdx)("p",null,"Pyre has two types of configurations: a ",(0,a.mdx)("em",{parentName:"p"},"global")," configuration covering the full project, and ",(0,a.mdx)("em",{parentName:"p"},"local")," configurations that apply to subdirectories of the project. In most cases you will only need a global configuration but local configurations can be useful if you are dealing with a big repository containing heterogeneous projects."),(0,a.mdx)("h3",{id:"the-global-configuration"},"The Global Configuration"),(0,a.mdx)("p",null,"The global configuration is a ",(0,a.mdx)("inlineCode",{parentName:"p"},".pyre_configuration")," file sitting at the root of your project. Running Pyre anywhere inside your project directory will use the settings in this global configuration. You can generate an initial configuration in your project directory with"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ pyre init\n")),(0,a.mdx)("p",null,"The configuration is a ",(0,a.mdx)("inlineCode",{parentName:"p"},"JSON")," file. For example,"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "source_directories": [\n    "."\n  ],\n  "search_path": [\n    "/external/library",\n    {"site-package": "foo"}\n  ]\n}\n')),(0,a.mdx)("p",null,"specifies that the code Pyre checks is in the directory of the configuration and that Pyre should look in an additional directory as well as the ",(0,a.mdx)("inlineCode",{parentName:"p"},"foo")," package installed in your environment for library code."),(0,a.mdx)("p",null,"You specify additional information to configure Pyre. The following fields are supported:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"source_directories"),": List of paths to type check."),(0,a.mdx)("p",{parentName:"li"},"Note: Pyre assumes that all imports are relative to the given source directory. For example, if your source directory is ",(0,a.mdx)("inlineCode",{parentName:"p"},"root/directory"),", then an import statement ",(0,a.mdx)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",(0,a.mdx)("inlineCode",{parentName:"p"},"root.directory.module"),". If you wish to set a different import root for your source directory, you can provide an object ",(0,a.mdx)("inlineCode",{parentName:"p"},'{"import_root": "root", "source": "directory"}')," instead of ",(0,a.mdx)("inlineCode",{parentName:"p"},'"root/directory"'),". In this case, ",(0,a.mdx)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",(0,a.mdx)("inlineCode",{parentName:"p"},"root.module"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"search_path"),": List of paths to Python modules to include in the typing\nenvironment. ",(0,a.mdx)("inlineCode",{parentName:"p"},"search_path")," takes precendence over ",(0,a.mdx)("inlineCode",{parentName:"p"},"source_directories")," and the order within the search path indicates precedence. Individual items in the list can take one of the following forms:"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"A plain string, representing the path to the directory from which Pyre will search for modules."),(0,a.mdx)("li",{parentName:"ul"},"An object ",(0,a.mdx)("inlineCode",{parentName:"li"},'{"import_root": "root", "source": "directory"}'),", which can be used to control import root of the search path. See explaination for ",(0,a.mdx)("inlineCode",{parentName:"li"},"source_directories"),"."),(0,a.mdx)("li",{parentName:"ul"},"An object ",(0,a.mdx)("inlineCode",{parentName:"li"},'{"site-package": "package_name"}'),". It is equivalent to ",(0,a.mdx)("inlineCode",{parentName:"li"},'{"import_root": "site_root", "source": "package_name"}'),", where ",(0,a.mdx)("inlineCode",{parentName:"li"},"site_root")," is the return value of ",(0,a.mdx)("a",{parentName:"li",href:"https://docs.python.org/3/library/site.html#site.getsitepackages"},(0,a.mdx)("inlineCode",{parentName:"a"},"site.getsitepackages()")),". This can be useful when you want to add installed ",(0,a.mdx)("inlineCode",{parentName:"li"},"pip")," packages as a dependency to your project."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"exclude"),": List of regular expressions such as ",(0,a.mdx)("inlineCode",{parentName:"p"},'".*\\/node_modules\\/.*"')," which\nspecify files and directories that should be completely ignored by Pyre. The\nregular expression will be matched against the ",(0,a.mdx)("em",{parentName:"p"},"full")," path of files as opposed\nto their relative path.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"ignore_all_errors"),": A list of paths to omit from type-checking. This may be\nuseful for generated files, virtualenv directories, etc.  These should be paths\nrelative to the location of the configuration file (or the local configuration\nif applicable) and support globs. ",(0,a.mdx)("strong",{parentName:"p"},"Note"),": Files\nmatching these paths will still be processed (i.e. type and module names in those files are still visible to Pyre). Please refer to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"exclude"),"\nconfiguration item if you have files that are intended to be hidden from Pyre.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"binary"),": Location of Pyre's native binary.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"logger"),": Pyre will invoke this exectuable on every run, passing it statistics in JSON format.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"typeshed"),": Path to the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/python/typeshed"},"Typeshed")," standard library, which\nprovides typed stubs for library functions.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"workers"),": Number of workers to spawn for multiprocessing.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"extensions"),": Consider extensions in this list equivalent to ",(0,a.mdx)("inlineCode",{parentName:"p"},".py")," for type checking.\nEmpty string indicates extensionless files.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"strict"),": Setting this to ",(0,a.mdx)("inlineCode",{parentName:"p"},"true")," will make ",(0,a.mdx)("a",{parentName:"p",href:"/docs/types-in-python#strict-mode"},"strict mode")," the default in your project."))),(0,a.mdx)("h3",{id:"local-configurations"},"Local Configurations"),(0,a.mdx)("p",null,"If you have sub-projects within your project root that you would like to run Pyre on, you\ncan create a ",(0,a.mdx)("inlineCode",{parentName:"p"},".pyre_configuration.local")," at the root of your subproject and override any\nof the fields set in ",(0,a.mdx)("inlineCode",{parentName:"p"},".pyre_configuration")," above. If you are using local configurations, your\n",(0,a.mdx)("inlineCode",{parentName:"p"},".pyre_configuration")," should not specify any sources itself."),(0,a.mdx)("p",null,"When calling Pyre, the nearest local configuration at- or above the current directory will be used.\nYou can use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--local-configuration")," (or ",(0,a.mdx)("inlineCode",{parentName:"p"},"-l"),") flag to invoke Pyre on a project that includes a\nlocal configuration, while outside its source directory. It works like ",(0,a.mdx)("inlineCode",{parentName:"p"},"make -C"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ ls project\n  .pyre_configuration.local   project_file.py   ...\n$ pyre -l project\n  Checking...\n")),(0,a.mdx)("h4",{id:"nested-local-configurations"},"Nested Local Configurations"),(0,a.mdx)("p",null,"Nesting local configurations is not supported. The configuration should live at the root of your\nproject unit and inclusion/exclusion of files from type checking can be done by specifying sources, using\n",(0,a.mdx)("inlineCode",{parentName:"p"},"ignore_all_errors"),", or by adding ",(0,a.mdx)("a",{parentName:"p",href:"/docs/errors#suppressing-individual-errors"},"local suppression"),"."),(0,a.mdx)("h2",{id:"command-line-arguments"},"Command Line Arguments"),(0,a.mdx)("p",null,"You can get a full and current list of options to run Pyre by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"pyre --help"),". The following is a list of commonly used commands and options."),(0,a.mdx)("h3",{id:"commands"},"Commands"),(0,a.mdx)("p",null,"Pyre comes with a couple commands that can be invoked with ",(0,a.mdx)("inlineCode",{parentName:"p"},"pyre <COMMAND>"),"."),(0,a.mdx)("p",null,"The first command you might come in contact with is"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"initialize"),", ",(0,a.mdx)("inlineCode",{parentName:"li"},"init"),": Initial setup of a configuration for a project.")),(0,a.mdx)("p",null,"If ",(0,a.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install/"},"Watchman")," is\ninstalled, running Pyre with no positional arguments defaults to ",(0,a.mdx)("inlineCode",{parentName:"p"},"incremental"),",\notherwise defaults to check."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"check"),": Run Pyre end-to-end, i.e. ",(0,a.mdx)("em",{parentName:"li"},"not")," incrementally."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"incremental"),": Run Pyre incrementally. When invoked for the first time, the command will automatically start a server listening to changes to the filesystem. Subsequent invocations will be faster.")),(0,a.mdx)("p",null,"When Pyre is run incrementally, you can control the Pyre's ",(0,a.mdx)("em",{parentName:"p"},"server")," working in the background with the following commands."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"start"),": Start the Pyre server."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"stop"),": Stop the Pyre server."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"restart"),": Restart the Pyre server."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"servers"),": List all currently running Pyre servers."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"kill"),": In case somethign goes wrong and the server becomes unresponsivbe ",(0,a.mdx)("inlineCode",{parentName:"li"},"kill")," will attempt to terminate any processes."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"rage"),": Print server logs for debugging or for context when reporting server errors.")),(0,a.mdx)("h3",{id:"commonly-used-flags"},"Commonly Used Flags"),(0,a.mdx)("p",null,"These flags can be passed in before any of the positional arguments above. For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre --source-directory "." --noninteractive check\n$ pyre --source-directory "." restart\n')),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--local-configuration LOCAL_CONFIGURATION"),": Call Pyre specifying the path to a local\nconfiguration.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--noninteractive"),": Disable interactive logging, which by default overwrites intermediate\nlogging output and adds colors for a more streamlined user experience.\nNon-interactive mode ensures all terminal output remains visible.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--output {text, json}"),": Formatting for error return values. Defaults to text.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--search-path SEARCH_PATH"),": Provide additional stubs or modules external to the project\nbeing type-checked. Can also be set in ",(0,a.mdx)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--source-directory SOURCE_DIRECTORY"),": Provide a path to the source root to check. This can also\nbe specified in ",(0,a.mdx)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--typeshed TYPESHED"),": Path to the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/python/typeshed"},"Typeshed")," standard library,\nwhich provides typed stubs for library functions. This can also be set in ",(0,a.mdx)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--verbose"),": Enable verbose logging. Most useful when used in conjunction with ",(0,a.mdx)("inlineCode",{parentName:"p"},"--noninteractive"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"--version"),": Print the current version of Pyre.")))))}h.isMDXComponent=!0},47596:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(n){i(n)}}function l(e){try{s(o.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}s((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(11737);n.getSpecInfo=function(e){return o(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(n){i(n)}}function l(e){try{s(o.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}s((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let o=!1,r=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));o||(o=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=r++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),t}))}},24855:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(n){i(n)}}function l(e){try{s(o.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}s((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const r=t(11737);n.reportContentCopied=function(e){return o(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return o(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(o){}}))}},44256:function(e,n,t){var o=this&&this.__createBinding||(Object.create?function(e,n,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,o){void 0===o&&(o=t),e[o]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855));const a=["internal","external"];function l(e){return d(e),c()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function c(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=d,n.isInternal=c,n.FbInternalOnly=function(e){return c()?e.children:null},n.OssOnly=function(e){return c()?null:e.children}},17483:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(n){i(n)}}function l(e){try{s(o.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}s((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const r=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return o(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:o}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:o}})}))}}}]);