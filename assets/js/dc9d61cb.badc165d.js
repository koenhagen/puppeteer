/*! For license information please see dc9d61cb.badc165d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72006],{83947:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(85893),o=t(11151);const i={sidebar_label:"PuppeteerNode.trimCache"},p="PuppeteerNode.trimCache() method",s={id:"api/puppeteer.puppeteernode.trimcache",title:"PuppeteerNode.trimCache() method",description:"Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless configuration.browserRevision is provided.",source:"@site/../docs/api/puppeteer.puppeteernode.trimcache.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.trimcache",permalink:"/next/api/puppeteer.puppeteernode.trimcache",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"PuppeteerNode.trimCache"},sidebar:"api",previous:{title:"PuppeteerNode.launch",permalink:"/next/api/puppeteer.puppeteernode.launch"},next:{title:"Puppeteer.clearCustomQueryHandlers",permalink:"/next/api/puppeteer.puppeteer.clearcustomqueryhandlers"}},a={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"puppeteernodetrimcache-method",children:"PuppeteerNode.trimCache() method"}),"\n",(0,n.jsxs)(r.p,{children:["Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,n.jsx)(r.code,{children:"configuration.browserRevision"})," is provided."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class PuppeteerNode {\n  trimCache(): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Note that the method does not check if any other Puppeteer versions installed on the host that use the same cache directory require the non-current binaries."})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var n=t(67294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)p.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:s.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>p});var n=t(67294);const o={},i=n.createContext(o);function p(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);