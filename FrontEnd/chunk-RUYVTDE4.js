import{a as T}from"./chunk-7FBIN7C2.js";import{a as pe}from"./chunk-TO2OIAHQ.js";import{a as ue}from"./chunk-XANTS4JH.js";import{a as de}from"./chunk-6P2FO4H4.js";import{a as D}from"./chunk-HN2IWLXW.js";import{a as G}from"./chunk-6IEWE3OU.js";import{a as ce}from"./chunk-NCBPDMPS.js";import{a as le}from"./chunk-QF5DML3C.js";import{a as se}from"./chunk-I7AUF7T5.js";import{a as me}from"./chunk-LUXURQN6.js";import{g as X,i as V}from"./chunk-2MNMAZZP.js";import{a as q,b as J,c as K}from"./chunk-CY7MRQJZ.js";import"./chunk-P63XEOLN.js";import{C as ae,E as ne,F as re,J as w,b as Q,i as x,l as Y,p as Z,q as ee,u as te,x as ie,y as oe}from"./chunk-5EZKXU2X.js";import"./chunk-GQMDELPL.js";import{ba as W,ga as y,la as U}from"./chunk-TS7YPRLN.js";import"./chunk-5TY7V3W7.js";import"./chunk-6DC3KIX3.js";import{Ac as L,Cb as f,Dc as H,Lb as P,Mb as l,Nb as N,Ob as B,Qa as o,Ra as S,Vb as j,Wb as _,_ as E,cc as k,dc as A,gb as g,ha as d,ib as n,ma as h,q as $,tb as a,ub as s,vb as u,wa as C,wb as I,xa as b,xb as M,zb as R,zc as z}from"./chunk-IEDNLM77.js";import{a as F}from"./chunk-NEB6MB4Y.js";function he(m,r){if(m&1&&(a(0,"mat-option",19),l(1),s()),m&2){let p=r.$implicit;n("value",p.id),o(),N(p.nombre)}}function Ce(m,r){if(m&1&&(I(0),g(1,he,2,2,"mat-option",18),M()),m&2){let p=r.ngIf;o(),n("ngForOf",p.data)}}function be(m,r){if(m&1&&(a(0,"mat-option",19),l(1),s()),m&2){let p=r.$implicit;n("value",p.id),o(),N(p.nombre)}}function Se(m,r){if(m&1&&(I(0),g(1,be,2,2,"mat-option",18),M()),m&2){let p=r.ngIf;o(),n("ngForOf",p.data)}}var _e={validation:!1},O=(()=>{let r=class r{constructor(){this.fb=d(ae),this.dialogRef=d(q),this.fuseService=d(X),this.estadosDatosService=d(D),this.swalService=d(me),this.bancosService=d(pe),this.cuentasBancariasService=d(T),this.tipoCuentasService=d(ue),this.tipoCuentas$=this.tipoCuentasService.getTipoCuentas().pipe(E(i=>{let e=i.data,t=this._matData;e&&!t.edit&&this.form.get("idTipoCuenta").setValue(e[0].id)})),this._matData=d(J),this.bancos$=this.bancosService.getBancos().pipe(E(i=>{let e=i.data,t=this._matData;e&&!t.edit&&this.form.get("idBanco").setValue(e[0].id)}))}ngOnInit(){this.createForm();let i=this._matData;if(i.edit){let t=i.data.id;this.getCuenta(t)}}getCuenta(i){this.cuentasBancariasService.getCuenta(i).subscribe(e=>{e&&this.form.patchValue(e.data)})}createForm(){this.form=this.fb.group({id:[null],idTipoCuenta:[""],idBanco:[""],numeroCuenta:[""],descripcion:[""],estado:[!0]})}onSave(){if(this.form.valid)if(this._matData.edit){let i=this.form.getRawValue();this.fuseService.open(F({},V)).afterClosed().subscribe(t=>{t==="confirmed"?this.cuentasBancariasService.putCuentas(i).subscribe(c=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()}):this.closeDialog()})}else{let i=this.form.getRawValue();this.fuseService.open(F({},V)).afterClosed().subscribe(t=>{t==="confirmed"?this.cuentasBancariasService.postCuentas(i).subscribe(c=>{console.log(c),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado con Exito.",timer:4e3}),this.closeDialog()}):this.closeDialog()})}}closeDialog(){this.dialogRef.close()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=h({type:r,selectors:[["app-form-cuentas"]],standalone:!0,features:[j([de(_e)]),_],decls:38,vars:17,consts:[["twoStepToggle",""],[1,"sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],["floatLabel","always",1,"w-full"],["placeholder","Tipo de cuenta",3,"formControlName"],[4,"ngIf"],["placeholder","Banco",3,"formControlName"],["matInput","","placeholder","N\xFAmero de cuenta",3,"formControlName"],["matInput","","placeholder","Detalle",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(e&1){let c=R();a(0,"div",1)(1,"div",2)(2,"div",3),l(3),s(),a(4,"form",4)(5,"div",5)(6,"div",6),f("click",function(){C(c);let ge=P(10);return b(ge.toggle())}),a(7,"div",7),l(8),s()(),u(9,"mat-slide-toggle",8,0),s(),a(11,"mat-form-field",9)(12,"mat-label"),l(13,"Tipo de cuenta"),s(),a(14,"mat-select",10),g(15,Ce,2,1,"ng-container",11),k(16,"async"),s()(),a(17,"mat-form-field",9)(18,"mat-label"),l(19,"Banco"),s(),a(20,"mat-select",12),g(21,Se,2,1,"ng-container",11),k(22,"async"),s()(),a(23,"mat-form-field",9)(24,"mat-label"),l(25,"N\xFAmero de cuenta"),s(),u(26,"input",13),s(),a(27,"mat-form-field",9)(28,"mat-label"),l(29,"Descripci\xF3n"),s(),u(30,"textarea",14),s(),a(31,"div",15)(32,"button",16),f("click",function(){return C(c),b(t.closeDialog())}),a(33,"span"),l(34," Cancelar "),s()(),a(35,"button",17),f("click",function(){return C(c),b(t.onSave())}),a(36,"span"),l(37," Guardar "),s()()()()()()}e&2&&(o(3),B(" ",t._matData.edit?"Actualizar cuenta":"Agregar cuenta"," "),o(),n("formGroup",t.form),o(4),B(" Estado ",t.form.get("estado").value?"Activo":"Inactivo"," "),o(),n("color","primary")("formControlName","estado"),o(5),n("formControlName","idTipoCuenta"),o(),n("ngIf",A(16,13,t.tipoCuentas$)),o(5),n("formControlName","idBanco"),o(),n("ngIf",A(22,15,t.bancos$)),o(5),n("formControlName","numeroCuenta"),o(4),n("formControlName","descripcion"),o(2),n("color","primary"),o(3),n("color","primary"))},dependencies:[ne,te,Y,Z,ee,y,x,w,Q,re,ie,oe,W,le,z,L,H,se],styles:[".custom-dialog-container{width:80%}@media (min-width: 1280px){  .custom-dialog-container{width:40%}}"]});let m=r;return m})();var fe=(()=>{let r=class r{constructor(i,e,t){this._matDialog=i,this.estadoDatosService=e,this.cuentasService=t,this.searchTerm="",this.data=[],this.columns=["N\xFAmero de cuenta","Tipo de cuenta","Banco","Estado"],this.columnPropertyMap={"N\xFAmero de cuenta":"numeroCuenta","Tipo de cuenta":"nombreTipoCuenta",Banco:"nombreBanco",Estado:"estado"},this.buttons=[{label:"Edit",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open(O,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(O,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0,panelClass:"custom-dialog-container"})}getCuentas(){this.subcription$=this.cuentasService.getCuentas().pipe($(i=>(i.data.forEach(e=>e.estado?(e.estado=G.ACTIVO,e):(e.estado=G.INACTIVO,e)),i))).subscribe(i=>{this.data=i.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCuentas()})}onSearch(i){let e=i.target;this.searchTerm=e.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCuentas(),this.listenGrid()}};r.\u0275fac=function(e){return new(e||r)(S(K),S(D),S(T))},r.\u0275cmp=h({type:r,selectors:[["app-grid-cuentas"]],standalone:!0,features:[_],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Cuentas Bancarias"),s(),a(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5),a(7,"input",6),f("input",function(v){return t.onSearch(v)}),s()(),a(8,"button",7),f("click",function(){return t.onNew()}),u(9,"mat-icon",8),a(10,"span",9),l(11,"Agregar"),s()()()(),a(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),s()()()),e&2&&(o(5),n("subscriptSizing","dynamic"),o(),n("svgIcon","heroicons_solid:magnifying-glass"),o(),n("autocomplete","off")("placeholder","Buscar"),o(),n("color","primary"),o(),n("svgIcon","heroicons_outline:plus"),o(5),n("columns",t.columns)("displayedColumns",t.columns)("columnPropertyMap",t.columnPropertyMap)("data",t.data)("buttons",t.buttons)("searchTerm",t.searchTerm))},dependencies:[ce,y,x,U,w]});let m=r;return m})();var nt=[{path:"",component:fe}];export{nt as default};
