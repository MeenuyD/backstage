/*! For license information please see ffb27cb8.89866d33.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512974],{270595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},s=void 0,i={id:"integrations/ldap/org",title:"LDAP Organizational Data",description:"Setting up ingestion of organizational data from LDAP",source:"@site/../docs/integrations/ldap/org.md",sourceDirName:"integrations/ldap",slug:"/integrations/ldap/org",permalink:"/docs/integrations/ldap/org",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/ldap/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"LDAP Organizational Data",sidebar_label:"Org Data",description:"Setting up ingestion of organizational data from LDAP"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/google-cloud-storage/locations"},next:{title:"Intro to plugins",permalink:"/docs/plugins/"}},l={},u=[{value:"Supported vendors",id:"supported-vendors",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"target",id:"target",level:3},{value:"bind",id:"bind",level:3},{value:"users",id:"users",level:3},{value:"users.dn",id:"usersdn",level:4},{value:"users.options",id:"usersoptions",level:4},{value:"users.set",id:"usersset",level:4},{value:"users.map",id:"usersmap",level:4},{value:"groups",id:"groups",level:3},{value:"groups.dn",id:"groupsdn",level:4},{value:"groups.options",id:"groupsoptions",level:4},{value:"groups.set",id:"groupsset",level:4},{value:"groups.map",id:"groupsmap",level:4},{value:"Customize the Provider",id:"customize-the-provider",level:2},{value:"Using a Processor instead of a Provider",id:"using-a-processor-instead-of-a-provider",level:2},{value:"Processor Installation",id:"processor-installation",level:3},{value:"Driving LDAP Org Processor Ingestion with Locations",id:"driving-ldap-org-processor-ingestion-with-locations",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage catalog can be set up to ingest organizational data - users and\ngroups - directly from an LDAP compatible service. The result is a hierarchy of\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,r.jsx)(t.code,{children:"User"})})," and\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,r.jsx)(t.code,{children:"Group"})})," kind\nentities that mirror your org setup."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-vendors",children:"Supported vendors"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage in general supports OpenLDAP compatible vendors, as well as Active Directory and FreeIPA. If you are using a vendor that does not seem to be supported, please ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=enhancement&template=feature_template.md",children:"file an issue"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"This guide will use the Entity Provider method. If you for some reason prefer\nthe Processor method (not recommended), it is described separately below."}),"\n",(0,r.jsxs)(t.p,{children:["The provider is not installed by default, therefore you have to add a dependency\nto ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})," to your backend package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-ldap\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: When configuring to use a Provider instead of a Processor you do not\nneed to add a ",(0,r.jsx)(t.em,{children:"location"})," pointing to your LDAP server"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Update the catalog plugin initialization in your backend to add the provider and\nschedule it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { LdapOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-ldap';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  // The target parameter below needs to match the ldap.providers.target\n  // value specified in your app-config.\n  builder.addEntityProvider(\n    LdapOrgEntityProvider.fromConfig(env.config, {\n      id: 'our-ldap-master',\n      target: 'ldaps://ds.example.net',\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 60 },\n        timeout: { minutes: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"After this, you also have to add some configuration in your app-config that\ndescribes what you want to import for that target."}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The following configuration is a small example of how a setup could look for\nimporting groups and users from a corporate LDAP server."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"ldap:\n  providers:\n    - target: ldaps://ds.example.net\n      bind:\n        dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\n        secret: ${LDAP_SECRET}\n      users:\n        dn: ou=people,ou=example,dc=example,dc=net\n        options:\n          filter: (uid=*)\n        map:\n          description: l\n        set:\n          metadata.customField: 'hello'\n      groups:\n        dn: ou=access,ou=groups,ou=example,dc=example,dc=net\n        options:\n          filter: (&(objectClass=some-group-class)(!(groupType=email)))\n        map:\n          description: l\n        set:\n          metadata.customField: 'hello'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["There may be many providers, each targeting a specific ",(0,r.jsx)(t.code,{children:"target"})," which is\nsupposed to match the ",(0,r.jsx)(t.code,{children:"target"})," of a dedicated provider instance - i.e., you will\nadd one entity provider class instance per target to ingest from."]}),"\n",(0,r.jsx)(t.p,{children:'These config blocks have a lot of options in them, so we will describe each\n"root" key within the block separately.'}),"\n",(0,r.jsx)(t.h3,{id:"target",children:"target"}),"\n",(0,r.jsxs)(t.p,{children:["This is the URL of the targeted server, typically on the form\n",(0,r.jsx)(t.code,{children:"ldaps://ds.example.net"})," for SSL enabled servers or ",(0,r.jsx)(t.code,{children:"ldap://ds.example.net"}),"\nwithout SSL."]}),"\n",(0,r.jsx)(t.h3,{id:"bind",children:"bind"}),"\n",(0,r.jsx)(t.p,{children:"The bind block specifies how the plugin should bind (essentially, to\nauthenticate) towards the server. It has the following fields."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"dn: uid=ldap-reader-user,ou=people,ou=example,dc=example,dc=net\nsecret: ${LDAP_SECRET}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"dn"})," is the full LDAP Distinguished Name for the user that the plugin\nauthenticates itself as. At this point, only regular user based authentication\nis supported."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"secret"})," is the password of the same user. In this example, it is given in\nthe form of an environment variable ",(0,r.jsx)(t.code,{children:"LDAP_SECRET"}),", that has to be set when the\nbackend starts."]}),"\n",(0,r.jsx)(t.h3,{id:"users",children:"users"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"users"})," block defines the settings that govern the reading and\ninterpretation of users. Its fields are explained in separate sections below."]}),"\n",(0,r.jsx)(t.h4,{id:"usersdn",children:"users.dn"}),"\n",(0,r.jsxs)(t.p,{children:["The DN under which users are stored, e.g.\n",(0,r.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"usersoptions",children:"users.options"}),"\n",(0,r.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\nusers. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of users that are of actual interest to ingest. For example, you may want\n  # to filter out disabled users.\n  filter: (uid=*)\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,r.jsx)(t.h4,{id:"usersset",children:"users.set"}),"\n",(0,r.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,r.jsx)(t.h4,{id:"usersmap",children:"users.map"}),"\n",(0,r.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All the options are shown\nbelow, with their default values, but they are all optional."}),"\n",(0,r.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,r.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,r.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,r.jsx)(t.code,{children:"spec.profile.displayName"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry.\n  rdn: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: uid\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: mail\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.memberOf field of the entity.\n  memberOf: memberOf\n"})}),"\n",(0,r.jsx)(t.h3,{id:"groups",children:"groups"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"groups"})," block defines the settings that govern the reading and\ninterpretation of groups. Its fields are explained in separate sections below."]}),"\n",(0,r.jsx)(t.h4,{id:"groupsdn",children:"groups.dn"}),"\n",(0,r.jsxs)(t.p,{children:["The DN under which groups are stored, e.g.\n",(0,r.jsx)(t.code,{children:"ou=people,ou=example,dc=example,dc=net"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"groupsoptions",children:"groups.options"}),"\n",(0,r.jsx)(t.p,{children:"The search options to use when sending the query to the server, when reading all\ngroups. All the options are shown below, with their default values, but they are\nall optional."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"options:\n  # One of 'base', 'one', or 'sub'.\n  scope: one\n  # The filter is the one that you commonly will want to specify explicitly. It\n  # is a string on the standard LDAP query format. Use it to select out the set\n  # of groups that are of actual interest to ingest. For example, you may want\n  # to filter out disabled groups.\n  filter: (&(objectClass=some-group-class)(!(groupType=email)))\n  # The attribute selectors for each item, as passed to the LDAP server.\n  attributes: ['*', '+']\n  # This field is either 'false' to disable paging when reading from the\n  # server, or an object on the form '{ pageSize: 100, pagePause: true }' that\n  # specifies the details of how the paging shall work.\n  paged: false\n"})}),"\n",(0,r.jsx)(t.h4,{id:"groupsset",children:"groups.set"}),"\n",(0,r.jsx)(t.p,{children:"This optional piece lets you specify a number of JSON paths (on a.b.c form) and\nhard coded values to set on those paths. This can be useful for example if you\nwant to hard code a namespace or similar on the generated entities."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"set:\n  # Just an example; the key and value can be anything\n  metadata.namespace: 'ldap'\n"})}),"\n",(0,r.jsx)(t.h4,{id:"groupsmap",children:"groups.map"}),"\n",(0,r.jsx)(t.p,{children:"Mappings from well known entity fields, to LDAP attribute names. This is where\nyou are able to define how to interpret the attributes of each LDAP result item,\nand to move them into the corresponding entity fields. All of the options are\nshown below, with their default values, but they are all optional."}),"\n",(0,r.jsxs)(t.p,{children:["If you leave out an optional mapping, it will still be copied using that default\nvalue. For example, even if you do not put in the field ",(0,r.jsx)(t.code,{children:"displayName"})," in your\nconfig, the provider will still copy the attribute ",(0,r.jsx)(t.code,{children:"cn"})," into the entity field\n",(0,r.jsx)(t.code,{children:"spec.profile.displayName"}),". If the target field is optional, such as the display\nname, the importer will accept missing attributes and just leave the target\nfield unset. If the target field is mandatory, such as the name of the entity,\nvalidation will fail if the source attribute is missing."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"map:\n  # The name of the attribute that holds the relative\n  # distinguished name of each entry. This value is copied into a\n  # well known annotation to be able to query by it later.\n  rdn: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.name field of the entity.\n  name: cn\n  # The name of the attribute that shall be used for the value of\n  # the metadata.description field of the entity.\n  description: description\n  # The name of the attribute that shall be used for the value of\n  # the spec.type field of the entity.\n  type: groupType\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.displayName field of the entity.\n  displayName: cn\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.email field of the entity.\n  email: <nothing, left out>\n  # The name of the attribute that shall be used for the value of\n  # the spec.profile.picture field of the entity.\n  picture: <nothing, left out>\n  # The name of the attribute that shall be used for the values of\n  # the spec.parent field of the entity.\n  memberOf: memberOf\n  # The name of the attribute that shall be used for the values of\n  # the spec.children field of the entity.\n  members: member\n"})}),"\n",(0,r.jsx)(t.h2,{id:"customize-the-provider",children:"Customize the Provider"}),"\n",(0,r.jsx)(t.p,{children:"In case you want to customize the ingested entities, the provider allows to pass\ntransformers for users and groups. Here we will show an example of overriding\nthe group transformer."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a transformer:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export async function myGroupTransformer(\n  vendor: LdapVendor,\n  config: GroupConfig,\n  group: SearchEntry,\n): Promise<GroupEntity | undefined> {\n  // Transformations may change namespace, change entity naming pattern, fill\n  // profile with more or other details...\n\n  // Create the group entity on your own, or wrap the default transformer\n  return await defaultGroupTransformer(vendor, config, group);\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Configure the provider with the transformer:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const ldapEntityProvider = LdapOrgEntityProvider.fromConfig(env.config, {\n  id: 'our-ldap-master',\n  target: 'ldaps://ds.example.net',\n  logger: env.logger,\n  groupTransformer: myGroupTransformer,\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"using-a-processor-instead-of-a-provider",children:"Using a Processor instead of a Provider"}),"\n",(0,r.jsx)(t.p,{children:"An alternative to using the Provider for ingesting LDAP entries is to use a\nProcessor. This is the old way that's based on registering locations with the\nproper type and target, triggering the processor to run."}),"\n",(0,r.jsx)(t.p,{children:"The drawback of this method is that it will leave orphaned Group/User entities\nwhenever they are deleted on your LDAP server, and you cannot control the\nfrequency with which they are refreshed, separately from other processors."}),"\n",(0,r.jsx)(t.h3,{id:"processor-installation",children:"Processor Installation"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"LdapOrgReaderProcessor"})," is not registered by default, so you have to\nregister it in the catalog plugin:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"builder.addProcessor(\n  LdapOrgReaderProcessor.fromConfig(env.config, {\n    logger: env.logger,\n  }),\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"driving-ldap-org-processor-ingestion-with-locations",children:"Driving LDAP Org Processor Ingestion with Locations"}),"\n",(0,r.jsxs)(t.p,{children:["Locations point out the specific org(s) you want to import. The ",(0,r.jsx)(t.code,{children:"type"})," of these\nlocations must be ",(0,r.jsx)(t.code,{children:"ldap-org"}),", and the ",(0,r.jsx)(t.code,{children:"target"})," must point to the exact URL\n(starting with ",(0,r.jsx)(t.code,{children:"ldap://"})," or ",(0,r.jsx)(t.code,{children:"ldaps://"}),") of the targeted LDAP server. You can\nhave several such location entries if you want, but typically you will have just\none."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: ldap-org\n      target: ldaps://ds.example.net\n      rules:\n        - allow: [User, Group]\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,d=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var x=b.prototype=new v;x.constructor=b,g(x,y.prototype),x.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!P.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];a.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return s=s(l=e),e=""===a?"."+L(l,0):a,j(s)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),D(s,t,o,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",j(e))for(var u=0;u<e.length;u++){var d=a+L(i=e[u],u);l+=D(i,t,o,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),u=0;!(i=e.next()).done;)l+=D(i=i.value,t,o,d=a+L(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function E(e,t,n){if(null==e)return e;var r=[],o=0;return D(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},O={transition:null},N={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!P.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:n,type:e.type,key:a,ref:s,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,n){return C.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,n){return C.current.useReducer(e,t,n)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(667294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);