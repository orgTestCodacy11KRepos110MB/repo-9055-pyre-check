"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[559],{33605:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var o=n(67294),r=n(87190),a=n(94184),s=n.n(a),l=(n(39960),n(10412)),c=n(29656),u=n(91444),d=(n(49647),n(99578)),i=function(){};l.default.canUseDOM&&(n(5321),i=n(57046));var m={get:function(){}};"undefined"!=typeof window&&(m=new URLSearchParams(window.location.search));var f=decodeURI(m.get("code")),p=decodeURI(m.get("models")),y=decodeURI(m.get("use_os_models"));function h(e){return o.createElement("div",{className:d.Z.card},o.createElement("h4",null,"Code"),o.createElement(_,{check:e.check,busy:e.busy}),o.createElement(c.fk,{value:e.code,options:{mode:"text/x-python",lineNumbers:!0,readOnly:!!e.busy&&"nocursor"},onBeforeChange:function(t,n,o){e.setCode(o)}}))}function g(e,t){var n=null;return"undefined"!=typeof window&&(n=localStorage.getItem(e)),null===n||""===n?t:n}function _(e){var t=e.busy?{color:"lightgrey",cursor:"default"}:null;return o.createElement("div",{style:{textAlign:"right"}},o.createElement("div",{className:s()("button button--outline button--secondary",d.Z.getStarted,d.Z.runPysa),style:t,onClick:e.check},e.busy?o.createElement("div",{className:d.Z.spinner}):null,"Run Pysa"))}function b(e){return o.createElement("div",{style:{textAlign:"right"}},o.createElement("div",{className:s()("button button--outline button--secondary",d.Z.getStarted,d.Z.runPysa),onClick:e.click},"Copy Shareable Link"))}function v(e){var t=e.results,n=t;return t&&(n=void 0!==t.errors?t.errors.join("\n"):t.data.join("\n")),o.createElement("div",{className:s()(d.Z.card,d.Z.resultsCard)},o.createElement("h4",null,"Results"),o.createElement("div",{style:{fontFamily:"monospace"}},n||"Run Pysa to get results"))}function E(e){return o.createElement(b,{click:function(){if("undefined"!=typeof window){var t=window.location.href+"?code="+encodeURI(e.code)+"&models="+encodeURI(e.models)+"&use_os_models="+encodeURI(e.useOSModels);navigator.clipboard.writeText(t).then((function(){(0,u.Am)("Link copied to clipboard")}),(function(){(0,u.Am)("Failed to copy to clipboard")}))}}})}function k(e){return o.createElement("div",{className:d.Z.card},o.createElement("h4",null,"Models"),o.createElement(c.fk,{value:e.model,options:{mode:"text/x-python",lineNumbers:!0,theme:"default height100"},onBeforeChange:function(t,n,o){e.setModel(o)}}),o.createElement("input",{type:"checkbox",defaultChecked:e.useOSModels,onChange:function(t){e.setUseOSModels(t.target.checked)}}),o.createElement("label",null,"Use open source models"))}const S=function(){var e=(0,o.useState)(null),t=e[0],n=e[1],a=(0,o.useState)("null"===f?g("code",'import subprocess\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/rce/<string:payload>")\ndef definite_rce(payload: str) -> None:\n    subprocess.run(payload, shell=True)'):f),s=a[0],l=a[1],c=(0,o.useState)(!1),m=c[0],_=c[1],b=(0,o.useState)("null"===p?g("model","#Define your custom models here"):p),S=b[0],w=b[1],C=(0,o.useState)("true"===("null"===y?g("use_os_models","true"):y)),I=C[0],M=C[1],O=i("ws://127.0.0.1:5000/analyze",{reconnection:!1}),U=[];return(0,o.useEffect)((function(){O.on("pysa_results_channel",(function(e){void 0===e.type?(n({errors:["Invalid data received from the server."]}),_(!1)):"finished"===e.type?_(!1):"output"===e.type&&(void 0===e.line?(n({errors:["Invalid data received from the server."]}),_(!1)):U.push(e.line),n({data:U}))})),O.on("connect_error",(function(){_(!1),n({errors:["Error establishing a connection to the server."]})}))}),[t]),(0,o.useEffect)((function(){"undefined"!=typeof window&&(localStorage.setItem("code",s),localStorage.setItem("model",S),localStorage.setItem("use_os_models",I))})),o.createElement(r.Z,{title:"Pysa Playground"},o.createElement("main",{className:d.Z.playgroundMain},o.createElement(k,{model:S,setModel:w,useOSModels:I,setUseOSModels:M}),o.createElement(E,{code:s,models:S,useOSModels:I}),o.createElement(v,{results:t}),o.createElement(h,{code:s,setCode:l,busy:m,check:function(){_(!0),U=[],O.emit("analyze",{input:s,model:S,use_builtin_pysa_models:I})}}),o.createElement(u.Ix,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1})))}},99578:(e,t,n)=>{n.d(t,{Z:()=>o});const o={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",media:"media_L2aT",featureImage:"featureImage_yA8i",main:"main_MeqP",playgroundMain:"playgroundMain_uARe",heading:"heading_AAq7",spinner:"spinner_Wr6O",spin:"spin_NH6Z",card:"card_UXd2",runPysa:"runPysa_zh3R",resultsCard:"resultsCard_BSEt"}}}]);