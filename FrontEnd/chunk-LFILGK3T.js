import{b as bt,c as gt,d as ht,e as xt}from"./chunk-CDQQTX3U.js";import{a as Ct}from"./chunk-X5I6LPCH.js";import{a as vt}from"./chunk-7X5NAOW5.js";import{a as dt,b as ct,c as ut}from"./chunk-26ECEG3D.js";import{a as ft}from"./chunk-CGUVD37V.js";import{a as f}from"./chunk-6IEWE3OU.js";import{a as P,b as pt}from"./chunk-UB4OQRWZ.js";import{a as mt,b as lt}from"./chunk-SQX6LQ4U.js";import{k as ot}from"./chunk-NOTZUBRJ.js";import{g as Y}from"./chunk-JGIPM7RV.js";import{A as st,F as w,b as Z,e as tt,i as M,q as at,r as nt,t as rt}from"./chunk-AZYYSVXK.js";import{$ as X,ea as et,fa as it,ja as F}from"./chunk-JWHB23S2.js";import"./chunk-TAOXPEWO.js";import{a as O}from"./chunk-YPPCX2UT.js";import{b as K,d as D,e as W}from"./chunk-7GFVIFOO.js";import{f as U,g as T,j as E,l as J,r as A}from"./chunk-TI3VW26V.js";import{$ as _,$b as L,Cb as n,Db as r,Eb as c,Fb as C,Gb as v,Ib as $,Ob as G,Qb as b,Xb as B,Yb as s,Za as m,Zb as u,dc as z,ea as S,ec as I,fa as p,fc as q,ka as y,mc as j,nc as H,oc as Q,pb as d,q as h,rb as l,ua as V,va as R}from"./chunk-MZ7JCHPI.js";import"./chunk-NEB6MB4Y.js";var N=(()=>{let a=class a{constructor(t,i){this._http=t,this.appSettings=i}getCreditos(t){return this._http.get(`${this.appSettings.creditos.url.base}/${t}`)}getCredito(t){return this._http.get(`${this.appSettings.creditos.url.base}/${t}`)}};a.\u0275fac=function(i){return new(i||a)(S(A),S(O))},a.\u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var x=function(e){return e.EN_PROCESO="EnProceso",e.BLOQUEADO="Bloqueado",e.VENCIDO="Vencido",e.EN_REVISION="EnRevision",e.CERRADO="Cerrado",e.APROBADO="Aprobado",e}(x||{});function Dt(e,a){if(e&1&&(C(0),c(1,"app-custom-table",17),v()),e&2){let o=b(2);m(),l("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons)}}function Mt(e,a){if(e&1&&d(0,Dt,2,5,"ng-container",16),e&2){let o=b();l("ngIf",o.data.length)}}function Ft(e,a){if(e&1&&(C(0),c(1,"app-custom-table",17),v()),e&2){let o=b(2);m(),l("columns",o.columnsAprobadas)("displayedColumns",o.columnsAprobadas)("columnPropertyMap",o.columnPropertyAprobadas)("data",o.data)("buttons",o.buttons)}}function Ot(e,a){if(e&1&&d(0,Ft,2,5,"ng-container",16),e&2){let o=b();l("ngIf",o.data.length)}}function wt(e,a){if(e&1&&(C(0),c(1,"app-custom-table",17),v()),e&2){let o=b(2);m(),l("columns",o.columnsAprobadas)("displayedColumns",o.columnsAprobadas)("columnPropertyMap",o.columnPropertyAprobadas)("data",o.data)("buttons",o.buttons)}}function Pt(e,a){if(e&1&&d(0,wt,2,5,"ng-container",16),e&2){let o=b();l("ngIf",o.data.length)}}function Nt(e,a){if(e&1&&(C(0),c(1,"app-custom-table",17),v()),e&2){let o=b(2);m(),l("columns",o.columnsAprobadas)("displayedColumns",o.columnsAprobadas)("columnPropertyMap",o.columnPropertyAprobadas)("data",o.data)("buttons",o.buttons)}}function jt(e,a){if(e&1&&d(0,Nt,2,5,"ng-container",16),e&2){let o=b();l("ngIf",o.data.length)}}var St=(()=>{let a=class a{constructor(){this.datePipe=p(E),this.router=p(D),this.estadoDatosService=p(P),this.creditoService=p(N),this.selectedTab=x.EN_REVISION,this.data=[],this.columns=["Fecha de solicitud","Solicitante","Cupo solicitado","Empresa","Estado"],this.columnsAprobadas=["Fecha de aprobaci\xF3n","Solicitante","Cupo aprobado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo solicitado":"cupoSolicitado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.columnPropertyAprobadas={"Fecha de aprobaci\xF3n":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo aprobado":"cupoAprobado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:t=>{console.log("Approve",t),this.selectedData=t,this.router.navigate(["pages/gestion-creditos/creditos/detalle",this.selectedData.id])}}],this.tabChanged=t=>{console.log("tabChangeEvent => ",t),console.log("index => ",t.index),this.selectedTab=t.index==0?x.EN_REVISION:t.index==1?x.APROBADO:t.index==2?x.VENCIDO:t.index==3?x.BLOQUEADO:x.EN_REVISION,this.getCreditos(this.selectedTab)}}getCreditos(t){this.subcription$=this.creditoService.getCreditos(t).pipe(h(i=>(i.data.forEach(g=>{g.estado?g.estado=f.ACTIVO:g.estado=f.INACTIVO}),i)),h(i=>(i.data.forEach(g=>{g.fechaCreacion=this.datePipe.transform(g.fechaCreacion,"dd/MM/yyyy")}),i))).subscribe(i=>{i?this.data=i.data:this.data=[]},i=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(i=>{i&&this.getCreditos(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCreditos(this.selectedTab),this.listenGrid()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=y({type:a,selectors:[["app-grid-creditos"]],standalone:!0,features:[z([E]),I],decls:20,vars:5,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobado"],["label","Vencido"],["label","Bloqueado"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(i,g){if(i&1){let yt=$();n(0,"div",1)(1,"div",2)(2,"div",3),s(3,"Cr\xE9ditos"),r(),n(4,"div",4)(5,"mat-form-field",5),c(6,"mat-icon",6)(7,"input",7),r()()(),n(8,"div",8)(9,"div",9)(10,"mat-tab-group",10,0),G("selectedTabChange",function(It){return V(yt),R(g.tabChanged(It))}),n(12,"mat-tab",11),d(13,Mt,1,1,"ng-template",12),r(),n(14,"mat-tab",13),d(15,Ot,1,1,"ng-template",12),r(),n(16,"mat-tab",14),d(17,Pt,1,1,"ng-template",12),r(),n(18,"mat-tab",15),d(19,jt,1,1,"ng-template",12),r()()()()()}i&2&&(m(5),l("subscriptSizing","dynamic"),m(),l("svgIcon","heroicons_solid:magnifying-glass"),m(),l("autocomplete","off")("placeholder","Buscar"),m(3),l("animationDuration","500"))},dependencies:[lt,M,F,w,ht,gt,xt,T]});let e=a;return e})();var Et=(()=>{let a=class a{constructor(t,i){this._http=t,this.appSettings=i}getEstadoCreditos(){return this._http.get(this.appSettings.estadoCreditos.url.base)}};a.\u0275fac=function(i){return new(i||a)(S(A),S(O))},a.\u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var kt=()=>["/pages/gestion-creditos/solicitudes"];function Vt(e,a){if(e&1&&(n(0,"mat-option",24),s(1),r()),e&2){let o=a.$implicit;l("value",o.id),m(),u(o.nombre)}}function Rt(e,a){if(e&1&&(n(0,"mat-option",24),s(1),r()),e&2){let o=a.$implicit;l("value",o.id),m(),u(o.nombre)}}function $t(e,a){if(e&1&&(n(0,"mat-option",24),s(1),r()),e&2){let o=a.$implicit;l("value",o.id),m(),u(o.nombre)}}function Gt(e,a){if(e&1&&(n(0,"div",9)(1,"div",10)(2,"div")(3,"h3",11),s(4),r(),n(5,"p",12),s(6,"Identificaci\xF3n: "),n(7,"span",13),s(8),r()(),n(9,"p",12),s(10,"Empresa: "),n(11,"span",13),s(12),r()(),n(13,"p",14),s(14,"Cargo: "),n(15,"span",13),s(16),r()(),n(17,"p",12),s(18,"Correo: "),n(19,"span",13),s(20),r()(),n(21,"p",12),s(22,"Direcci\xF3n: "),n(23,"span",13),s(24),r()(),n(25,"p",12),s(26,"Tel\xE9fono: "),n(27,"span",13),s(28),r()()(),n(29,"div")(30,"p",12),s(31,"N\xFAmero de solicitud: #12345"),r(),n(32,"p",12),s(33,"Monto solicitado: "),n(34,"span",13),s(35),j(36,"currency"),r()(),n(37,"p",12),s(38,"Fecha de Solicitud: "),n(39,"span",13),s(40),j(41,"date"),r()()()(),c(42,"hr"),n(43,"div")(44,"p",15),s(45,"Informaci\xF3n de Cr\xE9dito"),r(),n(46,"form")(47,"mat-form-field",16)(48,"mat-label"),s(49,"Tipo de pago"),r(),n(50,"mat-select"),d(51,Vt,2,2,"mat-option",17),r()(),n(52,"mat-form-field",16)(53,"mat-label"),s(54,"Estado de cr\xE9dito"),r(),n(55,"mat-select"),d(56,Rt,2,2,"mat-option",17),r()(),n(57,"mat-form-field",16)(58,"mat-label"),s(59,"Tasa de interes"),r(),n(60,"mat-select"),d(61,$t,2,2,"mat-option",17),r()(),n(62,"mat-form-field",16)(63,"mat-label"),s(64,"Cupo aprobado"),r(),c(65,"input",18),r(),n(66,"mat-form-field",16)(67,"mat-label"),s(68,"Fecha de vencimiento"),r(),c(69,"input",19)(70,"mat-datepicker-toggle",20)(71,"mat-datepicker",null,0),r(),n(73,"mat-form-field",16)(74,"mat-label"),s(75,"Fecha de corte"),r(),c(76,"input",19)(77,"mat-datepicker-toggle",20)(78,"mat-datepicker",null,0),r()()(),C(80),n(81,"div",21)(82,"button",22),s(83," Aprobar "),r(),n(84,"button",23),s(85," Rechazar "),r()(),v(),r()),e&2){let o=B(72),t=b();m(4),L("",t.items.trabajador.primerNombre," ",t.items.trabajador.segundoNombre," ",t.items.trabajador.primerApellido," ",t.items.trabajador.segundoApellido," "),m(4),u(t.items.trabajador.numDoc),m(4),u(t.items.nombreSubEmpresa),m(4),u(t.items.trabajador.cargo),m(4),u(t.items.trabajador.correo),m(4),u(t.items.trabajador.direccion),m(4),u(t.items.trabajador.telefono),m(7),u(H(36,19,t.items.cupo)),m(5),u(Q(41,21,t.items.fechaCreacion,"dd/MM/yyyy")),m(11),l("ngForOf",t.data),m(5),l("ngForOf",t.estadoCredito),m(5),l("ngForOf",t.tasas),m(8),l("matDatepicker",o),m(),l("for",o),m(6),l("matDatepicker",o),m(),l("for",o)}}var _t=(()=>{let a=class a{constructor(){this.toasService=p(pt),this.fuseService=p(ot),this.estadosDatosService=p(P),this.activatedRoute=p(K),this.creditoService=p(N),this.router=p(D),this.tiposPagos=p(vt),this.capitalInversion=p(ft),this.estadoCreditoService=p(Et),this.tasaService=p(Ct),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.CodigosEstadosSolicitudes=bt}ngOnInit(){let t=this.activatedRoute.snapshot.paramMap.get("id");this.getCredito(t),this.getTiposPagos(),this.getCapital(),this.getEstadoCredito(),this.getTasas()}getCredito(t){this.subcription$=this.creditoService.getCredito(t).subscribe(i=>{this.items=i.data,this.detalleEmpleado=i.data})}getTiposPagos(){this.subcription$=this.tiposPagos.getTiposPagos().pipe(h(t=>(t.data.forEach(i=>{i.estado?i.estado=f.ACTIVO:i.estado=f.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}getTasas(){this.subcription$=this.tasaService.getTass().pipe(h(t=>(t.data.forEach(i=>{i.estado?i.estado=f.ACTIVO:i.estado=f.INACTIVO}),t))).subscribe(t=>{this.tasas=t.data})}getEstadoCredito(){this.subcription$=this.estadoCreditoService.getEstadoCreditos().pipe(h(t=>(t.data.forEach(i=>{i.estado?i.estado=f.ACTIVO:i.estado=f.INACTIVO}),t))).subscribe(t=>{this.estadoCredito=t.data})}getCapital(){this.subcription$=this.capitalInversion.getCapitales().pipe(h(t=>(t.data.forEach(i=>{i.estado?i.estado=f.ACTIVO:i.estado=f.INACTIVO}),t))).subscribe(t=>{this.capital=t.data})}ngOnDestroy(){this.subcription$.unsubscribe()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=y({type:a,selectors:[["app-form-detalle"]],standalone:!0,features:[I],decls:10,vars:4,consts:[["picker",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"text-gray-600","font-semibold"],[1,"text-lg","text-gray-600","font-bold","mb-10"],[1,"w-full"],[3,"value",4,"ngFor","ngForOf"],["matInput",""],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],[1,"flex","justify-between","items-center","mt-10"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200"],[3,"value"]],template:function(i,g){i&1&&(n(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div")(5,"a",5),c(6,"mat-icon",6),r()(),n(7,"h2",7),s(8,"Detalle de Cr\xE9dito"),r()(),d(9,Gt,86,24,"div",8),r()()()),i&2&&(m(5),l("routerLink",q(3,kt)),m(),l("svgIcon","heroicons_outline:arrow-long-left"),m(3),l("ngIf",g.items))},dependencies:[Y,it,F,W,T,J,E,et,M,Z,X,mt,U,st,rt,at,nt,w,dt,ct,ut,tt]});let e=a;return e})();var je=[{path:"",component:St},{path:"detalle/:id",component:_t}];export{je as default};
