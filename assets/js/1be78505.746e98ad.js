(self.webpackChunk=self.webpackChunk||[]).push([[514,608],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21020:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(22122),a=n(67294),o=n(86010),l=n(24544);var i=n(87594),s=n.n(i);const c={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var u=n(85350),d=n(86700);const p=function(){var e=(0,d.LU)().prism,t=(0,u.Z)().isDarkTheme,n=e.theme||c,r=e.darkTheme||n;return t?r:n};var m=n(24973);const f="codeBlockContainer_K1bP",h="codeBlockContent_hGly",b="codeBlockTitle_eoMF",y="codeBlock_23N8",g="codeBlockWithTitle_2JqI",v="copyButton_Ue-o",k="codeBlockLines_39YC";var E=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function N(e){var t=e.children,n=e.className,i=e.metastring,c=e.title,u=(0,d.LU)().prism,N=(0,a.useState)(!1),O=N[0],w=N[1],j=(0,a.useState)(!1),P=j[0],A=j[1];(0,a.useEffect)((function(){A(!0)}),[]);var x=(0,d.bc)(i)||c,T=(0,a.useRef)(null),L=[],B=p(),S=Array.isArray(t)?t.join(""):t;if(i&&E.test(i)){var _=i.match(E)[1];L=s()(_).filter((function(e){return e>0}))}var Z=n&&n.replace(/language-/,"");!Z&&u.defaultLanguage&&(Z=u.defaultLanguage);var I=S.replace(/\n$/,"");if(0===L.length&&void 0!==Z){for(var M,R="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(Z),F=S.replace(/\n$/,"").split("\n"),W=0;W<F.length;){var z=W+1,H=F[W].match(D);if(null!==H){switch(H.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=z+",";break;case"highlight-start":M=z;break;case"highlight-end":R+=M+"-"+(z-1)+","}F.splice(W,1)}else W+=1}L=s()(R),I=F.join("\n")}var G=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(I),w(!0),setTimeout((function(){return w(!1)}),2e3)};return a.createElement(l.ZP,(0,r.Z)({},l.lG,{key:String(P),theme:B,code:I,language:Z}),(function(e){var t,n=e.className,l=e.style,i=e.tokens,s=e.getLineProps,c=e.getTokenProps;return a.createElement("div",{className:f},x&&a.createElement("div",{style:l,className:b},x),a.createElement("div",{className:(0,o.default)(h,Z)},a.createElement("div",{tabIndex:0,className:(0,o.default)(n,y,"thin-scrollbar",(t={},t[g]=x,t))},a.createElement("div",{className:k,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return L.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.createElement("div",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))})))})))),a.createElement("button",{ref:T,type:"button","aria-label":(0,m.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.default)(v),onClick:G},O?a.createElement(m.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(m.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},63616:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>oe});var r=n(67294),a=n(3905),o=n(52263),l=n(46291),i=n(32611),s=n(22122),c=n(19756),u=n(86010),d=n(86700),p=n(80944),m=n(31839),f=n(93783),h=n(77898),b=n(36742),y=n(13919),g=n(55537);const v=function(e){return r.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var k=n(84478),E=n(24973);const C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",O="sidebarHidden_2kNb",w="sidebarLogo_3h0W",j="menu_Bmed",P="menuLinkText_2aKo",A="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",L="sidebarMenuIcon_fgN0",B="sidebarMenuCloseIcon_1lpH",S="menuLinkExternal_1OhN";var _=["items"],Z=["item","onItemClick","collapsible","activePath"],I=["item","onItemClick","activePath","collapsible"];var M=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},R=(0,r.memo)((function(e){var t=e.items,n=(0,c.Z)(e,_);return t.map((function(e,t){return r.createElement(D,(0,s.Z)({key:t,item:e},n))}))}));function D(e){switch(e.item.type){case"category":return r.createElement(F,e);case"link":default:return r.createElement(W,e)}}function F(e){var t,n,a,o=e.item,l=e.onItemClick,i=e.collapsible,d=e.activePath,p=(0,c.Z)(e,Z),m=o.items,f=o.label,h=M(o,d),b=(n=h,a=(0,r.useRef)(n),(0,r.useEffect)((function(){a.current=n}),[n]),a.current),y=(0,r.useState)((function(){return!!i&&(!h&&o.collapsed)})),g=y[0],v=y[1],k=(0,r.useRef)(null),E=(0,r.useState)(void 0),C=E[0],N=E[1],O=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){h&&!b&&g&&v(!1)}),[h,b,g]);var w=(0,r.useCallback)((function(e){e.preventDefault(),C||O(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[C]);return 0===m.length?null:r.createElement("li",{className:(0,u.default)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement("a",(0,s.Z)({className:(0,u.default)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[P]=!i,t)),onClick:i?w:void 0,href:i?"#!":void 0},p),f),r.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){g||O(!1)}},r.createElement(R,{items:m,tabIndex:g?"-1":"0",onItemClick:l,collapsible:i,activePath:d})))}function W(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,c.Z)(e,I)),i=n.href,d=n.label,p=M(n,o);return r.createElement("li",{className:"menu__list-item",key:d},r.createElement(b.default,(0,s.Z)({className:(0,u.default)("menu__link",(t={"menu__link--active":p},t[S]=!(0,y.Z)(i),t)),to:i},(0,y.Z)(i)&&{isNavLink:!0,exact:!0,onClick:a},l),d))}function z(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,E.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.default)("button button--secondary button--outline",x),onClick:t},r.createElement(v,{className:T}))}function H(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,E.translate)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.translate)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,u.default)(L,B)},"\xd7"):r.createElement(k.Z,{className:L,height:24,width:24}))}const G=function(e){var t,n,a=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,c=e.isHidden,b=function(){var e=(0,p.Z)().isAnnouncementBarClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),y=(0,d.LU)(),v=y.navbar.hideOnScroll,k=y.hideableSidebar,E=(0,p.Z)().isAnnouncementBarClosed,P=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var a=(0,f.Z)();return(0,r.useEffect)((function(){a===f.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=P.showResponsiveSidebar,T=P.closeResponsiveSidebar,L=P.toggleResponsiveSidebar;return r.createElement("div",{className:(0,u.default)(C,(t={},t[N]=v,t[O]=c,t))},v&&r.createElement(g.Z,{tabIndex:-1,className:w}),r.createElement("div",{className:(0,u.default)("menu","menu--responsive","thin-scrollbar",j,(n={"menu--show":x},n[A]=!E&&b,n))},r.createElement(H,{responsiveSidebarOpened:x,onClick:L}),r.createElement("ul",{className:"menu__list"},r.createElement(R,{items:o,onItemClick:T,collapsible:i,activePath:a}))),k&&r.createElement(z,{onClick:s}))};var X=n(75854),K=n.n(X),U=n(24608),V=n(5977);const q="docPage_31aa",J="docMainContainer_3ufF",Q="docMainContainerEnhanced_3NYZ",Y="docSidebarContainer_3Kbt",$="docSidebarContainerHidden_3pA8",ee="collapsedDocSidebar_2JMH",te="expandSidebarButtonIcon_1naQ",ne="docItemWrapperEnhanced_2vyJ",re="docItemWrapper_3FMP";function ae(e){var t,n,l,s,c,p=e.currentDocRoute,m=e.versionMetadata,f=e.children,h=(0,o.default)(),b=h.siteConfig,y=h.isClient,g=m.pluginId,k=m.permalinkToSidebar,C=m.docsSidebars,N=m.version,O=k[p.path],w=C[O],j=(0,r.useState)(!1),P=j[0],A=j[1],x=(0,r.useState)(!1),T=x[0],L=x[1],B=(0,r.useCallback)((function(){T&&L(!1),A(!P)}),[T]);return r.createElement(i.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(g,N)}},r.createElement("div",{className:q},w&&r.createElement("div",{className:(0,u.default)(Y,(t={},t[$]=P,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Y)&&P&&L(!0)},role:"complementary"},r.createElement(G,{key:O,sidebar:w,path:p.path,sidebarCollapsible:null==(n=null==(l=b.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:B,isHidden:T}),T&&r.createElement("div",{className:ee,title:(0,E.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:B,onClick:B},r.createElement(v,{className:te}))),r.createElement("main",{className:(0,u.default)(J,(s={},s[Q]=P||!w,s))},r.createElement("div",{className:(0,u.default)("container padding-vert--lg",re,(c={},c[ne]=P,c))},r.createElement(a.MDXProvider,{components:K()},f)))))}const oe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,V.LX)(a.pathname,e)}));return o?r.createElement(ae,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t)):r.createElement(U.default,e)}},3009:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(67294),a=n(36742),o=n(20625),l=n.n(o),i=n(19756),s=n(86010),c=n(24973),u=n(86700);const d="enhancedAnchor_2LWZ";var p=["id"];const m=function(e){return function(t){var n,a=t.id,o=(0,i.Z)(t,p),l=(0,u.LU)().navbar.hideOnScroll;return a?r.createElement(e,o,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,s.default)("anchor",(n={},n[d]=!l,n)),id:a}),o.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,o)}};const f={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l(),e):r.createElement("code",e)},a:function(e){return r.createElement(a.default,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(l(),(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:m("h1"),h2:m("h2"),h3:m("h3"),h4:m("h4"),h5:m("h5"),h6:m("h6")}},24608:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(32611),o=n(24973);const l=function(){return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},20625:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(67294)),o=r(n(21020)),l=r(n(52263)),i=n(1974),s=r(n(25510)),c=[{names:["fbsource","fbs"],project:"fbsource",canonicalName:"fbsource"},{names:["www"],project:"facebook-www",canonicalName:"www"}];t.default=function(e){var t,n,r,u,d,p,m,f=l.default(),h=f.siteConfig,b=f.isClient,y=o.default(e);if(!b)return y;if("string"!=typeof e.file)return y;if(i.isInternal()){if(!h.customFields)return y;var g=h.customFields,v=g.fbRepoName,k=g.ossRepoPath;if("string"!=typeof v)return y;t="string"==typeof k?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e.startsWith("/")?e.slice(1):e})).map((function(e){return e.endsWith("/")?e.slice(0,e.length-1):e})).join("/")}(k,e.file):e.file;var E=c.find((function(e){return e.names.includes(v.toLowerCase())}));if(void 0===E)return y;n=function(e,t){var n=new URL("https://www.internalfb.com");return n.pathname="/code/"+e.canonicalName+"/"+t,n.toString()}(E,t),r=function(e,t){var n=new URL("https://www.internalfb.com/intern/nuclide/open/arc");return n.searchParams.append("project",e.project),n.searchParams.append("paths[0]",t),n.toString()}(E,t)}else{if("string"!=typeof h.organizationName||"string"!=typeof h.projectName)return y;t=e.file,u=h.organizationName,d=h.projectName,p=e.file,(m=new URL("https://github.com")).pathname="/"+u+"/"+d+"/blob/master/"+p,n=m.toString(),r=null}var C=t.split("/"),N=C[C.length-1];return a.default.createElement("div",null,a.default.createElement("a",{href:n,title:"Browse entire file",target:"_blank",rel:"noreferrer",onClick:function(){return i.feedback.reportFeatureUsage({featureName:"browse-file",id:t})},style:{borderRadius:"8px 8px 0px 0px",padding:"6px 10px",backgroundColor:"#292e3e",color:"var(--ifm-color-primary)",fontWeight:300}},N),null!==r?a.default.createElement("a",{target:"_blank",rel:"noreferrer",href:r,onClick:function(){return i.feedback.reportFeatureUsage({featureName:"open-in-vscode",id:t})}},a.default.createElement("img",{style:{padding:"0 6px",height:"16px"},title:"Open in VSCode @ FB",src:s.default})):null,y)}},25510:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default="data:image/png;base64,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"},75854:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(3009)),o=n(1974),l=Object.assign(Object.assign({},a.default),{FbInternalOnly:o.FbInternalOnly,FBInternalOnly:o.FbInternalOnly,OssOnly:o.OssOnly,OSSOnly:o.OssOnly});t.default=l},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},24544:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f,lG:()=>l});var r=n(87410);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=n(67294),l={Prism:r.Z,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?s({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?s({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],s=[i];l>-1;){for(;(o=r[l]++)<a[l];){var p=void 0,m=t[l],f=n[l][o];if("string"==typeof f?(m=l>0?m:["plain"],p=f):(m=d(m,f.type),f.alias&&(m=d(m,f.alias)),p=f.content),"string"==typeof p){var h=p.split(c),b=h.length;i.push({types:m,content:h[0]});for(var y=1;y<b;y++)u(i),s.push(i=[]),i.push({types:m,content:h[y]})}else l++,t.push(m),n.push(p),r.push(0),a.push(p.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return u(i),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)}}]);