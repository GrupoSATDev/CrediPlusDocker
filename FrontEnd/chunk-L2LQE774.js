import{a as we}from"./chunk-RVCDGTSK.js";import{a as Q}from"./chunk-Z5PFH7JB.js";import{a as Z,b as T}from"./chunk-E3QK27E6.js";import{a as mt}from"./chunk-VG26ZCBI.js";import{a as dt}from"./chunk-JYV27IZ5.js";import{a as Ee,b as Te,c as it,d as at}from"./chunk-TSZX67OG.js";import{a as U}from"./chunk-ONG334ZN.js";import{a as st,b as _e}from"./chunk-P4PAYY2C.js";import{a as rt,b as nt,c as lt}from"./chunk-LIZCFAUR.js";import{b as j}from"./chunk-LOIXTBAB.js";import{a as N}from"./chunk-6RUGIWTY.js";import{a as ot}from"./chunk-CB47EK5H.js";import{a as X}from"./chunk-M6JKQUTX.js";import{a as z,b as tt}from"./chunk-QDHNBSMD.js";import{a as De}from"./chunk-OFI6PGZL.js";import{a as et,b as oe}from"./chunk-YHNXG437.js";import{a as ye}from"./chunk-VOLXTRGQ.js";import{a as ie}from"./chunk-6IEWE3OU.js";import{a as Ye}from"./chunk-PS6I32XU.js";import{a as Ke}from"./chunk-JC77WSFI.js";import{g as $}from"./chunk-2XRFSBL3.js";import{c as ce}from"./chunk-BF24YLJO.js";import"./chunk-CNRP5CR4.js";import{C as xe,E as We,F as Se,J as H,b as pe,c as Qe,i as q,l as fe,n as f,p as be,q as he,u as ge,x as ve,y as Ce}from"./chunk-D3YOWHEC.js";import{b as G,d as R,e as ze}from"./chunk-FSJGACMT.js";import{h as O}from"./chunk-AIQUJILU.js";import{a as Je}from"./chunk-EZC5HSZS.js";import"./chunk-ZFUJRZBK.js";import{Q as B,R as k,ba as Xe,ga as L,ha as Ue,la as ue}from"./chunk-V35GW63T.js";import"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import{b as Ze}from"./chunk-3PLTNX3F.js";import{Cb as E,Dc as D,Eb as C,Gc as x,Ib as le,Jb as se,Kb as me,Lb as Y,Mb as r,Mc as He,Nb as h,Ob as de,Qa as l,Qb as Ve,Rb as Ge,Sb as Re,Tb as Be,Ub as F,Vb as A,Wb as ke,X as ne,Yb as Oe,ba as Pe,bc as P,cc as qe,dc as ee,ec as te,ga as Ie,gb as b,ha as c,ib as s,l as re,ma as w,q as W,tb as i,ub as o,vb as u,wa as S,wb as J,xa as y,xb as K,xc as Le,yc as $e,zb as M,zc as V}from"./chunk-YBEOGPR3.js";import{a as _,d as Me}from"./chunk-NEB6MB4Y.js";var ct=(()=>{let d=class d{constructor(a,t){this._http=a,this.AppSettings=t}postDesembolso(a){return this._http.post(this.AppSettings.detalleConsumos.url.desembolsoBase,a)}patchDesembolso(a){let t=a.id;delete a.id;let{idEstado:e,idCuentaDestino:p,numeroFactura:g,idCuentaBancaria:v}=a;return this._http.patch(`${this.AppSettings.detalleConsumos.url.base}/Desembolso/${t}?idEstado=${e}&numFactura=${g}&cuentaDestino=${p}&idCuentaBancaria=${v}`,{})}};d.\u0275fac=function(t){return new(t||d)(Ie(He),Ie(Ze))},d.\u0275prov=Pe({token:d,factory:d.\u0275fac,providedIn:"root"});let n=d;return n})();var vt=["stepper"];function Ct(n,d){n&1&&(i(0,"mat-error"),r(1,"El campo es requerido!"),o())}function xt(n,d){n&1&&(i(0,"mat-error"),r(1,"El valor es requerido!"),o())}function St(n,d){n&1&&(i(0,"mat-error"),r(1,"El valor ingresado no puede superar el cupo disponible!"),o())}function yt(n,d){n&1&&(i(0,"mat-error"),r(1,"El campo es requerido!"),o())}function Dt(n,d){if(n&1&&(i(0,"mat-option",29),r(1),o()),n&2){let m=d.$implicit;s("value",m.idTipoCuenta),l(),h(m.nombreBanco)}}function Et(n,d){n&1&&(i(0,"mat-error"),r(1,"El campo es requerido!"),o())}function Tt(n,d){n&1&&(i(0,"mat-error"),r(1,"El campo es requerido!"),o())}function _t(n,d){if(n&1&&(i(0,"div",30)(1,"div",31)(2,"div",32)(3,"h2",33),r(4,"Resumen de desembolso"),o(),i(5,"p",34),r(6,"Revise los detalles"),o()(),i(7,"div",35)(8,"div",36)(9,"div")(10,"h3",37),r(11,"Fecha"),o()(),i(12,"p",38),r(13),P(14,"date"),o()(),i(15,"div",36)(16,"div")(17,"h3",37),r(18,"N\xFAmero de comprobante"),o()(),i(19,"p",38),r(20),o()(),i(21,"div",36)(22,"div")(23,"h3",37),r(24,"Valor"),o()(),i(25,"p",38),r(26),o()(),i(27,"div",36)(28,"div")(29,"h3",37),r(30,"Cuenta de origen"),o()(),i(31,"p",38),r(32),o()(),i(33,"div",39)(34,"div")(35,"h3",37),r(36,"Cuenta destino"),o()(),i(37,"p",38),r(38),o()()()()()),n&2){let m=C();l(13),h(ee(14,5,m.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),l(7),h(m.detaleConsumo.numeroFactura),l(6),h(m.detaleConsumo.montoConsumo),l(6),h(m.detaleConsumo.cuentaOrigen),l(6),h(m.detaleConsumo.cuentaDestino)}}var wt={validation:!1},pt=(()=>{let d=class d{constructor(){this.fuseService=c($),this.estadosDatosService=c(ye),this.empleadosServices=c(U),this.cuentasServices=c(dt),this.tipoCuentaService=c(ot),this.datePipe=c(D),this.currencyPipe=c(x),this.router=c(R),this.fb=c(xe),this.detalleConsumo=c(N),this.cuentas=[],this.desembolsoService=c(ct),this.swalService=c(De),this.solicitudService=c(Q),this.detalleConsumoService=c(N),this.activatedRoute=c(G),this.errorHandlerService=c(we),this.showAlert=!1,this.alert={type:"success",message:""},this.creditos=[],this.focus=focus,this.FormatoOptionsPipe=mt}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.createForm(),this.getCuentas();let a=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(a)}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}getSolicitud(a){let t;this.subscription$=this.detalleConsumoService.getDetalleConsumoDesembolso(a).pipe(ne(e=>{let p={idTipoDoc:e.data.trabajador.idTipoDoc,numDocumento:e.data.trabajador.numDoc};return t=e.data.montoConsumo,this.empleadosServices.getEmpleadoParams(p)})).subscribe(e=>{if(e){this.showAlert=!1;let p={numDoc:e.data.numDoc,primerNombre:e.data.primerNombre,segundoNombre:e.data.segundoNombre,primerApellido:e.data.primerApellido,segundoApellido:e.data.segundoApellido,idTrabajador:e.data.id,correo:e.data.correo,credito:e.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(e.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:e.data.creditos[0].id,numCuentaBancaria:e.data.numCuentaBancaria,idTipoCuenta:e.data.idTipoCuenta,nombreTipoCuenta:e.data.nombreTipoCuenta,id:a};this.secondFormGroup.patchValue(p),this.thirdFormGroup.patchValue({idCuentaBancaria:p.idTipoCuenta,cuentaDestino:p.numCuentaBancaria,montoConsumo:t,nombreTipoCuenta:p.nombreTipoCuenta}),this.creditos=e.data.creditos}},e=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}getCuentas(){this.subscription$=this.cuentasServices.getCuentasActivas().subscribe(a=>{this.cuentas=a.data,this.thirdFormGroup.get("cuentaOrigen").setValue(a.data[0].numeroCuenta)})}selectedData(a){let t=a.value,e=this.cuentas.find(p=>p.idTipoCuenta==t);this.thirdFormGroup.get("cuentaOrigen").setValue(e.numeroCuenta),this.thirdFormGroup.get("nombreTipoCuenta").setValue(e.nombreTipoCuenta)}selected(a){let t=a.value;this.compareValor=t.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(Ft(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(a){let t=a.value,e=this.secondFormGroup.get("idCredito")?.value;return!e||!e.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),re(null)):(console.log(t),console.log(e.montoConsumo),t>e.montoConsumo?re({notEqual:!0}):re(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}get comprobante(){return this.thirdFormGroup.get("numeroFactura")}get cuentaDestino(){return this.thirdFormGroup.get("cuentaDestino")}onSave(){if(this.thirdFormGroup.valid){let a=this.thirdFormGroup.getRawValue(),{montoConsumo:t,idCuentaBancaria:e,cuentaDestino:p}=a,g=Me(a,["montoConsumo","idCuentaBancaria","cuentaDestino"]),{id:v,idCredito:I,idTrabajador:ht}=this.secondFormGroup.getRawValue();console.log(I);let je=this.cuentas.filter(ae=>{if(ae.idTipoCuenta==e)return ae.id});console.log(je[0].id);let Ne=_({id:v,idEstado:T.REALIZADA,idCuentaDestino:p,idCuentaBancaria:je[0].id},g);console.log(Ne),this.fuseService.open(_({},oe)).afterClosed().subscribe(ae=>{ae==="confirmed"&&this.desembolsoService.patchDesembolso(Ne).subscribe(Ae=>{console.log(Ae),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.getResumenCompra(ht)},Ae=>{this.errorHandlerService.errorHandler(Ae)})})}}getResumenCompra(a){this.subscription$=this.detalleConsumo.getResumen(a).subscribe(t=>{t&&(console.log(t),this.detaleConsumo=t.data,this.stepper.next(),setTimeout(()=>{this.cerrar()},5e3))})}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",f.required],primerNombre:["",f.required],segundoNombre:[""],primerApellido:["",f.required],segundoApellido:[""],idTrabajador:[""],correo:["",f.required],credito:["",f.required],idCredito:["",f.required],numCuentaBancaria:[""],idTipoCuenta:[""],id:[""]}),this.thirdFormGroup=this.fb.group({montoConsumo:[{value:0,disabled:!0},[f.required]],numeroFactura:["",f.required],idCuentaBancaria:["",f.required],cuentaDestino:["",f.required],nombreTipoCuenta:[{value:0,disabled:!0},f.required],cuentaOrigen:[{value:0,disabled:!0},f.required]})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=w({type:d,selectors:[["app-form-desembolso"]],viewQuery:function(t,e){if(t&1&&le(vt,5),t&2){let p;se(p=me())&&(e.stepper=p.first)}},standalone:!0,features:[F([{provide:k,useClass:X},{provide:B,useValue:"en-GB"},D,x,z(wt)]),A],decls:95,vars:33,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","","matStepperNext","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"disabled"],["label","Confirmar desembolso",3,"stepControl"],[1,"w-full","h-full","p-4","sm:p-8"],[1,"flex","flex-col","sm:flex-row","items-baseline","gap-4"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","N\xFAmero de comprobante",3,"formControlName"],[4,"ngIf"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["matInput","","placeholder","Tipo de cuenta",3,"formControlName"],["placeholder","Cuenta de origen",3,"selectionChange","formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Cuenta destino",3,"formControlName"],["mat-button","","matStepperPrevious","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-gray-500","rounded-lg","hover:bg-gray-600"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click","disabled"],["label","Resumen de desembolso"],["class","w-full px-4 sm:px-8",4,"ngIf"],[3,"value"],[1,"w-full","px-4","sm:px-8"],[1,"max-w-2xl","mx-auto","p-6","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4","text-center"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center"]],template:function(t,e){if(t&1){let p=M();i(0,"div",1)(1,"div",2)(2,"div",3),r(3),o(),i(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),r(12,"Primer nombre"),o(),u(13,"input",9),o(),i(14,"mat-form-field",6)(15,"mat-label"),r(16,"Segundo nombre"),o(),u(17,"input",9),o()(),i(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),r(21,"Primer apellido"),o(),u(22,"input",9),o(),i(23,"mat-form-field",6)(24,"mat-label"),r(25,"Segundo apellido"),o(),u(26,"input",9),o()(),i(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),r(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),i(32,"mat-form-field",6)(33,"mat-label"),r(34,"Email"),o(),u(35,"input",9),o()(),i(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),r(39,"Cr\xE9dito / Cupo disponible"),o(),u(40,"input",9),o()(),i(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),r(44,"N\xFAmero de cuenta"),o(),u(45,"input",9),o()()(),i(46,"div",11)(47,"button",12),E("click",function(){return S(p),y(e.cerrar())}),r(48,"Cancelar"),o(),i(49,"button",13),r(50,"Siguiente"),o()()()(),i(51,"mat-step",14)(52,"div",15)(53,"form",7)(54,"div",16)(55,"mat-form-field",17)(56,"mat-label"),r(57,"N\xFAmero de comprobante"),o(),u(58,"input",18),b(59,Ct,2,0,"mat-error",19),o(),i(60,"mat-form-field",17)(61,"mat-label"),r(62,"Valor de la transferencia"),o(),u(63,"input",20),b(64,xt,2,0,"mat-error",19)(65,St,2,0,"mat-error",19),o()(),i(66,"div",8)(67,"mat-form-field",17)(68,"mat-label"),r(69,"Tipo de cuenta"),o(),u(70,"input",21),b(71,yt,2,0,"mat-error",19),o(),i(72,"mat-form-field",17)(73,"mat-label"),r(74,"Banco"),o(),i(75,"mat-select",22),E("selectionChange",function(v){return S(p),y(e.selectedData(v))}),b(76,Dt,2,2,"mat-option",23),o()()(),i(77,"div",8)(78,"mat-form-field",17)(79,"mat-label"),r(80,"Cuenta origen"),o(),u(81,"input",24),b(82,Et,2,0,"mat-error",19),o(),i(83,"mat-form-field",17)(84,"mat-label"),r(85,"Cuenta destino"),o(),u(86,"input",24),b(87,Tt,2,0,"mat-error",19),o()()(),i(88,"div",11)(89,"button",25),r(90,"Anterior"),o(),i(91,"button",26),E("click",function(){return S(p),y(e.onSave())}),r(92,"Confirmar"),o()()()(),i(93,"mat-step",27),b(94,_t,39,8,"div",28),o()()()()}t&2&&(l(3),de(" ","Desembolso"," "),l(),s("orientation","vertical")("linear",!0)("animationDuration","1500"),l(2),s("stepControl",e.secondFormGroup),l(2),s("formGroup",e.secondFormGroup),l(5),s("formControlName","primerNombre"),l(4),s("formControlName","segundoNombre"),l(5),s("formControlName","primerApellido"),l(4),s("formControlName","segundoApellido"),l(5),s("formControlName","numDoc"),l(4),s("formControlName","correo"),l(5),s("formControlName","credito"),l(5),s("formControlName","numCuentaBancaria"),l(4),s("disabled",e.secondFormGroup.invalid),l(2),s("stepControl",e.thirdFormGroup),l(2),s("formGroup",e.thirdFormGroup),l(5),s("formControlName","numeroFactura"),l(),s("ngIf",(e.comprobante.touched||e.comprobante.dirty)&&e.comprobante.hasError("required")),l(4),s("formControlName","montoConsumo")("mask","separator.0"),l(),s("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("required")),l(),s("ngIf",(e.montoConsumo.touched||e.montoConsumo.dirty)&&e.montoConsumo.hasError("notEqual")),l(5),s("formControlName","nombreTipoCuenta"),l(),s("ngIf",(e.cuentaDestino.touched||e.cuentaDestino.dirty)&&e.cuentaDestino.hasError("required")),l(4),s("formControlName","idCuentaBancaria"),l(),s("ngForOf",e.cuentas),l(5),s("formControlName","cuentaOrigen"),l(),s("ngIf",(e.cuentaDestino.touched||e.cuentaDestino.dirty)&&e.cuentaDestino.hasError("required")),l(4),s("formControlName","cuentaDestino"),l(),s("ngIf",(e.cuentaDestino.touched||e.cuentaDestino.dirty)&&e.cuentaDestino.hasError("required")),l(4),s("disabled",e.thirdFormGroup.invalid),l(3),s("ngIf",e.detaleConsumo))},dependencies:[O,D,We,ge,fe,be,he,L,Qe,q,H,pe,Xe,Ke,Ee,Te,it,at,$e,V,tt,Se,ve,Ce]});let n=d;return n})();function Ft(n){return d=>{let m=d.value;return console.log(n),m>n?{notEqual:!0}:null}}var At=(n,d)=>({"bg-green-700":n,"bg-credigray-100":d});function It(n,d){if(n&1&&(J(0),u(1,"app-custom-table",19),K()),n&2){let m=C(2);l(),s("columns",m.columns)("displayedColumns",m.columns)("columnPropertyMap",m.columnPropertyMap)("data",m.data)("buttons",m.buttonsPendiente)("searchTerm",m.searchTerm)}}function jt(n,d){n&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes hasta el momento. "),o()()()),n&2&&(l(2),s("type","info")("appearance","outline"))}function Nt(n,d){if(n&1&&b(0,It,2,6,"ng-container",18)(1,jt,6,2,"ng-template",null,1,te),n&2){let m=Y(2),a=C();s("ngIf",a.data.length)("ngIfElse",m)}}function Mt(n,d){if(n&1&&(J(0),u(1,"app-custom-table",19),K()),n&2){let m=C(2);l(),s("columns",m.columnsDesembolsos)("displayedColumns",m.columnsDesembolsos)("columnPropertyMap",m.columnPropertyMapDesembolsos)("data",m.data)("buttons",m.buttons)("searchTerm",m.searchTerm)}}function Pt(n,d){n&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes rechazadas hasta el momento. "),o()()()),n&2&&(l(2),s("type","info")("appearance","outline"))}function Vt(n,d){if(n&1&&b(0,Mt,2,6,"ng-container",18)(1,Pt,6,2,"ng-template",null,1,te),n&2){let m=Y(2),a=C();s("ngIf",a.data.length)("ngIfElse",m)}}function Gt(n,d){if(n&1&&(J(0),u(1,"app-custom-table",19),K()),n&2){let m=C(2);l(),s("columns",m.columnsDesembolsos)("displayedColumns",m.columnsDesembolsos)("columnPropertyMap",m.columnPropertyMapDesembolsos)("data",m.data)("buttons",m.buttonsApprove)("searchTerm",m.searchTerm)}}function Rt(n,d){n&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),n&2&&(l(2),s("type","info")("appearance","outline"))}function Bt(n,d){if(n&1&&b(0,Gt,2,6,"ng-container",18)(1,Rt,6,2,"ng-template",null,1,te),n&2){let m=Y(2),a=C();s("ngIf",a.data.length)("ngIfElse",m)}}function kt(n,d){if(n&1&&(J(0),u(1,"app-custom-table",19),K()),n&2){let m=C(2);l(),s("columns",m.columnsDesembolsos)("displayedColumns",m.columnsDesembolsos)("columnPropertyMap",m.columnPropertyMapDesembolsos)("data",m.data)("buttons",m.buttonsView)("searchTerm",m.searchTerm)}}function Ot(n,d){n&1&&(i(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),r(4,"Informaci\xF3n"),o(),r(5," No hay solicitudes aprobadas hasta el momento. "),o()()()),n&2&&(l(2),s("type","info")("appearance","outline"))}function qt(n,d){if(n&1&&b(0,kt,2,6,"ng-container",18)(1,Ot,6,2,"ng-template",null,1,te),n&2){let m=Y(2),a=C();s("ngIf",a.data.length)("ngIfElse",m)}}var ut=(()=>{let d=class d{constructor(){this.datePipe=c(D),this.currencyPipe=c(x),this.router=c(R),this.selectedTab=T.PENDIENTE,this._matDialog=c(ce),this.estadoDatosService=c(ye),this.solicitudService=c(Q),this.detalleConsumoService=c(N),this.fuseService=c($),this.exportData=[],this.searchTerm="",this.data=[],this.columns=["Fecha de solicitud","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Cupo solicitado","Tipo de solicitud","Tipo de cuenta","N\xFAmero de cuenta","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreSubEmpresa",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Cupo solicitado":"cupo","Tipo de solicitud":"nombreTipoSolicitud","Tipo de cuenta":"tipoCuentaTrabajador","N\xFAmero de cuenta":"numeroCuentaTrabajador",Estado:"nombreEstadoSolicitud"},this.columnsDesembolsos=["Fecha de solicitud","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Monto solicitado","Cupo disponible","Tipo de consumo","Tipo de cuenta","Banco","N\xFAmero de cuenta","Estado"],this.columnPropertyMapDesembolsos={"Fecha de solicitud":"fechaCreacion",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreEmpresaTrabajador",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Monto solicitado":"montoConsumo","Cupo disponible":"cupoDisponibleTrabajador","Tipo de consumo":"tipoConsumo","Tipo de cuenta":"tipoCuentaTrabajador",Banco:"bancotrabajador","N\xFAmero de cuenta":"numeroCuentaTrabajador",Estado:"nombreEstadoCredito"},this.buttons=[{label:"View",icon:"visibility",action:a=>{console.log("Approve",a),this.selectedData=a,this.router.navigate(["pages/gestion-creditos/solicitudes/estados",this.selectedData.id])}}],this.buttonsApprove=[{label:"View",icon:"visibility",action:a=>{console.log("Approve",a),this.selectedData=a,this.router.navigate(["pages/gestion-creditos/desembolsos/registrar",this.selectedData.id])}}],this.buttonsView=[{label:"View",icon:"visibility",action:a=>{console.log("Approve",a),this.selectedData=a,this.router.navigate(["pages/gestion-creditos/desembolsos/view",this.selectedData.id])}}],this.buttonsPendiente=[{label:"View",icon:"visibility",action:a=>{console.log("Approve",a),this.selectedData=a,this.router.navigate(["pages/gestion-creditos/desembolsos/desembolso",this.selectedData.id])}}],this.tabChanged=a=>{this.tabIndex=a.index,this.selectedTab=a.index==0?T.PENDIENTE:a.index==1?j.RECHAZADA:a.index==2?j.APROBADA:a.index==3?j.REALIZADA:Z.APROBADA,[T.PENDIENTE].includes(this.selectedTab)?this.getSolicitudes(this.selectedTab):[j.RECHAZADA,j.APROBADA,j.REALIZADA].includes(this.selectedTab)&&this.getDesembolsos(this.selectedTab)}}getSolicitudes(a){this.subcription$=this.solicitudService.getSolicitudesDesembolso(a).pipe(W(t=>(t.data.forEach(e=>{e.estado?e.estado=ie.ACTIVO:e.estado=ie.INACTIVO}),t)),W(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.fechaInicioContratoTrabajador=this.datePipe.transform(e.fechaInicioContratoTrabajador,"dd/MM/yyyy"),e.fechaFinContratoTrabajador=this.datePipe.transform(e.fechaFinContratoTrabajador,"dd/MM/yyyy"),e.cupo=this.currencyPipe.transform(e.cupo,"USD","symbol","1.2-2"),e.salarioDevengadoTrabajador=this.currencyPipe.transform(e.salarioDevengadoTrabajador,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?(this.data=t.data,this.convertDataExportPendiente(t.data)):this.data=[]},t=>{this.data=[]})}getDesembolsos(a){this.subcription$=this.detalleConsumoService.getDetallesConsumoDesembolsos(a).pipe(W(t=>(t.data.forEach(e=>{e.estado?e.estado=ie.ACTIVO:e.estado=ie.INACTIVO}),t)),W(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.fechaInicioContratoTrabajador=this.datePipe.transform(e.fechaInicioContratoTrabajador,"dd/MM/yyyy"),e.fechaFinContratoTrabajador=this.datePipe.transform(e.fechaFinContratoTrabajador,"dd/MM/yyyy"),e.salarioDevengadoTrabajador=this.currencyPipe.transform(e.salarioDevengadoTrabajador,"USD","symbol","1.2-2"),e.montoConsumo=this.currencyPipe.transform(e.montoConsumo,"USD","symbol","1.2-2"),e.cupoDisponibleTrabajador=this.currencyPipe.transform(e.cupoDisponibleTrabajador,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?(this.data=t.data,this.convertDataExport(t.data)):this.data=[]},t=>{this.data=[]})}onSearch(a){let t=a.target;this.searchTerm=t.value.trim().toLowerCase()}convertDataExport(a){let t=a.map(e=>({FechaSolicitud:e.fechaCreacion,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreSubEmpresa,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:e.salarioDevengadoTrabajador,MontoSolicitado:e.montoConsumo,CupoDisponible:e.cupoDisponibleTrabajador,TipoConsumo:e.tipoConsumo,TipoCuenta:e.tipoCuentaTrabajador,Banco:e.bancotrabajador,NumeroCuenta:e.numeroCuentaTrabajador,Estado:e.nombreEstadoCredito}));this.exportData=t}convertDataExportPendiente(a){let t=a.map(e=>({FechaSolicitud:e.fechaCreacion,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreSubEmpresa,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:e.salarioDevengadoTrabajador,CupoSolicitado:e.cupoDisponibleTrabajador,TipoSolicitud:e.nombreTipoSolicitud,TipoCuenta:e.tipoCuentaTrabajador,Banco:e.bancotrabajador,NumeroCuenta:e.numeroCuentaTrabajador,Estado:e.nombreEstadoSolicitud}));this.exportData=t}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getSolicitudes(this.selectedTab),this.listenGrid()}listenGrid(){this.estadoDatosService.stateGridSolicitudes.asObservable().subscribe(t=>{t.state&&(console.log("Si entro"),console.log(t),this.selectedTab=t.tab==0?T.PENDIENTE:t.tab==1?Z.RECHAZADA:t.tab==2?Z.APROBADA:t.tab==3?Z.REALIZADA_DESEMBOLSO:Z.APROBADA,this.tabIndex=t.tab)})}exportToExcel(a){this.fuseService.open(_({},et)).afterClosed().subscribe(e=>{if(e==="confirmed"){let p=_e.json_to_sheet(a),g=_e.book_new();_e.book_append_sheet(g,p,"Sheet1"),st(g,`Desembolsos${this.datePipe.transform(new Date,"dd/MM/yyyy")}.xlsx`)}})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=w({type:d,selectors:[["app-grid-desembolsos"]],standalone:!0,features:[F([D,x]),A],decls:23,vars:12,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-6","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-0","mt-2","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","Pendientes"],["matTabContent",""],["label","Rechazadas"],["label","Aprobadas"],["label","Realizados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(t,e){if(t&1){let p=M();i(0,"div",2)(1,"div",3)(2,"div",4),r(3,"Desembolsos"),o(),i(4,"div",5)(5,"mat-form-field",6),u(6,"mat-icon",7),i(7,"input",8),E("input",function(v){return S(p),y(e.onSearch(v))}),o()(),i(8,"button",9),E("click",function(){return S(p),y(e.exportToExcel(e.exportData))}),i(9,"span"),r(10," Exportar "),o()()()(),i(11,"div",10)(12,"div",11)(13,"mat-tab-group",12,0),Be("selectedIndexChange",function(v){return S(p),Re(e.tabIndex,v)||(e.tabIndex=v),y(v)}),E("selectedTabChange",function(v){return S(p),y(e.tabChanged(v))}),i(15,"mat-tab",13),b(16,Nt,3,2,"ng-template",14),o(),i(17,"mat-tab",15),b(18,Vt,3,2,"ng-template",14),o(),i(19,"mat-tab",16),b(20,Bt,3,2,"ng-template",14),o(),i(21,"mat-tab",17),b(22,qt,3,2,"ng-template",14),o()()()()()}t&2&&(l(5),s("subscriptSizing","dynamic"),l(),s("svgIcon","heroicons_solid:magnifying-glass"),l(),s("autocomplete","off")("placeholder","Buscar"),l(),s("color","primary")("ngClass",Oe(9,At,e.exportData.length,!e.exportData.length))("disabled",!e.exportData.length),l(5),s("animationDuration","500"),Ge("selectedIndex",e.tabIndex))},dependencies:[Ye,Je,L,q,ue,H,nt,rt,lt,V,Le]});let n=d;return n})();var Lt=["stepper"],$t={validation:!1},ft=(()=>{let d=class d{constructor(){this.fuseService=c($),this.router=c(R),this.fb=c(xe),this.activatedRoute=c(G),this.solicitudService=c(Q),this.empleadosServices=c(U),this.currencyPipe=c(x),this.swalService=c(De),this.errorHandlerService=c(we),this.showAlert=!1,this.alert={type:"success",message:""}}ngOnDestroy(){}ngOnInit(){this.createForm();let a=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(a)}getSolicitud(a){this.subscription$=this.solicitudService.getSolicitud(a).pipe(ne(t=>{let e={idTipoDoc:t.data.trabajador.idTipoDoc,numDocumento:t.data.trabajador.numDoc};return this.empleadosServices.getEmpleadoParams(e)})).subscribe(t=>{if(t){this.showAlert=!1;let e={numDoc:t.data.numDoc,primerNombre:t.data.primerNombre,segundoNombre:t.data.segundoNombre,primerApellido:t.data.primerApellido,segundoApellido:t.data.segundoApellido,idTrabajador:t.data.id,correo:t.data.correo,credito:t.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(t.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:t.data.creditos[0].id,numCuentaBancaria:t.data.numCuentaBancaria,idTipoCuenta:t.data.idTipoCuenta,id:a};this.secondFormGroup.patchValue(e)}},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}onApprove(){if(this.secondFormGroup.valid){let{id:a,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),p={id:a,idEstado:T.APROBADA};this.fuseService.open(_({},oe)).afterClosed().subscribe(v=>{v==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(p).subscribe(I=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},I=>{this.errorHandlerService.errorHandler(I)})})}}onRechazar(){if(this.secondFormGroup.valid){let{id:a,idCredito:t,idTrabajador:e}=this.secondFormGroup.getRawValue(),p={id:a,idEstado:T.RECHAZADA};this.fuseService.open(_({},oe)).afterClosed().subscribe(v=>{v==="confirmed"&&this.solicitudService.patchSolicitudDesembolso(p).subscribe(I=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.router.navigate(["pages/gestion-creditos/desembolsos"])},I=>{this.errorHandlerService.errorHandler(I)})})}}cerrar(){this.router.navigate(["/pages/gestion-creditos/desembolsos"])}createForm(){this.secondFormGroup=this.fb.group({numDoc:["",f.required],primerNombre:["",f.required],segundoNombre:[""],primerApellido:["",f.required],segundoApellido:[""],idTrabajador:[""],correo:["",f.required],credito:["",f.required],idCredito:["",f.required],numCuentaBancaria:[""],idTipoCuenta:[""],id:[""]})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=w({type:d,selectors:[["app-form-approve-desembolso"]],viewQuery:function(t,e){if(t&1&&le(Lt,5),t&2){let p;se(p=me())&&(e.stepper=p.first)}},standalone:!0,features:[F([{provide:k,useClass:X},{provide:B,useValue:"en-GB"},D,x,z($t)]),A],decls:51,vars:14,consts:[["stepper",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","","readonly","",3,"formControlName"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediorange-100","rounded-lg",3,"click"],["mat-button","",1,"sm:w-auto","w-full","py-2","px-4","text-white","bg-crediblue-50","rounded-lg","hover:bg-opacity-80",3,"click"]],template:function(t,e){if(t&1){let p=M();i(0,"div",1)(1,"div",2)(2,"div",3),r(3),o(),i(4,"mat-stepper",4,0)(6,"mat-step",5)(7,"div",6)(8,"form",7)(9,"div",8)(10,"mat-form-field",6)(11,"mat-label"),r(12,"Primer nombre"),o(),u(13,"input",9),o(),i(14,"mat-form-field",6)(15,"mat-label"),r(16,"Segundo nombre"),o(),u(17,"input",9),o()(),i(18,"div",8)(19,"mat-form-field",6)(20,"mat-label"),r(21,"Primer apellido"),o(),u(22,"input",9),o(),i(23,"mat-form-field",6)(24,"mat-label"),r(25,"Segundo apellido"),o(),u(26,"input",9),o()(),i(27,"div",8)(28,"mat-form-field",6)(29,"mat-label"),r(30,"Identificaci\xF3n"),o(),u(31,"input",9),o(),i(32,"mat-form-field",6)(33,"mat-label"),r(34,"Email"),o(),u(35,"input",9),o()(),i(36,"div",10)(37,"mat-form-field",6)(38,"mat-label"),r(39,"Cr\xE9dito / Cupo disponible"),o(),u(40,"input",9),o()(),i(41,"div",10)(42,"mat-form-field",6)(43,"mat-label"),r(44,"N\xFAmero de cuenta"),o(),u(45,"input",9),o()()(),i(46,"div",11)(47,"button",12),E("click",function(){return S(p),y(e.onRechazar())}),r(48,"Rechazar"),o(),i(49,"button",13),E("click",function(){return S(p),y(e.onApprove())}),r(50,"Aprobar"),o()()()()()()()}t&2&&(l(3),de(" ","Desembolso"," "),l(),s("orientation","vertical")("linear",!0)("animationDuration","1500"),l(2),s("stepControl",e.secondFormGroup),l(2),s("formGroup",e.secondFormGroup),l(5),s("formControlName","primerNombre"),l(4),s("formControlName","segundoNombre"),l(5),s("formControlName","primerApellido"),l(4),s("formControlName","segundoApellido"),l(5),s("formControlName","numDoc"),l(4),s("formControlName","correo"),l(5),s("formControlName","credito"),l(5),s("formControlName","numCuentaBancaria"))},dependencies:[O,Te,L,q,H,pe,Ee,Se,ge,fe,be,he,ve,Ce]});let n=d;return n})();var Ht=()=>["/pages/gestion-creditos/desembolsos"];function zt(n,d){if(n&1&&(i(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),r(4),o(),i(5,"p",11),r(6,"Identificaci\xF3n: "),i(7,"span",12),r(8),o()(),i(9,"p",11),r(10,"Empresa: "),i(11,"span",12),r(12),o()(),i(13,"p",13),r(14,"Cargo: "),i(15,"span",12),r(16),o()(),i(17,"p",13),r(18,"Tipo de contrato: "),i(19,"span",12),r(20),o()(),i(21,"p",13),r(22,"Salario devengado: "),i(23,"span",12),r(24),P(25,"currency"),o()(),i(26,"p",11),r(27,"Correo: "),i(28,"span",12),r(29),o()(),i(30,"p",11),r(31,"Direcci\xF3n: "),i(32,"span",12),r(33),o()(),i(34,"p",11),r(35,"Tel\xE9fono: "),i(36,"span",12),r(37),o()()(),i(38,"div")(39,"p",11),r(40,"Estado de Desembolso: "),i(41,"span",12),r(42),o()(),i(43,"p",11),r(44,"Valor de desembolso: "),i(45,"span",12),r(46),P(47,"currency"),o()(),i(48,"p",11),r(49,"Fecha de Solicitud: "),i(50,"span",12),r(51),P(52,"date"),o()()()()()),n&2){let m=C();l(4),Ve(" ",m.items.trabajador.primerNombre," ",m.items.trabajador.segundoNombre," ",m.items.trabajador.primerApellido," ",m.items.trabajador.segundoApellido," "),l(4),h(m.items.trabajador.numDoc),l(4),h(m.items.trabajador.nombreSubEmpresa),l(4),h(m.items.trabajador.cargo),l(4),h(m.items.trabajador.nombreTipoContrato),l(4),h(ee(25,15,m.items.trabajador.salarioDevengado,"USD")),l(5),h(m.items.trabajador.correo),l(4),h(m.items.trabajador.direccion),l(4),h(m.items.trabajador.telefono),l(5),h(m.items.nombreEstadoCredito),l(4),h(qe(47,18,m.items.montoConsumo)),l(5),h(ee(52,20,m.items.fechaCreacion,"dd/MM/yyyy"))}}var Xt={validation:!1},bt=(()=>{let d=class d{constructor(){this.activatedRoute=c(G),this._matDialog=c(ce),this.detalleConsumoService=c(N),this.currencyPipe=c(x),this.empleadosServices=c(U),this.showAlert=!1,this.alert={type:"success",message:""}}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){let a=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(a)}getSolicitud(a){this.subscription$=this.detalleConsumoService.getDetalleConsumoDesembolso(a).subscribe(t=>{t&&(this.showAlert=!1,this.items=t.data)},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=w({type:d,selectors:[["app-form-view-desembolso"]],standalone:!0,features:[F([{provide:k,useClass:X},{provide:B,useValue:"en-GB"},D,x,z(Xt)]),A],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-6","md:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-4xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-4","py-3","sm:px-6","sm:py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-lg","sm:text-xl","font-bold","text-white"],["class","p-4 sm:p-6",4,"ngIf"],[1,"p-4","sm:p-6"],[1,"mb-4","flex","flex-col","md:flex-row","md:justify-between","gap-4"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800"],[1,"font-medium","text-gray-600"],[1,"text-md","text-secondary"],[1,"text-gray-600","font-medium"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),u(6,"mat-icon",5),o()(),i(7,"h2",6),r(8,"Detalle de Desembolso"),o()(),b(9,zt,53,23,"div",7),o()()()),t&2&&(l(5),s("routerLink",ke(3,Ht)),l(),s("svgIcon","heroicons_outline:arrow-long-left"),l(3),s("ngIf",e.items))},dependencies:[O,x,D,Ue,ue,V,ze]});let n=d;return n})();var Zi=[{path:"",component:ut},{path:"desembolso/:id",component:ft},{path:"registrar/:id",component:pt},{path:"view/:id",component:bt}];export{Zi as default};
