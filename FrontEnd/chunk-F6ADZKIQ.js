import{a as Ae}from"./chunk-XIKPUL5J.js";import{a as W}from"./chunk-XB52JV6J.js";import{a as K,b as E}from"./chunk-E3QK27E6.js";import{a as F}from"./chunk-FAEUQIFQ.js";import{a as ct,b as je}from"./chunk-P4PAYY2C.js";import{a as lt,b as mt,c as dt}from"./chunk-TTGDGER3.js";import{a as pt}from"./chunk-YY6BMIGX.js";import{a as ut}from"./chunk-F3VGIJQL.js";import{a as Fe,b as we,c as nt,d as st}from"./chunk-JOIPLBDD.js";import{a as J}from"./chunk-I3PVU3OW.js";import{b as Y}from"./chunk-LOIXTBAB.js";import{a as V}from"./chunk-JWFPCHXI.js";import{a as rt}from"./chunk-MRUWCZ3C.js";import{a as Q}from"./chunk-DTORAJAR.js";import{a as Z,b as it}from"./chunk-L5756YMZ.js";import{a as re}from"./chunk-6IEWE3OU.js";import{a as at}from"./chunk-3R6HD5RM.js";import{a as _e}from"./chunk-JBDWF4AB.js";import{a as ot}from"./chunk-CJO6YW5P.js";import{a as Ee}from"./chunk-ZWBJNS7X.js";import"./chunk-7YBFULQ5.js";import{g as X,h as et,i as ie}from"./chunk-QVE5MGEQ.js";import{C as De,E as Ye,F as Te,J as U,b as be,c as We,i as z,l as Ce,n as h,p as ve,q as ge,u as xe,x as Se,y as ye}from"./chunk-4PVPKBBG.js";import{e as M}from"./chunk-KAEQCOKJ.js";import{b as k,d as O,e as Ze}from"./chunk-C66ODKJP.js";import{c as fe}from"./chunk-YKJB7XET.js";import{h as $}from"./chunk-FUOI65R5.js";import{a as tt}from"./chunk-73F67TFK.js";import"./chunk-XTYNXB3F.js";import{b as Ke}from"./chunk-PA2SJPJO.js";import{$a as C,Ad as L,Bb as me,Cb as de,Db as ce,Eb as oe,Ec as Ue,Fb as r,Gb as b,Hb as pe,Jb as ue,Ka as n,Kb as Be,Lb as ke,Mb as Oe,Md as Qe,Nb as qe,Ob as A,Pb as I,Qb as Le,Sb as $e,W as le,Xb as _,Yb as ze,Zb as N,_b as ae,aa as Re,bb as m,fa as Me,fe as H,ga as p,ge as Je,ka as j,ke as he,l as se,mb as a,nb as o,ob as u,pb as ee,pc as He,q as R,qb as te,qc as Xe,rc as B,sb as P,ua as S,va as y,vb as D,vc as T,xb as g,yc as x,zd as q}from"./chunk-ODJKW74N.js";import{a as w,d as Ge}from"./chunk-NEB6MB4Y.js";var ft=(()=>{let d=class d{constructor(i,t){this._http=i,this.AppSettings=t}postDesembolso(i){return this._http.post(this.AppSettings.detalleConsumos.url.desembolsoBase,i)}patchDesembolso(i){let t=i.id;delete i.id;let{idEstado:e,cuentaDestino:c,numFactura:f,idCuentaBancaria:v}=i;return this._http.patch(`${this.AppSettings.detalleConsumos.url.base}/Desembolso/${t}?idEstado=${e}&numFactura=${f}&cuentaDestino=${c}&idCuentaBancaria=${v}`,{})}};d.\u0275fac=function(t){return new(t||d)(Me(Ue),Me(Ke))},d.\u0275prov=Re({token:d,factory:d.\u0275fac,providedIn:"root"});let s=d;return s})();var Tt=["stepper"];function Et(s,d){s&1&&(a(0,"mat-error"),r(1,"El campo es requerido!"),o())}function _t(s,d){s&1&&(a(0,"mat-error"),r(1,"El valor es requerido!"),o())}function Ft(s,d){s&1&&(a(0,"mat-error"),r(1,"El valor ingresado no puede superar el cupo disponible!"),o())}function wt(s,d){if(s&1&&(a(0,"mat-option",28),r(1),o()),s&2){let l=d.$implicit;m("value",l.idTipoCuenta),n(),ue("",l.nombreBanco," - ",l.nombreTipoCuenta," - ",l.numeroCuenta,"")}}function jt(s,d){s&1&&(a(0,"mat-error"),r(1,"El campo es requerido!"),o())}function At(s,d){if(s&1){let l=P();a(0,"div",29)(1,"div",30)(2,"div",31)(3,"h2",32),r(4,"Resumen de desembolso"),o(),a(5,"p",33),r(6,"Revise los detalles"),o()(),a(7,"div",34)(8,"div",35)(9,"div")(10,"h3",36),r(11,"Fecha"),o()(),a(12,"p",37),r(13),_(14,"date"),o()(),a(15,"div",35)(16,"div")(17,"h3",36),r(18,"N\xFAmero de comprobante"),o()(),a(19,"p",37),r(20),o()(),a(21,"div",35)(22,"div")(23,"h3",36),r(24,"Valor"),o()(),a(25,"p",37),r(26),_(27,"currency"),o()(),a(28,"div",35)(29,"div")(30,"h3",36),r(31,"Cuenta de origen"),o()(),a(32,"p",37),r(33),o()(),a(34,"div",38)(35,"div")(36,"h3",36),r(37,"Cuenta destino"),o()(),a(38,"p",37),r(39),o()()(),a(40,"div",39)(41,"button",40),D("click",function(){S(l);let t=g();return y(t.cerrar())}),r(42,"Cerrar"),o()()()()}if(s&2){let l=g();n(13),b(N(14,5,l.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),n(7),b(l.detaleConsumo.numeroFactura),n(6),b(N(27,8,l.detaleConsumo.montoConsumo,"USD")),n(7),b(l.detaleConsumo.cuentaOrigen),n(6),b(l.detaleConsumo.cuentaDestino)}}var It={validation:!1},bt=(()=>{let d=class d{constructor(){this.fuseService=p(X),this.estadosDatosService=p(_e),this.empleadosServices=p(J),this.cuentasServices=p(ut),this.tipoCuentaService=p(rt),this.datePipe=p(T),this.currencyPipe=p(x),this.router=p(O),this.fb=p(De),this.detalleConsumo=p(V),this.cuentas=[],this.desembolsoService=p(ft),this.swalService=p(Ee),this.solicitudService=p(W),this.detalleConsumoService=p(V),this.activatedRoute=p(k),this.errorHandlerService=p(Ae),this.showAlert=!1,this.aesEncriptService=p(M),this.alert={type:"success",message:""},this.isStepThreeComplete=!1,this.creditos=[],this.focus=focus,this.FormatoOptionsPipe=pt}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.createForm(),this.getCuentas();let i=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(i)}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}getSolicitud(i){let t,e;this.subscription$=this.detalleConsumoService.getDetalleConsumoDesembolso(i).pipe(le(c=>{let f={idTipoDoc:c.data.trabajador.idTipoDoc,numDocumento:c.data.trabajador.numDoc};return t=c.data.montoConsumo,e=c.data.bancotrabajador+" - "+c.data.tipoCuentaTrabajador+" - "+c.data.numeroCuentaTrabajador,this.empleadosServices.getEmpleadoParams(f)})).subscribe(c=>{if(c){this.showAlert=!1;let f={numDoc:c.data.numDoc,primerNombre:c.data.primerNombre,segundoNombre:c.data.segundoNombre,primerApellido:c.data.primerApellido,segundoApellido:c.data.segundoApellido,idTrabajador:c.data.id,correo:c.data.correo,credito:c.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(this.aesEncriptService.decrypt(c.data.creditos[0].cupoDisponible),"USD","symbol","1.2-2"),idCredito:c.data.creditos[0].id,numCuentaBancaria:c.data.numCuentaBancaria,cuentaDestinoInformativa:e,idTipoCuenta:c.data.idTipoCuenta,nombreTipoCuenta:c.data.nombreTipoCuenta,id:i};this.secondFormGroup.patchValue(f),this.thirdFormGroup.patchValue({idCuentaBancaria:f.idTipoCuenta,cuentaDestino:f.numCuentaBancaria,cuentaDestinoInformativa:e,montoConsumo:t,nombreTipoCuenta:f.nombreTipoCuenta}),this.creditos=c.data.creditos}},c=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}getCuentas(){this.subscription$=this.cuentasServices.getCuentasActivas().subscribe(i=>{this.cuentas=i.data,this.thirdFormGroup.get("cuentaOrigen").setValue(i.data[0].numeroCuenta)})}selectedData(i){let t=i.value,e=this.cuentas.find(c=>c.idTipoCuenta==t);this.thirdFormGroup.get("cuentaOrigen").setValue(e.numeroCuenta),this.thirdFormGroup.get("nombreTipoCuenta").setValue(e.nombreTipoCuenta)}selected(i){let t=i.value;this.compareValor=t.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(Nt(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(i){let t=i.value,e=this.secondFormGroup.get("idCredito")?.value;return!e||!e.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),se(null)):(console.log(t),console.log(e.montoConsumo),t>e.montoConsumo?se({notEqual:!0}):se(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}get comprobante(){return this.thirdFormGroup.get("numFactura")}get cuentaDestino(){return this.thirdFormGroup.get("cuentaDestino")}onSave(){if(this.thirdFormGroup.valid){let i=this.thirdFormGroup.getRawValue(),{montoConsumo:t,idCuentaBancaria:e,cuentaDestino:c,cuentaDestinoInformativa:f,cuentaOrigen:v,nombreTipoCuenta:G}=i,gt=Ge(i,["montoConsumo","idCuentaBancaria","cuentaDestino","cuentaDestinoInformativa","cuentaOrigen","nombreTipoCuenta"]),{id:xt,idCredito:St,idTrabajador:yt}=this.secondFormGroup.getRawValue();console.log(St);let Pe=this.cuentas.filter(ne=>{if(ne.idTipoCuenta==e)return ne.id});console.log(Pe[0].id);let Ve=w({id:xt,idEstado:E.REALIZADA,cuentaDestino:f,idCuentaBancaria:Pe[0].id},gt);console.log(Ve),this.fuseService.open(w({},ie)).afterClosed().subscribe(ne=>{ne==="confirmed"&&this.desembolsoService.patchDesembolso(Ve).subscribe(Ne=>{console.log(Ne),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.isStepThreeComplete=!0,this.getResumenCompra(yt)},Ne=>{this.errorHandlerService.errorHandler(Ne)})})}}getResumenCompra(i){this.subscription$=this.detalleConsumo.getResumen(i).pipe(R(t=>(t.data.montoConsumo&&(t.data.montoConsumo=this.aesEncriptService.decrypt(t.data.montoConsumo)),t))).subscribe(t=>{t&&(this.detaleConsumo=t.data,this.stepper.next())})}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",h.required],primerNombre:["",h.required],segundoNombre:[""],primerApellido:["",h.required],segundoApellido:[""],idTrabajador:[""],correo:["",h.required],credito:["",h.required],idCredito:["",h.required],numCuentaBancaria:[""],cuentaDestinoInformativa:[""],idTipoCuenta:[""],id:[""]}),this.thirdFormGroup=this.fb.group({montoConsumo:[{value:0,disabled:!0},[h.required]],numFactura:["",h.required],idCuentaBancaria:["",h.required],cuentaDestino:["",h.required],cuentaDestinoInformativa:[{value:0,disabled:!0}],nombreTipoCuenta:[{value:0,disabled:!0},h.required],cuentaOrigen:[{value:0,disabled:!0},h.required]})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=j({type:d,selectors:[["app-form-desembolso"]],viewQuery:function(t,e){if(t&1&&me(Tt,5),t&2){let c;de(c=ce())&&(e.stepper=c.first)}},standalone:!0,features:[A([{provide:L,useClass:Q},{provide:q,useValue:"en-GB"},T,x,Z(It)]),I],decls:85,vars:29,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","","matStepperNext","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"disabled"],["label","Confirmar desembolso"],[1,"w-full","h-full","p-4","sm:p-8"],[1,"flex","flex-col","sm:flex-row","items-baseline","gap-4"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","N\xFAmero de comprobante",3,"formControlName"],[4,"ngIf"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["placeholder","Cuenta de origen",3,"selectionChange","formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Cuenta destino",3,"formControlName"],["mat-button","","matStepperPrevious","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-gray-500","rounded-lg","hover:bg-gray-600"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click","disabled"],["label","Resumen de desembolso",3,"completed"],["class","w-full px-4 sm:px-8",4,"ngIf"],[3,"value"],[1,"w-full","px-4","sm:px-8"],[1,"max-w-2xl","mx-auto","p-6","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4","text-center"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center"],[1,"py-4"],["mat-button","",1,"w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click"]],template:function(t,e){if(t&1){let c=P();a(0,"div",1)(1,"div",2)(2,"div",3),r(3),o(),a(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),r(12,"Primer nombre"),o(),u(13,"input",9),o(),a(14,"mat-form-field",6)(15,"mat-label"),r(16,"Segundo nombre"),o(),u(17,"input",9),o()(),a(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),r(21,"Primer apellido"),o(),u(22,"input",9),o(),a(23,"mat-form-field",6)(24,"mat-label"),r(25,"Segundo apellido"),o(),u(26,"input",9),o()(),a(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),r(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),a(32,"mat-form-field",6)(33,"mat-label"),r(34,"Email"),o(),u(35,"input",9),o()(),a(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),r(39,"Cr\xE9dito / Cupo disponible"),o(),u(40,"input",9),o()(),a(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),r(44,"Cuenta destino: Banco - Tipo - N\xFAmero"),o(),u(45,"input",9),o()()(),a(46,"div",11)(47,"button",12),D("click",function(){return S(c),y(e.cerrar())}),r(48,"Cancelar"),o(),a(49,"button",13),r(50,"Siguiente"),o()()()(),a(51,"mat-step",14)(52,"div",15)(53,"form",7)(54,"div",16)(55,"mat-form-field",17)(56,"mat-label"),r(57,"N\xFAmero de comprobante"),o(),u(58,"input",18),C(59,Et,2,0,"mat-error",19),o(),a(60,"mat-form-field",17)(61,"mat-label"),r(62,"Valor de la transferencia"),o(),u(63,"input",20),C(64,_t,2,0,"mat-error",19)(65,Ft,2,0,"mat-error",19),o()(),a(66,"div",8)(67,"mat-form-field",17)(68,"mat-label"),r(69,"Cuenta origen: Banco - Tipo - N\xFAmero"),o(),a(70,"mat-select",21),D("selectionChange",function(v){return S(c),y(e.selectedData(v))}),C(71,wt,2,4,"mat-option",22),o()()(),a(72,"div",8)(73,"mat-form-field",17)(74,"mat-label"),r(75,"Cuenta destino: Banco - Tipo - N\xFAmero"),o(),u(76,"input",23),C(77,jt,2,0,"mat-error",19),o()()(),a(78,"div",11)(79,"button",24),r(80,"Anterior"),o(),a(81,"button",25),D("click",function(){return S(c),y(e.onSave())}),r(82,"Confirmar"),o()()()(),a(83,"mat-step",26),C(84,At,43,11,"div",27),o()()()()}t&2&&(n(3),pe(" ","Desembolso"," "),n(),m("orientation","vertical")("linear",!0)("animationDuration","1500"),n(2),m("stepControl",e.secondFormGroup),n(2),m("formGroup",e.secondFormGroup),n(5),m("formControlName","primerNombre"),n(4),m("formControlName","segundoNombre"),n(5),m("formControlName","primerApellido"),n(4),m("formControlName","segundoApellido"),n(5),m("formControlName","numDoc"),n(4),m("formControlName","correo"),n(5),m("formControlName","credito"),n(5),m("formControlName","cuentaDestinoInformativa"),n(4),m("disabled",e.secondFormGroup.invalid),n(4),m("formGroup",e.thirdFormGroup),n(5),m("formControlName","numFactura"),n(),m("ngIf",(e.comprobante.touched||e.comprobante.dirty)&&e.comprobante.hasError("required")),n(4),m("formControlName","montoConsumo")("mask","separator.0"),n(),m("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("required")),n(),m("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("notEqual")),n(5),m("formControlName","idCuentaBancaria"),n(),m("ngForOf",e.cuentas),n(5),m("formControlName","cuentaDestinoInformativa"),n(),m("ngIf",(e.cuentaDestino.touched||e.cuentaDestino.dirty)&&e.cuentaDestino.hasError("required")),n(4),m("disabled",e.thirdFormGroup.invalid),n(2),m("completed",e.isStepThreeComplete),n(),m("ngIf",e.detaleConsumo))},dependencies:[$,x,T,Ye,xe,Ce,ve,ge,H,We,z,U,be,Qe,ot,Fe,we,nt,st,Xe,B,it,Te,Se,ye],styles:[".mat-vertical-stepper-header{pointer-events:none!important}"]});let s=d;return s})();function Nt(s){return d=>{let l=d.value;return console.log(s),l>s?{notEqual:!0}:null}}var Mt=(s,d)=>({"bg-green-700":s,"bg-credigray-100":d});function Pt(s,d){if(s&1&&(ee(0),u(1,"app-custom-table",19),te()),s&2){let l=g(2);n(),m("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttonsPendiente)("searchTerm",l.searchTerm)}}function Vt(s,d){s&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes hasta el momento. "),o()()()),s&2&&(n(2),m("type","info")("appearance","outline"))}function Gt(s,d){if(s&1&&C(0,Pt,2,6,"ng-container",18)(1,Vt,6,2,"ng-template",null,1,ae),s&2){let l=oe(2),i=g();m("ngIf",i.data.length)("ngIfElse",l)}}function Rt(s,d){if(s&1&&(ee(0),u(1,"app-custom-table",19),te()),s&2){let l=g(2);n(),m("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons)("searchTerm",l.searchTerm)}}function Bt(s,d){s&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes rechazadas hasta el momento. "),o()()()),s&2&&(n(2),m("type","info")("appearance","outline"))}function kt(s,d){if(s&1&&C(0,Rt,2,6,"ng-container",18)(1,Bt,6,2,"ng-template",null,1,ae),s&2){let l=oe(2),i=g();m("ngIf",i.data.length)("ngIfElse",l)}}function Ot(s,d){if(s&1&&(ee(0),u(1,"app-custom-table",19),te()),s&2){let l=g(2);n(),m("columns",l.columnsDesembolsos)("displayedColumns",l.columnsDesembolsos)("columnPropertyMap",l.columnPropertyMapDesembolsos)("data",l.data)("buttons",l.buttonsApprove)("searchTerm",l.searchTerm)}}function qt(s,d){s&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),s&2&&(n(2),m("type","info")("appearance","outline"))}function Lt(s,d){if(s&1&&C(0,Ot,2,6,"ng-container",18)(1,qt,6,2,"ng-template",null,1,ae),s&2){let l=oe(2),i=g();m("ngIf",i.data.length)("ngIfElse",l)}}function $t(s,d){if(s&1&&(ee(0),u(1,"app-custom-table",19),te()),s&2){let l=g(2);n(),m("columns",l.columnsDesembolsosRealizados)("displayedColumns",l.columnsDesembolsosRealizados)("columnPropertyMap",l.columnPropertyMapDesembolsosRealizados)("data",l.data)("buttons",l.buttonsView)("searchTerm",l.searchTerm)}}function zt(s,d){s&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),s&2&&(n(2),m("type","info")("appearance","outline"))}function Ht(s,d){if(s&1&&C(0,$t,2,6,"ng-container",18)(1,zt,6,2,"ng-template",null,1,ae),s&2){let l=oe(2),i=g();m("ngIf",i.data.length)("ngIfElse",l)}}var ht=(()=>{let d=class d{constructor(){this.datePipe=p(T),this.currencyPipe=p(x),this.router=p(O),this.selectedTab=E.PENDIENTE,this._matDialog=p(fe),this.estadoDatosService=p(_e),this.solicitudService=p(W),this.detalleConsumoService=p(V),this.fuseService=p(X),this.aesEncriptService=p(M),this.exportData=[],this.searchTerm="",this.data=[],this.columns=["Fecha de solicitud","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Cupo solicitado","Tipo de solicitud","Tipo de cuenta","Banco","N\xFAmero de cuenta","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreSubEmpresa",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Cupo solicitado":"cupo","Tipo de solicitud":"nombreTipoSolicitud","Tipo de cuenta":"tipoCuentaTrabajador",Banco:"nombreBanco","N\xFAmero de cuenta":"numeroCuentaTrabajador",Estado:"nombreEstadoSolicitud"},this.columnsDesembolsos=["Fecha de solicitud","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Monto aprobado","Cupo disponible","Tipo de consumo","Tipo de cuenta","Banco","N\xFAmero de cuenta","Estado"],this.columnPropertyMapDesembolsos={"Fecha de solicitud":"fechaCreacion",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreEmpresaTrabajador",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Monto aprobado":"montoConsumo","Cupo disponible":"cupoDisponibleTrabajador","Tipo de consumo":"tipoConsumo","Tipo de cuenta":"tipoCuentaTrabajador",Banco:"bancotrabajador","N\xFAmero de cuenta":"numeroCuentaTrabajador",Estado:"nombreEstadoCredito"},this.columnsDesembolsosRealizados=["Fecha de desembolso","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Monto aprobado","Cupo disponible","Tipo de consumo","Tipo de cuenta","Banco","N\xFAmero de cuenta","Estado"],this.columnPropertyMapDesembolsosRealizados={"Fecha de desembolso":"fechaDesembolso",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreEmpresaTrabajador",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Monto aprobado":"montoConsumo","Cupo disponible":"cupoDisponibleTrabajador","Tipo de consumo":"tipoConsumo","Tipo de cuenta":"tipoCuentaTrabajador",Banco:"bancotrabajador","N\xFAmero de cuenta":"numeroCuentaTrabajador",Estado:"nombreEstadoCredito"},this.buttons=[{label:"Ver",icon:"visibility",action:i=>{console.log("Approve",i),this.selectedData=i,this.router.navigate(["pages/gestion-creditos/solicitudes/estados",this.selectedData.id])}}],this.buttonsApprove=[{label:"Ver",icon:"visibility",action:i=>{console.log("Approve",i),this.selectedData=i,this.router.navigate(["pages/gestion-creditos/desembolsos/registrar",this.selectedData.id])}}],this.buttonsView=[{label:"Ver",icon:"visibility",action:i=>{console.log("Approve",i),this.selectedData=i,this.router.navigate(["pages/gestion-creditos/desembolsos/view",this.selectedData.id])}}],this.buttonsPendiente=[{label:"Ver",icon:"visibility",action:i=>{console.log("Approve",i),this.selectedData=i,this.router.navigate(["pages/gestion-creditos/desembolsos/desembolso",this.selectedData.id])}}],this.tabChanged=i=>{this.tabIndex=i.index,this.selectedTab=i.index==0?E.PENDIENTE:i.index==1?E.RECHAZADA:i.index==2?Y.APROBADA:i.index==3?Y.REALIZADA:K.APROBADA,[E.PENDIENTE,E.RECHAZADA].includes(this.selectedTab)?this.getSolicitudes(this.selectedTab):[Y.APROBADA,Y.REALIZADA].includes(this.selectedTab)&&this.getDesembolsos(this.selectedTab)}}getSolicitudes(i){this.subcription$=this.solicitudService.getSolicitudesDesembolso(i).pipe(R(t=>(t.data.forEach(e=>{e.estado?e.estado=re.ACTIVO:e.estado=re.INACTIVO}),t)),R(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.fechaInicioContratoTrabajador=this.datePipe.transform(e.fechaInicioContratoTrabajador,"dd/MM/yyyy"),e.fechaFinContratoTrabajador=this.datePipe.transform(e.fechaFinContratoTrabajador,"dd/MM/yyyy"),e.cupo=this.currencyPipe.transform(e.cupo,"USD","symbol","1.2-2"),e.salarioDevengadoTrabajador=this.currencyPipe.transform(e.salarioDevengadoTrabajador,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?(this.data=t.data,this.convertDataExportPendiente(t.data)):this.data=[]},t=>{this.data=[]})}getDesembolsos(i){this.subcription$=this.detalleConsumoService.getDetallesConsumoDesembolsos(i).pipe(R(t=>(t.data.forEach(e=>{e.estado=e.estado?re.ACTIVO:re.INACTIVO,e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.fechaDesembolso=this.datePipe.transform(e.fechaDesembolso,"dd/MM/yyyy"),e.fechaInicioContratoTrabajador=this.datePipe.transform(e.fechaInicioContratoTrabajador,"dd/MM/yyyy"),e.fechaFinContratoTrabajador=this.datePipe.transform(e.fechaFinContratoTrabajador,"dd/MM/yyyy"),e.salarioDevengadoTrabajador=this.currencyPipe.transform(e.salarioDevengadoTrabajador,"USD","symbol","1.2-2"),e.montoConsumo&&(e.montoConsumo=this.aesEncriptService.decrypt(e.montoConsumo)),e.cupoDisponibleTrabajador=this.currencyPipe.transform(e.cupoDisponibleTrabajador,"USD","symbol","1.2-2"),e.montoConsumo=this.currencyPipe.transform(e.montoConsumo,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?(this.data=t.data,i==Y.REALIZADA?this.convertDataExportDesembolso(t.data):this.convertDataExport(t.data)):this.data=[]},t=>{this.data=[]})}onSearch(i){let t=i.target;this.searchTerm=t.value.trim().toLowerCase()}convertDataExport(i){let t=i.map(e=>({FechaSolicitud:e.fechaCreacion,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreEmpresaTrabajador,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:F(e.salarioDevengadoTrabajador),MontoAprobado:F(e.montoConsumo),CupoDisponible:F(e.cupoDisponibleTrabajador),TipoConsumo:e.tipoConsumo,TipoCuenta:e.tipoCuentaTrabajador,Banco:e.bancotrabajador,NumeroCuenta:e.numeroCuentaTrabajador,Estado:e.nombreEstadoCredito}));this.exportData=t}convertDataExportDesembolso(i){let t=i.map(e=>({FechaDesembolso:e.fechaDesembolso,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreEmpresaTrabajador,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:F(e.salarioDevengadoTrabajador),MontoAprobado:F(e.montoConsumo),CupoDisponible:F(e.cupoDisponibleTrabajador),TipoConsumo:e.tipoConsumo,TipoCuenta:e.tipoCuentaTrabajador,Banco:e.bancotrabajador,NumeroCuenta:e.numeroCuentaTrabajador,Estado:e.nombreEstadoCredito}));this.exportData=t}convertDataExportPendiente(i){let t=i.map(e=>({FechaSolicitud:e.fechaCreacion,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreSubEmpresa,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:F(e.salarioDevengadoTrabajador),CupoSolicitado:F(e.cupo),TipoSolicitud:e.nombreTipoSolicitud,TipoCuenta:e.tipoCuentaTrabajador,Banco:e.nombreBanco,NumeroCuenta:e.numeroCuentaTrabajador,Estado:e.nombreEstadoSolicitud}));this.exportData=t}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getSolicitudes(this.selectedTab),this.listenGrid()}listenGrid(){this.estadoDatosService.stateGridSolicitudes.asObservable().subscribe(t=>{t.state&&(console.log("Si entro"),console.log(t),this.selectedTab=t.tab==0?E.PENDIENTE:t.tab==1?K.RECHAZADA:t.tab==2?K.APROBADA:t.tab==3?K.REALIZADA_DESEMBOLSO:K.APROBADA,this.tabIndex=t.tab)})}exportToExcel(i){this.fuseService.open(w({},et)).afterClosed().subscribe(e=>{if(e==="confirmed"){let c=je.json_to_sheet(i),f=je.book_new();je.book_append_sheet(f,c,"Sheet1"),ct(f,`Desembolsos${this.datePipe.transform(new Date,"dd/MM/yyyy")}.xlsx`)}})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=j({type:d,selectors:[["app-grid-desembolsos"]],standalone:!0,features:[A([T,x]),I],decls:23,vars:12,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-6","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-0","mt-2","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","Pendientes"],["matTabContent",""],["label","Rechazadas"],["label","Aprobadas"],["label","Realizados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(t,e){if(t&1){let c=P();a(0,"div",2)(1,"div",3)(2,"div",4),r(3,"Desembolsos"),o(),a(4,"div",5)(5,"mat-form-field",6),u(6,"mat-icon",7),a(7,"input",8),D("input",function(v){return S(c),y(e.onSearch(v))}),o()(),a(8,"button",9),D("click",function(){return S(c),y(e.exportToExcel(e.exportData))}),a(9,"span"),r(10," Exportar "),o()()()(),a(11,"div",10)(12,"div",11)(13,"mat-tab-group",12,0),qe("selectedIndexChange",function(v){return S(c),Oe(e.tabIndex,v)||(e.tabIndex=v),y(v)}),D("selectedTabChange",function(v){return S(c),y(e.tabChanged(v))}),a(15,"mat-tab",13),C(16,Gt,3,2,"ng-template",14),o(),a(17,"mat-tab",15),C(18,kt,3,2,"ng-template",14),o(),a(19,"mat-tab",16),C(20,Lt,3,2,"ng-template",14),o(),a(21,"mat-tab",17),C(22,Ht,3,2,"ng-template",14),o()()()()()}t&2&&(n(5),m("subscriptSizing","dynamic"),n(),m("svgIcon","heroicons_solid:magnifying-glass"),n(),m("autocomplete","off")("placeholder","Buscar"),n(),m("color","primary")("ngClass",$e(9,Mt,e.exportData.length,!e.exportData.length))("disabled",!e.exportData.length),n(5),m("animationDuration","500"),ke("selectedIndex",e.tabIndex))},dependencies:[at,tt,H,z,he,U,mt,lt,dt,B,He]});let s=d;return s})();var Xt=["stepper"],Ut={validation:!1},Ct=(()=>{let d=class d{constructor(){this.fuseService=p(X),this.router=p(O),this.fb=p(De),this.activatedRoute=p(k),this.solicitudService=p(W),this.empleadosServices=p(J),this.currencyPipe=p(x),this.swalService=p(Ee),this.errorHandlerService=p(Ae),this.aesEncriptService=p(M),this.showAlert=!1,this.alert={type:"success",message:""}}ngOnDestroy(){}ngOnInit(){this.createForm();let i=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(i)}getSolicitud(i){this.subscription$=this.solicitudService.getSolicitud(i).pipe(le(t=>{let e={idTipoDoc:t.data.trabajador.idTipoDoc,numDocumento:t.data.trabajador.numDoc};return this.empleadosServices.getEmpleadoParams(e)})).subscribe(t=>{if(t){this.showAlert=!1;let e={numDoc:t.data.numDoc,primerNombre:t.data.primerNombre,segundoNombre:t.data.segundoNombre,primerApellido:t.data.primerApellido,segundoApellido:t.data.segundoApellido,idTrabajador:t.data.id,correo:t.data.correo,credito:t.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(this.aesEncriptService.decrypt(t.data.creditos[0].cupoDisponible),"USD","symbol","1.2-2"),idCredito:t.data.creditos[0].id,numCuentaBancaria:t.data.numCuentaBancaria,idTipoCuenta:t.data.idTipoCuenta,id:i};this.secondFormGroup.patchValue(e)}},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}onApprove(){if(this.secondFormGroup.valid){let{id:i,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),c={id:i,idEstado:E.APROBADA};this.fuseService.open(w({},ie)).afterClosed().subscribe(v=>{v==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(c).subscribe(G=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},G=>{this.errorHandlerService.errorHandler(G)})})}}onRechazar(){if(this.secondFormGroup.valid){let{id:i,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),c={id:i,idEstado:E.RECHAZADA};this.fuseService.open(w({},ie)).afterClosed().subscribe(v=>{v==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(c).subscribe(G=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},G=>{this.errorHandlerService.errorHandler(G)})})}}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",h.required],primerNombre:["",h.required],segundoNombre:[""],primerApellido:["",h.required],segundoApellido:[""],idTrabajador:[""],correo:["",h.required],credito:["",h.required],idCredito:["",h.required],numCuentaBancaria:[""],idTipoCuenta:[""],id:[""]})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=j({type:d,selectors:[["app-form-approve-desembolso"]],viewQuery:function(t,e){if(t&1&&me(Xt,5),t&2){let c;de(c=ce())&&(e.stepper=c.first)}},standalone:!0,features:[A([{provide:L,useClass:Q},{provide:q,useValue:"en-GB"},T,x,Z(Ut)]),I],decls:51,vars:14,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click"]],template:function(t,e){if(t&1){let c=P();a(0,"div",1)(1,"div",2)(2,"div",3),r(3),o(),a(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),r(12,"Primer nombre"),o(),u(13,"input",9),o(),a(14,"mat-form-field",6)(15,"mat-label"),r(16,"Segundo nombre"),o(),u(17,"input",9),o()(),a(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),r(21,"Primer apellido"),o(),u(22,"input",9),o(),a(23,"mat-form-field",6)(24,"mat-label"),r(25,"Segundo apellido"),o(),u(26,"input",9),o()(),a(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),r(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),a(32,"mat-form-field",6)(33,"mat-label"),r(34,"Email"),o(),u(35,"input",9),o()(),a(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),r(39,"Cr\xE9dito / Cupo disponible"),o(),u(40,"input",9),o()(),a(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),r(44,"N\xFAmero de cuenta"),o(),u(45,"input",9),o()()(),a(46,"div",11)(47,"button",12),D("click",function(){return S(c),y(e.onRechazar())}),r(48,"Rechazar"),o(),a(49,"button",13),D("click",function(){return S(c),y(e.onApprove())}),r(50,"Aprobar"),o()()()()()()()}t&2&&(n(3),pe(" ","Desembolso"," "),n(),m("orientation","vertical")("linear",!0)("animationDuration","1500"),n(2),m("stepControl",e.secondFormGroup),n(2),m("formGroup",e.secondFormGroup),n(5),m("formControlName","primerNombre"),n(4),m("formControlName","segundoNombre"),n(5),m("formControlName","primerApellido"),n(4),m("formControlName","segundoApellido"),n(5),m("formControlName","numDoc"),n(4),m("formControlName","correo"),n(5),m("formControlName","credito"),n(5),m("formControlName","numCuentaBancaria"))},dependencies:[$,we,H,z,U,be,Fe,Te,xe,Ce,ve,ge,Se,ye]});let s=d;return s})();var Zt=()=>["/pages/gestion-creditos/desembolsos"];function Qt(s,d){if(s&1&&(a(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),r(4),o(),a(5,"p",11),r(6,"Identificaci\xF3n: "),a(7,"span",12),r(8),o()(),a(9,"p",11),r(10,"Empresa: "),a(11,"span",12),r(12),o()(),a(13,"p",13),r(14,"Cargo: "),a(15,"span",12),r(16),o()(),a(17,"p",13),r(18,"Tipo de contrato: "),a(19,"span",12),r(20),o()(),a(21,"p",13),r(22,"Fecha inicio de contrato: "),a(23,"span",12),r(24),_(25,"date"),o()(),a(26,"p",13),r(27,"Fecha fin de contrato: "),a(28,"span",12),r(29),_(30,"date"),o()(),a(31,"p",13),r(32,"Salario devengado: "),a(33,"span",12),r(34),_(35,"currency"),o()(),a(36,"p",11),r(37,"Correo: "),a(38,"span",12),r(39),o()(),a(40,"p",11),r(41,"Direcci\xF3n: "),a(42,"span",12),r(43),o()(),a(44,"p",11),r(45,"Tel\xE9fono: "),a(46,"span",12),r(47),o()()(),a(48,"div")(49,"p",11),r(50,"Tipo de consumo: "),a(51,"span",12),r(52),o()(),a(53,"p",11),r(54,"Estado de Desembolso: "),a(55,"span",12),r(56),o()(),a(57,"p",11),r(58,"Valor de desembolso: "),a(59,"span",12),r(60),_(61,"currency"),o()(),a(62,"p",11),r(63,"Fecha de Solicitud: "),a(64,"span",12),r(65),_(66,"date"),o()(),a(67,"p",11),r(68,"Cuenta destino: "),a(69,"span",12),r(70),o()()()()()),s&2){let l=g();n(4),Be(" ",l.items.trabajador.primerNombre," ",l.items.trabajador.segundoNombre," ",l.items.trabajador.primerApellido," ",l.items.trabajador.segundoApellido," "),n(4),b(l.items.trabajador.numDoc),n(4),b(l.items.trabajador.nombreSubEmpresa),n(4),b(l.items.trabajador.cargo),n(4),b(l.items.trabajador.nombreTipoContrato),n(4),b(N(25,21,l.items.trabajador.fechaInicioContrato,"dd/MM/yyyy")),n(5),b(N(30,24,l.items.trabajador.fechaFinContrato,"dd/MM/yyyy")),n(5),b(N(35,27,l.items.trabajador.salarioDevengado,"USD")),n(5),b(l.items.trabajador.correo),n(4),b(l.items.trabajador.direccion),n(4),b(l.items.trabajador.telefono),n(5),b(l.items.tipoConsumo),n(4),b(l.items.nombreEstadoCredito),n(4),b(ze(61,30,l.aesEncriptService.decrypt(l.items.montoConsumo))),n(5),b(N(66,32,l.items.fechaCreacionSolicitud,"dd/MM/yyyy")),n(5),ue("",l.items.bancotrabajador," - ",l.items.tipoCuentaTrabajador," - ",l.items.numeroCuentaTrabajador," ")}}var Wt={validation:!1},vt=(()=>{let d=class d{constructor(){this.activatedRoute=p(k),this._matDialog=p(fe),this.detalleConsumoService=p(V),this.currencyPipe=p(x),this.empleadosServices=p(J),this.showAlert=!1,this.aesEncriptService=p(M),this.alert={type:"success",message:""}}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){let i=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(i)}getSolicitud(i){this.subscription$=this.detalleConsumoService.getDetalleConsumoDesembolso(i).subscribe(t=>{t&&(this.showAlert=!1,this.items=t.data)},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=j({type:d,selectors:[["app-form-view-desembolso"]],standalone:!0,features:[A([{provide:L,useClass:Q},{provide:q,useValue:"en-GB"},T,x,Z(Wt)]),I],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-6","md:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-4xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-4","py-3","sm:px-6","sm:py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","flex","flex-col","md:flex-row","md:justify-between","gap-4"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"font-medium","text-gray-600"],[1,"text-md","text-secondary"],[1,"text-gray-600","font-medium"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),u(6,"mat-icon",5),o()(),a(7,"h2",6),r(8,"Detalle de Desembolso"),o()(),C(9,Qt,71,35,"div",7),o()()()),t&2&&(n(5),m("routerLink",Le(3,Zt)),n(),m("svgIcon","heroicons_outline:arrow-long-left"),n(3),m("ngIf",e.items))},dependencies:[$,x,T,Je,he,B,Ze]});let s=d;return s})();var ii=[{path:"",component:ht},{path:"desembolso/:id",component:Ct},{path:"registrar/:id",component:bt},{path:"view/:id",component:vt}];export{ii as default};
