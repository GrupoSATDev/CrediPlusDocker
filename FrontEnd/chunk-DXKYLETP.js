import{a as Ie,b as Ae}from"./chunk-B3RAPYNP.js";import{a as Ve}from"./chunk-UOHX76QT.js";import{a as _e,b as we,c as De,d as Ne}from"./chunk-Y4MQD3WA.js";import{a as Ge}from"./chunk-G7L7PI7M.js";import{a as Te}from"./chunk-5IYR5V6A.js";import{a as ye}from"./chunk-Z2MQWE4K.js";import{a as Ee}from"./chunk-C33ARS6G.js";import{a as Se,b as xe}from"./chunk-DNIDWOKC.js";import{a as Ce}from"./chunk-JCA7AIXD.js";import{a as Fe}from"./chunk-ACIMG2KZ.js";import{a as ge,b as be}from"./chunk-2RSQTUPN.js";import{a as he}from"./chunk-OFEOPKCC.js";import{a as ve}from"./chunk-33XTDNRI.js";import{g as oe}from"./chunk-QS2WZY2K.js";import"./chunk-JND367CQ.js";import{h as X}from"./chunk-7U4JZNVG.js";import{a as fe}from"./chunk-CH3XODOV.js";import"./chunk-ZFQVSUZG.js";import{B as pe,C as ue,G as ce,b as Y,c as Z,i as ee,l as re,n as u,p as ne,q as ae,u as me,w as le,x as de,z as se}from"./chunk-JLNARVDU.js";import{$ as U,Q as W,R as K,ea as te}from"./chunk-DARKUWJB.js";import{a as ie}from"./chunk-75YALSW6.js";import"./chunk-EENLYY7H.js";import"./chunk-PDEGUYSW.js";import{d as J}from"./chunk-DJAHQBBJ.js";import{e as B,f as L,g as Q,i as z,j as S,l as H}from"./chunk-NP3GUERB.js";import{Cb as o,Db as e,Eb as c,Fb as w,Gb as D,Ib as M,Ob as N,Qb as G,Ub as q,Vb as k,Wb as j,X as F,Yb as r,Za as t,Zb as v,_b as T,dc as P,ec as R,fa as p,hc as O,ka as V,l as b,mc as g,nc as y,oc as $,pb as f,rb as a,ua as E,va as _}from"./chunk-32HXX3OB.js";import{a as x,d as A}from"./chunk-NEB6MB4Y.js";var je=["stepper"],Pe=(m,l)=>({"bg-crediblue-50":m,"bg-credigray-100":l});function Re(m,l){if(m&1&&(o(0,"mat-option",34),r(1),e()),m&2){let d=l.$implicit;a("value",d.id),t(),v(d.nombre)}}function Oe(m,l){if(m&1&&(w(0),f(1,Re,2,2,"mat-option",33),D()),m&2){let d=l.ngIf;t(),a("ngForOf",d.data)}}function $e(m,l){m&1&&(o(0,"mat-error"),r(1," El n\xFAmero de identificaci\xF3n es requerido!. "),e())}function Be(m,l){if(m&1&&(o(0,"fuse-alert",35),r(1),e()),m&2){let d=G();a("appearance","outline")("showIcon",!1)("type",d.alert.type)("@shake",d.alert.type==="error"),t(),T(" ",d.alert.message," ")}}function Le(m,l){if(m&1&&(o(0,"mat-option",34),r(1),e()),m&2){let d=l.$implicit;a("value",d.id),t(),v(d.nombre)}}function Qe(m,l){if(m&1&&(w(0),f(1,Le,2,2,"mat-option",33),D()),m&2){let d=l.ngIf;t(),a("ngForOf",d.data)}}function ze(m,l){m&1&&(o(0,"mat-error"),r(1,"El valor es requerido!"),e())}function He(m,l){m&1&&(o(0,"mat-error"),r(1,"El valor ingresado no puede superar el cupo disponible!"),e())}function Je(m,l){if(m&1&&(o(0,"div",36)(1,"div",37)(2,"div",38)(3,"h2",39),r(4,"Resumen de la Compra"),e(),o(5,"p",40),r(6,"Revise los detalles"),e()(),o(7,"div",41)(8,"div",42)(9,"div")(10,"h3",43),r(11,"Fecha de compra"),e()(),o(12,"p",44),r(13),g(14,"date"),e()(),o(15,"div",42)(16,"div")(17,"h3",43),r(18,"N\xFAmero de factura"),e()(),o(19,"p",44),r(20),e()(),o(21,"div",42)(22,"div")(23,"h3",43),r(24,"Valor"),e()(),o(25,"p",44),r(26),g(27,"currency"),e()(),o(28,"div",45)(29,"p",43),r(30,"N\xFAmero de cuotas"),e(),o(31,"p",44),r(32),e()(),o(33,"div",46)(34,"p",43),r(35,"Estado"),e(),o(36,"p",44),r(37),e()(),o(38,"div",47)(39,"p",43),r(40,"Detalle compra"),e(),o(41,"p",44),r(42),e()()(),o(43,"div",48)(44,"button",49),r(45," Recargar "),e()()()()),m&2){let d=G();t(13),v($(14,6,d.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),t(7),v(d.detaleConsumo.numeroFactura),t(6),v(y(27,9,d.detaleConsumo.montoConsumo)),t(6),v(d.detaleConsumo.cantidadCuotas),t(5),v(d.detaleConsumo.nombreEstadoCredito),t(5),v(d.detaleConsumo.detalleCompra)}}var We={validation:!1},Me=(()=>{let l=class l{constructor(){this.tiposDocumentosService=p(Ee),this.fuseService=p(oe),this.estadosDatosService=p(he),this.toasService=p(be),this.empleadosServices=p(Ge),this.tipoConsumosService=p(Ae),this.cuentasServices=p(Ve),this.datePipe=p(S),this.router=p(J),this.fb=p(se),this._locacionService=p(Ce),this.detalleConsumo=p(Te),this.departamentos$=this._locacionService.getDepartamentos(),this.tipoConsumo$=this.tipoConsumosService.getTipoConsumos().pipe(F(s=>{let i=s.data[0];i&&this.thirdFormGroup.get("idTipoConsumo").setValue(i.id)})),this.cuentas$=this.cuentasServices.getCuentas(),this.swalService=p(Fe),this.showAlert=!1,this.alert={type:"success",message:""},this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(F(s=>{let i=s.data[3];i&&this.firstFormGroup.get("idTipoDoc").setValue(i.id)})),this.creditos=[],this.focus=focus,this.FormatoOptionsPipe=Ie}ngOnDestroy(){}ngOnInit(){this.createForm()}getMunicipios(s){let i=s.value;this.municipios$=this._locacionService.getMunicipio(i)}selected(s){let i=s.value;this.compareValor=i.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(Ke(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(s){let i=s.value,n=this.secondFormGroup.get("idCredito")?.value;return!n||!n.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),b(null)):(console.log(i),console.log(n.montoConsumo),i>n.montoConsumo?b({notEqual:!0}):b(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}onSearch(){let s=this.firstFormGroup.getRawValue();this.empleadosServices.getEmpleadoParams(s).subscribe(i=>{if(i){this.showAlert=!1;let n={numDoc:i.data.numDoc,primerNombre:i.data.primerNombre,segundoNombre:i.data.segundoNombre,primerApellido:i.data.primerApellido,segundoApellido:i.data.segundoApellido,idTrabajador:i.data.id,correo:i.data.correo,credito:i.data.creditos[0].numCredito+" - "+i.data.creditos[0].cupoDisponible,idCredito:i.data.creditos[0].id};this.secondFormGroup.patchValue(n),this.creditos=i.data.creditos,setTimeout(()=>{this.stepper.next()},1200)}},i=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}onSave(){if(this.thirdFormGroup.valid){let s=this.thirdFormGroup.getRawValue(),{montoConsumo:i}=s,n=A(s,["montoConsumo"]),{idCredito:C,idTrabajador:h}=this.secondFormGroup.getRawValue(),qe=x({idCredito:C,idTrabajador:h,montoConsumo:Number(i)},n);this.fuseService.open(x({},ge)).afterClosed().subscribe(ke=>{ke==="confirmed"&&this.detalleConsumo.postDetalle(qe).subscribe(I=>{console.log(I),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.getResumenCompra(h)},I=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}getResumenCompra(s){this.subscription$=this.detalleConsumo.getResumen(s).subscribe(i=>{i&&(console.log(i),this.detaleConsumo=i.data,this.stepper.next())})}createForm(){this.firstFormGroup=this.fb.group({idTipoDoc:[""],numDocumento:["",u.required]}),this.secondFormGroup=this.fb.group({numDoc:["",u.required],primerNombre:["",u.required],segundoNombre:["",u.required],primerApellido:["",u.required],segundoApellido:["",u.required],idTrabajador:[""],correo:["",u.required],credito:["",u.required],idCredito:["",u.required]}),this.thirdFormGroup=this.fb.group({montoConsumo:["",[u.required]],numeroFactura:["",u.required],idTipoConsumo:["",u.required]})}};l.\u0275fac=function(i){return new(i||l)},l.\u0275cmp=V({type:l,selectors:[["app-form-detalle-consumo"]],viewQuery:function(i,n){if(i&1&&q(je,5),i&2){let C;k(C=j())&&(n.stepper=C.first)}},standalone:!0,features:[P([{provide:K,useClass:ye},{provide:W,useValue:"en-GB"},S,Se(We)]),R],decls:94,vars:47,consts:[["stepper",""],["data",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto","overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[3,"linear"],["label","Consultar trabajador",3,"stepControl"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full","px-4"],[3,"formGroup"],[1,"w-full"],[3,"formControlName"],[4,"ngIf"],["matInput","","placeholder","Ingrese identificaci\xF3n",3,"formControlName"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],["mat-raised-button","",1,"text-white","px-6","py-2","rounded-md","w-full",3,"click","disabled","ngClass"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"w-full","h-full","px-4","shadow-lg"],[1,"flex","flex-row","gap-2.5"],["matInput","",3,"formControlName","readonly"],[1,"flex","flex-row"],[1,"flex","justify-end","gap-2.5","py-3"],["mat-button","","matStepperPrevious","",1,"bg-gray-500","text-white","py-2","px-4","rounded","hover:bg-gray-600"],["mat-button","","matStepperNext","",1,"bg-crediblue-50","text-white","py-2","px-4","rounded",3,"disabled"],["label","Completar compra",3,"stepControl"],[1,"h-full","mx-auto","px-4","w-1/2","shadow-lg"],[1,"flex","flex-row","items-baseline","gap-2.5"],["matInput","",3,"formControlName"],["matInput","","thousandSeparator",".",3,"formControlName","mask"],[1,"flex","justify-end","gap-2.5","py-4"],["mat-button","",1,"bg-crediblue-50","text-white","py-2","px-4","rounded",3,"click","disabled"],["label","Resumen de compra",3,"stepControl"],["class","w-full h-full px-4",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mb-4",3,"appearance","showIcon","type"],[1,"w-full","h-full","px-4"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","border-t","pt-4"],[1,"mt-6"],[1,"w-full","bg-crediblue-50","text-white","py-2","px-4","rounded-lg"]],template:function(i,n){if(i&1){let C=M();o(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),r(4),e(),o(5,"mat-horizontal-stepper",6,0)(7,"mat-step",7)(8,"div",8)(9,"form",9)(10,"mat-form-field",10)(11,"mat-label"),r(12,"Tipo de documento"),e(),o(13,"mat-select",11),f(14,Oe,2,1,"ng-container",12),g(15,"async"),e()(),o(16,"mat-form-field",10)(17,"mat-label"),r(18,"N\xFAmero de identificaci\xF3n"),e(),c(19,"input",13),f(20,$e,2,0,"mat-error",12),e(),f(21,Be,2,5,"fuse-alert",14),o(22,"button",15),N("click",function(){return E(C),_(n.onSearch())}),r(23,"Consultar"),e()()()(),o(24,"mat-step",16)(25,"div",17)(26,"form",9)(27,"div",18)(28,"mat-form-field",10)(29,"mat-label"),r(30,"Primer nombre"),e(),c(31,"input",19),e(),o(32,"mat-form-field",10)(33,"mat-label"),r(34,"Segundo nombre"),e(),c(35,"input",19),e()(),o(36,"div",18)(37,"mat-form-field",10)(38,"mat-label"),r(39,"Primer apellido"),e(),c(40,"input",19),e(),o(41,"mat-form-field",10)(42,"mat-label"),r(43,"Segundo apellido"),e(),c(44,"input",19),e()(),o(45,"div",18)(46,"mat-form-field",10)(47,"mat-label"),r(48,"Identificaci\xF3n"),e(),c(49,"input",19),e(),o(50,"mat-form-field",10)(51,"mat-label"),r(52,"Email"),e(),c(53,"input",19),e()(),o(54,"div",20)(55,"mat-form-field",10)(56,"mat-label"),r(57,"Cr\xE9dito"),e(),c(58,"input",19),e()()(),o(59,"div",21)(60,"button",22),r(61,"Anterior"),e(),o(62,"button",23),r(63,"Siguiente"),e()()()(),o(64,"mat-step",24)(65,"div",25)(66,"form",9)(67,"div",26)(68,"mat-form-field",10)(69,"mat-label"),r(70,"N\xFAmero de factura"),e(),c(71,"input",27),e()(),o(72,"div",26)(73,"mat-form-field",10)(74,"mat-label"),r(75,"Tipo consumo"),e(),o(76,"mat-select",11,1),f(78,Qe,2,1,"ng-container",12),g(79,"async"),e()()(),o(80,"div",18)(81,"mat-form-field",10)(82,"mat-label"),r(83,"Valor"),e(),c(84,"input",28),f(85,ze,2,0,"mat-error",12)(86,He,2,0,"mat-error",12),e()()(),o(87,"div",29)(88,"button",22),r(89,"Anterior"),e(),o(90,"button",30),N("click",function(){return E(C),_(n.onSave())}),r(91,"Pagar"),e()()()(),o(92,"mat-step",31),f(93,Je,46,11,"div",32),e()()()()()}i&2&&(t(4),T(" ","Detalle consumo"," "),t(),a("linear",!0),t(2),a("stepControl",n.firstFormGroup),t(2),a("formGroup",n.firstFormGroup),t(4),a("formControlName","idTipoDoc"),t(),a("ngIf",y(15,40,n.tiposDocumentos$)),t(5),a("formControlName","numDocumento"),t(),a("ngIf",n.firstFormGroup.get("numDocumento").dirty||n.firstFormGroup.get("numDocumento").touched&&n.firstFormGroup.get("numDocumento").errors.required),t(),a("ngIf",n.showAlert),t(),a("disabled",n.firstFormGroup.invalid)("ngClass",O(44,Pe,n.firstFormGroup.valid,n.firstFormGroup.invalid)),t(2),a("stepControl",n.secondFormGroup),t(2),a("formGroup",n.secondFormGroup),t(5),a("formControlName","primerNombre")("readonly",!0),t(4),a("formControlName","segundoNombre")("readonly",!0),t(5),a("formControlName","primerApellido")("readonly",!0),t(4),a("formControlName","segundoApellido")("readonly",!0),t(5),a("formControlName","numDoc")("readonly",!0),t(4),a("formControlName","correo")("readonly",!0),t(5),a("formControlName","credito")("readonly",!0),t(4),a("disabled",n.secondFormGroup.invalid),t(2),a("stepControl",n.thirdFormGroup),t(2),a("formGroup",n.thirdFormGroup),t(5),a("formControlName","numeroFactura"),t(5),a("formControlName","idTipoConsumo"),t(2),a("ngIf",y(79,42,n.tipoConsumo$)),t(6),a("formControlName","montoConsumo")("mask","separator.0"),t(),a("ngIf",(n.montoConsumo.touched||n.montoConsumo.dirty)&&n.montoConsumo.hasError("required")),t(),a("ngIf",(n.montoConsumo.touched||n.montoConsumo.dirty)&&n.montoConsumo.hasError("notEqual")),t(4),a("disabled",n.thirdFormGroup.invalid),t(2),a("stepControl",n.thirdFormGroup),t(),a("ngIf",n.detaleConsumo))},dependencies:[we,_e,pe,me,re,ne,ae,ee,ce,Y,te,Z,De,z,U,ve,L,Q,ue,le,de,X,Ne,fe,H,S,B,xe],data:{animation:ie}});let m=l;return m})();function Ke(m){return l=>{let d=l.value;return console.log(m),d>m?{notEqual:!0}:null}}var Mt=[{path:"",component:Me}];export{Mt as default};
