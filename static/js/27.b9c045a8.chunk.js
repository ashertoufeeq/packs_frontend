(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[27],{284:function(e,t,r){"use strict";r.d(t,"N",(function(){return a})),r.d(t,"O",(function(){return c})),r.d(t,"f",(function(){return u})),r.d(t,"d",(function(){return o})),r.d(t,"W",(function(){return i})),r.d(t,"k",(function(){return s})),r.d(t,"gb",(function(){return d})),r.d(t,"H",(function(){return m})),r.d(t,"fb",(function(){return l})),r.d(t,"v",(function(){return f})),r.d(t,"i",(function(){return b})),r.d(t,"F",(function(){return p})),r.d(t,"cb",(function(){return h})),r.d(t,"bb",(function(){return _})),r.d(t,"t",(function(){return v})),r.d(t,"o",(function(){return O})),r.d(t,"L",(function(){return E})),r.d(t,"y",(function(){return y})),r.d(t,"mb",(function(){return j})),r.d(t,"nb",(function(){return w})),r.d(t,"p",(function(){return g})),r.d(t,"M",(function(){return T})),r.d(t,"z",(function(){return k})),r.d(t,"ob",(function(){return x})),r.d(t,"pb",(function(){return P})),r.d(t,"B",(function(){return S})),r.d(t,"V",(function(){return C})),r.d(t,"m",(function(){return G})),r.d(t,"J",(function(){return q})),r.d(t,"w",(function(){return A})),r.d(t,"jb",(function(){return D})),r.d(t,"P",(function(){return H})),r.d(t,"g",(function(){return M})),r.d(t,"D",(function(){return I})),r.d(t,"Q",(function(){return L})),r.d(t,"R",(function(){return N})),r.d(t,"r",(function(){return F})),r.d(t,"j",(function(){return R})),r.d(t,"G",(function(){return z})),r.d(t,"db",(function(){return J})),r.d(t,"eb",(function(){return K})),r.d(t,"u",(function(){return U})),r.d(t,"Y",(function(){return Y})),r.d(t,"c",(function(){return B})),r.d(t,"A",(function(){return V})),r.d(t,"T",(function(){return W})),r.d(t,"q",(function(){return Q})),r.d(t,"h",(function(){return X})),r.d(t,"E",(function(){return Z})),r.d(t,"Z",(function(){return $})),r.d(t,"s",(function(){return ee})),r.d(t,"e",(function(){return te})),r.d(t,"C",(function(){return re})),r.d(t,"X",(function(){return ne})),r.d(t,"n",(function(){return ae})),r.d(t,"K",(function(){return ce})),r.d(t,"kb",(function(){return ue})),r.d(t,"lb",(function(){return oe})),r.d(t,"x",(function(){return ie})),r.d(t,"hb",(function(){return se})),r.d(t,"l",(function(){return de})),r.d(t,"I",(function(){return me})),r.d(t,"ib",(function(){return le})),r.d(t,"a",(function(){return fe})),r.d(t,"b",(function(){return be})),r.d(t,"ab",(function(){return pe})),r.d(t,"S",(function(){return he})),r.d(t,"U",(function(){return _e}));var n=r(285),a=function(e){var t=e.username,r=e.password;return Object(n.a)("/api/token/",{method:"POST",data:{username:t,password:r},secure:!1})},c=function(){return Object(n.a)("/user/meta/")},u=function(e){var t=e.username,r=e.email,a=e.password,c=e.first_name,u=e.last_name;return Object(n.a)("/create-employee/",{method:"POST",data:{username:t,email:r,password:a,first_name:c,last_name:u},secure:!1})},o=function(e){var t=e.username,r=e.email,a=e.password,c=e.first_name,u=e.last_name;return Object(n.a)("/create-client/",{method:"POST",data:{username:t,email:r,password:a,first_name:c,last_name:u},secure:!1})},i=function(){return Object(n.a)("/clients/",{method:"GET",secure:!0})},s=function(e){return Object(n.a)("/create-product/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},d=function(){return Object(n.a)("/products/",{method:"GET",secure:!0})},m=function(e,t){return console.log(document),Object(n.a)("/edit-product/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},l=function(e){return Object(n.a)("/edit-product/".concat(e),{method:"GET",secure:!0})},f=function(e){return Object(n.a)("/edit-product/".concat(e),{method:"DELETE",secure:!0})},b=function(e){var t=e.kit_name,r=e.kit_info,a=e.components_per_kit,c=e.kit_client,u=e.products;return Object(n.a)("/create-kit/",{method:"POST",secure:!0,data:{kit_name:t,kit_info:r,components_per_kit:a,kit_client:c,products:u}})},p=function(e,t){var r=t.kit_name,a=t.kit_info,c=t.components_per_kit,u=t.kit_client,o=t.products;return Object(n.a)("/edit-kit/".concat(e,"/"),{method:"PATCH",secure:!0,data:{kit_name:r,kit_info:a,components_per_kit:c,kit_client:u,products:o}})},h=function(){return Object(n.a)("/kits/",{method:"GET",secure:!0})},_=function(e){return Object(n.a)("/edit-kit/".concat(e,"/"),{method:"GET",secure:!0})},v=function(e){return Object(n.a)("/edit-kit/".concat(e),{method:"DELETE",secure:!0})},O=function(e){var t=e.name,r=e.street,a=e.city,c=e.pincode,u=e.state,o=e.contact_person_name,i=e.contact_person_no,s=e.email,d=e.type,m=e.payment_terms,l=e.pan,f=e.gst,b=e.code,p=e.remarks,h=e.beneficiary_name,_=e.account_no,v=e.bank_name,O=e.ifsc;return Object(n.a)("/create-vendor/",{method:"POST",data:{name:t,street:r,city:a,pincode:c,state:u,contact_person_name:o,contact_person_no:i,email:s,type:d,payment_terms:m,pan:l,gst:f,code:b,remarks:p,beneficiary_name:h,account_no:_,bank_name:v,ifsc:O},secure:!0})},E=function(e,t){var r=t.name,a=t.street,c=t.city,u=t.pincode,o=t.state,i=t.contact_person_name,s=t.contact_person_no,d=t.email,m=t.type,l=t.payment_terms,f=t.pan,b=t.gst,p=t.code,h=t.remarks,_=t.beneficiary_name,v=t.account_no,O=t.bank_name,E=t.ifsc;return Object(n.a)("/edit-vendor/".concat(e,"/"),{method:"PATCH",data:{name:r,street:a,city:c,pincode:u,state:o,contact_person_name:i,contact_person_no:s,email:d,type:m,payment_terms:l,pan:f,gst:b,code:p,remarks:h,beneficiary_name:_,account_no:v,bank_name:O,ifsc:E},secure:!0})},y=function(e){return Object(n.a)("/edit-vendor/".concat(e,"/"),{method:"DELETE",secure:!0})},j=function(e){return Object(n.a)("/edit-vendor/".concat(e,"/"),{method:"GET",secure:!0})},w=function(){return Object(n.a)("/vendors/",{method:"GET",secure:!0})},g=function(e){return Object(n.a)("/create-warehouse/",{method:"POST",secure:!0,data:e,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},T=function(e,t){return Object(n.a)("/edit-warehouse/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},k=function(e){return Object(n.a)("/edit-warehouse/".concat(e,"/"),{method:"DELETE",secure:!0})},x=function(e){return Object(n.a)("/edit-warehouse/".concat(e,"/"),{method:"GET",secure:!0})},P=function(){return Object(n.a)("/warehouse/",{method:"GET",secure:!0})},S=function(e,t){return Object(n.a)("/client-profile/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},C=function(e){return Object(n.a)("/client-profile/".concat(e),{method:"GET",secure:!0})},G=function(e){var t=e.name,r=e.city,a=e.address,c=e.emitter,u=e.pan,o=e.gst;return Object(n.a)("/create-receiverclient/",{method:"POST",data:{name:t,city:r,address:a,emitter:c,pan:u,gst:o},secure:!0})},q=function(e,t){var r=t.name,a=t.city,c=t.address,u=t.emitter,o=t.pan,i=t.gst;return Object(n.a)("/edit-receiverclient/".concat(e,"/"),{method:"PATCH",data:{name:r,city:a,address:c,emitter:u,pan:o,gst:i},secure:!0})},A=function(e){return Object(n.a)("/edit-receiverclient/".concat(e,"/"),{method:"DELETE",secure:!0})},D=function(e){return Object(n.a)("/edit-receiverclient/".concat(e,"/"),{method:"GET",secure:!0})},H=function(e){return Object(n.a)("/receiverclients/",{method:"GET",secure:!0})},M=function(e){var t=e.flow_name,r=e.flow_info,a=e.flow_type,c=e.flow_days,u=e.sender_client,o=e.receiver_client,i=e.kits;return Object(n.a)("/create-flow/",{method:"POST",secure:!0,data:{flow_name:t,flow_info:r,flow_type:a,flow_days:c,sender_client:u,receiver_client:o,kits:i}})},I=function(e,t){var r=t.flow_name,a=t.flow_info,c=t.flow_type,u=t.flow_days,o=t.sender_client,i=t.receiver_client,s=t.kits;return Object(n.a)("/edit-flow/".concat(e,"/"),{method:"PATCH",secure:!0,data:{flow_name:r,flow_info:a,flow_type:c,flow_days:u,sender_client:o,receiver_client:i,kits:s}})},L=function(e){return Object(n.a)("/edit-flow/".concat(e,"/"),{method:"GET",secure:!0})},N=function(e){return Object(n.a)("/flows/",{method:"GET",secure:!0})},F=function(e){return Object(n.a)("/edit-flow/".concat(e,"/"),{method:"DELETE",secure:!0})},R=function(e){var t=e.delivery_required_on,r=e.flows;return Object(n.a)("/create-mrequets/",{method:"POST",data:{delivery_required_on:t,flows:r},secure:!0})},z=function(e,t){var r=t.delivery_required_on,a=t.flows;return Object(n.a)("/edit-mrequets/".concat(e,"/"),{method:"PATCH",data:{delivery_required_on:r,flows:a},secure:!0})},J=function(e){return Object(n.a)("/edit-mrequets/".concat(e,"/"),{method:"GET",secure:!0})},K=function(){return Object(n.a)("/mrequets/",{method:"GET",secure:!0})},U=function(e){return Object(n.a)("/edit-mrequets/".concat(e,"/"),{method:"DELETE",secure:!0})},Y=function(){return Object(n.a)("/allmrequest/",{method:"GET",secure:!0})},B=function(e){var t=e.transaction_no,r=e.dispatch_date,a=e.send_from_warehouse,c=e.sales_order,u=e.flows,o=e.is_delivered,i=e.model,s=e.driver_name,d=e.driver_number,m=e.lr_number,l=e.vehicle_number,f=e.freight_charges,b=e.vehicle_type,p=e.transport_by,h=e.expected_delivery,_=e.remarks;return Object(n.a)("/create-allotment/",{method:"POST",data:{transaction_no:t,dispatch_date:r,send_from_warehouse:a,sales_order:c,flows:u,is_delivered:o,model:i,driver_name:s,driver_number:d,lr_number:m,vehicle_number:l,freight_charges:f,vehicle_type:b,transport_by:p,expected_delivery:h,remarks:_},secure:"true"})},V=function(e,t){var r=t.dispatch_date,a=t.send_from_warehouse,c=t.sales_order,u=t.flows,o=t.model,i=t.driver_name,s=t.driver_number,d=t.lr_number,m=t.vehicle_number,l=t.freight_charges,f=t.vehicle_type,b=t.transport_by,p=t.expected_delivery,h=t.remarks;return Object(n.a)("/edit-allotment/".concat(e,"/"),{method:"PATCH",data:{dispatch_date:r,send_from_warehouse:a,sales_order:c,flows:u,model:o,driver_name:i,driver_number:s,lr_number:d,vehicle_number:m,freight_charges:l,vehicle_type:f,transport_by:b,expected_delivery:p,remarks:h},secure:!0})},W=function(){return Object(n.a)("/allotments/",{method:"GET",secure:!0})},Q=function(e){return Object(n.a)("/edit-allotment/".concat(e,"/"),{methood:"DELETE",secure:!0})},X=function(e){return Object(n.a)("/create-grn/",{method:"POST",secure:!0,data:e})},Z=function(e,t){return Object(n.a)("/edit-grn/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},$=function(e){return Object(n.a)("/edit-grn/".concat(e,"/"),{method:"GET",secure:!0})},ee=function(e){return Object(n.a)("/edit-grn/".concat(e,"/"),{method:"DELETE",secure:!0})},te=function(e){return Object(n.a)("/create-delivered/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},re=function(e,t){return Object(n.a)("/edit-delivered/".concat(e,"/"),{method:"PATCH",data:t,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},ne=function(e){return Object(n.a)("/edit-delivered/".concat(e,"/"),{method:"GET",secure:!0})},ae=function(e){return Object(n.a)("/create-return/",{method:"POST",data:e,secure:"true"})},ce=function(e,t){var r=t.transaction_no,a=t.transaction_date,c=t.transaction_type,u=t.flow,o=t.kits,i=t.driver_name,s=t.driver_number,d=t.lr_number,m=t.vehicle_number,l=t.freight_charges,f=t.vehicle_type,b=t.transport_by,p=t.warehouse,h=t.receiver_client,_=t.remarks;return Object(n.a)("/edit-return/".concat(e,"/"),{method:"PATCH",data:{transaction_no:r,transaction_date:a,transaction_type:c,flow:u,kits:o,driver_name:i,driver_number:s,lr_number:d,vehicle_number:m,freight_charges:l,vehicle_type:f,transport_by:b,warehouse:p,receiver_client:h,remarks:_},secure:"true"})},ue=function(e){return Object(n.a)("/edit-return/".concat(e,"/"),{method:"GET",secure:!0})},oe=function(){return Object(n.a)("/return-table/",{method:"GET",secure:!0})},ie=function(e){return Object(n.a)("/edit-return/".concat(e,"/"),{method:"DELETE",secure:!0})},se=function(){return Object(n.a)("/r-flows/",{method:"GET",secure:!0})},de=function(e){var t=e.returndocket,r=e.delivered,a=e.items;e.document;return Object(n.a)("/create-received/",{method:"POST",data:{returndocket:t,delivered:r,items:a},secure:!0})},me=function(e,t){var r=t.returndocket,a=t.delivered,c=t.items;return Object(n.a)("/edit-received/".concat(e,"/"),{method:"PATCH",data:{returndocket:r,delivered:a,items:c},secure:!0})},le=function(e){return Object(n.a)("/edit-received/".concat(e,"/"),{method:"GET",secure:!0})},fe=function(){return Object(n.a)("/delivered/",{})},be=function(){return Object(n.a)("/received/",{})},pe=function(e){return Object(n.a)("/grn-barcodes/".concat(e,"/"),{method:"GET",secure:!0})},he=function(e){var t=e.cname,r=e.to,a=e.from;return Object(n.a)("/allotment-reports/",{method:"GET",secure:!0,params:{cname:t,to:r,from:a}})},_e=function(){return Object(n.a)("/allotments-delivered/",{method:"GET",secure:!0})}},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(37),a=r(315),c=r(46),u=r.n(c),o=r(73),i=r(395),s=r(396),d=r.n(s),m=r(296),l=r(299),f=r(300);d.a.defaults.baseURL=l.a;var b=function(){var e=Object(o.a)(u.a.mark((function e(){var t,r,n,a,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.a)(),e.next=3,t.get(m.a,null);case 3:return r=e.sent,e.next=6,t.get(m.b,null);case 6:if(n=e.sent,r&&n){e.next=9;break}throw Error("No user found");case 9:if(a=i(r),!(new Date(1e3*parseInt(a.exp,10))>new Date)){e.next=12;break}return e.abrupt("return",r);case 12:return e.next=14,d.a.post("/api/token/refresh/",{refresh:n});case 14:return c=e.sent,o=c.data.access,e.next=18,t.set(m.a,o);case 18:return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(u.a.mark((function e(t){var r,c,o,i,s,m,l,f,p,h,_,v,O,E,y,j,w=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=w.length>1&&void 0!==w[1]?w[1]:{},c=r.onSuccess,o=void 0===c?function(e){return e}:c,i=r.onFailure,s=void 0===i?function(e){return e}:i,m=r.secure,l=void 0===m||m,r.defaultData,f=r.headers,p=Object(a.a)(r,["onSuccess","onFailure","secure","defaultData","headers"]),e.prev=2,e.t0=d.a,e.t1=t,e.t2=n.a,e.t3=n.a,e.t4=n.a,e.t5={},!l){e.next=18;break}return e.t7="Bearer ",e.next=13,b();case 13:e.t8=e.sent,e.t9=e.t7.concat.call(e.t7,e.t8),e.t6={Authorization:e.t9},e.next=19;break;case 18:e.t6={};case 19:return e.t10=e.t6,e.t11=(0,e.t4)(e.t5,e.t10),e.t12=f,e.t13=(0,e.t3)(e.t11,e.t12),e.t14={headers:e.t13},e.t15=p,e.t16=(0,e.t2)(e.t14,e.t15),e.next=28,(0,e.t0)(e.t1,e.t16);case 28:return h=e.sent,_=h.data,v=h.status,e.next=32,o(_);case 32:return console.log(_),e.abrupt("return",{data:_,status:v,error:void 0,loading:!1});case 36:if(e.prev=36,e.t17=e.catch(2),!e.t17.response){e.next=43;break}return O=e.t17.response,E=O.data,y=O.status,e.next=42,s(E);case 42:return e.abrupt("return",{data:void 0,status:y,error:E,loading:!1});case 43:if(!e.t17.request){e.next=46;break}return j={message:"error in request setup"},e.abrupt("return",{data:void 0,status:0,error:j,loading:!1});case 46:throw Error(e.t17);case 47:case"end":return e.stop()}}),e,null,[[2,36]])})));return function(t){return e.apply(this,arguments)}}()},296:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n="ACCESS_TOKEN",a="REFRESH_TOKEN"},299:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="http://packsdev.ap-south-1.elasticbeanstalk.com"},300:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return n}));var n=function(){return window?window.storage:e.storage}}).call(this,r(47))},304:function(e,t,r){"use strict";r(36),r(317)},317:function(e,t,r){},503:function(e,t,r){},609:function(e,t,r){},634:function(e,t,r){"use strict";r.r(t);r(294);var n=r(297),a=(r(89),r(51)),c=(r(295),r(298)),u=r(0),o=r.n(u),i=(r(187),r(34)),s=(r(313),r(291)),d=(r(169),r(316)),m=r(46),l=r.n(m),f=(r(304),r(114)),b=r(73),p=(r(286),r(287)),h=r(90),_=r(296),v=r(284),O=r(141),E=r(300),y=function(){var e=Object(b.a)(l.a.mark((function e(t){var r,n,a,c,u,o,i,s,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(E.a)(),e.next=3,r.get(_.a,null);case 3:if(e.sent){e.next=5;break}return e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,Object(v.O)();case 8:if(n=e.sent,!(a=n.data)){e.next=14;break}return c=a.category,u=a.name,o=a.email,i=a.username,s=a.id,d=a.dp,t(Object(O.b)({name:u,type:c,email:o,username:i,id:s,dp:d})),e.abrupt("return",!1);case 14:return e.next=16,r.delete(_.a);case 16:return e.next=18,r.delete(_.b);case 18:e.next=22;break;case 20:e.prev=20,e.t0=e.catch(5);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}(),j=r(42),w=(r(503),Object(j.b)((function(e){return{user:e.user.userMeta}}))((function(e){e.user;var t=Object(j.c)(),r=Object(u.useState)(!1),n=Object(h.a)(r,2),c=n[0],i=n[1],m=p.a.useForm(),O=Object(h.a)(m,1)[0],E={wrapperCol:{offset:9,span:14}},w=function(){var e=Object(b.a)(l.a.mark((function e(r){var n,a,c,u,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.username,a=r.password,e.prev=1,e.next=4,Object(v.N)({username:n,password:a});case 4:return c=e.sent,u=c.data,o=u.access,i=u.refresh,e.next=9,window.storage.set(_.a,o);case 9:return e.next=11,window.storage.set(_.b,i);case 11:return e.next=13,y(t);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),f.a.error({message:"Can't Sign In user: ".concat(n," - Invalid Credentials.")});case 18:O.resetFields();case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return c?o.a.createElement("div",{className:"sign-in"},o.a.createElement(p.a,Object.assign({form:O},{labelCol:{span:8},wrapperCol:{span:8}},{name:"basic",hideRequiredMark:!0,initialValues:{remember:!0},onFinish:w,onFinishFailed:function(e){}}),o.a.createElement(p.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},o.a.createElement(d.a,null)),o.a.createElement(p.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},o.a.createElement(d.a.Password,null)),o.a.createElement(p.a.Item,Object.assign({},E,{name:"remember",valuePropName:"checked"}),o.a.createElement(s.a,null,"Remember me")),o.a.createElement(p.a.Item,E,o.a.createElement(a.a,{type:"primary",htmlType:"submit"},"Submit")))):o.a.createElement("div",{className:"intro"},o.a.createElement("h1",null,"Welcome to Yantra Packs"),o.a.createElement("br",null),o.a.createElement("div",{className:"content"},"Yantra Packs provide sustainable material handling equipment solutions to Auto, FMCG,Chemical and Industrial/ Manufacturing companies to help them store and distribute goods efficiently, helping them to boost profitability and increase efficiency."),o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement(a.a,{size:"large",type:"primary",onClick:function(){i(!0)}},"Sign In"))})));r(609),t.default=function(){return o.a.createElement("div",{className:"signInMaster"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:"home-logo.png",alt:"logoimg",style:{zIndex:"5"}})),o.a.createElement("img",{src:"back3.jpg",alt:"img",style:{position:"absolute",width:"100vw",height:"100vh",backgroundPosition:"center",backgroundSize:"cover"}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(n.a,null,o.a.createElement(c.a,{md:10,sm:24},o.a.createElement(w,null)),o.a.createElement(c.a,{md:14},o.a.createElement(a.a,{type:"primary",style:{position:"absolute",right:"190px",top:"160px",width:"10px",height:"90px",opacity:"0"}},o.a.createElement(i.a,{to:"/sign-up/client"})),o.a.createElement(a.a,{type:"primary",style:{position:"absolute",right:"150px",top:"160px",width:"10px",height:"90px",opacity:"0"}},o.a.createElement(i.a,{to:"/sign-up/employee"})))))}}}]);
//# sourceMappingURL=27.b9c045a8.chunk.js.map