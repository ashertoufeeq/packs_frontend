(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[51],{268:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={INPUT:"input",MULTIPLE_CHECKBOX:"MULTIPLE_CHECKBOX",INPUT_NUMBER:"input-number",PASSWORD:"password",TEXTAREA:"textarea",MARKDOWN:"markdown",SELECT:"select",CAPTCHA:"captcha",MONTH_PICKER:"month-picker",FILE_DRAG_DROP:"file-drag-drop",RANGE_PICKER:"range-picker",RADIO:"radio",SWITCH:"switch",HIDDEN:"hidden",DATE:"date",CASCADER:"cascader"};n.CAPTCHA},315:function(e,t,a){"use strict";a(345);var n=a(352),r=(a(346),a(349)),l=(a(318),a(279)),s=(a(347),a(350)),c=(a(348),a(351)),i=(a(281),a(282)),o=(a(171),a(276)),u=(a(314),a(275)),p=(a(319),a(278)),m=a(0),E=a.n(m),d=a(428),b=a(268),f=p.a.Option,y=u.a.Group,g={name:"file",action:function(e){return new Promise((function(t,a){setTimeout((function(){var a=new FileReader;a.addEventListener("load",(function(){t(a.result)}),!1),e&&a.readAsDataURL(e)}),1e3)}))}};t.a=function(e){var t=e.key,a=e.rules,m=e.kwargs,k=e.type,C=e.others,h=e.customLabel,_=e.noLabel,O={};switch(C&&C.formOptions&&(O=C.formOptions),k){case b.a.INPUT:return E.a.createElement(i.a.Item,Object.assign({key:t,label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},O),E.a.createElement(o.a,Object.assign({},m,{size:"middle"})));case b.a.INPUT_NUMBER:return E.a.createElement(i.a.Item,Object.assign({key:t,label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},O),E.a.createElement(c.a,Object.assign({},m,{size:"middle"})));case b.a.FILE_DRAG_DROP:return E.a.createElement(i.a.Item,Object.assign({key:t,label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},O),E.a.createElement(s.a.Dragger,Object.assign({},m,g,{style:{maxHeight:"75px",width:"150px"}}),E.a.createElement("p",{className:"ant-upload-drag-icon"},E.a.createElement(d.a,{type:"inbox"})),C?E.a.createElement(E.a.Fragment,null,E.a.createElement("p",{className:"ant-upload-text p-1"},C.p1),E.a.createElement("p",{className:"ant-upload-hint p-1"},C.p2)):null));case b.a.SELECT:return E.a.createElement(i.a.Item,Object.assign({shouldUpdate:!0,key:t,label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},O),E.a.createElement(p.a,m,C.selectOptions.map((function(e,t){return E.a.createElement(f,{key:t.toString(),search:e[C.customTitle],value:e.value||e[C.key]||e},C.customTitle?E.a.createElement("text",{style:{fontSize:13,fontWeight:"bold"}},e[C.customTitle]):e.label||e[C.key]||e,C.dataKeys?E.a.createElement("div",{className:"row",style:{flexWrap:"wrap"}},C.dataKeys.map((function(t){return E.a.createElement("text",{style:{fontSize:11,marginLeft:5,marginRight:5}},e[t])}))):null)}))));case b.a.RADIO:return E.a.createElement(i.a.Item,Object.assign({key:t,label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},O),E.a.createElement(l.a.Group,{value:"Ggg"},C.radioOptions.map((function(e){return E.a.createElement(l.a,{key:e.value,value:e.value},e.label)}))));case b.a.DATE:return E.a.createElement(i.a.Item,Object.assign({key:t},O,{label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a}),E.a.createElement(r.a,{onChange:function(e){}}));case b.a.MULTIPLE_CHECKBOX:return E.a.createElement(i.a.Item,Object.assign({key:t,label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a},O),E.a.createElement(y,{onChange:C.onChange},C.checkOptions.map((function(e){return E.a.createElement(u.a,{value:e.value},e.label)}))));case b.a.SWITCH:return E.a.createElement(i.a.Item,Object.assign({key:t,valuePropName:"checked"},O,{label:_?null:h||t.charAt(0).toUpperCase()+t.slice(1),name:t,rules:a}),E.a.createElement(n.a,m));default:return null}}},874:function(e,t,a){"use strict";a.r(t),a.d(t,"PFEPSolutionRequiredForm",(function(){return O}));a(266);var n=a(267),r=(a(101),a(62)),l=(a(269),a(272)),s=(a(270),a(273)),c=(a(170),a(103)),i=a(55),o=a.n(i),u=(a(316),a(122)),p=a(32),m=a(85),E=(a(281),a(282)),d=a(102),b=a(0),f=a.n(b),y=a(315),g=a(52),k=a(30),C=a(268),h=[{key:"solution_flc",type:C.a.SWITCH,others:{defaultValue:!1},customLabel:"FLC"},{key:"solution_fsc",type:C.a.SWITCH,others:{defaultValue:!1},customLabel:"FSC"},{key:"solution_crate",type:C.a.SWITCH,others:{defaultValue:!1},customLabel:"Crate"},{key:"solution_ppbox",type:C.a.SWITCH,others:{defaultValue:!1},customLabel:"PP Box"},{key:"plastic_pallet",type:C.a.SWITCH,others:{defaultValue:!1},customLabel:"Plastic Pallet"},{key:"palletized_crate",type:C.a.SWITCH,others:{defaultValue:!1},customLabel:"Palletized Crate"},{key:"palletized_box_sol",type:C.a.SWITCH,others:{defaultValue:!1},customLabel:"Palletized Box Solution"},{key:"multiple_parts_in_single_packet",type:C.a.SWITCH,customLabel:"Multiple Parts in Single Packet"},{key:"parts_to_part_contact",type:C.a.SWITCH,customLabel:"Part to Part Contact Permissible"},{key:"stacking_or_nesting_of_parts",type:C.a.SWITCH,customLabel:"Stacking or Nesting of parts"},{key:"min_max_margin",kwargs:{placeholder:"Minimum or Maximum Margin from Wall"},type:C.a.INPUT,customLabel:"Minimum or Maximum Margin from Wall"},{key:"other_specification",kwargs:{placeholder:"Other Specification"},type:C.a.INPUT,customLabel:"Other Specification"},{key:"part_orientation",kwargs:{placeholder:"Part Orientation"},type:C.a.INPUT,customLabel:"Part Orientation"},{key:"parts_pm",kwargs:{placeholder:"Parts/PM"},type:C.a.INPUT,customLabel:"Parts/PM"},{key:"status",kwargs:{placeholder:"Select"},type:C.a.SELECT,others:{selectOptions:["TP Shared","CP Shared","TP Approved","CP Approved","Trials Done","Trials Approved","ESA Signed","Flow started"]}}],_=a(283),O=function(e){var t=e.id,a=e.onCancel,i=e.onDone,C=(e.onNext,Object(b.useState)(!1)),O=Object(d.a)(C,2),P=O[0],S=O[1],T=E.a.useForm(),I=Object(d.a)(T,1)[0],j=Object(g.c)(),v=Object(g.d)((function(e){return e.data.pfepData})),L=function(){var e=Object(m.a)(o.a.mark((function e(n){var r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,j({type:k.b,data:n});case 3:if(S(!1),!t){e.next=12;break}return e.next=7,Object(_.P)(t,Object(p.a)(Object(p.a)({},v),n));case 7:r=e.sent,r.error?(u.a.warning({message:"Unable To Edit.",description:"Something went wrong PFEP editing failed."}),a()):i(),e.next=17;break;case 12:return e.next=14,Object(_.m)(Object(p.a)(Object(p.a)({},v),n));case 14:l=e.sent,l.error?(u.a.warning({message:"Unable To Create.",description:"Something went wrong PFEP creation failed."}),a()):i();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return f.a.createElement(n.a,{spinning:P},f.a.createElement(c.a,{orientation:"left"},"Solution Required"),f.a.createElement(E.a,{onFinish:L,form:I,initialValues:{solution_flc:!!v.solution_flc&&v.solution_flc,solution_fsc:!!v.solution_fsc&&v.solution_fsc,solution_crate:!!v.solution_crate&&v.solution_crate,solution_ppbox:!!v.solution_ppbox&&v.solution_ppbox,part_orientation:v.part_orientation?v.part_orientation:null,parts_pm:v.parts_pm?v.parts_pm:null,status:v.status?v.status:null},layout:"vertical",autoComplete:"off"},f.a.createElement(l.a,{style:{justifyContent:"left"}},h.slice(10,11).map((function(e,t){return f.a.createElement(s.a,{span:4},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(y.a)(e)))})),h.slice(11,15).map((function(e,t){return f.a.createElement(s.a,{span:5},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(y.a)(e)))}))),f.a.createElement(l.a,{style:{justifyContent:"left"}},h.slice(0,4).map((function(e,t){return f.a.createElement(s.a,{span:2},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(y.a)(e)))})),h.slice(4,6).map((function(e,t){return f.a.createElement(s.a,{span:3},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(y.a)(e)))})),h.slice(6,8).map((function(e,t){return f.a.createElement(s.a,{span:5},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(y.a)(e)))}))),f.a.createElement(l.a,{style:{justifyContent:"left"}},h.slice(8,10).map((function(e,t){return f.a.createElement(s.a,{span:8},f.a.createElement("div",{key:t.toString(),className:"p-2"},Object(y.a)(e)))}))),f.a.createElement(l.a,null,f.a.createElement(r.a,{type:"primary",htmlType:"submit"},"Submit"),f.a.createElement("div",{className:"p-2"}),f.a.createElement(r.a,{type:"primary",onClick:a},"Cancel"))))};t.default=O}}]);
//# sourceMappingURL=51.d855fb12.chunk.js.map