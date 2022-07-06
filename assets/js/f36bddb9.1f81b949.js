"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[576],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){return function(n){var t=u(n.components);return a.createElement(e,o({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(r,".").concat(m)]||p[m]||c[m]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},21420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],s={id:"pysa-tips",title:"General Tips",sidebar_label:"General Tips"},l=void 0,d={unversionedId:"pysa-tips",id:"pysa-tips",title:"General Tips",description:"Features/Limitations",source:"@site/docs/pysa_tips.md",sourceDirName:".",slug:"/pysa-tips",permalink:"/docs/pysa-tips",draft:!1,editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/pysa_tips.md",tags:[],version:"current",frontMatter:{id:"pysa-tips",title:"General Tips",sidebar_label:"General Tips"},sidebar:"pysa",previous:{title:"Coverage Increasing Strategies",permalink:"/docs/pysa-coverage"},next:{title:"Static Analysis Processor",permalink:"/docs/static-analysis-post-processor"}},p={},u=[{value:"Features/Limitations",id:"featureslimitations",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Stubs",id:"stubs",level:3},{value:"Helpful Python knowledge",id:"helpful-python-knowledge",level:2},{value:"Debugging Tools",id:"debugging-tools",level:2},{value:"<code>pyre_dump()</code>",id:"pyre_dump",level:3},{value:"<code>reveal_type(YOUR_VARIABLE)</code>",id:"reveal_typeyour_variable",level:3},{value:"<code>reveal_taint(YOUR_VARIABLE)</code>",id:"reveal_taintyour_variable",level:3},{value:"<code>pyre_dump_perf()</code>",id:"pyre_dump_perf",level:3},{value:"<code>results.json</code>",id:"resultsjson",level:3},{value:"<code>sapp</code>",id:"sapp",level:3},{value:"Developer Quality-of-Life",id:"developer-quality-of-life",level:2},{value:"Iterating quickly with Pysa",id:"iterating-quickly-with-pysa",level:3},{value:"File Types",id:"file-types",level:3},{value:"Usage Examples",id:"usage-examples",level:2}],m={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"featureslimitations"},"Features/Limitations"),(0,o.mdx)("h3",{id:"inheritance"},"Inheritance"),(0,o.mdx)("p",null,"Pysa is aware of inheritance, so you can add taint annotations to a base class,\nand Pysa will detect when the tainted attribute or function is accessed via a\nchild class. For example, this flow will be detected during static analysis:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"class Parent:\n    def some_source(self): # Annotated as a source\n        pass\n\nclass Child(Parent):\n    pass\n\nchild = Child()\nsome_sink(child.some_source()) # Detected as a tainted flow\n")),(0,o.mdx)("p",null,"Additionally, Pysa is aware that child classes can be used anywhere a parent\nclasses's type is present. If you access a method on a parent class and the\nimplementation on any child class returns taint, Pysa will detect that and\ntreat the return from the parent class as tainted. For example, this will be\ndetected as a tainted flow during static analysis:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'class Parent:\n    def some_fn(self):\n        """Benign function with no annotations"""\n        pass\n\nclass Child(Parent):\n    def some_fn(self):\n        """Function returning a tainted value"""\n        return get_some_tainted_value()\n\ndef fn(obj: Parent):\n    some_sink(obj.some_fn()) # Detected as a tainted flow\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"A huge caveat here is that Pysa needs to be aware of these inheritance\nrelationships and function definitions for it to work.")," Code that lives\noutside the repo under analysis might not be visible to Pysa, so these\ninheritances/implementations may be missed. See the Stubs section below for\nmore details."),(0,o.mdx)("h3",{id:"stubs"},"Stubs"),(0,o.mdx)("p",null,"The concept of stubs is covered in general ",(0,o.mdx)("em",{parentName:"p"},(0,o.mdx)("a",{parentName:"em",href:"/docs/pysa-basics"},"here")),", but this\nsection in particular will cover specific issues you may encounter with\n",(0,o.mdx)("inlineCode",{parentName:"p"},".pyi")," stubs. These stubs can be used to prevent pyre errors for types\nthat live outside the codebase you are running Pysa on. The simplest stubs are\njust empty files in the root of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"stubs")," directory (assuming you have a\n",(0,o.mdx)("inlineCode",{parentName:"p"},"stubs")," directory specified in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"search_path")," list in your\n",(0,o.mdx)("inlineCode",{parentName:"p"},".pyre_configuration")," file). An empty stub basically prevents all type checking\nerrors within the namespace of that stub. So for ",(0,o.mdx)("inlineCode",{parentName:"p"},"uwsgi.pyi"),", in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"stubs"),"\ndirectory, the following code would not raise pyre errors (though it would\nobviously fail to run):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"import uwsgi\nfrom uwsgi import asdf, ZXCV\nuwsgi.qwer()\nvariable = ZXCV()\nvariable.hjkl()\n")),(0,o.mdx)("p",null,"If you want to be able to create ",(0,o.mdx)("inlineCode",{parentName:"p"},".pysa")," models (i.e. annotate sources, sinks,\netc.) for something that is outside your codebase, such as Django's\n",(0,o.mdx)("inlineCode",{parentName:"p"},"django.http.request.HttpRequest")," object, you need more than just an empty stub\nfile. You need a directory structure and ",(0,o.mdx)("inlineCode",{parentName:"p"},".pyi")," file that matches your import,\nsuch as ",(0,o.mdx)("inlineCode",{parentName:"p"},"stubs/django/http/request.pyi"),". Within that ",(0,o.mdx)("inlineCode",{parentName:"p"},".pyi")," file, you\nthen need a stub of the class:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"class HttpRequest(BinaryIO):\n    def __init__(self) -> None: ...\n    COOKIES: Any = ...\n    GET: QueryDict = ...\n    # And a bunch more stuff...\n")),(0,o.mdx)("p",null,"Only at this point can you add ",(0,o.mdx)("inlineCode",{parentName:"p"},".pysa")," files with annotations such as these:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"django.http.request.HttpRequest.COOKIES: TaintSource[UserControlled]\ndjango.http.request.HttpRequest.GET: TaintSource[UserControlled]\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"There is a huge gotcha here"),": If you had both an empty ",(0,o.mdx)("inlineCode",{parentName:"p"},"stubs/django.pyi"),"\nfile, and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"stubs/django/http/request.pyi")," file shown above, pyre will see\nthe ",(0,o.mdx)("inlineCode",{parentName:"p"},"django.pyi")," file first and ignore the ",(0,o.mdx)("inlineCode",{parentName:"p"},"request.pyi")," file (following\n",(0,o.mdx)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0484/#stub-files"},"PEP 484"),"). This would\nmean that your stub of ",(0,o.mdx)("inlineCode",{parentName:"p"},"HttpRequest")," would be missed, and your\n",(0,o.mdx)("inlineCode",{parentName:"p"},"HttpRequest.COOKIES")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"HttpRequest.GET")," annotations would cause errors when\nrunning Pysa. The fix is simply to delete the ",(0,o.mdx)("inlineCode",{parentName:"p"},"django.pyi")," file. When deleting\nthat file, you may all of a sudden see new typing errors for other types within\nDjango, for which you'll need to add new .",(0,o.mdx)("inlineCode",{parentName:"p"},"pyi")," files at the appropriate\nlocations."),(0,o.mdx)("p",null,"Since definitions in type stubs don't have bodies, all functions and methods\nwill be treated as ",(0,o.mdx)("a",{parentName:"p",href:"/docs/pysa-advanced#obscure-models"},"obscure models"),". If this\nleads to false positives, you will want to write a model for it."),(0,o.mdx)("h2",{id:"helpful-python-knowledge"},"Helpful Python knowledge"),(0,o.mdx)("p",null,"Pretty much all python operators are reduced down to double underbar functions.\nFor example, constructing an object results in a call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"__init__(self, ...)"),"\nand an asterisk operator results in a call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"__mul__(a, b)"),". A full list of\nthese operators can be found\n",(0,o.mdx)("a",{parentName:"p",href:"https://docs.python.org/3.7/library/operator.html"},"here"),". This is useful to\nknow when you need to add annotations to the usage of operators, such as the use\nof square brackets to access a dictionary."),(0,o.mdx)("h2",{id:"debugging-tools"},"Debugging Tools"),(0,o.mdx)("h3",{id:"pyre_dump"},(0,o.mdx)("inlineCode",{parentName:"h3"},"pyre_dump()")),(0,o.mdx)("p",null,"You can insert a call to the (non-existent) ",(0,o.mdx)("inlineCode",{parentName:"p"},"pyre_dump()")," function in your code\nto enable verbose logging of the forward and backward analysis of the current\nfunction or method. This can be useful as a starting point to figure out why\nsomething is/isn't happening. This will produce ",(0,o.mdx)("em",{parentName:"p"},"very")," verbose output."),(0,o.mdx)("h3",{id:"reveal_typeyour_variable"},(0,o.mdx)("inlineCode",{parentName:"h3"},"reveal_type(YOUR_VARIABLE)")),(0,o.mdx)("p",null,"If you only want to check what pyre knows about the types of variables, inject a\ncall to ",(0,o.mdx)("inlineCode",{parentName:"p"},"reveal_type(YOUR_VARIABLE)")," (no import needed) in your code. Running\nPyre on your code will then give you compact output indicating what Pyre thinks\nthe type of your variable is."),(0,o.mdx)("h3",{id:"reveal_taintyour_variable"},(0,o.mdx)("inlineCode",{parentName:"h3"},"reveal_taint(YOUR_VARIABLE)")),(0,o.mdx)("p",null,"Similarly to ",(0,o.mdx)("inlineCode",{parentName:"p"},"reveal_type"),", if you only want to check what pyre knows about the\ntaint on variables, inject a call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"reveal_taint(YOUR_VARIABLE)")," (no import\nneeded) in your code. Running Pysa on your code will then give you compact\noutput indicating what taint Pysa has discovered. Note that each time Pysa\nanalyzes the function (which could be many times) it will update it's\nunderstanding of the taint flowing into the function and output the current\nstate. The final output will be the most complete."),(0,o.mdx)("h3",{id:"pyre_dump_perf"},(0,o.mdx)("inlineCode",{parentName:"h3"},"pyre_dump_perf()")),(0,o.mdx)("p",null,"You can insert a call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"pyre_dump_perf")," (no import needed) in a function or\nmethod to profile the current analysis on that function or method, and dump\nthe results on stdout."),(0,o.mdx)("h3",{id:"resultsjson"},(0,o.mdx)("inlineCode",{parentName:"h3"},"results.json")),(0,o.mdx)("p",null,"Another strategy for getting a bit more metadata is adding a function into your\ncode, which simply constructs and returns the type you want to examine. You can\nthen run Pysa, and grep for the function's name in the\n",(0,o.mdx)("inlineCode",{parentName:"p"},"results.json")," file located wherever you pointed ",(0,o.mdx)("inlineCode",{parentName:"p"},"--save-results-to=")," to when\nrunning Pysa. You should then be able to see if that function is detected as\nreturning taint, plus a bit more metadata about it."),(0,o.mdx)("h3",{id:"sapp"},(0,o.mdx)("inlineCode",{parentName:"h3"},"sapp")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/docs/static-analysis-post-processor"},"Static Analysis Post Processor (SAPP)"),"\nhas access to the same information as ",(0,o.mdx)("inlineCode",{parentName:"p"},"results.json"),". While SAPP doesn't display\nall the information ",(0,o.mdx)("inlineCode",{parentName:"p"},"results.json")," contains, it can display the information in a\nmore user-friendly gdb-style way. It's especially useful for exploring flows\nwhich pass through many frames."),(0,o.mdx)("h2",{id:"developer-quality-of-life"},"Developer Quality-of-Life"),(0,o.mdx)("h3",{id:"iterating-quickly-with-pysa"},"Iterating quickly with Pysa"),(0,o.mdx)("p",null,"On large projects, Pysa can take a long time to run; it takes about an hour to\nrun on Instagram, which contains millions of lines of Python code. A few tricks\nto iterate more quickly with Pysa are:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Run in a sample project or test environment.")," Pysa runs much more quickly\non smaller projects, so if you need to test something that isn't specific to\nyour environment (eg. a model that corresponds to code in typeshed) then do\nyour testing in a smaller codebase. Even if you are iterating on something\nspecific to your codebase, it can sometimes be worthwhile to port the code\nsnippet you're working on into a test project.",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"The stub integration tests will validate any stubs in ",(0,o.mdx)("inlineCode",{parentName:"li"},"tools/pyre/taint"),",\nand this can be a fast shortcut for validating new stubs you want to\nwrite. These tests reside in ",(0,o.mdx)("inlineCode",{parentName:"li"},"stubs/integration_test")," and can be invoked\nby running ",(0,o.mdx)("inlineCode",{parentName:"li"},"make stubs_integration_test")," in the root of the repo."),(0,o.mdx)("li",{parentName:"ol"},"The interprocedural analysis tests dump information about models, issues,\nthe call graph, and overrides. It can be very helpful to test code in this\nenvironment if you need a detailed understanding of Pysa's internal state\nto debug a false positive or negative. Note that these tests do not have\naccess to typeshed or any other type stubs. These tests reside in\n",(0,o.mdx)("inlineCode",{parentName:"li"},"interprocedural_analyses/taint/test/integration")," and can be invoked by\nrunning ",(0,o.mdx)("inlineCode",{parentName:"li"},"make test")," in the root of the repo."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Skip analysis entirely if you only need to validate taint models"),". ",(0,o.mdx)("inlineCode",{parentName:"li"},"pyre\nvalidate-models")," can be used to validate taint models without having to run\nthe entire analysis."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Filter runs with ",(0,o.mdx)("inlineCode",{parentName:"strong"},"--rule ####"),".")," This option will cause Pysa to ignore\nsources and sinks that are not involved in the given rule, saving on analysis\ntime. Eg. ",(0,o.mdx)("inlineCode",{parentName:"li"},"pyre analyze --rule 5000")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Parallelize across machines.")," If working in a could hosted environment,\nreserving a second machine and working on two projects in parallel can be\neffective. As Pysa is running on one machine, you can switch to the other,\nmake changes there, kick off a run, and then switch back to the first to look\nat results."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Put in all debug statements up front.")," When using the debugging tools\noutlined above, put in way more debug statments than you think you need,\ndumping type info and taint for anything remotely related to the flow you're\nlooking at. This will reduce the odds that you need to do a second run to\nfigure out what's going wrong."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Enable the ",(0,o.mdx)("inlineCode",{parentName:"strong"},"--use-cache")," flag.")," All Pysa runs require some information\nfrom Pyre, such as the typechecking environment, dependencies, etc.\nComputing this information can be time-consuming on larger projects.\nHowever, if you're only editing taint models and not the project source,\nthis information isn't expected to change between Pysa runs. By enabling\nthis flag, you can tell Pysa to save this information to cache files\n(located in .pyre/.pysa_cache) and load from cache in subsequent runs,\nrather than computing it from scratch each time. The cache will be\ninvalidated if any of the project source files change, in which case\nPysa will fall back to doing a clean run and then saving the computed\nartifacts in new cache files.")),(0,o.mdx)("h3",{id:"file-types"},"File Types"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"taint.config")," is a JSON file and ",(0,o.mdx)("inlineCode",{parentName:"p"},".pysa")," files use Python syntax. If you update\nyour editor to recognize those files as JSON and Python respectively, it'll make\ndevelopment easier."),(0,o.mdx)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.mdx)("p",null,"Not all Pysa features will be covered in these docs, and provided examples won't\nalways be complete. Every feature, however, ",(0,o.mdx)("em",{parentName:"p"},"will")," be covered in the tests\nlocated\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/pyre-check/tree/master/interprocedural_analyses/taint/test/integration"},"here"),".\nThese tests can be a useful resource to discover how to use Pysa features."))}c.isMDXComponent=!0}}]);