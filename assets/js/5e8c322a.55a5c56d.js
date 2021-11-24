"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[597],{7926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var i=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],r={id:"index",title:"@shopware-ag/admin-extension-sdk",slug:"/api/",sidebar_label:"Getting started",sidebar_position:0,custom_edit_url:null},l="Warning:",p={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"@shopware-ag/admin-extension-sdk",description:"This repository is still under development and should not be used yet.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/admin-extension-sdk/docs/api/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@shopware-ag/admin-extension-sdk",slug:"/api/",sidebar_label:"Getting started",sidebar_position:0,custom_edit_url:null},sidebar:"Documentation",next:{title:"Exports",permalink:"/admin-extension-sdk/docs/api/modules"}},d=[{value:"This repository is still under development and should not be used yet.",id:"this-repository-is-still-under-development-and-should-not-be-used-yet",children:[]},{value:"for the Shopware 6 app system",id:"for-the-shopware-6-app-system",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Features",id:"features",children:[{value:"Simple API",id:"simple-api",children:[]}]},{value:"Extremely small footprint on app side",id:"extremely-small-footprint-on-app-side",children:[]},{value:"Full Typescript support",id:"full-typescript-support",children:[]},{value:"Recipient (only for usage in the Shopware 6 Administration):",id:"recipient-only-for-usage-in-the-shopware-6-administration",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"warning"},"Warning:"),(0,s.kt)("h3",{id:"this-repository-is-still-under-development-and-should-not-be-used-yet"},"This repository is still under development and should not be used yet."),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/actions/workflows/base.yml"},(0,s.kt)("img",{parentName:"a",src:"https://github.com/shopware/admin-extension-sdk/actions/workflows/base.yml/badge.svg?branch=main",alt:"Tests"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@shopware-ag/admin-extension-sdk"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@shopware-ag/admin-extension-sdk",alt:"NPM Package"}))),(0,s.kt)("h1",{id:"admin-app-actions"},"Admin app actions"),(0,s.kt)("h3",{id:"for-the-shopware-6-app-system"},"for the Shopware 6 app system"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://shopware.github.io/admin-extension-sdk/"},"Open documentation")),(0,s.kt)("p",null,"This small library is for using admin actions in your app iframes."),(0,s.kt)("p",null,"Your app can then extend the Administration with many different actions, customizing UI elements and more. It can send actions to the administration or receive data from it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"send('redirect', {\n  url: 'https://www.shopware.com',\n  newTab: true\n})\n")),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("h4",{id:"using-npm"},"Using NPM:"),(0,s.kt)("p",null,"Install it to your ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm i --save @shopware-ag/admin-extension-sdk\n")),(0,s.kt)("p",null,"Then import it in your app:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { send } from '@shopware-ag/admin-extension-sdk';\n")),(0,s.kt)("h4",{id:"using-cdn"},"Using CDN:"),(0,s.kt)("p",null,"Import the source from the CDN:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// use the latest version available\n<script src="https://unpkg.com/@shopware-ag/admin-extension-sdk"><\/script>\n\n// use a fix version (example here: 1.2.3)\n<script src="https://unpkg.com/@shopware-ag/admin-extension-sdk@1.2.3"><\/script>\n')),(0,s.kt)("p",null,"Then you can access it with the global variable ",(0,s.kt)("inlineCode",{parentName:"p"},"AdminAppActions"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { send } = AdminAppActions;\n")),(0,s.kt)("h2",{id:"features"},"Features"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Simple API"),(0,s.kt)("li",{parentName:"ul"},"Sending actions to the admin"),(0,s.kt)("li",{parentName:"ul"},"Receive data from the admin"),(0,s.kt)("li",{parentName:"ul"},"Extremely small footprint on app side"),(0,s.kt)("li",{parentName:"ul"},"Full Typescript support")),(0,s.kt)("h3",{id:"simple-api"},"Simple API"),(0,s.kt)("p",null,"The API is very expressive and easy to learn. You just need to import our library and then you can use the send method for sending actions and receiving data."),(0,s.kt)("p",null,"The iframe are using only the function ",(0,s.kt)("inlineCode",{parentName:"p"},"send")," for sending the actions. The first parameter is the action-type and the second parameter contains the options for the action."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { send } from '@shopware-ag/admin-extension-sdk';\n\nsend('redirect', {\n  url: 'https://www.shopware.com',\n  newTab: true,\n})\n")),(0,s.kt)("p",null,"If the action has a response then you can get the information with the returned Promise value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { send } from '@shopware-ag/admin-extension-sdk';\n\nconst pageTitle = await send('getPageTitle', {});\n")),(0,s.kt)("h2",{id:"extremely-small-footprint-on-app-side"},"Extremely small footprint on app side"),(0,s.kt)("p",null,"The bundle size of this library is extremely small and will not grow when new actions will be defined. How is this done? The functions only execute the commands. Only types are describing the API and therefore not increase the bundle size. "),(0,s.kt)("h2",{id:"full-typescript-support"},"Full Typescript support"),(0,s.kt)("p",null,"Typescript provides a good developer experience for everyone using this tool. Every action and options can be autocompleted by the IDE. If you are also writing your application in Typescript you get direct feedback if you are doing a mistake in using the API."),(0,s.kt)("p",null,"A full auto-generated API documentation can be found in the documentation: ",(0,s.kt)("a",{parentName:"p",href:"https://shopware.github.io/admin-extension-sdk/"},"https://shopware.github.io/admin-extension-sdk/")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"recipient-only-for-usage-in-the-shopware-6-administration"},"Recipient (only for usage in the Shopware 6 Administration):"),(0,s.kt)("p",null,"The Shopware 6 administration listens to all messages. If a message matches an action then the given functionality will be called. Here is an example code how it can look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { on } from '@shopware-ag/admin-extension-sdk';\n\non('redirect', ({ newTab, url }) => {  \n  // call a method which redirects to the url\n  redirect({ newTab, url });\n})\n\non('getPageTitle', () => {  \n  // or return the value if the type needs a response\n  return document.title;\n})\n\n")))}m.isMDXComponent=!0}}]);