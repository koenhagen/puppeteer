/*! For license information please see 7452f6b7.929d8b8b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62623],{1788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(85893),n=a(11151);const s={sidebar_label:"Page.emulateIdleState"},l="Page.emulateIdleState() method",i={id:"api/puppeteer.page.emulateidlestate",title:"Page.emulateIdleState() method",description:"Emulates the idle state. If no arguments set, clears idle state emulation.",source:"@site/versioned_docs/version-22.2.0/api/puppeteer.page.emulateidlestate.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulateidlestate",permalink:"/api/puppeteer.page.emulateidlestate",draft:!1,unlisted:!1,tags:[],version:"22.2.0",frontMatter:{sidebar_label:"Page.emulateIdleState"},sidebar:"api",previous:{title:"Page.emulateCPUThrottling",permalink:"/api/puppeteer.page.emulatecputhrottling"},next:{title:"Page.emulateMediaFeatures",permalink:"/api/puppeteer.page.emulatemediafeatures"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pageemulateidlestate-method",children:"Page.emulateIdleState() method"}),"\n",(0,r.jsx)(t.p,{children:"Emulates the idle state. If no arguments set, clears idle state emulation."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateIdleState(overrides?: {\n    isUserActive: boolean;\n    isScreenUnlocked: boolean;\n  }): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrides"}),(0,r.jsx)(t.td,{children:"{ isUserActive: boolean; isScreenUnlocked: boolean; }"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Mock idle state. If not set, clears idle overrides"]})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// set idle emulation\nawait page.emulateIdleState({isUserActive: true, isScreenUnlocked: false});\n\n// do some checks here\n...\n\n// clear idle emulation\nawait page.emulateIdleState();\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,a)=>{var r=a(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var r,s={},d=null,c=null;for(r in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},85893:(e,t,a)=>{e.exports=a(75251)},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>l});var r=a(67294);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);