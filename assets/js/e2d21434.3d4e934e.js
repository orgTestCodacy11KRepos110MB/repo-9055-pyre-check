"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[319],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),m=function(e){return function(t){var n=c(t.components);return o.createElement(e,a({},t,{components:n}))}},c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(i,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var o,r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],s={id:"pysa-model-generators",title:"Dynamically Generating Models",sidebar_label:"Dynamically Generating Models"},d=void 0,m={unversionedId:"pysa-model-generators",id:"pysa-model-generators",title:"Dynamically Generating Models",description:"Some sources and sinks may be too numerous or too rapidly changing for defining",source:"@site/docs/pysa_precollectors.md",sourceDirName:".",slug:"/pysa-model-generators",permalink:"/docs/pysa-model-generators",draft:!1,editUrl:"https://github.com/facebook/pyre-check/tree/main/documentation/website/docs/pysa_precollectors.md",tags:[],version:"current",frontMatter:{id:"pysa-model-generators",title:"Dynamically Generating Models",sidebar_label:"Dynamically Generating Models"},sidebar:"pysa",previous:{title:"Shipping Pysa Models and Rules",permalink:"/docs/pysa-shipping-rules-models"},next:{title:"Model DSL",permalink:"/docs/pysa-model-dsl"}},c={},p=[{value:"Running Model Generators",id:"running-model-generators",level:2},{value:"Example Model Generators",id:"example-model-generators",level:2},{value:"<code>RESTApiSourceGenerator</code>",id:"restapisourcegenerator",level:3},{value:"<code>ExitNodeGenerator</code>",id:"exitnodegenerator",level:3},{value:"<code>GraphQLSourceGenerator</code>",id:"graphqlsourcegenerator",level:3},{value:"<code>AnnotatedFreeFunctionWithDecoratorGenerator</code>",id:"annotatedfreefunctionwithdecoratorgenerator",level:3},{value:"Writing Model Generators",id:"writing-model-generators",level:2},{value:"Adding a new model generator",id:"adding-a-new-model-generator",level:3}],u=(o="InternalModelGenerators",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),h={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Some sources and sinks may be too numerous or too rapidly changing for defining\nthem statically to be practical. For these scenarios, Pysa has the concept of\nmodel generators, which can generate taint models by reading the project's source code before static analysis is\nstarted. The current set of model generators is stored in\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/pyre-check/tree/main/tools/generate_taint_models"},(0,i.mdx)("inlineCode",{parentName:"a"},"tools/generate_taint_models")),"\nwithin the pyre-check repository."),(0,i.mdx)("p",null,"Pysa now has the concept of a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/pysa-model-dsl"},"Model DSL"),", which supports\nsome model generation usecases which could previously only be done with model\ngenerators. You should prefer the Model DSL if it supports your usecase."),(0,i.mdx)("h2",{id:"running-model-generators"},"Running Model Generators"),(0,i.mdx)("p",null,"The majority of model generators require access to a running environment. For\nexample, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"RESTApiSourceGenerator")," needs to be able to access ",(0,i.mdx)("inlineCode",{parentName:"p"},"urlpatterns"),"\nconfigured for Django, meaning it has to import (and implicitly run) the file\nyou use to configure routing. The recommended way to run model generators is to set\nup a small script within your repository that can run within the virtual\nenvironment for your project. ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"https://github.com/facebook/pyre-check/tree/main/documentation/pysa_tutorial/exercise5"},"This tutorial\nexercise"),"\nprovides an example of how to setup and use model generators.")),(0,i.mdx)("h2",{id:"example-model-generators"},"Example Model Generators"),(0,i.mdx)("p",null,"The set of model generators is always changing, but below are some examples of\nmodel generators which are currently provided out of the box with Pysa."),(0,i.mdx)("h3",{id:"restapisourcegenerator"},(0,i.mdx)("a",{parentName:"h3",href:"https://github.com/facebook/pyre-check/blob/main/tools/generate_taint_models/get_REST_api_sources.py"},(0,i.mdx)("inlineCode",{parentName:"a"},"RESTApiSourceGenerator"))),(0,i.mdx)("p",null,"This model generator is intended to taint all arguments to ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/2.2/topics/http/views/"},"Django view\nfunctions")," as\n",(0,i.mdx)("inlineCode",{parentName:"p"},"UserControlled"),". This is useful when you have views that receive\nuser-controlled data as arguments separate from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"HttpRequest")," parameter,\nsuch as when ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/2.2/topics/http/urls/#example"},"capturing values from the request\npath"),"."),(0,i.mdx)("h3",{id:"exitnodegenerator"},(0,i.mdx)("a",{parentName:"h3",href:"https://github.com/facebook/pyre-check/blob/main/tools/generate_taint_models/get_exit_nodes.py"},(0,i.mdx)("inlineCode",{parentName:"a"},"ExitNodeGenerator"))),(0,i.mdx)("p",null,"This generator is intended to taint all data returned from ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/2.2/topics/http/views/"},"Django view\nfunctions")," as\n",(0,i.mdx)("inlineCode",{parentName:"p"},"ReturnedToUser"),". This is useful when you have decorators which allow your view\nfunctions to return raw python types, rather than ",(0,i.mdx)("inlineCode",{parentName:"p"},"HttpResponse")," objects. Note\nthat you do not need this generator if you always construct ",(0,i.mdx)("inlineCode",{parentName:"p"},"HttpResponse"),"\nobjects, because they are already annotated as ",(0,i.mdx)("inlineCode",{parentName:"p"},"ReturnedToUser")," sinks."),(0,i.mdx)("h3",{id:"graphqlsourcegenerator"},(0,i.mdx)("a",{parentName:"h3",href:"https://github.com/facebook/pyre-check/blob/main/tools/generate_taint_models/get_graphql_sources.py"},(0,i.mdx)("inlineCode",{parentName:"a"},"GraphQLSourceGenerator"))),(0,i.mdx)("p",null,"This model generator is similar to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"RESTApiSourceGenerator")," and\n",(0,i.mdx)("inlineCode",{parentName:"p"},"ExitNodeGenerator")," discussed above, but it is intended to generate models with\n",(0,i.mdx)("inlineCode",{parentName:"p"},"UserControlled")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"ReturnedToUser")," annotations for graphene-style GraphQL\n",(0,i.mdx)("inlineCode",{parentName:"p"},"resolver")," functions."),(0,i.mdx)("h3",{id:"annotatedfreefunctionwithdecoratorgenerator"},(0,i.mdx)("a",{parentName:"h3",href:"https://github.com/facebook/pyre-check/blob/main/tools/generate_taint_models/get_annotated_free_functions_with_decorator.py"},(0,i.mdx)("inlineCode",{parentName:"a"},"AnnotatedFreeFunctionWithDecoratorGenerator"))),(0,i.mdx)("p",null,"This model generator provides general purpose functionality to annotate all free\nfunctions which have a given decorator. The annotations can be used to mark any\nof the function's arguments or return types as sources, sinks, features, etc.\nThis is useful whenever you have a function which modifies taint analysis\nexpectations. For example, if you had a decorator which applies rate limiting to\nfunctions, you could use this model generator to add a feature to all flow passing\nthrough rate limited functions, to enable you to filter them out from a given\nrule."),(0,i.mdx)("h2",{id:"writing-model-generators"},"Writing Model Generators"),(0,i.mdx)("p",null,"All model generator code lives in\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/pyre-check/tree/main/tools/generate_taint_models"},(0,i.mdx)("inlineCode",{parentName:"a"},"tools/generate_taint_models")),"\nwithin the pyre-check repository."),(0,i.mdx)("h3",{id:"adding-a-new-model-generator"},"Adding a new model generator"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/pyre-check/commit/ea900c5e77d4c6d951e9c42b7310613f7f6edf08#diff-9ef72470683730531933e74a50ea98a1"},"This commit"),"\nprovides an example of how to add a new model generator."),(0,i.mdx)("p",null,"The basic workflow is:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Create a new file under ",(0,i.mdx)("inlineCode",{parentName:"li"},"generate_taint_models")," of the form ",(0,i.mdx)("inlineCode",{parentName:"li"},"get_<pattern of model>"),"."),(0,i.mdx)("li",{parentName:"ol"},"Write a class that inherits from ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/pyre-check/blob/main/tools/generate_taint_models/model_generator.py"},"ModelGenerator"),"."),(0,i.mdx)("li",{parentName:"ol"},"Collect all the callables you're interested in modeling via ",(0,i.mdx)("inlineCode",{parentName:"li"},"gather_functions_to_model"),"."),(0,i.mdx)("li",{parentName:"ol"},"Convert the callables you've collected into models. The ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/pyre-check/blob/main/tools/generate_taint_models/model.py"},"CallableModel")," class is a convenience that pretty prints things in the right way - you just need to specify what kind of taint the parameters and return value should have, specify the callable to model, and call generate()."),(0,i.mdx)("li",{parentName:"ol"},"Write unit tests (",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/pyre-check/blob/922410239404aa436691754402b0c3db68c5a46f/tools/generate_taint_models/tests/get_annotated_free_functions_with_decorator_test.py"},"example"),")."),(0,i.mdx)("li",{parentName:"ol"},"Import your new class in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"__init__")," file (",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/pyre-check/blob/922410239404aa436691754402b0c3db68c5a46f/tools/generate_taint_models/__init__.py#L7"},"example"),").")),(0,i.mdx)(u,{mdxType:"InternalModelGenerators"}))}g.isMDXComponent=!0}}]);