"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[333],{40722:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(67294),a=t(10308),o=t(94184),u=t.n(o),s=(t(36742),t(10412)),l=t(29656),c=t(99578);s.default.canUseDOM&&t(5321);function i(e){return r.createElement("div",{style:{border:"1px solid lightgrey"}},r.createElement(l.fk,{value:e.code,options:{mode:"python",lineNumbers:!0,readOnly:!!e.busy&&"nocursor"},onBeforeChange:function(n,t,r){e.setCode(r)}}))}function d(e){var n=e.busy?{color:"lightgrey",cursor:"default"}:null;return r.createElement("div",{style:{textAlign:"right"}},r.createElement("div",{className:u()("button button--outline button--secondary",c.Z.getStarted),style:n,onClick:e.check},e.busy?r.createElement("div",{className:c.Z.spinner}):null,"Check (Ctrl-Enter)"))}function m(e){var n=e.results;if(null==n)return null;var t=n.data.errors;if(0!==t.length){var a=t.map((function(e){var n=e.line+":"+e.column+": "+e.description;return r.createElement("div",{style:{fontFamily:"monospace"},key:n}," ",n)}));return r.createElement("div",null,a)}return r.createElement("div",null,"No Errors!")}function p(){var e=s.default.canUseDOM?new URLSearchParams(window.location.search).get("input"):null;return null==e?"# Pyre is being run in strict mode: https://www.internalfb.com/intern/staticdocs/pyre/docs/types-in-python#strict-mode\n# Use the pyre-unsafe header to run in unsafe mode.\n\nfrom typing import *\n\n# reveal_type will produce a type error that tells you the type Pyre has\n# computed for the argument (in this case, int)\nreveal_type(1)\n":e}const y=function(){var e=(0,r.useState)(null),n=e[0],t=e[1],o=(0,r.useState)(!1),u=(o[0],o[1],(0,r.useState)(p())),s=u[0],l=u[1],y=(0,r.useState)(!1),f=y[0],h=y[1],g=function(){h(!0);var e=function(e){var n=encodeURIComponent(e);return window.history.pushState(e,"unused","/play?input="+n),n}(s);fetch("https://play.pyre-check.org/check?input="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t(e),h(!1)})).catch((function(e){return console.error(e)}))};return(0,r.useEffect)((function(){!function(e){document.addEventListener("keydown",(function(n){"Enter"===n.key&&(n.ctrlKey||n.metaKey)&&(n.preventDefault(),n.stopPropagation(),e())}))}(g)}),[]),r.createElement(a.Z,{title:"Playground"},r.createElement("main",{className:c.Z.main},r.createElement("h1",{className:c.Z.heading},"Playground"),r.createElement(i,{code:s,setCode:l,busy:f}),r.createElement("br",null),r.createElement(d,{check:g,busy:f}),r.createElement("br",null),r.createElement(m,{results:n})))}},99578:(e,n,t)=>{t.d(n,{Z:()=>r});const r={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",media:"media_2ENC",featureImage:"featureImage_ZtzX",main:"main_17dy",playgroundMain:"playgroundMain_304S",heading:"heading_3aD-",spinner:"spinner_2dr8",spin:"spin_262F",card:"card_2AFH",runPysa:"runPysa_2s5o",resultsCard:"resultsCard_2mne"}}}]);