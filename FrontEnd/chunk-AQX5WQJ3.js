import{a as we,b as De,c as Ne,d as Ie}from"./chunk-Y4MQD3WA.js";import{a as Ae}from"./chunk-PWHPCRCN.js";import{a as Ee}from"./chunk-Z2MQWE4K.js";import{a as Fe}from"./chunk-BPPQTQZC.js";import{a as xe}from"./chunk-VLAQALEV.js";import{a as Se,c as ye,d as _e}from"./chunk-JM6PAC2Q.js";import{a as he}from"./chunk-55LFJ2HF.js";import{k as oe}from"./chunk-GIPKHLVS.js";import{h as X}from"./chunk-7U4JZNVG.js";import{a as be}from"./chunk-CH3XODOV.js";import"./chunk-ZFQVSUZG.js";import{B as fe,D as ve,E as Ce,I as ge,b as Y,c as Z,i as ee,l as re,n as C,p as ae,q as me,t as le,u as de,w as pe,x as se,y as ue,z as ce}from"./chunk-CURMXRYA.js";import{$ as U,Q as J,R as K,ea as te}from"./chunk-DARKUWJB.js";import{a as ne}from"./chunk-75YALSW6.js";import"./chunk-EENLYY7H.js";import{a as ie}from"./chunk-EJW5UVWF.js";import{d as H}from"./chunk-DJAHQBBJ.js";import{f as B,g as L,i as Q,j as D,l as W,r as z}from"./chunk-NP3GUERB.js";import{$ as G,Cb as o,Db as e,Eb as s,Fb as y,Gb as _,Ib as j,Ob as E,Qb as A,Ub as q,Vb as R,Wb as $,Yb as i,Za as t,Zb as f,_b as V,dc as O,ea as I,ec as P,fa as u,ka as M,l as w,mc as h,nc as F,oc as k,pb as c,rb as r,ua as x,va as S}from"./chunk-32HXX3OB.js";import{a as N,d as T}from"./chunk-NEB6MB4Y.js";var Ve=(()=>{let l=class l{constructor(p,a){this._http=p,this.appSettings=a}postDetalle(p){return this._http.post(this.appSettings.detalleConsumos.url.base,p)}getResumen(p){return this._http.get(`${this.appSettings.detalleConsumos.url.base}/trabajador/${p}`)}};l.\u0275fac=function(a){return new(a||l)(I(z),I(ie))},l.\u0275prov=G({token:l,factory:l.\u0275fac,providedIn:"root"});let n=l;return n})();var qe=["stepper"];function Re(n,l){if(n&1&&(o(0,"mat-option",36),i(1),e()),n&2){let d=l.$implicit;r("value",d.id),t(),f(d.nombre)}}function $e(n,l){if(n&1&&(y(0),c(1,Re,2,2,"mat-option",35),_()),n&2){let d=l.ngIf;t(),r("ngForOf",d.data)}}function Oe(n,l){if(n&1&&(o(0,"fuse-alert",37),i(1),e()),n&2){let d=A();r("appearance","outline")("showIcon",!1)("type",d.alert.type)("@shake",d.alert.type==="error"),t(),V(" ",d.alert.message," ")}}function Pe(n,l){if(n&1&&(y(0),o(1,"mat-option",36),i(2),e(),_()),n&2){let d=l.$implicit;t(),r("value",d),t(),f(d.numCredito)}}function ke(n,l){n&1&&(o(0,"mat-error"),i(1,"El valor es requerido!"),e())}function Be(n,l){n&1&&(o(0,"mat-error"),i(1,"El valor ingresado no puede superar el cupo disponible!"),e())}function Le(n,l){if(n&1&&(o(0,"mat-option",36),i(1),e()),n&2){let d=l.$implicit;r("value",d.id),t(),f(d.nombre)}}function Qe(n,l){if(n&1&&(y(0),c(1,Le,2,2,"mat-option",35),_()),n&2){let d=l.ngIf;t(),r("ngForOf",d.data)}}function We(n,l){if(n&1&&(o(0,"mat-option",36),i(1),e()),n&2){let d=l.$implicit;r("value",d.id),t(),f(d.nombre)}}function ze(n,l){if(n&1&&(y(0),c(1,We,2,2,"mat-option",35),_()),n&2){let d=l.ngIf;t(),r("ngForOf",d.data)}}function He(n,l){if(n&1&&(o(0,"div",17)(1,"div",38)(2,"div",39)(3,"h2",40),i(4,"Resumen de la Compra"),e(),o(5,"p",41),i(6,"Revise los detalles"),e()(),o(7,"div",42)(8,"div",43)(9,"div")(10,"h3",44),i(11,"Fecha de compra"),e()(),o(12,"p",45),i(13),h(14,"date"),e()(),o(15,"div",43)(16,"div")(17,"h3",44),i(18,"N\xFAmero de factura"),e()(),o(19,"p",45),i(20),e()(),o(21,"div",43)(22,"div")(23,"h3",44),i(24,"Valor $"),e(),o(25,"p",41),i(26,"Indica el valor en COP"),e()(),o(27,"p",45),i(28),h(29,"currency"),e()(),o(30,"div",46)(31,"p",44),i(32,"N\xFAmero de cuotas"),e(),o(33,"p",45),i(34),e()(),o(35,"div",47)(36,"p",44),i(37,"Estado"),e(),o(38,"p",45),i(39),e()(),o(40,"div",48)(41,"p",44),i(42,"Observaciones"),e(),o(43,"p",45),i(44),e()()(),o(45,"div",49)(46,"button",50),i(47," Recargar "),e()()()()),n&2){let d=A();t(13),f(k(14,6,d.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),t(7),f(d.detaleConsumo.numeroFactura),t(8),f(F(29,9,d.detaleConsumo.montoConsumo)),t(6),f(d.detaleConsumo.cantidadCuotas),t(5),f(d.detaleConsumo.nombreEstadoCredito),t(5),f(d.detaleConsumo.detalleCompra)}}var Te=(()=>{let l=class l{constructor(){this.tiposDocumentosService=u(Fe),this.fuseService=u(oe),this.estadosDatosService=u(ye),this.toasService=u(_e),this.empleadosServices=u(Ae),this.datePipe=u(D),this.router=u(H),this.fb=u(fe),this._locacionService=u(xe),this.detalleConsumo=u(Ve),this.departamentos$=this._locacionService.getDepartamentos(),this.showAlert=!1,this.alert={type:"success",message:""},this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos(),this.creditos=[],this.focus=focus}ngOnDestroy(){}ngOnInit(){this.createForm()}getMunicipios(p){let a=p.value;this.municipios$=this._locacionService.getMunicipio(a)}selected(p){let a=p.value;this.compareValor=a.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(Je(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(p){let a=p.value,m=this.secondFormGroup.get("idCredito")?.value;return!m||!m.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),w(null)):(console.log(a),console.log(m.montoConsumo),a>m.montoConsumo?w({notEqual:!0}):w(null))}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}onSearch(){let p=this.firstFormGroup.getRawValue();this.empleadosServices.getEmpleadoParams(p).subscribe(a=>{if(console.log(a),a){this.showAlert=!1;let m={numDoc:a.data.numDoc,primerNombre:a.data.primerNombre,segundoNombre:a.data.segundoNombre,primerApellido:a.data.primerApellido,segundoApellido:a.data.segundoApellido,idTrabajador:a.data.id,correo:a.data.correo};this.secondFormGroup.patchValue(m),this.creditos=a.data.creditos,setTimeout(()=>{this.stepper.next()},1200)}},a=>{this.alert={type:"error",message:"El empleado no existe!"},this.showAlert=!0})}onSave(){if(this.thirdFormGroup.valid){let p=this.thirdFormGroup.getRawValue(),{montoConsumo:a}=p,m=T(p,["montoConsumo"]),{idCredito:v,idTrabajador:g}=this.secondFormGroup.getRawValue();console.log(v);let b=N({idCredito:v.id,idTrabajador:g,montoConsumo:Number(a)},m);console.log(b),this.fuseService.open(N({},Se)).afterClosed().subscribe(Ge=>{Ge==="confirmed"&&this.detalleConsumo.postDetalle(b).subscribe(Me=>{console.log(Me),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.getResumenCompra(g)})})}}getResumenCompra(p){this.subscription$=this.detalleConsumo.getResumen(p).subscribe(a=>{a&&(console.log(a),this.detaleConsumo=a.data,this.stepper.next())})}createForm(){this.firstFormGroup=this.fb.group({idTipoDoc:["",C.required],numDocumento:["",C.required]}),this.secondFormGroup=this.fb.group({numDoc:[{value:"",disabled:!0}],primerNombre:[{value:"",disabled:!0}],segundoNombre:[{value:"",disabled:!0}],primerApellido:[{value:"",disabled:!0}],segundoApellido:[{value:"",disabled:!0}],idTrabajador:[""],correo:[{value:"",disabled:!0}],idCredito:["",C.required]}),this.thirdFormGroup=this.fb.group({cantidadCuotas:["",[C.required]],montoConsumo:["",[C.required]],numeroFactura:["",C.required],detalleCompra:["",C.required],idMunicipio:["",C.required]})}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=M({type:l,selectors:[["app-form-detalle-consumo"]],viewQuery:function(a,m){if(a&1&&q(qe,5),a&2){let v;R(v=$())&&(m.stepper=v.first)}},standalone:!0,features:[O([{provide:K,useClass:Ee},{provide:J,useValue:"en-GB"},D]),P],decls:107,vars:47,consts:[["stepper",""],["data",""],["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto","overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[3,"linear"],["label","Consultar empleado",3,"stepControl"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full","px-4"],[3,"formGroup"],[1,"w-full"],[3,"formControlName"],[4,"ngIf"],["matInput","","placeholder","Ingrese identificaci\xF3n",3,"formControlName"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],["mat-raised-button","",1,"bg-crediblue-50","text-white","px-6","py-2","rounded-md","w-full",3,"click"],["label","Verifica informaci\xF3n",3,"stepControl"],[1,"w-full","h-full","px-4"],[1,"flex","flex-row","gap-2.5"],["matInput","",3,"formControlName","disabled"],[1,"flex","flex-row"],[3,"selectionChange","formControlName"],[4,"ngFor","ngForOf"],[1,"flex","justify-end","gap-2.5"],["mat-button","","matStepperPrevious","",1,"bg-gray-500","text-white","py-2","px-4","rounded","hover:bg-gray-600"],["mat-button","","matStepperNext","",1,"bg-crediblue-50","text-white","py-2","px-4","rounded",3,"disabled"],["label","Completar compra",3,"stepControl"],[1,"flex","flex-row","items-baseline","gap-2.5"],["matInput","",3,"formControlName"],["matInput","","type","number",3,"min","max","formControlName"],[3,"selectionChange"],["matInput","","placeholder","Detalle",3,"formControlName"],["mat-button","",1,"bg-crediblue-50","text-white","py-2","px-4","rounded",3,"click","disabled"],["label","Resumen de compra",3,"stepControl"],["class","w-full h-full px-4",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mb-4",3,"appearance","showIcon","type"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","border-t","pt-4"],[1,"mt-6"],[1,"w-full","bg-blue-600","text-white","py-2","px-4","rounded-lg","hover:bg-blue-700"]],template:function(a,m){if(a&1){let v=j();o(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),i(4),e(),o(5,"mat-horizontal-stepper",6,0)(7,"mat-step",7)(8,"div",8)(9,"form",9)(10,"mat-form-field",10)(11,"mat-label"),i(12,"Tipo de documento"),e(),o(13,"mat-select",11),c(14,$e,2,1,"ng-container",12),h(15,"async"),e()(),o(16,"mat-form-field",10)(17,"mat-label"),i(18,"N\xFAmero de identificaci\xF3n"),e(),s(19,"input",13),e(),c(20,Oe,2,5,"fuse-alert",14),o(21,"button",15),E("click",function(){return x(v),S(m.onSearch())}),i(22,"Consultar"),e()()()(),o(23,"mat-step",16)(24,"div",17)(25,"form",9)(26,"div",18)(27,"mat-form-field",10)(28,"mat-label"),i(29,"Primer nombre"),e(),s(30,"input",19),e(),o(31,"mat-form-field",10)(32,"mat-label"),i(33,"Segundo nombre"),e(),s(34,"input",19),e()(),o(35,"div",18)(36,"mat-form-field",10)(37,"mat-label"),i(38,"Primer apellido"),e(),s(39,"input",19),e(),o(40,"mat-form-field",10)(41,"mat-label"),i(42,"Segundo apellido"),e(),s(43,"input",19),e()(),o(44,"div",18)(45,"mat-form-field",10)(46,"mat-label"),i(47,"Identificaci\xF3n"),e(),s(48,"input",19),e(),o(49,"mat-form-field",10)(50,"mat-label"),i(51,"Email"),e(),s(52,"input",19),e()(),o(53,"div",20)(54,"mat-form-field",10)(55,"mat-label"),i(56,"Cr\xE9ditos"),e(),o(57,"mat-select",21),E("selectionChange",function(b){return x(v),S(m.selected(b))}),c(58,Pe,3,2,"ng-container",22),e()()()(),o(59,"div",23)(60,"button",24),i(61,"Anterior"),e(),o(62,"button",25),i(63,"Siguiente"),e()()()(),o(64,"mat-step",26)(65,"div",17)(66,"form",9)(67,"div",27)(68,"mat-form-field",10)(69,"mat-label"),i(70,"N\xFAmero de factura"),e(),s(71,"input",28),e()(),o(72,"div",18)(73,"mat-form-field",10)(74,"mat-label"),i(75,"Valor $"),e(),s(76,"input",28),c(77,ke,2,0,"mat-error",12)(78,Be,2,0,"mat-error",12),e(),o(79,"mat-form-field",10)(80,"mat-label"),i(81,"Cantidad de cuotas"),e(),s(82,"input",29),e()(),o(83,"div",18)(84,"mat-form-field",10)(85,"mat-label"),i(86,"Departamento"),e(),o(87,"mat-select",30,1),E("selectionChange",function(b){return x(v),S(m.getMunicipios(b))}),c(89,Qe,2,1,"ng-container",12),h(90,"async"),e()(),o(91,"mat-form-field",10)(92,"mat-label"),i(93,"Ciudad"),e(),o(94,"mat-select",11),c(95,ze,2,1,"ng-container",12),h(96,"async"),e()()(),o(97,"div",18)(98,"mat-form-field",10)(99,"mat-label"),i(100,"Observaci\xF3nes"),e(),s(101,"textarea",31),e()()(),o(102,"div",23)(103,"button",32),E("click",function(){return x(v),S(m.onSave())}),i(104,"Pagar"),e()()()(),o(105,"mat-step",33),c(106,He,48,11,"div",34),e()()()()()}a&2&&(t(4),V(" ","Detalle consumo"," "),t(),r("linear",!0),t(2),r("stepControl",m.firstFormGroup),t(2),r("formGroup",m.firstFormGroup),t(4),r("formControlName","idTipoDoc"),t(),r("ngIf",F(15,41,m.tiposDocumentos$)),t(5),r("formControlName","numDocumento"),t(),r("ngIf",m.showAlert),t(3),r("stepControl",m.secondFormGroup),t(2),r("formGroup",m.secondFormGroup),t(5),r("formControlName","primerNombre")("disabled",!0),t(4),r("formControlName","segundoNombre")("disabled",!0),t(5),r("formControlName","primerApellido")("disabled",!0),t(4),r("formControlName","segundoApellido")("disabled",!0),t(5),r("formControlName","numDoc")("disabled",!0),t(4),r("formControlName","correo")("disabled",!0),t(5),r("formControlName","idCredito"),t(),r("ngForOf",m.creditos),t(4),r("disabled",m.secondFormGroup.invalid),t(2),r("stepControl",m.thirdFormGroup),t(2),r("formGroup",m.thirdFormGroup),t(5),r("formControlName","numeroFactura"),t(5),r("formControlName","montoConsumo"),t(),r("ngIf",(m.montoConsumo.touched||m.montoConsumo.dirty)&&m.montoConsumo.hasError("required")),t(),r("ngIf",(m.montoConsumo.touched||m.montoConsumo.dirty)&&m.montoConsumo.hasError("notEqual")),t(4),r("min",1)("max",6)("formControlName","cantidadCuotas"),t(7),r("ngIf",F(90,43,m.departamentos$)),t(5),r("formControlName","idMunicipio"),t(),r("ngIf",F(96,45,m.municipios$)),t(6),r("formControlName","detalleCompra"),t(2),r("disabled",m.thirdFormGroup.invalid),t(2),r("stepControl",m.thirdFormGroup),t(),r("ngIf",m.detaleConsumo))},dependencies:[De,we,ve,le,re,de,ae,me,ce,ue,ee,ge,Y,te,Ne,Q,U,he,B,L,Ce,pe,se,X,Ie,be,Z,W,D],data:{animation:ne}});let n=l;return n})();function Je(n){return l=>{let d=l.value;return console.log(n),d>n?{notEqual:!0}:null}}var At=[{path:"",component:Te}];export{At as default};
