/*! For license information please see 6eb95b63.a2922df3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25379],{50569:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var n=t(85893),s=t(11151);const a={sidebar_label:"Page.screencast"},c="Page.screencast() method",o={id:"api/puppeteer.page.screencast",title:"Page.screencast() method",description:"Captures a screencast of this page.",source:"@site/../docs/api/puppeteer.page.screencast.md",sourceDirName:"api",slug:"/api/puppeteer.page.screencast",permalink:"/next/api/puppeteer.page.screencast",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.screencast"},sidebar:"api",previous:{title:"Page.removeScriptToEvaluateOnNewDocument",permalink:"/next/api/puppeteer.page.removescripttoevaluateonnewdocument"},next:{title:"Page.screenshot",permalink:"/next/api/puppeteer.page.screenshot"}},p={},i=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"pagescreencast-method",children:"Page.screencast() method"}),"\n",(0,n.jsxs)(r.p,{children:["Captures a screencast of this ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"page"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  screencast(options?: Readonly<ScreencastOptions>): Promise<ScreenRecorder>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["Readonly<",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.screencastoptions",children:"ScreencastOptions"}),">"]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," Configures screencast behavior."]})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.screenrecorder",children:"ScreenRecorder"}),">"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["All recordings will be ",(0,n.jsx)(r.a,{href:"https://www.webmproject.org/",children:"WebM"})," format using the ",(0,n.jsx)(r.a,{href:"https://www.webmproject.org/vp9/",children:"VP9"})," video codec. The FPS is 30."]}),"\n",(0,n.jsxs)(r.p,{children:["You must have ",(0,n.jsx)(r.a,{href:"https://ffmpeg.org/",children:"ffmpeg"})," installed on your system."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["Recording a ",(0,n.jsx)(r.a,{href:"/next/api/puppeteer.page",children:"page"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"import puppeteer from 'puppeteer';\n\n// Launch a browser\nconst browser = await puppeteer.launch();\n\n// Create a new page\nconst page = await browser.newPage();\n\n// Go to your site.\nawait page.goto(\"https://www.example.com\");\n\n// Start recording.\nconst recorder = await page.screencast({path: 'recording.webm'});\n\n// Do something.\n\n// Stop recording.\nawait recorder.stop();\n\nbrowser.close();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,a={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!p.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:i,ref:l,props:a,_owner:o.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>c});var n=t(67294);const s={},a=n.createContext(s);function c(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);