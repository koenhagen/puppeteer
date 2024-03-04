/*! For license information please see 84a8f468.d21f09ae.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72783],{41158:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(85893),a=s(11151);const i={sidebar_label:"Dialog"},n="Dialog class",l={id:"api/puppeteer.dialog",title:"Dialog class",description:"Dialog instances are dispatched by the Page via the dialog event.",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.dialog.md",sourceDirName:"api",slug:"/api/puppeteer.dialog",permalink:"/api/puppeteer.dialog",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"Dialog"},sidebar:"api",previous:{title:"FileChooser.isMultiple",permalink:"/api/puppeteer.filechooser.ismultiple"},next:{title:"Dialog.accept",permalink:"/api/puppeteer.dialog.accept"}},d={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dialog-class",children:"Dialog class"}),"\n",(0,r.jsxs)(t.p,{children:["Dialog instances are dispatched by the ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page",children:"Page"})," via the ",(0,r.jsx)(t.code,{children:"dialog"})," event."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Dialog\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(t.code,{children:"Dialog"})," class."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.dialog.accept",children:"accept(promptText)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"A promise that resolves when the dialog has been accepted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.dialog.defaultvalue",children:"defaultValue()"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["The default value of the prompt, or an empty string if the dialog is not a ",(0,r.jsx)("code",{children:"prompt"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.dialog.dismiss",children:"dismiss()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"A promise which will resolve once the dialog has been dismissed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.dialog.message",children:"message()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The message displayed in the dialog."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.dialog.type",children:"type()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The type of the dialog."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,s)=>{var r=s(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var r,i={},o=null,c=null;for(r in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:o,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,s)=>{e.exports=s(75251)},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>n});var r=s(67294);const a={},i=r.createContext(a);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);