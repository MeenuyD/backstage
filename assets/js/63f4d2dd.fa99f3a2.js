/*! For license information please see 63f4d2dd.fa99f3a2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[406975],{66078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(824246),o=n(511151);const s={id:"plugin-techdocs-addons-test-utils.techdocsaddontester",title:"TechDocsAddonTester",description:"API reference for TechDocsAddonTester"},c=void 0,d={id:"reference/plugin-techdocs-addons-test-utils.techdocsaddontester",title:"TechDocsAddonTester",description:"API reference for TechDocsAddonTester",source:"@site/../docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-addons-test-utils.techdocsaddontester",permalink:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-addons-test-utils.techdocsaddontester",title:"TechDocsAddonTester",description:"API reference for TechDocsAddonTester"}},i={},a=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs-addons-test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester",children:(0,r.jsx)(t.code,{children:"TechDocsAddonTester"})})]}),"\n",(0,r.jsx)(t.p,{children:"Utility class for rendering TechDocs Addons end-to-end within the TechDocs reader page, with a set of givens (e.g. page DOM, metadata, etc)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class TechDocsAddonTester \n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const { getByText } = await TechDocsAddonTester.buildAddonsInTechDocs([<AnAddon />])\n  .withDom(<body>TEST_CONTENT</body>)\n  .renderWithEffects();\n\nexpect(getByText('TEST_CONTENT')).toBeInTheDocument();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constructor"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester._constructor_",children:"(constructor)(addons)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"protected"})}),(0,r.jsxs)(t.td,{children:["Constructs a new instance of the ",(0,r.jsx)(t.code,{children:"TechDocsAddonTester"})," class"]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.atpath",children:"atPath(path)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Provide the TechDocs page path at which the Addon is rendered (e.g. the part of the path after the entity namespace/kind/name)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.build",children:"build()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Return a fully configured and mocked TechDocs reader page within a test App instance, using the given Addon(s)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.buildaddonsintechdocs",children:"buildAddonsInTechDocs(addons)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"static"})}),(0,r.jsx)(t.td,{children:"Get a TechDocsAddonTester instance for a given set of Addons."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",children:"renderWithEffects()"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Render the Addon within a fully configured and mocked TechDocs reader."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withapis",children:"withApis(apis)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Provide mock API implementations if your Addon expects any."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withdom",children:"withDom(dom)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Provide mock HTML if your Addon expects it in the shadow DOM."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withentity",children:"withEntity(entity)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Provide a mock entity if your Addon needs it. This also controls the base path at which the Addon is rendered."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withmetadata",children:"withMetadata(metadata)"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Provide mock techdocs_metadata.json values if your Addon needs it."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,u=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:u,props:s,_owner:d.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function j(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||p}function m(){}function _(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var b=_.prototype=new m;b.constructor=_,y(b,j.prototype),b.isPureReactComponent=!0;var g=Array.isArray,v=Object.prototype.hasOwnProperty,T={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var o,s={},c=null,d=null;if(null!=t)for(o in void 0!==t.ref&&(d=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,o)&&!w.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var a=Array(i),u=0;u<i;u++)a[u]=arguments[u+2];s.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:T.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,o,s,c){var d=typeof e;"undefined"!==d&&"boolean"!==d||(e=null);var i=!1;if(null===e)i=!0;else switch(d){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return c=c(i=e),e=""===s?"."+A(i,0):s,g(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),D(c,t,o,"",(function(e){return e}))):null!=c&&(S(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(i=0,s=""===s?".":s+":",g(e))for(var a=0;a<e.length;a++){var u=s+A(d=e[a],a);i+=D(d,t,o,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),a=0;!(d=e.next()).done;)i+=D(d=d.value,t,o,u=s+A(d,a++),c);else if("object"===d)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,t,n){if(null==e)return e;var r=[],o=0;return D(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},O={transition:null},$={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:O,ReactCurrentOwner:T};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=j,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,d=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,d=T.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)v.call(t,a)&&!w.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){i=Array(a);for(var u=0;u<a;u++)i[u]=arguments[u+2];o.children=i}return{$$typeof:n,type:e.type,key:s,ref:c,props:o,_owner:d}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>c});var r=n(667294);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);