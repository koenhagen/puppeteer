/*! For license information please see 7e3b9bac.055930c3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94827],{34869:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=s(85893),n=s(11151);const o={sidebar_label:"Mouse"},a="Mouse class",d={id:"api/puppeteer.mouse",title:"Mouse class",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.mouse.md",sourceDirName:"api",slug:"/api/puppeteer.mouse",permalink:"/api/puppeteer.mouse",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"Mouse"},sidebar:"api",previous:{title:"Keyboard.up",permalink:"/api/puppeteer.keyboard.up"},next:{title:"Mouse.click",permalink:"/api/puppeteer.mouse.click"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"mouse-class",children:"Mouse class"}),"\n",(0,r.jsx)(t.p,{children:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Mouse\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["Every ",(0,r.jsx)(t.code,{children:"page"})," object has its own Mouse, accessible with [",(0,r.jsx)(t.code,{children:"page.mouse"}),"](#pagemouse)."]}),"\n",(0,r.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(t.code,{children:"Mouse"})," class."]}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": The mouse events trigger synthetic ",(0,r.jsx)(t.code,{children:"MouseEvent"}),"s. This means that it does not fully replicate the functionality of what a normal user would be able to do with their mouse."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, dragging and selecting text is not possible using ",(0,r.jsx)(t.code,{children:"page.mouse"}),". Instead, you can use the ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection",children:"`DocumentOrShadowRoot.getSelection()`"})," functionality implemented in the platform."]}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"For example, if you want to select all content between nodes:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"await page.evaluate(\n  (from, to) => {\n    const selection = from.getRootNode().getSelection();\n    const range = document.createRange();\n    range.setStartBefore(from);\n    range.setEndAfter(to);\n    selection.removeAllRanges();\n    selection.addRange(range);\n  },\n  fromJSHandle,\n  toJSHandle\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"If you then would want to copy-paste your selection, you can use the clipboard api:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// The clipboard api does not allow you to copy, unless the tab is focused.\nawait page.bringToFront();\nawait page.evaluate(() => {\n  // Copy the selected content to the clipboard\n  document.execCommand('copy');\n  // Obtain the content of the clipboard as a string\n  return navigator.clipboard.readText();\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": If you want access to the clipboard API, you have to give it permission to do so:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"await browser\n  .defaultBrowserContext()\n  .overridePermissions('<your origin>', ['clipboard-read', 'clipboard-write']);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.click",children:"click(x, y, options)"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Shortcut for ",(0,r.jsx)("code",{children:"mouse.move"}),", ",(0,r.jsx)("code",{children:"mouse.down"})," and ",(0,r.jsx)("code",{children:"mouse.up"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.down",children:"down(options)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Presses the mouse."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.drag",children:"drag(start, target)"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Dispatches a ",(0,r.jsx)("code",{children:"drag"})," event."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.draganddrop",children:"dragAndDrop(start, target, options)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Performs a drag, dragenter, dragover, and drop in sequence."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.dragenter",children:"dragEnter(target, data)"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Dispatches a ",(0,r.jsx)("code",{children:"dragenter"})," event."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.dragover",children:"dragOver(target, data)"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Dispatches a ",(0,r.jsx)("code",{children:"dragover"})," event."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.drop",children:"drop(target, data)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Performs a dragenter, dragover, and drop in sequence."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.move",children:"move(x, y, options)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Moves the mouse to the given coordinate."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.reset",children:"reset()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Resets the mouse to the default state: No buttons pressed; position at (0,0)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.up",children:"up(options)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Releases the mouse."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.mouse.wheel",children:"wheel(options)"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["Dispatches a ",(0,r.jsx)("code",{children:"mousewheel"})," event."]})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,t,s)=>{var r=s(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var r,o={},c=null,l=null;for(r in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:l,props:o,_owner:d.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},85893:(e,t,s)=>{e.exports=s(75251)},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>a});var r=s(67294);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);