/*! For license information please see dab9bb04.98e4e633.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[236305],{229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"extension-overrides",title:"Frontend Extension Overrides",sidebar_label:"Extension Overrides",description:"Frontend extension overrides"},a=void 0,s={id:"frontend-system/architecture/extension-overrides",title:"Frontend Extension Overrides",description:"Frontend extension overrides",source:"@site/../docs/frontend-system/architecture/05-extension-overrides.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/extension-overrides",permalink:"/docs/frontend-system/architecture/extension-overrides",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/05-extension-overrides.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"extension-overrides",title:"Frontend Extension Overrides",sidebar_label:"Extension Overrides",description:"Frontend extension overrides"},sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/frontend-system/architecture/plugins"},next:{title:"Utility APIs",permalink:"/docs/frontend-system/architecture/utility-apis"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Override App Extensions",id:"override-app-extensions",level:2},{value:"Example",id:"example",level:3},{value:"Override Plugin Extensions",id:"override-plugin-extensions",level:2},{value:"Example",id:"example-1",level:3},{value:"Create Standalone Extensions",id:"create-standalone-extensions",level:2},{value:"Example",id:"example-2",level:3}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"An extension override is a building block of the frontend system that allows you to programmatically override app or plugin extensions anywhere in your application. Since the entire application is built mostly out of extensions from the bottom up, this is a powerful feature. You can use it for example to provide your own app root layout, to replace the implementation of a Utility API with a custom one, to override how the catalog page renders itself, and much more."}),"\n",(0,r.jsxs)(t.p,{children:["In\xa0general, most features should have a good level of customization built into them, so that users do not have to leverage extension overrides to achieve common goals. A well written feature often has ",(0,r.jsx)(t.a,{href:"../../conf/",children:"configuration"})," settings, or uses extension inputs for extensibility where applicable. An example of this is the search plugin, which allows you to provide result renderers as inputs rather than replacing the result page wholesale just to tweak how results are shown. Adopters should take advantage of those when possible, and only use extension overrides when it's necessary to entirely replace the extension. Check the respective extension documentation for guidance."]}),"\n",(0,r.jsx)(t.h2,{id:"override-app-extensions",children:"Override App Extensions"}),"\n",(0,r.jsx)(t.p,{children:"In order to override an app extension, you must create a new extension and add it to the list of overridden features. The steps are: create your extension overrides and use them in Backstage."}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["In the example below, we create a file that exports custom extensions for the app's ",(0,r.jsx)(t.code,{children:"light"})," and ",(0,r.jsx)(t.code,{children:"dark"})," themes:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/themes.ts"',children:"import {\n  createThemeExtension,\n  createExtensionOverrides\n} from '@backstage/frontend-plugin-api';\nimport { apertureThemes } from './themes';\nimport { ApertureLightIcon, ApertureDarkIcon } from './icons';\n\n// Creating a light theme extension\nconst apertureLightTheme = createThemeExtension({\n  // highlight-start\n  namespace: 'app',\n  name: 'light',\n  // highlight-end\n  title: 'Aperture Light Theme',\n  variant: 'light',\n  icon: <ApertureLightIcon />,\n  Provider: ({ children }) => (\n    <UnifiedThemeProvider theme={apertureThemes.light} children={children} />\n  ),\n});\n\n// Creating a dark theme extension\nconst apertureDarkTheme = createThemeExtension({\n  // highlight-start\n  namespace: 'app',\n  name: 'dark',\n  // highlight-end\n  title: 'Aperture Dark Theme',\n  variant: 'dark',\n  icon: <ApertureDarkIcon />,\n  Provider: ({ children }) => (\n    <UnifiedThemeProvider theme={apertureThemes.dark} children={children} />\n  ),\n});\n\n// Creating an extension overrides preset\nexport createExtensionOverrides({\n  extensions: [apertureLightTheme, apertureDarkTheme]\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that we declare ",(0,r.jsx)(t.code,{children:"namespace"})," as ",(0,r.jsx)(t.code,{children:"'app'"})," while creating the themes, so the system knows we are overriding app extensions. Additionally, to specifically override the ",(0,r.jsx)(t.code,{children:"light"})," and ",(0,r.jsx)(t.code,{children:"dark"})," theme extensions, we set the ",(0,r.jsx)(t.code,{children:"name"})," option to ",(0,r.jsx)(t.code,{children:"light"})," and ",(0,r.jsx)(t.code,{children:"dark"}),". Therefore, to override app theme extensions, we ensure that the extension ",(0,r.jsx)(t.code,{children:"namespace"})," and ",(0,r.jsx)(t.code,{children:"name"})," match those of the default app theme extension definitions."]}),"\n",(0,r.jsx)(t.p,{children:"Now we are able to use the overrides in a Backstage app:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import { createApp } from '@backstage/frontend-app-api';\nimport themeOverrides from './themes';\n\nconst app = createApp({\n  // highlight-next-line\n features: [themeOverrides],\n});\n\nexport default app.createRoot().\n"})}),"\n",(0,r.jsx)(t.p,{children:"If the plugin you want to change is internal to your company or you just want to replace one of the application's core extensions, you can decide to store the overrides code directly in the app package or extract them to a separate package."}),"\n",(0,r.jsx)(t.p,{children:"Note that it can still be a good idea to split your overrides out into separate packages in large projects. But it's up to you to decide how to group the extensions into extension overrides."}),"\n",(0,r.jsx)(t.h2,{id:"override-plugin-extensions",children:"Override Plugin Extensions"}),"\n",(0,r.jsxs)(t.p,{children:["To override an extension that is provided by a plugin, you need to provide a new extension that has the same ID as the existing extension. That is, all kind, namespace, and name options must match the extension you want to replace. This means that you typically need to provide an explicit ",(0,r.jsx)(t.code,{children:"namespace"})," when overriding extensions from a plugin."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["We recommend that plugin developers share the extension IDs in their plugin documentation, but usually you can infer the ID by following the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/naming-patterns",children:"naming patterns"})," documentation."]})}),"\n",(0,r.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Imagine you have a plugin with the ID ",(0,r.jsx)(t.code,{children:"'search'"}),", and the plugin provides a page extension that you want to fully override with your own custom component. To do so, you need to create your page extension with an explicit ",(0,r.jsx)(t.code,{children:"namespace"})," option that matches that of the plugin that you want to override, in this case ",(0,r.jsx)(t.code,{children:"'search'"}),". If the existing extension also has an explicit ",(0,r.jsx)(t.code,{children:"name"})," you'd need to set the ",(0,r.jsx)(t.code,{children:"name"})," of your override extension to the same value as well."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/search.ts"',children:"import { createPageExtension } from '@backstage/frontend-plugin-api';\n\n// Creating a custom search page extension\nconst customSearchPage = createPageExtension({\n  // highlight-next-line\n  namespace: 'search',\n  // Omitting name since it is the index plugin page\n  defaultPath: '/search',\n  loader: () => import('./SearchPage').then(m => m.<SearchPage/>),\n});\n\nexport createExtensionOverrides({\n  extensions: [customSearchPage]\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Don't forget to configure your overrides in the ",(0,r.jsx)(t.code,{children:"createApp"})," function:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import { createApp } from '@backstage/frontend-app-api';\nimport searchOverrides from './search';\n\nconst app = createApp({\n  // highlight-next-line\n  features: [searchOverrides],\n});\n\nexport default app.createRoot();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now let's talk about the last override case, orphan extensions."}),"\n",(0,r.jsx)(t.h2,{id:"create-standalone-extensions",children:"Create Standalone Extensions"}),"\n",(0,r.jsx)(t.p,{children:"Sometimes you just need to quickly create a new extension and not overwrite an app extension or plugin. You can also use overrides to create extensions, but remember that if you want to make this extension available for installation by other users, we recommend providing it via a plugin in a separate package."}),"\n",(0,r.jsx)(t.h3,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Imagine you want to create a page that is currently only used by your application, like an Institutional page, for example. You can use overrides to extend the Backstage app to render it. To do so, simply create a page extension and pass it to the app as an override:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.ts"',children:"import { createApp } from '@backstage/frontend-app-api';\nimport {\n  createPageExtension,\n  createExtensionOverrides,\n} from '@backstage/frontend-plugin-api';\n\nconst app = createApp({\n  features: [\n    createExtensionOverrides({\n      extensions: [\n        // highlight-start\n        createPageExtension({\n          name: 'institutional',\n          defaultPath: '/institutional',\n          loader: () =>\n            import('./institutional').then(m => <m.InstitutionalPage />),\n        }),\n        // highlight-end\n      ],\n    }),\n  ],\n});\n\nexport default app.createRoot();\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that we are omitting ",(0,r.jsx)(t.code,{children:"namespace"})," when creating the page extension. When we omit ",(0,r.jsx)(t.code,{children:"namespace"}),", we are telling the system the new extension is standalone and not an application or plugin extension!"]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,x={};function y(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||f}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=v.prototype=new g;b.constructor=v,m(b,y.prototype),b.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+P(c,0):i,j(a)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),I(a,t,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",j(e))for(var l=0;l<e.length;l++){var u=i+P(s=e[l],l);c+=I(s,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=I(s=s.value,t,o,u=i+P(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,n){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},R={transition:null},$={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:R,ReactCurrentOwner:k};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);