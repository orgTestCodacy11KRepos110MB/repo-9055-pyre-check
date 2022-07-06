"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[514,972],{24651:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ie});var n=a(67294),l=a(86010),r=a(24575),i=a(43320),o=a(10833),c=a(35281),s=a(74477),d=a(1116),u=a(24475),m=a(95999),b=a(2730);const p="backToTopButton_sjWU",f="backToTopButtonShow_xfvO";function h(){var e=(0,b.a)({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",c.k.common.backToTopButton,p,t&&f),type:"button",onClick:a})}var v=a(76775),E=a(87524),g=a(86668),k=a(21327),_=a(83117);function C(e){return n.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function I(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,m.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",N),onClick:t},n.createElement(C,{className:S}))}var y=a(59689),T=a(12466),x=a(80102),L=a(14353),w=a(44700),M=a(48596),F=a(86043),Z=a(39960),A=a(72389),B=["item","onItemClick","activePath","level","index"];function P(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){var t=e.item,a=e.onItemClick,i=e.activePath,o=e.level,s=e.index,d=(0,x.Z)(e,B),u=t.items,m=t.label,b=t.collapsible,p=t.className,f=t.href,h=(0,g.L)().docs.sidebar.autoCollapseCategories,v=function(e){var t=(0,A.default)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0}),[e,t])}(t),E=(0,r._F)(t,i),k=(0,M.Mg)(f,i),C=(0,F.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),N=C.collapsed,S=C.setCollapsed,I=(0,L.f)(),y=I.expandedItem,T=I.setExpandedItem,H=function(e){void 0===e&&(e=!N),T(e?null:s),S(e)};return function(e){var t=e.isActive,a=e.collapsed,l=e.updateCollapsed,r=(0,w.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:E,collapsed:N,updateCollapsed:H}),(0,n.useEffect)((function(){b&&y&&y!==s&&h&&S(!0)}),[b,y,s,S,h]),n.createElement("li",{className:(0,l.default)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":N},p)},n.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(Z.default,(0,_.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),f?H(!1):(e.preventDefault(),H())}:function(){null==a||a(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!N:void 0,href:b?null!=v?v:"#":v},d),m),f&&b&&n.createElement(P,{categoryLabel:m,onClick:function(e){e.preventDefault(),H()}})),n.createElement(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},n.createElement(O,{items:u,tabIndex:N?-1:0,onItemClick:a,activePath:i,level:o+1})))}var D=a(13919),W=a(38483);const R="menuExternalLink_NmtK";var z=["item","onItemClick","activePath","level","index"];function K(e){var t=e.item,a=e.onItemClick,i=e.activePath,o=e.level,s=(e.index,(0,x.Z)(e,z)),d=t.href,u=t.label,m=t.className,b=(0,r._F)(t,i),p=(0,D.Z)(d);return n.createElement("li",{className:(0,l.default)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},n.createElement(Z.default,(0,_.Z)({className:(0,l.default)("menu__link",!p&&R,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:a?function(){return a(t)}:void 0},s),u,!p&&n.createElement(W.Z,null)))}const U="menuHtmlItem_M9Kj";function V(e){var t=e.item,a=e.level,r=e.index,i=t.value,o=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,l.default)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(a),o&&[U,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}var j=["item"];function G(e){var t=e.item,a=(0,x.Z)(e,j);switch(t.type){case"category":return n.createElement(H,(0,_.Z)({item:t},a));case"html":return n.createElement(V,(0,_.Z)({item:t},a));case"link":default:return n.createElement(K,(0,_.Z)({item:t},a))}}var Y=["items"];function q(e){var t=e.items,a=(0,x.Z)(e,Y);return n.createElement(L.D,null,t.map((function(e,t){return n.createElement(G,(0,_.Z)({key:t,item:e,index:t},a))})))}const O=(0,n.memo)(q),X="menu_SIkG",J="menuWithAnnouncementBar_GW3s";function Q(e){var t=e.path,a=e.sidebar,r=e.className,i=function(){var e=(0,y.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,T.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,l.default)("menu thin-scrollbar",X,i&&J,r)},n.createElement("ul",{className:(0,l.default)(c.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:a,activePath:t,level:1})))}const $="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ae="sidebarLogo_isFc";function ne(e){var t=e.path,a=e.sidebar,r=e.onCollapse,i=e.isHidden,o=(0,g.L)(),c=o.navbar.hideOnScroll,s=o.docs.sidebar.hideable;return n.createElement("div",{className:(0,l.default)($,c&&ee,i&&te)},c&&n.createElement(k.Z,{tabIndex:-1,className:ae}),n.createElement(Q,{path:t,sidebar:a}),s&&n.createElement(I,{onClick:r}))}const le=n.memo(ne);var re=a(93163),ie=a(13102),oe=function(e){var t=e.sidebar,a=e.path,r=(0,re.e)();return n.createElement("ul",{className:(0,l.default)(c.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ce(e){return n.createElement(ie.Zo,{component:oe,props:e})}const se=n.memo(ce);function de(e){var t=(0,E.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(le,e),l&&n.createElement(se,e))}const ue="expandButton_m80_",me="expandButtonIcon_BlDH";function be(e){var t=e.toggleSidebar;return n.createElement("div",{className:ue,title:(0,m.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:me}))}const pe="docSidebarContainer_b6E3",fe="docSidebarContainerHidden_b3ry";function he(e){var t,a=e.children,l=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},a)}function ve(e){var t=e.sidebar,a=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,i=(0,v.TH)().pathname,o=(0,n.useState)(!1),s=o[0],d=o[1],u=(0,n.useCallback)((function(){s&&d(!1),r((function(e){return!e}))}),[r,s]);return n.createElement("aside",{className:(0,l.default)(c.k.docs.docSidebarContainer,pe,a&&fe),onTransitionEnd:function(e){e.currentTarget.classList.contains(pe)&&a&&d(!0)}},n.createElement(he,null,n.createElement(de,{sidebar:t,path:i,onCollapse:u,isHidden:s})),s&&n.createElement(be,{toggleSidebar:u}))}const Ee={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ge(e){var t=e.hiddenSidebarContainer,a=e.children,r=(0,d.V)();return n.createElement("main",{className:(0,l.default)(Ee.docMainContainer,(t||!r)&&Ee.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},a))}const ke="docPage__5DB",_e="docsWrapper_BCFX";function Ce(e){var t=e.children,a=(0,d.V)(),l=(0,n.useState)(!1),r=l[0],i=l[1];return n.createElement(u.Z,{wrapperClassName:_e},n.createElement(h,null),n.createElement("div",{className:ke},a&&n.createElement(ve,{sidebar:a.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:i}),n.createElement(ge,{hiddenSidebarContainer:r},t)))}var Ne=a(4972),Se=a(90197);function Ie(e){var t=e.versionMetadata,a=(0,r.hI)(e);if(!a)return n.createElement(Ne.default,null);var u=a.docElement,m=a.sidebarName,b=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(Se.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(o.FG,{className:(0,l.default)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:b},n.createElement(Ce,null,u)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(67294),l=a(95999),r=a(10833),i=a(24475);function o(){return n.createElement(n.Fragment,null,n.createElement(r.d,{title:(0,l.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(i.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},14353:(e,t,a)=>{a.d(t,{D:()=>o,f:()=>c});var n=a(67294),l=a(44700),r=Symbol("EmptyContext"),i=n.createContext(r);function o(e){var t=e.children,a=(0,n.useState)(null),l=a[0],r=a[1],o=(0,n.useMemo)((function(){return{expandedItem:l,setExpandedItem:r}}),[l]);return n.createElement(i.Provider,{value:o},t)}function c(){var e=(0,n.useContext)(i);if(e===r)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,a)=>{a.d(t,{a:()=>i});var n=a(67294),l=a(12466),r=a(85936);function i(e){var t=e.threshold,a=(0,n.useState)(!1),i=a[0],o=a[1],c=(0,n.useRef)(!1),s=(0,l.Ct)(),d=s.startScroll,u=s.cancelScroll;return(0,l.RF)((function(e,a){var n=e.scrollY,l=null==a?void 0:a.scrollY;l&&(c.current?c.current=!1:n>=l?(u(),o(!1)):n<t?o(!1):n+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,r.S)((function(e){e.location.hash&&(c.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}}}]);