"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[333],{40722:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(67294),a=t(10308),l=t(94184),u=t.n(l),c=(t(36742),t(29656)),o=t(99578);function s(e){return r.createElement("div",{style:{border:"1px solid lightgrey"}},r.createElement(c.fk,{value:e.code,options:{mode:"python",lineNumbers:!0,readOnly:!!e.busy&&"nocursor"},onBeforeChange:function(n,t,r){e.setCode(r)}}))}function i(e){var n=e.busy?{color:"lightgrey",cursor:"default"}:null;return r.createElement("div",{style:{textAlign:"right"}},r.createElement("div",{className:u()("button button--outline button--secondary",o.Z.getStarted),style:n,onClick:e.check},e.busy?r.createElement("div",{className:o.Z.spinner}):null,"Check"))}function d(e){var n=e.results;if(null==n)return null;var t=n.data.errors.map((function(e){var n=e.line+":"+e.column+": "+e.description;return r.createElement("div",{style:{fontFamily:"monospace"},key:n}," ",n)}));return r.createElement("div",null,t)}function m(){var e=function(){try{return new URLSearchParams(window.location.search).get("input")}catch(e){return null}}();return null==e?"reveal_type(1)":e}const h=function(){var e=(0,r.useState)(null),n=e[0],t=e[1],l=(0,r.useState)(m()),u=l[0],c=l[1],h=(0,r.useState)(!1),y=h[0],f=h[1];return r.createElement(a.Z,{title:"Playground"},r.createElement("main",{className:o.Z.main},r.createElement("h1",{className:o.Z.heading},"Playground"),r.createElement(s,{code:u,setCode:c,busy:y}),r.createElement("br",null),r.createElement(i,{check:function(){f(!0);var e=encodeURIComponent(u);fetch("https://play.pyre-check.org/check?input="+e,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t(e),f(!1)})).catch((function(e){return console.error(e)}))},busy:y}),r.createElement("br",null),r.createElement(d,{results:n})))}},99578:(e,n,t)=>{t.d(n,{Z:()=>r});const r={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",media:"media_2ENC",featureImage:"featureImage_ZtzX",main:"main_17dy",playgroundMain:"playgroundMain_304S",heading:"heading_3aD-",spinner:"spinner_2dr8",spin:"spin_262F",card:"card_2AFH",runPysa:"runPysa_2s5o",resultsCard:"resultsCard_2mne"}}}]);