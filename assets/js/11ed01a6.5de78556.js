"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[931],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(a),c=n,m=h["".concat(d,".").concat(c)]||h[c]||p[c]||l;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6519:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={},d="Repository",s={unversionedId:"guide/api-reference/data/repository",id:"guide/api-reference/data/repository",isDocsHomePage:!1,title:"Repository",description:"The data handling of the SDK allows you to fetch and write nearly everything in the database. The behavior matches the data handling in the main administration. The only difference is the implementation details because the data handling don't request the server directly. It communicates with the admin which handles the requests, changesets, saving and more.",source:"@site/docs/guide/2_api-reference/data/repository.md",sourceDirName:"guide/2_api-reference/data",slug:"/guide/api-reference/data/repository",permalink:"/admin-extension-sdk/docs/guide/api-reference/data/repository",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Get",permalink:"/admin-extension-sdk/docs/guide/api-reference/data/get"},next:{title:"Update",permalink:"/admin-extension-sdk/docs/guide/api-reference/data/update"}},u=[{value:"Criteria",id:"criteria",children:[],level:3},{value:"Search",id:"search",children:[{value:"Usage:",id:"usage",children:[],level:4},{value:"Parameters:",id:"parameters",children:[],level:4},{value:"Return value:",id:"return-value",children:[],level:4}],level:3},{value:"Get",id:"get",children:[{value:"Usage:",id:"usage-1",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4},{value:"Return value:",id:"return-value-1",children:[],level:4}],level:3},{value:"Save",id:"save",children:[{value:"Usage:",id:"usage-2",children:[],level:4},{value:"Parameters:",id:"parameters-2",children:[],level:4},{value:"Return value:",id:"return-value-2",children:[],level:4}],level:3},{value:"Clone",id:"clone",children:[{value:"Usage:",id:"usage-3",children:[],level:4},{value:"Parameters:",id:"parameters-3",children:[],level:4},{value:"Return value:",id:"return-value-3",children:[],level:4}],level:3},{value:"Has changes",id:"has-changes",children:[{value:"Usage:",id:"usage-4",children:[],level:4},{value:"Parameters:",id:"parameters-4",children:[],level:4},{value:"Return value:",id:"return-value-4",children:[],level:4}],level:3},{value:"Save all",id:"save-all",children:[{value:"Usage:",id:"usage-5",children:[],level:4},{value:"Parameters:",id:"parameters-5",children:[],level:4},{value:"Return value:",id:"return-value-5",children:[],level:4}],level:3},{value:"Delete",id:"delete",children:[{value:"Usage:",id:"usage-6",children:[],level:4},{value:"Parameters:",id:"parameters-6",children:[],level:4},{value:"Return value:",id:"return-value-6",children:[],level:4}],level:3},{value:"Create",id:"create",children:[{value:"Usage:",id:"usage-7",children:[],level:4},{value:"Parameters:",id:"parameters-7",children:[],level:4},{value:"Return value:",id:"return-value-7",children:[],level:4}],level:3},{value:"Request Context",id:"request-context",children:[],level:3}],p={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"repository"},"Repository"),(0,l.kt)("p",null,"The data handling of the SDK allows you to fetch and write nearly everything in the database. The behavior matches the data handling in the main administration. The only difference is the implementation details because the data handling don't request the server directly. It communicates with the admin which handles the requests, changesets, saving and more."),(0,l.kt)("p",null,"The data handling implements the repository pattern. You can create a repository for an entity simply like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"sw.data.repository('your_entity_name`)\n")),(0,l.kt)("p",null,"With this repository you can search for data, save it, delete it, create it or check for changes."),(0,l.kt)("h3",{id:"criteria"},"Criteria"),(0,l.kt)("p",null,"For requesting data you need to create a Criteria class which contains all information for the request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const criteria = new sw.data.Classes.Criteria();\n\ncriteria.setPage(1);\ncriteria.setLimit(10);\ncriteria.setTerm('foo');\ncriteria.setIds(['some-id', 'some-id']); // Allows to provide a list of ids which are used as a filter\n\n/**\n    * Configures the total value of a search result.\n    * 0 - no total count will be selected. Should be used if no pagination required (fastest)\n    * 1 - exact total count will be selected. Should be used if an exact pagination is required (slow)\n    * 2 - fetches limit * 5 + 1. Should be used if pagination can work with \"next page exists\" (fast)\n*/\ncriteria.setTotalCountMode(2);\n\ncriteria.addFilter(\n    Criteria.equals('product.active', true)\n);\n\ncriteria.addSorting(\n    Criteria.sort('product.name', 'DESC')\n);\n\ncriteria.addAggregation(\n    Criteria.avg('average_price', 'product.price')\n);\n\ncriteria.getAssociation('categories')\n    .addSorting(Criteria.sort('category.name', 'ASC'));\n")),(0,l.kt)("h3",{id:"search"},"Search"),(0,l.kt)("p",null,"Sends a search request for the repository entity."),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nconst yourEntities = await exampleRepository.search(yourCriteria);\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"criteria")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Your criteria object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change the ",(0,l.kt)("a",{parentName:"td",href:"#request-context"},"request context"))))),(0,l.kt)("h4",{id:"return-value"},"Return value:"),(0,l.kt)("p",null,"The return value is a EntityCollection which contains all entities matching the criteria."),(0,l.kt)("h3",{id:"get"},"Get"),(0,l.kt)("p",null,"Short hand to fetch a single entity from the server"),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nconst yourEntity = await exampleRepository.get('theEntityId');\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The id of the entity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change the ",(0,l.kt)("a",{parentName:"td",href:"#request-context"},"request context"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"criteria")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Your criteria object")))),(0,l.kt)("h4",{id:"return-value-1"},"Return value:"),(0,l.kt)("p",null,"The return value is the entity result when a matching entity was found."),(0,l.kt)("h3",{id:"save"},"Save"),(0,l.kt)("p",null,"Detects all entity changes and send the changes to the server.\nIf the entity is marked as new, the repository will send a POST create. Updates will be send as PATCH request.\nDeleted associations will be send as additional request"),(0,l.kt)("h4",{id:"usage-2"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nawait exampleRepository.save(yourEntityObject);\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The entity object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change the ",(0,l.kt)("a",{parentName:"td",href:"#request-context"},"request context"))))),(0,l.kt)("h4",{id:"return-value-2"},"Return value:"),(0,l.kt)("p",null,"This method does not have a return value. It just returns a Promise which is resolved when it was saved successfully."),(0,l.kt)("h3",{id:"clone"},"Clone"),(0,l.kt)("p",null,"Clones an existing entity"),(0,l.kt)("h4",{id:"usage-3"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nconst clonedEntityId = await exampleRepository.clone('theEntityIdToClone');\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entityId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The entity id which should be cloned")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change the ",(0,l.kt)("a",{parentName:"td",href:"#request-context"},"request context"))))),(0,l.kt)("h4",{id:"return-value-3"},"Return value:"),(0,l.kt)("p",null,"This method returns the id of the cloned entity."),(0,l.kt)("h3",{id:"has-changes"},"Has changes"),(0,l.kt)("p",null,"Detects if the entity or the relations has remaining changes which are not synchronized with the server"),(0,l.kt)("h4",{id:"usage-4"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nconst hasChanges = await exampleRepository.hasChanges(yourEntityObject);\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The entity object")))),(0,l.kt)("h4",{id:"return-value-4"},"Return value:"),(0,l.kt)("p",null,"This method returns a boolean value. If the entity has changes then it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". Otherwise it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"save-all"},"Save all"),(0,l.kt)("p",null,"Detects changes of all provided entities and send the changes to the server"),(0,l.kt)("h4",{id:"usage-5"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nawait exampleRepository.saveAll(yourEntityCollection);\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entities")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Your entity collection which should be saved")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change the ",(0,l.kt)("a",{parentName:"td",href:"#request-context"},"request context"))))),(0,l.kt)("h4",{id:"return-value-5"},"Return value:"),(0,l.kt)("p",null,"This method does not have a return value. It just returns a Promise which is resolved when it was saved successfully."),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Sends a delete request for the provided id."),(0,l.kt)("h4",{id:"usage-6"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nawait exampleRepository.delete('yourEntityId');\n")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entityId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The id of the entity which should be deleted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change the ",(0,l.kt)("a",{parentName:"td",href:"#request-context"},"request context"))))),(0,l.kt)("h4",{id:"return-value-6"},"Return value:"),(0,l.kt)("p",null,"This method does not have a return value. It just returns a Promise which is resolved when it was deleted successfully."),(0,l.kt)("h3",{id:"create"},"Create"),(0,l.kt)("p",null,"Creates a new entity for the local schema. To Many association are initialed with a collection with the corresponding remote api route. This entity is not saved to the database yet."),(0,l.kt)("h4",{id:"usage-7"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleRepository = sw.data.repository('your_entity');\n\nconst yourNewEntity = await exampleRepository.create();\n")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change the ",(0,l.kt)("a",{parentName:"td",href:"#request-context"},"request context"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"You can provide a id of the new entity if wanted")))),(0,l.kt)("h4",{id:"return-value-7"},"Return value:"),(0,l.kt)("p",null,"This method returns the newly created entity."),(0,l.kt)("h3",{id:"request-context"},"Request Context"),(0,l.kt)("p",null,"You can optionally change the context of the request. It will be merged together with the base API context."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleContext = {\n    // Load also inherited data (example from parent product in variant)\n    inheritance: true,\n    // Change the language context of the entity to change data in different languages\n    languageId: 'theLanguageId',\n    // If you are working with versioned entities you can change the current live version id\n    liveVersionId: 'yourLiveVersionId'\n}\n")))}h.isMDXComponent=!0}}]);