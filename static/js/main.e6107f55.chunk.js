(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[7],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(24),r=function(e){return{type:a.a,payload:e}}},141:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(24),r=function(e){return{type:a.g,payload:e}},o=function(){return{type:a.c}}},156:function(e,t,n){e.exports=n.p+"static/media/Yantraksh Logo.87d0dc2b.png"},193:function(e,t,n){e.exports=n(280)},198:function(e,t,n){},199:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var a="SIGN_UP_START",r="SIGN_UP_FAILURE",o="SIGN_UP_SUCCESS",c="USER_AUTHENTICATED",l="SIGN_OUT_USER",u="FETCH_PRODUCTS",i="CHANGE_PAGE"},279:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=(n(198),n(199),n(187),n(42)),u=n(151),i=n(46),s=n.n(i),m=n(73),p=n(87),d={get:function(){var e=Object(m.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.reactLocalStorage.getObject(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),set:function(){var e=Object(m.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.reactLocalStorage.setObject(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),delete:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.reactLocalStorage.remove(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};window.storage=d;var f=n(30),b=n(152),h=n(105),y=n(153),g=n.n(y),E=n(37),O=n(24),v={loading:!1,userMeta:{type:"public"},error:""},j={products:[]},C={currentPage:1},P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,k={key:"root",storage:g.a},S=Object(f.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=function(t){return Object(E.a)(Object(E.a)({},e),t)};switch(t.type){case O.e:return n({loading:!0});case O.d:return n({loading:!1,userMeta:null,error:t.payload});case O.f:return n({loading:!1,error:"",userMeta:t.payload});case O.g:return n({loading:!1,userMeta:t.payload,error:""});case O.c:return v;default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.b:return console.log("reducer"),Object(E.a)(Object(E.a)({},e),{},{products:t.payload});default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a:return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.payload});default:return e}}}),w=Object(h.a)(k,S),z=Object(f.e)(w,P(Object(f.a)(b.a))),N=Object(h.b)(z),R=n(281),_=function(){return r.a.createElement("div",{className:"column h-100 w-100 align-center justify-center"},r.a.createElement("div",{className:"m-2"},r.a.createElement(R.a,{style:{fontSize:30}})),r.a.createElement("p",null,"Loading..."))},M=n(35),I=[{Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(25)]).then(n.bind(null,612))})),path:"/"},{Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,600))})),path:"./sign-up/client/"},{Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(23)]).then(n.bind(null,601))})),path:"./sign-up/employee/"},{path:"*",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))}],x=[{path:"/edit-profile/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(19)]).then(n.bind(null,602))}))},{path:"*",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))}],T=[{path:"/docket/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(24),n.e(6),n.e(26)]).then(n.bind(null,603))}))}],L=[{path:"/edit-profile/",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))},{path:"*",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))},{path:"/create-allotment/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,613))}))}],U=[{name:"Dashboard",icon:["fas","home"],path:"/dashboard/",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))},{name:"Masters",icon:["fas","layer-group"],path:"/masters/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(5)]).then(n.bind(null,607))})),isSubMenu:!0,subMenu:[{name:"Products",path:"/master/products/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(5)]).then(n.bind(null,607))}))},{name:"Kits",path:"/master/kits/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,604))}))},{name:"Flows",path:"/master/flows/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,605))}))},{name:"Sender Clients",path:"/master/clients/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,614))}))},{name:"Receiver Clients",path:"/master/receiver-clients/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,610))}))},{name:"Warehouses",path:"/master/warehouses/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,611))}))},{name:"Vendors",path:"/master/vendors/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,608))}))}]},{name:"Material Requests",icon:["fas","layer-group"],path:"/material-request/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(20)]).then(n.bind(null,615))}))},{name:"Allotment Dockets",icon:["fas","layer-group"],path:"/allotment-dockets/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(21)]).then(n.bind(null,616))}))},{name:"GRN",icon:["fas","layer-group"],path:"/grn/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,606))}))},{name:"PFEP",icon:["fas","layer-group"],path:"/pfep/",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))}],F=[{name:"Inventory",icon:["fas","layer-group"],path:"/inventory/",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))},{name:"Material Requests",icon:["fas","layer-group"],path:"/material-request/",Component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,609))}))},{name:"Client Inventory",icon:["fas","layer-group"],path:"/client-inventory/",Component:Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,85))}))}],A=(n(169),n(91)),D=(n(171),n(112)),G=(n(214),n(164)),H=n(90),q=(n(170),n(114)),K=(n(219),n(45)),Y=(n(221),n(39)),J=n(141),V=n(118),W=n(156),X=n.n(W),B=n(104),Q=Y.a.SubMenu,Z=K.a.Header,$=K.a.Content,ee=K.a.Sider,te=K.a.Footer,ne=q.a.Text,ae=Object(l.b)((function(e){return{user:e.user.userMeta}}),{changePage:V.a})((function(e){var t=e.routes,n=e.navigate,o=e.children,c=e.user,u=e.changePage,i=Object(a.useState)(!1),s=Object(H.a)(i,2),m=s[0],p=s[1],d=Object(a.useState)(80),f=Object(H.a)(d,2),b=f[0],h=f[1],y=Object(l.c)(),g=r.a.createElement(Y.a,null,r.a.createElement(Y.a.Item,{key:"0"},r.a.createElement(M.a,{to:"/".concat(c.type,"/edit-profile/")},"Edit Profile")),r.a.createElement(Y.a.Divider,null),r.a.createElement(Y.a.Item,{key:"1",onClick:function(){return y(Object(J.a)()),void n("../")}},r.a.createElement(ne,{type:"danger"},"Log Out")));return r.a.createElement(K.a,{className:""},r.a.createElement(Z,{className:"header row align-center justify-between",style:{backgroundColor:"#fff",paddingLeft:20,paddingRight:20}},r.a.createElement("div",{className:"bg-white m-0 row align-center"},r.a.createElement("img",{style:{height:"33px",width:"135px",position:"absolute"},alt:"Yantraksh",src:X.a})),r.a.createElement(D.a,{overlay:g,trigger:["click"]},r.a.createElement("div",{className:"row align-center"},r.a.createElement("p",{className:"m-2"},c.name),r.a.createElement(G.a,{size:"large",src:c.dp})))),r.a.createElement(A.a,{style:{margin:0,padding:0}}),r.a.createElement(K.a,null,r.a.createElement(ee,{collapsible:!0,width:200,collapsedWidth:b,onCollapse:function(){h(80),p(!m)},className:"site-layout-background"},r.a.createElement(Y.a,{theme:"dark",mode:"inline",inlineCollapsed:!0,defaultSelectedKeys:[t[0].name],defaultOpenKeys:[t[0].name],style:{height:"100%",borderRight:0}},t.map((function(e){return e.subMenu?r.a.createElement(Q,{key:e.name,icon:r.a.createElement(B.a,{icon:e.icon,style:{marginRight:m?50:5}}),title:e.name},e.subMenu.map((function(e){return r.a.createElement(Y.a.Item,{key:e.name},r.a.createElement(M.a,{to:"/".concat(c.type).concat(e.path),key:e.name,onClick:function(){return u(1)}},e.name))}))):r.a.createElement(Y.a.Item,{key:e.name,icon:r.a.createElement(B.a,{icon:e.icon,style:{marginRight:m?50:5}})},r.a.createElement(M.a,{to:"/".concat(c.type).concat(e.path),key:e.name,onClick:function(){return u(1)}},e.name))})))),r.a.createElement(K.a,{style:{padding:"24px"}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(_,null)},r.a.createElement($,{className:"site-layout-background content-style",style:{minHeight:"calc( 100vh - 184px )"}},o)),r.a.createElement(te,{className:"row justify-end "},r.a.createElement("span",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yantraksh.com"},"Yantraksh Logistics Pvt. Ltd")," ","\xa9 All rights reserved")))),r.a.createElement(A.a,{style:{margin:0,padding:0}}))})),re=function(e){var t=e.navigate,n=e.user;return Object(a.useEffect)((function(){t("/".concat(n.type,"/dashboard/"))}),[n.type,t]),null},oe=n(85),ce=function(e){var t=e.routes,n=e.extraRoutes,a=e.user,o=e.outerRoutes;return r.a.createElement(M.b,null,r.a.createElement(re,{path:"/",user:a}),o?o.map((function(e,t){return r.a.createElement(e.Component,{path:"/".concat(a.type).concat(e.path),key:t.toString()})})):null,r.a.createElement(ae,{path:"/".concat(a.type,"/"),routes:t},t.map((function(e,t){return r.a.createElement(e.Component,{path:"".concat(e.path),key:t.toString()})})),t.map((function(e){return e.subMenu?e.subMenu.map((function(e,t){return r.a.createElement(e.Component,{path:"".concat(e.path),key:t.toString()})})):null})),n?n.map((function(e,t){return r.a.createElement(e.Component,{path:"".concat(e.path),key:t.toString()})})):null,r.a.createElement(oe.NotFound404Screen,{default:!0})))},le=Object(l.b)((function(e){return{user:e.user.userMeta}}))((function(e){var t=e.user;if(t)switch(t.type){case"public":return r.a.createElement(M.b,null,I.map((function(e,t){return r.a.createElement(e.Component,{path:e.path,key:t.toString()})})),r.a.createElement(oe.NotFound404Screen,{default:!0}));case"employee":return r.a.createElement(ce,{routes:U,extraRoutes:L,outerRoutes:T,user:t});case"client":return r.a.createElement(ce,{routes:F,extraRoutes:x,user:t});default:return null}}));var ue=function(){return r.a.createElement(l.a,{store:z},r.a.createElement(u.a,{persistor:N},r.a.createElement(a.Suspense,{fallback:r.a.createElement(_,null)},r.a.createElement(le,null))))},ie=n(71),se=n(165),me=n(166),pe=n(167);ie.b.add(se.a,me.a,pe.a),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root"))},85:function(e,t,n){"use strict";n.r(t),n.d(t,"NotFound404Screen",(function(){return l}));n(89);var a=n(51),r=n(0),o=n.n(r),c=(n(279),n(35)),l=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"image",style:{backgroundImage:"url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",height:"400px",backgroundPosition:"center"}}),o.a.createElement("div",{className:"content"},o.a.createElement("h1",null,"404"),o.a.createElement("h2",null,"Page Not Found"),o.a.createElement(a.a,{onClick:function(){return Object(c.c)("/")}},"Return To Home")))};t.default=l}},[[193,8,9]]]);
//# sourceMappingURL=main.e6107f55.chunk.js.map