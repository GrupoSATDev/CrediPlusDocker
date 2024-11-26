import{a as De,b as Ie,c as Fe,d as Ae,e as Te,f as q}from"./chunk-DLJFFIKX.js";import{a as Ee,b as Me}from"./chunk-SZPIMU4Q.js";import{a as D}from"./chunk-VGYH6GAK.js";import"./chunk-T2JYV3CV.js";import{g as B,h as L}from"./chunk-PH3VIMM7.js";import{c as me,p as de,q as ce,r as pe,s as ue}from"./chunk-ZWQDSRGM.js";import{a as ye}from"./chunk-FJXBOPPW.js";import{B as P,C as _e,F as we,a as fe,b as ge,h as xe,l as be,n as U,p as he,s as Ce,v as Se}from"./chunk-72YUQRCJ.js";import{J as ae,K as le,M as se,Z as N,ca as ve}from"./chunk-E54QLSYT.js";import"./chunk-7HDWK74Y.js";import{b as O}from"./chunk-C2VUAL6V.js";import{d as j,e as oe,f as k,i as V,k as $,p as R,w as ne,y as re}from"./chunk-6D7RVOMY.js";import{$b as X,Cb as t,Db as r,Eb as C,Fb as z,Gb as G,Ib as Z,Ob as S,Qb as g,Xb as W,Yb as i,Za as l,Zb as c,_b as _,ac as T,ba as b,bc as M,ec as ee,fc as te,ga as h,ha as d,jc as f,ka as I,kc as E,lc as w,mc as ie,pb as x,q as J,rb as p,ua as F,va as A,ya as K,yb as Q}from"./chunk-T2GNEYCX.js";import{a as y}from"./chunk-NEB6MB4Y.js";var je=(()=>{let o=class o{constructor(e,a){this._http=e,this.appSettings=a}getCreditos(e){return this._http.get(`${this.appSettings.creditos.url.base}/${e}`)}getCredito(e){return this._http.get(`${this.appSettings.creditos.url.base}/${e}`)}putCredito(e){let a=e.id;return delete e.id,this._http.put(`${this.appSettings.creditos.url.base}/${a}`,e)}};o.\u0275fac=function(a){return new(a||o)(h(R),h(O))},o.\u0275prov=b({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();var ke=(()=>{let o=class o extends se{parse(e){if(e){let[a,s,u]=e.split("-").map(Number);return new Date(a,s-1,u)}return null}format(e,a){let s=e.getFullYear(),u=(e.getMonth()+1).toString().padStart(2,"0");return`${e.getDate().toString().padStart(2,"0")}/${u}/${s}`}};o.\u0275fac=(()=>{let e;return function(s){return(e||(e=K(o)))(s||o)}})(),o.\u0275prov=b({token:o,factory:o.\u0275fac});let n=o;return n})();var Be=(n,o)=>({"bg-crediblue-50":n,"bg-credigray-100":o});function Oe(n,o){n&1&&(t(0,"mat-error"),i(1,"El valor es requerido!"),r())}function Pe(n,o){n&1&&(t(0,"mat-error"),i(1,"El valor ingresado no puede superar el cupo disponible!"),r())}var Le={validation:!1},Ve=(()=>{let o=class o{constructor(){this._matData=d(ce),this.swalService=d(L),this.tipoSolicitudService=d(Te),this.tipoSolicitud$=this.tipoSolicitudService.getTipos().pipe(J(e=>{let a=e.data.find(s=>s.nombre==="Desembolsos");return a&&(this.idSolicitud=a.id),e})).subscribe(),this.cupo=new Ce(""),this.fuseService=d(B),this.solicitudService=d(Ie),this.dialogRef=d(de)}validarCampo(){this.cupoAvance=this._matData.data.cupoDisponible*20/100,this.cupo.setValidators(U.compose([U.required,qe(this.cupoAvance)])),this.cupo.updateValueAndValidity()}onSave(){let e={cupo:Number(this.cupo.value),idTipoSolicitud:this.idSolicitud};this.fuseService.open(y({},D)).afterClosed().subscribe(s=>{s==="confirmed"?this.solicitudService.postSolicitudes(e).subscribe(u=>{this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},u=>{this.swalService.ToastAler({icon:"info",title:u.error.errorMenssages[0],timer:6e3})}):this.closeDialog()})}closeDialog(){this.dialogRef.close()}ngOnInit(){this.validarCampo()}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=I({type:o,selectors:[["app-dialog-confirm-desembolso"]],standalone:!0,features:[T([Fe(Le)]),M],decls:25,vars:17,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:text-left"],["floatLabel","always",1,"w-full"],["matInput","","thousandSeparator",".","placeholder","Valor solicitado",3,"formControl","mask"],[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","gap-2","items-center","justify-center","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-stroked-button","",1,"sm:w-auto","w-full","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"matDialogClose"],["mat-flat-button","",1,"sm:w-auto","w-full","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color","matDialogClose","ngClass","disabled"]],template:function(a,s){a&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),C(3,"mat-icon",3),r(),t(4,"div",4)(5,"div",5),i(6," Confirmacion "),r(),t(7,"div",6),i(8," Tu cupo disponible para avance es de "),t(9,"b"),i(10),f(11,"currency"),r(),i(12,", puedes solicitar un valor menor o igual a este. "),r()()(),t(13,"div",7)(14,"mat-form-field",8)(15,"mat-label"),i(16,"Valor"),r(),C(17,"input",9),x(18,Oe,2,0,"mat-error",10)(19,Pe,2,0,"mat-error",10),r()(),t(20,"div",11)(21,"button",12),i(22," Cancelar "),r(),t(23,"button",13),S("click",function(){return s.onSave()}),i(24," Confirmar "),r()()()),a&2&&(l(3),p("svgIcon","heroicons_solid:question-mark-circle"),l(7),c(w(11,11,s.cupoAvance,"USD")),l(7),p("formControl",s.cupo)("mask","separator.0"),l(),p("ngIf",s.cupo.touched&&s.cupo.hasError("required")),l(),p("ngIf",(s.cupo.touched||s.cupo.dirty)&&s.cupo.hasError("notEqual")),l(2),p("matDialogClose","cancelled"),l(2),p("color","primary")("matDialogClose","confirmed")("ngClass",ee(14,Be,s.cupo.valid,s.cupo.invalid))("disabled",s.cupo.invalid))},dependencies:[P,be,he,N,xe,ve,we,fe,ue,_e,Se,k,ge,$,Ae,j],styles:[".custom-dialog-container{width:100%}@media (min-width: 600px){  .custom-dialog-container{width:40%}}@media (min-width: 1280px){  .custom-dialog-container{width:33.333333%}}"]});let n=o;return n})();function qe(n){return o=>{let m=o.value;return console.log(n),m>n?{notEqual:!0}:null}}var $e=(()=>{let o=class o{constructor(e,a){this._http=e,this.appSettings=a}getDetalle(e){return this._http.get(`${this.appSettings.detalleConsumos.url.base}/${e}`)}getConsumo(e){return this._http.get(`${this.appSettings.detalleConsumos.url.base}/${e}`)}getConsumoTrabajador(e){return this._http.get(`${this.appSettings.detalleConsumos.url.baseTrabajador}/${e}`)}postDetalle(e){return this._http.post(this.appSettings.detalleConsumos.url.base,e)}postDesembolso(e){return this._http.post(this.appSettings.detalleConsumos.url.base,e)}getResumen(e){return this._http.get(`${this.appSettings.detalleConsumos.url.base}/trabajador/${e}`)}patchConsumo(e){let a=e.id;delete e.id;let{idEstado:s}=e;return this._http.patch(`${this.appSettings.detalleConsumos.url.base}/${a}?idEstado=${s}`,{})}};o.\u0275fac=function(a){return new(a||o)(h(R),h(O))},o.\u0275prov=b({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();var He=(n,o,m)=>({"bg-green-600":n,"bg-yellow-600":o,"bg-red-600":m});function ze(n,o){n&1&&(t(0,"p",16),i(1,"Movimientos"),r())}function Ge(n,o){if(n&1){let m=Z();z(0),t(1,"div",25)(2,"button",26),S("click",function(){F(m);let a=g().$implicit,s=g(3);return A(s.onReject(a.id))}),i(3," Rechazar "),r(),t(4,"button",27),S("click",function(){F(m);let a=g().$implicit,s=g(3);return A(s.onSave(a.id))}),i(5," Aprobar "),r()(),G()}}function Ze(n,o){if(n&1&&(z(0),t(1,"fuse-card",20)(2,"div",21)(3,"p",10),i(4),r(),t(5,"p",10),i(6),f(7,"date"),r()(),t(8,"div",21)(9,"p",10),i(10,"Factura: "),t(11,"span",11),i(12),r()(),t(13,"p",10),i(14,"Valor: "),t(15,"span",11),i(16),f(17,"currency"),r()()(),t(18,"div",21)(19,"p",10),i(20,"Cuotas: "),t(21,"span",11),i(22),r()(),t(23,"p",10),i(24),r()(),t(25,"div",21)(26,"p",10),i(27,"Tipo: "),t(28,"span",11),i(29),r()()(),t(30,"div",22),C(31,"p",23),r(),x(32,Ge,6,0,"ng-container",24),r(),G()),n&2){let m=o.$implicit,e=g(3);l(4),c(m.nombreSubEmpresa),l(2),c(w(7,9,m.fechaCreacion,"dd/MM/yyyy")),l(6),_(" ",m.numeroFactura," "),l(4),_(" ",E(17,12,m.montoConsumo)," "),l(6),_(" ",m.cantidadCuotas," "),l(2),c(m.nombreEstadoCredito),l(5),_(" ",m.nombreTipoConsumo," "),l(2),p("ngClass",te(14,He,m.idEstadoCredito==e.CodigosDetalleConsumo.APROBADA,m.idEstadoCredito==e.CodigosDetalleConsumo.EN_REVISION,m.idEstadoCredito==e.CodigosDetalleConsumo.RECHAZADA)),l(),p("ngIf",m.idEstadoCredito==e.CodigosDetalleConsumo.EN_REVISION)}}function Ue(n,o){if(n&1&&(t(0,"div",17)(1,"div",18),x(2,Ze,33,18,"ng-container",19),r()()),n&2){let m=g(2);l(2),p("ngForOf",m.items.detalleConsumos)}}function Ye(n,o){n&1&&(t(0,"div",3)(1,"fuse-alert",28)(2,"span",29),i(3,"Informaci\xF3n"),r(),i(4," No tienes movimientos realizados en este momento. "),r()()),n&2&&(l(),p("type","info")("appearance","outline"))}function Je(n,o){if(n&1){let m=Z();t(0,"div",1)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h2",6),i(5,"Detalle de Cr\xE9dito"),r()(),t(6,"div",7)(7,"div",8)(8,"div")(9,"h3",9),i(10),r(),t(11,"p",10),i(12,"Identificaci\xF3n: "),t(13,"span",11),i(14),r()(),t(15,"p",10),i(16,"Empresa: "),t(17,"span",11),i(18),r()(),t(19,"p",10),i(20,"Cargo: "),t(21,"span",11),i(22),r()(),t(23,"p",10),i(24,"Correo: "),t(25,"span",11),i(26),r()(),t(27,"p",10),i(28,"Direcci\xF3n: "),t(29,"span",11),i(30),r()(),t(31,"p",10),i(32,"Tel\xE9fono: "),t(33,"span",11),i(34),r()()(),t(35,"div")(36,"p",10),i(37,"N\xFAmero de cr\xE9dito: "),t(38,"span",11),i(39),r()(),t(40,"p",10),i(41,"Cupo aprobado: "),t(42,"span",11),i(43),f(44,"currency"),r()(),t(45,"p",10),i(46,"Tasa de interes: "),t(47,"span",11),i(48),r()(),t(49,"p",10),i(50,"Fecha de aprobacion: "),t(51,"span",11),i(52),f(53,"date"),r()(),t(54,"p",10),i(55,"Fecha de vencimiento: "),t(56,"span",11),i(57),f(58,"date"),r()(),t(59,"p",10),i(60,"Cupo utilizado: "),t(61,"span",11),i(62),f(63,"currency"),r()(),t(64,"p",10),i(65,"Saldo Disponible: "),t(66,"span",11),i(67),f(68,"currency"),r()(),t(69,"button",12),S("click",function(){F(m);let a=g();return A(a.onSolicitud())}),i(70," Solicitar avance "),r()()(),C(71,"hr",13),x(72,ze,2,0,"p",14)(73,Ue,3,1,"div",15)(74,Ye,5,2,"ng-template",null,0,ie),r()()()()}if(n&2){let m=W(75),e=g();l(10),X("",e.items.trabajador.primerNombre," ",e.items.trabajador.segundoNombre," ",e.items.trabajador.primerApellido," ",e.items.trabajador.segundoApellido," "),l(4),c(e.items.trabajador.numDoc),l(4),c(e.items.nombreSubEmpresa),l(4),c(e.items.trabajador.cargo),l(4),c(e.items.trabajador.correo),l(4),c(e.items.trabajador.direccion),l(4),c(e.items.trabajador.telefono),l(5),c(e.items.numCredito),l(4),c(E(44,20,e.items.cupoAprobado)),l(5),_("",e.items.porcTasaInteres,"%"),l(4),c(w(53,22,e.items.fechaAprobacion,"dd/MM/yyyy")),l(5),c(w(58,25,e.items.fechaVencimiento,"dd/MM/yyyy")),l(5),c(E(63,28,e.items.cupoConsumido)),l(5),c(E(68,30,e.items.cupoDisponible)),l(5),p("ngIf",e.items.detalleConsumos),l(),p("ngIf",e.items.detalleConsumos.length)("ngIfElse",m)}}function Ke(n,o){n&1&&(t(0,"div",2)(1,"div",3)(2,"fuse-alert",28)(3,"span",29),i(4,"Informaci\xF3n"),r(),i(5," No cuentas con cr\xE9ditos activos. "),r()()()),n&2&&(l(2),p("type","info")("appearance","outline"))}var Y=(()=>{let o=class o{constructor(){this.toasService=d(De),this.fuseService=d(B),this.estadosDatosService=d(Ee),this.activatedRoute=d(ne),this.creditoService=d(je),this.detalleConsumoService=d($e),this.router=d(re),this.datePipe=d(V),this.data=[],this.capital=[],this.estadoCredito=[],this.tasas=[],this.idCredito="",this._matDialog=d(pe),this.swalService=d(L),this.CodigosDetalleConsumo=q}ngOnDestroy(){this.subcription$.unsubscribe()}onSolicitud(){this._matDialog.open(Ve,{data:{data:this.items},disableClose:!0,panelClass:"custom-dialog-container"})}onSave(e){let a={idEstado:q.APROBADA,id:e};this.fuseService.open(y({},D)).afterClosed().subscribe(u=>{u==="confirmed"&&(this.subcription$=this.detalleConsumoService.patchConsumo(a).subscribe(v=>{v.isExitoso&&(this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.getCredito(this.idCredito))},v=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}))})}onReject(e){let a={idEstado:q.RECHAZADA,id:e};this.fuseService.open(y({},D)).afterClosed().subscribe(u=>{u==="confirmed"&&(this.subcription$=this.detalleConsumoService.patchConsumo(a).subscribe(v=>{v.isExitoso&&(this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.getCredito(this.idCredito))},v=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}))})}ngOnInit(){this.idCredito="Trabajador",this.getCredito(this.idCredito)}getCredito(e){this.subcription$=this.creditoService.getCredito(e).subscribe(a=>{this.items=a.data})}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=I({type:o,selectors:[["app-form-view-detalle"]],standalone:!0,features:[T([{provide:le,useClass:ke},{provide:ae,useValue:"en-GB"},V]),M],decls:2,vars:1,consts:[["noTiene",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","mx-auto","overflow-hidden","w-full","max-w-5xl"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],[1,"text-lg","sm:text-xl","font-bold","text-white"],[1,"p-4","sm:p-6"],[1,"mb-4","grid","grid-cols-1","md:grid-cols-2","gap-4","justify-items-stretch","lg:justify-items-center"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"font-medium","text-gray-600"],[1,"text-md","text-secondary"],["mat-flat-button","",1,"lg:w-auto","w-full","mt-4","bg-green-600","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click"],[1,"my-4"],["class","lg:text-center text-lg font-semibold font-bold mb-6",4,"ngIf"],["class","mb-4",4,"ngIf","ngIfElse"],[1,"lg:text-center","text-lg","font-semibold","font-bold","mb-6"],[1,"mb-4"],[1,"flex","flex-wrap","gap-2.5","justify-center"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","p-6","rounded-2xl","shadow-2xl","w-full","md:w-1/2","lg:w-96"],[1,"flex","justify-between"],[1,"w-full","mt-2"],[1,"h-2.5","rounded-full",3,"ngClass"],[4,"ngIf"],[1,"flex","justify-between","items-center","mt-2","p-4","gap-2.5"],["mat-flat-button","",1,"lg:w-auto","w-full","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],["mat-flat-button","",1,"lg:w-auto","w-full","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(a,s){a&1&&x(0,Je,76,32,"div",1)(1,Ke,6,2,"div",2),a&2&&Q(s.items?0:1)},dependencies:[me,$,V,P,N,oe,k,Me,j,ye]});let n=o;return n})();var Yt=[{path:"",component:Y},{path:"view-detalle/:id",component:Y}];export{Yt as default};
