import{a as ye}from"./chunk-RVCDGTSK.js";import{a as B}from"./chunk-U2K4UPIL.js";import{a as v,b as z}from"./chunk-P5JQDPHR.js";import{a as it}from"./chunk-VG26ZCBI.js";import{a as rt}from"./chunk-GFUTEW6X.js";import{a as ve,b as Ce,c as Je,d as Ke}from"./chunk-TSZX67OG.js";import{a as xe}from"./chunk-SLUVCWS3.js";import{a as ot,b as Se}from"./chunk-P4PAYY2C.js";import{a as Ye,b as et,c as tt}from"./chunk-75EJ3INZ.js";import{a as X}from"./chunk-ARSZJ7KY.js";import{a as We}from"./chunk-FPG4YO5H.js";import{a as be}from"./chunk-M6JKQUTX.js";import{a as he,b as Ue}from"./chunk-QDHNBSMD.js";import{a as H}from"./chunk-6IEWE3OU.js";import{a as ge}from"./chunk-OFI6PGZL.js";import{a as Qe}from"./chunk-M7Y7PXSI.js";import{a as Ze,b as $}from"./chunk-YHNXG437.js";import{a as fe}from"./chunk-VOLXTRGQ.js";import{a as Xe}from"./chunk-DUV3XJVH.js";import"./chunk-CNRP5CR4.js";import{g as V}from"./chunk-2XRFSBL3.js";import{c as je}from"./chunk-BF24YLJO.js";import{h as re}from"./chunk-AIQUJILU.js";import{a as ze}from"./chunk-EZC5HSZS.js";import"./chunk-ZFUJRZBK.js";import{C as ce,E as He,F as ue,J as R,b as ae,c as qe,i as G,l as ne,n as f,p as le,q as me,u as se,x as de,y as pe}from"./chunk-D3YOWHEC.js";import{Q as oe,R as ie,ba as ke,ga as P,la as Le}from"./chunk-V35GW63T.js";import"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import{b as $e}from"./chunk-DIJH5L74.js";import{b as te,d as M}from"./chunk-FSJGACMT.js";import{Cb as y,Dc as E,Eb as S,Gc as _,Ib as W,Jb as J,Kb as K,Lb as q,Mb as l,Mc as Oe,Nb as F,Ob as Y,Qa as n,Rb as Ne,Sb as Ie,Tb as Me,Ub as N,Vb as I,X as U,Yb as Ge,ba as Te,bc as Pe,dc as Ve,ec as L,ga as _e,gb as g,ha as p,ib as m,l as Z,ma as A,q as O,tb as a,ub as o,vb as u,wa as C,wb as k,xa as x,xb as j,xc as Re,yc as Be,zb as T,zc as ee}from"./chunk-YBEOGPR3.js";import{a as D,d as Ae}from"./chunk-NEB6MB4Y.js";var at=(()=>{let s=class s{constructor(i,t){this._http=i,this.AppSettings=t}postDesembolso(i){return this._http.post(this.AppSettings.detalleConsumos.url.desembolsoBase,i)}patchDesembolso(i){let t=i.id;delete i.id;let{idEstado:e,idCuentaDestino:c,numeroFactura:b,idCuentaBancaria:h}=i;return this._http.patch(`${this.AppSettings.detalleConsumos.url.base}/${t}?idEstado=${e}&numFactura=${b}&cuentaDestino=${c}&idCuentaBancaria=${h}`,{})}};s.\u0275fac=function(t){return new(t||s)(_e(Oe),_e($e))},s.\u0275prov=Te({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();var pt=["stepper"];function ct(r,s){r&1&&(a(0,"mat-error"),l(1,"El campo es requerido!"),o())}function ut(r,s){r&1&&(a(0,"mat-error"),l(1,"El valor es requerido!"),o())}function ft(r,s){r&1&&(a(0,"mat-error"),l(1,"El valor ingresado no puede superar el cupo disponible!"),o())}function bt(r,s){if(r&1&&(a(0,"mat-option",28),l(1),o()),r&2){let d=s.$implicit;m("value",d.idTipoCuenta),n(),F(d.nombreBanco)}}function ht(r,s){r&1&&(a(0,"mat-error"),l(1,"El campo es requerido!"),o())}function gt(r,s){if(r&1&&(a(0,"div",29)(1,"div",30)(2,"div",31)(3,"h2",32),l(4,"Resumen de desembolso"),o(),a(5,"p",33),l(6,"Revise los detalles"),o()(),a(7,"div",34)(8,"div",35)(9,"div")(10,"h3",36),l(11,"Fecha"),o()(),a(12,"p",37),l(13),Pe(14,"date"),o()(),a(15,"div",35)(16,"div")(17,"h3",36),l(18,"N\xFAmero de comprobante"),o()(),a(19,"p",37),l(20),o()(),a(21,"div",35)(22,"div")(23,"h3",36),l(24,"Valor"),o()(),a(25,"p",37),l(26),o()(),a(27,"div",35)(28,"div")(29,"h3",36),l(30,"Cuenta de origen"),o()(),a(31,"p",37),l(32),o()(),a(33,"div",38)(34,"div")(35,"h3",36),l(36,"Cuenta destino"),o()(),a(37,"p",37),l(38),o()()()()()),r&2){let d=S();n(13),F(Ve(14,5,d.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),n(7),F(d.detaleConsumo.numeroFactura),n(6),F(d.detaleConsumo.montoConsumo),n(6),F(d.detaleConsumo.cuentaOrigen),n(6),F(d.detaleConsumo.cuentaDestino)}}var vt={validation:!1},nt=(()=>{let s=class s{constructor(){this.fuseService=p(V),this.estadosDatosService=p(fe),this.empleadosServices=p(xe),this.cuentasServices=p(rt),this.tipoCuentaService=p(We),this.datePipe=p(E),this.currencyPipe=p(_),this.router=p(M),this.fb=p(ce),this.detalleConsumo=p(X),this.cuentas=[],this.desembolsoService=p(at),this.swalService=p(ge),this.solicitudService=p(B),this.detalleConsumoService=p(X),this.activatedRoute=p(te),this.errorHandlerService=p(ye),this.showAlert=!1,this.alert={type:"success",message:""},this.creditos=[],this.focus=focus,this.FormatoOptionsPipe=it}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.createForm(),this.getCuentas();let i=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(i)}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}getSolicitud(i){let t;this.subscription$=this.detalleConsumoService.getDetalleConsumoDesembolso(i).pipe(U(e=>{let c={idTipoDoc:e.data.trabajador.idTipoDoc,numDocumento:e.data.trabajador.numDoc};return t=e.data.montoConsumo,this.empleadosServices.getEmpleadoParams(c)})).subscribe(e=>{if(e){this.showAlert=!1;let c={numDoc:e.data.numDoc,primerNombre:e.data.primerNombre,segundoNombre:e.data.segundoNombre,primerApellido:e.data.primerApellido,segundoApellido:e.data.segundoApellido,idTrabajador:e.data.id,correo:e.data.correo,credito:e.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(e.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:e.data.creditos[0].id,numCuentaBancaria:e.data.numCuentaBancaria,idTipoCuenta:e.data.idTipoCuenta,id:i};this.secondFormGroup.patchValue(c),this.thirdFormGroup.patchValue({idCuentaBancaria:c.idTipoCuenta,cuentaDestino:c.numCuentaBancaria,montoConsumo:t}),this.creditos=e.data.creditos}},e=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}getCuentas(){this.subscription$=this.cuentasServices.getCuentas().subscribe(i=>{this.cuentas=i.data})}selected(i){let t=i.value;this.compareValor=t.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(Ct(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(i){let t=i.value,e=this.secondFormGroup.get("idCredito")?.value;return!e||!e.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),Z(null)):(console.log(t),console.log(e.montoConsumo),t>e.montoConsumo?Z({notEqual:!0}):Z(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}get comprobante(){return this.thirdFormGroup.get("numeroFactura")}get cuentaDestino(){return this.thirdFormGroup.get("cuentaDestino")}onSave(){if(this.thirdFormGroup.valid){let i=this.thirdFormGroup.getRawValue(),{montoConsumo:t,idCuentaBancaria:e,cuentaDestino:c}=i,b=Ae(i,["montoConsumo","idCuentaBancaria","cuentaDestino"]),{id:h,idCredito:w,idTrabajador:st}=this.secondFormGroup.getRawValue();console.log(w);let we=this.cuentas.filter(Q=>{if(Q.idTipoCuenta==e)return Q.id});console.log(we[0].id);let Fe=D({id:h,idEstado:z.REALIZADA,idCuentaDestino:c,idCuentaBancaria:we[0].id},b);console.log(Fe),this.fuseService.open(D({},$)).afterClosed().subscribe(Q=>{Q==="confirmed"&&this.desembolsoService.patchDesembolso(Fe).subscribe(Ee=>{console.log(Ee),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.getResumenCompra(st)},Ee=>{this.errorHandlerService.errorHandler(Ee)})})}}getResumenCompra(i){this.subscription$=this.detalleConsumo.getResumen(i).subscribe(t=>{t&&(console.log(t),this.detaleConsumo=t.data,this.stepper.next(),setTimeout(()=>{this.cerrar()},5e3))})}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",f.required],primerNombre:["",f.required],segundoNombre:[""],primerApellido:["",f.required],segundoApellido:[""],idTrabajador:[""],correo:["",f.required],credito:["",f.required],idCredito:["",f.required],numCuentaBancaria:[""],idTipoCuenta:[""],id:[""]}),this.thirdFormGroup=this.fb.group({montoConsumo:[{value:0,disabled:!0},[f.required]],numeroFactura:["",f.required],idCuentaBancaria:["",f.required],cuentaDestino:["",f.required]})}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=A({type:s,selectors:[["app-form-desembolso"]],viewQuery:function(t,e){if(t&1&&W(pt,5),t&2){let c;J(c=K())&&(e.stepper=c.first)}},standalone:!0,features:[N([{provide:ie,useClass:be},{provide:oe,useValue:"en-GB"},E,_,he(vt)]),I],decls:84,vars:29,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","","matStepperNext","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"disabled"],["label","Confirmar desembolso",3,"stepControl"],[1,"w-full","h-full","p-4","sm:p-8"],[1,"flex","flex-col","sm:flex-row","items-baseline","gap-4"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","N\xFAmero de comprobante",3,"formControlName"],[4,"ngIf"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["placeholder","Cuenta de origen",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Cuenta destino",3,"formControlName"],["mat-button","","matStepperPrevious","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-gray-500","rounded-lg","hover:bg-gray-600"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click","disabled"],["label","Resumen de desembolso"],["class","w-full px-4 sm:px-8",4,"ngIf"],[3,"value"],[1,"w-full","px-4","sm:px-8"],[1,"max-w-2xl","mx-auto","p-6","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4","text-center"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center"]],template:function(t,e){if(t&1){let c=T();a(0,"div",1)(1,"div",2)(2,"div",3),l(3),o(),a(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),l(12,"Primer nombre"),o(),u(13,"input",9),o(),a(14,"mat-form-field",6)(15,"mat-label"),l(16,"Segundo nombre"),o(),u(17,"input",9),o()(),a(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),l(21,"Primer apellido"),o(),u(22,"input",9),o(),a(23,"mat-form-field",6)(24,"mat-label"),l(25,"Segundo apellido"),o(),u(26,"input",9),o()(),a(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),l(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),a(32,"mat-form-field",6)(33,"mat-label"),l(34,"Email"),o(),u(35,"input",9),o()(),a(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),l(39,"Cr\xE9dito"),o(),u(40,"input",9),o()(),a(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),l(44,"N\xFAmero de cuenta"),o(),u(45,"input",9),o()()(),a(46,"div",11)(47,"button",12),y("click",function(){return C(c),x(e.cerrar())}),l(48,"Cancelar"),o(),a(49,"button",13),l(50,"Siguiente"),o()()()(),a(51,"mat-step",14)(52,"div",15)(53,"form",7)(54,"div",16)(55,"mat-form-field",17)(56,"mat-label"),l(57,"N\xFAmero de comprobante"),o(),u(58,"input",18),g(59,ct,2,0,"mat-error",19),o(),a(60,"mat-form-field",17)(61,"mat-label"),l(62,"Valor de la transferencia"),o(),u(63,"input",20),g(64,ut,2,0,"mat-error",19)(65,ft,2,0,"mat-error",19),o()(),a(66,"div",8)(67,"mat-form-field",17)(68,"mat-label"),l(69,"Cuenta de origen"),o(),a(70,"mat-select",21),g(71,bt,2,2,"mat-option",22),o()(),a(72,"mat-form-field",17)(73,"mat-label"),l(74,"Cuenta destino"),o(),u(75,"input",23),g(76,ht,2,0,"mat-error",19),o()()(),a(77,"div",11)(78,"button",24),l(79,"Anterior"),o(),a(80,"button",25),y("click",function(){return C(c),x(e.onSave())}),l(81,"Confirmar"),o()()()(),a(82,"mat-step",26),g(83,gt,39,8,"div",27),o()()()()}t&2&&(n(3),Y(" ","Desembolso"," "),n(),m("orientation","vertical")("linear",!0)("animationDuration","1500"),n(2),m("stepControl",e.secondFormGroup),n(2),m("formGroup",e.secondFormGroup),n(5),m("formControlName","primerNombre"),n(4),m("formControlName","segundoNombre"),n(5),m("formControlName","primerApellido"),n(4),m("formControlName","segundoApellido"),n(5),m("formControlName","numDoc"),n(4),m("formControlName","correo"),n(5),m("formControlName","credito"),n(5),m("formControlName","numCuentaBancaria"),n(4),m("disabled",e.secondFormGroup.invalid),n(2),m("stepControl",e.thirdFormGroup),n(2),m("formGroup",e.thirdFormGroup),n(5),m("formControlName","numeroFactura"),n(),m("ngIf",(e.comprobante.touched||e.comprobante.dirty)&&e.comprobante.hasError("required")),n(4),m("formControlName","montoConsumo")("mask","separator.0"),n(),m("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("required")),n(),m("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("notEqual")),n(5),m("formControlName","idCuentaBancaria"),n(),m("ngForOf",e.cuentas),n(4),m("formControlName","cuentaDestino"),n(),m("ngIf",(e.cuentaDestino.touched||e.cuentaDestino.dirty)&&e.cuentaDestino.hasError("required")),n(4),m("disabled",e.thirdFormGroup.invalid),n(3),m("ngIf",e.detaleConsumo))},dependencies:[re,E,He,se,ne,le,me,P,qe,G,R,ae,ke,Xe,ve,Ce,Je,Ke,Be,ee,Ue,ue,de,pe]});let r=s;return r})();function Ct(r){return s=>{let d=s.value;return console.log(r),d>r?{notEqual:!0}:null}}var xt=(r,s)=>({"bg-green-700":r,"bg-credigray-100":s});function St(r,s){if(r&1&&(k(0),u(1,"app-custom-table",19),j()),r&2){let d=S(2);n(),m("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttonsPendiente)("searchTerm",d.searchTerm)}}function yt(r,s){r&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),l(4,"Informaci\xF3n"),o(),l(5," No hay solicitudes hasta el momento. "),o()()()),r&2&&(n(2),m("type","info")("appearance","outline"))}function Et(r,s){if(r&1&&g(0,St,2,6,"ng-container",18)(1,yt,6,2,"ng-template",null,1,L),r&2){let d=q(2),i=S();m("ngIf",i.data.length)("ngIfElse",d)}}function _t(r,s){if(r&1&&(k(0),u(1,"app-custom-table",19),j()),r&2){let d=S(2);n(),m("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttons)("searchTerm",d.searchTerm)}}function Dt(r,s){r&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),l(4,"Informaci\xF3n"),o(),l(5," No hay solicitudes rechazadas hasta el momento. "),o()()()),r&2&&(n(2),m("type","info")("appearance","outline"))}function wt(r,s){if(r&1&&g(0,_t,2,6,"ng-container",18)(1,Dt,6,2,"ng-template",null,1,L),r&2){let d=q(2),i=S();m("ngIf",i.data.length)("ngIfElse",d)}}function Ft(r,s){if(r&1&&(k(0),u(1,"app-custom-table",19),j()),r&2){let d=S(2);n(),m("columns",d.columnsDesembolsos)("displayedColumns",d.columnsDesembolsos)("columnPropertyMap",d.columnPropertyMapDesembolsos)("data",d.data)("buttons",d.buttonsApprove)("searchTerm",d.searchTerm)}}function At(r,s){r&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),l(4,"Informaci\xF3n"),o(),l(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),r&2&&(n(2),m("type","info")("appearance","outline"))}function Tt(r,s){if(r&1&&g(0,Ft,2,6,"ng-container",18)(1,At,6,2,"ng-template",null,1,L),r&2){let d=q(2),i=S();m("ngIf",i.data.length)("ngIfElse",d)}}function Nt(r,s){if(r&1&&(k(0),u(1,"app-custom-table",19),j()),r&2){let d=S(2);n(),m("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttons)("searchTerm",d.searchTerm)}}function It(r,s){r&1&&(a(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),l(4,"Informaci\xF3n"),o(),l(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),r&2&&(n(2),m("type","info")("appearance","outline"))}function Mt(r,s){if(r&1&&g(0,Nt,2,6,"ng-container",18)(1,It,6,2,"ng-template",null,1,L),r&2){let d=q(2),i=S();m("ngIf",i.data.length)("ngIfElse",d)}}var lt=(()=>{let s=class s{constructor(){this.datePipe=p(E),this.currencyPipe=p(_),this.router=p(M),this.selectedTab=v.PENDIENTE_DESEMBOLSO,this._matDialog=p(je),this.estadoDatosService=p(fe),this.solicitudService=p(B),this.detalleConsumoService=p(X),this.fuseService=p(V),this.searchTerm="",this.data=[],this.columns=["Fecha de solicitud","Trabajador","Cupo solicitado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Trabajador:"nombreTrabajador","Cupo solicitado":"cupo",Empresa:"nombreSubEmpresa",Estado:"nombreEstadoSolicitud"},this.columnsDesembolsos=["Fecha de aprobaci\xF3n","Trabajador","Cupo aprobado","Empresa","Estado"],this.columnPropertyMapDesembolsos={"Fecha de aprobaci\xF3n":"fechaCreacion",Trabajador:"nombreTrabajador","Cupo aprobado":"montoConsumo",Empresa:"nombreSubEmpresa",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:i=>{console.log("Approve",i),this.selectedData=i,this.router.navigate(["pages/gestion-creditos/solicitudes/estados",this.selectedData.id])}}],this.buttonsApprove=[{label:"View",icon:"visibility",action:i=>{console.log("Approve",i),this.selectedData=i,this.router.navigate(["pages/gestion-creditos/desembolsos/registrar",this.selectedData.id])}}],this.buttonsPendiente=[{label:"View",icon:"visibility",action:i=>{console.log("Approve",i),this.selectedData=i,this.router.navigate(["pages/gestion-creditos/desembolsos/desembolso",this.selectedData.id])}}],this.tabChanged=i=>{console.log("tabChangeEvent => ",i),console.log("index => ",i.index),this.tabIndex=i.index,console.log(this.tabIndex),this.selectedTab=i.index==0?v.PENDIENTE_DESEMBOLSO:i.index==1?v.RECHAZADA_DESEMBOLSO:i.index==2?v.APROBADO_DESEMBOLSO:i.index==3?v.REALIZADA_DESEMBOLSO:v.APROBADA,this.getSolicitudes(this.selectedTab)}}getSolicitudes(i){console.log(i),i!="AprobadaDesembolso"?this.subcription$=this.solicitudService.getSolicitudes(i).pipe(O(t=>(t.data.forEach(e=>{e.estado?e.estado=H.ACTIVO:e.estado=H.INACTIVO}),t)),O(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.cupo=this.currencyPipe.transform(e.cupo,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?this.data=t.data:this.data=[]},t=>{this.data=[]}):this.subcription$=this.detalleConsumoService.getDetalleConsumoDesembolsos().pipe(O(t=>(t.data.forEach(e=>{e.estado?e.estado=H.ACTIVO:e.estado=H.INACTIVO}),t)),O(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.montoConsumo=this.currencyPipe.transform(e.montoConsumo,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?this.data=t.data:this.data=[]},t=>{this.data=[]})}onSearch(i){let t=i.target;this.searchTerm=t.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getSolicitudes(this.selectedTab),this.listenGrid()}listenGrid(){this.estadoDatosService.stateGridSolicitudes.asObservable().subscribe(t=>{t.state&&(console.log("Si entro"),console.log(t),this.selectedTab=t.tab==0?v.PENDIENTE:t.tab==1?v.RECHAZADA:t.tab==2?v.APROBADA:t.tab==3?v.REALIZADA_DESEMBOLSO:v.APROBADA,this.tabIndex=t.tab,console.log(this.tabIndex),this.getSolicitudes(this.selectedTab))})}exportToExcel(i){this.fuseService.open(D({},Ze)).afterClosed().subscribe(e=>{if(e==="confirmed"){let c=Se.json_to_sheet(i),b=Se.book_new();Se.book_append_sheet(b,c,"Sheet1"),ot(b,"exported_data.xlsx")}})}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=A({type:s,selectors:[["app-grid-desembolsos"]],standalone:!0,features:[N([E,_]),I],decls:23,vars:12,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-6","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-0","mt-2","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","Pendientes"],["matTabContent",""],["label","Rechazadas"],["label","Aprobadas"],["label","Realizados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(t,e){if(t&1){let c=T();a(0,"div",2)(1,"div",3)(2,"div",4),l(3,"Desembolsos"),o(),a(4,"div",5)(5,"mat-form-field",6),u(6,"mat-icon",7),a(7,"input",8),y("input",function(h){return C(c),x(e.onSearch(h))}),o()(),a(8,"button",9),y("click",function(){return C(c),x(e.exportToExcel(e.data))}),a(9,"span"),l(10," Exportar "),o()()()(),a(11,"div",10)(12,"div",11)(13,"mat-tab-group",12,0),Me("selectedIndexChange",function(h){return C(c),Ie(e.tabIndex,h)||(e.tabIndex=h),x(h)}),y("selectedTabChange",function(h){return C(c),x(e.tabChanged(h))}),a(15,"mat-tab",13),g(16,Et,3,2,"ng-template",14),o(),a(17,"mat-tab",15),g(18,wt,3,2,"ng-template",14),o(),a(19,"mat-tab",16),g(20,Tt,3,2,"ng-template",14),o(),a(21,"mat-tab",17),g(22,Mt,3,2,"ng-template",14),o()()()()()}t&2&&(n(5),m("subscriptSizing","dynamic"),n(),m("svgIcon","heroicons_solid:magnifying-glass"),n(),m("autocomplete","off")("placeholder","Buscar"),n(),m("color","primary")("ngClass",Ge(9,xt,e.data.length,!e.data.length))("disabled",!e.data.length),n(5),m("animationDuration","500"),Ne("selectedIndex",e.tabIndex))},dependencies:[Qe,ze,P,G,Le,R,et,Ye,tt,ee,Re]});let r=s;return r})();var Gt=["stepper"],Pt={validation:!1},mt=(()=>{let s=class s{constructor(){this.fuseService=p(V),this.router=p(M),this.fb=p(ce),this.activatedRoute=p(te),this.solicitudService=p(B),this.empleadosServices=p(xe),this.currencyPipe=p(_),this.swalService=p(ge),this.errorHandlerService=p(ye),this.showAlert=!1,this.alert={type:"success",message:""}}ngOnDestroy(){}ngOnInit(){this.createForm();let i=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(i)}getSolicitud(i){this.subscription$=this.solicitudService.getSolicitud(i).pipe(U(t=>{let e={idTipoDoc:t.data.trabajador.idTipoDoc,numDocumento:t.data.trabajador.numDoc};return this.empleadosServices.getEmpleadoParams(e)})).subscribe(t=>{if(t){this.showAlert=!1;let e={numDoc:t.data.numDoc,primerNombre:t.data.primerNombre,segundoNombre:t.data.segundoNombre,primerApellido:t.data.primerApellido,segundoApellido:t.data.segundoApellido,idTrabajador:t.data.id,correo:t.data.correo,credito:t.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(t.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:t.data.creditos[0].id,numCuentaBancaria:t.data.numCuentaBancaria,idTipoCuenta:t.data.idTipoCuenta,id:i};this.secondFormGroup.patchValue(e)}},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}onApprove(){if(this.secondFormGroup.valid){let{id:i,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),c={id:i,idEstado:z.APROBADA};this.fuseService.open(D({},$)).afterClosed().subscribe(h=>{h==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(c).subscribe(w=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},w=>{this.errorHandlerService.errorHandler(w)})})}}onRechazar(){if(this.secondFormGroup.valid){let{id:i,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),c={id:i,idEstado:z.RECHAZADA};this.fuseService.open(D({},$)).afterClosed().subscribe(h=>{h==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(c).subscribe(w=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},w=>{this.errorHandlerService.errorHandler(w)})})}}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",f.required],primerNombre:["",f.required],segundoNombre:[""],primerApellido:["",f.required],segundoApellido:[""],idTrabajador:[""],correo:["",f.required],credito:["",f.required],idCredito:["",f.required],numCuentaBancaria:[""],idTipoCuenta:[""],id:[""]})}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=A({type:s,selectors:[["app-form-approve-desembolso"]],viewQuery:function(t,e){if(t&1&&W(Gt,5),t&2){let c;J(c=K())&&(e.stepper=c.first)}},standalone:!0,features:[N([{provide:ie,useClass:be},{provide:oe,useValue:"en-GB"},E,_,he(Pt)]),I],decls:51,vars:14,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click"]],template:function(t,e){if(t&1){let c=T();a(0,"div",1)(1,"div",2)(2,"div",3),l(3),o(),a(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),l(12,"Primer nombre"),o(),u(13,"input",9),o(),a(14,"mat-form-field",6)(15,"mat-label"),l(16,"Segundo nombre"),o(),u(17,"input",9),o()(),a(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),l(21,"Primer apellido"),o(),u(22,"input",9),o(),a(23,"mat-form-field",6)(24,"mat-label"),l(25,"Segundo apellido"),o(),u(26,"input",9),o()(),a(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),l(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),a(32,"mat-form-field",6)(33,"mat-label"),l(34,"Email"),o(),u(35,"input",9),o()(),a(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),l(39,"Cr\xE9dito"),o(),u(40,"input",9),o()(),a(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),l(44,"N\xFAmero de cuenta"),o(),u(45,"input",9),o()()(),a(46,"div",11)(47,"button",12),y("click",function(){return C(c),x(e.onRechazar())}),l(48,"Rechazar"),o(),a(49,"button",13),y("click",function(){return C(c),x(e.onApprove())}),l(50,"Aprobar"),o()()()()()()()}t&2&&(n(3),Y(" ","Desembolso"," "),n(),m("orientation","vertical")("linear",!0)("animationDuration","1500"),n(2),m("stepControl",e.secondFormGroup),n(2),m("formGroup",e.secondFormGroup),n(5),m("formControlName","primerNombre"),n(4),m("formControlName","segundoNombre"),n(5),m("formControlName","primerApellido"),n(4),m("formControlName","segundoApellido"),n(5),m("formControlName","numDoc"),n(4),m("formControlName","correo"),n(5),m("formControlName","credito"),n(5),m("formControlName","numCuentaBancaria"))},dependencies:[re,Ce,P,G,R,ae,ve,ue,se,ne,le,me,de,pe]});let r=s;return r})();var xi=[{path:"",component:lt},{path:"desembolso/:id",component:mt},{path:"registrar/:id",component:nt}];export{xi as default};
