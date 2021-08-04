(self.webpackChunk=self.webpackChunk||[]).push([[256],{3905:(e,a,n)=>{"use strict";n.r(a),n.d(a,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>p});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){return function(a){var n=u(a.components);return t.createElement(e,r({},a,{components:n}))}},u=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},m=function(e){var a=u(e.components);return t.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||r;return n?t.createElement(h,d(d({ref:a},l),{},{components:n})):t.createElement(h,d({ref:a},l))}));function f(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<r;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64254:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>d,metadata:()=>s,toc:()=>l,default:()=>u});var t=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],d={id:"pysa-features",title:"Feature Annotations",sidebar_label:"Feature Annotations"},s={unversionedId:"pysa-features",id:"pysa-features",isDocsHomePage:!1,title:"Feature Annotations",description:"Features (sometimes called breadcrumbs) are additional metadata that are",source:"@site/docs/pysa_features.md",sourceDirName:".",slug:"/pysa-features",permalink:"/docs/pysa-features",editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/pysa_features.md",version:"current",sidebar_label:"Feature Annotations",frontMatter:{id:"pysa-features",title:"Feature Annotations",sidebar_label:"Feature Annotations"},sidebar:"pysa",previous:{title:"Overview",permalink:"/docs/pysa-basics"},next:{title:"Advanced Topics",permalink:"/docs/pysa-advanced"}},l=[{value:"Manually Added Features",id:"manually-added-features",children:[{value:"<code>via</code> Feature Using <code>Via[]</code>",id:"via-feature-using-via",children:[]},{value:"<code>via-value</code> Feature Using <code>ViaValueOf[]</code>",id:"via-value-feature-using-viavalueof",children:[]},{value:"<code>via-type</code> Feature Using <code>ViaTypeOf[]</code>",id:"via-type-feature-using-viatypeof",children:[]},{value:"Supporting Features Dynamically Using <code>ViaDynamicFeature[]</code>",id:"supporting-features-dynamically-using-viadynamicfeature",children:[]}]},{value:"Automatic Features",id:"automatic-features",children:[{value:"<code>via</code> Feature",id:"via-feature",children:[]},{value:"<code>type</code> Feature",id:"type-feature",children:[]},{value:"<code>first-field</code> Feature",id:"first-field-feature",children:[]},{value:"<code>first-index</code> Feature",id:"first-index-feature",children:[]},{value:"<code>has</code> Feature",id:"has-feature",children:[]},{value:"<code>always-</code> Modifier on Features",id:"always--modifier-on-features",children:[]},{value:"<code>broadening</code> Feature",id:"broadening-feature",children:[]}]}],p={toc:l};function u(e){var a=e.components,n=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Features (sometimes called breadcrumbs) are additional metadata that are\nassociated with taint flows. They can be useful for helping to filter out false\npositives, or for zeroing in on high-signal subsets of a rule. Some are\nautomatically added during the analysis process, and there is a rich system for\nmanually specifying additional features."),(0,r.mdx)("h2",{id:"manually-added-features"},"Manually Added Features"),(0,r.mdx)("h3",{id:"via-feature-using-via"},(0,r.mdx)("inlineCode",{parentName:"h3"},"via")," Feature Using ",(0,r.mdx)("inlineCode",{parentName:"h3"},"Via[]")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via")," feature indicates that a flow passed through a point in the code, such\nas a function parameter, that was annotated with the specified feature name. For\nexample, ",(0,r.mdx)("inlineCode",{parentName:"p"},"via:getattr")," might indicate that the flow passed through a call to\n",(0,r.mdx)("inlineCode",{parentName:"p"},"getattr")),(0,r.mdx)("p",null,"Feature names are declared in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"taint.config")," file (the same file as\nsources/sinks/rules) like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'features: [\n    {\n        name: "getattr",\n        comment: "via getattr first parameter"\n    },\n    {\n        name: "request_files",\n        comment: "via django request.FILES"\n    }\n]\n')),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via")," feature can be appended to ",(0,r.mdx)("inlineCode",{parentName:"p"},"TaintSource"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"TaintSink")," and\n",(0,r.mdx)("inlineCode",{parentName:"p"},"TaintInTaintOut")," annotations, to add extra metadata to any flow that goes\nthrough that annotated function/parameter/attribute. This is done by adding\n",(0,r.mdx)("inlineCode",{parentName:"p"},"Via[FEATURE_NAME]")," within square brackets after the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TaintXXXX")," annotation in a\nmodel file:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"# Augmenting TaintSource\ndjango.http.request.HttpRequest.FILES: TaintSource[UserControlled, Via[request_files]] = ...\n\n# Augmenting TaintInTaintOut\ndef getattr(\n    o: TaintInTaintOut[Via[getattr]],\n    name: TaintSink[GetAttr],\n    default: TaintInTaintOut[LocalReturn],\n): ...\n")),(0,r.mdx)("p",null,"Pysa also supports attaching features to inferred flows, which allows you to\nfilter flows passing through a function without having to annotate the taint\nyourself explicitly, and having the feature attached to all taint flowing\nthrough the function. This is done by adding the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AttachToSource"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"AttachToSink"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"AttachToTito")," annotations in a model file:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"# Attaching taint to sources.\ndef get_signed_cookie() -> AttachToSource[Via[signed]]: ...\n\n# Attaching taint to sinks.\ndef HttpResponseRedirect.__init__(self, redirect_to: AttachToSink[Via[redirect]], *args, **kwargs): ...\n\n# Attaching taint to taint-in-taint-out models.\ndef attach_features.tito_and_sink(arg: AttachToTito[Via[some_feature_name]]): ...\n")),(0,r.mdx)("p",null,"Pysa additionally supports attaching features to flows irrespective of sources,\nsinks, and TITO, using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AddFeatureToArgument")," annotation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def add_feature_to_argument.add_feature_to_first(\n  first: AddFeatureToArgument[Via[string_concat_lhs]],\n  second\n): ...\n")),(0,r.mdx)("p",null,"Note that ",(0,r.mdx)("strong",{parentName:"p"},"Pysa automatically adds some ",(0,r.mdx)("inlineCode",{parentName:"strong"},"via")," features with special meaning"),".\nSee the Automatic Features section for details."),(0,r.mdx)("h3",{id:"via-value-feature-using-viavalueof"},(0,r.mdx)("inlineCode",{parentName:"h3"},"via-value")," Feature Using ",(0,r.mdx)("inlineCode",{parentName:"h3"},"ViaValueOf[]")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value")," feature is similar to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"via")," feature, however, it captures\n",(0,r.mdx)("em",{parentName:"p"},"the value of the specified argument, rather than a feature name"),". Note that\nthis only works for string literals, boolean literals, numeric literals, and enums.\nFor example, ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value:Access-Control-Allow-Origin")," might indicate that the string\nliteral ",(0,r.mdx)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," was used to set a header in a Django response."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value")," feature can be added anywhere that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"via")," feature can be\nadded. It is added by specifying ",(0,r.mdx)("inlineCode",{parentName:"p"},"ViaValueOf[PARAMETER_NAME]"),", where\n",(0,r.mdx)("inlineCode",{parentName:"p"},"PARAMETER_NAME")," is the name of the function parameter for which you would like\nto capture the argument value. To continue the above example, this is how you\nwould capture the name of a header being set on a Django ",(0,r.mdx)("inlineCode",{parentName:"p"},"HttpResponse"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def django.http.response.HttpResponse.__setitem__(\n    self,\n    header: TaintSink[ResponseHeaderName],\n    value: TaintSink[ResponseHeaderValue, ViaValueOf[header]]\n): ...\n")),(0,r.mdx)("p",null,"In cases where the argument is not a constant, the feature will appear as\n",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value:<unknown>"),". If the argument is not provided at the call site (e.g,\nusing the default value), the feature will appear as ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value:<missing>"),"."),(0,r.mdx)("p",null,"You can also associate a tag with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value")," feature to ensure that different\n",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value")," annotations don't interfere with each other. Here's how you can retain\nthe information that the name of the header was being set:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def django.http.response.HttpResponse.__setitem__(\n    self,\n    header: TaintSink[ResponseHeaderName],\n    value: TaintSink[ResponseHeaderValue, ViaValueOf[header, WithTag["set-header"]]\n): ...\n')),(0,r.mdx)("p",null,"The feature would now appear as ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-set-header-value:Access-Control-Allow-Origin"),"."),(0,r.mdx)("h3",{id:"via-type-feature-using-viatypeof"},(0,r.mdx)("inlineCode",{parentName:"h3"},"via-type")," Feature Using ",(0,r.mdx)("inlineCode",{parentName:"h3"},"ViaTypeOf[]")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-type")," feature is nearly identical to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value")," feature, however,\nit captures ",(0,r.mdx)("em",{parentName:"p"},"the type of the specified argument, rather than it's value"),". Pysa\nwill retrieve the type information for the argument from Pyre, and add a feature\nsuch as ",(0,r.mdx)("inlineCode",{parentName:"p"},'"via-type": "str"'),", ",(0,r.mdx)("inlineCode",{parentName:"p"},'"via-type": "typing.List[str]"'),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},'"via-type":\n"typing.Any"')," (in the case Pyre doesn't have type information)."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"ViaTypeOf")," is useful for sinks such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"subprocess.run"),", which accepts\n",(0,r.mdx)("inlineCode",{parentName:"p"},"Union[bytes, str, Sequence]")," for it's ",(0,r.mdx)("inlineCode",{parentName:"p"},"arg")," parameter. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-type")," feature\ncan help identify which type the argument to ",(0,r.mdx)("inlineCode",{parentName:"p"},"arg")," actaully had. Knowing the\ntype of the argument can help assess the severity of a given issue (user\ncontrolled input in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"str")," passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"arg")," is much easier to exploit for RCE\nthan user controlled input in one element of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Sequence")," passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"arg"),")."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value")," feature can be added anywhere that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"via")," feature can be\nadded. It is added by specifying ",(0,r.mdx)("inlineCode",{parentName:"p"},"ViaTypeOf[PARAMETER_NAME]"),", where\n",(0,r.mdx)("inlineCode",{parentName:"p"},"PARAMETER_NAME")," is the name of the function parameter for which you would like\nto capture the argument value:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def subprocess.run(\n    args: TaintSink[RemoteCodeExecution, ViaTypeOf[args]],\n): ...\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-type")," feature also supports adding tags, using the same syntax as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value"),"\nfeature:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def subprocess.run(\n    args: TaintSink[RemoteCodeExecution, ViaTypeOf[args, WithTag["subprocess-arg"]]]\n): ...\n')),(0,r.mdx)("h3",{id:"supporting-features-dynamically-using-viadynamicfeature"},"Supporting Features Dynamically Using ",(0,r.mdx)("inlineCode",{parentName:"h3"},"ViaDynamicFeature[]")),(0,r.mdx)("p",null,"In general, Pysa requires you to specify the list of features that are allowed. This encourages features\nto be documented, and help avoid typos when writing features so that the features propagating in the analysis are\nconsistent with filters you might have on issues."),(0,r.mdx)("p",null,"However, there might be very specific cases where you want to dynamically generate features, depending on artifacts\nof the code. Most cases here can be handled by ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-type")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"via-value")," features, however, you might be dealing with\ndynamic code or metadata that the system can't detect. In these cases, Pysa allows skipping validation on features\nby the use of ",(0,r.mdx)("inlineCode",{parentName:"p"},"ViaDynamicFeature"),". This syntax has identical behavior to ",(0,r.mdx)("inlineCode",{parentName:"p"},"Via[]")," except the lack of validation. Here's an example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def subprocess.run(\n  args: TaintSink[RemoteCodeExecution, ViaDynamicFeature[subprocess_run_execution]]\n): ...\n")),(0,r.mdx)("h2",{id:"automatic-features"},"Automatic Features"),(0,r.mdx)("h3",{id:"via-feature"},(0,r.mdx)("inlineCode",{parentName:"h3"},"via")," Feature"),(0,r.mdx)("p",null,"In addition to the manually specified ",(0,r.mdx)("inlineCode",{parentName:"p"},"via")," features, Pysa automatically adds\nsome ",(0,r.mdx)("inlineCode",{parentName:"p"},"via")," features with special meaning such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"via:obscure"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"via:format-string"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"via:tito"),". ",(0,r.mdx)("inlineCode",{parentName:"p"},"via:obscure")," means that the flow passed\nthrough code that Pysa does not have access to analyze, and thus some taint flow\nassumptions were made. This can be a useful to filter out flows that may be more\nnoisy. ",(0,r.mdx)("inlineCode",{parentName:"p"},"via:format-string")," means that a flow passed through a ",(0,r.mdx)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0498/"},"python\nf-string")," (",(0,r.mdx)("inlineCode",{parentName:"p"},'f"Variable:\n{variable_name}"'),") or a ",(0,r.mdx)("inlineCode",{parentName:"p"},"str.format"),". Tito stands for taint-in-taint-out which refers to taint\nflows that enter a function via a parameter and then exit it in some form via\nthe return value. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"via:tito")," feature is attached automatically to all such\nflows."),(0,r.mdx)("h3",{id:"type-feature"},(0,r.mdx)("inlineCode",{parentName:"h3"},"type")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"type")," feature is an automatically added feature which indicates that the\nflow passes through a conversion to the specified type. This feature currently\nonly tracks conversion to numeric values (ie. ",(0,r.mdx)("inlineCode",{parentName:"p"},"type:scalar"),"). This can be useful\nfor filtering out flows when numeric values are highly unlikely to result in an\nexploitable flow, such as SQL injection or RCE."),(0,r.mdx)("h3",{id:"first-field-feature"},(0,r.mdx)("inlineCode",{parentName:"h3"},"first-field")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"first-field")," feature is automatically added to flows for the first field\naccess on the flow. E.g., if ",(0,r.mdx)("inlineCode",{parentName:"p"},"request")," is a source, and the flow starts with\n",(0,r.mdx)("inlineCode",{parentName:"p"},"request.f"),", then ",(0,r.mdx)("inlineCode",{parentName:"p"},"first-field:f")," should be attached to the flow."),(0,r.mdx)("h3",{id:"first-index-feature"},(0,r.mdx)("inlineCode",{parentName:"h3"},"first-index")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"first-index")," feature is an automatically added feature which indicates that\na flow starts with a dictionary access using the specified constant as the key.\nThis is useful in cases such as Django's ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"POST"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"META")," dictionaries on the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"HttpRequest")," object. A flow that started with as access of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"HTTP_REFERER"),"\nheader from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"META")," object would result in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"first-index:HTTP_REFERER"),"\nfeature being added."),(0,r.mdx)("h3",{id:"has-feature"},(0,r.mdx)("inlineCode",{parentName:"h3"},"has")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"has")," features is a summary feature for ",(0,r.mdx)("inlineCode",{parentName:"p"},"first-field")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"first-index"),".\nThus, ",(0,r.mdx)("inlineCode",{parentName:"p"},"has:first-index")," simply indicates that there is at least one\n",(0,r.mdx)("inlineCode",{parentName:"p"},"first-index:<name>")," feature present, and similarly for ",(0,r.mdx)("inlineCode",{parentName:"p"},"has:first-field"),"."),(0,r.mdx)("h3",{id:"always--modifier-on-features"},(0,r.mdx)("inlineCode",{parentName:"h3"},"always-")," Modifier on Features"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"always-")," modifier will automatically be added to any of the above features,\nwhen every single flow within an issue has the feature. For example, if an issue\ncaptures flows from three different sources of user input into a SQL sink, the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"always-type:scalar")," modifier would be added if all three of those flows pass\nthrough a conversion to ",(0,r.mdx)("inlineCode",{parentName:"p"},"int")," before reaching the sink. Note that ",(0,r.mdx)("strong",{parentName:"p"},"the\n",(0,r.mdx)("inlineCode",{parentName:"strong"},"always-")," version of a feature is ",(0,r.mdx)("em",{parentName:"strong"},"exclusive")," with the non-",(0,r.mdx)("inlineCode",{parentName:"strong"},"always-")," version"),";\nif ",(0,r.mdx)("inlineCode",{parentName:"p"},"always-type:scalar")," is present, ",(0,r.mdx)("inlineCode",{parentName:"p"},"type:scalar")," will not be present."),(0,r.mdx)("h3",{id:"broadening-feature"},(0,r.mdx)("inlineCode",{parentName:"h3"},"broadening")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"broadening"),' feature is automatically added whenever Pysa makes an\napproximation about a taint flow. This is also referred as "taint collapsing"\nbecause the taint is internally represented as a tree structure where edges are\nattributes or indexes. Collapsing usually leads to tainting a whole object\ninstead of a single attribute of that object.'),(0,r.mdx)("p",null,"Pysa also provides more fine grained features for all scenario where we make\napproximations."),(0,r.mdx)("h4",{id:"widen-broadening-feature"},(0,r.mdx)("inlineCode",{parentName:"h4"},"widen-broadening")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"widen-broadening")," feature is added when number of tainted attributes of an\nobject reaches a certain threshold. For scalability reasons, Pysa cannot track\nan infinite amount of attributes or indexes, and thus makes the approximation\nthat the whole object is tainted."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'d = {}\nif condition:\n  d["a"] = source()\n  d["b"] = source()\n  # c, d, e, etc.\nelse:\n  d["1"] = source()\n  d["2"] = source()\n  # etc.\nsink(d) # too many indexes, the whole `d` variable becomes tainted.\n')),(0,r.mdx)("h4",{id:"tito-broadening-feature"},(0,r.mdx)("inlineCode",{parentName:"h4"},"tito-broadening")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"tito-broadening"),' feature is added when an object with tainted attributes is\npropagated through a function to its return value. For correctness reasons, Pysa\nmakes the approximation that the whole returned object is tainted. This is\nreferred as "Taint-In-Taint-Out collapsing".'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def identity(x):\n  return x\n\ndef foo():\n  x = {"a": source(), "b": "foo"} # only `x["a"]` is tainted.\n  y = identity(x)\n  sink(y) # the whole `y` variable is tainted because of tito collapsing.\n  sink(y[\'b\']) # since `y` is tainted, any access to `y` is also tainted.\n')),(0,r.mdx)("h4",{id:"issue-broadening-feature"},(0,r.mdx)("inlineCode",{parentName:"h4"},"issue-broadening")," Feature"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"issue-broadening")," feature is added when an object with a tainted attribute\nreaches a taint sink. Pysa will consider the flow as valid even if the whole\nobject is not tainted."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'d = {"a": source(), "b": "foo"}\nsink(d) # `d` itself is not tainted, but `d["a"]` is, thus we emit an issue.\n')))}u.isMDXComponent=!0}}]);