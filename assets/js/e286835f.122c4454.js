/*! For license information please see e286835f.122c4454.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30648],{71393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(85893),s=n(11151);const o={sidebar_label:"Frame.setContent"},a="Frame.setContent() method",i={id:"api/puppeteer.frame.setcontent",title:"Frame.setContent() method",description:"Set the content of the frame.",source:"@site/versioned_docs/version-22.1.0/api/puppeteer.frame.setcontent.md",sourceDirName:"api",slug:"/api/puppeteer.frame.setcontent",permalink:"/api/puppeteer.frame.setcontent",draft:!1,unlisted:!1,tags:[],version:"22.1.0",frontMatter:{sidebar_label:"Frame.setContent"},sidebar:"api",previous:{title:"Frame.select",permalink:"/api/puppeteer.frame.select"},next:{title:"Frame.tap",permalink:"/api/puppeteer.frame.tap"}},c={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"framesetcontent-method",children:"Frame.setContent() method"}),"\n",(0,r.jsx)(t.p,{children:"Set the content of the frame."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  abstract setContent(html: string, options?: WaitForOptions): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"html"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"HTML markup to assign to the page."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Options to configure how long before timing out and at what point to consider the content setting successful."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,o={},p=null,d=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:p,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);