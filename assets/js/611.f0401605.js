(self.webpackChunk=self.webpackChunk||[]).push([[611],{4478:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(2122),r=n(9756),l=n(7294),o=["width","height","className"];const c=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=(0,r.Z)(e,o);return l.createElement("svg",(0,a.Z)({"aria-label":"Menu",className:s,width:n,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),l.createElement("title",null,"Menu"),l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},2611:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ie});var a=n(7294),r=n(6010),l=n(4973),o=n(5977);const c="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const s=function(){var e=(0,a.useRef)(null),t=(0,o.TH)();return(0,a.useEffect)((function(){!t.hash&&e.current&&i(e.current)}),[t.pathname]),a.createElement("div",{ref:e},a.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(6700),m=n(944);const d="announcementBar_3WsW",f="announcementBarClose_38nx",v="announcementBarContent_3EUC",h="announcementBarCloseable_3myR";const b=function(){var e,t=(0,m.Z)(),n=t.isAnnouncementBarClosed,o=t.closeAnnouncementBar,c=(0,u.LU)().announcementBar;if(!c)return null;var i=c.content,s=c.backgroundColor,b=c.textColor,g=c.isCloseable;return!i||g&&n?null:a.createElement("div",{className:d,style:{backgroundColor:s,color:b},role:"banner"},a.createElement("div",{className:(0,r.default)(v,(e={},e[h]=g,e)),dangerouslySetInnerHTML:{__html:i}}),g?a.createElement("button",{type:"button",className:f,onClick:o,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(2122);const E=function(){return null};var p=n(2263);const k={toggle:"toggle_71bT"};var _=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.default)(k.toggle,k.dark),style:n},t)},N=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.default)(k.toggle,k.light),style:n},t)},y=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,a.useState)(l),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.default)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},a.createElement("div",{className:"react-toggle-track"},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),a.createElement("div",{className:"react-toggle-thumb"}),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function w(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,c=(0,p.default)().isClient;return a.createElement(y,(0,g.Z)({disabled:!c,icons:{checked:a.createElement(_,{icon:n,style:r}),unchecked:a.createElement(N,{icon:l,style:o})}},e))}var C=n(5350),Z=n(7898);const L=function(e){var t=(0,o.TH)(),n=(0,a.useState)(e),r=n[0],l=n[1],c=(0,a.useRef)(!1),i=(0,a.useState)(0),s=i[0],u=i[1],m=(0,a.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,Z.Z)((function(t,n){var a=t.scrollY,r=n.scrollY;if(e)if(a<s)l(!0);else{if(c.current)return c.current=!1,void l(!1);r&&0===a&&l(!0);var o=document.documentElement.scrollHeight-s,i=window.innerHeight;r&&a>=r?l(!1):a+i<o&&l(!0)}}),[s,c]),(0,a.useEffect)((function(){e&&l(!0)}),[t.pathname]),(0,a.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}};var I=n(1839),A=n(3783),D=n(9756),T=n(5525),B=["width","height"];const S=function(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=(0,D.Z)(e,B);return a.createElement("svg",(0,g.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:l},o),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var x=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function U(e){var t=e.mobile,n=e.dropdownItemsBefore,r=e.dropdownItemsAfter,l=(0,D.Z)(e,x),o=(0,p.default)().i18n,c=o.currentLocale,i=o.locales,s=o.localeConfigs,m=(0,u.l5)();function d(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===c?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,r),h=t?"Languages":d(c);return a.createElement(T.Z,(0,g.Z)({},l,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(S,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,h)),items:v}))}const M="searchWrapper_3rmH";function H(e){return e.mobile?null:a.createElement("div",{className:M},a.createElement(E,null))}var V=["type"],P={default:function(){return T.Z},localeDropdown:function(){return U},search:function(){return H},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function R(e){var t=e.type,n=(0,D.Z)(e,V),r=function(e){void 0===e&&(e="default");var t=P[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return a.createElement(r,n)}var W=n(5537),O=n(4478);const z="displayOnlyInLargeViewport_GrZ2",G="navbarHideable_2qcr",j="navbarHidden_3yey";var F="right";const q=function(){var e,t=(0,u.LU)(),n=t.navbar,l=n.items,o=n.hideOnScroll,c=n.style,i=t.colorMode.disableSwitch,s=(0,a.useState)(!1),m=s[0],d=s[1],f=(0,C.Z)(),v=f.isDarkTheme,h=f.setLightTheme,b=f.setDarkTheme,p=L(o),k=p.navbarRef,_=p.isNavbarVisible;(0,I.Z)(m);var N=(0,a.useCallback)((function(){d(!0)}),[d]),y=(0,a.useCallback)((function(){d(!1)}),[d]),Z=(0,a.useCallback)((function(e){return e.target.checked?b():h()}),[h,b]),D=(0,A.Z)();(0,a.useEffect)((function(){D===A.D.desktop&&d(!1)}),[D]);var T=l.some((function(e){return"search"===e.type})),B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:F)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:F)}))}}(l),S=B.leftItems,x=B.rightItems;return a.createElement("nav",{ref:k,className:(0,r.default)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===c,"navbar--primary":"primary"===c,"navbar-sidebar--show":m},e[G]=o,e[j]=o&&!_,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:N,onKeyDown:N},a.createElement(O.Z,null)),a.createElement(W.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,r.default)("navbar__title")}),S.map((function(e,t){return a.createElement(R,(0,g.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},x.map((function(e,t){return a.createElement(R,(0,g.Z)({},e,{key:t}))})),!i&&a.createElement(w,{className:z,checked:v,onChange:Z}),!T&&a.createElement(E,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(W.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!i&&m&&a.createElement(w,{checked:v,onChange:Z})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(R,(0,g.Z)({mobile:!0},e,{onClick:y,key:t}))})))))))};var Q=n(6742),Y=n(4996);const J="footerLogoLink_MyFc";var K=n(8465),X=["to","href","label","prependBaseUrlToHref"];function $(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,D.Z)(e,X),c=(0,Y.default)(t),i=(0,Y.default)(n,{forcePrependBaseUrl:!0});return a.createElement(Q.default,(0,g.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),r)}var ee=function(e){var t=e.sources,n=e.alt;return a.createElement(K.Z,{className:"footer__logo",alt:n,sources:t})};const te=function(){var e=(0,u.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,c=t.logo,i=void 0===c?{}:c,s={light:(0,Y.default)(i.src),dark:(0,Y.default)(i.srcDark||i.src)};return e?a.createElement("footer",{className:(0,r.default)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement($,e))}))):null)}))),(i||n)&&a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},i.href?a.createElement(Q.default,{href:i.href,className:J},a.createElement(ee,{alt:i.alt,sources:s})):a.createElement(ee,{alt:i.alt,sources:s})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null};var ne=n(412),ae=(0,u.WA)("theme"),re="light",le="dark",oe=function(e){return e===le?le:re},ce=function(e){(0,u.WA)("theme").set(oe(e))};const ie=function(){var e=(0,u.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return ne.default.canUseDOM?oe(document.documentElement.getAttribute("data-theme")):oe(e)}(t)),o=l[0],c=l[1],i=(0,a.useCallback)((function(){c(re),ce(re)}),[]),s=(0,a.useCallback)((function(){c(le),ce(le)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",oe(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=ae.get();null!==e&&c(oe(e))}catch(t){console.error(t)}}),[c]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?le:re)}))}),[]),{isDarkTheme:o===le,setLightTheme:i,setDarkTheme:s}};var se=n(2924);const ue=function(e){var t=ie(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(se.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)};function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function de(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var fe="docusaurus.tab.";const ve=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,u.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{for(var e,t={},a=de((0,u._f)());!(e=a()).done;){var r=e.value;if(r.startsWith(fe))t[r.substring(fe.length)]=(0,u.WA)(r).get()}n(t)}catch(l){console.error(l)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}};var he=(0,u.WA)("docusaurus.announcement.dismiss"),be=(0,u.WA)("docusaurus.announcement.id");const ge=function(){var e=(0,u.LU)().announcementBar,t=(0,a.useState)(!0),n=t[0],r=t[1],l=(0,a.useCallback)((function(){he.set("true"),r(!0)}),[]);return(0,a.useEffect)((function(){if(e){var t=e.id,n=be.get();"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;be.set(t),a&&he.set("false"),(a||"false"===he.get())&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:l}};var Ee=n(9443);const pe=function(e){var t=ve(),n=t.tabGroupChoices,r=t.setTabGroupChoices,l=ge(),o=l.isAnnouncementBarClosed,c=l.closeAnnouncementBar;return a.createElement(Ee.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r,isAnnouncementBarClosed:o,closeAnnouncementBar:c}},e.children)};function ke(e){var t=e.children;return a.createElement(ue,null,a.createElement(pe,null,a.createElement(u.L5,null,t)))}var _e=n(9105);function Ne(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(_e.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var ye=n(1217);function we(){var e=(0,p.default)().i18n,t=e.defaultLocale,n=e.locales,r=(0,u.l5)();return a.createElement(_e.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ce(e){var t=e.permalink,n=(0,p.default)().siteConfig.url,r=function(){var e=(0,p.default)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,Y.default)(t)}(),l=t?""+n+t:r;return a.createElement(_e.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function Ze(e){var t=(0,p.default)(),n=t.siteConfig,r=n.favicon,l=n.themeConfig.metadatas,o=t.i18n,c=o.currentLocale,i=o.localeConfigs,s=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,Y.default)(r),b=(0,u.pe)(s),E=c,k=i[c].direction;return a.createElement(a.Fragment,null,a.createElement(_e.Z,null,a.createElement("html",{lang:E,dir:k}),r&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,b),a.createElement("meta",{property:"og:title",content:b})),a.createElement(ye.default,{description:m,keywords:f,image:d}),a.createElement(Ce,null),a.createElement(we,null),a.createElement(Ne,(0,g.Z)({tag:u.HX,locale:c},v)),a.createElement(_e.Z,null,l.map((function(e,t){return a.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}const Le=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ie=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return Le(),a.createElement(ke,null,a.createElement(Ze,e),a.createElement(s,null),a.createElement(b,null),a.createElement(q,null),a.createElement("div",{className:(0,r.default)(u.kM.wrapper.main,l,o)},t),!n&&a.createElement(te,null))}},5537:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(2122),r=n(9756),l=n(7294),o=n(6742),c=n(8465),i=n(4996),s=n(2263),u=n(6700),m=["imageClassName","titleClassName"];const d=function(e){var t=(0,s.default)().isClient,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,g=(0,r.Z)(e,m),E=(0,i.default)(v.href||"/"),p={light:(0,i.default)(v.src),dark:(0,i.default)(v.srcDark||v.src)};return l.createElement(o.default,(0,a.Z)({to:E},g,v.target&&{target:v.target}),v.src&&l.createElement(c.Z,{key:t,className:h,sources:p,alt:v.alt||d||"Logo"}),null!=d&&l.createElement("strong",{className:b},d))}},5525:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(2122),r=n(9756),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(6700),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["items","position","className"],f=["className"],v=["items","className","position"],h=["className"],b=["mobile"];function g(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,v=e.prependBaseUrlToHref,h=(0,r.Z)(e,m),b=(0,i.default)(o),g=(0,i.default)(t),E=(0,i.default)(s,{forcePrependBaseUrl:!0});return l.createElement(c.default,(0,a.Z)({},s?{href:v?E:s}:Object.assign({isNavLink:!0,activeClassName:f,to:b},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}}:null),h),u)}function E(e){var t,n=e.items,c=e.position,i=e.className,s=(0,r.Z)(e,d),u=(0,l.useRef)(null),m=(0,l.useRef)(null),v=(0,l.useState)(!1),h=v[0],b=v[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var E=function(e,t){return void 0===t&&(t=!1),(0,o.default)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.default)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":h})},l.createElement(g,(0,a.Z)({className:E(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!h))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,r.Z)(e,f);return l.createElement("li",{key:t},l.createElement(g,(0,a.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:E(o,!0)},c)))})))):l.createElement(g,(0,a.Z)({className:E(i)},s))}function p(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,r.Z)(e,v)),f=(0,l.useRef)(null),b=(0,s.TH)().pathname,E=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,b)}))))||e})),p=E[0],k=E[1],_=function(e,t){return void 0===t&&(t=!1),(0,o.default)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(g,(0,a.Z)({className:_(m)},d)));var N=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.default)("menu__list-item",{"menu__list-item--collapsed":p})},l.createElement(g,(0,a.Z)({role:"button",className:_(m,!0)},d,{onClick:function(e){e.preventDefault(),k((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),l.createElement("ul",{className:"menu__list",ref:f,style:{height:p?void 0:N}},i.map((function(e,t){var n=e.className,o=(0,r.Z)(e,h);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(g,(0,a.Z)({activeClassName:"menu__link--active",className:_(n)},o,{onClick:d.onClick})))}))))}const k=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,b),o=n?p:E;return l.createElement(o,a)}},6400:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(2122),r=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6010),s=n(6700),u=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,n,m=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,u),b=(0,c.useActiveDocContext)(v),g=b.activeVersion,E=b.activeDoc,p=(0,s.J)(v).preferredVersion,k=(0,c.useLatestVersion)(v),_=null!=(t=null!=g?g:p)?t:k,N=_.docs.find((function(e){return e.id===m}));if(!N){var y=_.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+m+" in version "+_.name+".\nAvailable docIds=\n- "+y)}return l.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,i.default)(h.className,(n={},n[d]=E&&E.sidebar===N.sidebar,n)),label:null!=f?f:N.id,to:N.path}))}},9308:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(2122),r=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6700),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=(0,r.Z)(e,s),g=(0,c.useActiveDocContext)(d),E=(0,c.useVersions)(d),p=(0,c.useLatestVersion)(d),k=(0,i.J)(d),_=k.preferredVersion,N=k.savePreferredVersionName;var y=null!=(t=null!=(n=g.activeVersion)?n:_)?t:p,w=m?"Versions":y.label,C=m?void 0:u(y).path;return l.createElement(o.Z,(0,a.Z)({},b,{mobile:m,label:w,to:C,items:function(){var e=E.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){N(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},7250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(2122),r=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6700),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,c.useActiveVersion)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.useLatestVersion)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:g,to:E}))}},2924:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(2122),r=n(9756),l=n(7294),o=n(6010),c=n(2263),i=n(5350);const s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"};var u=["sources","className","alt"];const m=function(e){var t=(0,c.default)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,b.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,o.default)(s.themedImage,s["themedImage--"+e],d)},h))})))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},1839:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294),r=n(412),l=function(){return{scrollX:r.default.canUseDOM?window.pageXOffset:0,scrollY:r.default.canUseDOM?window.pageYOffset:0}};const o=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(l()),r=function(){var t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294),r=n(9443);const l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3783:(e,t,n)=>{"use strict";n.d(t,{D:()=>l,Z:()=>o});var a=n(7294),r=n(412),l={desktop:"desktop",mobile:"mobile"};const o=function(){var e=r.default.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}var n=(0,a.useState)(t),o=n[0],c=n[1];return(0,a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}}}]);