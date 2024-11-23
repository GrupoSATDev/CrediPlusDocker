import{a as pt}from"./chunk-FF47PEVP.js";import{a as ot}from"./chunk-PWK6YCFI.js";import{a as at}from"./chunk-5OGSUR6A.js";import{a as nt}from"./chunk-MWGROKXN.js";import{b as ut}from"./chunk-PEZYCTDT.js";import{a as ct}from"./chunk-FYMTNMZZ.js";import{a as rt,c as dt}from"./chunk-PVQDSOLF.js";import{a as lt,b as mt,c as st}from"./chunk-3PMLFGDH.js";import{a as it}from"./chunk-X43G6GJB.js";import{a as Ye,b as et,c as tt}from"./chunk-JDCS2AFX.js";import{a as ge}from"./chunk-TWXLIPGF.js";import{a as xe,b as he}from"./chunk-XTBUANS6.js";import{a as $}from"./chunk-6IEWE3OU.js";import{a as be}from"./chunk-OFI6PGZL.js";import{a as ve}from"./chunk-YRESZUIM.js";import{a as Xe}from"./chunk-72OGA3YA.js";import{a as fe}from"./chunk-4WJQLHI3.js";import{a as G}from"./chunk-VOLXTRGQ.js";import{a as We}from"./chunk-54OZA4EP.js";import"./chunk-BGM5RQG6.js";import{g as R}from"./chunk-B24N63ZV.js";import{a as ke,b as Oe,c as je,d as Re}from"./chunk-PG3Z5E5P.js";import{h as re}from"./chunk-P2KBT4CK.js";import{a as ue}from"./chunk-UEIAJYGY.js";import"./chunk-ZFUJRZBK.js";import{A as Je,C as Ke,E as B,F as ce,J as L,b as ne,c as le,e as Be,i as j,l as de,n as h,p as pe,q as Ge,s as $e,u as qe,v as ze,w as Ue,x as He,y as Ze,z as Qe}from"./chunk-XMPVE5LH.js";import{$ as Ve,Q as oe,R as ae,ea as me,fa as se,ja as M}from"./chunk-AAD5V3QY.js";import"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import{a as Le}from"./chunk-K4NG4L4V.js";import{b as te,d as O,e as ie}from"./chunk-FSJGACMT.js";import{Cb as V,Cc as Ne,Dc as _,Eb as g,Gc as I,Lb as E,Mb as o,Mc as Pe,Nb as u,Ob as k,Qa as a,Qb as W,Ub as T,Vb as A,Wb as X,Yb as we,Zb as Me,_ as J,ba as De,bc as x,cc as S,dc as F,ec as Q,ga as Se,gb as f,ha as c,ib as s,ma as D,pb as y,q as P,qb as Te,rb as Ae,sb as Fe,tb as t,ub as i,vb as v,wa as H,wb as b,xa as Z,xb as C,xc as Y,yc as ee,zb as K,zc as w}from"./chunk-YBEOGPR3.js";import{a as U,d as Ie}from"./chunk-NEB6MB4Y.js";var q=(()=>{let n=class n{constructor(l,m){this._http=l,this.appSettings=m}getCreditos(l){return this._http.get(`${this.appSettings.creditos.url.base}/${l}`)}getCredito(l){return this._http.get(`${this.appSettings.creditos.url.base}/${l}`)}putCredito(l){let m=l.id;return delete l.id,this._http.put(`${this.appSettings.creditos.url.base}/${m}`,l)}};n.\u0275fac=function(m){return new(m||n)(Se(Pe),Se(Le))},n.\u0275prov=De({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var N=function(e){return e.EN_PROCESO="EnProceso",e.BLOQUEADO="Bloqueado",e.VENCIDO="Vencido",e.EN_REVISION="EnRevision",e.CERRADO="Cerrado",e.APROBADO="Aprobado",e}(N||{}),ye=function(e){return e.APROBADO="e626ea69-e915-5462-be9a-905326714782",e.RECHAZADA="",e}(ye||{});function Et(e,n){if(e&1&&(b(0),v(1,"app-custom-table",18),C()),e&2){let r=g(2);a(),s("columns",r.columns)("displayedColumns",r.columns)("columnPropertyMap",r.columnPropertyMap)("data",r.data)("buttons",r.buttons)("searchTerm",r.searchTerm)}}function It(e,n){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos en revisi\xF3n hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function Dt(e,n){if(e&1&&f(0,Et,2,6,"ng-container",17)(1,It,6,2,"ng-template",null,1,Q),e&2){let r=E(2),l=g();s("ngIf",l.data.length)("ngIfElse",r)}}function Tt(e,n){if(e&1&&(b(0),v(1,"app-custom-table",18),C()),e&2){let r=g(2);a(),s("columns",r.columnsAprobadas)("displayedColumns",r.columnsAprobadas)("columnPropertyMap",r.columnPropertyAprobadas)("data",r.data)("buttons",r.buttonsView)("searchTerm",r.searchTerm)}}function At(e,n){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos aprobados hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function Ft(e,n){if(e&1&&f(0,Tt,2,6,"ng-container",17)(1,At,6,2,"ng-template",null,1,Q),e&2){let r=E(2),l=g();s("ngIf",l.data.length)("ngIfElse",r)}}function wt(e,n){if(e&1&&(b(0),v(1,"app-custom-table",18),C()),e&2){let r=g(2);a(),s("columns",r.columnsAprobadas)("displayedColumns",r.columnsAprobadas)("columnPropertyMap",r.columnPropertyAprobadas)("data",r.data)("buttons",r.buttons)("searchTerm",r.searchTerm)}}function Mt(e,n){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos vencidos hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function Nt(e,n){if(e&1&&f(0,wt,2,6,"ng-container",17)(1,Mt,6,2,"ng-template",null,1,Q),e&2){let r=E(2),l=g();s("ngIf",l.data.length)("ngIfElse",r)}}function Pt(e,n){if(e&1&&(b(0),v(1,"app-custom-table",18),C()),e&2){let r=g(2);a(),s("columns",r.columnsAprobadas)("displayedColumns",r.columnsAprobadas)("columnPropertyMap",r.columnPropertyAprobadas)("data",r.data)("buttons",r.buttons)("searchTerm",r.searchTerm)}}function Vt(e,n){e&1&&(t(0,"div",19)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),o(4,"Informaci\xF3n"),i(),o(5," No hay cr\xE9ditos bloqueados hasta el momento. "),i()()()),e&2&&(a(2),s("type","info")("appearance","outline"))}function kt(e,n){if(e&1&&f(0,Pt,2,6,"ng-container",17)(1,Vt,6,2,"ng-template",null,1,Q),e&2){let r=E(2),l=g();s("ngIf",l.data.length)("ngIfElse",r)}}var ft=(()=>{let n=class n{constructor(){this.datePipe=c(_),this.router=c(O),this.estadoDatosService=c(G),this.creditoService=c(q),this.selectedTab=N.EN_REVISION,this.currencyPipe=c(I),this.searchTerm="",this.data=[],this.columns=["Fecha de solicitud","Solicitante","Cupo solicitado","Empresa","Estado"],this.columnsAprobadas=["Fecha de aprobaci\xF3n","Solicitante","Cupo aprobado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Solicitante:"nombreTrabajador","Cupo solicitado":"cupoSolicitado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.columnPropertyAprobadas={"Fecha de aprobaci\xF3n":"fechaAprobacion",Solicitante:"nombreTrabajador","Cupo aprobado":"cupoAprobado",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:l=>{console.log("Approve",l),this.selectedData=l,this.router.navigate(["pages/gestion-creditos/creditos/detalle",this.selectedData.id])}}],this.buttonsView=[{label:"View",icon:"visibility",action:l=>{console.log("Approve",l),this.selectedData=l,this.router.navigate(["pages/gestion-creditos/creditos/view-detalle",this.selectedData.id])}}],this.tabChanged=l=>{console.log("tabChangeEvent => ",l),console.log("index => ",l.index),this.selectedTab=l.index==0?N.EN_REVISION:l.index==1?N.APROBADO:l.index==2?N.VENCIDO:l.index==3?N.BLOQUEADO:N.EN_REVISION,this.getCreditos(this.selectedTab)}}getCreditos(l){this.subcription$=this.creditoService.getCreditos(l).pipe(P(m=>(m.data.forEach(d=>{d.estado?d.estado=$.ACTIVO:d.estado=$.INACTIVO}),m)),P(m=>(m.data.forEach(d=>{d.fechaCreacion=this.datePipe.transform(d.fechaCreacion,"dd/MM/yyyy"),d.fechaAprobacion=this.datePipe.transform(d.fechaAprobacion,"dd/MM/yyyy"),d.cupoAprobado=this.currencyPipe.transform(d.cupoAprobado,"USD","symbol","1.2-2"),d.cupoSolicitado=this.currencyPipe.transform(d.cupoSolicitado,"USD","symbol","1.2-2")}),m))).subscribe(m=>{m?this.data=m.data:this.data=[]},m=>{this.data=[]})}onSearch(l){let m=l.target;this.searchTerm=m.value.trim().toLowerCase()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(m=>{m&&this.getCreditos(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCreditos(this.selectedTab),this.listenGrid()}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=D({type:n,selectors:[["app-grid-creditos"]],standalone:!0,features:[T([_,I]),A],decls:20,vars:5,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","En revisi\xF3n"],["matTabContent",""],["label","Aprobados"],["label","Vencidos"],["label","Bloqueados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(m,d){if(m&1){let p=K();t(0,"div",2)(1,"div",3)(2,"div",4),o(3,"Cr\xE9ditos"),i(),t(4,"div",5)(5,"mat-form-field",6),v(6,"mat-icon",7),t(7,"input",8),V("input",function(z){return H(p),Z(d.onSearch(z))}),i()()()(),t(8,"div",9)(9,"div",10)(10,"mat-tab-group",11,0),V("selectedTabChange",function(z){return H(p),Z(d.tabChanged(z))}),t(12,"mat-tab",12),f(13,Dt,3,2,"ng-template",13),i(),t(14,"mat-tab",14),f(15,Ft,3,2,"ng-template",13),i(),t(16,"mat-tab",15),f(17,Nt,3,2,"ng-template",13),i(),t(18,"mat-tab",16),f(19,kt,3,2,"ng-template",13),i()()()()()}m&2&&(a(5),s("subscriptSizing","dynamic"),a(),s("svgIcon","heroicons_solid:magnifying-glass"),a(),s("autocomplete","off")("placeholder","Buscar"),a(3),s("animationDuration","500"))},dependencies:[Xe,j,M,L,mt,lt,st,w,ue]});let e=n;return e})();var jt=()=>["/pages/gestion-creditos/creditos"];function Rt(e,n){if(e&1&&(t(0,"mat-option",33),o(1),i()),e&2){let r=n.$implicit;s("value",r.id),a(),u(r.nombre)}}function Bt(e,n){if(e&1&&(b(0),f(1,Rt,2,2,"mat-option",32),C()),e&2){let r=n.ngIf;a(),s("ngForOf",r.data)}}function Lt(e,n){if(e&1&&(t(0,"mat-option",33),o(1),i()),e&2){let r=n.$implicit;s("value",r.id),a(),u(r.detalleInversion+" - $"+r.rubroInversion)}}function Gt(e,n){if(e&1&&(b(0),f(1,Lt,2,2,"mat-option",32),C()),e&2){let r=n.ngIf;a(),s("ngForOf",r.data)}}function $t(e,n){if(e&1&&(t(0,"mat-form-field",19)(1,"mat-label"),o(2,"Tasa de interes EA"),i(),t(3,"mat-select",34)(4,"mat-option",33),o(5),i()()()),e&2){let r=n.$implicit;a(3),s("formControlName","idTasaInteres"),a(),s("value",r.id),a(),u(r.porcentaje)}}function qt(e,n){e&1&&Ae(0,$t,6,3,"mat-form-field",19,Te),e&2&&Fe(n.data)}function zt(e,n){e&1&&(t(0,"div",23)(1,"fuse-alert",35)(2,"span",36),o(3,"Informaci\xF3n"),i(),o(4," No hay tasas de inter\xE9s disponibles, por favor comuniquese con el administrador. "),i()()),e&2&&(a(),s("type","info")("appearance","outline"))}function Ut(e,n){e&1&&(t(0,"mat-error"),o(1," La cantidad de cuotas es requirida! "),i())}function Ht(e,n){e&1&&(t(0,"mat-error"),o(1," La cuota m\xEDnima es 1."),i())}function Zt(e,n){e&1&&(t(0,"mat-error"),o(1," La cuota maxima es 36."),i())}function Qt(e,n){e&1&&(t(0,"mat-error"),o(1,"El cupo aprobado no puede superar el 40% del salario devengado!"),i())}function Jt(e,n){e&1&&(t(0,"mat-error"),o(1," El cupo aprobado es requirido! "),i())}function Kt(e,n){e&1&&(t(0,"mat-error"),o(1," El cupo aprobado no puede ser mayor que el valor solicitado! "),i())}function Wt(e,n){e&1&&(t(0,"mat-error"),o(1," La fecha de vencimiento es requirida! "),i())}function Xt(e,n){e&1&&(t(0,"mat-error"),o(1," La fecha de corte es requirida! "),i())}function Yt(e,n){if(e&1){let r=K();t(0,"div",11)(1,"div",12)(2,"div")(3,"h3",13),o(4),i(),t(5,"p",14),o(6,"Identificaci\xF3n: "),t(7,"span",15),o(8),i()(),t(9,"p",14),o(10,"Empresa: "),t(11,"span",15),o(12),i()(),t(13,"p",16),o(14,"Cargo: "),t(15,"span",15),o(16),i()(),t(17,"p",14),o(18,"Correo: "),t(19,"span",15),o(20),i()(),t(21,"p",14),o(22,"Direcci\xF3n: "),t(23,"span",15),o(24),i()(),t(25,"p",14),o(26,"Tel\xE9fono: "),t(27,"span",15),o(28),i()()(),t(29,"div")(30,"p",14),o(31,"N\xFAmero de cr\xE9dito: "),t(32,"span",15),o(33),i()(),t(34,"p",14),o(35,"Cupo solicitado: "),t(36,"span",15),o(37),x(38,"currency"),i()(),t(39,"p",14),o(40,"Fecha de Solicitud: "),t(41,"span",15),o(42),x(43,"date"),i()()()(),v(44,"hr"),t(45,"div")(46,"p",17),o(47,"Informaci\xF3n de Cr\xE9dito"),i(),t(48,"form",18)(49,"mat-form-field",19)(50,"mat-label"),o(51,"Tipo de pago"),i(),t(52,"mat-select",20),f(53,Bt,2,1,"ng-container",21),x(54,"async"),i()(),t(55,"mat-form-field",19)(56,"mat-label"),o(57,"Capital de inversi\xF3n"),i(),t(58,"mat-select",22),f(59,Gt,2,1,"ng-container",21),x(60,"async"),i()(),f(61,qt,2,0),x(62,"async"),f(63,zt,5,2,"div",23),t(64,"mat-form-field",19)(65,"mat-label"),o(66,"Cantidad de cuotas"),i(),v(67,"input",24),f(68,Ut,2,0,"mat-error")(69,Ht,2,0,"mat-error")(70,Zt,2,0,"mat-error"),i(),t(71,"mat-form-field",19)(72,"mat-label"),o(73,"Cupo sugerido"),i(),v(74,"input",25),f(75,Qt,2,0,"mat-error",21),i(),t(76,"mat-form-field",19)(77,"mat-label"),o(78,"Cupo aprobado"),i(),v(79,"input",26),f(80,Jt,2,0,"mat-error")(81,Kt,2,0,"mat-error"),i(),t(82,"mat-form-field",19)(83,"mat-label"),o(84,"Fecha de vencimiento"),i(),v(85,"input",27)(86,"mat-datepicker-toggle",28)(87,"mat-datepicker",null,0),f(89,Wt,2,0,"mat-error"),i(),t(90,"mat-form-field",19)(91,"mat-label"),o(92,"Fecha de corte"),i(),v(93,"input",27)(94,"mat-datepicker-toggle",28)(95,"mat-datepicker",null,1),f(97,Xt,2,0,"mat-error"),i(),t(98,"mat-form-field",19)(99,"mat-label"),o(100,"Fecha limite de pago"),i(),v(101,"input",27)(102,"mat-datepicker-toggle",28)(103,"mat-datepicker",null,2),i()()(),b(105),t(106,"div",29)(107,"button",30),o(108," Rechazar "),i(),t(109,"button",31),V("click",function(){H(r);let m=g();return Z(m.onSave())}),o(110," Aprobar "),i()(),C(),i()}if(e&2){let r,l=E(88),m=E(96),d=E(104),p=g();a(4),W("",p.items.trabajador.primerNombre," ",p.items.trabajador.segundoNombre," ",p.items.trabajador.primerApellido," ",p.items.trabajador.segundoApellido," "),a(4),u(p.items.trabajador.numDoc),a(4),u(p.items.nombreSubEmpresa),a(4),u(p.items.trabajador.cargo),a(4),u(p.items.trabajador.correo),a(4),u(p.items.trabajador.direccion),a(4),u(p.items.trabajador.telefono),a(5),u(p.items.numCredito),a(4),u(S(38,44,p.items.cupoSolicitado)),a(5),u(F(43,46,p.items.fechaCreacion,"dd/MM/yyyy")),a(6),s("formGroup",p.form),a(4),s("formControlName","idTipoPago"),a(),s("ngIf",S(54,49,p.tipoPagos$)),a(5),s("formControlName","idCapitalInversion"),a(),s("ngIf",S(60,51,p.capital$)),a(2),y((r=S(62,53,p.tasas$))?61:63,r),a(6),s("formControlName","cantCuotas")("min",1)("max",36),a(),y(p.form.get("cantCuotas").hasError("required")?68:-1),a(),y(p.form.get("cantCuotas").hasError("min")?69:-1),a(),y(p.form.get("cantCuotas").hasError("max")?70:-1),a(4),s("formControlName","capacidadEndeudamiento")("readonly",!0),a(),s("ngIf",(p.cupoAprobado.touched||p.cupoAprobado.dirty)&&p.cupoAprobado.hasError("exceedsBalance")),a(4),s("formControlName","cupoAprobado"),a(),y(p.form.get("cupoAprobado").hasError("required")?80:-1),a(),y(p.form.get("cupoAprobado").hasError("exceedsBalance")?81:-1),a(4),s("matDatepicker",l)("formControlName","fechaVencimiento"),a(),s("for",l),a(3),y(p.form.get("fechaVencimiento").hasError("required")?89:-1),a(4),s("matDatepicker",m)("formControlName","fechaCorte"),a(),s("for",m),a(3),y(p.form.get("fechaCorte").hasError("required")?97:-1),a(4),s("matDatepicker",d)("formControlName","fechaLimitePago"),a(),s("for",d),a(5),s("disabled",p.form.invalid),a(2),s("disabled",p.form.invalid)}}var ei={validation:!1},vt=(()=>{let n=class n{constructor(){this.toasService=c(ve),this.fuseService=c(R),this.estadosDatosService=c(G),this.activatedRoute=c(te),this.creditoService=c(q),this.router=c(O),this.tiposPagos=c(ot),this.capitalInversion=c(it),this.estadoCreditoService=c(pt),this.tasaService=c(at),this.fb=c(Ke),this.datePipe=c(_),this.swalService=c(be),this.parametroTasa="Activas",this.tipoPagos$=this.tiposPagos.getTiposPagos().pipe(J(l=>{let m=l.data;m&&this.form.get("idTipoPago").setValue(m[0].id)})),this.capital$=this.capitalInversion.getCapitales().pipe(J(l=>{let m=l.data;m&&this.form.get("idCapitalInversion").setValue(m[0].id)})),this.estadoCredito=[],this.tasas$=this.tasaService.getTasasParametros(this.parametroTasa).pipe(J(l=>{let m=l.data;m&&this.form.get("idTasaInteres").setValue(m[0].id)})),this.idCredito="",this.CodigosEstadosSolicitudes=dt}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito),this.getEstadoCredito(),this.createForm()}maxAmountValidator(l){if(l.value===null||l.value===void 0||l.value==="")return null;console.log(l.value);let m=parseFloat(l.value.toString().replace(/,/g,""));return console.log(m),m===0?{valueZero:!0}:m>this.enDeudamiento?(console.log("Si entra"),{exceedsBalance:!0}):null}get cupoAprobado(){return this.form.get("cupoAprobado")}getCredito(l){this.subcription$=this.creditoService.getCredito(l).subscribe(m=>{this.items=m.data,this.form.get("capacidadEndeudamiento").setValue(this.items.trabajador.capacidadEndeudamiento),this.form.get("fechaLimitePago").setValue(this.datePipe.transform(this.items.fechaLimitePago,"yyyy-MM-dd")),this.enDeudamiento=this.items.trabajador.salarioDevengado*this.items.procMaxPrestamo/100})}getEstadoCredito(){this.subcription$=this.estadoCreditoService.getEstadoCreditos().pipe(P(l=>(l.data.forEach(m=>{m.estado?m.estado=$.ACTIVO:m.estado=$.INACTIVO}),l))).subscribe(l=>{this.estadoCredito=l.data})}onSave(){if(this.form.valid){let l=this.form.getRawValue(),{fechaVencimiento:d,fechaCorte:p,cupoAprobado:_e,fechaLimitePago:z,capacidadEndeudamiento:ci}=l,ht=Ie(l,["fechaVencimiento","fechaCorte","cupoAprobado","fechaLimitePago","capacidadEndeudamiento"]),bt=this.datePipe.transform(d,"yyyy-MM-dd"),Ct=this.datePipe.transform(p,"yyyy-MM-dd"),_t=this.datePipe.transform(z,"yyyy-MM-dd"),Ee=U({fechaVencimiento:bt,fechaCorte:Ct,fechaLimitePago:_t,idEstadoCredito:ye.APROBADO,cupoAprobado:Number(_e),id:this.idCredito},ht);console.log(Ee),this.fuseService.open(U({},fe)).afterClosed().subscribe(St=>{St==="confirmed"&&this.creditoService.putCredito(Ee).subscribe(yt=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["/pages/gestion-creditos/creditos"])},yt=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}createForm(){this.form=this.fb.group({cupoAprobado:["",[h.required,this.maxAmountValidator.bind(this)]],idTipoPago:[""],capacidadEndeudamiento:[{value:"",disabled:!0}],fechaLimitePago:["",[h.required]],idCapitalInversion:[""],idTasaInteres:["",[h.required]],fechaVencimiento:["",[h.required]],fechaCorte:["",[h.required]],cantCuotas:["",[h.required,h.min(1),h.max(36)]]})}ngOnDestroy(){this.subcription$.unsubscribe()}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=D({type:n,selectors:[["app-form-detalle"]],standalone:!0,features:[T([{provide:ae,useClass:ge},{provide:oe,useValue:"en-GB"},_,xe(ei)]),A],decls:10,vars:4,consts:[["picker",""],["fechaCorte",""],["limite",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden","w-full","max-w-3xl"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","grid","grid-cols-1","md:grid-cols-2","gap-4","justify-items-stretch","lg:justify-items-center"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"font-medium","text-gray-600"],[1,"text-md","text-secondary"],[1,"text-gray-600","font-semibold"],[1,"text-lg","text-gray-600","font-bold","mb-10"],[3,"formGroup"],["floatLabel","always",1,"w-full"],[3,"formControlName"],[4,"ngIf"],["placeholder","Capital de inversion",3,"formControlName"],[1,"inline-block","mb-4","print:p-0","w-full"],["matInput","","type","number","placeholder","Cantidad de cuotas",3,"formControlName","min","max"],["matInput","","value","1000000","mask","separator.0","thousandSeparator",".","placeholder","cupo sugerido",3,"formControlName","readonly"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Cupo aprobado",3,"formControlName"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-wrap","justify-end","items-center","mt-7","gap-2.5"],["mat-flat-button","",1,"lg:w-auto","w-full","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"disabled"],["mat-flat-button","",1,"lg:w-auto","w-full","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","disabled"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["placeholder","Tasa de interes",3,"formControlName"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(m,d){m&1&&(t(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div")(5,"a",7),v(6,"mat-icon",8),i()(),t(7,"h2",9),o(8,"Detalle de Cr\xE9dito"),i()(),f(9,Yt,111,55,"div",10),i()()()),m&2&&(a(5),s("routerLink",X(3,jt)),a(),s("svgIcon","heroicons_outline:arrow-long-left"),a(3),s("ngIf",d.items))},dependencies:[re,se,M,ie,w,I,_,me,Ne,j,ne,Ve,We,ee,B,qe,de,ze,pe,Ge,Je,Qe,L,Ye,et,tt,Be,ce,He,Ze,he,ue,le]});let e=n;return e})();var ti=(e,n)=>({"bg-crediblue-50":e,"bg-credigray-100":n});function ii(e,n){e&1&&(t(0,"mat-error"),o(1,"El valor es requerido!"),i())}function oi(e,n){e&1&&(t(0,"mat-error"),o(1,"El valor ingresado no puede superar el cupo disponible!"),i())}var ai={validation:!1},gt=(()=>{let n=class n{constructor(){this._matData=c(Oe),this.swalService=c(be),this.tipoSolicitudService=c(nt),this.tipoSolicitud$=this.tipoSolicitudService.getTipos().pipe(P(l=>(this.idSolicitud=l.data[0].id,l))).subscribe(),this.cupo=new $e(""),this.fuseService=c(R),this.solicitudService=c(rt),this.dialogRef=c(ke)}validarCampo(){this.cupoAvance=this._matData.data.cupoAprobado-this._matData.data.cupoAprobado*20/100,this.cupo.setValidators(h.compose([h.required,ri(this.cupoAvance)])),this.cupo.updateValueAndValidity()}onSave(){let l={cupo:Number(this.cupo.value),idTipoSolicitud:this.idSolicitud};this.fuseService.open(U({},fe)).afterClosed().subscribe(d=>{d==="confirmed"?this.solicitudService.postSolicitudes(l).subscribe(p=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},p=>{this.swalService.ToastAler({icon:"info",title:p.error.errorMenssages[0],timer:6e3})}):this.closeDialog()})}closeDialog(){this.dialogRef.close()}ngOnInit(){this.validarCampo()}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=D({type:n,selectors:[["app-dialog-confirm-desembolso"]],standalone:!0,features:[T([xe(ai)]),A],decls:25,vars:17,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:text-left"],[1,"w-full"],["matInput","","thousandSeparator",".","placeholder","Valor solicitado",3,"formControl","mask"],[4,"ngIf"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-stroked-button","",1,"fuse-mat-button-large","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"matDialogClose"],["mat-flat-button","",1,"fuse-mat-button-large","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color","matDialogClose","ngClass","disabled"]],template:function(m,d){m&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),v(3,"mat-icon",3),i(),t(4,"div",4)(5,"div",5),o(6," Confirmacion "),i(),t(7,"div",6),o(8," Tu cupo disponible para avance es de "),t(9,"b"),o(10),x(11,"currency"),i(),o(12,", puedes solicitar un valor menor o igual a este. "),i()()(),t(13,"div",7)(14,"mat-form-field",8)(15,"mat-label"),o(16,"Valor"),i(),v(17,"input",9),f(18,ii,2,0,"mat-error",10)(19,oi,2,0,"mat-error",10),i()(),t(20,"div",11)(21,"button",12),o(22," Cancelar "),i(),t(23,"button",13),V("click",function(){return d.onSave()}),o(24," Confirmar "),i()()()),m&2&&(a(3),s("svgIcon","heroicons_solid:question-mark-circle"),a(7),u(F(11,11,d.cupoAvance,"USD")),a(7),s("formControl",d.cupo)("mask","separator.0"),a(),s("ngIf",d.cupo.touched&&d.cupo.hasError("required")),a(),s("ngIf",(d.cupo.touched||d.cupo.dirty)&&d.cupo.hasError("notEqual")),a(2),s("matDialogClose","cancelled"),a(2),s("color","primary")("matDialogClose","confirmed")("ngClass",we(14,ti,d.cupo.valid,d.cupo.invalid))("disabled",d.cupo.invalid))},dependencies:[B,de,pe,me,j,M,L,ne,Re,ce,Ue,w,le,I,he,Y]});let e=n;return e})();function ri(e){return n=>{let r=n.value;return console.log(e),r>e?{notEqual:!0}:null}}var ni=()=>["/pages/gestion-creditos/creditos"],li=(e,n,r)=>({"bg-green-600":e,"bg-yellow-600":n,"bg-red-600":r});function mi(e,n){e&1&&(t(0,"p",16),o(1,"Movimientos"),i())}function si(e,n){if(e&1&&(b(0),t(1,"fuse-card",20)(2,"div",21)(3,"p",11),o(4),i(),t(5,"p",11),o(6),x(7,"date"),i()(),t(8,"div",21)(9,"p",11),o(10),i(),t(11,"p",11),o(12),x(13,"currency"),i()(),t(14,"div",21)(15,"p",11),o(16),i(),t(17,"p",11),o(18),i()(),t(19,"div",21)(20,"p",11),o(21),i()(),t(22,"div",22),v(23,"p",23),i()(),C()),e&2){let r=n.$implicit,l=g(3);a(4),u(r.nombreSubEmpresa),a(2),u(F(7,8,r.fechaCreacion,"dd/MM/yyyy")),a(4),k("Factura: ",r.numeroFactura,""),a(2),k("Valor: ",S(13,11,r.montoConsumo),""),a(4),k("Cuotas: ",r.cantidadCuotas,""),a(2),u(r.nombreEstadoCredito),a(3),k("Tipo: ",r.nombreTipoConsumo,""),a(2),s("ngClass",Me(13,li,r.idEstadoCredito==l.CodigosDetalleConsumo.APROBADA,r.idEstadoCredito==l.CodigosDetalleConsumo.EN_REVISION,r.idEstadoCredito==l.CodigosDetalleConsumo.RECHAZADA))}}function di(e,n){if(e&1&&(t(0,"div",17)(1,"div",18),f(2,si,24,17,"ng-container",19),i()()),e&2){let r=g(2);a(2),s("ngForOf",r.items.detalleConsumos)}}function pi(e,n){if(e&1&&(t(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),o(4),i(),t(5,"p",11),o(6,"Identificaci\xF3n: "),t(7,"span",12),o(8),i()(),t(9,"p",11),o(10,"Empresa: "),t(11,"span",12),o(12),i()(),t(13,"p",11),o(14,"Cargo: "),t(15,"span",12),o(16),i()(),t(17,"p",11),o(18,"Correo: "),t(19,"span",12),o(20),i()(),t(21,"p",11),o(22,"Direcci\xF3n: "),t(23,"span",12),o(24),i()(),t(25,"p",11),o(26,"Tel\xE9fono: "),t(27,"span",12),o(28),i()()(),t(29,"div")(30,"p",11),o(31,"N\xFAmero de cr\xE9dito: "),t(32,"span",12),o(33),i()(),t(34,"p",11),o(35,"Cupo aprobado: "),t(36,"span",12),o(37),x(38,"currency"),i()(),t(39,"p",11),o(40,"Tasa de interes: "),t(41,"span",12),o(42),i()(),t(43,"p",11),o(44,"Fecha de aprobaci\xF3n: "),t(45,"span",12),o(46),x(47,"date"),i()(),t(48,"p",11),o(49,"Fecha de vencimiento: "),t(50,"span",12),o(51),x(52,"date"),i()(),t(53,"p",11),o(54,"Cupo utilizado: "),t(55,"span",12),o(56),x(57,"currency"),i()(),t(58,"p",11),o(59,"Saldo disponible: "),t(60,"span",12),o(61),x(62,"currency"),i()()()(),v(63,"hr",13),f(64,mi,2,0,"p",14)(65,di,3,1,"div",15),i()),e&2){let r=g();a(4),W("",r.items.trabajador.primerNombre," ",r.items.trabajador.segundoNombre," ",r.items.trabajador.primerApellido," ",r.items.trabajador.segundoApellido," "),a(4),u(r.items.trabajador.numDoc),a(4),u(r.items.nombreSubEmpresa),a(4),u(r.items.trabajador.cargo),a(4),u(r.items.trabajador.correo),a(4),u(r.items.trabajador.direccion),a(4),u(r.items.trabajador.telefono),a(5),u(r.items.numCredito),a(4),u(S(38,19,r.items.cupoAprobado)),a(5),k("",r.items.porcTasaInteres,"%"),a(4),u(F(47,21,r.items.fechaAprobacion,"dd/MM/yyyy")),a(5),u(F(52,24,r.items.fechaVencimiento,"dd/MM/yyyy")),a(5),u(S(57,27,r.items.cupoConsumido)),a(5),u(S(62,29,r.items.cupoDisponible)),a(3),s("ngIf",r.items.detalleConsumos),a(),s("ngIf",r.items.detalleConsumos)}}var xt=(()=>{let n=class n{constructor(){this.toasService=c(ve),this.fuseService=c(R),this.estadosDatosService=c(G),this.activatedRoute=c(te),this.creditoService=c(q),this.router=c(O),this.datePipe=c(_),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this._matDialog=c(je),this.CodigosDetalleConsumo=ut}ngOnDestroy(){this.subcription$.unsubscribe()}onSolicitud(){this._matDialog.open(gt,{data:{data:this.items},width:"30%",disableClose:!0})}ngOnInit(){this.idCredito=this.activatedRoute.snapshot.paramMap.get("id"),this.getCredito(this.idCredito)}getCredito(l){this.subcription$=this.creditoService.getCredito(l).subscribe(m=>{this.items=m.data})}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=D({type:n,selectors:[["app-form-view-detalle"]],standalone:!0,features:[T([{provide:ae,useClass:ge},{provide:oe,useValue:"en-GB"},_]),A],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden","w-full","max-w-5xl"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","grid","grid-cols-1","md:grid-cols-2","gap-4","justify-items-stretch","lg:justify-items-center"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"font-medium","text-gray-600"],[1,"text-md","text-secondary"],[1,"my-4"],["class","text-lg sm:text-xl font-semibold text-gray-800 text-center mb-6",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","text-center","mb-6"],[1,"mb-4"],[1,"flex","flex-wrap","gap-2.5","justify-center"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","p-4","rounded-2xl","shadow-lg","w-full","md:w-1/2","lg:w-1/3"],[1,"flex","justify-between"],[1,"w-full","mt-2"],[1,"h-2.5","rounded-full",3,"ngClass"]],template:function(m,d){m&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),v(6,"mat-icon",5),i()(),t(7,"h2",6),o(8,"Detalle de Cr\xE9dito"),i()(),f(9,pi,66,31,"div",7),i()()()),m&2&&(a(5),s("routerLink",X(3,ni)),a(),s("svgIcon","heroicons_outline:arrow-long-left"),a(3),s("ngIf",d.items))},dependencies:[re,I,_,B,se,M,ee,w,ie,ct,Y]});let e=n;return e})();var oa=[{path:"",component:ft},{path:"detalle/:id",component:vt},{path:"view-detalle/:id",component:xt}];export{oa as default};
