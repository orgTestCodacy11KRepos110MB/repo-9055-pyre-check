"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[101],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,h=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7916:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"pysa-explore",title:"Exploring Taint Models Interactively",sidebar_label:"Exploring Taint Models Interactively"},s=void 0,p={unversionedId:"pysa-explore",id:"pysa-explore",isDocsHomePage:!1,title:"Exploring Taint Models Interactively",description:"Overview",source:"@site/docs/pysa_explore.md",sourceDirName:".",slug:"/pysa-explore",permalink:"/docs/pysa-explore",editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/pysa_explore.md",tags:[],version:"current",frontMatter:{id:"pysa-explore",title:"Exploring Taint Models Interactively",sidebar_label:"Exploring Taint Models Interactively"},sidebar:"pysa",previous:{title:"Additional Resources",permalink:"/docs/pysa-additional-resources"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"After Pysa's analysis is complete, the tool will output a detailed JSON with its final view of the taint of callables in addition to the issues it finds. We provide a script to explore these taint models called ",(0,o.mdx)("inlineCode",{parentName:"p"},"explore_pysa_models.py"),", which can give you insight into why Pysa thinks there might or might not be taint for a given callable."),(0,o.mdx)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.mdx)("p",null,"Before using the explore script, you should already have run Pysa on your codebase. For the purposes of this page, we will assume you stored it in ",(0,o.mdx)("inlineCode",{parentName:"p"},"/tmp/output_dir"),", e.g."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ pyre analyze --save-results-to /tmp/output_dir\n")),(0,o.mdx)("p",null,"After the analysis succeeds, Pysa will write a file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"/tmp/output_dir/taint-output.json"),", containing the taint of each callable in addition to the issues found. Let's load this JSON into our explore script:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python3 -i scripts/explore_pysa_models.py\n# Pysa Model Explorer\nAvailable commands:\n  index('taint-output.json')      Index all available models in the given taint output file or directory.\n  callables_containing('foo.bar') Find all callables containing the given string.\n  callables_matching(r'foo\\..*')  Find all callables matching the given regular expression.\n  get_model('foo.bar')            Get the model for the given callable.\n  print_model('foo.bar')          Pretty print the model for the given callable.\n  get_issues('foo.bar')           Get all issues within the given callable.\n  print_issues('foo.bar')         Pretty print the issues within the given callable.\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},">>> index('/tmp/output_dir')\nIndexing `/tmp/output_dir`\nIndexed 307120 models and 35357 issues\n")),(0,o.mdx)("p",null,"Once we've indexed our taint JSON, we're good to go! Let's investigate what models Pysa finds for HttpRequest. First, we'll need to get the full name of the relevant callables:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},">>> callables_containing('HttpRequest')\n['django.http.request.HttpRequest.__init__', 'django.http.request.HttpRequest.body', ...]\n>>> get_model('django.http.request.HttpRequest.__init_')\n{'callable': 'django.http.request.HttpRequest.__init__', 'sources': [], 'sinks': [], 'tito': [{'port': 'formal(self)', 'taint': [{'decl': None, 'leaves': [{'kind': 'LocalReturn', 'name': ''}]}]}]}\n")),(0,o.mdx)("p",null,"This (hard-to-parse) JSON is all that Pysa knows about the ",(0,o.mdx)("inlineCode",{parentName:"p"},"HttpRequest.__init__")," function. If you squint, you'll see that the model doesn't introduce any sources or sinks (as expected), but has taint-in-taint-out for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"self")," parameter."),(0,o.mdx)("p",null,"Let's take a look at ",(0,o.mdx)("inlineCode",{parentName:"p"},"body"),", a slightly more interesting function. We'll also swap to using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"print_model()")," function which will pretty print the output:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'>>> print_model(\'django.http.request.HttpRequest.body\')\n{\n  "callable": "django.http.request.HttpRequest.body",\n  "sources": [\n    {\n      "port": "result",\n      "taint": [\n        {\n          "decl": null,\n          "leaves": [\n            {\n              "kind": "UserControlled"\n            }\n          ]\n        },\n      ]\n    }\n  ],\n  "sinks": [],\n  ...\n')),(0,o.mdx)("p",null,"Much easier to read! This model shows that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"body")," property of HttpRequests returns a UserControlled source."),(0,o.mdx)("p",null,"You can also use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"get_issues"),", and corresponding pretty-printing ",(0,o.mdx)("inlineCode",{parentName:"p"},"print_issues")," functions to see all issues in a given callable."),(0,o.mdx)("p",null,"Note that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"get_issues")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"get_models")," functions return Python objects that you can manipulate:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'>>> print(get_issues(\'foo.bar.log_errors\')[0]) # This is valid, will print first issue!\n...\n>>> json.dumps(get_model(\'django.http.request.HttpRequest.body\')["sources"], indent = 2) # Pretty print only the sources.\n[\n  {\n    "port": "result",\n    "taint": [\n      {\n        "decl": null,\n        "leaves": [\n          {\n            "kind": "UserControlled"\n          }\n        ]\n      },\n    ]\n  }\n]\n')))}c.isMDXComponent=!0}}]);