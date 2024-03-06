/*! For license information please see dfba203a.ec12570c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58941],{95182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(85893),o=r(11151);const i={sidebar_label:"Page.waitForSelector"},s="Page.waitForSelector() method",l={id:"api/puppeteer.page.waitforselector",title:"Page.waitForSelector() method",description:"Wait for the selector to appear in page. If at the moment of calling the method the selector already exists, the method will return immediately. If the selector doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.page.waitforselector.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforselector",permalink:"/api/puppeteer.page.waitforselector",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"Page.waitForSelector"},sidebar:"api",previous:{title:"Page.waitForResponse",permalink:"/api/puppeteer.page.waitforresponse"},next:{title:"Page.workers",permalink:"/api/puppeteer.page.workers"}},a={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pagewaitforselector-method",children:"Page.waitForSelector() method"}),"\n",(0,n.jsxs)(t.p,{children:["Wait for the ",(0,n.jsx)(t.code,{children:"selector"})," to appear in page. If at the moment of calling the method the ",(0,n.jsx)(t.code,{children:"selector"})," already exists, the method will return immediately. If the ",(0,n.jsx)(t.code,{children:"selector"})," doesn't appear after the ",(0,n.jsx)(t.code,{children:"timeout"})," milliseconds of waiting, the function will throw."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForSelector<Selector extends string>(\n    selector: Selector,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"selector"}),(0,n.jsx)(t.td,{children:"Selector"}),(0,n.jsxs)(t.td,{children:["A ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," of an element to wait for"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.waitforselectoroptions",children:"WaitForSelectorOptions"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Optional waiting parameters"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,n.jsx)(t.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,n.jsxs)(t.p,{children:["Promise which resolves when element specified by selector string is added to DOM. Resolves to ",(0,n.jsx)(t.code,{children:"null"})," if waiting for hidden: ",(0,n.jsx)(t.code,{children:"true"})," and selector is not found in DOM."]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["The optional Parameter in Arguments ",(0,n.jsx)(t.code,{children:"options"})," are:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"visible"}),": A boolean wait for element to be present in DOM and to be visible, i.e. to not have ",(0,n.jsx)(t.code,{children:"display: none"})," or ",(0,n.jsx)(t.code,{children:"visibility: hidden"})," CSS properties. Defaults to ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"hidden"}),": Wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,n.jsx)(t.code,{children:"display: none"})," or ",(0,n.jsx)(t.code,{children:"visibility: hidden"})," CSS properties. Defaults to ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"timeout"}),": maximum time to wait for in milliseconds. Defaults to ",(0,n.jsx)(t.code,{children:"30000"})," (30 seconds). Pass ",(0,n.jsx)(t.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,n.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"This method works across navigations:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var n=r(67294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);