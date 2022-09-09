"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[518],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>p});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),p=function(e){return function(n){var a=m(n.components);return t.createElement(e,l({},n,{components:a}))}},m=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(a),u=r,h=p["".concat(o,".").concat(u)]||p[u]||c[u]||l;return a?t.createElement(h,i(i({ref:n},d),{},{components:a})):t.createElement(h,i({ref:n},d))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73268:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var t=a(83117),r=a(80102),l=(a(67294),a(3905)),o=["components"],i={id:"querying-pyre",title:"Querying Pyre",sidebar_label:"Querying Pyre"},s=void 0,d={unversionedId:"querying-pyre",id:"querying-pyre",title:"Querying Pyre",description:"Pyre has a subcommand called query allows you to hook into a Pyre server and get type-related",source:"@site/docs/querying_pyre.md",sourceDirName:".",slug:"/querying-pyre",permalink:"/docs/querying-pyre",draft:!1,editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/querying_pyre.md",tags:[],version:"current",frontMatter:{id:"querying-pyre",title:"Querying Pyre",sidebar_label:"Querying Pyre"},sidebar:"pyre",previous:{title:"Errors",permalink:"/docs/errors"},next:{title:"Features",permalink:"/docs/features"}},p={},m=[{value:"Supported Queries",id:"supported-queries",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Callees",id:"callees",level:3},{value:"Defines",id:"defines",level:3},{value:"Dump call graph",id:"dump-call-graph",level:3},{value:"Dump class hierarchy",id:"dump-class-hierarchy",level:3},{value:"Less or equal",id:"less-or-equal",level:3},{value:"Model Query",id:"model-query",level:3},{value:"Path of module",id:"path-of-module",level:3},{value:"Save server state",id:"save-server-state",level:3},{value:"Superclasses",id:"superclasses",level:3},{value:"Type",id:"type",level:3},{value:"Types in file",id:"types-in-file",level:3},{value:"Validate Taint Models",id:"validate-taint-models",level:3},{value:"API Details",id:"api-details",level:2},{value:"Location Guidelines",id:"location-guidelines",level:3},{value:"Batching Queries",id:"batching-queries",level:3},{value:"Caching",id:"caching",level:3}],u={toc:m};function c(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Pyre has a subcommand called ",(0,l.mdx)("inlineCode",{parentName:"p"},"query")," allows you to hook into a Pyre server and get type-related\ninformation without having to run a full type check."),(0,l.mdx)("p",null,"This allows you, for instance, to get the type of an expression at a certain line and column, check whether a type is a subtype of the other, or get the list of methods for a class."),(0,l.mdx)("p",null,"To get started, set up a server with ",(0,l.mdx)("inlineCode",{parentName:"p"},"pyre")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"pyre start"),". The rest of this page goes through the various query options with examples. You can also run ",(0,l.mdx)("inlineCode",{parentName:"p"},"pyre query help")," to see a full list of available queries to the Pyre server."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note:")," The responses in the examples are prettified using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"pyre query <query> | python -m json.tool")," pattern."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"IMPORTANT"),":\nThese interfaces are considered legacy code by our team. They are far from production-ready, and will receive minimal maintenance effort in the short to medium term (for Pysa only) and will eventually be removed in the long term. It is ok if you want to rely on them for debugging or manual triaging purpose. But we would ",(0,l.mdx)("strong",{parentName:"p"},"strongly discourage")," relying on them to build any automation or product on top."),(0,l.mdx)("h2",{id:"supported-queries"},"Supported Queries"),(0,l.mdx)("h3",{id:"attributes"},"Attributes"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"attributes")," gives you the list of attributes for a class."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'# a.py\nclass C:\n    a: int = 2\n    def foo(self) -> str:\n        return ""\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "attributes(a.C)"\n{\n    "response": {\n        "attributes": [\n            {\n                "annotation": "int",\n                "name": "a"\n            },\n            {\n                "annotation": "typing.Callable(a.C.foo)[[], str]",\n                "name": "foo"\n            }\n        ]\n    }\n}\n')),(0,l.mdx)("h3",{id:"callees"},"Callees"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"callees")," returns a list of all calls from a given function, including locations if using ",(0,l.mdx)("inlineCode",{parentName:"p"},"callees_from_location"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"# a.py\ndef foo() -> None: pass\ndef bar() -> None:\n    foo()\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "callees(a.bar)"\n{\n    "response": {\n        "callees": [\n            {\n                "kind": "function",\n                "target": "a.foo"\n            }\n        ]\n    }\n}\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "callees_with_location(a.bar)"\n{\n    "response": {\n        "callees": [\n            {\n                "locations": [\n                    {\n                        "path": "a.py",\n                        "start": {\n                            "line": 6,\n                            "column": 5\n                        },\n                        "stop": {\n                            "line": 6,\n                            "column": 8\n                        }\n                    }\n                ],\n                "kind": "function",\n                "target": "a.foo"\n            }\n        ]\n    }\n}\n')),(0,l.mdx)("h3",{id:"defines"},"Defines"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"defines")," returns all function and method definitions for a given module or class."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'# a.py\nclass C:\n    a: int = 2\n    def foo(self) -> str:\n        return ""\n\ndef bar() -> None: pass\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "defines(a.C)"\n{\n    "response": [\n        {\n            "name": "a.C.foo",\n            "parameters": [\n                {\n                    "name": "self",\n                    "annotation": null\n                }\n            ],\n            "return_annotation": "str"\n        }\n    ]\n}\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "defines(a)"\n{\n    "response": [\n        {\n            "name": "a.C.foo",\n            "parameters": [\n                {\n                    "name": "self",\n                    "annotation": null\n                }\n            ],\n            "return_annotation": "str"\n        },\n        {\n            "name": "a.bar",\n            "parameters": [],\n            "return_annotation": "None"\n        }\n    ]\n}\n')),(0,l.mdx)("h3",{id:"dump-call-graph"},"Dump call graph"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"dump_call_graph()")," returns a comprehensive JSON mapping each call to a list of callees."),(0,l.mdx)("h3",{id:"dump-class-hierarchy"},"Dump class hierarchy"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"dump_class_hierarchy()")," returns the entire class hierarchy as Pyre understands it; elides type variables."),(0,l.mdx)("h3",{id:"less-or-equal"},"Less or equal"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"less_or_equal")," returns whether the type on the left can be used when the type on the right is expected."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"# a.py\nclass C:\n  pass\n\nclass D(C):\n  pass\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "less_or_equal(a.D, a.C)"\n{"response":{"boolean":true}}\n\n$ pyre query "less_or_equal(a.C, a.D)"\n{"response":{"boolean":true}}\n')),(0,l.mdx)("h3",{id:"model-query"},"Model Query"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"model_query")," returns the models generated by a given ModelQuery. Valid ",(0,l.mdx)("inlineCode",{parentName:"p"},"path")," inputs are absolute paths to directories containing a ",(0,l.mdx)("inlineCode",{parentName:"p"},"taint.config")," file. One can find all valid ",(0,l.mdx)("inlineCode",{parentName:"p"},"path"),"s by using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"validate_taint_models")," command."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"# a.py\ndef foo(x):\n    ...\ndef food(y):\n    ...\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'# test.pysa\nModelQuery(\n    name = "get_foo_sources",\n    find = "functions",\n    where = [\n        name.matches("foo")\n    ],\n    model = [\n        Parameters(TaintSource[Test])\n    ]\n)\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "model_query(path=\'/absolute/path/to/test_pysa/directory\', query_name=\'get_foo_sources\')"\n{\n    "response": [\n        {\n            "callable": "test.foo",\n            "model": {\n                "kind": "model",\n                "data": {\n                    "callable": "test.foo",\n                    "sources": [\n                        {\n                            "port": "formal(x)",\n                            "taint":[\n                                {\n                                    "kinds":[{"kind":"Test"}],\n                                    "decl":null\n                                }\n                            ]\n                        }\n                    ]\n                }\n            }\n        },\n        {\n            "callable": "test.food",\n            "model": {\n                "kind": "model",\n                "data": {\n                    "callable": "test.food",\n                    "sources": [\n                        {\n                            "port": "formal(y)",\n                            "taint":[\n                                {\n                                    "kinds":[{"kind":"Test"}],\n                                    "decl":null\n                                }\n                            ]\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n')),(0,l.mdx)("h3",{id:"path-of-module"},"Path of module"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"path_of_module")," returns the full absolute path for a given module."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "path_of_module(module_name)"\n{\n    "response": {\n        "path": "/Users/user/my_project/module_name.py"\n    }\n}\n')),(0,l.mdx)("h3",{id:"save-server-state"},"Save server state"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"save_server_state")," saves the server's serialized state into the given ",(0,l.mdx)("inlineCode",{parentName:"p"},"path"),", which can the be used to start up the identical server without re-analyzing all project files."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "save_server_state(\'my_saved_state\')"\n{\n    "response": {\n        "message": "Saved state."\n    }\n}\n$ pyre stop\n$ pyre --load-initial-state-from my_saved_state start\n')),(0,l.mdx)("h3",{id:"superclasses"},"Superclasses"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"superclasses")," returns the superclasses of given class names."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "superclasses(int, str)"\n{\n    "response": [\n        {\n            "int": [\n                "complex",\n                "float",\n                "numbers.Complex",\n                "numbers.Integral",\n                "numbers.Number",\n                "numbers.Rational",\n                "numbers.Real",\n                "object",\n                "typing.Generic",\n                "typing.Protocol",\n                "typing.SupportsFloat"\n            ]\n        },\n        {\n            "str": [\n                "object",\n                "typing.Collection",\n                "typing.Container",\n                "typing.Generic",\n                "typing.Iterable",\n                "typing.Protocol",\n                "typing.Reversible",\n                "typing.Sequence"\n            ]\n        }\n    ]\n}\n')),(0,l.mdx)("h3",{id:"type"},"Type"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"type")," evaluates the type of the given expression."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "type([1 + 2, \'\'])"\n{\n    "response": {\n        "type": "typing.List[typing.Union[int, str]]"\n    }\n}\n')),(0,l.mdx)("h3",{id:"types-in-file"},"Types in file"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"types")," returns all the types for a file that Pyre has been able to resolve. It can be called on multiple files at once with\n",(0,l.mdx)("inlineCode",{parentName:"p"},"types('path1', 'path2', ...)"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'# a.py\nclass C:\n  attribute = ""\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "types(path=\'a.py\')"\n{\n    "response": [\n        {\n            "path": "a.py",\n            "types": [\n                {\n                    "annotation": "str",\n                    "location": {\n                        "path": "a.py",\n                        "start": {\n                            "column": 16,\n                            "line": 2\n                        },\n                        "stop": {\n                            "column": 18,\n                            "line": 2\n                        }\n                    }\n                },\n                {\n                    "annotation": "str",\n                    "location": {\n                        "path": "a.py",\n                        "start": {\n                            "column": 4,\n                            "line": 2\n                        },\n                        "stop": {\n                            "column": 13,\n                            "line": 2\n                        }\n                    }\n                },\n                {\n                    "annotation": "typing.Type[a.C]",\n                    "location": {\n                        "path": "a.py",\n                        "start": {\n                            "column": 4,\n                            "line": 2\n                        },\n                        "stop": {\n                            "column": 13,\n                            "line": 2\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n')),(0,l.mdx)("h3",{id:"validate-taint-models"},"Validate Taint Models"),(0,l.mdx)("p",null,"The command ",(0,l.mdx)("inlineCode",{parentName:"p"},"validate_taint_models")," returns the absolute paths of all the directories in which Pysa recognises all the models their TARGETS file's environment."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "validate_taint_models()"\n{\n    "response": {\n        "message": "Models in `/data/users/$USER/valid/path/one, /data/users/$USER/valid/path/two` are valid."\n    }\n}\n')),(0,l.mdx)("h2",{id:"api-details"},"API Details"),(0,l.mdx)("h3",{id:"location-guidelines"},"Location Guidelines"),(0,l.mdx)("p",null,"We determine locations for expressions using the following guidelines:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Ignore leading and trailing whitespace, commas, comments, and wrapping parenthesis."),(0,l.mdx)("li",{parentName:"ul"},"Include whitespace, parenthesis or other noop tokens in the locations of compound expressions they are nested inside.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"(a).b")," will register two expressions, a at columns 1-2 (still following the guideline above), and ",(0,l.mdx)("inlineCode",{parentName:"li"},"a.b")," at columns 0-5"))),(0,l.mdx)("li",{parentName:"ul"},"Similarly, compound expression locations must encompass the locations of all of its components.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"a = b = 1")," will register the assignment ",(0,l.mdx)("inlineCode",{parentName:"li"},"a = 1")," at columns 0-9, with ",(0,l.mdx)("inlineCode",{parentName:"li"},"a")," at columns 0-1 and ",(0,l.mdx)("inlineCode",{parentName:"li"},"1")," at columns 8-9"),(0,l.mdx)("li",{parentName:"ul"},"The only exception are classes, which do not encompass their decorators"))),(0,l.mdx)("li",{parentName:"ul"},"All semantically meaningful tokens and reserved words are included in the node they define.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"await a")," will register the awaitable node at columns 0-7, and the included identifier ",(0,l.mdx)("inlineCode",{parentName:"li"},"a")," at columns 6-7"),(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"async def foo(): ...")," will register the define node at columns 0-20"),(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"foo(*args, **kwargs)")," will register args at columns 4-9 and kwargs at columns 11-19"),(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},'"""string"""')," will register the string string at columns 0-12"))),(0,l.mdx)("li",{parentName:"ul"},"All implicit values in the AST contribute a length of 0 and point to the closest location to where an equivalent explicit value would live.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"a: int")," would register an Ellipsis object at columns 6-6"),(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"a[0]")," would register a at columns 0-1 and ",(0,l.mdx)("inlineCode",{parentName:"li"},"a.__getitem__")," at columns 0-1"),(0,l.mdx)("li",{parentName:"ul"},"Ex. ",(0,l.mdx)("inlineCode",{parentName:"li"},"a[:1]")," would register the first argument of slice to be ",(0,l.mdx)("inlineCode",{parentName:"li"},"None")," at columns 2-2, the second argument to be ",(0,l.mdx)("inlineCode",{parentName:"li"},"1")," at columns 3-4, and the third argument to be ",(0,l.mdx)("inlineCode",{parentName:"li"},"None")," at columns 4-4.")))),(0,l.mdx)("h3",{id:"batching-queries"},"Batching Queries"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"batch")," command can be used to run several queries at once and return a map of responses. The list of queries to batch may include any combination of other valid queries except for ",(0,l.mdx)("inlineCode",{parentName:"p"},"batch")," itself."),(0,l.mdx)("p",null,"The response for a ",(0,l.mdx)("inlineCode",{parentName:"p"},"batch")," command will be a list of responses the same length as the number of queries getting batched, and the order of the responses will match the order of the queries."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'$ pyre query "batch(less_or_equal(int, str), join(int, str))"\n{\n    "response": [\n        {\n            "response": {\n                "boolean": false\n            }\n        },\n        {\n            "response": {\n                "type": "typing.Union[int, str]"\n            }\n        }\n    ]\n}\n')),(0,l.mdx)("h3",{id:"caching"},"Caching"),(0,l.mdx)("p",null,"Pyre rechecks each file when queried to generate the location-type mapping, caching results for re-queries of the same file. If you anticipate a large codemod where significant portions of the codebase will be queried, you may increase incremental performance by starting a temporary server with the flag: ",(0,l.mdx)("inlineCode",{parentName:"p"},"pyre --store-type-check-resolution start"),"."))}c.isMDXComponent=!0}}]);