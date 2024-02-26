/*! For license information please see 7c8b8f0a.9d46209e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[765408],{59964:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(824246),o=n(511151);const s={id:"plugin-scaffolder-backend.taskmanager",title:"TaskManager",description:"API reference for TaskManager"},c=void 0,a={id:"reference/plugin-scaffolder-backend.taskmanager",title:"TaskManager",description:"API reference for TaskManager",source:"@site/../docs/reference/plugin-scaffolder-backend.taskmanager.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskmanager",permalink:"/docs/reference/plugin-scaffolder-backend.taskmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskmanager.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskmanager",title:"TaskManager",description:"API reference for TaskManager"}},i={},l=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager",children:(0,t.jsx)(r.code,{children:"TaskManager"})})]}),"\n",(0,t.jsx)(r.p,{children:"TaskManager"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class TaskManager implements TaskContext \n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Implements:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.taskcontext",children:"TaskContext"})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.cancelsignal",children:"cancelSignal"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:"AbortSignal"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.createdby",children:"createdBy"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:"string | undefined"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.done",children:"done"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.secrets",children:"secrets"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.tasksecrets",children:"TaskSecrets"})," | undefined"]}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.spec",children:"spec"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsxs)(r.td,{children:['import("@backstage/plugin-scaffolder-common").',(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-common.taskspecv1beta3",children:"TaskSpecV1beta3"})]}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.complete",children:"complete(result, metadata)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.create",children:"create(task, storage, abortSignal, logger)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.emitlog",children:"emitLog(message, logMetadata)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend.taskmanager.getworkspacename",children:"getWorkspaceName()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]})]})]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function j(e,r,n){this.props=e,this.context=r,this.refs=x,this.updater=n||h}function m(){}function g(e,r,n){this.props=e,this.context=r,this.refs=x,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var k=g.prototype=new m;k.constructor=g,y(k,j.prototype),k.isPureReactComponent=!0;var b=Array.isArray,_=Object.prototype.hasOwnProperty,v={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,t){var o,s={},c=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,o)&&!S.hasOwnProperty(o)&&(s[o]=r[o]);var i=arguments.length-2;if(1===i)s.children=t;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:n,type:e,key:c,ref:a,props:s,_owner:v.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function T(e,r,o,s,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case t:i=!0}}if(i)return c=c(i=e),e=""===s?"."+R(i,0):s,b(c)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),T(c,r,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(i=0,s=""===s?".":s+":",b(e))for(var l=0;l<e.length;l++){var u=s+R(a=e[l],l);i+=T(a,r,o,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)i+=T(a=a.value,r,o,u=s+R(a,l++),c);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,r,n){if(null==e)return e;var t=[],o=0;return T(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},O={transition:null},I={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:O,ReactCurrentOwner:v};r.Children={map:$,forEach:function(e,r,n){$(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=j,r.Fragment=o,r.Profiler=c,r.PureComponent=g,r.StrictMode=s,r.Suspense=u,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=v.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in r)_.call(r,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==i?i[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];o.children=i}return{$$typeof:n,type:e.type,key:s,ref:c,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=O.transition;O.transition={};try{e()}finally{O.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return M.current.useCallback(e,r)},r.useContext=function(e){return M.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return M.current.useDeferredValue(e)},r.useEffect=function(e,r){return M.current.useEffect(e,r)},r.useId=function(){return M.current.useId()},r.useImperativeHandle=function(e,r,n){return M.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return M.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return M.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return M.current.useMemo(e,r)},r.useReducer=function(e,r,n){return M.current.useReducer(e,r,n)},r.useRef=function(e){return M.current.useRef(e)},r.useState=function(e){return M.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return M.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return M.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var t=n(667294);const o={},s=t.createContext(o);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);