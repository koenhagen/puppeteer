/*! For license information please see 6317d68f.e9a83f3e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87239],{19592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(85893),s=n(11151);const i={},o="Puppeteer Angular Schematic",l={id:"integrations/ng-schematics",title:"Puppeteer Angular Schematic",description:"Adds Puppeteer-based e2e tests to your Angular project.",source:"@site/versioned_docs/version-22.0.0/integrations/ng-schematics.md",sourceDirName:"integrations",slug:"/integrations/ng-schematics",permalink:"/integrations/ng-schematics",draft:!1,unlisted:!1,tags:[],version:"22.0.0",frontMatter:{},sidebar:"docs",previous:{title:"Integrations",permalink:"/category/integrations"},next:{title:"Experimental WebDriver BiDi support",permalink:"/webdriver-bidi"}},c={},a=[{value:"Getting started",id:"getting-started",level:2},{value:"Options",id:"options",level:3},{value:"Creating a single test file",id:"creating-a-single-test-file",level:2},{value:"Running test server and dev server at the same time",id:"running-test-server-and-dev-server-at-the-same-time",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Sandbox smoke tests",id:"sandbox-smoke-tests",level:3},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Migrating from Protractor",id:"migrating-from-protractor",level:2},{value:"Entry point",id:"entry-point",level:3},{value:"Getting element properties",id:"getting-element-properties",level:3},{value:"Query Selectors",id:"query-selectors",level:3},{value:"Actions Selectors",id:"actions-selectors",level:3},{value:"Example",id:"example",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"puppeteer-angular-schematic",children:"Puppeteer Angular Schematic"}),"\n",(0,r.jsx)(t.p,{children:"Adds Puppeteer-based e2e tests to your Angular project."}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(t.p,{children:"Run the command below in an Angular CLI app directory and follow the prompts."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note this will add the schematic as a dependency to your project."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ng add @puppeteer/ng-schematics\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Or you can use the same command followed by the ",(0,r.jsx)(t.a,{href:"#options",children:"options"})," below."]}),"\n",(0,r.jsx)(t.p,{children:"Currently, this schematic supports the following test runners:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://jasmine.github.io/",children:(0,r.jsx)(t.strong,{children:"Jasmine"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://jestjs.io/",children:(0,r.jsx)(t.strong,{children:"Jest"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://mochajs.org/",children:(0,r.jsx)(t.strong,{children:"Mocha"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/api/test.html",children:(0,r.jsx)(t.strong,{children:"Node Test Runner"})})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"With the schematics installed you can run E2E tests:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ng e2e\n"})}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.p,{children:"When adding schematics to your project you can to provide following options:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"--test-runner"})}),(0,r.jsx)(t.td,{children:"The testing framework to install along side Puppeteer."}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"jasmine"'}),", ",(0,r.jsx)(t.code,{children:'"jest"'}),", ",(0,r.jsx)(t.code,{children:'"mocha"'}),", ",(0,r.jsx)(t.code,{children:'"node"'})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-single-test-file",children:"Creating a single test file"}),"\n",(0,r.jsx)(t.p,{children:"Puppeteer Angular Schematic exposes a method to create a single test file."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'ng generate @puppeteer/ng-schematics:e2e "<TestName>"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"running-test-server-and-dev-server-at-the-same-time",children:"Running test server and dev server at the same time"}),"\n",(0,r.jsxs)(t.p,{children:["By default the E2E test will run the app on the same port as ",(0,r.jsx)(t.code,{children:"ng start"}),".\nTo avoid this you can specify the port the an the ",(0,r.jsx)(t.code,{children:"angular.json"}),"\nUpdate either ",(0,r.jsx)(t.code,{children:"e2e"})," or ",(0,r.jsx)(t.code,{children:"puppeteer"})," (depending on the initial setup) to:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "e2e": {\n    "builder": "@puppeteer/ng-schematics:puppeteer",\n    "options": {\n      "commands": [...],\n      "devServerTarget": "sandbox:serve",\n      "testRunner": "<TestRunner>",\n      "port": 8080\n    },\n    ...\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now update the E2E test file ",(0,r.jsx)(t.code,{children:"utils.ts"})," baseUrl to:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const baseUrl = 'http://localhost:8080';\n"})}),"\n",(0,r.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsxs)(t.p,{children:["Check out our ",(0,r.jsx)(t.a,{href:"https://pptr.dev/contributing",children:"contributing guide"})," to get an overview of what you need to develop in the Puppeteer repo."]}),"\n",(0,r.jsx)(t.h3,{id:"sandbox-smoke-tests",children:"Sandbox smoke tests"}),"\n",(0,r.jsx)(t.p,{children:"To make integration easier smoke test can be run with a single command, that will create a fresh install of Angular (single application and a milti application projects). Then it will install the schematics inside them and run the initial e2e tests:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"node tools/smoke.mjs\n"})}),"\n",(0,r.jsx)(t.h3,{id:"unit-testing",children:"Unit Testing"}),"\n",(0,r.jsxs)(t.p,{children:["The schematics utilize ",(0,r.jsx)(t.code,{children:"@angular-devkit/schematics/testing"})," for verifying correct file creation and ",(0,r.jsx)(t.code,{children:"package.json"})," updates. To execute the test suit:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,r.jsx)(t.h2,{id:"migrating-from-protractor",children:"Migrating from Protractor"}),"\n",(0,r.jsx)(t.h3,{id:"entry-point",children:"Entry point"}),"\n",(0,r.jsxs)(t.p,{children:["Puppeteer has its own ",(0,r.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.browser",children:(0,r.jsx)(t.code,{children:"browser"})})," that exposes the browser process.\nA more closes comparison for Protractor's ",(0,r.jsx)(t.code,{children:"browser"})," would be Puppeteer's ",(0,r.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.page",children:(0,r.jsx)(t.code,{children:"page"})}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Testing framework specific imports\n\nimport {setupBrowserHooks, getBrowserState} from './utils';\n\ndescribe('<Test Name>', function () {\n  setupBrowserHooks();\n  it('is running', async function () {\n    const {page} = getBrowserState();\n    // Query elements\n    await page\n      .locator('my-component')\n      // Click on the element once found\n      .click();\n  });\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"getting-element-properties",children:"Getting element properties"}),"\n",(0,r.jsx)(t.p,{children:"You can easily get any property of the element."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Testing framework specific imports\n\nimport {setupBrowserHooks, getBrowserState} from './utils';\n\ndescribe('<Test Name>', function () {\n  setupBrowserHooks();\n  it('is running', async function () {\n    const {page} = getBrowserState();\n    // Query elements\n    const elementText = await page\n      .locator('.my-component')\n      .map(button => button.innerText)\n      // Wait for element to show up\n      .wait();\n\n    // Assert via assertion library\n  });\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"query-selectors",children:"Query Selectors"}),"\n",(0,r.jsxs)(t.p,{children:["Puppeteer supports multiple types of selectors, namely, the CSS, ARIA, text, XPath and pierce selectors.\nThe following table shows Puppeteer's equivalents to ",(0,r.jsx)(t.a,{href:"https://www.protractortest.org/#/api?view=ProtractorBy",children:"Protractor By"}),"."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["For improved reliability and reduced flakiness try our\n",(0,r.jsx)(t.strong,{children:"Experimental"})," ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/locators",children:"Locators API"})]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"By"}),(0,r.jsx)(t.th,{children:"Protractor code"}),(0,r.jsx)(t.th,{children:"Puppeteer querySelector"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CSS (Single)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$(by.css('<CSS>'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page.$('<CSS>')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CSS (Multiple)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$$(by.css('<CSS>'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page.$$('<CSS>')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Id"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$(by.id('<ID>'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page.$('#<ID>')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CssContainingText"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$(by.cssContainingText('<CSS>', '<TEXT>'))"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"page.$('<CSS> ::-p-text(<TEXT>)')"})," `"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DeepCss"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$(by.deepCss('<CSS>'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page.$(':scope >>> <CSS>')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"XPath"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$(by.xpath('<XPATH>'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page.$('::-p-xpath(<XPATH>)')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"JS"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$(by.js('document.querySelector(\"<CSS>\")'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page.evaluateHandle(() => document.querySelector('<CSS>'))"})})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["For advanced use cases such as Protractor's ",(0,r.jsx)(t.code,{children:"by.addLocator"})," you can check Puppeteer's ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/query-selectors#custom-selectors",children:"Custom selectors"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"actions-selectors",children:"Actions Selectors"}),"\n",(0,r.jsx)(t.p,{children:"Puppeteer allows you to all necessary actions to allow test your application."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Click on the element.\nelement(locator).click();\n// Puppeteer equivalent\nawait page.locator(locator).click();\n\n// Send keys to the element (usually an input).\nelement(locator).sendKeys('my text');\n// Puppeteer equivalent\nawait page.locator(locator).fill('my text');\n\n// Clear the text in an element (usually an input).\nelement(locator).clear();\n// Puppeteer equivalent\nawait page.locator(locator).fill('');\n\n// Get the value of an attribute, for example, get the value of an input.\nelement(locator).getAttribute('value');\n// Puppeteer equivalent\nconst element = await page.locator(locator).waitHandle();\nconst value = await element.getProperty('value');\n"})}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Sample Protractor test:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"describe('Protractor Demo', function () {\n  it('should add one and two', function () {\n    browser.get('http://juliemr.github.io/protractor-demo/');\n    element(by.model('first')).sendKeys(1);\n    element(by.model('second')).sendKeys(2);\n\n    element(by.id('gobutton')).click();\n\n    expect(element(by.binding('latest')).getText()).toEqual('3');\n  });\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Sample Puppeteer migration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {setupBrowserHooks, getBrowserState} from './utils';\n\ndescribe('Puppeteer Demo', function () {\n  setupBrowserHooks();\n  it('should add one and two', function () {\n    const {page} = getBrowserState();\n    await page.goto('http://juliemr.github.io/protractor-demo/');\n\n    await page.locator('.form-inline > input:nth-child(1)').fill('1');\n    await page.locator('.form-inline > input:nth-child(2)').fill('2');\n    await page.locator('#gobutton').fill('2');\n\n    const result = await page\n      .locator('.table tbody td:last-of-type')\n      .map(header => header.innerText)\n      .wait();\n\n    expect(result).toEqual('3');\n  });\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,d=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);