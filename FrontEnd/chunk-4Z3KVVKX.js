import{a as x,b as G}from"./chunk-PEZYCTDT.js";import{a as ce}from"./chunk-IM2PHAMV.js";import{a as le,b as me,c as de}from"./chunk-H5Z6NTXB.js";import{a as N}from"./chunk-NOKGP4J7.js";import{a as se}from"./chunk-BK4RLMSC.js";import{a as re}from"./chunk-GRTEZM5R.js";import{a as ae}from"./chunk-FSEIAN2B.js";import{a as L}from"./chunk-4WJQLHI3.js";import{a as P}from"./chunk-X5Y573WK.js";import"./chunk-CTPZLWJZ.js";import"./chunk-EKEQAN42.js";import{g as ie}from"./chunk-5EJ56Z4T.js";import"./chunk-CPZFSZTM.js";import{h as X}from"./chunk-6AAUO4WA.js";import{J as ne,i as Y}from"./chunk-P24RU7FU.js";import{ea as ee,fa as te,ja as k}from"./chunk-BMFSCGUM.js";import"./chunk-SKG7QTPE.js";import"./chunk-QJN4CBG2.js";import{b as oe}from"./chunk-3GZ4RAEW.js";import"./chunk-IUELCRM3.js";import{b as Q,d as V,e as F}from"./chunk-SV64OFO3.js";import{$b as A,Ab as y,Cb as p,Cc as D,Kb as s,Lb as C,Oa as l,Pb as Z,Qb as U,Rb as q,Sb as J,Tb as E,Ub as M,ac as B,bc as K,eb as u,fa as c,gb as d,ka as _,nb as $,q as W,rb as o,sb as n,tb as f,ua as b,ub as S,va as v,vb as w,wa as O,wc as R,xa as z,xb as T,zc as I}from"./chunk-WDMQQ6H3.js";import{a as j}from"./chunk-NEB6MB4Y.js";function he(t,a){if(t&1&&(S(0),f(1,"app-custom-table",16),w()),t&2){let e=p(2);l(),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data)("buttons",e.buttons)("searchTerm",e.searchTerm)}}function ge(t,a){if(t&1&&u(0,he,2,6,"ng-container",15),t&2){let e=p();d("ngIf",e.data.length)}}function be(t,a){if(t&1&&(S(0),f(1,"app-custom-table",16),w()),t&2){let e=p(2);l(),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data)("buttons",e.buttons)("searchTerm",e.searchTerm)}}function ve(t,a){if(t&1&&u(0,be,2,6,"ng-container",15),t&2){let e=p();d("ngIf",e.data.length)}}function Ce(t,a){if(t&1&&(S(0),f(1,"app-custom-table",16),w()),t&2){let e=p(2);l(),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data)("buttons",e.buttons)("searchTerm",e.searchTerm)}}function _e(t,a){if(t&1&&u(0,Ce,2,6,"ng-container",15),t&2){let e=p();d("ngIf",e.data.length)}}var pe=(()=>{let a=class a{constructor(){this.datePipe=c(I),this.currencyPipe=c(D),this.router=c(V),this.estadoService=c(P),this.consumoService=c(N),this.selectedTab=x.EN_REVISION,this.searchTerm="",this.data=[],this.columns=["Fecha","N\xFAmero de factura","Detalle compra","Valor factura","Valor cuotas","Cantidad cuotas","Estado"],this.columnPropertyMap={Fecha:"fechaCreacion","N\xFAmero de factura":"numeroFactura","Detalle compra":"detalleCompra","Valor factura":"montoConsumo","Valor cuotas":"montoCuotas","Cantidad cuotas":"cantidadCuotas",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:r=>{console.log("Approve",r),this.selectedData=r,this.router.navigate(["pages/gestion-creditos/consumos/detalle",this.selectedData.id])}}],this.tabChanged=r=>{console.log("tabChangeEvent => ",r),console.log("index => ",r.index),this.tabIndex=r.index,console.log(this.tabIndex),this.selectedTab=r.index==0?x.EN_REVISION:r.index==1?x.APROBADA:r.index==2?x.RECHAZADA:x.EN_REVISION,this.getDetalle(this.selectedTab)}}listenGrid(){this.estadoService.stateGridSolicitudes.asObservable().subscribe(i=>{i.state&&(console.log("Si entro"),console.log(i),this.selectedTab=i.tab==0?x.EN_REVISION:i.tab==1?x.APROBADA:i.tab==2?x.RECHAZADA:x.EN_REVISION,this.tabIndex=i.tab,console.log(this.tabIndex),this.getDetalle(this.selectedTab))})}onSearch(r){let i=r.target;this.searchTerm=i.value.trim().toLowerCase()}getDetalle(r){this.subcription$=this.consumoService.getDetalle(r).pipe(W(i=>(i.data.forEach(m=>{m.fechaCreacion=this.datePipe.transform(m.fechaCreacion,"dd/MM/yyyy"),m.montoConsumo=this.currencyPipe.transform(m.montoConsumo,"USD","symbol","1.2-2"),m.montoCuotas=this.currencyPipe.transform(m.montoCuotas,"USD","symbol","1.2-2")}),i))).subscribe(i=>{i?this.data=i.data:this.data=[]},i=>{this.data=[]})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getDetalle(this.selectedTab),this.listenGrid()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=_({type:a,selectors:[["app-grid-consumos"]],standalone:!0,features:[J([I,D]),E],decls:18,vars:6,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobados"],["label","Rechazados"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(i,m){if(i&1){let h=T();o(0,"div",1)(1,"div",2)(2,"div",3),s(3,"Detalle Consumo"),n(),o(4,"div",4)(5,"mat-form-field",5),f(6,"mat-icon",6),o(7,"input",7),y("input",function(g){return b(h),v(m.onSearch(g))}),n()()()(),o(8,"div",8)(9,"div",9)(10,"mat-tab-group",10,0),q("selectedIndexChange",function(g){return b(h),U(m.tabIndex,g)||(m.tabIndex=g),v(g)}),y("selectedTabChange",function(g){return b(h),v(m.tabChanged(g))}),o(12,"mat-tab",11),u(13,ge,1,1,"ng-template",12),n(),o(14,"mat-tab",13),u(15,ve,1,1,"ng-template",12),n(),o(16,"mat-tab",14),u(17,_e,1,1,"ng-template",12),n()()()()()}i&2&&(l(5),d("subscriptSizing","dynamic"),l(),d("svgIcon","heroicons_solid:magnifying-glass"),l(),d("autocomplete","off")("placeholder","Buscar"),l(3),d("animationDuration","500"),Z("selectedIndex",m.tabIndex))},dependencies:[ae,Y,k,ne,me,le,de,R]});let t=a;return t})();var Se=()=>["/pages/gestion-creditos/consumos/listar"];function we(t,a){if(t&1&&(o(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"div")(5,"h3",15),s(6,"Fecha de compra"),n()(),o(7,"p",16),s(8),A(9,"date"),n()(),o(10,"div",14)(11,"div")(12,"h3",15),s(13,"N\xFAmero de factura"),n()(),o(14,"p",16),s(15),n()(),o(16,"div",14)(17,"div")(18,"h3",15),s(19,"Valor factura"),n(),o(20,"p",17),s(21,"Indica el valor en COP"),n()(),o(22,"p",16),s(23),A(24,"currency"),n()(),o(25,"div",18)(26,"p",15),s(27,"Valor cuota"),n(),o(28,"p",16),s(29),A(30,"currency"),n()(),o(31,"div",19)(32,"p",15),s(33,"Cantidad cuotas"),n(),o(34,"p",16),s(35),n()(),o(36,"div",20)(37,"p",15),s(38,"Detalle compra"),n(),o(39,"p",16),s(40),n()()()()()),t&2){let e=p(2);l(8),C(K(9,6,e.detalle.fechaCreacion,"dd/MM/yyyy")),l(7),C(e.detalle.numeroFactura),l(8),C(B(24,9,e.detalle.montoConsumo)),l(6),C(B(30,11,e.detalle.montoCuotas)),l(6),C(e.detalle.cantidadCuotas),l(5),C(e.detalle.detalleCompra)}}function ye(t,a){if(t&1){let e=T();S(0),o(1,"div",21)(2,"button",22),y("click",function(){b(e);let i=p(2);return v(i.onReject())}),s(3," Rechazar "),n(),o(4,"button",23),y("click",function(){b(e);let i=p(2);return v(i.onSave())}),s(5," Aprobar "),n()(),w()}}function Ee(t,a){if(t&1&&(o(0,"div",8),u(1,we,41,13,"div",9)(2,ye,6,0,"ng-container",10),n()),t&2){let e=p();l(),d("ngIf",e.detalle),l(),d("ngIf",e.detalle.idEstadoCredito==e.CodigosDetalleConsumo.EN_REVISION)}}var fe=(()=>{let a=class a{constructor(){this.toasService=c(re),this.fuseService=c(ie),this.estadosDatosService=c(P),this.detalleConsumoService=c(N),this.activatedRoute=c(Q),this.router=c(V),this.swalService=c(se),this.idCredito="",this.CodigosDetalleConsumo=G}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getDetalle(this.idCredito)}getDetalle(r){this.subcription$=this.detalleConsumoService.getConsumo(r).subscribe(i=>{console.log(i),this.detalle=i.data})}onSave(){let r={idEstado:G.APROBADA,id:this.detalle.id};this.fuseService.open(j({},L)).afterClosed().subscribe(m=>{m==="confirmed"&&(this.subcription$=this.detalleConsumoService.patchConsumo(r).subscribe(h=>{h.isExitoso&&(this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["/pages/gestion-creditos/consumos/listar"]),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:0}))},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}))})}onReject(){let r={idEstado:G.RECHAZADA,id:this.detalle.id};this.fuseService.open(j({},L)).afterClosed().subscribe(m=>{m==="confirmed"&&(this.subcription$=this.detalleConsumoService.patchConsumo(r).subscribe(h=>{h.isExitoso&&(this.toasService.toasAlertWarn({message:"Registro Creado o Actualizado con Exito.",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/consumos/listar"]),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:0}))},h=>{this.toasService.toasAlertWarn({message:"Ha ocurrido un error!!!!",actionMessage:"Cerrar",duration:3e3})}))})}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=_({type:a,selectors:[["app-form-consumos"]],standalone:!0,features:[E],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],["class","w-full h-full px-4",4,"ngIf"],[4,"ngIf"],[1,"w-full","h-full","px-4"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center","border-t","pt-4"],[1,"flex","justify-end","items-center","mt-8","p-4","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"]],template:function(i,m){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),f(6,"mat-icon",5),n()(),o(7,"h2",6),s(8,"Detalle consumo"),n()(),u(9,Ee,3,2,"div",7),n()()()),i&2&&(l(5),d("routerLink",M(3,Se)),l(),d("svgIcon","heroicons_outline:arrow-long-left"),l(3),d("ngIf",m.detalle))},dependencies:[X,D,I,te,ee,k,R,F]});let t=a;return t})();var Ie=()=>["Super Admin","Analista"];function De(t,a){t&1&&(o(0,"fuse-card",5)(1,"div",6)(2,"div",7)(3,"span",8),s(4,"Realizar Detalle Consumo"),n(),O(),o(5,"svg",9),f(6,"path",10),n()()(),z(),o(7,"button",12),s(8," Realizar Detalle Consumo "),n()())}var xe=(()=>{let a=class a{constructor(){this._authService=c(oe)}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=_({type:a,selectors:[["app-main-detalle-consumo"]],standalone:!0,features:[E],decls:16,vars:2,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-row","items-baseline","flex-wrap","gap-6","justify-center","overflow-hidden","sm:overflow-y-auto","bg-gray-100","sm:p-2"],[1,"filter-list","flex","w-full","max-w-lg","flex-col","p-8","sm:p-10","mt-6","shadow-xl","rounded-xl","bg-white","hover:shadow-2xl","transition-all","duration-300","transform","hover:scale-105"],[1,"flex","justify-between","items-center","mb-6"],[1,"flex","items-center","space-x-3"],[1,"font-semibold","text-2xl","text-blue-900"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-blue-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13 7H7v6m6 0h5m-8 4H7m6 0h5"],["routerLink","/pages/gestion-creditos/consumos/listar",1,"w-full","py-3","text-white","bg-crediblue-50","hover:bg-blue-600","rounded-lg","font-semibold","text-sm","transition-all","duration-300","shadow-lg","hover:shadow-xl"],["routerLink","/pages/gestion-creditos/detalle-consumo",1,"w-full","py-3","text-white","bg-crediblue-50","hover:bg-blue-600","rounded-lg","font-semibold","text-sm","transition-all","duration-300","shadow-lg","hover:shadow-xl"]],template:function(i,m){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),s(3,"Detalle consumo"),n()(),o(4,"div",3)(5,"div",4)(6,"fuse-card",5)(7,"div",6)(8,"div",7)(9,"span",8),s(10,"Consumos Realizados"),n(),O(),o(11,"svg",9),f(12,"path",10),n()()(),z(),o(13,"button",11),s(14," Consumos Realizados "),n()(),u(15,De,9,0,"fuse-card",5),n()()()),i&2&&(l(15),$(M(1,Ie).includes(m._authService.getRole())?-1:15))},dependencies:[ce,F]});let t=a;return t})();var pt=[{path:"",component:xe},{path:"listar",component:pe},{path:"detalle/:id",component:fe}];export{pt as default};
