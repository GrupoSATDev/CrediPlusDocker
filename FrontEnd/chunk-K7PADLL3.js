import{a as Me,b as qe}from"./chunk-JN3EWMV3.js";import{a as ke}from"./chunk-AYHWAGEC.js";import{a as Ne,b as Te,c as Ge,d as Ae}from"./chunk-H5NJ4I62.js";import{a as Ie}from"./chunk-SOXVNGMC.js";import{a as Ve}from"./chunk-GYK7F7ON.js";import{a as Fe}from"./chunk-3XMKQ74T.js";import{a as De}from"./chunk-TXW7W43Y.js";import{a as _e,b as Ee}from"./chunk-FIT6CNEK.js";import{a as ge}from"./chunk-ETJCUHJQ.js";import{a as we}from"./chunk-TRVR57AA.js";import{a as Se}from"./chunk-ARYACW5V.js";import{a as ye}from"./chunk-5ZCUS56W.js";import{a as xe}from"./chunk-MO2NC6JB.js";import{a as be}from"./chunk-H5OWTWVS.js";import{g as ne}from"./chunk-45VFWK2F.js";import"./chunk-3F72AFMB.js";import{h as ee}from"./chunk-T4J43FBS.js";import{a as he}from"./chunk-T6KI2TP3.js";import"./chunk-C2OGGKTO.js";import{B as fe,C as ve,G as Ce,b as te,c as oe,i as ie,l as me,n as u,p as le,q as se,u as de,w as pe,x as ue,z as ce}from"./chunk-JBQZ6BPD.js";import{$ as Z,Q as X,R as Y,ea as re}from"./chunk-SUQ5NR2B.js";import{a as ae}from"./chunk-7ZG6LO6Q.js";import"./chunk-TO3CLTNT.js";import"./chunk-KAOV7GZU.js";import{d as K}from"./chunk-FVVJ54UE.js";import{e as U,f as H,g as J,i as W,j as E,m as z}from"./chunk-SQ7M4XTP.js";import{$b as A,Db as i,Eb as e,Fb as c,Gb as N,Hb as T,Jb as G,Pb as S,Rb as F,V as k,Vb as j,Wb as P,Xb as B,Y as D,Zb as r,_a as o,_b as v,ec as R,fc as O,ga as p,ic as L,l as g,la as $,nc as h,oc as _,pc as Q,q as M,qb as f,sb as a,va as y,wa as x,z as q}from"./chunk-RICNMTJI.js";import{a as w,d as V}from"./chunk-NEB6MB4Y.js";var Be=["stepper"],Re=(m,d)=>({"bg-crediblue-50":m,"bg-credigray-100":d});function Oe(m,d){if(m&1&&(i(0,"mat-option",33),r(1),e()),m&2){let s=d.$implicit;a("value",s.id),o(),v(s.nombre)}}function Le(m,d){if(m&1&&(N(0),f(1,Oe,2,2,"mat-option",32),T()),m&2){let s=d.ngIf;o(),a("ngForOf",s.data)}}function Qe(m,d){m&1&&(i(0,"mat-error"),r(1," El n\xFAmero de identificaci\xF3n es requerido!. "),e())}function Ue(m,d){if(m&1&&(i(0,"fuse-alert",34),r(1),e()),m&2){let s=F();a("appearance","outline")("showIcon",!1)("type",s.alert.type)("@shake",s.alert.type==="error"),o(),A(" ",s.alert.message," ")}}function He(m,d){if(m&1&&(i(0,"mat-option",33),r(1),e()),m&2){let s=d.$implicit;a("value",s.id),o(),v(s.nombre)}}function Je(m,d){if(m&1&&(N(0),f(1,He,2,2,"mat-option",32),T()),m&2){let s=d.ngIf;o(),a("ngForOf",s.data)}}function We(m,d){m&1&&(i(0,"mat-error"),r(1,"El valor es requerido!"),e())}function ze(m,d){m&1&&(i(0,"mat-error"),r(1,"El valor ingresado no puede superar el cupo disponible!"),e())}function Ke(m,d){if(m&1){let s=G();i(0,"div",35)(1,"div",36)(2,"div",37)(3,"h2",38),r(4,"Resumen de la Compra"),e(),i(5,"p",39),r(6,"Revise los detalles"),e()(),i(7,"div",40)(8,"div",41)(9,"div")(10,"h3",42),r(11,"Fecha de compra"),e()(),i(12,"p",43),r(13),h(14,"date"),e()(),i(15,"div",41)(16,"div")(17,"h3",42),r(18,"N\xFAmero de factura"),e()(),i(19,"p",43),r(20),e()(),i(21,"div",41)(22,"div")(23,"h3",42),r(24,"Valor"),e()(),i(25,"p",43),r(26),h(27,"currency"),e()(),i(28,"div",44)(29,"p",42),r(30,"N\xFAmero de cuotas"),e(),i(31,"p",43),r(32),e()(),i(33,"div",45)(34,"p",42),r(35,"Estado"),e(),i(36,"p",43),r(37),e()(),i(38,"div",46)(39,"p",42),r(40,"Detalle compra"),e(),i(41,"p",43),r(42),e()()(),i(43,"div",47)(44,"button",48),S("click",function(){y(s);let t=F();return x(t.onUpdate())}),r(45," Recargar "),e()()()()}if(m&2){let s=F();o(13),v(Q(14,7,s.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),o(7),v(s.detaleConsumo.numeroFactura),o(6),v(_(27,10,s.detaleConsumo.montoConsumo)),o(6),v(s.detaleConsumo.cantidadCuotas),o(5),v(s.detaleConsumo.nombreEstadoCredito),o(5),v(s.detaleConsumo.detalleCompra),o(2),a("disabled",s.isButtonDisabled)}}var Xe={validation:!1},$e=(()=>{let d=class d{constructor(){this.tiposDocumentosService=p(De),this.fuseService=p(ne),this.estadosDatosService=p(xe),this.toasService=p(Se),this.empleadosServices=p(Ie),this.tipoConsumosService=p(qe),this.cuentasServices=p(ke),this.datePipe=p(E),this.router=p(K),this.fb=p(ce),this._locacionService=p(ge),this.detalleConsumo=p(Ve),this.departamentos$=this._locacionService.getDepartamentos(),this.tipoConsumo$=this.tipoConsumosService.getTipoConsumos().pipe(M(l=>(l.data=l.data.filter(t=>t.nombre!=="Avance"),l)),D(l=>{let t=l.data[0];t&&this.thirdFormGroup.get("idTipoConsumo").setValue(t.id)})),this.cuentas$=this.cuentasServices.getCuentas(),this.swalService=p(we),this.showAlert=!1,this.alert={type:"success",message:""},this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(D(l=>{let t=l.data[3];t&&this.firstFormGroup.get("idTipoDoc").setValue(t.id)})),this.empleado$=this.empleadosServices.getValidaInfo(),this.creditos=[],this.isButtonDisabled=!1,this.focus=focus,this.FormatoOptionsPipe=Me}ngOnDestroy(){}ngOnInit(){this.createForm(),this.empleado$.subscribe(l=>{l&&(this.empleadoConsumo=l.data)})}getMunicipios(l){let t=l.value;this.municipios$=this._locacionService.getMunicipio(t)}selected(l){let t=l.value;this.compareValor=t.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(Ye(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(l){let t=l.value,n=this.secondFormGroup.get("idCredito")?.value;return!n||!n.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),g(null)):(console.log(t),console.log(n.montoConsumo),t>n.montoConsumo?g({notEqual:!0}):g(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}onSearch(){let l=this.firstFormGroup.getRawValue();this.empleadosServices.getEmpleadoParams(l).subscribe(t=>{if(t){this.showAlert=!1;let n={numDoc:t.data.numDoc,primerNombre:t.data.primerNombre,segundoNombre:t.data.segundoNombre,primerApellido:t.data.primerApellido,segundoApellido:t.data.segundoApellido,idTrabajador:t.data.id,correo:t.data.correo,credito:t.data.creditos[0].numCredito+" - "+t.data.creditos[0].cupoDisponible,idCredito:t.data.creditos[0].id};this.secondFormGroup.patchValue(n),this.creditos=t.data.creditos,setTimeout(()=>{this.stepper.next()},1200)}},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}onSave(){if(this.thirdFormGroup.valid){let l=this.thirdFormGroup.getRawValue(),{montoConsumo:t}=l,n=V(l,["montoConsumo"]),{idCredito:C,idTrabajador:b}=this.secondFormGroup.getRawValue(),je=w({idCredito:C,idTrabajador:b,montoConsumo:Number(t)},n);this.fuseService.open(w({},ye)).afterClosed().subscribe(Pe=>{Pe==="confirmed"&&this.detalleConsumo.postDetalle(je).subscribe(I=>{console.log(I),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.getResumenCompra(b)},I=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}getResumenCompra(l){this.subscription$=this.detalleConsumo.getResumen(l).subscribe(t=>{t&&(console.log(t),this.detaleConsumo=t.data,this.stepper.next())})}onUpdate(){this.isButtonDisabled||(this.isButtonDisabled=!0,this.detalleSubscription$&&this.detalleSubscription$.unsubscribe(),this.detalleSubscription$=q(3e4).pipe(k(()=>this.detalleConsumo.getConsumoTrabajador(this.empleadoConsumo.id))).subscribe(l=>{console.log(l),this.detaleConsumo=l.data}),setTimeout(()=>{this.isButtonDisabled=!1},3e4))}createForm(){this.firstFormGroup=this.fb.group({idTipoDoc:[""],numDocumento:["",u.required]}),this.secondFormGroup=this.fb.group({numDoc:["",u.required],primerNombre:["",u.required],segundoNombre:["",u.required],primerApellido:["",u.required],segundoApellido:["",u.required],idTrabajador:[""],correo:["",u.required],credito:["",u.required],idCredito:["",u.required]}),this.thirdFormGroup=this.fb.group({montoConsumo:["",[u.required]],numeroFactura:["",u.required],idTipoConsumo:["",u.required]})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=$({type:d,selectors:[["app-form-detalle-consumo"]],viewQuery:function(t,n){if(t&1&&j(Be,5),t&2){let C;P(C=B())&&(n.stepper=C.first)}},standalone:!0,features:[R([{provide:Y,useClass:Fe},{provide:X,useValue:"en-GB"},E,_e(Xe)]),O],decls:93,vars:49,consts:[["stepper",""],["data",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Consultar trabajador",3,"stepControl"],[1,"flex","flex-col","items-center","w-full"],[1,"space-y-4","w-full","max-w-sm",3,"formGroup"],[1,"w-full"],[3,"formControlName"],[4,"ngIf"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Ingrese identificaci\xF3n",3,"formControlName"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],["mat-raised-button","",1,"text-white","px-6","py-2","rounded-md","w-full",3,"click","disabled","ngClass"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","",3,"formControlName","readonly"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","","matStepperPrevious","",1,"sm:w-auto","w-full","bg-gray-500","text-white","py-2","px-4","rounded","hover:bg-gray-600"],["mat-button","","matStepperNext","",1,"sm:w-auto","w-full","bg-crediblue-50","text-white","py-2","px-4","rounded",3,"disabled"],["label","Completar compra",3,"stepControl"],[1,"w-full","h-full","p-4","sm:p-8"],["matInput","","placeholder","N\xFAmero de factura",3,"formControlName"],["placeholder","Tipo de consumo",3,"formControlName"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["mat-button","",1,"sm:w-auto","w-full","bg-crediblue-50","text-white","py-2","px-4","rounded",3,"click","disabled"],["label","Resumen de compra",3,"stepControl"],["class","w-full h-full px-4",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mb-4",3,"appearance","showIcon","type"],[1,"w-full","h-full","px-4"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","border-t","pt-4"],[1,"mt-6"],[1,"w-full","bg-crediblue-50","text-white","py-2","px-4","rounded-lg",3,"click","disabled"]],template:function(t,n){if(t&1){let C=G();i(0,"div",2)(1,"div",3)(2,"div",4),r(3),e(),i(4,"mat-stepper",5,0)(6,"mat-step",6)(7,"div",7)(8,"form",8)(9,"mat-form-field",9)(10,"mat-label"),r(11,"Tipo de documento"),e(),i(12,"mat-select",10),f(13,Le,2,1,"ng-container",11),h(14,"async"),e()(),i(15,"mat-form-field",12)(16,"mat-label"),r(17,"N\xFAmero de identificaci\xF3n"),e(),c(18,"input",13),f(19,Qe,2,0,"mat-error",11),e(),f(20,Ue,2,5,"fuse-alert",14),i(21,"button",15),S("click",function(){return y(C),x(n.onSearch())}),r(22,"Consultar"),e()()()(),i(23,"mat-step",16)(24,"div",9)(25,"form",17)(26,"div",18)(27,"mat-form-field",9)(28,"mat-label"),r(29,"Primer nombre"),e(),c(30,"input",19),e(),i(31,"mat-form-field",9)(32,"mat-label"),r(33,"Segundo nombre"),e(),c(34,"input",19),e()(),i(35,"div",18)(36,"mat-form-field",9)(37,"mat-label"),r(38,"Primer apellido"),e(),c(39,"input",19),e(),i(40,"mat-form-field",9)(41,"mat-label"),r(42,"Segundo apellido"),e(),c(43,"input",19),e()(),i(44,"div",18)(45,"mat-form-field",9)(46,"mat-label"),r(47,"Identificaci\xF3n"),e(),c(48,"input",19),e(),i(49,"mat-form-field",9)(50,"mat-label"),r(51,"Email"),e(),c(52,"input",19),e()(),i(53,"div",20)(54,"mat-form-field",9)(55,"mat-label"),r(56,"Cr\xE9dito"),e(),c(57,"input",19),e()()(),i(58,"div",21)(59,"button",22),r(60,"Anterior"),e(),i(61,"button",23),r(62,"Siguiente"),e()()()(),i(63,"mat-step",24)(64,"div",25)(65,"form",17)(66,"div",20)(67,"mat-form-field",12)(68,"mat-label"),r(69,"N\xFAmero de factura"),e(),c(70,"input",26),e()(),i(71,"div",18)(72,"mat-form-field",12)(73,"mat-label"),r(74,"Tipo consumo"),e(),i(75,"mat-select",27,1),f(77,Je,2,1,"ng-container",11),h(78,"async"),e()()(),i(79,"div",20)(80,"mat-form-field",12)(81,"mat-label"),r(82,"Valor"),e(),c(83,"input",28),f(84,We,2,0,"mat-error",11)(85,ze,2,0,"mat-error",11),e()()(),i(86,"div",21)(87,"button",22),r(88,"Anterior"),e(),i(89,"button",29),S("click",function(){return y(C),x(n.onSave())}),r(90,"Pagar"),e()()()(),i(91,"mat-step",30),f(92,Ke,46,12,"div",31),e()()()()}t&2&&(o(3),A(" ","Detalle consumo"," "),o(),a("orientation","vertical")("linear",!0)("animationDuration","1500"),o(2),a("stepControl",n.firstFormGroup),o(2),a("formGroup",n.firstFormGroup),o(4),a("formControlName","idTipoDoc"),o(),a("ngIf",_(14,42,n.tiposDocumentos$)),o(5),a("formControlName","numDocumento"),o(),a("ngIf",n.firstFormGroup.get("numDocumento").dirty||n.firstFormGroup.get("numDocumento").touched&&n.firstFormGroup.get("numDocumento").errors.required),o(),a("ngIf",n.showAlert),o(),a("disabled",n.firstFormGroup.invalid)("ngClass",L(46,Re,n.firstFormGroup.valid,n.firstFormGroup.invalid)),o(2),a("stepControl",n.secondFormGroup),o(2),a("formGroup",n.secondFormGroup),o(5),a("formControlName","primerNombre")("readonly",!0),o(4),a("formControlName","segundoNombre")("readonly",!0),o(5),a("formControlName","primerApellido")("readonly",!0),o(4),a("formControlName","segundoApellido")("readonly",!0),o(5),a("formControlName","numDoc")("readonly",!0),o(4),a("formControlName","correo")("readonly",!0),o(5),a("formControlName","credito")("readonly",!0),o(4),a("disabled",n.secondFormGroup.invalid),o(2),a("stepControl",n.thirdFormGroup),o(2),a("formGroup",n.thirdFormGroup),o(5),a("formControlName","numeroFactura"),o(5),a("formControlName","idTipoConsumo"),o(2),a("ngIf",_(78,44,n.tipoConsumo$)),o(6),a("formControlName","montoConsumo")("mask","separator.0"),o(),a("ngIf",(n.montoConsumo.touched||n.montoConsumo.dirty)&&n.montoConsumo.hasError("required")),o(),a("ngIf",(n.montoConsumo.touched||n.montoConsumo.dirty)&&n.montoConsumo.hasError("notEqual")),o(4),a("disabled",n.thirdFormGroup.invalid),o(2),a("stepControl",n.thirdFormGroup),o(),a("ngIf",n.detaleConsumo))},dependencies:[Te,Ne,fe,de,me,le,se,ie,Ce,te,re,oe,Ge,W,Z,be,H,J,ve,pe,ue,ee,Ae,he,z,E,U,Ee],data:{animation:ae}});let m=d;return m})();function Ye(m){return d=>{let s=d.value;return console.log(m),s>m?{notEqual:!0}:null}}var $t=[{path:"",component:$e}];export{$t as default};
