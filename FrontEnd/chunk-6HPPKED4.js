import{a as ne,b as re}from"./chunk-OECBBJWT.js";import{a as D}from"./chunk-W4MSDUA6.js";import{a as oe}from"./chunk-BAD57Q24.js";import{a as ae}from"./chunk-6IEWE3OU.js";import{a as te}from"./chunk-QE3E4OX7.js";import{a as M,b as ie}from"./chunk-GD676RBR.js";import{a as y}from"./chunk-OFEOPKCC.js";import{a as ee}from"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import{g as H}from"./chunk-CUGJBCL5.js";import{a as P,b as j,c as V}from"./chunk-3P4FUJJD.js";import"./chunk-4CCKGQO6.js";import{B as Y,C as Z,G as x,b as z,i as C,l as L,p as q,q as J,u as K,w as Q,x as U,z as X}from"./chunk-7YVLRDAA.js";import{$,ea as S,ja as W}from"./chunk-T34F2ICN.js";import"./chunk-XMIUBE2U.js";import"./chunk-XHZ6JD3E.js";import{f as G,g as O,i as R}from"./chunk-YH7HM3TK.js";import{Cb as o,Db as r,Eb as u,Fb as w,Gb as N,Ob as f,Yb as l,Za as t,Zb as F,_a as v,_b as k,dc as B,ec as b,fa as c,ka as g,mc as T,nc as A,pb as h,q as I,rb as i}from"./chunk-32HXX3OB.js";import{a as _}from"./chunk-NEB6MB4Y.js";function le(m,a){if(m&1&&(o(0,"mat-option",13),l(1),r()),m&2){let p=a.$implicit;i("value",p.id),t(),F(p.nombre)}}function ce(m,a){if(m&1&&(o(0,"mat-option",13),l(1),r()),m&2){let p=a.$implicit;i("value",p.id),t(),F(p.nombre)}}function de(m,a){if(m&1&&(w(0),h(1,ce,2,2,"mat-option",6),N()),m&2){let p=a.ngIf;t(),i("ngForOf",p.data)}}var pe={validation:!1},E=(()=>{let a=class a{constructor(){this.fb=c(X),this.dialogRef=c(P),this.fuseService=c(H),this.estadosDatosService=c(y),this.toasService=c(ie),this.bancosService=c(re),this.cuentasBancariasService=c(D),this.tipoCuentas=ne,this._matData=c(j),this.bancos$=this.bancosService.getBancos()}ngOnInit(){this.createForm();let s=this._matData;if(s.edit){let e=s.data;this.form.patchValue(e)}}createForm(){this.form=this.fb.group({id:[null],idTipoCuenta:[""],idBanco:[""],numeroCuenta:[""],descripcion:[""]})}onSave(){if(this.form.valid)if(this._matData.edit){let s=this.form.getRawValue();this.fuseService.open(_({},M)).afterClosed().subscribe(n=>{n==="confirmed"?this.cuentasBancariasService.putCuentas(s).subscribe(d=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let s=this.form.getRawValue();this.fuseService.open(_({},M)).afterClosed().subscribe(n=>{n==="confirmed"?this.cuentasBancariasService.postCuentas(s).subscribe(d=>{console.log(d),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}closeDialog(){this.dialogRef.close()}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g({type:a,selectors:[["app-form-cuentas"]],standalone:!0,features:[B([oe(pe)]),b],decls:31,vars:12,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","",3,"formControlName"],["matInput","","placeholder","Detalle",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),l(3),r(),o(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),l(7,"Tipo de cuenta"),r(),o(8,"mat-select",5),h(9,le,2,2,"mat-option",6),r()(),o(10,"mat-form-field",4)(11,"mat-label"),l(12,"Banco"),r(),o(13,"mat-select",5),h(14,de,2,1,"ng-container",7),T(15,"async"),r()(),o(16,"mat-form-field",4)(17,"mat-label"),l(18,"N\xFAmero de cuenta"),r(),u(19,"input",8),r(),o(20,"mat-form-field",4)(21,"mat-label"),l(22,"Descripci\xF3n"),r(),u(23,"textarea",9),r(),o(24,"div",10)(25,"button",11),f("click",function(){return n.closeDialog()}),o(26,"span"),l(27," Cancelar "),r()(),o(28,"button",12),f("click",function(){return n.onSave()}),o(29,"span"),l(30," Guardar "),r()()()()()()),e&2&&(t(3),k(" ",n._matData.edit?"Actualizar cuenta":"Agregar cuenta"," "),t(),i("formGroup",n.form),t(4),i("formControlName","idTipoCuenta"),t(),i("ngForOf",n.tipoCuentas),t(4),i("formControlName","idBanco"),t(),i("ngIf",A(15,10,n.bancos$)),t(5),i("formControlName","numeroCuenta"),t(4),i("formControlName","descripcion"),t(2),i("color","primary"),t(3),i("color","primary"))},dependencies:[Y,K,L,q,J,S,C,x,z,Z,Q,U,$,ee,G,O,R]});let m=a;return m})();var se=(()=>{let a=class a{constructor(s,e,n){this._matDialog=s,this.estadoDatosService=e,this.cuentasService=n,this.data=[],this.columns=["N\xFAmero de cuenta","Descripci\xF3n"],this.columnPropertyMap={"N\xFAmero de cuenta":"numeroCuenta",Descripci\u00F3n:"descripcion"},this.buttons=[{label:"Edit",icon:"edit",action:d=>{console.log("Editing",d),this.selectedData=d,this.onEdit()}}]}onNew(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getCuentas(){this.subcription$=this.cuentasService.getCuentas().pipe(I(s=>(s.data.forEach(e=>{if(e.estado)return e.estado=ae.ACTIVO,e}),s))).subscribe(s=>{this.data=s.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCuentas()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCuentas(),this.listenGrid()}};a.\u0275fac=function(e){return new(e||a)(v(V),v(y),v(D))},a.\u0275cmp=g({type:a,selectors:[["app-grid-cuentas"]],standalone:!0,features:[b],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Cuentas Bancarias"),r(),o(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5)(7,"input",6),r(),o(8,"button",7),f("click",function(){return n.onNew()}),u(9,"mat-icon",8),o(10,"span",9),l(11,"Agregar"),r()()()(),o(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),r()()()),e&2&&(t(5),i("subscriptSizing","dynamic"),t(),i("svgIcon","heroicons_solid:magnifying-glass"),t(),i("autocomplete","off")("placeholder","Buscar"),t(),i("color","primary"),t(),i("svgIcon","heroicons_outline:plus"),t(5),i("columns",n.columns)("displayedColumns",n.columns)("columnPropertyMap",n.columnPropertyMap)("data",n.data)("buttons",n.buttons))},dependencies:[te,S,C,W,x]});let m=a;return m})();var Ke=[{path:"",component:se}];export{Ke as default};
