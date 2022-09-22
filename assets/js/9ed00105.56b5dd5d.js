"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>d});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){return function(n){var t=p(n.components);return i.createElement(e,r({},n,{components:t}))}},p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return t?i.createElement(h,l(l({ref:n},s),{},{components:t})):i.createElement(h,l({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},19733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),o=["components"],l={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},m=void 0,s={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Pyre can be run without a configuration (see Command Line Arguments) but we do recommend that you create a configuration (see Getting Started) and commit that to your version control system to make sure everyone working on your project is using the same settings.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"pyre",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Types in Python",permalink:"/docs/types-in-python"}},d={},p=[{value:"The Pyre Configuration",id:"the-pyre-configuration",level:2},{value:"Command Line Arguments",id:"command-line-arguments",level:2},{value:"Commands",id:"commands",level:3},{value:"Commonly Used Flags",id:"commonly-used-flags",level:3},{value:"Working with Multi-Project Repositories",id:"working-with-multi-project-repositories",level:2}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.mdx)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Pyre can be run without a configuration (see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/configuration#command-line-arguments"},"Command Line Arguments"),") but we do recommend that you create a configuration (see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started"),") and commit that to your version control system to make sure everyone working on your project is using the same settings."),(0,r.mdx)("h2",{id:"the-pyre-configuration"},"The Pyre Configuration"),(0,r.mdx)("p",null,"The Pyre configuration is a ",(0,r.mdx)("inlineCode",{parentName:"p"},".pyre_configuration")," file sitting at the root of your project. Running Pyre anywhere inside your project directory will use the settings in this configuration. You can generate an initial configuration in your project directory with"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"$ pyre init\n")),(0,r.mdx)("p",null,"The configuration is a ",(0,r.mdx)("inlineCode",{parentName:"p"},"JSON")," file. For example,"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "source_directories": [\n    "."\n  ],\n  "search_path": [\n    "/external/library",\n    {"site-package": "foo"}\n  ]\n}\n')),(0,r.mdx)("p",null,"specifies that the code Pyre checks is in the directory of the configuration and that Pyre should look in an additional directory as well as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"foo")," package installed in your environment for library code."),(0,r.mdx)("p",null,"You specify additional information to configure Pyre. The following fields are supported:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"source_directories"),": List of path to type check. Path can be a glob, for example, ",(0,r.mdx)("inlineCode",{parentName:"p"},'"./foo*"'),"."),(0,r.mdx)("p",{parentName:"li"},"Note: Pyre assumes that all imports are relative to the given source directory. For example, if your source directory is ",(0,r.mdx)("inlineCode",{parentName:"p"},"root/directory"),", then an import statement ",(0,r.mdx)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",(0,r.mdx)("inlineCode",{parentName:"p"},"root.directory.module"),". If you wish to set a different import root for your source directory, you can provide an object ",(0,r.mdx)("inlineCode",{parentName:"p"},'{"import_root": "root", "source": "directory"}')," instead of ",(0,r.mdx)("inlineCode",{parentName:"p"},'"root/directory"'),". In this case, ",(0,r.mdx)("inlineCode",{parentName:"p"},"import module")," will be looking to import ",(0,r.mdx)("inlineCode",{parentName:"p"},"root.module"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"site_package_search_strategy"),": Configure how Pyre looks for type checking dependencies installed (e.g. by ",(0,r.mdx)("inlineCode",{parentName:"p"},"pip"),") on the local Python environment. Dependent libraries will not be type-checked, but they are consulted to determine the existence of globals/functions/classes. The value of this option can take one of the following forms:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"none"'),". This indicates that Pyre should not attempt to search for any additional dependencies. Use this option if you know exactly what packages you depend on, and want to manually specify them with the ",(0,r.mdx)("inlineCode",{parentName:"li"},"search_path")," option."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"all"'),". Pyre will pull in the entire site package roots (as specified in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"site_roots")," option) as dependencies. Any libraries installed as site packages, regardless of whether they are typed or not, will be examined. Use this option if you do not know exactly which packages your code depend on, but want to make sure that no dependencies are missing."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"pep561"'),". Similar to ",(0,r.mdx)("inlineCode",{parentName:"li"},'"all"')," but instead of pull in everything, Pyre will only pull in typed packages as dependencies according to rules specified in ",(0,r.mdx)("a",{parentName:"li",href:"https://peps.python.org/pep-0561/"},"PEP 561"),". This is usually the recommended option, as the behavior is closer to what other type checkers would do by default.")),(0,r.mdx)("p",{parentName:"li"},"Note: If incremental check is used, and the search strategy is set to ",(0,r.mdx)("inlineCode",{parentName:"p"},'"pep561"'),", then a ",(0,r.mdx)("inlineCode",{parentName:"p"},"pyre restart")," is needed when new dependencies are installed -- Pyre will not automatically discover the new package by default. This is a limitation of the current implementation of Pyre and it may be lifted in the future.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"site_roots"),": List of path to where packages are installed."),(0,r.mdx)("p",{parentName:"li"},"If not specified, Pyre will consult the current Python interpreter using ",(0,r.mdx)("inlineCode",{parentName:"p"},"site.getusersitepackages()")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"site.getsitepackages()"),", which should work in most cases. But if your codebase uses a different Python interpreter, you may want to specify this option manually so Pyre knows the correct location to look for site packages.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"search_path"),": List of additional paths to Python modules to include as dependencies. ",(0,r.mdx)("inlineCode",{parentName:"p"},"search_path")," takes precendence over ",(0,r.mdx)("inlineCode",{parentName:"p"},"source_directories")," and the order within the search path indicates precedence. Individual items in the list can take one of the following forms:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"A plain string, representing a path to the directories from which Pyre will search for modules. The paths can be globs, for example, ",(0,r.mdx)("inlineCode",{parentName:"li"},'"./foo*"'),"."),(0,r.mdx)("li",{parentName:"ul"},"An object ",(0,r.mdx)("inlineCode",{parentName:"li"},'{"import_root": "root", "source": "directory"}'),", which can be used to control import root of the search path. See explaination for ",(0,r.mdx)("inlineCode",{parentName:"li"},"source_directories"),"."),(0,r.mdx)("li",{parentName:"ul"},"An object ",(0,r.mdx)("inlineCode",{parentName:"li"},'{"site-package": "package_name"}'),". It is equivalent to ",(0,r.mdx)("inlineCode",{parentName:"li"},'{"import_root": "site_root", "source": "package_name"}'),", where ",(0,r.mdx)("inlineCode",{parentName:"li"},"site_root")," is the first element in ",(0,r.mdx)("inlineCode",{parentName:"li"},"site_roots")," that has the site package named ",(0,r.mdx)("inlineCode",{parentName:"li"},"package_name")," installed. This can be useful when you want to manually specify which ",(0,r.mdx)("inlineCode",{parentName:"li"},"pip")," package you want the type checker to see as a dependency to your project (in which case it is recommended to set ",(0,r.mdx)("inlineCode",{parentName:"li"},"site_package_search_strategy")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},'"none"')," to disable site package auto discovery)."),(0,r.mdx)("li",{parentName:"ul"},"An object ",(0,r.mdx)("inlineCode",{parentName:"li"},'{"site-package": "package_name", "is_toplevel_module": true}'),", to specify the name as a single-file module found in the site-root rather than as a package."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"exclude"),": List of regular expressions such as ",(0,r.mdx)("inlineCode",{parentName:"p"},'".*\\/node_modules\\/.*"')," which\nspecify files and directories that should be completely ignored by Pyre. The\nregular expression will be matched against the ",(0,r.mdx)("em",{parentName:"p"},"full")," path of files as opposed\nto their relative path.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"ignore_all_errors"),": A list of paths to omit from type-checking. This may be\nuseful for generated files, virtualenv directories, etc.  These should be paths\nrelative to the location of the configuration file and support globs. ",(0,r.mdx)("strong",{parentName:"p"},"Note"),": Files\nmatching these paths will still be processed (i.e. type and module names in those files are still visible to Pyre). Please refer to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"exclude"),"\nconfiguration item if you have files that are intended to be hidden from Pyre.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"binary"),": Location of Pyre's native binary.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"logger"),": Pyre will invoke this exectuable on every run, passing it statistics in JSON format.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"typeshed"),": Path to the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/python/typeshed"},"Typeshed")," standard library, which\nprovides typed stubs for library functions.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"workers"),": Number of workers to spawn for multiprocessing.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"extensions"),": Consider extensions in this list equivalent to ",(0,r.mdx)("inlineCode",{parentName:"p"},".py")," for type checking.\nEmpty string indicates extensionless files.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"strict"),": Setting this to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true")," will make ",(0,r.mdx)("a",{parentName:"p",href:"/docs/types-in-python#strict-mode"},"strict mode")," the default in your project."))),(0,r.mdx)("h2",{id:"command-line-arguments"},"Command Line Arguments"),(0,r.mdx)("p",null,"You can get a full and current list of options to run Pyre by running ",(0,r.mdx)("inlineCode",{parentName:"p"},"pyre --help"),". The following is a list of commonly used commands and options."),(0,r.mdx)("h3",{id:"commands"},"Commands"),(0,r.mdx)("p",null,"Pyre comes with a couple commands that can be invoked with ",(0,r.mdx)("inlineCode",{parentName:"p"},"pyre <COMMAND>"),"."),(0,r.mdx)("p",null,"The first command you might come in contact with is"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"initialize"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"init"),": Initial setup of a configuration for a project.")),(0,r.mdx)("p",null,"If ",(0,r.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install/"},"Watchman")," is\ninstalled, running Pyre with no positional arguments defaults to ",(0,r.mdx)("inlineCode",{parentName:"p"},"incremental"),",\notherwise defaults to check."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"check"),": Run Pyre end-to-end, i.e. ",(0,r.mdx)("em",{parentName:"li"},"not")," incrementally."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"incremental"),": Run Pyre incrementally. When invoked for the first time, the command will automatically start a server listening to changes to the filesystem. Subsequent invocations will be faster.")),(0,r.mdx)("p",null,"When Pyre is run incrementally, you can control the Pyre's ",(0,r.mdx)("em",{parentName:"p"},"server")," working in the background with the following commands."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"start"),": Start the Pyre server."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"stop"),": Stop the Pyre server."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"restart"),": Restart the Pyre server."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"servers"),": List all currently running Pyre servers."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"kill"),": In case somethign goes wrong and the server becomes unresponsivbe ",(0,r.mdx)("inlineCode",{parentName:"li"},"kill")," will attempt to terminate any processes."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"rage"),": Print server logs for debugging or for context when reporting server errors.")),(0,r.mdx)("h3",{id:"commonly-used-flags"},"Commonly Used Flags"),(0,r.mdx)("p",null,"These flags can be passed in before any of the positional arguments above. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre --source-directory "." --noninteractive check\n$ pyre --source-directory "." restart\n')),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"--noninteractive"),": Disable interactive logging, which by default overwrites intermediate\nlogging output and adds colors for a more streamlined user experience.\nNon-interactive mode ensures all terminal output remains visible.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"--output {text, json, sarif}"),": Formatting for error return values. Defaults to text.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"--search-path SEARCH_PATH"),": Provide additional stubs or modules external to the project\nbeing type-checked. Can also be set in ",(0,r.mdx)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"--source-directory SOURCE_DIRECTORY"),": Provide a path to the source root to check. This can also\nbe specified in ",(0,r.mdx)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"--typeshed TYPESHED"),": Path to the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/python/typeshed"},"Typeshed")," standard library,\nwhich provides typed stubs for library functions. This can also be set in ",(0,r.mdx)("inlineCode",{parentName:"p"},".pyre_configuration"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"--version"),": Print the current version of Pyre."))),(0,r.mdx)("h2",{id:"working-with-multi-project-repositories"},"Working with Multi-Project Repositories"),(0,r.mdx)("p",null,"If you have a single repository with multiple independent Python projects, we recommend you\nuse a separate ",(0,r.mdx)("inlineCode",{parentName:"p"},".pyre_configuration")," for each one. This allows each project to be\ntype checked independently."),(0,r.mdx)("p",null,"If you use virtual environments to manage separate dependencies for each project, you can install\n",(0,r.mdx)("inlineCode",{parentName:"p"},"pyre")," as a development dependency in each one; by default Pyre will detect system packages\nfrom the environment it is installed in, so this will cause each project to detect the\ncorrect dependencies (assuming you activate the virtual environment before running Pyre)."))}u.isMDXComponent=!0}}]);