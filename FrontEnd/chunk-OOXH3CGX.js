import{a as Ue}from"./chunk-VG26ZCBI.js";import{a as Qe}from"./chunk-GFUTEW6X.js";import{a as ke,b as Pe,c as Re,d as $e}from"./chunk-TSZX67OG.js";import{a as Oe}from"./chunk-SLUVCWS3.js";import{c as Be}from"./chunk-K2YVJSWC.js";import{a as Le}from"./chunk-ARSZJ7KY.js";import{a as je}from"./chunk-Y4JPPNOG.js";import{a as qe}from"./chunk-5WR2EL64.js";import{a as Ie}from"./chunk-M6JKQUTX.js";import{a as Ae,b as Ge}from"./chunk-QDHNBSMD.js";import{a as we}from"./chunk-MQBM6GPR.js";import{a as Me}from"./chunk-OFI6PGZL.js";import{a as Ve}from"./chunk-LNQSU7IH.js";import{b as Te}from"./chunk-YHNXG437.js";import{a as Ne}from"./chunk-VOLXTRGQ.js";import{a as De}from"./chunk-DUV3XJVH.js";import{g as pe}from"./chunk-2XRFSBL3.js";import"./chunk-BF24YLJO.js";import{h as ae}from"./chunk-AIQUJILU.js";import{a as Fe}from"./chunk-4HQKWMPD.js";import{a as Ee}from"./chunk-EZC5HSZS.js";import"./chunk-ZFUJRZBK.js";import{C as xe,E as Se,F as _e,J as ye,b as le,c as me,i as se,l as fe,n as u,p as Ce,q as ve,u as he,x as be,y as ge}from"./chunk-D3YOWHEC.js";import{Q as ie,R as re,ba as ne,ga as de}from"./chunk-V35GW63T.js";import{a as ce}from"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import{b as ue}from"./chunk-DIJH5L74.js";import{d as oe}from"./chunk-FSJGACMT.js";import{Cb as _,Cc as ee,Dc as D,Ea as L,Eb as b,Gc as w,Ib as U,Jb as Q,Kb as z,Mb as a,Mc as te,Nb as v,Ob as q,Qa as i,Ub as H,Vb as J,X as $,Yb as W,_ as V,ba as O,bc as y,cc as E,dc as K,ga as A,gb as f,ha as p,ib as l,l as F,ma as B,pb as h,q as P,tb as r,ub as e,vb as C,wa as x,wb as G,xa as S,xb as I,xc as X,yc as Y,z as R,zb as M,zc as Z}from"./chunk-YBEOGPR3.js";import{a as N,d as k}from"./chunk-NEB6MB4Y.js";var ze=(()=>{let m=class m{constructor(s,t){this._http=s,this.appSettingService=t}getTipoConsumos(){return this._http.get(this.appSettingService.tipoConsumos.url.base)}getTipoConsumo(s){return this._http.get(`${this.appSettingService.tipoConsumos.url.base}/${s}`)}};m.\u0275fac=function(t){return new(t||m)(A(te),A(ue))},m.\u0275prov=O({token:m,factory:m.\u0275fac,providedIn:"root"});let o=m;return o})();var Xe=["stepper"],Ye=(o,m)=>({"bg-crediblue-50":o,"bg-credigray-100":m});function Ze(o,m){if(o&1&&(r(0,"mat-option",33),a(1),e()),o&2){let d=m.$implicit;l("value",d.id),i(),v(d.nombre)}}function et(o,m){if(o&1&&(G(0),f(1,Ze,2,2,"mat-option",32),I()),o&2){let d=m.ngIf;i(),l("ngForOf",d.data)}}function tt(o,m){o&1&&a(0," El n\xFAmero de identificaci\xF3n es requerido!. ")}function ot(o,m){o&1&&a(0," Solo se permiten n\xFAmeros. ")}function it(o,m){if(o&1&&(r(0,"mat-error"),f(1,tt,1,0)(2,ot,1,0),e()),o&2){let d=b();i(),h(d.firstFormGroup.get("numDocumento").hasError("required")?1:-1),i(),h(d.firstFormGroup.get("numDocumento").hasError("pattern")?2:-1)}}function rt(o,m){if(o&1&&(r(0,"fuse-alert",34),a(1),e()),o&2){let d=b();l("appearance","outline")("showIcon",!1)("type",d.alert.type)("@shake",d.alert.type==="error"),i(),q(" ",d.alert.message," ")}}function nt(o,m){if(o&1&&(r(0,"mat-option",33),a(1),e()),o&2){let d=m.$implicit;l("value",d.id),i(),v(d.nombre)}}function at(o,m){if(o&1&&(G(0),f(1,nt,2,2,"mat-option",32),I()),o&2){let d=m.ngIf;i(),l("ngForOf",d.data)}}function lt(o,m){o&1&&(r(0,"span"),a(1," El valor es requerido! "),e())}function mt(o,m){o&1&&(r(0,"span"),a(1," El valor ingresado no puede superar el cupo disponible! "),e())}function st(o,m){if(o&1&&(r(0,"mat-error"),f(1,lt,2,0,"span",11)(2,mt,2,0,"span",11),e()),o&2){let d=b();i(),l("ngIf",d.montoConsumo.hasError("required")),i(),l("ngIf",d.montoConsumo.hasError("notEqual"))}}function dt(o,m){o&1&&(r(0,"span"),a(1," Recargar "),e())}function pt(o,m){o&1&&C(0,"mat-progress-spinner",49),o&2&&l("diameter",24)("mode","indeterminate")}function ut(o,m){if(o&1){let d=M();r(0,"div",35)(1,"div",36)(2,"div",37)(3,"h2",38),a(4,"Resumen de la Compra"),e(),r(5,"p",39),a(6,"Revise los detalles"),e()(),r(7,"div",40)(8,"div",41)(9,"div")(10,"h3",42),a(11,"Fecha de compra"),e()(),r(12,"p",43),a(13),y(14,"date"),e()(),r(15,"div",41)(16,"div")(17,"h3",42),a(18,"N\xFAmero de factura"),e()(),r(19,"p",43),a(20),e()(),r(21,"div",41)(22,"div")(23,"h3",42),a(24,"Valor"),e()(),r(25,"p",43),a(26),y(27,"currency"),e()(),r(28,"div",44)(29,"p",42),a(30,"N\xFAmero de cuotas"),e(),r(31,"p",43),a(32),e()(),r(33,"div",45)(34,"p",42),a(35,"Estado"),e(),r(36,"p",43),a(37),e()(),r(38,"div",46)(39,"p",42),a(40,"Detalle compra"),e(),r(41,"p",43),a(42),e()()(),r(43,"div",47)(44,"button",48),_("click",function(){x(d);let t=b();return S(t.onUpdate())}),f(45,dt,2,0,"span")(46,pt,1,2,"mat-progress-spinner",49),e()()()()}if(o&2){let d=b();i(13),v(K(14,9,d.detaleConsumo.fechaCreacion,"dd/MM/yyyy")),i(7),v(d.detaleConsumo.numeroFactura),i(6),v(E(27,12,d.detaleConsumo.montoConsumo)),i(6),v(d.detaleConsumo.cantidadCuotas),i(5),v(d.detaleConsumo.nombreEstadoCredito),i(5),v(d.detaleConsumo.detalleCompra),i(2),l("disabled",d.isButtonDisabled),i(),h(d.isButtonDisabled?-1:45),i(),h(d.isButtonDisabled?46:-1)}}var ct={validation:!1},Je=(()=>{let m=class m{constructor(){this.tiposDocumentosService=p(je),this.fuseService=p(pe),this.estadosDatosService=p(Ne),this.toasService=p(Ve),this.empleadosServices=p(Oe),this.tipoConsumosService=p(ze),this.cuentasServices=p(Qe),this.datePipe=p(D),this.currencyPipe=p(w),this.router=p(oe),this.fb=p(xe),this._locacionService=p(we),this.detalleConsumo=p(Le),this.departamentos$=this._locacionService.getDepartamentos(),this.tipoConsumo$=this.tipoConsumosService.getTipoConsumos().pipe(P(s=>(s.data=s.data.filter(t=>t.nombre!=="Cobros Fijos"),s)),V(s=>{let t=s.data.find(n=>n.nombre==="Credito Consumo");t&&this.thirdFormGroup.get("idTipoConsumo").setValue(t.id)})),this.cuentas$=this.cuentasServices.getCuentas(),this.swalService=p(Me),this.showAlert=!1,this.alert={type:"success",message:""},this.destroyedRef=p(L),this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(V(s=>{let t=s.data.find(n=>n.nombre==="C\xE9dula de ciudadan\xEDa");t&&this.firstFormGroup.get("idTipoDoc").setValue(t.id)})),this.empleado$=this.empleadosServices.getValidaInfo(),this.creditos=[],this.isButtonDisabled=!1,this.focus=focus,this.FormatoOptionsPipe=Ue}ngOnDestroy(){}ngOnInit(){this.createForm()}getMunicipios(s){let t=s.value;this.municipios$=this._locacionService.getMunicipio(t)}selected(s){let t=s.value;this.compareValor=t.cupoDisponible,this.thirdFormGroup.get("montoConsumo").setValidators(He(this.compareValor)),this.thirdFormGroup.get("montoConsumo").updateValueAndValidity()}compareWithConstants(s){let t=s.value,n=this.secondFormGroup.get("idCredito")?.value;return!n||!n.montoConsumo?(console.error("No se encontr\xF3 el objeto idCredito o montoConsumo"),F(null)):(console.log(t),console.log(n.montoConsumo),t>n.montoConsumo?F({notEqual:!0}):F(null))}validateValue(s){return t=>{let n=this.secondFormGroup.get("procMaxDesembolso").value,c=t.value;return console.log(n),c>n?{notEqual:!0}:null}}get montoConsumo(){return this.thirdFormGroup.get("montoConsumo")}onSearch(){let s=this.firstFormGroup.getRawValue();this.empleadosServices.getEmpleadoParams(s).subscribe(t=>{if(t){this.showAlert=!1;let n={numDoc:t.data.numDoc,primerNombre:t.data.primerNombre,segundoNombre:t.data.segundoNombre,primerApellido:t.data.primerApellido,segundoApellido:t.data.segundoApellido,idTrabajador:t.data.id,correo:t.data.correo,credito:t.data.creditos[0].numCredito+" - "+this.currencyPipe.transform(t.data.creditos[0].cupoDisponible,"USD","symbol","1.2-2"),idCredito:t.data.creditos[0].id,procMaxDesembolso:t.data.procMaxDesembolso,cupoDisponible:t.data.creditos[0].cupoDisponible};this.secondFormGroup.patchValue(n),this.creditos=t.data.creditos,setTimeout(()=>{this.stepper.next()},1200)}},t=>{this.alert={type:"error",message:"El trabajador no existe!"},this.showAlert=!0})}selectedTipo(s){let{procMaxDesembolso:t,cupoDisponible:n}=this.secondFormGroup.getRawValue(),c;s.value==Be.ID_TIPO_CONSUMO_AVANCE?(c=Number(n)*t/100,this.thirdFormGroup.get("montoConsumo").setValue(0),this.thirdFormGroup.get("montoConsumo").setValidators([u.required,He(c)]),this.thirdFormGroup.updateValueAndValidity()):(this.thirdFormGroup.get("montoConsumo").setValue(0),this.thirdFormGroup.get("montoConsumo").setValidators(u.required),this.thirdFormGroup.updateValueAndValidity())}onSave(){if(this.thirdFormGroup.valid){let s=this.thirdFormGroup.getRawValue(),{montoConsumo:t}=s,n=k(s,["montoConsumo"]),{idCredito:c,idTrabajador:g}=this.secondFormGroup.getRawValue(),T=N({idCredito:c,idTrabajador:g,montoConsumo:Number(t)},n);this.fuseService.open(N({},Te)).afterClosed().subscribe(We=>{We==="confirmed"&&this.detalleConsumo.postDetalle(T).subscribe(j=>{console.log(j),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.getResumenCompra(g)},j=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})})}}getResumenCompra(s){this.subscription$=this.detalleConsumo.getResumen(s).subscribe(t=>{t&&(console.log(t),this.detaleConsumo=t.data,this.stepper.next())})}onUpdate(){this.isButtonDisabled||(this.isButtonDisabled=!0,this.detalleSubscription$&&this.detalleSubscription$.unsubscribe(),this.detalleSubscription$=R(1e4).pipe(qe(this.destroyedRef),$(()=>this.detalleConsumo.getConsumoTrabajador(this.detaleConsumo.idTrabajador))).subscribe(s=>{console.log(s),s.data.nombreEstadoCredito=="Aprobado"&&(this.detaleConsumo=s.data,this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),setTimeout(()=>{this.router.navigate(["pages/gestion-creditos/consumos"])},5e3))}),setTimeout(()=>{this.isButtonDisabled=!1},1e4))}createForm(){this.firstFormGroup=this.fb.group({idTipoDoc:[""],numDocumento:["",[u.required,u.pattern("^[0-9]*$")]]}),this.secondFormGroup=this.fb.group({numDoc:["",u.required],primerNombre:["",u.required],segundoNombre:[""],primerApellido:["",u.required],segundoApellido:[""],idTrabajador:[""],correo:["",u.required],credito:["",u.required],idCredito:["",u.required],procMaxDesembolso:[""],cupoDisponible:[""]}),this.thirdFormGroup=this.fb.group({montoConsumo:["",[u.required]],numeroFactura:["",u.required],idTipoConsumo:["",u.required]})}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=B({type:m,selectors:[["app-form-detalle-consumo"]],viewQuery:function(t,n){if(t&1&&U(Xe,5),t&2){let c;Q(c=z())&&(n.stepper=c.first)}},standalone:!0,features:[H([{provide:re,useClass:Ie},{provide:ie,useValue:"en-GB"},D,w,Ae(ct)]),J],decls:92,vars:48,consts:[["stepper",""],["data",""],["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","items-center","overflow-y-auto","bg-gray-100","p-6","sm:p-8"],[1,"relative","w-full","flex-0","max-w-4xl","sm:rounded-lg","overflow-hidden"],[1,"p-2","text-3xl","font-semibold","text-center","text-gray-800"],[1,"w-full","px-6","py-4",3,"orientation","linear","animationDuration"],["label","Consultar trabajador",3,"stepControl"],[1,"flex","flex-col","items-center","w-full"],[1,"space-y-4","w-full","max-w-sm",3,"formGroup"],[1,"w-full"],[3,"formControlName"],[4,"ngIf"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","N\xFAmero de identificaci\xF3n",3,"formControlName"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],["mat-raised-button","",1,"text-white","px-6","py-2","rounded-md","w-full",3,"click","disabled","ngClass"],["label","Verificar informaci\xF3n",3,"stepControl"],[1,"space-y-4","w-full","max-w-lg","mx-auto",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-4"],["matInput","",3,"formControlName","readonly"],[1,"flex","flex-col"],[1,"flex","flex-wrap","justify-center","sm:justify-center","gap-4","mt-2"],["mat-button","","matStepperPrevious","",1,"sm:w-auto","w-full","bg-gray-500","text-white","py-2","px-4","rounded","hover:bg-gray-600"],["mat-button","","matStepperNext","",1,"sm:w-auto","w-full","bg-crediblue-50","text-white","py-2","px-4","rounded",3,"disabled"],["label","Completar compra",3,"stepControl"],[1,"w-full","h-full","p-4","sm:p-8"],["matInput","","placeholder","N\xFAmero de factura",3,"formControlName"],["placeholder","Tipo de consumo",3,"selectionChange","formControlName"],["matInput","","thousandSeparator",".","placeholder","Valor",3,"formControlName","mask"],["mat-button","",1,"sm:w-auto","w-full","bg-crediblue-50","text-white","py-2","px-4","rounded",3,"click","disabled"],["label","Resumen de compra",3,"stepControl"],["class","w-full h-full px-4",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mb-4",3,"appearance","showIcon","type"],[1,"w-full","h-full","px-4"],[1,"max-w-2xl","mx-auto","p-4","bg-white","shadow-lg","rounded-lg"],[1,"border-b","pb-4","mb-4"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"space-y-4"],[1,"flex","justify-between","items-center","border-b","pb-2"],[1,"text-lg","font-semibold","text-gray-700"],[1,"text-lg","font-bold","text-gray-800"],[1,"flex","justify-between","items-center","pt-4","border-t"],[1,"flex","justify-between","items-center"],[1,"flex","justify-between","items-center","border-t","pt-4"],[1,"mt-6"],["mat-flat-button","",1,"w-full","bg-crediblue-50","text-white","py-2","px-4","rounded-lg",3,"click","disabled"],[3,"diameter","mode"]],template:function(t,n){if(t&1){let c=M();r(0,"div",2)(1,"div",3)(2,"div",4),a(3),e(),r(4,"mat-stepper",5,0)(6,"mat-step",6)(7,"div",7)(8,"form",8)(9,"mat-form-field",9)(10,"mat-label"),a(11,"Tipo de documento"),e(),r(12,"mat-select",10),f(13,et,2,1,"ng-container",11),y(14,"async"),e()(),r(15,"mat-form-field",12)(16,"mat-label"),a(17,"N\xFAmero de identificaci\xF3n"),e(),C(18,"input",13),f(19,it,3,2,"mat-error"),e(),f(20,rt,2,5,"fuse-alert",14),r(21,"button",15),_("click",function(){return x(c),S(n.onSearch())}),a(22,"Consultar"),e()()()(),r(23,"mat-step",16)(24,"div",9)(25,"form",17)(26,"div",18)(27,"mat-form-field",9)(28,"mat-label"),a(29,"Primer nombre"),e(),C(30,"input",19),e(),r(31,"mat-form-field",9)(32,"mat-label"),a(33,"Segundo nombre"),e(),C(34,"input",19),e()(),r(35,"div",18)(36,"mat-form-field",9)(37,"mat-label"),a(38,"Primer apellido"),e(),C(39,"input",19),e(),r(40,"mat-form-field",9)(41,"mat-label"),a(42,"Segundo apellido"),e(),C(43,"input",19),e()(),r(44,"div",18)(45,"mat-form-field",9)(46,"mat-label"),a(47,"Identificaci\xF3n"),e(),C(48,"input",19),e(),r(49,"mat-form-field",9)(50,"mat-label"),a(51,"Email"),e(),C(52,"input",19),e()(),r(53,"div",20)(54,"mat-form-field",9)(55,"mat-label"),a(56,"Cr\xE9dito"),e(),C(57,"input",19),e()()(),r(58,"div",21)(59,"button",22),a(60,"Anterior"),e(),r(61,"button",23),a(62,"Siguiente"),e()()()(),r(63,"mat-step",24)(64,"div",25)(65,"form",17)(66,"div",20)(67,"mat-form-field",12)(68,"mat-label"),a(69,"N\xFAmero de factura"),e(),C(70,"input",26),e()(),r(71,"div",18)(72,"mat-form-field",12)(73,"mat-label"),a(74,"Tipo consumo"),e(),r(75,"mat-select",27,1),_("selectionChange",function(T){return x(c),S(n.selectedTipo(T))}),f(77,at,2,1,"ng-container",11),y(78,"async"),e()()(),r(79,"div",20)(80,"mat-form-field",12)(81,"mat-label"),a(82,"Valor"),e(),C(83,"input",28),f(84,st,3,2,"mat-error",11),e()()(),r(85,"div",21)(86,"button",22),a(87,"Anterior"),e(),r(88,"button",29),_("click",function(){return x(c),S(n.onSave())}),a(89,"Pagar"),e()()()(),r(90,"mat-step",30),f(91,ut,47,14,"div",31),e()()()()}t&2&&(i(3),q(" ","Detalle consumo"," "),i(),l("orientation","vertical")("linear",!0)("animationDuration","1500"),i(2),l("stepControl",n.firstFormGroup),i(2),l("formGroup",n.firstFormGroup),i(4),l("formControlName","idTipoDoc"),i(),l("ngIf",E(14,41,n.tiposDocumentos$)),i(5),l("formControlName","numDocumento"),i(),h(n.firstFormGroup.get("numDocumento").dirty||n.firstFormGroup.get("numDocumento").touched?19:-1),i(),l("ngIf",n.showAlert),i(),l("disabled",n.firstFormGroup.invalid)("ngClass",W(45,Ye,n.firstFormGroup.valid,n.firstFormGroup.invalid)),i(2),l("stepControl",n.secondFormGroup),i(2),l("formGroup",n.secondFormGroup),i(5),l("formControlName","primerNombre")("readonly",!0),i(4),l("formControlName","segundoNombre")("readonly",!0),i(5),l("formControlName","primerApellido")("readonly",!0),i(4),l("formControlName","segundoApellido")("readonly",!0),i(5),l("formControlName","numDoc")("readonly",!0),i(4),l("formControlName","correo")("readonly",!0),i(5),l("formControlName","credito")("readonly",!0),i(4),l("disabled",n.secondFormGroup.invalid),i(2),l("stepControl",n.thirdFormGroup),i(2),l("formGroup",n.thirdFormGroup),i(5),l("formControlName","numeroFactura"),i(5),l("formControlName","idTipoConsumo"),i(2),l("ngIf",E(78,43,n.tipoConsumo$)),i(6),l("formControlName","montoConsumo")("mask","separator.0"),i(),l("ngIf",n.montoConsumo.dirty||n.montoConsumo.touched),i(4),l("disabled",n.thirdFormGroup.invalid),i(2),l("stepControl",n.thirdFormGroup),i(),l("ngIf",n.detaleConsumo))},dependencies:[Pe,ke,Se,he,fe,Ce,ve,se,ye,le,de,me,Re,ee,ne,De,Y,Z,_e,be,ge,ae,$e,Ee,w,D,X,Ge,Fe],styles:[".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit{background-color:#155ee9!important;color:#fff}"],data:{animation:ce}});let o=m;return o})();function He(o){return m=>{let d=m.value;return console.log(o),console.log(d),d>o?{notEqual:!0}:null}}var io=[{path:"",component:Je}];export{io as default};
