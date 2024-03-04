/*! For license information please see 21c594d8.8af8e65f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29364],{49289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var s=r(85893),d=r(11151);const n={sidebar_label:"PageEvent"},i="PageEvent enum",a={id:"api/puppeteer.pageevent",title:"PageEvent enum",description:"All the events that a page instance may emit.",source:"@site/versioned_docs/version-22.2.0/api/puppeteer.pageevent.md",sourceDirName:"api",slug:"/api/puppeteer.pageevent",permalink:"/api/puppeteer.pageevent",draft:!1,unlisted:!1,tags:[],version:"22.2.0",frontMatter:{sidebar_label:"PageEvent"},sidebar:"api",previous:{title:"Offset",permalink:"/api/puppeteer.offset"},next:{title:"PageEvents",permalink:"/api/puppeteer.pageevents"}},c={},h=[{value:"Signature:",id:"signature",level:4},{value:"Enumeration Members",id:"enumeration-members",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pageevent-enum",children:"PageEvent enum"}),"\n",(0,s.jsx)(t.p,{children:"All the events that a page instance may emit."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare const enum PageEvent\n"})}),"\n",(0,s.jsx)(t.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Member"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Close"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"close"'})}),(0,s.jsx)(t.td,{children:"Emitted when the page closes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Console"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"console"'})}),(0,s.jsxs)(t.td,{children:["Emitted when JavaScript within the page calls one of console API methods, e.g. ",(0,s.jsx)("code",{children:"console.log"})," or ",(0,s.jsx)("code",{children:"console.dir"}),". Also emitted if the page throws an error or a warning."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dialog"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"dialog"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a JavaScript dialog appears, such as ",(0,s.jsx)("code",{children:"alert"}),", ",(0,s.jsx)("code",{children:"prompt"}),", ",(0,s.jsx)("code",{children:"confirm"})," or ",(0,s.jsx)("code",{children:"beforeunload"}),". Puppeteer can respond to the dialog via ",(0,s.jsx)(t.a,{href:"/api/puppeteer.dialog.accept",children:"Dialog.accept()"})," or ",(0,s.jsx)(t.a,{href:"/api/puppeteer.dialog.dismiss",children:"Dialog.dismiss()"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DOMContentLoaded"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"domcontentloaded"'})}),(0,s.jsxs)(t.td,{children:["Emitted when the JavaScript ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded",children:"DOMContentLoaded"})," event is dispatched."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Error"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"error"'})}),(0,s.jsxs)(t.td,{children:["Emitted when the page crashes. Will contain an ",(0,s.jsx)("code",{children:"Error"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FrameAttached"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"frameattached"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a frame is attached. Will contain a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.frame",children:"Frame"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FrameDetached"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"framedetached"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a frame is detached. Will contain a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.frame",children:"Frame"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FrameNavigated"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"framenavigated"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a frame is navigated to a new URL. Will contain a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.frame",children:"Frame"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Load"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"load"'})}),(0,s.jsxs)(t.td,{children:["Emitted when the JavaScript ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events/load",children:"load"})," event is dispatched."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Metrics"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"metrics"'})}),(0,s.jsxs)(t.td,{children:["Emitted when the JavaScript code makes a call to ",(0,s.jsx)("code",{children:"console.timeStamp"}),". For the list of metrics see ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page.metrics",children:"page.metrics"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PageError"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"pageerror"'})}),(0,s.jsxs)(t.td,{children:["Emitted when an uncaught exception happens within the page. Contains an ",(0,s.jsx)("code",{children:"Error"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Popup"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"popup"'})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("p",{children:"Emitted when the page opens a new tab or window."}),(0,s.jsxs)("p",{children:["Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page",children:"Page"})," corresponding to the popup window."]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Request"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"request"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a page issues a request and contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RequestFailed"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"requestfailed"'})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("p",{children:"Emitted when a request fails, for example by timing out."}),(0,s.jsxs)("p",{children:["Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RequestFinished"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"requestfinished"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a request finishes successfully. Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RequestServedFromCache"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"requestservedfromcache"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a request ended up loading from cache. Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Response"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"response"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a response is received. Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WorkerCreated"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"workercreated"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a dedicated ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",children:"WebWorker"})," is spawned by the page."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WorkerDestroyed"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:'"workerdestroyed"'})}),(0,s.jsxs)(t.td,{children:["Emitted when a dedicated ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",children:"WebWorker"})," is destroyed by the page."]})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var s=r(67294),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var s,n={},h=null,l=null;for(s in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:d,type:e,key:h,ref:l,props:n,_owner:a.current}}t.Fragment=n,t.jsx=h,t.jsxs=h},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var s=r(67294);const d={},n=s.createContext(d);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);