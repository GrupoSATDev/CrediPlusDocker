import{a as Be,b as Re,c as Pe}from"./chunk-TV4PQ7AO.js";import{a as Ge,b as Ve,c as qe,d as je,e as Me}from"./chunk-TGU6HMSZ.js";import{a as ke}from"./chunk-NZK3BYOF.js";import{a as Ie}from"./chunk-Z2MQWE4K.js";import{a as Te,b as Ae}from"./chunk-DNIDWOKC.js";import{a as De}from"./chunk-OAQCFW4U.js";import{a as Ne}from"./chunk-CQJY43M3.js";import{a as _e}from"./chunk-OFEOPKCC.js";import{a as Fe}from"./chunk-SY2UEK6G.js";import{a as Ee}from"./chunk-ACIMG2KZ.js";import{a as we}from"./chunk-H7DTTKLU.js";import{a as xe}from"./chunk-33XTDNRI.js";import{g as de}from"./chunk-QS2WZY2K.js";import"./chunk-JND367CQ.js";import{h as ne}from"./chunk-7U4JZNVG.js";import{a as ye}from"./chunk-CH3XODOV.js";import"./chunk-ZFQVSUZG.js";import{B as be,C as ge,G as Se,b as ae,c as me,i as le,l as pe,n as u,p as ue,q as ce,u as fe,w as ve,x as he,z as Ce}from"./chunk-JLNARVDU.js";import{$ as re,Q as oe,R as ie,ea as se}from"./chunk-DARKUWJB.js";import"./chunk-75YALSW6.js";import"./chunk-EENLYY7H.js";import{a as w}from"./chunk-HHDBYFMG.js";import{d as te}from"./chunk-DJAHQBBJ.js";import{e as U,f as X,g as Y,i as Z,j as F,l as ee,r as E}from"./chunk-NP3GUERB.js";import{$ as y,Cb as r,Db as e,Eb as c,Fb as P,Gb as O,Ib as $,Ob as I,Qb as T,Ub as L,Vb as Q,Wb as H,X as B,Yb as n,Za as o,Zb as v,_b as A,dc as z,ea as C,ec as J,fa as p,hc as W,ka as R,l as S,mc as x,nc as G,oc as K,pb as f,rb as l,ua as _,va as N}from"./chunk-32HXX3OB.js";import{a as D,d as k}from"./chunk-NEB6MB4Y.js";var $e=(()=>{let m=class m{constructor(s,t){this._http=s,this.appSettings=t}getTipoCuentas(){return this._http.get(this.appSettings.tipoCuentas.url.base)}getTipoCuenta(s){return this._http.get(`${this.appSettings.tipoCuentas.url.base}/${s}`)}};m.\u0275fac=function(t){return new(t||m)(C(E),C(w))},m.\u0275prov=y({token:m,factory:m.\u0275fac,providedIn:"root"});let a=m;return a})();var Le=(()=>{let m=class m{constructor(s,t){this._http=s,this.AppSettings=t}postDesembolso(s){return this._http.post(this.AppSettings.detalleConsumos.url.desembolsoBase,s)}};m.\u0275fac=function(t){return new(t||m)(C(E),C(w))},m.\u0275prov=y({token:m,factory:m.\u0275fac,providedIn:"root"});let a=m;return a})();var Je=["stepper"],We=(a,m)=>({"bg-crediblue-50":a,"bg-credigray-100":m});function Ke(a,m){if(a&1&&(r(0,"mat-option",36),n(1),e()),a&2){let d=m.$implicit;l("value",d.id),o(),v(d.nombre)}}function Ue(a,m){if(a&1&&(P(0),f(1,Ke,2,2,"mat-option",31),O()),a&2){let d=m.ngIf;o(),l("ngForOf",d.data)}}function Xe(a,m){a&1&&(r(0,"mat-error"),n(1," El n\xFAmero de identificaci\xF3n es requerido!. "),e())}function Ye(a,m){if(a&1&&(r(0,"fuse-alert",37),n(1),e()),a&2){let d=T();l("appearance","outline")("showIcon",!1)("type",d.alert.type)("@shake",d.alert.type==="error"),o(),A(" ",d.alert.message," ")}}function Ze(a,m){a&1&&(r(0,"mat-error"),n(1,"El valor es requerido!"),e())}function et(a,m){a&1&&(r(0,"mat-error"),n(1,"El valor ingresado no puede superar el cupo disponible!"),e())}function tt(a,m){if(a&1&&(r(0,"mat-option",36),n(1),e()),a&2){let d=m.$implicit;l("value",d.idTipoCuenta),o(),v(d.nombreBanco)}}function ot(a,m){if(a&1&&(r(0,"div",18)(1,"div",38)(2,"div",39)(3,"h2",40),n(4,"Resumen de desembolso"),e(),r(5,"p",41),n(6,"Revise los detalles"),e()(),r(7,"div",42)(8,"div",43)(9,"div")(10,"h3",44),n(11,"Fecha"),e()(),r(12,"p",45),n(13),x(14,"date"),e()(),r(15,"div",43)(16,"div")(17,"h3",44),n(18,"N\xFAmero de comprobante"),e()(),r(19,"p",45),n(20),e()(),r(21,"div",43)(22,"div")(23,"h3",44),n(24,"Valor"),e()(),r(25,"p",45),n(26),x(27,"currency"),e()(),r(28,"div",46)(29,"p",44),n(30,"N\xFAmero de cuotas"),e(),r(31,"p",45),n(32),e()(),r(33,"div",47)(34,"p",44),n(35,"Estado"),e(),r(36,"p",45),n(37),e()()()()()),a&2){let d=T();o(13),v(K(14,5,d.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),o(7),v(d.detaleConsumo.numeroFactura),o(6),v(G(27,8,d.detaleConsumo.montoConsumo)),o(6),v(d.detaleConsumo.cantidadCuotas),o(5),v(d.detaleConsumo.nombreEstadoCredito)}}var it={validation:!1},Qe=(()=>{let m=class m{constructor(){this.tiposDocumentosService=p(Fe),this.fuseService=p(de),this.estadosDatosService=p(_e),this.toasService=p(Ne),this.empleadosServices=p(Me),this.tipoConsumosService=p(Re),this.cuentasServices=p(Pe),this.tipoCuentaService=p($e),this.datePipe=p(F),this.router=p(te),this.fb=p(Ce),this._locacionService=p(De),this.detalleConsumo=p(ke),this.cuentas=[],this.tipoCuentas$=this.tipoCuentaService.getTipoCuentas(),this.desembolsoService=p(Le),this.swalService=p(Ee),this.showAlert=!1,this.alert={type:"success",message:""},this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(B(s=>{let t=s.data[3];t&&this.firstFormGroup.get("idTipoDoc").setValue(t.id)})),this.creditos=[],this.focus=focus,this.FormatoOptionsPipe=Be}ngOnDestroy(){}ngOnInit(){this.createForm(),this.getCuentas()}getCuentas(){this.subscription$=this.cuentasServices.getCuentas().subscribe(s=>{this.cuentas=s.data})}selected(s){let t=s.value;this.compareValor=t.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(rt(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(s){let t=s.value,i=this.secondFormGroup.get("idCredito")?.value;return!i||!i.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),S(null)):(console.log(t),console.log(i.montoConsumo),t>i.montoConsumo?S({notEqual:!0}):S(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}onSearch(){let s=this.firstFormGroup.getRawValue();this.empleadosServices.getEmpleadoParams(s).subscribe(t=>{if(console.log(t),t){this.showAlert=!1;let i={numDoc:t.data.numDoc,primerNombre:t.data.primerNombre,segundoNombre:t.data.segundoNombre,primerApellido:t.data.primerApellido,segundoApellido:t.data.segundoApellido,idTrabajador:t.data.id,correo:t.data.correo,credito:t.data.creditos[0].numCredito+" - "+t.data.creditos[0].cupoDisponible,idCredito:t.data.creditos[0].id,numCuentaBancaria:t.data.numCuentaBancaria,idTipoCuenta:t.data.idTipoCuenta};this.secondFormGroup.patchValue(i),console.log(i),console.log(this.thirdFormGroup.getRawValue()),this.thirdFormGroup.patchValue({idCuentaBancaria:i.idTipoCuenta,cuentaDestino:i.numCuentaBancaria}),this.creditos=t.data.creditos,setTimeout(()=>{this.stepper.next()},1200)}},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}onSave(){if(this.thirdFormGroup.valid){let s=this.thirdFormGroup.getRawValue(),{montoConsumo:t,idCuentaBancaria:i}=s,h=k(s,["montoConsumo","idCuentaBancaria"]),{idCredito:b,idTrabajador:V}=this.secondFormGroup.getRawValue();console.log(b);let q=this.cuentas.filter(g=>{if(g.idTipoCuenta==i)return g.id});console.log(q[0].id);let j=D({idCredito:b,idTrabajador:V,montoConsumo:Number(t),idCuentaBancaria:q[0].id},h);console.log(j),this.fuseService.open(D({},we)).afterClosed().subscribe(g=>{g==="confirmed"&&this.desembolsoService.postDesembolso(j).subscribe(M=>{console.log(M),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.getResumenCompra(V)},M=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}getResumenCompra(s){this.subscription$=this.detalleConsumo.getResumen(s).subscribe(t=>{t&&(console.log(t),this.detaleConsumo=t.data,this.stepper.next())})}createForm(){this.firstFormGroup=this.fb.group({idTipoDoc:[""],numDocumento:["",u.required]}),this.secondFormGroup=this.fb.group({numDoc:["",u.required],primerNombre:["",u.required],segundoNombre:["",u.required],primerApellido:["",u.required],segundoApellido:["",u.required],idTrabajador:[""],correo:["",u.required],credito:["",u.required],idCredito:["",u.required],numCuentaBancaria:[""],idTipoCuenta:[""]}),this.thirdFormGroup=this.fb.group({montoConsumo:["",[u.required]],numeroFactura:["",u.required],idCuentaBancaria:["",u.required],cuentaDestino:["",u.required],idCuenta:[""]})}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=R({type:m,selectors:[["app-form-desembolso"]],viewQuery:function(t,i){if(t&1&&L(Je,5),t&2){let h;Q(h=H())&&(i.stepper=h.first)}},standalone:!0,features:[z([{provide:ie,useClass:Ie},{provide:oe,useValue:"en-GB"},F,Te(it)]),J],decls:96,vars:46,consts:[["stepper",""],["data",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto","overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[3,"linear"],["label","Consultar trabajador",3,"stepControl"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full","px-4"],[3,"formGroup"],[1,"w-full"],[3,"formControlName"],[4,"ngIf"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Ingrese identificaci\xF3n",3,"formControlName"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],["mat-raised-button","",1,"text-white","px-6","py-2","rounded-md","w-full",3,"click","disabled","ngClass"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full","h-full","px-4"],[1,"flex","flex-row","gap-2.5"],["matInput","",3,"formControlName","readonly"],[1,"flex","flex-row"],[1,"flex","justify-end","gap-2.5"],["mat-button","","matStepperPrevious","",1,"bg-gray-500","text-white","py-2","px-4","rounded","hover:bg-gray-600"],["mat-button","","matStepperNext","",1,"bg-crediblue-50","text-white","py-2","px-4","rounded",3,"disabled"],["label","Confirmar desembolso",3,"stepControl"],[1,"w-full","h-full","p-4","shadow-lg"],[1,"flex","flex-row","items-baseline","gap-2.5"],["matInput","","placeholder","N\xFAmero de comprobante",3,"formControlName"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["placeholder","Cuenta de origen",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","placeholder","Cuenta destino",3,"formControlName"],["mat-button","",1,"bg-crediblue-50","text-white","py-2","px-4","rounded",3,"click","disabled"],["label","Resumen de desembolso",3,"stepControl"],["class","w-full h-full px-4",4,"ngIf"],[3,"value"],[1,"mb-4",3,"appearance","showIcon","type"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center"]],template:function(t,i){if(t&1){let h=$();r(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),n(4),e(),r(5,"mat-horizontal-stepper",6,0)(7,"mat-step",7)(8,"div",8)(9,"form",9)(10,"mat-form-field",10)(11,"mat-label"),n(12,"Tipo de documento"),e(),r(13,"mat-select",11),f(14,Ue,2,1,"ng-container",12),x(15,"async"),e()(),r(16,"mat-form-field",13)(17,"mat-label"),n(18,"N\xFAmero de identificaci\xF3n"),e(),c(19,"input",14),f(20,Xe,2,0,"mat-error",12),e(),f(21,Ye,2,5,"fuse-alert",15),r(22,"button",16),I("click",function(){return _(h),N(i.onSearch())}),n(23,"Consultar"),e()()()(),r(24,"mat-step",17)(25,"div",18)(26,"form",9)(27,"div",19)(28,"mat-form-field",10)(29,"mat-label"),n(30,"Primer nombre"),e(),c(31,"input",20),e(),r(32,"mat-form-field",10)(33,"mat-label"),n(34,"Segundo nombre"),e(),c(35,"input",20),e()(),r(36,"div",19)(37,"mat-form-field",10)(38,"mat-label"),n(39,"Primer apellido"),e(),c(40,"input",20),e(),r(41,"mat-form-field",10)(42,"mat-label"),n(43,"Segundo apellido"),e(),c(44,"input",20),e()(),r(45,"div",19)(46,"mat-form-field",10)(47,"mat-label"),n(48,"Identificaci\xF3n"),e(),c(49,"input",20),e(),r(50,"mat-form-field",10)(51,"mat-label"),n(52,"Email"),e(),c(53,"input",20),e()(),r(54,"div",21)(55,"mat-form-field",10)(56,"mat-label"),n(57,"Cr\xE9dito"),e(),c(58,"input",20),e()()(),r(59,"div",22)(60,"button",23),n(61,"Anterior"),e(),r(62,"button",24),n(63,"Siguiente"),e()()()(),r(64,"mat-step",25)(65,"div",26)(66,"form",9)(67,"div",27)(68,"mat-form-field",13)(69,"mat-label"),n(70,"N\xFAmero de comprobante"),e(),c(71,"input",28),e(),r(72,"mat-form-field",13)(73,"mat-label"),n(74,"Valor de la transferencia"),e(),c(75,"input",29),f(76,Ze,2,0,"mat-error",12)(77,et,2,0,"mat-error",12),e()(),r(78,"div",19)(79,"mat-form-field",13)(80,"mat-label"),n(81,"Cuenta de origen"),e(),r(82,"mat-select",30,1),f(84,tt,2,2,"mat-option",31),e()(),r(85,"mat-form-field",13)(86,"mat-label"),n(87,"Cuenta destino"),e(),c(88,"input",32),e()()(),r(89,"div",22)(90,"button",23),n(91,"Anterior"),e(),r(92,"button",33),I("click",function(){return _(h),N(i.onSave())}),n(93,"Confirmar"),e()()()(),r(94,"mat-step",34),f(95,ot,38,10,"div",35),e()()()()()}t&2&&(o(4),A(" ","Desembolso"," "),o(),l("linear",!0),o(2),l("stepControl",i.firstFormGroup),o(2),l("formGroup",i.firstFormGroup),o(4),l("formControlName","idTipoDoc"),o(),l("ngIf",G(15,41,i.tiposDocumentos$)),o(5),l("formControlName","numDocumento"),o(),l("ngIf",i.firstFormGroup.get("numDocumento").dirty||i.firstFormGroup.get("numDocumento").touched&&i.firstFormGroup.get("numDocumento").errors.required),o(),l("ngIf",i.showAlert),o(),l("disabled",i.firstFormGroup.invalid)("ngClass",W(43,We,i.firstFormGroup.valid,i.firstFormGroup.invalid)),o(2),l("stepControl",i.secondFormGroup),o(2),l("formGroup",i.secondFormGroup),o(5),l("formControlName","primerNombre")("readonly",!0),o(4),l("formControlName","segundoNombre")("readonly",!0),o(5),l("formControlName","primerApellido")("readonly",!0),o(4),l("formControlName","segundoApellido")("readonly",!0),o(5),l("formControlName","numDoc")("readonly",!0),o(4),l("formControlName","correo")("readonly",!0),o(5),l("formControlName","credito")("readonly",!0),o(4),l("disabled",i.secondFormGroup.invalid),o(2),l("stepControl",i.thirdFormGroup),o(2),l("formGroup",i.thirdFormGroup),o(5),l("formControlName","numeroFactura"),o(4),l("formControlName","montoConsumo")("mask","separator.0"),o(),l("ngIf",(i.montoConsumo.touched||i.montoConsumo.dirty)&&i.montoConsumo.hasError("required")),o(),l("ngIf",(i.montoConsumo.touched||i.montoConsumo.dirty)&&i.montoConsumo.hasError("notEqual")),o(5),l("formControlName","idCuentaBancaria"),o(2),l("ngForOf",i.cuentas),o(4),l("formControlName","cuentaDestino"),o(4),l("disabled",i.thirdFormGroup.invalid),o(2),l("stepControl",i.thirdFormGroup),o(),l("ngIf",i.detaleConsumo))},dependencies:[Z,ne,ee,F,be,fe,pe,ue,ce,ye,se,me,le,Se,ae,re,xe,Ge,Ve,qe,je,X,Y,Ae,ge,ve,he,U]});let a=m;return a})();function rt(a){return m=>{let d=m.value;return console.log(a),d>a?{notEqual:!0}:null}}var Ht=[{path:"",component:Qe}];export{Ht as default};
