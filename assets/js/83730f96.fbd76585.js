/*! For license information please see 83730f96.fbd76585.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36996],{73178:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=r(85893),s=r(11151);const i={sidebar_label:"ElementHandle.press"},d="ElementHandle.press() method",a={id:"api/puppeteer.elementhandle.press",title:"ElementHandle.press() method",description:"Focuses the element, and then uses Keyboard.down() and Keyboard.up().",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.elementhandle.press.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.press",permalink:"/api/puppeteer.elementhandle.press",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"ElementHandle.press"},sidebar:"api",previous:{title:"ElementHandle.isVisible",permalink:"/api/puppeteer.elementhandle.isvisible"},next:{title:"ElementHandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot"}},l={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"elementhandlepress-method",children:"ElementHandle.press() method"}),"\n",(0,t.jsxs)(n.p,{children:["Focuses the element, and then uses ",(0,t.jsx)(n.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,t.jsx)(n.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  press(key: KeyInput, options?: Readonly<KeyPressOptions>): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})}),(0,t.jsxs)(n.td,{children:["Name of key to press, such as ",(0,t.jsx)("code",{children:"ArrowLeft"}),". See ",(0,t.jsx)(n.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsxs)(n.td,{children:["Readonly<",(0,t.jsx)(n.a,{href:"/api/puppeteer.keypressoptions",children:"KeyPressOptions"}),">"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"key"})," is a single character and no modifier keys besides ",(0,t.jsx)(n.code,{children:"Shift"})," are being held down, a ",(0,t.jsx)(n.code,{children:"keypress"}),"/",(0,t.jsx)(n.code,{children:"input"})," event will also be generated. The ",(0,t.jsx)(n.code,{children:"text"})," option can be specified to force an input event to be generated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"})," Modifier keys DO affect ",(0,t.jsx)(n.code,{children:"elementHandle.press"}),". Holding down ",(0,t.jsx)(n.code,{children:"Shift"})," will type the text in upper case."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,n,r)=>{var t=r(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,i={},o=null,p=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(p=n.ref),n)d.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:o,ref:p,props:i,_owner:a.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>d});var t=r(67294);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);