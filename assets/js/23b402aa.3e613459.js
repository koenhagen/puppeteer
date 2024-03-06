/*! For license information please see 23b402aa.3e613459.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1043],{30184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var n=r(85893),s=r(11151);const i={sidebar_label:"EventEmitter"},l="EventEmitter class",a={id:"api/puppeteer.eventemitter",title:"EventEmitter class",description:"The EventEmitter class that many Puppeteer classes extend.",source:"@site/versioned_docs/version-22.3.0/api/puppeteer.eventemitter.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter",permalink:"/api/puppeteer.eventemitter",draft:!1,unlisted:!1,tags:[],version:"22.3.0",frontMatter:{sidebar_label:"EventEmitter"},sidebar:"api",previous:{title:"TimeoutError",permalink:"/api/puppeteer.timeouterror"},next:{title:"EventEmitter.emit",permalink:"/api/puppeteer.eventemitter.emit"}},d={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"eventemitter-class",children:"EventEmitter class"}),"\n",(0,n.jsx)(t.p,{children:"The EventEmitter class that many Puppeteer classes extend."}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export declare class EventEmitter<Events extends Record<EventType, unknown>> implements CommonEventEmitter<EventsWithWildcard<Events>>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Implements:"})," ",(0,n.jsx)(t.a,{href:"/api/puppeteer.commoneventemitter",children:"CommonEventEmitter"}),"<",(0,n.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>>"]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["This allows you to listen to events that Puppeteer classes fire and act accordingly. Therefore you'll mostly use ",(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.on",children:"on"})," and ",(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.off",children:"off"})," to bind and unbind to event listeners."]}),"\n",(0,n.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(t.code,{children:"EventEmitter"})," class."]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.emit",children:"emit(type, event)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Emit an event and call any associated listeners."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.listenercount",children:"listenerCount(type)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Gets the number of listeners for a given event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.off",children:"off(type, handler)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Remove an event listener from firing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.on",children:"on(type, handler)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Bind an event listener to fire when an event occurs."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.once",children:"once(type, handler)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Like ",(0,n.jsx)("code",{children:"on"})," but the listener will only be fired once and then it will be removed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.eventemitter.removealllisteners",children:"removeAllListeners(type)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Removes all listeners. If given an event argument, it will remove only listeners for that event."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,i={},o=null,c=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!d.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:o,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>l});var n=r(67294);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);