import{a as Je}from"./chunk-KCF3ZMA6.js";import{b as ze}from"./chunk-2VC7SEPD.js";import{a as qe}from"./chunk-HSSBFHFE.js";import{a as Qe}from"./chunk-HQNBHNHK.js";import{b as We}from"./chunk-PEZYCTDT.js";import{a as Ye,b as Ze,c as Ue}from"./chunk-AV45XYUC.js";import{a as Be,b as Re,c as Ge}from"./chunk-V7YY5USQ.js";import{a as $e,b as Le}from"./chunk-BAD57Q24.js";import{a as te}from"./chunk-E27GYA5F.js";import{a as He}from"./chunk-OUSEI7ZX.js";import{a as x}from"./chunk-6IEWE3OU.js";import{a as Pe}from"./chunk-QE3E4OX7.js";import{a as je,b as ee}from"./chunk-GD676RBR.js";import{a as k}from"./chunk-OFEOPKCC.js";import{a as Ne}from"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import{g as W}from"./chunk-CUGJBCL5.js";import"./chunk-3P4FUJJD.js";import{h as q}from"./chunk-4CCKGQO6.js";import{B as K,C as Ve,G as X,b as ye,e as Ee,i as Q,l as De,p as Ae,q as Te,u as Fe,w as Me,x as ke,z as Oe}from"./chunk-7YVLRDAA.js";import{$ as Se,Q as Z,R as U,ea as _e,fa as J,ja as M,k as de}from"./chunk-T34F2ICN.js";import{a as Ie}from"./chunk-WDNNZS2B.js";import"./chunk-XMIUBE2U.js";import{a as we}from"./chunk-XHZ6JD3E.js";import{b as z,d as F,e as Y}from"./chunk-HGIHZLIS.js";import{e as ge,f as H,g as T,j as h,m as I,s as Ce}from"./chunk-YH7HM3TK.js";import{$ as fe,$b as $,Cb as t,Db as n,Eb as b,Fb as g,Gb as C,Ib as R,Ob as G,Qb as u,Rb as ve,Sb as V,Xb as se,Yb as r,Za as s,Zb as p,_b as N,dc as D,ea as re,ec as E,fa as m,fc as L,ic as he,ka as y,mc as v,nc as w,oc as A,pb as f,q as S,rb as l,sb as be,ta as ue,ua as P,va as j,vb as xe,yb as B}from"./chunk-32HXX3OB.js";import{a as ne,d as ce}from"./chunk-NEB6MB4Y.js";var O=(()=>{let d=class d{constructor(o,a){this._http=o,this.appSettings=a}getCreditos(o){return this._http.get(`${this.appSettings.creditos.url.base}/${o}`)}getCredito(o){return this._http.get(`${this.appSettings.creditos.url.base}/${o}`)}putCredito(o){let a=o.id;return delete o.id,this._http.put(`${this.appSettings.creditos.url.base}/${a}`,o)}};d.\u0275fac=function(a){return new(a||d)(re(Ce),re(we))},d.\u0275prov=fe({token:d,factory:d.\u0275fac,providedIn:"root"});let e=d;return e})();var _=function(e){return e.EN_PROCESO="EnProceso",e.BLOQUEADO="Bloqueado",e.VENCIDO="Vencido",e.EN_REVISION="EnRevision",e.CERRADO="Cerrado",e.APROBADO="Aprobado",e}(_||{}),le=function(e){return e.APROBADO="e626ea69-e915-5462-be9a-905326714782",e.RECHAZADA="",e}(le||{});function nt(e,d){if(e&1&&(g(0),b(1,"app-custom-table",17),C()),e&2){let i=u(2);s(),l("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data)("buttons",i.buttons)}}function rt(e,d){if(e&1&&f(0,nt,2,5,"ng-container",16),e&2){let i=u();l("ngIf",i.data.length)}}function st(e,d){if(e&1&&(g(0),b(1,"app-custom-table",17),C()),e&2){let i=u(2);s(),l("columns",i.columnsAprobadas)("displayedColumns",i.columnsAprobadas)("columnPropertyMap",i.columnPropertyAprobadas)("data",i.data)("buttons",i.buttonsView)}}function dt(e,d){if(e&1&&f(0,st,2,5,"ng-container",16),e&2){let i=u();l("ngIf",i.data.length)}}function lt(e,d){if(e&1&&(g(0),b(1,"app-custom-table",17),C()),e&2){let i=u(2);s(),l("columns",i.columnsAprobadas)("displayedColumns",i.columnsAprobadas)("columnPropertyMap",i.columnPropertyAprobadas)("data",i.data)("buttons",i.buttons)}}function pt(e,d){if(e&1&&f(0,lt,2,5,"ng-container",16),e&2){let i=u();l("ngIf",i.data.length)}}function mt(e,d){if(e&1&&(g(0),b(1,"app-custom-table",17),C()),e&2){let i=u(2);s(),l("columns",i.columnsAprobadas)("displayedColumns",i.columnsAprobadas)("columnPropertyMap",i.columnPropertyAprobadas)("data",i.data)("buttons",i.buttons)}}function ct(e,d){if(e&1&&f(0,mt,2,5,"ng-container",16),e&2){let i=u();l("ngIf",i.data.length)}}var Ke=(()=>{let d=class d{constructor(){this.datePipe=m(h),this.router=m(F),this.estadoDatosService=m(k),this.creditoService=m(O),this.selectedTab=_.EN_REVISION,this.currencyPipe=m(I),this.data=[],this.columns=["Fecha de solicitud","Solicitante","Cupo solicitado","Empresa","Estado"],this.columnsAprobadas=["Fecha de aprobaci\xF3n","Solicitante","Cupo aprobado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo solicitado":"cupoSolicitado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.columnPropertyAprobadas={"Fecha de aprobaci\xF3n":"fechaAprobacion",Solicitante:"nombreTrabajador","Cupo aprobado":"cupoAprobado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:o=>{console.log("Approve",o),this.selectedData=o,this.router.navigate(["pages/gestion-creditos/creditos/detalle",this.selectedData.id])}}],this.buttonsView=[{label:"View",icon:"visibility",action:o=>{console.log("Approve",o),this.selectedData=o,this.router.navigate(["pages/gestion-creditos/creditos/view-detalle",this.selectedData.id])}}],this.tabChanged=o=>{console.log("tabChangeEvent => ",o),console.log("index => ",o.index),this.selectedTab=o.index==0?_.EN_REVISION:o.index==1?_.APROBADO:o.index==2?_.VENCIDO:o.index==3?_.BLOQUEADO:_.EN_REVISION,this.getCreditos(this.selectedTab)}}getCreditos(o){this.subcription$=this.creditoService.getCreditos(o).pipe(S(a=>(a.data.forEach(c=>{c.estado?c.estado=x.ACTIVO:c.estado=x.INACTIVO}),a)),S(a=>(a.data.forEach(c=>{c.fechaCreacion=this.datePipe.transform(c.fechaCreacion,"dd/MM/yyyy"),c.fechaAprobacion=this.datePipe.transform(c.fechaAprobacion,"dd/MM/yyyy"),c.cupoAprobado=this.currencyPipe.transform(c.cupoAprobado,"USD","symbol","1.2-2")}),a))).subscribe(a=>{a?this.data=a.data:this.data=[]},a=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(a=>{a&&this.getCreditos(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCreditos(this.selectedTab),this.listenGrid()}};d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=y({type:d,selectors:[["app-grid-creditos"]],standalone:!0,features:[D([h,I]),E],decls:20,vars:5,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobado"],["label","Vencido"],["label","Bloqueado"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(a,c){if(a&1){let ae=R();t(0,"div",1)(1,"div",2)(2,"div",3),r(3,"Cr\xE9ditos"),n(),t(4,"div",4)(5,"mat-form-field",5),b(6,"mat-icon",6)(7,"input",7),n()()(),t(8,"div",8)(9,"div",9)(10,"mat-tab-group",10,0),G("selectedTabChange",function(oe){return P(ae),j(c.tabChanged(oe))}),t(12,"mat-tab",11),f(13,rt,1,1,"ng-template",12),n(),t(14,"mat-tab",13),f(15,dt,1,1,"ng-template",12),n(),t(16,"mat-tab",14),f(17,pt,1,1,"ng-template",12),n(),t(18,"mat-tab",15),f(19,ct,1,1,"ng-template",12),n()()()()()}a&2&&(s(5),l("subscriptSizing","dynamic"),s(),l("svgIcon","heroicons_solid:magnifying-glass"),s(),l("autocomplete","off")("placeholder","Buscar"),s(3),l("animationDuration","500"))},dependencies:[Pe,Q,M,X,Ze,Ye,Ue,T]});let e=d;return e})();var ft=()=>["/pages/gestion-creditos/creditos"];function ut(e,d){if(e&1&&(t(0,"mat-option",27),r(1),n()),e&2){let i=d.$implicit;l("value",i.id),s(),p(i.nombre)}}function bt(e,d){if(e&1&&(t(0,"mat-option",27),r(1),n()),e&2){let i=d.$implicit;l("value",i.id),s(),p(i.detalleInversion+" - "+i.rubroInversion)}}function xt(e,d){if(e&1&&(t(0,"mat-option",27),r(1),n()),e&2){let i=d.$implicit;l("value",i.id),s(),p(i.porcentaje)}}function vt(e,d){if(e&1){let i=R();t(0,"div",10)(1,"div",11)(2,"div")(3,"h3",12),r(4),n(),t(5,"p",13),r(6,"Identificaci\xF3n: "),t(7,"span",14),r(8),n()(),t(9,"p",13),r(10,"Empresa: "),t(11,"span",14),r(12),n()(),t(13,"p",15),r(14,"Cargo: "),t(15,"span",14),r(16),n()(),t(17,"p",13),r(18,"Correo: "),t(19,"span",14),r(20),n()(),t(21,"p",13),r(22,"Direcci\xF3n: "),t(23,"span",14),r(24),n()(),t(25,"p",13),r(26,"Tel\xE9fono: "),t(27,"span",14),r(28),n()()(),t(29,"div")(30,"p",13),r(31,"N\xFAmero de solicitud: #12345"),n(),t(32,"p",13),r(33,"Cupo solicitado: "),t(34,"span",14),r(35),v(36,"currency"),n()(),t(37,"p",13),r(38,"Fecha de Solicitud: "),t(39,"span",14),r(40),v(41,"date"),n()()()(),b(42,"hr"),t(43,"div")(44,"p",16),r(45,"Informaci\xF3n de Cr\xE9dito"),n(),t(46,"form",17)(47,"mat-form-field",18)(48,"mat-label"),r(49,"Tipo de pago"),n(),t(50,"mat-select",19),f(51,ut,2,2,"mat-option",20),n()(),t(52,"mat-form-field",18)(53,"mat-label"),r(54,"Capital de inversi\xF3n"),n(),t(55,"mat-select",19),f(56,bt,2,2,"mat-option",20),n()(),t(57,"mat-form-field",18)(58,"mat-label"),r(59,"Tasa de interes"),n(),t(60,"mat-select",19),f(61,xt,2,2,"mat-option",20),n()(),t(62,"mat-form-field",18)(63,"mat-label"),r(64,"Cantidad de cuotas"),n(),b(65,"input",21),n(),t(66,"mat-form-field",18)(67,"mat-label"),r(68,"Cupo aprobado"),n(),b(69,"input",21),n(),t(70,"mat-form-field",18)(71,"mat-label"),r(72,"Fecha de vencimiento"),n(),b(73,"input",22)(74,"mat-datepicker-toggle",23)(75,"mat-datepicker",null,0),n(),t(77,"mat-form-field",18)(78,"mat-label"),r(79,"Fecha de corte"),n(),b(80,"input",22)(81,"mat-datepicker-toggle",23)(82,"mat-datepicker",null,1),n()()(),g(84),t(85,"div",24)(86,"button",25),r(87," Rechazar "),n(),t(88,"button",26),G("click",function(){P(i);let a=u();return j(a.onSave())}),r(89," Aprobar "),n()(),C(),n()}if(e&2){let i=se(76),o=se(83),a=u();s(4),$("",a.items.trabajador.primerNombre," ",a.items.trabajador.segundoNombre," ",a.items.trabajador.primerApellido," ",a.items.trabajador.segundoApellido," "),s(4),p(a.items.trabajador.numDoc),s(4),p(a.items.nombreSubEmpresa),s(4),p(a.items.trabajador.cargo),s(4),p(a.items.trabajador.correo),s(4),p(a.items.trabajador.direccion),s(4),p(a.items.trabajador.telefono),s(7),p(w(36,27,a.items.cupoSolicitado)),s(5),p(A(41,29,a.items.fechaCreacion,"dd/MM/yyyy")),s(6),l("formGroup",a.form),s(4),l("formControlName","idTipoPago"),s(),l("ngForOf",a.data),s(4),l("formControlName","idCapitalInversion"),s(),l("ngForOf",a.capital),s(4),l("formControlName","idTasaInteres"),s(),l("ngForOf",a.tasas),s(4),l("formControlName","cantCuotas"),s(4),l("formControlName","cupoAprobado"),s(4),l("matDatepicker",i)("formControlName","fechaVencimiento"),s(),l("for",i),s(6),l("matDatepicker",o)("formControlName","fechaCorte"),s(),l("for",o)}}var ht={validation:!1},Xe=(()=>{let d=class d{constructor(){this.toasService=m(ee),this.fuseService=m(W),this.estadosDatosService=m(k),this.activatedRoute=m(z),this.creditoService=m(O),this.router=m(F),this.tiposPagos=m(Qe),this.capitalInversion=m(He),this.estadoCreditoService=m(Je),this.tasaService=m(qe),this.fb=m(Oe),this.datePipe=m(h),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this.CodigosEstadosSolicitudes=ze}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito),this.getTiposPagos(),this.getCapital(),this.getEstadoCredito(),this.getTasas(),this.createForm()}getCredito(o){this.subcription$=this.creditoService.getCredito(o).subscribe(a=>{this.items=a.data,this.detalleEmpleado=a.data})}getTiposPagos(){this.subcription$=this.tiposPagos.getTiposPagos().pipe(S(o=>(o.data.forEach(a=>{a.estado?a.estado=x.ACTIVO:a.estado=x.INACTIVO}),o))).subscribe(o=>{this.data=o.data})}getTasas(){this.subcription$=this.tasaService.getTass().pipe(S(o=>(o.data.forEach(a=>{a.estado?a.estado=x.ACTIVO:a.estado=x.INACTIVO}),o))).subscribe(o=>{this.tasas=o.data})}getEstadoCredito(){this.subcription$=this.estadoCreditoService.getEstadoCreditos().pipe(S(o=>(o.data.forEach(a=>{a.estado?a.estado=x.ACTIVO:a.estado=x.INACTIVO}),o))).subscribe(o=>{this.estadoCredito=o.data})}getCapital(){this.subcription$=this.capitalInversion.getCapitales().pipe(S(o=>(o.data.forEach(a=>{a.estado?a.estado=x.ACTIVO:a.estado=x.INACTIVO}),o))).subscribe(o=>{this.capital=o.data})}onSave(){if(this.form.valid){let o=this.form.getRawValue(),{fechaVencimiento:c,fechaCorte:ae,cupoAprobado:pe}=o,oe=ce(o,["fechaVencimiento","fechaCorte","cupoAprobado"]),it=this.datePipe.transform(c,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),at=this.datePipe.transform(ae,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),me=ne({fechaVencimiento:it,fechaCorte:at,idEstadoCredito:le.APROBADO,cupoAprobado:Number(pe),id:this.idCredito},oe);console.log(me),this.fuseService.open(ne({},je)).afterClosed().subscribe(ot=>{ot==="confirmed"&&this.creditoService.putCredito(me).subscribe(Mt=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/creditos"])})})}}createForm(){this.form=this.fb.group({cupoAprobado:[""],idTipoPago:[""],idCapitalInversion:[""],idTasaInteres:[""],fechaVencimiento:[""],fechaCorte:[""],cantCuotas:[""]})}ngOnDestroy(){this.subcription$.unsubscribe()}};d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=y({type:d,selectors:[["app-form-detalle"]],standalone:!0,features:[D([{provide:U,useClass:te},{provide:Z,useValue:"en-GB"},h,$e(ht)]),E],decls:10,vars:4,consts:[["picker",""],["fechaCorte",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"text-gray-600","font-semibold"],[1,"text-lg","text-gray-600","font-bold","mb-10"],[3,"formGroup"],[1,"w-full"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","mask","separator.0","thousandSeparator",".",3,"formControlName"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","justify-end","items-center","mt-7","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],[3,"value"]],template:function(a,c){a&1&&(t(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div")(5,"a",6),b(6,"mat-icon",7),n()(),t(7,"h2",8),r(8,"Detalle de Cr\xE9dito"),n()(),f(9,vt,90,32,"div",9),n()()()),a&2&&(s(5),l("routerLink",L(3,ft)),s(),l("svgIcon","heroicons_outline:arrow-long-left"),s(3),l("ngIf",c.items))},dependencies:[q,J,M,Y,T,I,h,_e,Q,ye,Se,Ne,H,K,Fe,De,Ae,Te,X,Be,Re,Ge,Ee,Ve,Me,ke,Le]});let e=d;return e})();var gt=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],Ct=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];function St(e,d){e&1&&(t(0,"div",0),V(1),n(),t(2,"div",1),V(3,1),n())}function yt(e,d){e&1&&(t(0,"div",2),V(1,3),n()),e&2&&l("@expandCollapse",void 0)}function Et(e,d){if(e&1&&(V(0,2),f(1,yt,2,1,"div",2)),e&2){let i=u();s(),B(i.expanded?1:-1)}}var et=(()=>{let d=class d{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&this.face==="back","fuse-card-face-front":this.flippable&&this.face==="front","fuse-card-flippable":this.flippable}}ngOnChanges(o){"expanded"in o&&(this.expanded=de(o.expanded.currentValue)),"flippable"in o&&(this.flippable=de(o.flippable.currentValue))}};d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=y({type:d,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(a,c){a&2&&xe(c.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[ue,E],ngContentSelectors:Ct,decls:2,vars:2,consts:[[1,"fuse-card-front"],[1,"fuse-card-back"],[1,"fuse-card-expansion"]],template:function(a,c){a&1&&(ve(gt),f(0,St,4,0)(1,Et,2,1)),a&2&&(B(c.flippable?0:-1),s(),B(c.flippable?-1:1))},styles:[`fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}
`],encapsulation:2,data:{animation:Ie}});let e=d;return e})();var _t=()=>["/pages/gestion-creditos/creditos"],wt=(e,d,i)=>({"bg-green-600":e,"bg-yellow-600":d,"bg-red-600":i});function It(e,d){e&1&&(t(0,"p",15),r(1,"Movimientos"),n())}function Dt(e,d){if(e&1&&(g(0),t(1,"fuse-card",19)(2,"div",20)(3,"p",21),r(4),n(),t(5,"p",21),r(6),v(7,"date"),n()(),t(8,"div",20)(9,"p",21),r(10),n(),t(11,"p",22),r(12),v(13,"currency"),n()(),t(14,"div",20)(15,"p",21),r(16),n(),t(17,"p",21),r(18),n()(),t(19,"div",23),b(20,"p",24),n()(),C()),e&2){let i=d.$implicit,o=u(3);s(4),p(i.nombreSubEmpresa),s(2),p(A(7,7,i.fechaCreacion,"dd/MM/yyyy")),s(4),N("Factura: ",i.numeroFactura,""),s(2),N("Valor: ",w(13,10,i.montoConsumo),""),s(4),N("Cuotas: ",i.cantidadCuotas,""),s(2),p(i.nombreEstadoCredito),s(2),l("ngClass",he(12,wt,i.idEstadoCredito==o.CodigosDetalleConsumo.APROBADA,i.idEstadoCredito==o.CodigosDetalleConsumo.EN_REVISION,i.idEstadoCredito==o.CodigosDetalleConsumo.RECHAZADA))}}function At(e,d){if(e&1&&(t(0,"div",16)(1,"div",17),f(2,Dt,21,16,"ng-container",18),n()()),e&2){let i=u(2);s(2),l("ngForOf",i.items.detalleConsumos)}}function Tt(e,d){if(e&1&&(t(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),r(4),n(),t(5,"p",11),r(6,"Identificaci\xF3n: "),t(7,"span",12),r(8),n()(),t(9,"p",11),r(10,"Empresa: "),t(11,"span",12),r(12),n()(),t(13,"p",11),r(14,"Cargo: "),t(15,"span",12),r(16),n()(),t(17,"p",11),r(18,"Correo: "),t(19,"span",12),r(20),n()(),t(21,"p",11),r(22,"Direcci\xF3n: "),t(23,"span",12),r(24),n()(),t(25,"p",11),r(26,"Tel\xE9fono: "),t(27,"span",12),r(28),n()()(),t(29,"div")(30,"p",11),r(31,"N\xFAmero de cr\xE9dito: "),t(32,"span",12),r(33),n()(),t(34,"p",11),r(35,"Cupo aprobado: "),t(36,"span",12),r(37),v(38,"currency"),n()(),t(39,"p",11),r(40,"Tasa de interes: "),t(41,"span",12),r(42),n()(),t(43,"p",11),r(44,"Fecha de aprobacion: "),t(45,"span",12),r(46),v(47,"date"),n()(),t(48,"p",11),r(49,"Fecha de vencimiento: "),t(50,"span",12),r(51),v(52,"date"),n()(),t(53,"p",11),r(54,"Cupo utilizado: "),t(55,"span",12),r(56),v(57,"currency"),n()(),t(58,"p",11),r(59,"Saldo Disponible: "),t(60,"span",12),r(61),v(62,"currency"),n()()()(),b(63,"hr"),f(64,It,2,0,"p",13)(65,At,3,1,"div",14),n()),e&2){let i=u();s(4),$("",i.items.trabajador.primerNombre," ",i.items.trabajador.segundoNombre," ",i.items.trabajador.primerApellido," ",i.items.trabajador.segundoApellido," "),s(4),p(i.items.trabajador.numDoc),s(4),p(i.items.nombreSubEmpresa),s(4),p(i.items.trabajador.cargo),s(4),p(i.items.trabajador.correo),s(4),p(i.items.trabajador.direccion),s(4),p(i.items.trabajador.telefono),s(5),p(i.items.numCredito),s(4),p(w(38,19,i.items.cupoAprobado)),s(5),N("",i.items.porcTasaInteres,"%"),s(4),p(A(47,21,i.items.fechaAprobacion,"dd/MM/yyyy")),s(5),p(A(52,24,i.items.fechaVencimiento,"dd/MM/yyyy")),s(5),p(w(57,27,i.items.cupoConsumido)),s(5),p(w(62,29,i.items.cupoDisponible)),s(3),l("ngIf",i.items.detalleConsumos),s(),l("ngIf",i.items.detalleConsumos)}}var tt=(()=>{let d=class d{constructor(){this.toasService=m(ee),this.fuseService=m(W),this.estadosDatosService=m(k),this.activatedRoute=m(z),this.creditoService=m(O),this.router=m(F),this.datePipe=m(h),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this.CodigosDetalleConsumo=We}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito)}getCredito(o){this.subcription$=this.creditoService.getCredito(o).subscribe(a=>{this.items=a.data})}};d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=y({type:d,selectors:[["app-form-view-detalle"]],standalone:!0,features:[D([{provide:U,useClass:te},{provide:Z,useValue:"en-GB"},h]),E],decls:10,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-xl","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],["class","text-lg text-black font-bold mb-6",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"text-lg","text-black","font-bold","mb-6"],[1,"mb-4"],[1,"flex","flex-wrap","gap-2.5","justify-center"],[4,"ngFor","ngForOf"],[1,"flex-col","md:max-w-none","ng-star-inserted","ng-tns-c2638821912-10","p-4","rounded-2xl","shadow-lg","w-1/3"],[1,"flex","flex-row","justify-between"],[1,"text-gray-800","font-semibold"],[1,"text-gray-800","font-bold"],[1,"w-full"],[1,"h-2.5","rounded-full","ml-auto","mt-auto",3,"ngClass"]],template:function(a,c){a&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),b(6,"mat-icon",5),n()(),t(7,"h2",6),r(8,"Detalle de Cr\xE9dito"),n()(),f(9,Tt,66,31,"div",7),n()()()),a&2&&(s(2),be("width","90%"),s(3),l("routerLink",L(5,_t)),s(),l("svgIcon","heroicons_outline:arrow-long-left"),s(3),l("ngIf",c.items))},dependencies:[q,I,h,K,J,M,H,T,Y,et,ge]});let e=d;return e})();var ra=[{path:"",component:Ke},{path:"detalle/:id",component:Xe},{path:"view-detalle/:id",component:tt}];export{ra as default};
