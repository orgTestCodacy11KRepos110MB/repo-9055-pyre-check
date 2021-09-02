(self.webpackChunk=self.webpackChunk||[]).push([[435],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>d,default:()=>p});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"pysa-false-negatives",title:"Debugging False Negatives",sidebar_label:"Debugging False Negatives"},s={unversionedId:"pysa-false-negatives",id:"pysa-false-negatives",isDocsHomePage:!1,title:"Debugging False Negatives",description:"False Negatives occur when there is a legitimate flow of tainted data from a",source:"@site/docs/pysa_false_negatives.md",sourceDirName:".",slug:"/pysa-false-negatives",permalink:"/docs/pysa-false-negatives",editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/pysa_false_negatives.md",version:"current",sidebar_label:"Debugging False Negatives",frontMatter:{id:"pysa-false-negatives",title:"Debugging False Negatives",sidebar_label:"Debugging False Negatives"},sidebar:"pysa",previous:{title:"Model Domain Specific Language (DSL)",permalink:"/docs/pysa-model-dsl"},next:{title:"Coverage Increasing Strategies",permalink:"/docs/pysa-coverage"}},d=[{value:"Common Causes of False Negatives",id:"common-causes-of-false-negatives",children:[{value:"Missing Type Information",id:"missing-type-information",children:[]},{value:"Globals",id:"globals",children:[]}]},{value:"Methodology for Debugging False Negatives",id:"methodology-for-debugging-false-negatives",children:[{value:"Example",id:"example",children:[]}]},{value:"Appendix",id:"appendix",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"False Negatives occur when there is a legitimate flow of tainted data from a\nsource to a sink, but Pysa fails to catch it."),(0,o.kt)("h2",{id:"common-causes-of-false-negatives"},"Common Causes of False Negatives"),(0,o.kt)("h3",{id:"missing-type-information"},"Missing Type Information"),(0,o.kt)("p",null,"Pysa relies on type information from Pyre to identify sources and sinks, and to\nbuild the call graph needed to follow the propagation of taint between the two.\nJust because type information is available ",(0,o.kt)("em",{parentName:"p"},"somewhere")," in the code, does not\nmean Pyre will know the type of an object in the exact place where Pysa needs\nit. See the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/docs/pysa-coverage"},"Coverage Increasing\nStrategies")," for tips on how to increase type\ncoverage. The following examples demonstrate how lost type information leads to\nlost flows."),(0,o.kt)("h4",{id:"missing-sourcessinks"},"Missing Sources/Sinks"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HttpRequest.GET")," is a common source of ",(0,o.kt)("inlineCode",{parentName:"p"},"UserControled")," data in Django. If the\n",(0,o.kt)("inlineCode",{parentName:"p"},"request")," objects are not explicitly typed as ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpRequst"),", however, Pysa will\nfail to detect obvious issues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.http import HttpRequest\n\ndef this_is_missed(request):\n    # This flow WILL NOT be found, because Pysa does not know the type of\n    # 'request' at this point and thus does not know 'request.GET' is a source\n    # (even though the type is known in 'run')\n    eval(request.GET[\"command\"])\n\ndef this_is_caught(request: HttpRequest):\n    # This flow WILL be found.\n    eval(request.GET[\"command\"])\n\ndef run(request: HttpRequest):\n    this_is_missed(request)\n    this_is_caught(request)\n")),(0,o.kt)("h4",{id:"incomplete-call-graph"},"Incomplete Call Graph"),(0,o.kt)("p",null,"Pysa relies on type information in order to build a call graph that accurately\ntracks a method call of ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.bar(x)")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"def bar(self, x)")," implementation.\nWithout type information on ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),", Pysa will be unable to figure out how to\ndispatch the call and the flow will be lost:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom django.http import HttpRequest\n\nclass Runner:\n    def run(self, command: str) -> None:\n        eval(command)\n\ndef this_is_missed(request: HttpRequest, runner):\n    # This flow WILL NOT be found, because Pysa does not know the type of\n    # 'runner', and thus does not know where the 'run' call dispatches to\n    runner.run(request.GET[\"command\"])\n\ndef this_is_caught(request: HttpRequest, runner: Runner):\n    # This flow WILL be found.\n    runner.run(request.GET[\"command\"])\n")),(0,o.kt)("h3",{id:"globals"},"Globals"),(0,o.kt)("p",null,"To allow for parallel processing, Pysa is limited in it's ability to track taint\nflows through global variables. For example, Pysa will not detect an issue in\nthe following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user_controlled_data = ""\n\ndef load_data(request: HttpRequest) -> None:\n    user_controlled_data = request.GET["data"]\n\ndef run_command(request: HttpRequest) -> None:\n    load_data(request)\n    eval(user_controlled_data)\n')),(0,o.kt)("p",null,"The best workaround is to avoid using globals in your code. If a refactor isn't\npossible, but you do know what globals should be considered tainted, you can\nexplicitly declare the global tainted in your ",(0,o.kt)("inlineCode",{parentName:"p"},".pysa")," files."),(0,o.kt)("h2",{id:"methodology-for-debugging-false-negatives"},"Methodology for Debugging False Negatives"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify the flow you expect to see",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Source"),(0,o.kt)("li",{parentName:"ol"},"Sink"),(0,o.kt)("li",{parentName:"ol"},"Every function call/return that propagates the tainted data from the\nsource to the sink"),(0,o.kt)("li",{parentName:"ol"},"Every variable that the tainted data passes through, within the identified\nfunctions. This usually includes the parameter which initially received\nthe taint, and then 0 or more local variables that hold the tainted data\nas it is transformed in some way."))),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("a",{parentName:"li",href:"/docs/pysa-tips#reveal_taintyour_variable"},(0,o.kt)("inlineCode",{parentName:"a"},"reveal_taint"))," and\n",(0,o.kt)("a",{parentName:"li",href:"/docs/pysa-tips#reveal_typeyour_variable"},(0,o.kt)("inlineCode",{parentName:"a"},"reveal_type"))," statement to each of\nthe variables identified in the previous step"),(0,o.kt)("li",{parentName:"ol"},"Run Pysa using the same command you used when the false negative manifested,\nbut also include the ",(0,o.kt)("inlineCode",{parentName:"li"},"--noninteractive")," flag (eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"pyre --noninteractive\nanalyze"),")"),(0,o.kt)("li",{parentName:"ol"},"Start following the flow from source to sink in your code, and find the\ncorresponding output for each ",(0,o.kt)("inlineCode",{parentName:"li"},"reveal_taint")," statement.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that each time Pysa analyzes a function (could be many times), it will\ndump the latest taint information, so ",(0,o.kt)("strong",{parentName:"li"},"the last instance of ",(0,o.kt)("inlineCode",{parentName:"strong"},"reveal_taint"),"\noutput for a given line will be the most accurate and is the one you should\nlook at.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reveal_taint")," output exposes some of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/pysa-implementation-details"},"implementation\ndetails")," of Pysa, by giving you ",(0,o.kt)("inlineCode",{parentName:"li"},"Revealed\nforward taint")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Revealed backward taint")," messages. Without going into\nthose details, you should expect to see ",(0,o.kt)("em",{parentName:"li"},"either")," the source name (eg.\n",(0,o.kt)("inlineCode",{parentName:"li"},"UserControlled"),") you care about appearing in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Revealed forward taint"),"\noutput, or the sink name (eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"RemoteCodeExecution"),") you care about in the\n",(0,o.kt)("inlineCode",{parentName:"li"},"Revealed backward taint")," output.")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"For each ",(0,o.kt)("inlineCode",{parentName:"li"},"reveal_taint"),", following the flow of tainted data from source to\nsink, locate the output in the logs that reveals the taint (eg.\n",(0,o.kt)("inlineCode",{parentName:"li"},"integration_test.reveal_taint:20:4-20:16: Revealed forward taint for\n``command``:"),")."),(0,o.kt)("li",{parentName:"ol"},"If you see your source or sink name in the output, then go back to 1) and\ncarry on with the next ",(0,o.kt)("inlineCode",{parentName:"li"},"reveal_taint")," statement. If you ",(0,o.kt)("em",{parentName:"li"},"do not")," see the\nsource or sink name, then that means the cause of the false negative is\nlikely between your previous ",(0,o.kt)("inlineCode",{parentName:"li"},"reveal_taint"),' and the one you\'re currently\nlooking at. Refer to the "Commom Causes of False Negatives" section above\nfor ideas on the cause, and how to fix it.')))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Pysa will not be able to detect a vulnerability in the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from django.http import HttpRequest, HttpResponse\n\nclass Runner:\n    def run(self, command: str) -> None:\n        eval(command)\n\ndef get_command(request: HttpRequest) -> str:\n    command = request.GET["command"]\n    return command\n\ndef execute_command(runner: Runner, command):\n    runner.run(command)\n\ndef start(request: HttpRequest):\n    command = get_command(request)\n    runner = Runner()\n    execute_command(runner, command)\n')),(0,o.kt)("p",null,"Folling the above debugging steps we identify the flow of data from beginning to\nend, and add debugging statements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom django.http import HttpRequest, HttpResponse\n\nclass Runner:\n    def run(self, command: str) -> None:\n        reveal_type(command)\n        reveal_taint(command)\n        eval(command) # 5. User controlled data reaches the sink in here\n\ndef get_command(request: HttpRequest) -> str:\n    command = request.GET["command"] # 1. User controlled data originates here\n    reveal_type(command)\n    reveal_taint(command)\n    return command\n\ndef execute_command(runner: Runner, command):\n    reveal_type(command)\n    reveal_taint(command)\n    reveal_type(runner)\n    reveal_taint(runner)\n    runner.run(command) # 4. User controlled data is passed in here\n\ndef start(request: HttpRequest):\n    command = get_command(request) # 2. User controlled data is returned here\n    reveal_type(command)\n    reveal_taint(command)\n    runner = Runner()\n    execute_command(runner, command) # 3. User controlled data is passed in here\n')),(0,o.kt)("p",null,"See the appendix for the full output of running ",(0,o.kt)("inlineCode",{parentName:"p"},"pyre --noninteractive analyze")," on this example."),(0,o.kt)("p",null,"Starting at 1), we see this in the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'2020-12-28 13:02:36,486 [PID 3382063] WARNING integration_test.reveal_taint:13:4-13:16: Revealed forward taint for `command`: @integration_test.reveal_taint:11:14-11:25 -> UserControlled -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:36,486 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:36,486 [PID 3382063] WARNING UserControlled_Payload -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:36,486 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:36,486 [PID 3382063] WARNING\n2020-12-28 13:02:36,486 [PID 3382063] WARNING integration_test.reveal_taint:13:4-13:25: Revealed backward taint for `command`: declaration -> LocalReturn -> SimpleFeature: [], ComplexFeature: [(Features.Complex.ReturnAccessPath [])], TraceLength: 4611686018427387903, FirstIndex: [], FirstField: []\n')),(0,o.kt)("p",null,"Removing the timestamps and other noise gives us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'integration_test.reveal_taint:13:4-13:16:\n  Revealed forward taint for `command`:\n    @integration_test.reveal_taint:11:14-11:25 -> UserControlled ->\n    SimpleFeature: [\n      Features.Simple.LeafName {\n        leaf = "Obj{django.http.request.HttpRequest.GET}"; port = None\n      }\n    ],\n    ComplexFeature: [],\n    TraceLength: 0,\n    FirstIndex: ["command"],\n    FirstField: []\n\n    UserControlled_Payload -> SimpleFeature: [\n      Features.Simple.LeafName {\n        leaf = "Obj{django.http.request.HttpRequest.GET}"; port = None\n      }\n    ],\n    ComplexFeature: [],\n    TraceLength: 0,\n    FirstIndex: ["command"],\n    FirstField: []\n\nintegration_test.reveal_taint:13:4-13:25:\n  Revealed backward taint for `command`:\n    declaration -> LocalReturn ->\n    SimpleFeature: [],\n    ComplexFeature: [(Features.Complex.ReturnAccessPath [])],\n    TraceLength: 4611686018427387903,\n    FirstIndex: [],\n    FirstField: []\n')),(0,o.kt)("p",null,"For debugging false negatives, the only portion we care about is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Revealed forward taint for `command`:\n    @integration_test.reveal_taint:11:14-11:25 -> UserControlled\n")),(0,o.kt)("p",null,"This confirms that on line 11 (characters 14-25), we did indeed detect that\n",(0,o.kt)("inlineCode",{parentName:"p"},"command")," was tainted as ",(0,o.kt)("inlineCode",{parentName:"p"},"UserControlled"),"."),(0,o.kt)("p",null,"Moving on to 2, the ",(0,o.kt)("inlineCode",{parentName:"p"},"forward taint")," output again tells us that we have\n",(0,o.kt)("inlineCode",{parentName:"p"},"UserControlled")," taint on ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," at line 26 (characters 4-16)."),(0,o.kt)("p",null,"Starting with 4, we notice that we no longer see ",(0,o.kt)("inlineCode",{parentName:"p"},"UserControlled")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"RemoteCodeExecution")," in our revealed forward or backwards taint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:18:4-18:16: Revealed forward taint for `command`:\n2020-12-28 13:02:35,472 [PID 3382063] WARNING\n2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:18:4-18:25: Revealed backward taint for `command`:\n2020-12-28 13:02:35,472 [PID 3382063] WARNING\n")),(0,o.kt)("p",null,"This has helped us narrow down the problem to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_command")," function. In\nthe end, the problem was that we did not have type information on ",(0,o.kt)("inlineCode",{parentName:"p"},"runner"),", so\nPysa did not know where the definition of ",(0,o.kt)("inlineCode",{parentName:"p"},"runner.run")," was. Without knowing\nwhere the definition was, Pysa couldn't know that ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," containted a sink and\nthus couldn't know that ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," eventually reached that sink."),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("p",null,"Subset of the output from running ",(0,o.kt)("inlineCode",{parentName:"p"},"pyre --noninteractive analyze")," on the\nexample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'2020-12-28 13:02:31,719 [PID 3382063] PERFORMANCE Overrides recorded: 2.408138s\n2020-12-28 13:02:31,719 [PID 3382063] INFO Building call graph...\n2020-12-28 13:02:34,166 [PID 3382063] PERFORMANCE Call graph built: 2.447174s\n2020-12-28 13:02:34,166 [PID 3382063] INFO Call graph edges: 100\n2020-12-28 13:02:34,166 [PID 3382063] INFO Computing overrides...\n2020-12-28 13:02:34,311 [PID 3382063] PERFORMANCE Computed overrides: 0.144886s\n2020-12-28 13:02:34,311 [PID 3382063] PERFORMANCE Pre-fixpoint computation for static analysis: 7.664068s\n2020-12-28 13:02:34,311 [PID 3382063] INFO Analysis fixpoint started for 3075 overrides 68 functions...\n2020-12-28 13:02:34,311 [PID 3382063] INFO Iteration #0. 3143 Callables [...]\n2020-12-28 13:02:35,471 [PID 3382063] WARNING integration_test.reveal_taint:6:8-6:19: Revealed type for command: str\n2020-12-28 13:02:35,471 [PID 3382063] WARNING integration_test.reveal_taint:7:8-7:20: Revealed forward taint for `command`:\n2020-12-28 13:02:35,471 [PID 3382063] WARNING\n2020-12-28 13:02:35,471 [PID 3382063] WARNING integration_test.reveal_taint:7:8-7:29: Revealed backward taint for `command`: @integration_test.reveal_taint:8:13-8:20 -> RemoteCodeExecution -> SimpleFeature: [Features.Simple.LeafName {leaf = "eval"; port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: [], FirstField: []\n2020-12-28 13:02:35,472 [PID 3382063] WARNING\n2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:17:4-17:15: Revealed type for command: typing.Any\n2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:18:4-18:16: Revealed forward taint for `command`:\n2020-12-28 13:02:35,472 [PID 3382063] WARNING\n2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:19:4-19:15: Revealed type for command: typing.Any\n2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:20:4-20:16: Revealed forward taint for `command`:\n2020-12-28 13:02:35,472 [PID 3382063] WARNING\n2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:20:4-20:25: Revealed backward taint for `command`:\n2020-12-28 13:02:35,472 [PID 3382063] WARNING\n2020-12-28 13:02:35,472 [PID 3382063] WARNING integration_test.reveal_taint:18:4-18:25: Revealed backward taint for `command`:\n2020-12-28 13:02:35,472 [PID 3382063] WARNING\n2020-12-28 13:02:35,473 [PID 3382063] WARNING integration_test.reveal_taint:12:4-12:15: Revealed type for command: str\n2020-12-28 13:02:35,473 [PID 3382063] WARNING integration_test.reveal_taint:13:4-13:16: Revealed forward taint for `command`: @integration_test.reveal_taint:11:14-11:25 -> UserControlled -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:35,473 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:35,473 [PID 3382063] WARNING UserControlled_Payload -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:35,473 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:35,473 [PID 3382063] WARNING\n2020-12-28 13:02:35,473 [PID 3382063] WARNING integration_test.reveal_taint:13:4-13:25: Revealed backward taint for `command`: declaration -> LocalReturn -> SimpleFeature: [], ComplexFeature: [(Features.Complex.ReturnAccessPath [])], TraceLength: 4611686018427387903, FirstIndex: [], FirstField: []\n2020-12-28 13:02:35,473 [PID 3382063] WARNING\n2020-12-28 13:02:35,480 [PID 3382063] WARNING integration_test.reveal_taint:25:4-25:15: Revealed type for command: str\n2020-12-28 13:02:35,480 [PID 3382063] WARNING integration_test.reveal_taint:26:4-26:16: Revealed forward taint for `command`: via call@integration_test.reveal_taint:24:14-24:34[integration_test.reveal_taint.get_command][{ root = LocalResult; path = [] }] -> UserControlled -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:35,480 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 1, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:35,480 [PID 3382063] WARNING UserControlled_Payload -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:35,480 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 1, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:35,480 [PID 3382063] WARNING\n2020-12-28 13:02:35,481 [PID 3382063] WARNING integration_test.reveal_taint:26:4-26:25: Revealed backward taint for `command`:\n2020-12-28 13:02:35,481 [PID 3382063] WARNING\n2020-12-28 13:02:35,546 [PID 3382063] PERFORMANCE Expensive callables for iteration 0:\n2020-12-28 13:02:35,577 [PID 3382063] INFO Iteration #0, 3143 callables, heap size 46105024 took 1.266790s\n2020-12-28 13:02:35,578 [PID 3382063] INFO Iteration #1. 3038 Callables [...]\n2020-12-28 13:02:36,482 [PID 3382063] WARNING integration_test.reveal_taint:6:8-6:19: Revealed type for command: str\n2020-12-28 13:02:36,482 [PID 3382063] WARNING integration_test.reveal_taint:7:8-7:20: Revealed forward taint for `command`:\n2020-12-28 13:02:36,483 [PID 3382063] WARNING\n2020-12-28 13:02:36,483 [PID 3382063] WARNING integration_test.reveal_taint:7:8-7:29: Revealed backward taint for `command`: @integration_test.reveal_taint:8:13-8:20 -> RemoteCodeExecution -> SimpleFeature: [Features.Simple.LeafName {leaf = "eval"; port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: [], FirstField: []\n2020-12-28 13:02:36,483 [PID 3382063] WARNING\n2020-12-28 13:02:36,486 [PID 3382063] WARNING integration_test.reveal_taint:12:4-12:15: Revealed type for command: str\n2020-12-28 13:02:36,486 [PID 3382063] WARNING integration_test.reveal_taint:13:4-13:16: Revealed forward taint for `command`: @integration_test.reveal_taint:11:14-11:25 -> UserControlled -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:36,486 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:36,486 [PID 3382063] WARNING UserControlled_Payload -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:36,486 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 0, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:36,486 [PID 3382063] WARNING\n2020-12-28 13:02:36,486 [PID 3382063] WARNING integration_test.reveal_taint:13:4-13:25: Revealed backward taint for `command`: declaration -> LocalReturn -> SimpleFeature: [], ComplexFeature: [(Features.Complex.ReturnAccessPath [])], TraceLength: 4611686018427387903, FirstIndex: [], FirstField: []\n2020-12-28 13:02:36,486 [PID 3382063] WARNING\n2020-12-28 13:02:36,486 [PID 3382063] WARNING integration_test.reveal_taint:25:4-25:15: Revealed type for command: str\n2020-12-28 13:02:36,486 [PID 3382063] WARNING integration_test.reveal_taint:26:4-26:16: Revealed forward taint for `command`: via call@integration_test.reveal_taint:24:14-24:34[integration_test.reveal_taint.get_command][{ root = LocalResult; path = [] }] -> UserControlled -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:36,486 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 1, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:36,486 [PID 3382063] WARNING UserControlled_Payload -> SimpleFeature: [Features.Simple.LeafName {leaf = "Obj{django.http.request.HttpRequest.GET}";\n2020-12-28 13:02:36,487 [PID 3382063] WARNING   port = None}], ComplexFeature: [], TraceLength: 1, FirstIndex: ["command"], FirstField: []\n2020-12-28 13:02:36,487 [PID 3382063] WARNING\n2020-12-28 13:02:36,492 [PID 3382063] WARNING integration_test.reveal_taint:26:4-26:25: Revealed backward taint for `command`:\n2020-12-28 13:02:36,492 [PID 3382063] WARNING\n2020-12-28 13:02:36,552 [PID 3382063] PERFORMANCE Expensive callables for iteration 1:\n2020-12-28 13:02:36,585 [PID 3382063] INFO Iteration #1, 3038 callables, heap size 46521728 took 1.007461s\n2020-12-28 13:02:36,585 [PID 3382063] INFO Iteration #2. 23 Callables [...]\n2020-12-28 13:02:37,018 [PID 3382063] PERFORMANCE Expensive callables for iteration 2:\n2020-12-28 13:02:37,018 [PID 3382063] INFO Iteration #2, 23 callables, heap size 46530432 took 0.432597s\n2020-12-28 13:02:37,018 [PID 3382063] INFO Iteration #3. 2 Callables [integration_test.string_concatenation.bad_1 (fun), integration_test.string_concatenation.bad_2 (fun)]\n2020-12-28 13:02:37,130 [PID 3382063] PERFORMANCE Expensive callables for iteration 3:\n2020-12-28 13:02:37,131 [PID 3382063] INFO Iteration #3, 2 callables, heap size 46532352 took 0.113038s\n2020-12-28 13:02:37,131 [PID 3382063] INFO Iteration #4. 0 Callables []\n2020-12-28 13:02:37,131 [PID 3382063] INFO Fixpoint iterations: 4\n2020-12-28 13:02:37,348 [PID 3382063] PERFORMANCE Analysis fixpoint complete: 3.037628s\n2020-12-28 13:02:37,369 [PID 3382063] PERFORMANCE Analyze: 18.289002s\n')))}p.isMDXComponent=!0}}]);