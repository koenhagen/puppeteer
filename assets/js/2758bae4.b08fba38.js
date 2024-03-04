/*! For license information please see 2758bae4.b08fba38.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39389],{97017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(85893),n=r(11151);const a={sidebar_label:"Page.waitForResponse"},i="Page.waitForResponse() method",o={id:"api/puppeteer.page.waitforresponse",title:"Page.waitForResponse() method",description:"Signature:",source:"@site/versioned_docs/version-22.2.0/api/puppeteer.page.waitforresponse.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforresponse",permalink:"/api/puppeteer.page.waitforresponse",draft:!1,unlisted:!1,tags:[],version:"22.2.0",frontMatter:{sidebar_label:"Page.waitForResponse"},sidebar:"api",previous:{title:"Page.waitForRequest",permalink:"/api/puppeteer.page.waitforrequest"},next:{title:"Page.waitForSelector",permalink:"/api/puppeteer.page.waitforselector"}},p={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagewaitforresponse-method",children:"Page.waitForResponse() method"}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForResponse(\n    urlOrPredicate: string | AwaitablePredicate<HTTPResponse>,\n    options?: WaitTimeoutOptions\n  ): Promise<HTTPResponse>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"urlOrPredicate"}),(0,s.jsxs)(t.td,{children:["string | ",(0,s.jsx)(t.a,{href:"/api/puppeteer.awaitablepredicate",children:"AwaitablePredicate"}),"<",(0,s.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),">"]}),(0,s.jsx)(t.td,{children:"A URL or predicate to wait for."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"options"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"(Optional)"})," Optional waiting parameters"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(t.p,{children:["Promise<",(0,s.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),">"]}),"\n",(0,s.jsx)(t.p,{children:"Promise which resolves to the matched response."}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"Optional Parameter have:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timeout"}),": Maximum wait time in milliseconds, defaults to ",(0,s.jsx)(t.code,{children:"30"})," seconds, pass ",(0,s.jsx)(t.code,{children:"0"})," to disable the timeout. The default value can be changed by using the ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const firstResponse = await page.waitForResponse(\n  'https://example.com/resource'\n);\nconst finalResponse = await page.waitForResponse(\n  response =>\n    response.url() === 'https://example.com' && response.status() === 200\n);\nconst finalResponse = await page.waitForResponse(async response => {\n  return (await response.text()).includes('<html>');\n});\nreturn finalResponse.ok();\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,a={},l=null,d=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!p.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var s=r(67294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);