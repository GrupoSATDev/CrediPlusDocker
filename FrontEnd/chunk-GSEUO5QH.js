import{a as st}from"./chunk-MJYUNRPQ.js";import{a as Xe}from"./chunk-FMNKENUW.js";import{a as et}from"./chunk-OO5FTOYY.js";import{a as tt,b as it,d as nt}from"./chunk-GR2XYZ37.js";import{b as lt}from"./chunk-PEZYCTDT.js";import{a as ot,b as at,c as rt}from"./chunk-63VXOKQC.js";import{a as me}from"./chunk-GHM3KWJ3.js";import{a as We}from"./chunk-6F2JNPPZ.js";import{a as Qe,b as Je,c as Ke}from"./chunk-6R5HSEPB.js";import{a as ce,b as ue}from"./chunk-TQSBQLHJ.js";import{a as x}from"./chunk-6IEWE3OU.js";import{a as fe}from"./chunk-ACIMG2KZ.js";import{a as Ze}from"./chunk-KLTAH632.js";import{a as pe}from"./chunk-QDZO5CSW.js";import{a as de}from"./chunk-5ZCUS56W.js";import{a as B}from"./chunk-OFEOPKCC.js";import{a as Ye}from"./chunk-EPIDILZO.js";import"./chunk-IL4J5XQF.js";import{g as P}from"./chunk-YEBJNSDR.js";import{a as ke,b as Ve,c as Ne,d as Oe}from"./chunk-LUFMAAH4.js";import{h as ie}from"./chunk-KZTPSQL5.js";import{B as j,C as le,G as R,b as oe,c as Pe,e as je,i as O,l as ne,n as he,p as se,q as Ge,s as $e,u as Le,v as He,w as qe,x as ze,z as Ue}from"./chunk-APJW3MZG.js";import{$ as Me,Q as ee,R as te,ea as ae,fa as re,ja as A,k as ge}from"./chunk-LFYNPSYO.js";import{a as Be}from"./chunk-7JJOO4IN.js";import"./chunk-FC4BJC6I.js";import{a as Re}from"./chunk-FSQXHWP6.js";import{b as W,d as N,e as X}from"./chunk-HOLWQL3Y.js";import{e as J,f as K,g as D,j as g,m as _,s as Fe}from"./chunk-B43ZVACX.js";import{$ as _e,$b as Z,Cb as t,Db as i,Eb as f,Fb as y,Gb as E,Ib as Y,Ob as k,Qb as b,Rb as De,Sb as L,Xb as xe,Yb as r,Za as s,Zb as c,_b as V,dc as w,ea as ve,ec as S,fa as m,fc as Q,hc as Ae,ic as Te,ka as C,mc as v,nc as M,oc as I,pb as u,q as h,rb as d,ta as we,ua as q,va as z,vb as Ie,yb as U}from"./chunk-32HXX3OB.js";import{a as $,d as Ee}from"./chunk-NEB6MB4Y.js";var G=(()=>{let l=class l{constructor(n,o){this._http=n,this.appSettings=o}getCreditos(n){return this._http.get(`${this.appSettings.creditos.url.base}/${n}`)}getCredito(n){return this._http.get(`${this.appSettings.creditos.url.base}/${n}`)}putCredito(n){let o=n.id;return delete n.id,this._http.put(`${this.appSettings.creditos.url.base}/${o}`,n)}};l.\u0275fac=function(o){return new(o||l)(ve(Fe),ve(Re))},l.\u0275prov=_e({token:l,factory:l.\u0275fac,providedIn:"root"});let e=l;return e})();var T=function(e){return e.EN_PROCESO="EnProceso",e.BLOQUEADO="Bloqueado",e.VENCIDO="Vencido",e.EN_REVISION="EnRevision",e.CERRADO="Cerrado",e.APROBADO="Aprobado",e}(T||{}),Ce=function(e){return e.APROBADO="e626ea69-e915-5462-be9a-905326714782",e.RECHAZADA="",e}(Ce||{});function gt(e,l){if(e&1&&(y(0),f(1,"app-custom-table",17),E()),e&2){let a=b(2);s(),d("columns",a.columns)("displayedColumns",a.columns)("columnPropertyMap",a.columnPropertyMap)("data",a.data)("buttons",a.buttons)}}function ht(e,l){if(e&1&&u(0,gt,2,5,"ng-container",16),e&2){let a=b();d("ngIf",a.data.length)}}function Ct(e,l){if(e&1&&(y(0),f(1,"app-custom-table",17),E()),e&2){let a=b(2);s(),d("columns",a.columnsAprobadas)("displayedColumns",a.columnsAprobadas)("columnPropertyMap",a.columnPropertyAprobadas)("data",a.data)("buttons",a.buttonsView)}}function St(e,l){if(e&1&&u(0,Ct,2,5,"ng-container",16),e&2){let a=b();d("ngIf",a.data.length)}}function yt(e,l){if(e&1&&(y(0),f(1,"app-custom-table",17),E()),e&2){let a=b(2);s(),d("columns",a.columnsAprobadas)("displayedColumns",a.columnsAprobadas)("columnPropertyMap",a.columnPropertyAprobadas)("data",a.data)("buttons",a.buttons)}}function Et(e,l){if(e&1&&u(0,yt,2,5,"ng-container",16),e&2){let a=b();d("ngIf",a.data.length)}}function _t(e,l){if(e&1&&(y(0),f(1,"app-custom-table",17),E()),e&2){let a=b(2);s(),d("columns",a.columnsAprobadas)("displayedColumns",a.columnsAprobadas)("columnPropertyMap",a.columnPropertyAprobadas)("data",a.data)("buttons",a.buttons)}}function wt(e,l){if(e&1&&u(0,_t,2,5,"ng-container",16),e&2){let a=b();d("ngIf",a.data.length)}}var dt=(()=>{let l=class l{constructor(){this.datePipe=m(g),this.router=m(N),this.estadoDatosService=m(B),this.creditoService=m(G),this.selectedTab=T.EN_REVISION,this.currencyPipe=m(_),this.data=[],this.columns=["Fecha de solicitud","Solicitante","Cupo solicitado","Empresa","Estado"],this.columnsAprobadas=["Fecha de aprobaci\xF3n","Solicitante","Cupo aprobado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo solicitado":"cupoSolicitado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.columnPropertyAprobadas={"Fecha de aprobaci\xF3n":"fechaAprobacion",Solicitante:"nombreTrabajador","Cupo aprobado":"cupoAprobado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:n=>{console.log("Approve",n),this.selectedData=n,this.router.navigate(["pages/gestion-creditos/creditos/detalle",this.selectedData.id])}}],this.buttonsView=[{label:"View",icon:"visibility",action:n=>{console.log("Approve",n),this.selectedData=n,this.router.navigate(["pages/gestion-creditos/creditos/view-detalle",this.selectedData.id])}}],this.tabChanged=n=>{console.log("tabChangeEvent => ",n),console.log("index => ",n.index),this.selectedTab=n.index==0?T.EN_REVISION:n.index==1?T.APROBADO:n.index==2?T.VENCIDO:n.index==3?T.BLOQUEADO:T.EN_REVISION,this.getCreditos(this.selectedTab)}}getCreditos(n){this.subcription$=this.creditoService.getCreditos(n).pipe(h(o=>(o.data.forEach(p=>{p.estado?p.estado=x.ACTIVO:p.estado=x.INACTIVO}),o)),h(o=>(o.data.forEach(p=>{p.fechaCreacion=this.datePipe.transform(p.fechaCreacion,"dd/MM/yyyy"),p.fechaAprobacion=this.datePipe.transform(p.fechaAprobacion,"dd/MM/yyyy"),p.cupoAprobado=this.currencyPipe.transform(p.cupoAprobado,"USD","symbol","1.2-2")}),o))).subscribe(o=>{o?this.data=o.data:this.data=[]},o=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(o=>{o&&this.getCreditos(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCreditos(this.selectedTab),this.listenGrid()}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=C({type:l,selectors:[["app-grid-creditos"]],standalone:!0,features:[w([g,_]),S],decls:20,vars:5,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobado"],["label","Vencido"],["label","Bloqueado"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(o,p){if(o&1){let F=Y();t(0,"div",1)(1,"div",2)(2,"div",3),r(3,"Cr\xE9ditos"),i(),t(4,"div",4)(5,"mat-form-field",5),f(6,"mat-icon",6)(7,"input",7),i()()(),t(8,"div",8)(9,"div",9)(10,"mat-tab-group",10,0),k("selectedTabChange",function(be){return q(F),z(p.tabChanged(be))}),t(12,"mat-tab",11),u(13,ht,1,1,"ng-template",12),i(),t(14,"mat-tab",13),u(15,St,1,1,"ng-template",12),i(),t(16,"mat-tab",14),u(17,Et,1,1,"ng-template",12),i(),t(18,"mat-tab",15),u(19,wt,1,1,"ng-template",12),i()()()()()}o&2&&(s(5),d("subscriptSizing","dynamic"),s(),d("svgIcon","heroicons_solid:magnifying-glass"),s(),d("autocomplete","off")("placeholder","Buscar"),s(3),d("animationDuration","500"))},dependencies:[Ze,O,A,R,at,ot,rt,D]});let e=l;return e})();var Dt=()=>["/pages/gestion-creditos/creditos"];function At(e,l){if(e&1&&(t(0,"mat-option",28),r(1),i()),e&2){let a=l.$implicit;d("value",a.id),s(),c(a.nombre)}}function Tt(e,l){if(e&1&&(t(0,"mat-option",28),r(1),i()),e&2){let a=l.$implicit;d("value",a.id),s(),c(a.detalleInversion+" - "+a.rubroInversion)}}function Ft(e,l){if(e&1&&(t(0,"mat-option",28),r(1),i()),e&2){let a=l.$implicit;d("value",a.id),s(),c(a.porcentaje)}}function Mt(e,l){if(e&1){let a=Y();t(0,"div",10)(1,"div",11)(2,"div")(3,"h3",12),r(4),i(),t(5,"p",13),r(6,"Identificaci\xF3n: "),t(7,"span",14),r(8),i()(),t(9,"p",13),r(10,"Empresa: "),t(11,"span",14),r(12),i()(),t(13,"p",15),r(14,"Cargo: "),t(15,"span",14),r(16),i()(),t(17,"p",13),r(18,"Correo: "),t(19,"span",14),r(20),i()(),t(21,"p",13),r(22,"Direcci\xF3n: "),t(23,"span",14),r(24),i()(),t(25,"p",13),r(26,"Tel\xE9fono: "),t(27,"span",14),r(28),i()()(),t(29,"div")(30,"p",13),r(31,"N\xFAmero de solicitud: #12345"),i(),t(32,"p",13),r(33,"Cupo solicitado: "),t(34,"span",14),r(35),v(36,"currency"),i()(),t(37,"p",13),r(38,"Fecha de Solicitud: "),t(39,"span",14),r(40),v(41,"date"),i()()()(),f(42,"hr"),t(43,"div")(44,"p",16),r(45,"Informaci\xF3n de Cr\xE9dito"),i(),t(46,"form",17)(47,"mat-form-field",18)(48,"mat-label"),r(49,"Tipo de pago"),i(),t(50,"mat-select",19),u(51,At,2,2,"mat-option",20),i()(),t(52,"mat-form-field",18)(53,"mat-label"),r(54,"Capital de inversi\xF3n"),i(),t(55,"mat-select",19),u(56,Tt,2,2,"mat-option",20),i()(),t(57,"mat-form-field",18)(58,"mat-label"),r(59,"Tasa de interes"),i(),t(60,"mat-select",19),u(61,Ft,2,2,"mat-option",20),i()(),t(62,"mat-form-field",18)(63,"mat-label"),r(64,"Cantidad de cuotas"),i(),f(65,"input",21),i(),t(66,"mat-form-field",18)(67,"mat-label"),r(68,"Cupo sugerido"),i(),f(69,"input",22),i(),t(70,"mat-form-field",18)(71,"mat-label"),r(72,"Cupo aprobado"),i(),f(73,"input",21),i(),t(74,"mat-form-field",18)(75,"mat-label"),r(76,"Fecha de vencimiento"),i(),f(77,"input",23)(78,"mat-datepicker-toggle",24)(79,"mat-datepicker",null,0),i(),t(81,"mat-form-field",18)(82,"mat-label"),r(83,"Fecha de corte"),i(),f(84,"input",23)(85,"mat-datepicker-toggle",24)(86,"mat-datepicker",null,1),i()()(),y(88),t(89,"div",25)(90,"button",26),r(91," Rechazar "),i(),t(92,"button",27),k("click",function(){q(a);let o=b();return z(o.onSave())}),r(93," Aprobar "),i()(),E(),i()}if(e&2){let a=xe(80),n=xe(87),o=b();s(4),Z("",o.items.trabajador.primerNombre," ",o.items.trabajador.segundoNombre," ",o.items.trabajador.primerApellido," ",o.items.trabajador.segundoApellido," "),s(4),c(o.items.trabajador.numDoc),s(4),c(o.items.nombreSubEmpresa),s(4),c(o.items.trabajador.cargo),s(4),c(o.items.trabajador.correo),s(4),c(o.items.trabajador.direccion),s(4),c(o.items.trabajador.telefono),s(7),c(M(36,28,o.items.cupoSolicitado)),s(5),c(I(41,30,o.items.fechaCreacion,"dd/MM/yyyy")),s(6),d("formGroup",o.form),s(4),d("formControlName","idTipoPago"),s(),d("ngForOf",o.data),s(4),d("formControlName","idCapitalInversion"),s(),d("ngForOf",o.capital),s(4),d("formControlName","idTasaInteres"),s(),d("ngForOf",o.tasas),s(4),d("formControlName","cantCuotas"),s(4),d("readonly",!0),s(4),d("formControlName","cupoAprobado"),s(4),d("matDatepicker",a)("formControlName","fechaVencimiento"),s(),d("for",a),s(6),d("matDatepicker",n)("formControlName","fechaCorte"),s(),d("for",n)}}var kt={validation:!1},pt=(()=>{let l=class l{constructor(){this.toasService=m(pe),this.fuseService=m(P),this.estadosDatosService=m(B),this.activatedRoute=m(W),this.creditoService=m(G),this.router=m(N),this.tiposPagos=m(Xe),this.capitalInversion=m(We),this.estadoCreditoService=m(st),this.tasaService=m(et),this.fb=m(Ue),this.datePipe=m(g),this.swalService=m(fe),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this.CodigosEstadosSolicitudes=nt}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito),this.getTiposPagos(),this.getCapital(),this.getEstadoCredito(),this.getTasas(),this.createForm()}getCredito(n){this.subcription$=this.creditoService.getCredito(n).subscribe(o=>{this.items=o.data,this.detalleEmpleado=o.data})}getTiposPagos(){this.subcription$=this.tiposPagos.getTiposPagos().pipe(h(n=>(n.data.forEach(o=>{o.estado?o.estado=x.ACTIVO:o.estado=x.INACTIVO}),n))).subscribe(n=>{this.data=n.data})}getTasas(){this.subcription$=this.tasaService.getTass().pipe(h(n=>(n.data.forEach(o=>{o.estado?o.estado=x.ACTIVO:o.estado=x.INACTIVO}),n))).subscribe(n=>{this.tasas=n.data})}getEstadoCredito(){this.subcription$=this.estadoCreditoService.getEstadoCreditos().pipe(h(n=>(n.data.forEach(o=>{o.estado?o.estado=x.ACTIVO:o.estado=x.INACTIVO}),n))).subscribe(n=>{this.estadoCredito=n.data})}getCapital(){this.subcription$=this.capitalInversion.getCapitales().pipe(h(n=>(n.data.forEach(o=>{o.estado?o.estado=x.ACTIVO:o.estado=x.INACTIVO}),n))).subscribe(n=>{this.capital=n.data})}onSave(){if(this.form.valid){let n=this.form.getRawValue(),{fechaVencimiento:p,fechaCorte:F,cupoAprobado:Se}=n,be=Ee(n,["fechaVencimiento","fechaCorte","cupoAprobado"]),ft=this.datePipe.transform(p,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),bt=this.datePipe.transform(F,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),ye=$({fechaVencimiento:ft,fechaCorte:bt,idEstadoCredito:Ce.APROBADO,cupoAprobado:Number(Se),id:this.idCredito},be);console.log(ye),this.fuseService.open($({},de)).afterClosed().subscribe(vt=>{vt==="confirmed"&&this.creditoService.putCredito(ye).subscribe(xt=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.router.navigate(["/pages/gestion-creditos/creditos"])},xt=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}createForm(){this.form=this.fb.group({cupoAprobado:[""],idTipoPago:[""],idCapitalInversion:[""],idTasaInteres:[""],fechaVencimiento:[""],fechaCorte:[""],cantCuotas:[""]})}ngOnDestroy(){this.subcription$.unsubscribe()}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=C({type:l,selectors:[["app-form-detalle"]],standalone:!0,features:[w([{provide:te,useClass:me},{provide:ee,useValue:"en-GB"},g,ce(kt)]),S],decls:10,vars:4,consts:[["picker",""],["fechaCorte",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"text-gray-600","font-semibold"],[1,"text-lg","text-gray-600","font-bold","mb-10"],[3,"formGroup"],[1,"w-full"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","mask","separator.0","thousandSeparator",".",3,"formControlName"],["matInput","","value","1000000","mask","separator.0","thousandSeparator",".",3,"readonly"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","justify-end","items-center","mt-7","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],[3,"value"]],template:function(o,p){o&1&&(t(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div")(5,"a",6),f(6,"mat-icon",7),i()(),t(7,"h2",8),r(8,"Detalle de Cr\xE9dito"),i()(),u(9,Mt,94,33,"div",9),i()()()),o&2&&(s(5),d("routerLink",Q(3,Dt)),s(),d("svgIcon","heroicons_outline:arrow-long-left"),s(3),d("ngIf",p.items))},dependencies:[ie,re,A,X,D,_,g,ae,O,oe,Me,Ye,K,j,Le,ne,se,Ge,R,Qe,Je,Ke,je,le,qe,ze,ue]});let e=l;return e})();var Vt=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],Nt=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];function Ot(e,l){e&1&&(t(0,"div",0),L(1),i(),t(2,"div",1),L(3,1),i())}function Pt(e,l){e&1&&(t(0,"div",2),L(1,3),i()),e&2&&d("@expandCollapse",void 0)}function jt(e,l){if(e&1&&(L(0,2),u(1,Pt,2,1,"div",2)),e&2){let a=b();s(),U(a.expanded?1:-1)}}var mt=(()=>{let l=class l{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&this.face==="back","fuse-card-face-front":this.flippable&&this.face==="front","fuse-card-flippable":this.flippable}}ngOnChanges(n){"expanded"in n&&(this.expanded=ge(n.expanded.currentValue)),"flippable"in n&&(this.flippable=ge(n.flippable.currentValue))}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=C({type:l,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(o,p){o&2&&Ie(p.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[we,S],ngContentSelectors:Nt,decls:2,vars:2,consts:[[1,"fuse-card-front"],[1,"fuse-card-back"],[1,"fuse-card-expansion"]],template:function(o,p){o&1&&(De(Vt),u(0,Ot,4,0)(1,jt,2,1)),o&2&&(U(p.flippable?0:-1),s(),U(p.flippable?-1:1))},styles:[`fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}
`],encapsulation:2,data:{animation:Be}});let e=l;return e})();var Rt=(e,l)=>({"bg-crediblue-50":e,"bg-credigray-100":l});function Bt(e,l){e&1&&(t(0,"mat-error"),r(1,"El valor es requerido!"),i())}function Gt(e,l){e&1&&(t(0,"mat-error"),r(1,"El valor ingresado no puede superar el cupo disponible!"),i())}var $t={validation:!1},ct=(()=>{let l=class l{constructor(){this._matData=m(Ve),this.swalService=m(fe),this.tipoSolicitudService=m(it),this.tipoSolicitud$=this.tipoSolicitudService.getTipos().pipe(h(n=>(this.idSolicitud=n.data[0].id,n))).subscribe(),this.cupo=new $e(""),this.fuseService=m(P),this.solicitudService=m(tt),this.dialogRef=m(ke)}validarCampo(){this.cupoAvance=this._matData.data.cupoAprobado-this._matData.data.cupoAprobado*20/100,this.cupo.setValidators(he.compose([he.required,Lt(this.cupoAvance)])),this.cupo.updateValueAndValidity()}onSave(){let n={cupo:Number(this.cupo.value),idTipoSolicitud:this.idSolicitud};this.fuseService.open($({},de)).afterClosed().subscribe(p=>{p==="confirmed"?this.solicitudService.postSolicitudes(n).subscribe(F=>{this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},F=>{this.swalService.ToastAler({icon:"info",title:F.error.errorMenssages[0],timer:6e3})}):this.closeDialog()})}closeDialog(){this.dialogRef.close()}ngOnInit(){this.validarCampo()}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=C({type:l,selectors:[["app-dialog-confirm-desembolso"]],standalone:!0,features:[w([ce($t)]),S],decls:25,vars:17,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:text-left"],[1,"w-full"],["matInput","","thousandSeparator",".","placeholder","Valor solicitado",3,"formControl","mask"],[4,"ngIf"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-stroked-button","",1,"fuse-mat-button-large","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"matDialogClose"],["mat-flat-button","",1,"fuse-mat-button-large","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color","matDialogClose","ngClass","disabled"]],template:function(o,p){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),f(3,"mat-icon",3),i(),t(4,"div",4)(5,"div",5),r(6," Confirmacion "),i(),t(7,"div",6),r(8," Tu cupo disponible para avance es de "),t(9,"b"),r(10),v(11,"currency"),i(),r(12,", puedes solicitar un valor menor o igual a este. "),i()()(),t(13,"div",7)(14,"mat-form-field",8)(15,"mat-label"),r(16,"Valor"),i(),f(17,"input",9),u(18,Bt,2,0,"mat-error",10)(19,Gt,2,0,"mat-error",10),i()(),t(20,"div",11)(21,"button",12),r(22," Cancelar "),i(),t(23,"button",13),k("click",function(){return p.onSave()}),r(24," Confirmar "),i()()()),o&2&&(s(3),d("svgIcon","heroicons_solid:question-mark-circle"),s(7),c(I(11,11,p.cupoAvance,"USD")),s(7),d("formControl",p.cupo)("mask","separator.0"),s(),d("ngIf",p.cupo.touched&&p.cupo.hasError("required")),s(),d("ngIf",(p.cupo.touched||p.cupo.dirty)&&p.cupo.hasError("notEqual")),s(2),d("matDialogClose","cancelled"),s(2),d("color","primary")("matDialogClose","confirmed")("ngClass",Ae(14,Rt,p.cupo.valid,p.cupo.invalid))("disabled",p.cupo.invalid))},dependencies:[j,ne,se,ae,O,A,R,oe,Oe,le,He,D,Pe,_,ue,J]});let e=l;return e})();function Lt(e){return l=>{let a=l.value;return console.log(e),a>e?{notEqual:!0}:null}}var Ht=()=>["/pages/gestion-creditos/creditos"],qt=(e,l,a)=>({"bg-green-600":e,"bg-yellow-600":l,"bg-red-600":a});function zt(e,l){e&1&&(t(0,"p",16),r(1,"Movimientos"),i())}function Ut(e,l){if(e&1&&(y(0),t(1,"fuse-card",20)(2,"div",21)(3,"p",22),r(4),i(),t(5,"p",22),r(6),v(7,"date"),i()(),t(8,"div",21)(9,"p",22),r(10),i(),t(11,"p",23),r(12),v(13,"currency"),i()(),t(14,"div",21)(15,"p",22),r(16),i(),t(17,"p",22),r(18),i()(),t(19,"div",21)(20,"p",22),r(21),i()(),t(22,"div",24),f(23,"p",25),i()(),E()),e&2){let a=l.$implicit,n=b(3);s(4),c(a.nombreSubEmpresa),s(2),c(I(7,8,a.fechaCreacion,"dd/MM/yyyy")),s(4),V("Factura: ",a.numeroFactura,""),s(2),V("Valor: ",M(13,11,a.montoConsumo),""),s(4),V("Cuotas: ",a.cantidadCuotas,""),s(2),c(a.nombreEstadoCredito),s(3),V("Tipo: ",a.nombreTipoConsumo,""),s(2),d("ngClass",Te(13,qt,a.idEstadoCredito==n.CodigosDetalleConsumo.APROBADA,a.idEstadoCredito==n.CodigosDetalleConsumo.EN_REVISION,a.idEstadoCredito==n.CodigosDetalleConsumo.RECHAZADA))}}function Yt(e,l){if(e&1&&(t(0,"div",17)(1,"div",18),u(2,Ut,24,17,"ng-container",19),i()()),e&2){let a=b(2);s(2),d("ngForOf",a.items.detalleConsumos)}}function Zt(e,l){if(e&1&&(t(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),r(4),i(),t(5,"p",11),r(6,"Identificaci\xF3n: "),t(7,"span",12),r(8),i()(),t(9,"p",11),r(10,"Empresa: "),t(11,"span",12),r(12),i()(),t(13,"p",11),r(14,"Cargo: "),t(15,"span",12),r(16),i()(),t(17,"p",11),r(18,"Correo: "),t(19,"span",12),r(20),i()(),t(21,"p",11),r(22,"Direcci\xF3n: "),t(23,"span",12),r(24),i()(),t(25,"p",11),r(26,"Tel\xE9fono: "),t(27,"span",12),r(28),i()()(),t(29,"div")(30,"p",11),r(31,"N\xFAmero de cr\xE9dito: "),t(32,"span",12),r(33),i()(),t(34,"p",11),r(35,"Cupo aprobado: "),t(36,"span",12),r(37),v(38,"currency"),i()(),t(39,"p",11),r(40,"Tasa de interes: "),t(41,"span",12),r(42),i()(),t(43,"p",11),r(44,"Fecha de aprobaci\xF3n: "),t(45,"span",12),r(46),v(47,"date"),i()(),t(48,"p",11),r(49,"Fecha de vencimiento: "),t(50,"span",12),r(51),v(52,"date"),i()(),t(53,"p",11),r(54,"Cupo utilizado: "),t(55,"span",12),r(56),v(57,"currency"),i()(),t(58,"p",11),r(59,"Saldo disponible: "),t(60,"span",12),r(61),v(62,"currency"),i()()()(),f(63,"hr",13),u(64,zt,2,0,"p",14)(65,Yt,3,1,"div",15),i()),e&2){let a=b();s(4),Z("",a.items.trabajador.primerNombre," ",a.items.trabajador.segundoNombre," ",a.items.trabajador.primerApellido," ",a.items.trabajador.segundoApellido," "),s(4),c(a.items.trabajador.numDoc),s(4),c(a.items.nombreSubEmpresa),s(4),c(a.items.trabajador.cargo),s(4),c(a.items.trabajador.correo),s(4),c(a.items.trabajador.direccion),s(4),c(a.items.trabajador.telefono),s(5),c(a.items.numCredito),s(4),c(M(38,19,a.items.cupoAprobado)),s(5),V("",a.items.porcTasaInteres,"%"),s(4),c(I(47,21,a.items.fechaAprobacion,"dd/MM/yyyy")),s(5),c(I(52,24,a.items.fechaVencimiento,"dd/MM/yyyy")),s(5),c(M(57,27,a.items.cupoConsumido)),s(5),c(M(62,29,a.items.cupoDisponible)),s(3),d("ngIf",a.items.detalleConsumos),s(),d("ngIf",a.items.detalleConsumos)}}var ut=(()=>{let l=class l{constructor(){this.toasService=m(pe),this.fuseService=m(P),this.estadosDatosService=m(B),this.activatedRoute=m(W),this.creditoService=m(G),this.router=m(N),this.datePipe=m(g),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this._matDialog=m(Ne),this.CodigosDetalleConsumo=lt}ngOnDestroy(){this.subcription$.unsubscribe()}onSolicitud(){this._matDialog.open(ct,{data:{data:this.items},width:"30%",disableClose:!0})}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito)}getCredito(n){this.subcription$=this.creditoService.getCredito(n).subscribe(o=>{this.items=o.data})}};l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=C({type:l,selectors:[["app-form-view-detalle"]],standalone:!0,features:[w([{provide:te,useClass:me},{provide:ee,useValue:"en-GB"},g]),S],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden","w-full","max-w-5xl"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","grid","grid-cols-1","md:grid-cols-2","gap-4","justify-items-stretch","lg:justify-items-center"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"my-4"],["class","text-lg text-black font-bold mb-6",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"text-lg","text-black","font-bold","mb-6"],[1,"mb-4"],[1,"flex","flex-wrap","gap-2.5","justify-center"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","p-4","rounded-2xl","shadow-lg","w-full","md:w-1/2","lg:w-1/3"],[1,"flex","justify-between"],[1,"text-gray-800","font-semibold"],[1,"text-gray-800","font-bold"],[1,"w-full","mt-2"],[1,"h-2.5","rounded-full",3,"ngClass"]],template:function(o,p){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),f(6,"mat-icon",5),i()(),t(7,"h2",6),r(8,"Detalle de Cr\xE9dito"),i()(),u(9,Zt,66,31,"div",7),i()()()),o&2&&(s(5),d("routerLink",Q(3,Ht)),s(),d("svgIcon","heroicons_outline:arrow-long-left"),s(3),d("ngIf",p.items))},dependencies:[ie,_,g,j,re,A,K,D,X,mt,J]});let e=l;return e})();var zo=[{path:"",component:dt},{path:"detalle/:id",component:pt},{path:"view-detalle/:id",component:ut}];export{zo as default};
