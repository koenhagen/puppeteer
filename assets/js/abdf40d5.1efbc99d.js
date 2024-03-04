/*! For license information please see abdf40d5.1efbc99d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6762],{42978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=r(85893),n=r(11151);const s={sidebar_label:"Touchscreen.touchMove"},c="Touchscreen.touchMove() method",i={id:"api/puppeteer.touchscreen.touchmove",title:"Touchscreen.touchMove() method",description:"Dispatches a touchMove event.",source:"@site/../docs/api/puppeteer.touchscreen.touchmove.md",sourceDirName:"api",slug:"/api/puppeteer.touchscreen.touchmove",permalink:"/next/api/puppeteer.touchscreen.touchmove",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Touchscreen.touchMove"},sidebar:"api",previous:{title:"Touchscreen.touchEnd",permalink:"/next/api/puppeteer.touchscreen.touchend"},next:{title:"Touchscreen.touchStart",permalink:"/next/api/puppeteer.touchscreen.touchstart"}},h={},a=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"touchscreentouchmove-method",children:"Touchscreen.touchMove() method"}),"\n",(0,o.jsxs)(t.p,{children:["Dispatches a ",(0,o.jsx)(t.code,{children:"touchMove"})," event."]}),"\n",(0,o.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"class Touchscreen {\n  abstract touchMove(x: number, y: number): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"x"}),(0,o.jsx)(t.td,{children:"number"}),(0,o.jsx)(t.td,{children:"Horizontal position of the move."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"y"}),(0,o.jsx)(t.td,{children:"number"}),(0,o.jsx)(t.td,{children:"Vertical position of the move."})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(t.p,{children:["Not every ",(0,o.jsx)(t.code,{children:"touchMove"})," call results in a ",(0,o.jsx)(t.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,o.jsx)(t.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var o=r(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var o,s={},a=null,d=null;for(o in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,o)&&!h.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:a,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var o=r(67294);const n={},s=o.createContext(n);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);