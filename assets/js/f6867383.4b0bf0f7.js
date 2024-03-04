/*! For license information please see f6867383.4b0bf0f7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48247],{23826:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=n(85893),s=n(11151);const o={sidebar_label:"Keyboard.down"},i="Keyboard.down() method",d={id:"api/puppeteer.keyboard.down",title:"Keyboard.down() method",description:"Dispatches a keydown event.",source:"@site/versioned_docs/version-22.1.0/api/puppeteer.keyboard.down.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.down",permalink:"/api/puppeteer.keyboard.down",draft:!1,unlisted:!1,tags:[],version:"22.1.0",frontMatter:{sidebar_label:"Keyboard.down"},sidebar:"api",previous:{title:"Keyboard",permalink:"/api/puppeteer.keyboard"},next:{title:"Keyboard.press",permalink:"/api/puppeteer.keyboard.press"}},a={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"keyboarddown-method",children:"Keyboard.down() method"}),"\n",(0,t.jsxs)(r.p,{children:["Dispatches a ",(0,t.jsx)(r.code,{children:"keydown"})," event."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract down(\n    key: KeyInput,\n    options?: Readonly<KeyDownOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"key"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})}),(0,t.jsxs)(r.td,{children:["Name of key to press, such as ",(0,t.jsx)("code",{children:"ArrowLeft"}),". See ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsxs)(r.td,{children:["Readonly<",(0,t.jsx)(r.a,{href:"/api/puppeteer.keydownoptions",children:"KeyDownOptions"}),">"]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts text which, if specified, generates an input event with this text. Accepts commands which, if specified, is the commands of keyboard shortcuts, see ",(0,t.jsx)(r.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h",children:"Chromium Source Code"})," for valid command names."]})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,t.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,t.jsx)(r.code,{children:"keypress"}),"/",(0,t.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,t.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated. If ",(0,t.jsx)(r.code,{children:"key"})," is a modifier key, ",(0,t.jsx)(r.code,{children:"Shift"}),", ",(0,t.jsx)(r.code,{children:"Meta"}),", ",(0,t.jsx)(r.code,{children:"Control"}),", or ",(0,t.jsx)(r.code,{children:"Alt"}),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["After the key is pressed once, subsequent calls to ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," will have ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat",children:"repeat"})," set to true. To release the key, use ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Modifier keys DO influence ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"}),". Holding down ",(0,t.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,o={},c=null,p=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:p,props:o,_owner:d.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var t=n(67294);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);