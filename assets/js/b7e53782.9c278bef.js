/*! For license information please see b7e53782.9c278bef.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45582],{95647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=r(85893),n=r(11151);const o={sidebar_label:"WaitForSelectorOptions"},s="WaitForSelectorOptions interface",d={id:"api/puppeteer.waitforselectoroptions",title:"WaitForSelectorOptions interface",description:"Signature:",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.waitforselectoroptions.md",sourceDirName:"api",slug:"/api/puppeteer.waitforselectoroptions",permalink:"/api/puppeteer.waitforselectoroptions",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"WaitForSelectorOptions"},sidebar:"api",previous:{title:"WaitForOptions",permalink:"/api/puppeteer.waitforoptions"},next:{title:"WaitForTargetOptions",permalink:"/api/puppeteer.waitfortargetoptions"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"waitforselectoroptions-interface",children:"WaitForSelectorOptions interface"}),"\n",(0,i.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"export interface WaitForSelectorOptions\n"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Modifiers"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hidden"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsxs)(t.td,{children:["Wait for the selected element to not be found in the DOM or to be hidden, i.e. have ",(0,i.jsx)("code",{children:"display: none"})," or ",(0,i.jsx)("code",{children:"visibility: hidden"})," CSS properties."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"signal"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"AbortSignal"}),(0,i.jsx)(t.td,{children:"A signal object that allows you to cancel a waitForSelector call."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timeout"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsxs)(t.td,{children:[(0,i.jsxs)("p",{children:["Maximum time to wait in milliseconds. Pass ",(0,i.jsx)("code",{children:"0"})," to disable timeout."]}),(0,i.jsxs)("p",{children:["The default value can be changed by using ",(0,i.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})]})]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("code",{children:"30_000"})," (30 seconds)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"visible"}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"optional"})}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsxs)(t.td,{children:["Wait for the selected element to be present in DOM and to be visible, i.e. to not have ",(0,i.jsx)("code",{children:"display: none"})," or ",(0,i.jsx)("code",{children:"visibility: hidden"})," CSS properties."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("code",{children:"false"})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},75251:(e,t,r)=>{var i=r(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var i,o={},c=null,a=null;for(i in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:a,props:o,_owner:d.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>s});var i=r(67294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);