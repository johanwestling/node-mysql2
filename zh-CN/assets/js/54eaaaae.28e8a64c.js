"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4442],{3045:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>h,toc:()=>p});var s=o(4848),r=o(8453),t=o(1470),l=o(9365),c=o(185),i=o(4443);const a={sidebar_position:2,tags:["createPool","URI","SHA1","RDS","SSL","Socks"]},d="createPool",h={id:"examples/connections/create-pool",title:"createPool",description:"For queries please see the Simple Queries and Prepared Statements examples.",source:"@site/docs/examples/connections/create-pool.mdx",sourceDirName:"examples/connections",slug:"/examples/connections/create-pool",permalink:"/node-mysql2/zh-CN/docs/examples/connections/create-pool",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/connections/create-pool.mdx",tags:[{label:"createPool",permalink:"/node-mysql2/zh-CN/docs/tags/create-pool"},{label:"URI",permalink:"/node-mysql2/zh-CN/docs/tags/uri"},{label:"SHA1",permalink:"/node-mysql2/zh-CN/docs/tags/sha-1"},{label:"RDS",permalink:"/node-mysql2/zh-CN/docs/tags/rds"},{label:"SSL",permalink:"/node-mysql2/zh-CN/docs/tags/ssl"},{label:"Socks",permalink:"/node-mysql2/zh-CN/docs/tags/socks"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["createPool","URI","SHA1","RDS","SSL","Socks"]},sidebar:"examples",previous:{title:"createConnection",permalink:"/node-mysql2/zh-CN/docs/examples/connections/create-connection"},next:{title:"createPoolCluster",permalink:"/node-mysql2/zh-CN/docs/examples/connections/createPoolCluster"}},u={},p=[{value:"createPool(connectionUri)",id:"createpoolconnectionuri",level:2},{value:"createPool(config)",id:"createpoolconfig",level:2},{value:"createPool(config) \u2014 SHA1",id:"createpoolconfig--sha1",level:2},{value:"createPool(config) \u2014 SSL",id:"createpoolconfig--ssl",level:2},{value:"createPool(config) \u2014 RDS SSL",id:"createpoolconfig--rds-ssl",level:2},{value:"createPool(config) \u2014 Socks",id:"createpoolconfig--socks",level:2},{value:"Glossary",id:"glossary",level:2},{value:"PoolOptions",id:"pooloptions",level:3}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"createpool",children:"createPool"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For queries please see the ",(0,s.jsx)(n.a,{href:"/docs/examples/queries/simple-queries",children:(0,s.jsx)(n.strong,{children:"Simple Queries"})})," and ",(0,s.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:(0,s.jsx)(n.strong,{children:"Prepared Statements"})})," examples."]})}),"\n",(0,s.jsx)(n.h2,{id:"createpoolconnectionuri",children:"createPool(connectionUri)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"createPool(connectionUri: string)"})}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(l.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const pool = mysql.createPool('mysql://root:password@localhost:3306/test');\n  const connection = await pool.getConnection();\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(l.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst pool = mysql.createPool('mysql://root:password@localhost:3306/test');\n\npool.getConnection(function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pool.releaseConnection(connection)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"createpoolconfig",children:"createPool(config)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["createPool(config: ",(0,s.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(l.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const pool = mysql.createPool({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n    // port: 3306,\n    // password: '',\n  });\n  const connection = await pool.getConnection();\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(l.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  // port: 3306,\n  // password: '',\n});\n\npool.getConnection(function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pool.releaseConnection(connection)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"createpoolconfig--sha1",children:"createPool(config) \u2014 SHA1"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["createPool(config: ",(0,s.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(l.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const pool = mysql.createPool({\n    // ...\n    passwordSha1: Buffer.from(\n      '8bb6118f8fd6935ad0876a3be34a717d32708ffd',\n      'hex'\n    ),\n  });\n  const connection = await pool.getConnection();\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(l.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst pool = mysql.createPool({\n  // ...\n  passwordSha1: Buffer.from('8bb6118f8fd6935ad0876a3be34a717d32708ffd', 'hex'),\n});\n\npool.getConnection(function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pool.releaseConnection(connection)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"createpoolconfig--ssl",children:"createPool(config) \u2014 SSL"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["createPool(config: ",(0,s.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(l.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const pool = mysql.createPool({\n    // ...\n    ssl: {\n      // key: fs.readFileSync('./certs/client-key.pem'),\n      // cert: fs.readFileSync('./certs/client-cert.pem')\n      ca: fs.readFileSync('./certs/ca-cert.pem'),\n    },\n  });\n  const connection = await pool.getConnection();\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(l.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst pool = mysql.createPool({\n  // ...\n  ssl: {\n    // key: fs.readFileSync('./certs/client-key.pem'),\n    // cert: fs.readFileSync('./certs/client-cert.pem')\n    ca: fs.readFileSync('./certs/ca-cert.pem'),\n  },\n});\n\npool.getConnection(function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})}),(0,s.jsxs)(l.A,{value:"certs/ca-cert.pem",children:[(0,s.jsx)(i.S,{language:"plan",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/test/fixtures/ssl/certs/ca.pem"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["See ",(0,s.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/tree/master/test/fixtures/ssl/certs",children:"ssl/certs"}),"."]}),"\n"]})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pool.releaseConnection(connection)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"createpoolconfig--rds-ssl",children:"createPool(config) \u2014 RDS SSL"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["createPool(config: ",(0,s.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.strong,{children:"Amazon RDS"})," string as value to ssl property to connect to ",(0,s.jsx)(n.strong,{children:"Amazon RDS"})," MySQL over SSL."]}),"\n",(0,s.jsxs)(n.p,{children:["In that case ",(0,s.jsx)(n.a,{href:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem",children:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem"})," CA cert is used:"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(l.A,{value:"promise.js",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const pool = mysql.createPool({\n    // ...\n    host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n    ssl: 'Amazon RDS',\n  });\n  const connection = await pool.getConnection();\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})}),(0,s.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const [res] = await connection.query('SHOW `status` LIKE \"Ssl_cipher\"');\n  await pool.end();\n\n  console.log(res);\n} catch (err) {\n  console.log(err);\n}\n"})})})]}),(0,s.jsxs)(l.A,{value:"callback.js",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst pool = mysql.createPool({\n  // ...\n  host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n  ssl: 'Amazon RDS',\n});\n\npool.getConnection(function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})}),(0,s.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"connectionquery('SHOW `status` LIKE \"Ssl_cipher\"', function (err, res) {\n  pool.end();\n\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(res);\n});\n"})})})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pool.releaseConnection(connection)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"createpoolconfig--socks",children:"createPool(config) \u2014 Socks"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["createPool(config: ",(0,s.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(l.A,{value:"A.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst SocksConnection = require('socksjs');\n\nconst socksProxy = new SocksConnection({ port: 3306 });\n// highlight-start\nconst pool = mysql.createPool({\n  stream: socksProxy,\n});\n// highlight-end\n"})})}),(0,s.jsx)(l.A,{value:"B.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst SocksConnection = require('socksjs');\n\n// highlight-start\nconst pool = mysql.createPool({\n  debug: 1,\n  stream: function () {\n    return new SocksConnection({ port: 3306 });\n  },\n});\n// highlight-end\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"pool.execute('SELECT SLEEP(1.1) AS `www`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n\npool.execute('SELECT SLEEP(1) AS `qqq`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n\npool.execute('SELECT SLEEP(1) AS `qqq`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n"})})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.h3,{id:"pooloptions",children:"PoolOptions"}),"\n",(0,s.jsxs)("blockquote",{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PoolOptions"})," extends all options from ",(0,s.jsx)(n.strong,{children:"ConnectionOptions"}),":"]}),(0,s.jsx)(c.T,{title:"ConnectionOptions Specification",children:(0,s.jsx)(i.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/Connection.d.ts",extractMethod:"ConnectionOptions",methodType:"interface"})})]}),"\n",(0,s.jsx)(c.T,{title:"PoolOptions Specification",children:(0,s.jsx)(i.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/Pool.d.ts",extractMethod:"PoolOptions",methodType:"interface"})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9365:(e,n,o)=>{o.d(n,{A:()=>l});o(6540);var s=o(4164);const r={tabItem:"tabItem_Ymn6"};var t=o(4848);function l(e){let{children:n,hidden:o,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:o,children:n})}},1470:(e,n,o)=>{o.d(n,{A:()=>S});var s=o(6540),r=o(4164),t=o(3104),l=o(6347),c=o(205),i=o(7485),a=o(1682),d=o(9466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:o}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:o,attributes:s,default:r}}=e;return{value:n,label:o,attributes:s,default:r}}))}(o);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:o}=e;const r=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,i.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function g(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,t=u(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=o.find((e=>e.default))??o[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[a,h]=m({queryString:o,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Dv)(o);return[r,(0,s.useCallback)((e=>{o&&t.set(e)}),[o,t])]}({groupId:r}),j=(()=>{const e=a??g;return p({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),x(e)}),[h,x,t]),tabValues:t}}var x=o(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=o(4848);function y(e){let{className:n,block:o,selectedValue:s,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,t.a_)(),d=e=>{const n=e.currentTarget,o=i.indexOf(n),r=c[o].value;r!==s&&(a(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;n=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;n=i[o]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},n),children:c.map((e=>{let{value:n,label:o,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:h,onClick:d,...t,className:(0,r.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":s===n}),children:o??n},n)}))})}function b(e){let{lazy:n,children:o,selectedValue:r}=e;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function q(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function S(e){const n=(0,x.A)();return(0,f.jsx)(q,{...e,children:h(e.children)},String(n))}},4443:(e,n,o)=>{o.d(n,{S:()=>i});var s=o(6540),r=o(4586),t=o(1432),l=o(4848);const c=()=>(0,l.jsx)("span",{className:"loader"}),i=e=>{let{url:n,language:o,extractMethod:i,methodType:a}=e;const[d,h]=(0,s.useState)(""),[u,p]=(0,s.useState)(!0),[m,g]=(0,s.useState)(!0),{siteConfig:x}=(0,r.A)(),j=x.baseUrl.replace(/\/$/,""),f=/^\//.test(n)?`${j}${n}`:n;return(0,s.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(f,{signal:n}).then((e=>e.text())).then((e=>{const n=i&&a?((e,n,o)=>{const s=e.split("\n"),r=`${o} ${n}`;let t=!1,l=0,c="";for(const i of s)if(i.includes(r)&&(t=!0),t&&(i.includes("{")&&l++,c+=i+"\n",i.includes("}")&&(l--,0===l)))break;return c.trim()||e})(e,i,a):e;h(n||e),p(!1),g(!1)})).catch((()=>{g(!0),p(!1)})),()=>{e.abort()}}),[f,i,a]),(0,l.jsx)(l.Fragment,{children:u?(0,l.jsx)(c,{}):(0,l.jsx)(l.Fragment,{children:m?(0,l.jsxs)("div",{children:["Unable to access the requested link: ",(0,l.jsx)("code",{children:f}),". Please verify the link or try again later."]}):(0,l.jsx)(t.A,{className:`language-${o}`,children:d})})})}},185:(e,n,o)=>{o.d(n,{T:()=>t});var s=o(1622),r=o(4848);const t=e=>{let{children:n,open:o,title:t}=e;return(0,r.jsx)(s.A,{open:o,className:"faq",summary:(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:t})}),children:(0,r.jsx)("section",{children:n})})}}}]);