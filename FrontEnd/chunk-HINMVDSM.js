import{b as Ot,c as Vt,d as Nt,e as jt}from"./chunk-MMIVTPZO.js";import{a as kt}from"./chunk-L6ZIXEOL.js";import{a as Rt}from"./chunk-YPOMFP6S.js";import{a as Mt,b as Ft,c as wt}from"./chunk-RJLDBFJS.js";import{a as it}from"./chunk-DJUJLN2G.js";import{a as Pt}from"./chunk-2KT7HO5Z.js";import{a as h}from"./chunk-6IEWE3OU.js";import{a as tt}from"./chunk-B3JKLSIR.js";import{a as Tt,c as w,d as et}from"./chunk-NYXXZLC7.js";import{a as At}from"./chunk-XLGI4M45.js";import"./chunk-FLYHOBTN.js";import{k as Z}from"./chunk-7MJ462UO.js";import{h as U}from"./chunk-C2BDAT5Z.js";import{B as It,D as X,E as Dt,I as Y,b as ht,e as xt,i as J,l as gt,p as Ct,q as St,t as yt,w as Et,x as _t}from"./chunk-DESY5WO2.js";import{$ as bt,Q as q,R as Q,ea as vt,fa as W,ja as F}from"./chunk-JWHB23S2.js";import"./chunk-TAOXPEWO.js";import{a as K}from"./chunk-QEQK4NML.js";import{b as z,d as M,e as H}from"./chunk-7GFVIFOO.js";import{f as ft,g as T,j as x,l as $,r as L}from"./chunk-TI3VW26V.js";import{$ as V,$b as B,Cb as e,Db as n,Eb as u,Fb as S,Gb as y,Ib as k,Ob as R,Qb as f,Xb as st,Yb as r,Za as s,Zb as p,_b as ut,dc as I,ea as E,ec as D,fa as l,fc as G,ka as _,mc as v,nc as A,oc as O,pb as c,q as g,rb as d,sb as ct,ua as N,va as j}from"./chunk-MZ7JCHPI.js";import{a as nt,d as pt}from"./chunk-NEB6MB4Y.js";var P=(()=>{let m=class m{constructor(a,t){this._http=a,this.appSettings=t}getCreditos(a){return this._http.get(`${this.appSettings.creditos.url.base}/${a}`)}getCredito(a){return this._http.get(`${this.appSettings.creditos.url.base}/${a}`)}putCredito(a){let t=a.id;return delete a.id,this._http.put(`${this.appSettings.creditos.url.base}/${t}`,a)}};m.\u0275fac=function(t){return new(t||m)(E(L),E(K))},m.\u0275prov=V({token:m,factory:m.\u0275fac,providedIn:"root"});let i=m;return i})();var C=function(i){return i.EN_PROCESO="EnProceso",i.BLOQUEADO="Bloqueado",i.VENCIDO="Vencido",i.EN_REVISION="EnRevision",i.CERRADO="Cerrado",i.APROBADO="Aprobado",i}(C||{}),mt=function(i){return i.APROBADO="e626ea69-e915-5462-be9a-905326714782",i.RECHAZADA="",i}(mt||{});function Jt(i,m){if(i&1&&(S(0),u(1,"app-custom-table",17),y()),i&2){let o=f(2);s(),d("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons)}}function Wt(i,m){if(i&1&&c(0,Jt,2,5,"ng-container",16),i&2){let o=f();d("ngIf",o.data.length)}}function Zt(i,m){if(i&1&&(S(0),u(1,"app-custom-table",17),y()),i&2){let o=f(2);s(),d("columns",o.columnsAprobadas)("displayedColumns",o.columnsAprobadas)("columnPropertyMap",o.columnPropertyAprobadas)("data",o.data)("buttons",o.buttonsView)}}function Kt(i,m){if(i&1&&c(0,Zt,2,5,"ng-container",16),i&2){let o=f();d("ngIf",o.data.length)}}function Xt(i,m){if(i&1&&(S(0),u(1,"app-custom-table",17),y()),i&2){let o=f(2);s(),d("columns",o.columnsAprobadas)("displayedColumns",o.columnsAprobadas)("columnPropertyMap",o.columnPropertyAprobadas)("data",o.data)("buttons",o.buttons)}}function Yt(i,m){if(i&1&&c(0,Xt,2,5,"ng-container",16),i&2){let o=f();d("ngIf",o.data.length)}}function te(i,m){if(i&1&&(S(0),u(1,"app-custom-table",17),y()),i&2){let o=f(2);s(),d("columns",o.columnsAprobadas)("displayedColumns",o.columnsAprobadas)("columnPropertyMap",o.columnPropertyAprobadas)("data",o.data)("buttons",o.buttons)}}function ee(i,m){if(i&1&&c(0,te,2,5,"ng-container",16),i&2){let o=f();d("ngIf",o.data.length)}}var Bt=(()=>{let m=class m{constructor(){this.datePipe=l(x),this.router=l(M),this.estadoDatosService=l(w),this.creditoService=l(P),this.selectedTab=C.EN_REVISION,this.data=[],this.columns=["Fecha de solicitud","Solicitante","Cupo solicitado","Empresa","Estado"],this.columnsAprobadas=["Fecha de aprobaci\xF3n","Solicitante","Cupo aprobado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo solicitado":"cupoSolicitado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.columnPropertyAprobadas={"Fecha de aprobaci\xF3n":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo aprobado":"cupoAprobado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:a=>{console.log("Approve",a),this.selectedData=a,this.router.navigate(["pages/gestion-creditos/creditos/detalle",this.selectedData.id])}}],this.buttonsView=[{label:"View",icon:"visibility",action:a=>{console.log("Approve",a),this.selectedData=a,this.router.navigate(["pages/gestion-creditos/creditos/view-detalle",this.selectedData.id])}}],this.tabChanged=a=>{console.log("tabChangeEvent => ",a),console.log("index => ",a.index),this.selectedTab=a.index==0?C.EN_REVISION:a.index==1?C.APROBADO:a.index==2?C.VENCIDO:a.index==3?C.BLOQUEADO:C.EN_REVISION,this.getCreditos(this.selectedTab)}}getCreditos(a){this.subcription$=this.creditoService.getCreditos(a).pipe(g(t=>(t.data.forEach(b=>{b.estado?b.estado=h.ACTIVO:b.estado=h.INACTIVO}),t)),g(t=>(t.data.forEach(b=>{b.fechaCreacion=this.datePipe.transform(b.fechaCreacion,"dd/MM/yyyy")}),t))).subscribe(t=>{t?this.data=t.data:this.data=[]},t=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getCreditos(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCreditos(this.selectedTab),this.listenGrid()}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=_({type:m,selectors:[["app-grid-creditos"]],standalone:!0,features:[I([x]),D],decls:20,vars:5,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobado"],["label","Vencido"],["label","Bloqueado"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(t,b){if(t&1){let at=k();e(0,"div",1)(1,"div",2)(2,"div",3),r(3,"Cr\xE9ditos"),n(),e(4,"div",4)(5,"mat-form-field",5),u(6,"mat-icon",6)(7,"input",7),n()()(),e(8,"div",8)(9,"div",9)(10,"mat-tab-group",10,0),R("selectedTabChange",function(rt){return N(at),j(b.tabChanged(rt))}),e(12,"mat-tab",11),c(13,Wt,1,1,"ng-template",12),n(),e(14,"mat-tab",13),c(15,Kt,1,1,"ng-template",12),n(),e(16,"mat-tab",14),c(17,Yt,1,1,"ng-template",12),n(),e(18,"mat-tab",15),c(19,ee,1,1,"ng-template",12),n()()()()()}t&2&&(s(5),d("subscriptSizing","dynamic"),s(),d("svgIcon","heroicons_solid:magnifying-glass"),s(),d("autocomplete","off")("placeholder","Buscar"),s(3),d("animationDuration","500"))},dependencies:[tt,J,F,Y,Nt,Vt,jt,T]});let i=m;return i})();var Gt=(()=>{let m=class m{constructor(a,t){this._http=a,this.appSettings=t}getEstadoCreditos(){return this._http.get(this.appSettings.estadoCreditos.url.base)}};m.\u0275fac=function(t){return new(t||m)(E(L),E(K))},m.\u0275prov=V({token:m,factory:m.\u0275fac,providedIn:"root"});let i=m;return i})();var ie=()=>["/pages/gestion-creditos/creditos"];function oe(i,m){if(i&1&&(e(0,"mat-option",27),r(1),n()),i&2){let o=m.$implicit;d("value",o.id),s(),p(o.nombre)}}function ae(i,m){if(i&1&&(e(0,"mat-option",27),r(1),n()),i&2){let o=m.$implicit;d("value",o.id),s(),p(o.detalleInversion)}}function re(i,m){if(i&1&&(e(0,"mat-option",27),r(1),n()),i&2){let o=m.$implicit;d("value",o.id),s(),p(o.porcentaje)}}function ne(i,m){if(i&1){let o=k();e(0,"div",10)(1,"div",11)(2,"div")(3,"h3",12),r(4),n(),e(5,"p",13),r(6,"Identificaci\xF3n: "),e(7,"span",14),r(8),n()(),e(9,"p",13),r(10,"Empresa: "),e(11,"span",14),r(12),n()(),e(13,"p",15),r(14,"Cargo: "),e(15,"span",14),r(16),n()(),e(17,"p",13),r(18,"Correo: "),e(19,"span",14),r(20),n()(),e(21,"p",13),r(22,"Direcci\xF3n: "),e(23,"span",14),r(24),n()(),e(25,"p",13),r(26,"Tel\xE9fono: "),e(27,"span",14),r(28),n()()(),e(29,"div")(30,"p",13),r(31,"N\xFAmero de solicitud: #12345"),n(),e(32,"p",13),r(33,"Monto solicitado: "),e(34,"span",14),r(35),v(36,"currency"),n()(),e(37,"p",13),r(38,"Fecha de Solicitud: "),e(39,"span",14),r(40),v(41,"date"),n()()()(),u(42,"hr"),e(43,"div")(44,"p",16),r(45,"Informaci\xF3n de Cr\xE9dito"),n(),e(46,"form",17)(47,"mat-form-field",18)(48,"mat-label"),r(49,"Tipo de pago"),n(),e(50,"mat-select",19),c(51,oe,2,2,"mat-option",20),n()(),e(52,"mat-form-field",18)(53,"mat-label"),r(54,"Capital de inversi\xF3n"),n(),e(55,"mat-select",19),c(56,ae,2,2,"mat-option",20),n()(),e(57,"mat-form-field",18)(58,"mat-label"),r(59,"Tasa de interes"),n(),e(60,"mat-select",19),c(61,re,2,2,"mat-option",20),n()(),e(62,"mat-form-field",18)(63,"mat-label"),r(64,"Cupo aprobado"),n(),u(65,"input",21),n(),e(66,"mat-form-field",18)(67,"mat-label"),r(68,"Fecha de vencimiento"),n(),u(69,"input",22)(70,"mat-datepicker-toggle",23)(71,"mat-datepicker",null,0),n(),e(73,"mat-form-field",18)(74,"mat-label"),r(75,"Fecha de corte"),n(),u(76,"input",22)(77,"mat-datepicker-toggle",23)(78,"mat-datepicker",null,1),n()()(),S(80),e(81,"div",24)(82,"button",25),R("click",function(){N(o);let t=f();return j(t.onSave())}),r(83," Aprobar "),n(),e(84,"button",26),r(85," Rechazar "),n()(),y(),n()}if(i&2){let o=st(72),a=st(79),t=f();s(4),B("",t.items.trabajador.primerNombre," ",t.items.trabajador.segundoNombre," ",t.items.trabajador.primerApellido," ",t.items.trabajador.segundoApellido," "),s(4),p(t.items.trabajador.numDoc),s(4),p(t.items.nombreSubEmpresa),s(4),p(t.items.trabajador.cargo),s(4),p(t.items.trabajador.correo),s(4),p(t.items.trabajador.direccion),s(4),p(t.items.trabajador.telefono),s(7),p(A(36,26,t.items.cupoSolicitado)),s(5),p(O(41,28,t.items.fechaCreacion,"dd/MM/yyyy")),s(6),d("formGroup",t.form),s(4),d("formControlName","idTipoPago"),s(),d("ngForOf",t.data),s(4),d("formControlName","idCapitalInversion"),s(),d("ngForOf",t.capital),s(4),d("formControlName","idTasaInteres"),s(),d("ngForOf",t.tasas),s(4),d("formControlName","cupoAprobado"),s(4),d("matDatepicker",o)("formControlName","fechaVencimiento"),s(),d("for",o),s(6),d("matDatepicker",a)("formControlName","fechaCorte"),s(),d("for",a)}}var $t=(()=>{let m=class m{constructor(){this.toasService=l(et),this.fuseService=l(Z),this.estadosDatosService=l(w),this.activatedRoute=l(z),this.creditoService=l(P),this.router=l(M),this.tiposPagos=l(Rt),this.capitalInversion=l(Pt),this.estadoCreditoService=l(Gt),this.tasaService=l(kt),this.fb=l(It),this.datePipe=l(x),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this.CodigosEstadosSolicitudes=Ot}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito),this.getTiposPagos(),this.getCapital(),this.getEstadoCredito(),this.getTasas(),this.createForm()}getCredito(a){this.subcription$=this.creditoService.getCredito(a).subscribe(t=>{this.items=t.data,this.detalleEmpleado=t.data})}getTiposPagos(){this.subcription$=this.tiposPagos.getTiposPagos().pipe(g(a=>(a.data.forEach(t=>{t.estado?t.estado=h.ACTIVO:t.estado=h.INACTIVO}),a))).subscribe(a=>{this.data=a.data})}getTasas(){this.subcription$=this.tasaService.getTass().pipe(g(a=>(a.data.forEach(t=>{t.estado?t.estado=h.ACTIVO:t.estado=h.INACTIVO}),a))).subscribe(a=>{this.tasas=a.data})}getEstadoCredito(){this.subcription$=this.estadoCreditoService.getEstadoCreditos().pipe(g(a=>(a.data.forEach(t=>{t.estado?t.estado=h.ACTIVO:t.estado=h.INACTIVO}),a))).subscribe(a=>{this.estadoCredito=a.data})}getCapital(){this.subcription$=this.capitalInversion.getCapitales().pipe(g(a=>(a.data.forEach(t=>{t.estado?t.estado=h.ACTIVO:t.estado=h.INACTIVO}),a))).subscribe(a=>{this.capital=a.data})}onSave(){if(this.form.valid){let a=this.form.getRawValue(),{fechaVencimiento:b,fechaCorte:at,cupoAprobado:dt}=a,rt=pt(a,["fechaVencimiento","fechaCorte","cupoAprobado"]),zt=this.datePipe.transform(b,"dd/MM/yyyy"),Ht=this.datePipe.transform(at,"dd/MM/yyyy"),lt=nt({fechaVencimiento:zt,fechaCorte:Ht,idEstadoCredito:mt.APROBADO,cupoAprobado:Number(dt),id:this.idCredito},rt);console.log(lt),this.fuseService.open(nt({},Tt)).afterClosed().subscribe(qt=>{qt==="confirmed"&&this.creditoService.putCredito(lt).subscribe(ce=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/creditos"])})})}}createForm(){this.form=this.fb.group({cupoAprobado:[""],idTipoPago:[""],idCapitalInversion:[""],idTasaInteres:[""],fechaVencimiento:[""],fechaCorte:[""]})}ngOnDestroy(){this.subcription$.unsubscribe()}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=_({type:m,selectors:[["app-form-detalle"]],standalone:!0,features:[I([{provide:Q,useClass:it},{provide:q,useValue:"en-GB"},x]),D],decls:10,vars:4,consts:[["picker",""],["fechaCorte",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"text-gray-600","font-semibold"],[1,"text-lg","text-gray-600","font-bold","mb-10"],[3,"formGroup"],[1,"w-full"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","mask","separator.0","thousandSeparator",".",3,"formControlName"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","justify-end","items-center","mt-7","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200"],[3,"value"]],template:function(t,b){t&1&&(e(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div")(5,"a",6),u(6,"mat-icon",7),n()(),e(7,"h2",8),r(8,"Detalle de Cr\xE9dito"),n()(),c(9,ne,86,31,"div",9),n()()()),t&2&&(s(5),d("routerLink",G(3,ie)),s(),d("svgIcon","heroicons_outline:arrow-long-left"),s(3),d("ngIf",b.items))},dependencies:[U,W,F,H,T,$,x,vt,J,ht,bt,At,ft,X,yt,gt,Ct,St,Y,Mt,Ft,wt,xt,Dt,Et,_t]});let i=m;return i})();var se=()=>["/pages/gestion-creditos/creditos"];function me(i,m){i&1&&(e(0,"p",15),r(1,"Movimientos"),n())}function de(i,m){if(i&1&&(e(0,"div",16),u(1,"app-custom-table",17),n()),i&2){let o=f(2);s(),d("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)}}function le(i,m){if(i&1&&(e(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),r(4),n(),e(5,"p",11),r(6,"Identificaci\xF3n: "),e(7,"span",12),r(8),n()(),e(9,"p",11),r(10,"Empresa: "),e(11,"span",12),r(12),n()(),e(13,"p",11),r(14,"Cargo: "),e(15,"span",12),r(16),n()(),e(17,"p",11),r(18,"Correo: "),e(19,"span",12),r(20),n()(),e(21,"p",11),r(22,"Direcci\xF3n: "),e(23,"span",12),r(24),n()(),e(25,"p",11),r(26,"Tel\xE9fono: "),e(27,"span",12),r(28),n()()(),e(29,"div")(30,"p",11),r(31,"N\xFAmero de cr\xE9dito: "),e(32,"span",12),r(33),n()(),e(34,"p",11),r(35,"Cupo aprobado: "),e(36,"span",12),r(37),v(38,"currency"),n()(),e(39,"p",11),r(40,"Tasa de interes: "),e(41,"span",12),r(42),n()(),e(43,"p",11),r(44,"Fecha de aprobacion: "),e(45,"span",12),r(46),v(47,"date"),n()(),e(48,"p",11),r(49,"Fecha de vencimiento: "),e(50,"span",12),r(51),v(52,"date"),n()(),e(53,"p",11),r(54,"Cupo utilizado: "),e(55,"span",12),r(56),v(57,"currency"),n()(),e(58,"p",11),r(59,"Saldo Disponible: "),e(60,"span",12),r(61),v(62,"currency"),n()()()(),u(63,"hr"),c(64,me,2,0,"p",13)(65,de,2,4,"div",14),n()),i&2){let o=f();s(4),B("",o.items.trabajador.primerNombre," ",o.items.trabajador.segundoNombre," ",o.items.trabajador.primerApellido," ",o.items.trabajador.segundoApellido," "),s(4),p(o.items.trabajador.numDoc),s(4),p(o.items.nombreSubEmpresa),s(4),p(o.items.trabajador.cargo),s(4),p(o.items.trabajador.correo),s(4),p(o.items.trabajador.direccion),s(4),p(o.items.trabajador.telefono),s(5),p(o.items.numCredito),s(4),p(A(38,19,o.items.cupoAprobado)),s(5),ut("",o.items.porcTasaInteres,"%"),s(4),p(O(47,21,o.items.fechaAprobacion,"dd/MM/yyyy")),s(5),p(O(52,24,o.items.fechaVencimiento,"dd/MM/yyyy")),s(5),p(A(57,27,o.items.cupoDisponible)),s(5),p(A(62,29,o.items.cupoDisponible)),s(3),d("ngIf",o.data.length>0),s(),d("ngIf",o.data.length>0)}}var Lt=(()=>{let m=class m{constructor(){this.toasService=l(et),this.fuseService=l(Z),this.estadosDatosService=l(w),this.activatedRoute=l(z),this.creditoService=l(P),this.router=l(M),this.datePipe=l(x),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this.columns=["Fecha","Factura #","Detalle factura","Valor","Cantidad cuotas","Valor cuotas","Pago","Estado"],this.columnPropertyMap={Fecha:"fechaCreacion","Factura #":"numeroFactura ","Detalle factura":"detalleCompra",Valor:"montoConsumo","Cantidad cuotas":"cantidadCuotas ","Valor cuotas":"montoCuotas",Pago:"montoCuotas",Estado:"estadoDetalle"}}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito)}getCredito(a){this.subcription$=this.creditoService.getCredito(a).subscribe(t=>{this.items=t.data,this.detalleEmpleado=t.data})}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=_({type:m,selectors:[["app-form-view-detalle"]],standalone:!0,features:[I([{provide:Q,useClass:it},{provide:q,useValue:"en-GB"},x]),D],decls:10,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-xl","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],["class","text-lg text-black font-bold mb-6",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"text-lg","text-black","font-bold","mb-6"],[1,"mb-4"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,b){t&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),u(6,"mat-icon",5),n()(),e(7,"h2",6),r(8,"Detalle de Cr\xE9dito"),n()(),c(9,le,66,31,"div",7),n()()()),t&2&&(s(2),ct("width","90%"),s(3),d("routerLink",G(5,se)),s(),d("svgIcon","heroicons_outline:arrow-long-left"),s(3),d("ngIf",b.items))},dependencies:[U,$,x,X,W,F,T,H,tt]});let i=m;return i})();var Fi=[{path:"",component:Bt},{path:"detalle/:id",component:$t},{path:"view-detalle/:id",component:Lt}];export{Fi as default};
