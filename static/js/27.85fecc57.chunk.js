(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[27],{284:function(e,t,n){"use strict";n.d(t,"N",(function(){return a})),n.d(t,"O",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"U",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"eb",(function(){return s})),n.d(t,"H",(function(){return d})),n.d(t,"db",(function(){return m})),n.d(t,"v",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"F",(function(){return b})),n.d(t,"ab",(function(){return h})),n.d(t,"Z",(function(){return E})),n.d(t,"t",(function(){return _})),n.d(t,"o",(function(){return y})),n.d(t,"L",(function(){return v})),n.d(t,"y",(function(){return g})),n.d(t,"kb",(function(){return w})),n.d(t,"lb",(function(){return O})),n.d(t,"p",(function(){return T})),n.d(t,"M",(function(){return k})),n.d(t,"z",(function(){return j})),n.d(t,"mb",(function(){return S})),n.d(t,"nb",(function(){return C})),n.d(t,"B",(function(){return W})),n.d(t,"T",(function(){return N})),n.d(t,"m",(function(){return P})),n.d(t,"J",(function(){return x})),n.d(t,"w",(function(){return G})),n.d(t,"hb",(function(){return D})),n.d(t,"P",(function(){return A})),n.d(t,"g",(function(){return L})),n.d(t,"D",(function(){return H})),n.d(t,"Q",(function(){return q})),n.d(t,"R",(function(){return R})),n.d(t,"r",(function(){return M})),n.d(t,"j",(function(){return F})),n.d(t,"G",(function(){return Y})),n.d(t,"bb",(function(){return I})),n.d(t,"cb",(function(){return z})),n.d(t,"u",(function(){return B})),n.d(t,"W",(function(){return J})),n.d(t,"c",(function(){return K})),n.d(t,"A",(function(){return U})),n.d(t,"S",(function(){return V})),n.d(t,"q",(function(){return Q})),n.d(t,"h",(function(){return X})),n.d(t,"E",(function(){return Z})),n.d(t,"X",(function(){return $})),n.d(t,"s",(function(){return ee})),n.d(t,"e",(function(){return te})),n.d(t,"C",(function(){return ne})),n.d(t,"V",(function(){return re})),n.d(t,"n",(function(){return ae})),n.d(t,"K",(function(){return ce})),n.d(t,"ib",(function(){return oe})),n.d(t,"jb",(function(){return ie})),n.d(t,"x",(function(){return ue})),n.d(t,"fb",(function(){return le})),n.d(t,"l",(function(){return se})),n.d(t,"I",(function(){return de})),n.d(t,"gb",(function(){return me})),n.d(t,"a",(function(){return fe})),n.d(t,"b",(function(){return pe})),n.d(t,"Y",(function(){return be}));var r=n(285),a=function(e){var t=e.username,n=e.password;return Object(r.a)("/api/token/",{method:"POST",data:{username:t,password:n},secure:!1})},c=function(){return Object(r.a)("/user/meta/")},o=function(e){var t=e.username,n=e.email,a=e.password,c=e.first_name,o=e.last_name;return Object(r.a)("/create-employee/",{method:"POST",data:{username:t,email:n,password:a,first_name:c,last_name:o},secure:!1})},i=function(e){var t=e.username,n=e.email,a=e.password,c=e.first_name,o=e.last_name;return Object(r.a)("/create-client/",{method:"POST",data:{username:t,email:n,password:a,first_name:c,last_name:o},secure:!1})},u=function(){return Object(r.a)("/clients/",{method:"GET",secure:!0})},l=function(e){return Object(r.a)("/create-product/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},s=function(){return Object(r.a)("/products/",{method:"GET",secure:!0})},d=function(e,t){return console.log(document),Object(r.a)("/edit-product/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},m=function(e){return Object(r.a)("/edit-product/".concat(e),{method:"GET",secure:!0})},f=function(e){return Object(r.a)("/edit-product/".concat(e),{method:"DELETE",secure:!0})},p=function(e){var t=e.kit_name,n=e.kit_info,a=e.components_per_kit,c=e.kit_client,o=e.products;return Object(r.a)("/create-kit/",{method:"POST",secure:!0,data:{kit_name:t,kit_info:n,components_per_kit:a,kit_client:c,products:o}})},b=function(e,t){var n=t.kit_name,a=t.kit_info,c=t.components_per_kit,o=t.kit_client,i=t.products;return Object(r.a)("/edit-kit/".concat(e,"/"),{method:"PATCH",secure:!0,data:{kit_name:n,kit_info:a,components_per_kit:c,kit_client:o,products:i}})},h=function(){return Object(r.a)("/kits/",{method:"GET",secure:!0})},E=function(e){return Object(r.a)("/edit-kit/".concat(e,"/"),{method:"GET",secure:!0})},_=function(e){return Object(r.a)("/edit-kit/".concat(e),{method:"DELETE",secure:!0})},y=function(e){var t=e.name,n=e.street,a=e.city,c=e.pincode,o=e.state,i=e.contact_person_name,u=e.contact_person_no,l=e.email,s=e.type,d=e.payment_terms,m=e.pan,f=e.gst,p=e.code,b=e.remarks,h=e.beneficiary_name,E=e.account_no,_=e.bank_name,y=e.ifsc;return Object(r.a)("/create-vendor/",{method:"POST",data:{name:t,street:n,city:a,pincode:c,state:o,contact_person_name:i,contact_person_no:u,email:l,type:s,payment_terms:d,pan:m,gst:f,code:p,remarks:b,beneficiary_name:h,account_no:E,bank_name:_,ifsc:y},secure:!0})},v=function(e,t){var n=t.name,a=t.street,c=t.city,o=t.pincode,i=t.state,u=t.contact_person_name,l=t.contact_person_no,s=t.email,d=t.type,m=t.payment_terms,f=t.pan,p=t.gst,b=t.code,h=t.remarks,E=t.beneficiary_name,_=t.account_no,y=t.bank_name,v=t.ifsc;return Object(r.a)("/edit-vendor/".concat(e,"/"),{method:"PATCH",data:{name:n,street:a,city:c,pincode:o,state:i,contact_person_name:u,contact_person_no:l,email:s,type:d,payment_terms:m,pan:f,gst:p,code:b,remarks:h,beneficiary_name:E,account_no:_,bank_name:y,ifsc:v},secure:!0})},g=function(e){return Object(r.a)("/edit-vendor/".concat(e,"/"),{method:"DELETE",secure:!0})},w=function(e){return Object(r.a)("/edit-vendor/".concat(e,"/"),{method:"GET",secure:!0})},O=function(){return Object(r.a)("/vendors/",{method:"GET",secure:!0})},T=function(e){return Object(r.a)("/create-warehouse/",{method:"POST",secure:!0,data:e,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},k=function(e,t){return Object(r.a)("/edit-warehouse/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},j=function(e){return Object(r.a)("/edit-warehouse/".concat(e,"/"),{method:"DELETE",secure:!0})},S=function(e){return Object(r.a)("/edit-warehouse/".concat(e,"/"),{method:"GET",secure:!0})},C=function(){return Object(r.a)("/warehouse/",{method:"GET",secure:!0})},W=function(e,t){return Object(r.a)("/client-profile/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},N=function(e){return Object(r.a)("/client-profile/".concat(e),{method:"GET",secure:!0})},P=function(e){var t=e.name,n=e.city,a=e.address,c=e.emitter,o=e.pan,i=e.gst;return Object(r.a)("/create-receiverclient/",{method:"POST",data:{name:t,city:n,address:a,emitter:c,pan:o,gst:i},secure:!0})},x=function(e,t){var n=t.name,a=t.city,c=t.address,o=t.emitter,i=t.pan,u=t.gst;return Object(r.a)("/edit-receiverclient/".concat(e,"/"),{method:"PATCH",data:{name:n,city:a,address:c,emitter:o,pan:i,gst:u},secure:!0})},G=function(e){return Object(r.a)("/edit-receiverclient/".concat(e,"/"),{method:"DELETE",secure:!0})},D=function(e){return Object(r.a)("/edit-receiverclient/".concat(e,"/"),{method:"GET",secure:!0})},A=function(e){return Object(r.a)("/receiverclients/",{method:"GET",secure:!0})},L=function(e){var t=e.flow_name,n=e.flow_info,a=e.flow_type,c=e.flow_days,o=e.sender_client,i=e.receiver_client,u=e.kits;return Object(r.a)("/create-flow/",{method:"POST",secure:!0,data:{flow_name:t,flow_info:n,flow_type:a,flow_days:c,sender_client:o,receiver_client:i,kits:u}})},H=function(e,t){var n=t.flow_name,a=t.flow_info,c=t.flow_type,o=t.flow_days,i=t.sender_client,u=t.receiver_client,l=t.kits;return Object(r.a)("/edit-flow/".concat(e,"/"),{method:"PATCH",secure:!0,data:{flow_name:n,flow_info:a,flow_type:c,flow_days:o,sender_client:i,receiver_client:u,kits:l}})},q=function(e){return Object(r.a)("/edit-flow/".concat(e,"/"),{method:"GET",secure:!0})},R=function(e){return Object(r.a)("/flows/",{method:"GET",secure:!0})},M=function(e){return Object(r.a)("/edit-flow/".concat(e,"/"),{method:"DELETE",secure:!0})},F=function(e){var t=e.delivery_required_on,n=e.flows;return Object(r.a)("/create-mrequets/",{method:"POST",data:{delivery_required_on:t,flows:n},secure:!0})},Y=function(e,t){var n=t.delivery_required_on,a=t.flows;return Object(r.a)("/edit-mrequets/".concat(e,"/"),{method:"PATCH",data:{delivery_required_on:n,flows:a},secure:!0})},I=function(e){return Object(r.a)("/edit-mrequets/".concat(e,"/"),{method:"GET",secure:!0})},z=function(){return Object(r.a)("/mrequets/",{method:"GET",secure:!0})},B=function(e){return Object(r.a)("/edit-mrequets/".concat(e,"/"),{method:"DELETE",secure:!0})},J=function(){return Object(r.a)("/allmrequest/",{method:"GET",secure:!0})},K=function(e){var t=e.transaction_no,n=e.dispatch_date,a=e.send_from_warehouse,c=e.sales_order,o=e.flows,i=e.is_delivered,u=e.model,l=e.driver_name,s=e.driver_number,d=e.lr_number,m=e.vehicle_number,f=e.freight_charges,p=e.vehicle_type,b=e.transport_by,h=e.expected_delivery,E=e.remarks;return Object(r.a)("/create-allotment/",{method:"POST",data:{transaction_no:t,dispatch_date:n,send_from_warehouse:a,sales_order:c,flows:o,is_delivered:i,model:u,driver_name:l,driver_number:s,lr_number:d,vehicle_number:m,freight_charges:f,vehicle_type:p,transport_by:b,expected_delivery:h,remarks:E},secure:"true"})},U=function(e,t){var n=t.dispatch_date,a=t.send_from_warehouse,c=t.sales_order,o=t.flows,i=t.model,u=t.driver_name,l=t.driver_number,s=t.lr_number,d=t.vehicle_number,m=t.freight_charges,f=t.vehicle_type,p=t.transport_by,b=t.expected_delivery,h=t.remarks;return Object(r.a)("/edit-allotment/".concat(e,"/"),{method:"PATCH",data:{dispatch_date:n,send_from_warehouse:a,sales_order:c,flows:o,model:i,driver_name:u,driver_number:l,lr_number:s,vehicle_number:d,freight_charges:m,vehicle_type:f,transport_by:p,expected_delivery:b,remarks:h},secure:!0})},V=function(){return Object(r.a)("/allotments/",{method:"GET",secure:!0})},Q=function(e){return Object(r.a)("/edit-allotment/".concat(e,"/"),{methood:"DELETE",secure:!0})},X=function(e){return Object(r.a)("/create-grn/",{method:"POST",secure:!0,data:e,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},Z=function(e,t){return Object(r.a)("/edit-grn/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},$=function(e){return Object(r.a)("/edit-grn/".concat(e,"/"),{method:"GET",secure:!0})},ee=function(e){return Object(r.a)("/edit-grn/".concat(e,"/"),{method:"DELETE",secure:!0})},te=function(e){return Object(r.a)("/create-delivered/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},ne=function(e,t){return Object(r.a)("/edit-delivered/".concat(e,"/"),{method:"PATCH",data:t,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},re=function(e){return Object(r.a)("/edit-delivered/".concat(e,"/"),{method:"GET",secure:!0})},ae=function(e){var t=e.transaction_no,n=e.transaction_date,a=e.transaction_type,c=e.flow,o=e.items,i=e.driver_name,u=e.driver_number,l=e.lr_number,s=e.vehicle_number,d=e.freight_charges,m=e.vehicle_type,f=e.transport_by,p=e.warehouse,b=e.receiver_client,h=e.remarks;return Object(r.a)("/create-return/",{method:"POST",data:{transaction_no:t,transaction_date:n,transaction_type:a,flow:c,items:o,driver_name:i,driver_number:u,lr_number:l,vehicle_number:s,freight_charges:d,vehicle_type:m,transport_by:f,warehouse:p,receiver_client:b,remarks:h},secure:"true"})},ce=function(e,t){var n=t.transaction_no,a=t.transaction_date,c=t.transaction_type,o=t.flow,i=t.items,u=t.driver_name,l=t.driver_number,s=t.lr_number,d=t.vehicle_number,m=t.freight_charges,f=t.vehicle_type,p=t.transport_by,b=t.warehouse,h=t.receiver_client,E=t.remarks;return Object(r.a)("/edit-return/".concat(e,"/"),{method:"PATCH",data:{transaction_no:n,transaction_date:a,transaction_type:c,flow:o,items:i,driver_name:u,driver_number:l,lr_number:s,vehicle_number:d,freight_charges:m,vehicle_type:f,transport_by:p,warehouse:b,receiver_client:h,remarks:E},secure:"true"})},oe=function(e){return Object(r.a)("/edit-return/".concat(e,"/"),{method:"GET",secure:!0})},ie=function(){return Object(r.a)("/returndockets/",{method:"GET",secure:!0})},ue=function(e){return Object(r.a)("/edit-return/".concat(e,"/"),{method:"DELETE",secure:!0})},le=function(){return Object(r.a)("/r-flows/",{method:"GET",secure:!0})},se=function(e){var t=e.returndocket,n=e.delivered,a=e.items;e.document;return Object(r.a)("/create-received/",{method:"POST",data:{returndocket:t,delivered:n,items:a},secure:!0})},de=function(e,t){var n=t.returndocket,a=t.delivered,c=t.items;return Object(r.a)("/edit-received/".concat(e,"/"),{method:"PATCH",data:{returndocket:n,delivered:a,items:c},secure:!0})},me=function(e){return Object(r.a)("/edit-received/".concat(e,"/"),{method:"GET",secure:!0})},fe=function(){return Object(r.a)("/delivered/",{})},pe=function(){return Object(r.a)("/received/",{})},be=function(e){return Object(r.a)("/grn-barcodes/".concat(e,"/"),{method:"GET",secure:!0})}},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(37),a=n(317),c=n(46),o=n.n(c),i=n(73),u=n(394),l=n(395),s=n.n(l),d=n(291),m=n(292);s.a.defaults.baseURL="http://packsdev.ap-south-1.elasticbeanstalk.com";var f=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,r,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(m.a)(),e.next=3,t.get(d.a,null);case 3:return n=e.sent,e.next=6,t.get(d.b,null);case 6:if(r=e.sent,n&&r){e.next=9;break}throw Error("No user found");case 9:if(a=u(n),!(new Date(1e3*parseInt(a.exp,10))>new Date)){e.next=12;break}return e.abrupt("return",n);case 12:return e.next=14,s.a.post("/api/token/refresh/",{refresh:r});case 14:return c=e.sent,i=c.data.access,e.next=18,t.set(d.a,i);case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,c,i,u,l,d,m,p,b,h,E,_,y,v,g,w,O=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=O.length>1&&void 0!==O[1]?O[1]:{},c=n.onSuccess,i=void 0===c?function(e){return e}:c,u=n.onFailure,l=void 0===u?function(e){return e}:u,d=n.secure,m=void 0===d||d,n.defaultData,p=n.headers,b=Object(a.a)(n,["onSuccess","onFailure","secure","defaultData","headers"]),e.prev=2,e.t0=s.a,e.t1=t,e.t2=r.a,e.t3=r.a,e.t4=r.a,e.t5={},!m){e.next=18;break}return e.t7="Bearer ",e.next=13,f();case 13:e.t8=e.sent,e.t9=e.t7.concat.call(e.t7,e.t8),e.t6={Authorization:e.t9},e.next=19;break;case 18:e.t6={};case 19:return e.t10=e.t6,e.t11=(0,e.t4)(e.t5,e.t10),e.t12=p,e.t13=(0,e.t3)(e.t11,e.t12),e.t14={headers:e.t13},e.t15=b,e.t16=(0,e.t2)(e.t14,e.t15),e.next=28,(0,e.t0)(e.t1,e.t16);case 28:return h=e.sent,E=h.data,_=h.status,e.next=32,i(E);case 32:return console.log(E),e.abrupt("return",{data:E,status:_,error:void 0,loading:!1});case 36:if(e.prev=36,e.t17=e.catch(2),!e.t17.response){e.next=43;break}return y=e.t17.response,v=y.data,g=y.status,e.next=42,l(v);case 42:return e.abrupt("return",{data:void 0,status:g,error:v,loading:!1});case 43:if(!e.t17.request){e.next=46;break}return w={message:"error in request setup"},e.abrupt("return",{data:void 0,status:0,error:w,loading:!1});case 46:throw Error(e.t17);case 47:case"end":return e.stop()}}),e,null,[[2,36]])})));return function(t){return e.apply(this,arguments)}}()},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="ACCESS_TOKEN",a="REFRESH_TOKEN"},292:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var r=function(){return window?window.storage:e.storage}}).call(this,n(47))},613:function(e,t,n){},619:function(e,t,n){"use strict";n.r(t);n(304);var r=n(305),a=(n(297),n(300)),c=(n(298),n(301)),o=n(46),i=n.n(o),u=n(73),l=n(90),s=(n(170),n(115)),d=n(0),m=n.n(d),f=n(634),p=n(284),b=(n(613),n(474),s.a.Title);t.default=function(e){var t=e.location,n=Object(d.useState)(null),o=Object(l.a)(n,2),s=o[0],h=o[1],E=Object(d.useState)(0),_=Object(l.a)(E,2),y=_[0],v=_[1],g=Object(d.useState)(0),w=Object(l.a)(g,2),O=w[0],T=w[1];Object(d.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.jb)();case 2:n=e.sent,r=n.data,(a=r.filter((function(e){return e.id===t.state.id})))&&h(a[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(d.useEffect)((function(){!function(){var e=0,t=0;s&&s.items.map((function(n){e+=n.quantity*n.product.priceperunit,t+=n.product.volumetric_weight})),T(t),v(e)}()}),[s]);var k=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],j=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];return s?m.a.createElement("div",{className:"container-docket"},m.a.createElement("div",{className:"header-docket"},m.a.createElement("div",{className:"logo-docket"},m.a.createElement("img",{src:"/home-logo.png",alt:"Yantraksh"})),m.a.createElement("div",{className:"heading-docket"},m.a.createElement(b,{level:2,style:{fontWeight:"bold"}},"DELIVERY CHALLAN"))),m.a.createElement("hr",null),m.a.createElement(a.a,{className:"meta-docket"},m.a.createElement(c.a,{span:12,className:"left"},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:22},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction No. : "),m.a.createElement("p",{style:{display:"inline"}},s.transaction_no))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:22},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Date : "),m.a.createElement("p",{style:{display:"inline"}},s.transaction_date.slice(0,10)))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:22},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Dispatch Date : "),m.a.createElement("p",{style:{display:"inline"}},s.transaction_date.slice(0,10)))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:22},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Type : Return")))),m.a.createElement(c.a,{span:5}),m.a.createElement(c.a,{span:7,className:"right",style:{fontFamily:"Arial, Helvetica, sans-serif"}},m.a.createElement("p",null,"[ \xa0] Original for Consignee ",m.a.createElement("br",null)," [ \xa0] Duplicate for Transporter ",m.a.createElement("br",null),"[ \xa0] Triplicate for Consignor"))),m.a.createElement("div",{className:"main-data-docket"},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:10},m.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Name : ")),m.a.createElement(c.a,{span:12,style:{wordWrap:"break-word"}},s.receiver_client.name))),m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:10},m.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Name : ")),m.a.createElement(c.a,{span:12,style:{wordWrap:"break-word"}},s.warehouse.name)))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:10},m.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Address : ")),m.a.createElement(c.a,{span:12,style:{wordWrap:"break-word"}},s.receiver_client.address+", "+s.receiver_client.city))),m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:10},m.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Address : ")),m.a.createElement(c.a,{span:12,style:{wordWrap:"break-word"}},s.warehouse.address+", "+s.warehouse.city+", "+s.warehouse.state+", "+s.warehouse.pincode)))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:10},m.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),m.a.createElement(c.a,{span:12,style:{wordWrap:"break-word"}},s.receiver_client.gst))),m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:10},m.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),m.a.createElement(c.a,{span:12,style:{wordWrap:"break-word"}},s.warehouse.gst))))),m.a.createElement(a.a,{className:"table-docket"},m.a.createElement(f.a,{bordered:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Sr. No."),m.a.createElement("th",null,"HSN/SAC"),m.a.createElement("th",null,"Product Name"),m.a.createElement("th",null,"Product Code"),m.a.createElement("th",null,"QTY"),m.a.createElement("th",null,"Rate/Unit"),m.a.createElement("th",null,"Taxable Value"))),m.a.createElement("tbody",null,s.items.map((function(e,t){return m.a.createElement("tr",null,m.a.createElement("td",null,t+1),m.a.createElement("td",null,e.product.hsn_code),m.a.createElement("td",null,e.product.name),m.a.createElement("td",null,e.product.short_code),m.a.createElement("td",null,e.quantity),m.a.createElement("td",null,e.product.priceperunit),m.a.createElement("td",null,e.quantity*e.product.priceperunit))}))))),m.a.createElement(a.a,{className:"final-docket"},m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:7},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Amount in Words : ")),m.a.createElement(c.a,{span:16},m.a.createElement("p",{style:{display:"inline",wordWrap:"break-word",textTransform:"capitalize"}},String.fromCharCode(8377)+" "+function(e){if((e=e.toString()).length>9)return"overflow";var t=("000000000"+e).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(t){var n="";return n+=0!=t[1]?(k[Number(t[1])]||j[t[1][0]]+" "+k[t[1][1]])+"crore ":"",n+=0!=t[2]?(k[Number(t[2])]||j[t[2][0]]+" "+k[t[2][1]])+"lakh ":"",n+=0!=t[3]?(k[Number(t[3])]||j[t[3][0]]+" "+k[t[3][1]])+"thousand ":"",n+=0!=t[4]?(k[Number(t[4])]||j[t[4][0]]+" "+k[t[4][1]])+"hundred ":"",n+=0!=t[5]?(""!=n?"and ":"")+(k[Number(t[5])]||j[t[5][0]]+" "+k[t[5][1]])+"only ":""}}(y))),m.a.createElement("br",null)),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:24},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Charged Weight : "),m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},O," Kg"))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:24},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transporter Name : "),m.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},s.transport_by.name))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:24},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver Name : "),m.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},s.driver_name))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:24},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver No. : "),m.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},s.driver_number)))),m.a.createElement(c.a,{span:12},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:24},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Grand Total : "),m.a.createElement("p",{style:{fontWeight:"bold",display:"inline",wordWrap:"break-word"}},String.fromCharCode(8377)+" "+y))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:24},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Creation Date : "),m.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},(new Date).getDate().toString()+"/"+(new Date).getMonth().toString()+"/"+(new Date).getFullYear().toString()))),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:24},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Vehicle No. : "),m.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},s.vehicle_number))))),m.a.createElement("hr",null),m.a.createElement("table",{style:{pageBreakInside:"avoid"}},m.a.createElement("div",{className:"declaration"},m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Declaration : "),m.a.createElement("p",{style:{display:"inline"}},"The packaging products given on hire shall always remain the property of Yantraksh Logistics Private Limited and shall not be used for the purpose otherwise agreed upon. The same shall be returned at the address notified by Yantraksh Logistics Private Limited."),m.a.createElement("br",null),m.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Note : "),m.a.createElement("p",{style:{display:"inline"}}," ","No E-Way Bill is required for Empty Cargo Containers. Refer, Rule 14 of Central Goods and Services Tax (Second Amendment) Rules, 2018."))),m.a.createElement("hr",null),m.a.createElement("table",{style:{pageBreakInside:"avoid",width:"90vw"}},m.a.createElement("div",{className:"footer"},m.a.createElement(a.a,null,m.a.createElement(c.a,{span:1}),m.a.createElement(c.a,{span:11,style:{fontWeight:"bold"}},"For Sending Location :"),m.a.createElement(c.a,{span:6}),m.a.createElement(c.a,{span:6,style:{fontWeight:"bold"}},"For Receiving Location :")),m.a.createElement("br",null)," ",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:1}),m.a.createElement(c.a,{span:11,style:{fontWeight:"bold"}},"Authorized Signature"),m.a.createElement(c.a,{span:6}),m.a.createElement(c.a,{span:6,style:{fontWeight:"bold"}},"Authorized Signature")),m.a.createElement(a.a,null,m.a.createElement(c.a,{span:1}),m.a.createElement(c.a,{span:11},"(Company Seal & Signature)"),m.a.createElement(c.a,{span:6}),m.a.createElement(c.a,{span:6},"(Company Seal & Signature)")),m.a.createElement("br",null)," ",m.a.createElement("br",null),m.a.createElement("div",{style:{display:"flex",justifyContent:"Center",alignItems:"center",flexDirection:"column",padding:"0",margin:"0"}},m.a.createElement("p",{style:{fontSize:"26px",color:"#034efc"}},"Yantraksh Logistics Private Limited"),m.a.createElement("p",null,"CIN No: U74999GJ2018PTC105552"))))):m.a.createElement(r.a,{spinning:!0,style:{position:"absolute",marginLeft:"49vw",marginTop:"49vh"}})}}}]);
//# sourceMappingURL=27.85fecc57.chunk.js.map