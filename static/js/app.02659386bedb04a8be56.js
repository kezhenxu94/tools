webpackJsonp([4],{"/626":function(t,e){},FbEL:function(t,e){},"HNa/":function(t,e){},"N+IJ":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("NwR8"),i=n("lrfK"),r=n("5mW0"),l=n("dWsD"),s=n("jwmx"),c=n("MW9M"),u=n("eKTK"),v=n("v0+5"),p=n("cLIX"),m={name:"App",components:{VApp:o.a,VNavigationDrawer:i.a,VToolbar:r.a,VToolbarTitle:r.d,VToolbarSideIcon:r.c,VToolbarItems:r.b,VList:l.a,VListTile:l.b,VListTileTitle:l.f,VListTileAvatar:l.d,VListTileContent:l.e,VListTileAction:l.c,VContent:p.b,VLayout:p.d,VIcon:s.a,VFooter:c.a,VMenu:u.a,VBtn:v.a,VSpacer:p.e},methods:{goHomePage:function(){window.location.href="https://kezhenxu94.me"}},computed:{language:{get:function(){return this.$store.state.language},set:function(t){this.$store.commit("setLanguage",t)}}},data:function(){return{showDrawer:null,items:[{title:"converter.title",icon:"transform",path:"/converter"},{title:"formatter.title",icon:"text_format",path:"/formatter"},{title:"qrcode.title",icon:"code",path:"/qrcode"}],right:null,languages:[{label:"English",value:"en"},{label:"简体中文",value:"zh-CN"}]}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app",dark:""}},[n("v-navigation-drawer",{attrs:{app:"",value:t.showDrawer},on:{"update:value":function(e){t.showDrawer=e},input:function(e){t.showDrawer=e}}},[n("v-toolbar",{attrs:{flat:""}},[n("v-list",{staticClass:"pa-0"},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:"https://www.gravatar.com/avatar/a14e62dda940324d878be1499c064432"}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Kid the Programmer")])],1)],1)],1)],1),t._v(" "),n("v-list",[n("v-list-tile",{on:{click:t.goHomePage}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.$t("home")))])],1)],1),t._v(" "),t._l(t.items,function(e){return n("v-list-tile",{key:e.title,attrs:{to:e.path}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.$t(e.title)))])],1)],1)})],2)],1),t._v(" "),n("v-toolbar",{attrs:{app:"",flat:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.showDrawer=!t.showDrawer}}}),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.$t("app")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-menu",[n("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n          "+t._s(t.language.label)+"\n          "),n("v-icon",{attrs:{right:""}},[t._v("arrow_drop_down")])],1),t._v(" "),n("v-list",t._l(t.languages,function(e){return n("v-list-tile",{key:e.value,on:{click:function(n){t.language=e}}},[n("v-list-tile-title",[t._v(t._s(e.label))])],1)}))],1)],1)],1),t._v(" "),n("v-content",{staticClass:"content"},[n("router-view")],1),t._v(" "),n("v-footer",{staticClass:"hidden-sm-and-down",attrs:{app:""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[t._v("\n      Copyright ©2018 Kid the Programmer\n    ")])],1)],1)},staticRenderFns:[]};var f=n("VU/8")(m,d,!1,function(t){n("NdZi")},null,null).exports,g=n("/ocq");a.a.use(g.a);var h=new g.a({routes:[{path:"/",redirect:"/converter"},{path:"/converter",name:"Converter",component:function(){return n.e(1).then(n.bind(null,"DnVD"))}},{path:"/formatter",name:"Formatter",component:function(){return n.e(2).then(n.bind(null,"irZa"))}},{path:"/qrcode",name:"QRCode",component:function(){return n.e(0).then(n.bind(null,"WOaf"))}}]}),b=n("Eo2Y"),w=(n("QCv7"),n("gJtD"),n("cmpb"),n("IHMs")),_=n.n(w),V={plugin:b.a,options:{theme:{primary:_.a.amber.base}}},C=n("mvHQ"),T=n.n(C),L=n("woOf"),N=n.n(L),D=n("NYxO"),S=n("TXmL");a.a.use(S.a);var I=new S.a({locale:"en",messages:{en:{app:"Tools",home:"Home",clear:"Clear",converter:{title:"Converter",time:{title:"Time",timeInSeconds:"Time in seconds",readableTime:"Readable time",now:"Now"},url:{title:"URL Encoder",encoded:"Encoded",decoded:"Decoded"}},formatter:{title:"Formatter"},qrcode:{title:"QR Code",inputLabel:"Text to generate"}},"zh-CN":{app:"在线工具",home:"首页",clear:"清空",converter:{title:"转换器",time:{title:"时间转换",timeInSeconds:"时间戳(精确到秒)",readableTime:"格式化时间",now:"当前时间戳"},url:{title:"URL 编解码",encoded:"编码内容",decoded:"解码内容"}},formatter:{title:"格式化"},qrcode:{title:"二维码",inputLabel:"输入文本"}}}});a.a.use(D.a);var k=new D.a.Store({state:{language:{label:{en:"English","zh-CN":"简体中文"}[I.locale||"en"],value:I.locale||"en"}},mutations:{initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(N()(t,JSON.parse(localStorage.getItem("store"))))},setLanguage:function(t,e){t.language=e,I.locale=t.language.value}}});k.subscribe(function(t,e){localStorage.setItem("store",T()(e))});var H=k;a.a.config.productionTip=!1,a.a.use(V.plugin,V.options),new a.a({el:"#app",components:{App:f},template:"<App/>",router:h,i18n:I,store:H,beforeCreate:function(){this.$store.commit("initialiseStore"),I.locale=this.$store.state.language.value}})},NOHZ:function(t,e){},NdZi:function(t,e){},P0ba:function(t,e){},QCv7:function(t,e){},"X05+":function(t,e){},XC5Q:function(t,e){},acBN:function(t,e){},cmpb:function(t,e){},gJtD:function(t,e){},kP4z:function(t,e){},kVeV:function(t,e){},pu2v:function(t,e){},sBiC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.02659386bedb04a8be56.js.map