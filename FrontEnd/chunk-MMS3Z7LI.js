import{a as mt}from"./chunk-O5SF67FO.js";import{a as et}from"./chunk-OUAYGTQY.js";import{a as tt}from"./chunk-6OCF44QB.js";import{a as ot}from"./chunk-QQ62V6CE.js";import{b as dt}from"./chunk-PEZYCTDT.js";import{a as it,c as lt}from"./chunk-NUDLMART.js";import{a as st}from"./chunk-ZDZCRNZ2.js";import{a as at,b as rt,c as nt}from"./chunk-OPXIPHVN.js";import{a as fe}from"./chunk-3L6CDPYN.js";import{a as Ye}from"./chunk-P6WEQ7U2.js";import{a as Ke,b as We,c as Xe}from"./chunk-VMONEH2L.js";import{a as ge,b as ve}from"./chunk-5E3BI53K.js";import{a as $}from"./chunk-6IEWE3OU.js";import{a as xe}from"./chunk-24W6POED.js";import{a as Je}from"./chunk-HKOJEADL.js";import{a as ue}from"./chunk-UFLWJOQO.js";import{a as ce}from"./chunk-4WJQLHI3.js";import{a as G}from"./chunk-HDKW2ETT.js";import{a as Qe}from"./chunk-YRFWKKCQ.js";import"./chunk-ZVTEZKTX.js";import{g as j}from"./chunk-WPQBWK4Z.js";import{a as Ve,b as Oe,c as je,d as Re}from"./chunk-4EGREALI.js";import{h as oe}from"./chunk-D266PZ43.js";import{a as pe}from"./chunk-DTC2A3GX.js";import"./chunk-QBODUMHZ.js";import{B as R,C as de,G as B,b as ae,c as re,e as Be,i as O,l as me,n as _,p as se,q as $e,s as Le,u as qe,v as He,w as ze,x as Ze,z as Ue}from"./chunk-BFUN2CON.js";import{$ as Pe,Q as te,R as ie,ea as ne,fa as le,ja as F}from"./chunk-PKP5UGVL.js";import"./chunk-WKKRDNHB.js";import"./chunk-NSFGWBZH.js";import{a as Ge}from"./chunk-X4MAXHGU.js";import{b as Y,d as V,e as ee}from"./chunk-EH2C4XHQ.js";import{e as W,f as X,g as w,i as ke,j as C,m as E,s as Ne}from"./chunk-D7SIZTGA.js";import{$b as o,Bb as De,Cb as Ae,Db as Te,Eb as we,Fb as t,Gb as i,Hb as g,Ib as b,Jb as h,Lb as Q,Rb as N,Tb as v,Y as z,_b as y,aa as Ie,ab as a,ac as c,bc as P,dc as J,fa as Ce,ga as d,hc as D,ic as A,jc as K,la as I,lc as Fe,mc as Me,q as k,qc as x,rc as S,sb as f,sc as T,tc as H,ub as s,wa as Z,xa as U}from"./chunk-KIIQGHZ6.js";import{a as q,d as Ee}from"./chunk-NEB6MB4Y.js";var L=(()=>{let l=class l{constructor(n,m){this._http=n,this.appSettings=m}getCreditos(n){return this._http.get(`${this.appSettings.creditos.url.base}/${n}`)}getCredito(n){return this._http.get(`${this.appSettings.creditos.url.base}/${n}`)}putCredito(n){let m=n.id;return delete n.id,this._http.put(`${this.appSettings.creditos.url.base}/${m}`,n)}};l.\u0275fac=function(m){return new(m||l)(Ce(Ne),Ce(Ge))},l.\u0275prov=Ie({token:l,factory:l.\u0275fac,providedIn:"root"});let e=l;return e})();var M=function(e){return e.EN_PROCESO="EnProceso",e.BLOQUEADO="Bloqueado",e.VENCIDO="Vencido",e.EN_REVISION="EnRevision",e.CERRADO="Cerrado",e.APROBADO="Aprobado",e}(M||{}),Se=function(e){return e.APROBADO="e626ea69-e915-5462-be9a-905326714782",e.RECHAZADA="",e}(Se||{});function St(e,l){if(e&1&&(b(0),g(1,"app-custom-table",18),h()),e&2){let r=v(2);a(),s("columns",r.columns)("displayedColumns",r.columns)("columnPropertyMap",r.columnPropertyMap)("data",r.data)("buttons",r.buttons)}}function _t(e,l){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos en revisi\xF3n hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function yt(e,l){if(e&1&&f(0,St,2,5,"ng-container",17)(1,_t,6,2,"ng-template",null,1,H),e&2){let r=y(2),n=v();s("ngIf",n.data.length)("ngIfElse",r)}}function Et(e,l){if(e&1&&(b(0),g(1,"app-custom-table",18),h()),e&2){let r=v(2);a(),s("columns",r.columnsAprobadas)("displayedColumns",r.columnsAprobadas)("columnPropertyMap",r.columnPropertyAprobadas)("data",r.data)("buttons",r.buttonsView)}}function It(e,l){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos aprobados hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function Dt(e,l){if(e&1&&f(0,Et,2,5,"ng-container",17)(1,It,6,2,"ng-template",null,1,H),e&2){let r=y(2),n=v();s("ngIf",n.data.length)("ngIfElse",r)}}function At(e,l){if(e&1&&(b(0),g(1,"app-custom-table",18),h()),e&2){let r=v(2);a(),s("columns",r.columnsAprobadas)("displayedColumns",r.columnsAprobadas)("columnPropertyMap",r.columnPropertyAprobadas)("data",r.data)("buttons",r.buttons)}}function Tt(e,l){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos vencidos hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function wt(e,l){if(e&1&&f(0,At,2,5,"ng-container",17)(1,Tt,6,2,"ng-template",null,1,H),e&2){let r=y(2),n=v();s("ngIf",n.data.length)("ngIfElse",r)}}function Ft(e,l){if(e&1&&(b(0),g(1,"app-custom-table",18),h()),e&2){let r=v(2);a(),s("columns",r.columnsAprobadas)("displayedColumns",r.columnsAprobadas)("columnPropertyMap",r.columnPropertyAprobadas)("data",r.data)("buttons",r.buttons)}}function Mt(e,l){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos bloqueados hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function kt(e,l){if(e&1&&f(0,Ft,2,5,"ng-container",17)(1,Mt,6,2,"ng-template",null,1,H),e&2){let r=y(2),n=v();s("ngIf",n.data.length)("ngIfElse",r)}}var pt=(()=>{let l=class l{constructor(){this.datePipe=d(C),this.router=d(V),this.estadoDatosService=d(G),this.creditoService=d(L),this.selectedTab=M.EN_REVISION,this.currencyPipe=d(E),this.data=[],this.columns=["Fecha de solicitud","Solicitante","Cupo solicitado","Empresa","Estado"],this.columnsAprobadas=["Fecha de aprobaci\xF3n","Solicitante","Cupo aprobado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo solicitado":"cupoSolicitado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.columnPropertyAprobadas={"Fecha de aprobaci\xF3n":"fechaAprobacion",Solicitante:"nombreTrabajador","Cupo aprobado":"cupoAprobado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:n=>{console.log("Approve",n),this.selectedData=n,this.router.navigate(["pages/gestion-creditos/creditos/detalle",this.selectedData.id])}}],this.buttonsView=[{label:"View",icon:"visibility",action:n=>{console.log("Approve",n),this.selectedData=n,this.router.navigate(["pages/gestion-creditos/creditos/view-detalle",this.selectedData.id])}}],this.tabChanged=n=>{console.log("tabChangeEvent => ",n),console.log("index => ",n.index),this.selectedTab=n.index==0?M.EN_REVISION:n.index==1?M.APROBADO:n.index==2?M.VENCIDO:n.index==3?M.BLOQUEADO:M.EN_REVISION,this.getCreditos(this.selectedTab)}}getCreditos(n){this.subcription$=this.creditoService.getCreditos(n).pipe(k(m=>(m.data.forEach(p=>{p.estado?p.estado=$.ACTIVO:p.estado=$.INACTIVO}),m)),k(m=>(m.data.forEach(p=>{p.fechaCreacion=this.datePipe.transform(p.fechaCreacion,"dd/MM/yyyy"),p.fechaAprobacion=this.datePipe.transform(p.fechaAprobacion,"dd/MM/yyyy"),p.cupoAprobado=this.currencyPipe.transform(p.cupoAprobado,"USD","symbol","1.2-2")}),m))).subscribe(m=>{m?this.data=m.data:this.data=[]},m=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(m=>{m&&this.getCreditos(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCreditos(this.selectedTab),this.listenGrid()}};l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=I({type:l,selectors:[["app-grid-creditos"]],standalone:!0,features:[D([C,E]),A],decls:20,vars:5,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobado"],["label","Vencido"],["label","Bloqueado"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(m,p){if(m&1){let u=Q();t(0,"div",2)(1,"div",3)(2,"div",4),o(3,"Cr\xE9ditos"),i(),t(4,"div",5)(5,"mat-form-field",6),g(6,"mat-icon",7)(7,"input",8),i()()(),t(8,"div",9)(9,"div",10)(10,"mat-tab-group",11,0),N("selectedTabChange",function(he){return Z(u),U(p.tabChanged(he))}),t(12,"mat-tab",12),f(13,yt,3,2,"ng-template",13),i(),t(14,"mat-tab",14),f(15,Dt,3,2,"ng-template",13),i(),t(16,"mat-tab",15),f(17,wt,3,2,"ng-template",13),i(),t(18,"mat-tab",16),f(19,kt,3,2,"ng-template",13),i()()()()()}m&2&&(a(5),s("subscriptSizing","dynamic"),a(),s("svgIcon","heroicons_solid:magnifying-glass"),a(),s("autocomplete","off")("placeholder","Buscar"),a(3),s("animationDuration","500"))},dependencies:[Je,O,F,B,rt,at,nt,w,pe]});let e=l;return e})();var Pt=()=>["/pages/gestion-creditos/creditos"];function Vt(e,l){if(e&1&&(t(0,"mat-option",33),o(1),i()),e&2){let r=l.$implicit;s("value",r.id),a(),c(r.nombre)}}function Ot(e,l){if(e&1&&(b(0),f(1,Vt,2,2,"mat-option",32),h()),e&2){let r=l.ngIf;a(),s("ngForOf",r.data)}}function jt(e,l){if(e&1&&(t(0,"mat-option",33),o(1),i()),e&2){let r=l.$implicit;s("value",r.id),a(),c(r.detalleInversion+" - "+r.rubroInversion)}}function Rt(e,l){if(e&1&&(b(0),f(1,jt,2,2,"mat-option",32),h()),e&2){let r=l.ngIf;a(),s("ngForOf",r.data)}}function Bt(e,l){if(e&1&&(t(0,"mat-form-field",19)(1,"mat-label"),o(2,"Tasa de interes"),i(),t(3,"mat-select",34)(4,"mat-option",33),o(5),i()()()),e&2){let r=l.$implicit;a(3),s("formControlName","idTasaInteres"),a(),s("value",r.id),a(),c(r.porcentaje)}}function Gt(e,l){e&1&&Te(0,Bt,6,3,"mat-form-field",19,Ae),e&2&&we(l.data)}function $t(e,l){e&1&&(t(0,"div",23)(1,"fuse-alert",35)(2,"span",36),o(3,"Informaci\xF3n"),i(),o(4," No hay tasas de inter\xE9s disponibles, por favor comuniquese con el administrador. "),i()()),e&2&&(a(),s("type","info")("appearance","outline"))}function Lt(e,l){e&1&&(t(0,"mat-error"),o(1,"El cupo aprobado no puede superar el 40% del salario devengado!"),i())}function qt(e,l){if(e&1){let r=Q();t(0,"div",11)(1,"div",12)(2,"div")(3,"h3",13),o(4),i(),t(5,"p",14),o(6,"Identificaci\xF3n: "),t(7,"span",15),o(8),i()(),t(9,"p",14),o(10,"Empresa: "),t(11,"span",15),o(12),i()(),t(13,"p",16),o(14,"Cargo: "),t(15,"span",15),o(16),i()(),t(17,"p",14),o(18,"Correo: "),t(19,"span",15),o(20),i()(),t(21,"p",14),o(22,"Direcci\xF3n: "),t(23,"span",15),o(24),i()(),t(25,"p",14),o(26,"Tel\xE9fono: "),t(27,"span",15),o(28),i()()(),t(29,"div")(30,"p",14),o(31,"N\xFAmero de cr\xE9dito: "),t(32,"span",15),o(33),i()(),t(34,"p",14),o(35,"Cupo solicitado: "),t(36,"span",15),o(37),x(38,"currency"),i()(),t(39,"p",14),o(40,"Fecha de Solicitud: "),t(41,"span",15),o(42),x(43,"date"),i()()()(),g(44,"hr"),t(45,"div")(46,"p",17),o(47,"Informaci\xF3n de Cr\xE9dito"),i(),t(48,"form",18)(49,"mat-form-field",19)(50,"mat-label"),o(51,"Tipo de pago"),i(),t(52,"mat-select",20),f(53,Ot,2,1,"ng-container",21),x(54,"async"),i()(),t(55,"mat-form-field",19)(56,"mat-label"),o(57,"Capital de inversi\xF3n"),i(),t(58,"mat-select",22),f(59,Rt,2,1,"ng-container",21),x(60,"async"),i()(),f(61,Gt,2,0),x(62,"async"),f(63,$t,5,2,"div",23),t(64,"mat-form-field",19)(65,"mat-label"),o(66,"Cantidad de cuotas"),i(),g(67,"input",24),i(),t(68,"mat-form-field",19)(69,"mat-label"),o(70,"Cupo sugerido"),i(),g(71,"input",25),f(72,Lt,2,0,"mat-error",21),i(),t(73,"mat-form-field",19)(74,"mat-label"),o(75,"Cupo aprobado"),i(),g(76,"input",26),i(),t(77,"mat-form-field",19)(78,"mat-label"),o(79,"Fecha de vencimiento"),i(),g(80,"input",27)(81,"mat-datepicker-toggle",28)(82,"mat-datepicker",null,0),i(),t(84,"mat-form-field",19)(85,"mat-label"),o(86,"Fecha de corte"),i(),g(87,"input",27)(88,"mat-datepicker-toggle",28)(89,"mat-datepicker",null,1),i(),t(91,"mat-form-field",19)(92,"mat-label"),o(93,"Fecha limite de pago"),i(),g(94,"input",27)(95,"mat-datepicker-toggle",28)(96,"mat-datepicker",null,2),i()()(),b(98),t(99,"div",29)(100,"button",30),o(101," Rechazar "),i(),t(102,"button",31),N("click",function(){Z(r);let m=v();return U(m.onSave())}),o(103," Aprobar "),i()(),h(),i()}if(e&2){let r,n=y(83),m=y(90),p=y(97),u=v();a(4),J("",u.items.trabajador.primerNombre," ",u.items.trabajador.segundoNombre," ",u.items.trabajador.primerApellido," ",u.items.trabajador.segundoApellido," "),a(4),c(u.items.trabajador.numDoc),a(4),c(u.items.nombreSubEmpresa),a(4),c(u.items.trabajador.cargo),a(4),c(u.items.trabajador.correo),a(4),c(u.items.trabajador.direccion),a(4),c(u.items.trabajador.telefono),a(5),c(u.items.numCredito),a(4),c(S(38,35,u.items.cupoSolicitado)),a(5),c(T(43,37,u.items.fechaCreacion,"dd/MM/yyyy")),a(6),s("formGroup",u.form),a(4),s("formControlName","idTipoPago"),a(),s("ngIf",S(54,40,u.tipoPagos$)),a(5),s("formControlName","idCapitalInversion"),a(),s("ngIf",S(60,42,u.capital$)),a(2),De((r=S(62,44,u.tasas$))?61:63,r),a(6),s("formControlName","cantCuotas"),a(4),s("formControlName","capacidadEndeudamiento")("readonly",!0),a(),s("ngIf",(u.cupoAprobado.touched||u.cupoAprobado.dirty)&&u.cupoAprobado.hasError("exceedsBalance")),a(4),s("formControlName","cupoAprobado"),a(4),s("matDatepicker",n)("formControlName","fechaVencimiento"),a(),s("for",n),a(6),s("matDatepicker",m)("formControlName","fechaCorte"),a(),s("for",m),a(6),s("matDatepicker",p)("formControlName","fechaLimitePago"),a(),s("for",p),a(5),s("disabled",u.form.invalid),a(2),s("disabled",u.form.invalid)}}var Ht={validation:!1},ct=(()=>{let l=class l{constructor(){this.toasService=d(ue),this.fuseService=d(j),this.estadosDatosService=d(G),this.activatedRoute=d(Y),this.creditoService=d(L),this.router=d(V),this.tiposPagos=d(et),this.capitalInversion=d(Ye),this.estadoCreditoService=d(mt),this.tasaService=d(tt),this.fb=d(Ue),this.datePipe=d(C),this.swalService=d(xe),this.parametroTasa="Activas",this.tipoPagos$=this.tiposPagos.getTiposPagos().pipe(z(n=>{let m=n.data;m&&this.form.get("idTipoPago").setValue(m[0].id)})),this.capital$=this.capitalInversion.getCapitales().pipe(z(n=>{let m=n.data;m&&this.form.get("idCapitalInversion").setValue(m[0].id)})),this.estadoCredito=[],this.tasas$=this.tasaService.getTasasParametros(this.parametroTasa).pipe(z(n=>{let m=n.data;m&&this.form.get("idTasaInteres").setValue(m[0].id)})),this.idCredito="",this.CodigosEstadosSolicitudes=lt}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito),this.getEstadoCredito(),this.createForm()}maxAmountValidator(n){if(n.value===null||n.value===void 0||n.value==="")return null;console.log(n.value);let m=parseFloat(n.value.toString().replace(/,/g,""));return console.log(m),m===0?{valueZero:!0}:m>this.enDeudamiento?(console.log("Si entra"),{exceedsBalance:!0}):null}get cupoAprobado(){return this.form.get("cupoAprobado")}getCredito(n){this.subcription$=this.creditoService.getCredito(n).subscribe(m=>{this.items=m.data,this.form.get("capacidadEndeudamiento").setValue(this.items.trabajador.capacidadEndeudamiento),this.form.get("fechaLimitePago").setValue(this.datePipe.transform(this.items.fechaLimitePago,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")),this.enDeudamiento=this.items.trabajador.salarioDevengado*this.items.procMaxPrestamo/100})}getEstadoCredito(){this.subcription$=this.estadoCreditoService.getEstadoCreditos().pipe(k(n=>(n.data.forEach(m=>{m.estado?m.estado=$.ACTIVO:m.estado=$.INACTIVO}),n))).subscribe(n=>{this.estadoCredito=n.data})}onSave(){if(this.form.valid){let n=this.form.getRawValue(),{fechaVencimiento:p,fechaCorte:u,cupoAprobado:_e,fechaLimitePago:he,capacidadEndeudamiento:ii}=n,gt=Ee(n,["fechaVencimiento","fechaCorte","cupoAprobado","fechaLimitePago","capacidadEndeudamiento"]),vt=this.datePipe.transform(p,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),xt=this.datePipe.transform(u,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),bt=this.datePipe.transform(he,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),ye=q({fechaVencimiento:vt,fechaCorte:xt,fechaLimitePago:bt,idEstadoCredito:Se.APROBADO,cupoAprobado:Number(_e),id:this.idCredito},gt);console.log(ye),this.fuseService.open(q({},ce)).afterClosed().subscribe(ht=>{ht==="confirmed"&&this.creditoService.putCredito(ye).subscribe(Ct=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["/pages/gestion-creditos/creditos"])},Ct=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}createForm(){this.form=this.fb.group({cupoAprobado:["",[_.required,this.maxAmountValidator.bind(this)]],idTipoPago:[""],capacidadEndeudamiento:[{value:"",disabled:!0}],fechaLimitePago:["",[_.required]],idCapitalInversion:[""],idTasaInteres:["",[_.required]],fechaVencimiento:["",[_.required]],fechaCorte:["",[_.required]],cantCuotas:["",[_.required]]})}ngOnDestroy(){this.subcription$.unsubscribe()}};l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=I({type:l,selectors:[["app-form-detalle"]],standalone:!0,features:[D([{provide:ie,useClass:fe},{provide:te,useValue:"en-GB"},C,ge(Ht)]),A],decls:10,vars:4,consts:[["picker",""],["fechaCorte",""],["limite",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden","w-full","max-w-3xl"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","grid","grid-cols-1","md:grid-cols-2","gap-4","justify-items-stretch","lg:justify-items-center"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"font-medium","text-gray-600"],[1,"text-md","text-secondary"],[1,"text-gray-600","font-semibold"],[1,"text-lg","text-gray-600","font-bold","mb-10"],[3,"formGroup"],["floatLabel","always",1,"w-full"],[3,"formControlName"],[4,"ngIf"],["placeholder","Capital de inversion",3,"formControlName"],[1,"inline-block","mb-4","print:p-0","w-full"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Cantidad de cuotas",3,"formControlName"],["matInput","","value","1000000","mask","separator.0","thousandSeparator",".","placeholder","cupo sugerido",3,"formControlName","readonly"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Cupo aprobado",3,"formControlName"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-wrap","justify-end","items-center","mt-7","gap-2.5"],["mat-flat-button","",1,"lg:w-auto","w-full","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"disabled"],["mat-flat-button","",1,"lg:w-auto","w-full","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","disabled"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["placeholder","Tasa de interes",3,"formControlName"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(m,p){m&1&&(t(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div")(5,"a",7),g(6,"mat-icon",8),i()(),t(7,"h2",9),o(8,"Detalle de Cr\xE9dito"),i()(),f(9,qt,104,46,"div",10),i()()()),m&2&&(a(5),s("routerLink",K(3,Pt)),a(),s("svgIcon","heroicons_outline:arrow-long-left"),a(3),s("ngIf",p.items))},dependencies:[oe,le,F,ee,w,E,C,ne,ke,O,ae,Pe,Qe,X,R,qe,me,se,$e,B,Ke,We,Xe,Be,de,ze,Ze,ve,pe,re]});let e=l;return e})();var zt=(e,l)=>({"bg-crediblue-50":e,"bg-credigray-100":l});function Zt(e,l){e&1&&(t(0,"mat-error"),o(1,"El valor es requerido!"),i())}function Ut(e,l){e&1&&(t(0,"mat-error"),o(1,"El valor ingresado no puede superar el cupo disponible!"),i())}var Qt={validation:!1},ut=(()=>{let l=class l{constructor(){this._matData=d(Oe),this.swalService=d(xe),this.tipoSolicitudService=d(ot),this.tipoSolicitud$=this.tipoSolicitudService.getTipos().pipe(k(n=>(this.idSolicitud=n.data[0].id,n))).subscribe(),this.cupo=new Le(""),this.fuseService=d(j),this.solicitudService=d(it),this.dialogRef=d(Ve)}validarCampo(){this.cupoAvance=this._matData.data.cupoAprobado-this._matData.data.cupoAprobado*20/100,this.cupo.setValidators(_.compose([_.required,Jt(this.cupoAvance)])),this.cupo.updateValueAndValidity()}onSave(){let n={cupo:Number(this.cupo.value),idTipoSolicitud:this.idSolicitud};this.fuseService.open(q({},ce)).afterClosed().subscribe(p=>{p==="confirmed"?this.solicitudService.postSolicitudes(n).subscribe(u=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},u=>{this.swalService.ToastAler({icon:"info",title:u.error.errorMenssages[0],timer:6e3})}):this.closeDialog()})}closeDialog(){this.dialogRef.close()}ngOnInit(){this.validarCampo()}};l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=I({type:l,selectors:[["app-dialog-confirm-desembolso"]],standalone:!0,features:[D([ge(Qt)]),A],decls:25,vars:17,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:text-left"],[1,"w-full"],["matInput","","thousandSeparator",".","placeholder","Valor solicitado",3,"formControl","mask"],[4,"ngIf"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-stroked-button","",1,"fuse-mat-button-large","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"matDialogClose"],["mat-flat-button","",1,"fuse-mat-button-large","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color","matDialogClose","ngClass","disabled"]],template:function(m,p){m&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),g(3,"mat-icon",3),i(),t(4,"div",4)(5,"div",5),o(6," Confirmacion "),i(),t(7,"div",6),o(8," Tu cupo disponible para avance es de "),t(9,"b"),o(10),x(11,"currency"),i(),o(12,", puedes solicitar un valor menor o igual a este. "),i()()(),t(13,"div",7)(14,"mat-form-field",8)(15,"mat-label"),o(16,"Valor"),i(),g(17,"input",9),f(18,Zt,2,0,"mat-error",10)(19,Ut,2,0,"mat-error",10),i()(),t(20,"div",11)(21,"button",12),o(22," Cancelar "),i(),t(23,"button",13),N("click",function(){return p.onSave()}),o(24," Confirmar "),i()()()),m&2&&(a(3),s("svgIcon","heroicons_solid:question-mark-circle"),a(7),c(T(11,11,p.cupoAvance,"USD")),a(7),s("formControl",p.cupo)("mask","separator.0"),a(),s("ngIf",p.cupo.touched&&p.cupo.hasError("required")),a(),s("ngIf",(p.cupo.touched||p.cupo.dirty)&&p.cupo.hasError("notEqual")),a(2),s("matDialogClose","cancelled"),a(2),s("color","primary")("matDialogClose","confirmed")("ngClass",Fe(14,zt,p.cupo.valid,p.cupo.invalid))("disabled",p.cupo.invalid))},dependencies:[R,me,se,ne,O,F,B,ae,Re,de,He,w,re,E,ve,W]});let e=l;return e})();function Jt(e){return l=>{let r=l.value;return console.log(e),r>e?{notEqual:!0}:null}}var Kt=()=>["/pages/gestion-creditos/creditos"],Wt=(e,l,r)=>({"bg-green-600":e,"bg-yellow-600":l,"bg-red-600":r});function Xt(e,l){e&1&&(t(0,"p",16),o(1,"Movimientos"),i())}function Yt(e,l){if(e&1&&(b(0),t(1,"fuse-card",20)(2,"div",21)(3,"p",22),o(4),i(),t(5,"p",22),o(6),x(7,"date"),i()(),t(8,"div",21)(9,"p",22),o(10),i(),t(11,"p",23),o(12),x(13,"currency"),i()(),t(14,"div",21)(15,"p",22),o(16),i(),t(17,"p",22),o(18),i()(),t(19,"div",21)(20,"p",22),o(21),i()(),t(22,"div",24),g(23,"p",25),i()(),h()),e&2){let r=l.$implicit,n=v(3);a(4),c(r.nombreSubEmpresa),a(2),c(T(7,8,r.fechaCreacion,"dd/MM/yyyy")),a(4),P("Factura: ",r.numeroFactura,""),a(2),P("Valor: ",S(13,11,r.montoConsumo),""),a(4),P("Cuotas: ",r.cantidadCuotas,""),a(2),c(r.nombreEstadoCredito),a(3),P("Tipo: ",r.nombreTipoConsumo,""),a(2),s("ngClass",Me(13,Wt,r.idEstadoCredito==n.CodigosDetalleConsumo.APROBADA,r.idEstadoCredito==n.CodigosDetalleConsumo.EN_REVISION,r.idEstadoCredito==n.CodigosDetalleConsumo.RECHAZADA))}}function ei(e,l){if(e&1&&(t(0,"div",17)(1,"div",18),f(2,Yt,24,17,"ng-container",19),i()()),e&2){let r=v(2);a(2),s("ngForOf",r.items.detalleConsumos)}}function ti(e,l){if(e&1&&(t(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),o(4),i(),t(5,"p",11),o(6,"Identificaci\xF3n: "),t(7,"span",12),o(8),i()(),t(9,"p",11),o(10,"Empresa: "),t(11,"span",12),o(12),i()(),t(13,"p",11),o(14,"Cargo: "),t(15,"span",12),o(16),i()(),t(17,"p",11),o(18,"Correo: "),t(19,"span",12),o(20),i()(),t(21,"p",11),o(22,"Direcci\xF3n: "),t(23,"span",12),o(24),i()(),t(25,"p",11),o(26,"Tel\xE9fono: "),t(27,"span",12),o(28),i()()(),t(29,"div")(30,"p",11),o(31,"N\xFAmero de cr\xE9dito: "),t(32,"span",12),o(33),i()(),t(34,"p",11),o(35,"Cupo aprobado: "),t(36,"span",12),o(37),x(38,"currency"),i()(),t(39,"p",11),o(40,"Tasa de interes: "),t(41,"span",12),o(42),i()(),t(43,"p",11),o(44,"Fecha de aprobaci\xF3n: "),t(45,"span",12),o(46),x(47,"date"),i()(),t(48,"p",11),o(49,"Fecha de vencimiento: "),t(50,"span",12),o(51),x(52,"date"),i()(),t(53,"p",11),o(54,"Cupo utilizado: "),t(55,"span",12),o(56),x(57,"currency"),i()(),t(58,"p",11),o(59,"Saldo disponible: "),t(60,"span",12),o(61),x(62,"currency"),i()()()(),g(63,"hr",13),f(64,Xt,2,0,"p",14)(65,ei,3,1,"div",15),i()),e&2){let r=v();a(4),J("",r.items.trabajador.primerNombre," ",r.items.trabajador.segundoNombre," ",r.items.trabajador.primerApellido," ",r.items.trabajador.segundoApellido," "),a(4),c(r.items.trabajador.numDoc),a(4),c(r.items.nombreSubEmpresa),a(4),c(r.items.trabajador.cargo),a(4),c(r.items.trabajador.correo),a(4),c(r.items.trabajador.direccion),a(4),c(r.items.trabajador.telefono),a(5),c(r.items.numCredito),a(4),c(S(38,19,r.items.cupoAprobado)),a(5),P("",r.items.porcTasaInteres,"%"),a(4),c(T(47,21,r.items.fechaAprobacion,"dd/MM/yyyy")),a(5),c(T(52,24,r.items.fechaVencimiento,"dd/MM/yyyy")),a(5),c(S(57,27,r.items.cupoConsumido)),a(5),c(S(62,29,r.items.cupoDisponible)),a(3),s("ngIf",r.items.detalleConsumos),a(),s("ngIf",r.items.detalleConsumos)}}var ft=(()=>{let l=class l{constructor(){this.toasService=d(ue),this.fuseService=d(j),this.estadosDatosService=d(G),this.activatedRoute=d(Y),this.creditoService=d(L),this.router=d(V),this.datePipe=d(C),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this._matDialog=d(je),this.CodigosDetalleConsumo=dt}ngOnDestroy(){this.subcription$.unsubscribe()}onSolicitud(){this._matDialog.open(ut,{data:{data:this.items},width:"30%",disableClose:!0})}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito)}getCredito(n){this.subcription$=this.creditoService.getCredito(n).subscribe(m=>{this.items=m.data})}};l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=I({type:l,selectors:[["app-form-view-detalle"]],standalone:!0,features:[D([{provide:ie,useClass:fe},{provide:te,useValue:"en-GB"},C]),A],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden","w-full","max-w-5xl"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","grid","grid-cols-1","md:grid-cols-2","gap-4","justify-items-stretch","lg:justify-items-center"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"my-4"],["class","text-lg text-black font-bold mb-6",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"text-lg","text-black","font-bold","mb-6"],[1,"mb-4"],[1,"flex","flex-wrap","gap-2.5","justify-center"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","p-4","rounded-2xl","shadow-lg","w-full","md:w-1/2","lg:w-1/3"],[1,"flex","justify-between"],[1,"text-gray-800","font-semibold"],[1,"text-gray-800","font-bold"],[1,"w-full","mt-2"],[1,"h-2.5","rounded-full",3,"ngClass"]],template:function(m,p){m&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),g(6,"mat-icon",5),i()(),t(7,"h2",6),o(8,"Detalle de Cr\xE9dito"),i()(),f(9,ti,66,31,"div",7),i()()()),m&2&&(a(5),s("routerLink",K(3,Kt)),a(),s("svgIcon","heroicons_outline:arrow-long-left"),a(3),s("ngIf",p.items))},dependencies:[oe,E,C,R,le,F,X,w,ee,st,W]});let e=l;return e})();var Uo=[{path:"",component:pt},{path:"detalle/:id",component:ct},{path:"view-detalle/:id",component:ft}];export{Uo as default};
