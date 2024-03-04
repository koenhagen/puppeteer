/*! For license information please see ad8870e8.669ad4c5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93555],{3662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(85893),o=n(11151);const i={sidebar_label:"Page.goForward"},s="Page.goForward() method",a={id:"api/puppeteer.page.goforward",title:"Page.goForward() method",description:"This method navigate to the next page in history.",source:"@site/versioned_docs/version-22.1.0/api/puppeteer.page.goforward.md",sourceDirName:"api",slug:"/api/puppeteer.page.goforward",permalink:"/api/puppeteer.page.goforward",draft:!1,unlisted:!1,tags:[],version:"22.1.0",frontMatter:{sidebar_label:"Page.goForward"},sidebar:"api",previous:{title:"Page.goBack",permalink:"/api/puppeteer.page.goback"},next:{title:"Page.goto",permalink:"/api/puppeteer.page.goto"}},d={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pagegoforward-method",children:"Page.goForward() method"}),"\n",(0,r.jsx)(t.p,{children:"This method navigate to the next page in history."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Navigation Parameter"]})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,r.jsxs)(t.p,{children:["Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go forward, resolves to ",(0,r.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["The argument ",(0,r.jsx)(t.code,{children:"options"})," might have the following properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"timeout"})," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," or ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," methods."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"waitUntil"}),": When to consider navigation succeeded, defaults to ",(0,r.jsx)(t.code,{children:"load"}),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"load"})," : consider navigation to be finished when the load event is fired.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"domcontentloaded"})," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"networkidle0"})," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,r.jsx)(t.code,{children:"500"})," ms.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(t.code,{children:"networkidle2"})," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,r.jsx)(t.code,{children:"500"})," ms."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);