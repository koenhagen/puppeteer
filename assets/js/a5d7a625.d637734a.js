/*! For license information please see a5d7a625.d637734a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69277],{68246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=t(85893),o=t(11151);const s={sidebar_label:"Mouse.dragAndDrop"},d="Mouse.dragAndDrop() method",a={id:"api/puppeteer.mouse.draganddrop",title:"Mouse.dragAndDrop() method",description:"Performs a drag, dragenter, dragover, and drop in sequence.",source:"@site/versioned_docs/version-22.1.0/api/puppeteer.mouse.draganddrop.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.draganddrop",permalink:"/api/puppeteer.mouse.draganddrop",draft:!1,unlisted:!1,tags:[],version:"22.1.0",frontMatter:{sidebar_label:"Mouse.dragAndDrop"},sidebar:"api",previous:{title:"Mouse.drag",permalink:"/api/puppeteer.mouse.drag"},next:{title:"Mouse.dragEnter",permalink:"/api/puppeteer.mouse.dragenter"}},i={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"mousedraganddrop-method",children:"Mouse.dragAndDrop() method"}),"\n",(0,n.jsx)(r.p,{children:"Performs a drag, dragenter, dragover, and drop in sequence."}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragAndDrop(\n    start: Point,\n    target: Point,\n    options?: {\n      delay?: number;\n    }\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})}),(0,n.jsx)(r.td,{children:"point to drag from"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"target"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})}),(0,n.jsx)(r.td,{children:"point to drop on"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsx)(r.td,{children:"{ delay?: number; }"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,n.jsx)("code",{children:"dragover"})," and ",(0,n.jsx)("code",{children:"drop"})," in milliseconds. Defaults to 0."]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var n=t(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,s={},p=null,c=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)d.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:p,ref:c,props:s,_owner:a.current}}r.Fragment=s,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>d});var n=t(67294);const o={},s=n.createContext(o);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);