import{a as ve}from"./chunk-XZQOQF6T.js";import{a as x,b as B}from"./chunk-K2YVJSWC.js";import{a as be,b as O}from"./chunk-P4PAYY2C.js";import{a as he,b as xe,c as ge}from"./chunk-LIZCFAUR.js";import{a as z}from"./chunk-PPEA2SOT.js";import{a as fe}from"./chunk-OFI6PGZL.js";import{a as ue}from"./chunk-LNQSU7IH.js";import{a as pe,b as $}from"./chunk-YHNXG437.js";import{a as L}from"./chunk-VOLXTRGQ.js";import{a as ce}from"./chunk-AW4GAERC.js";import"./chunk-JC77WSFI.js";import{g as j}from"./chunk-2XRFSBL3.js";import"./chunk-BF24YLJO.js";import"./chunk-CNRP5CR4.js";import{J as me,i as ae}from"./chunk-D3YOWHEC.js";import{b as le}from"./chunk-XK3IPMGB.js";import{b as oe,d as P,e as V}from"./chunk-FSJGACMT.js";import{h as ne}from"./chunk-AIQUJILU.js";import{a as de}from"./chunk-EZC5HSZS.js";import"./chunk-ZFUJRZBK.js";import{ga as re,ha as se,la as N}from"./chunk-V35GW63T.js";import"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import"./chunk-YYQTFAQO.js";import{Cb as M,Dc as E,Eb as h,Gc as I,Lb as A,Mb as s,Nb as C,Qa as m,Rb as J,Sb as K,Tb as Q,Ub as Y,Vb as _,Wb as F,Yb as ee,bc as R,cc as W,dc as te,ec as k,gb as u,ha as c,ib as d,ma as v,pb as U,q as Z,tb as i,ub as t,vb as f,wa as w,wb as T,xa as y,xb as D,xc as ie,ya as X,za as H,zb as q,zc as G}from"./chunk-YBEOGPR3.js";import{a as S}from"./chunk-NEB6MB4Y.js";var ye=(e,n)=>({"bg-green-700":e,"bg-credigray-100":n});function Ee(e,n){if(e&1&&(T(0),f(1,"app-custom-table",18),D()),e&2){let a=h(2);m(),d("columns",a.columns)("displayedColumns",a.columns)("columnPropertyMap",a.columnPropertyMap)("data",a.data)("buttons",a.buttons)("searchTerm",a.searchTerm)}}function Ie(e,n){e&1&&(i(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),s(4,"Informaci\xF3n"),t(),s(5," No hay consumos hasta el momento. "),t()()()),e&2&&(m(2),d("type","info")("appearance","outline"))}function Te(e,n){if(e&1&&u(0,Ee,2,6,"ng-container",17)(1,Ie,6,2,"ng-template",null,1,k),e&2){let a=A(2),r=h();d("ngIf",r.data.length)("ngIfElse",a)}}function De(e,n){if(e&1&&(T(0),f(1,"app-custom-table",18),D()),e&2){let a=h(2);m(),d("columns",a.columns)("displayedColumns",a.columns)("columnPropertyMap",a.columnPropertyMap)("data",a.data)("buttons",a.buttons)("searchTerm",a.searchTerm)}}function Me(e,n){e&1&&(i(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),s(4,"Informaci\xF3n"),t(),s(5," No hay consumos hasta el momento. "),t()()()),e&2&&(m(2),d("type","info")("appearance","outline"))}function Ae(e,n){if(e&1&&u(0,De,2,6,"ng-container",17)(1,Me,6,2,"ng-template",null,1,k),e&2){let a=A(2),r=h();d("ngIf",r.data.length)("ngIfElse",a)}}function Fe(e,n){if(e&1&&(T(0),f(1,"app-custom-table",18),D()),e&2){let a=h(2);m(),d("columns",a.columns)("displayedColumns",a.columns)("columnPropertyMap",a.columnPropertyMap)("data",a.data)("buttons",a.buttons)("searchTerm",a.searchTerm)}}function Re(e,n){e&1&&(i(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),s(4,"Informaci\xF3n"),t(),s(5," No hay consumos hasta el momento. "),t()()()),e&2&&(m(2),d("type","info")("appearance","outline"))}function ke(e,n){if(e&1&&u(0,Fe,2,6,"ng-container",17)(1,Re,6,2,"ng-template",null,1,k),e&2){let a=A(2),r=h();d("ngIf",r.data.length)("ngIfElse",a)}}var _e=(()=>{let n=class n{constructor(){this.datePipe=c(E),this.currencyPipe=c(I),this.router=c(P),this.estadoService=c(L),this.consumoService=c(z),this.selectedTab=x.EN_REVISION,this.searchTerm="",this.fuseService=c(j),this.data=[],this.columns=["Fecha","Empresa","N\xFAmero de factura","Trabajador","Valor factura","Cantidad cuotas","Estado"],this.columnPropertyMap={Fecha:"fechaCreacion",Empresa:"nombreSubEmpresa","N\xFAmero de factura":"numeroFactura",Trabajador:"nombreTrabajador","Valor factura":"montoConsumo","Cantidad cuotas":"cantidadCuotas",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:r=>{console.log("Approve",r),this.selectedData=r,this.router.navigate(["pages/gestion-creditos/consumos/detalle",this.selectedData.id])}}],this.tabChanged=r=>{console.log("tabChangeEvent => ",r),console.log("index => ",r.index),this.tabIndex=r.index,console.log(this.tabIndex),this.selectedTab=r.index==0?x.EN_REVISION:r.index==1?x.APROBADA:r.index==2?x.RECHAZADA:x.EN_REVISION,this.getDetalle(this.selectedTab)}}listenGrid(){this.estadoService.stateGridSolicitudes.asObservable().subscribe(o=>{o.state&&(console.log("Si entro"),console.log(o),this.selectedTab=o.tab==0?x.EN_REVISION:o.tab==1?x.APROBADA:o.tab==2?x.RECHAZADA:x.EN_REVISION,this.tabIndex=o.tab,console.log(this.tabIndex),this.getDetalle(this.selectedTab))})}onSearch(r){let o=r.target;this.searchTerm=o.value.trim().toLowerCase()}getDetalle(r){this.subcription$=this.consumoService.getDetalle(r).pipe(Z(o=>(o.data.forEach(l=>{l.fechaCreacion=this.datePipe.transform(l.fechaCreacion,"dd/MM/yyyy"),l.montoConsumo=this.currencyPipe.transform(l.montoConsumo,"USD","symbol","1.2-2"),l.montoCuotas=this.currencyPipe.transform(l.montoCuotas,"USD","symbol","1.2-2")}),o))).subscribe(o=>{o?this.data=o.data:this.data=[]},o=>{this.data=[]})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getDetalle(this.selectedTab),this.listenGrid()}exportToExcel(r){this.fuseService.open(S({},pe)).afterClosed().subscribe(l=>{if(l==="confirmed"){let p=O.json_to_sheet(r),b=O.book_new();O.book_append_sheet(b,p,"Sheet1"),be(b,"exported_data.xlsx")}})}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=v({type:n,selectors:[["app-grid-consumos"]],standalone:!0,features:[Y([E,I]),_],decls:21,vars:12,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-0","mt-2","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobados"],["label","Rechazados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(o,l){if(o&1){let p=q();i(0,"div",2)(1,"div",3)(2,"div",4),s(3,"Detalle Consumo"),t(),i(4,"div",5)(5,"mat-form-field",6),f(6,"mat-icon",7),i(7,"input",8),M("input",function(g){return w(p),y(l.onSearch(g))}),t()(),i(8,"button",9),M("click",function(){return w(p),y(l.exportToExcel(l.data))}),i(9,"span"),s(10," Exportar "),t()()()(),i(11,"div",10)(12,"div",11)(13,"mat-tab-group",12,0),Q("selectedIndexChange",function(g){return w(p),K(l.tabIndex,g)||(l.tabIndex=g),y(g)}),M("selectedTabChange",function(g){return w(p),y(l.tabChanged(g))}),i(15,"mat-tab",13),u(16,Te,3,2,"ng-template",14),t(),i(17,"mat-tab",15),u(18,Ae,3,2,"ng-template",14),t(),i(19,"mat-tab",16),u(20,ke,3,2,"ng-template",14),t()()()()()}o&2&&(m(5),d("subscriptSizing","dynamic"),m(),d("svgIcon","heroicons_solid:magnifying-glass"),m(),d("autocomplete","off")("placeholder","Buscar"),m(),d("color","primary")("ngClass",ee(9,ye,l.data.length,!l.data.length))("disabled",!l.data.length),m(5),d("animationDuration","500"),J("selectedIndex",l.tabIndex))},dependencies:[ce,re,ae,N,me,xe,he,ge,G,de,ie]});let e=n;return e})();var Ge=()=>["/pages/gestion-creditos/consumos/listar"];function Pe(e,n){if(e&1&&(i(0,"div",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"div")(5,"h3",14),s(6,"Empresa"),t()(),f(7,"p",15),t(),i(8,"div",13)(9,"div")(10,"h3",14),s(11,"Trabajador"),t()(),f(12,"p",15),t(),i(13,"div",13)(14,"div")(15,"h3",14),s(16,"Fecha de compra"),t()(),i(17,"p",15),s(18),R(19,"date"),t()(),i(20,"div",13)(21,"div")(22,"h3",14),s(23,"N\xFAmero de factura"),t()(),i(24,"p",15),s(25),t()(),i(26,"div",13)(27,"div")(28,"h3",14),s(29,"Valor factura"),t()(),i(30,"p",15),s(31),R(32,"currency"),t()(),i(33,"div",16)(34,"p",14),s(35,"Valor cuota"),t(),i(36,"p",15),s(37),R(38,"currency"),t()(),i(39,"div",17)(40,"p",14),s(41,"Cantidad cuotas"),t(),i(42,"p",15),s(43),t()()()()()),e&2){let a=h(2);m(18),C(te(19,5,a.detalle.fechaCreacion,"dd/MM/yyyy")),m(7),C(a.detalle.numeroFactura),m(6),C(W(32,8,a.detalle.montoConsumo)),m(6),C(W(38,10,a.detalle.montoCuotas)),m(6),C(a.detalle.cantidadCuotas)}}function Ve(e,n){if(e&1&&(i(0,"div",8),u(1,Pe,44,12,"div",9),t()),e&2){let a=h();m(),d("ngIf",a.detalle)}}var Se=(()=>{let n=class n{constructor(){this.toasService=c(ue),this.fuseService=c(j),this.estadosDatosService=c(L),this.detalleConsumoService=c(z),this.activatedRoute=c(oe),this.router=c(P),this.swalService=c(fe),this.idCredito="",this.CodigosDetalleConsumo=B}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getDetalle(this.idCredito)}getDetalle(r){this.subcription$=this.detalleConsumoService.getConsumo(r).subscribe(o=>{console.log(o),this.detalle=o.data})}onSave(){let r={idEstado:B.APROBADA,id:this.detalle.id};this.fuseService.open(S({},$)).afterClosed().subscribe(l=>{l==="confirmed"&&(this.subcription$=this.detalleConsumoService.patchConsumo(r).subscribe(p=>{p.isExitoso&&(this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["/pages/gestion-creditos/consumos/listar"]),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:0}))},p=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}))})}onReject(){let r={idEstado:B.RECHAZADA,id:this.detalle.id};this.fuseService.open(S({},$)).afterClosed().subscribe(l=>{l==="confirmed"&&(this.subcription$=this.detalleConsumoService.patchConsumo(r).subscribe(p=>{p.isExitoso&&(this.toasService.toasAlertWarn({message:"Registro Creado o Actualizado con Exito.",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/consumos/listar"]),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:0}))},p=>{this.toasService.toasAlertWarn({message:"Ha ocurrido un error!!!!",actionMessage:"Cerrar",duration:3e3})}))})}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=v({type:n,selectors:[["app-form-consumos"]],standalone:!0,features:[_],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],["class","w-full h-full px-4",4,"ngIf"],[1,"w-full","h-full","px-4"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","pt-4","border-t"]],template:function(o,l){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),f(6,"mat-icon",5),t()(),i(7,"h2",6),s(8,"Detalle consumo"),t()(),u(9,Ve,2,1,"div",7),t()()()),o&2&&(m(5),d("routerLink",F(3,Ge)),m(),d("svgIcon","heroicons_outline:arrow-long-left"),m(3),d("ngIf",l.detalle))},dependencies:[ne,I,E,se,N,G,V]});let e=n;return e})();var Ne=()=>["Super Admin","Analista"];function je(e,n){e&1&&(i(0,"fuse-card",5)(1,"div",6)(2,"div",7)(3,"span",8),s(4,"Realizar Detalle Consumo"),t(),X(),i(5,"svg",9),f(6,"path",10),t()()(),H(),i(7,"button",12),s(8," Realizar Detalle Consumo "),t()())}var we=(()=>{let n=class n{constructor(){this._authService=c(le)}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=v({type:n,selectors:[["app-main-detalle-consumo"]],standalone:!0,features:[_],decls:16,vars:2,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-row","items-baseline","flex-wrap","gap-6","justify-center","overflow-hidden","sm:overflow-y-auto","bg-gray-100","sm:p-2"],[1,"filter-list","flex","w-full","max-w-lg","flex-col","p-8","sm:p-10","mt-6","shadow-xl","rounded-xl","bg-white","hover:shadow-2xl","transition-all","duration-300","transform","hover:scale-105"],[1,"flex","justify-between","items-center","mb-6"],[1,"flex","items-center","space-x-3"],[1,"font-semibold","text-2xl","text-blue-900"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-blue-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13 7H7v6m6 0h5m-8 4H7m6 0h5"],["routerLink","/pages/gestion-creditos/consumos/listar",1,"w-full","py-3","text-white","bg-crediblue-50","hover:bg-blue-600","rounded-lg","font-semibold","text-sm","transition-all","duration-300","shadow-lg","hover:shadow-xl"],["routerLink","/pages/gestion-creditos/detalle-consumo",1,"w-full","py-3","text-white","bg-crediblue-50","hover:bg-blue-600","rounded-lg","font-semibold","text-sm","transition-all","duration-300","shadow-lg","hover:shadow-xl"]],template:function(o,l){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),s(3,"Detalle consumo"),t()(),i(4,"div",3)(5,"div",4)(6,"fuse-card",5)(7,"div",6)(8,"div",7)(9,"span",8),s(10,"Consumos Realizados"),t(),X(),i(11,"svg",9),f(12,"path",10),t()()(),H(),i(13,"button",11),s(14," Consumos Realizados "),t()(),u(15,je,9,0,"fuse-card",5),t()()()),o&2&&(m(15),U(F(1,Ne).includes(l._authService.getRole())?-1:15))},dependencies:[ve,V]});let e=n;return e})();var Ft=[{path:"",component:we},{path:"listar",component:_e},{path:"detalle/:id",component:Se}];export{Ft as default};
