import{a as y}from"./chunk-TVLJX2ZL.js";import{a as ne}from"./chunk-YYS2C2AQ.js";import{a as re}from"./chunk-4M6FSJZ7.js";import{a as ae}from"./chunk-XTBUANS6.js";import{a as se}from"./chunk-6IEWE3OU.js";import{a as oe}from"./chunk-YRESZUIM.js";import{a as ie}from"./chunk-72OGA3YA.js";import{a as N}from"./chunk-4WJQLHI3.js";import{a as x}from"./chunk-VOLXTRGQ.js";import{a as te}from"./chunk-54OZA4EP.js";import"./chunk-BGM5RQG6.js";import{g as H}from"./chunk-B24N63ZV.js";import{a as P,b as j,c as z}from"./chunk-PG3Z5E5P.js";import"./chunk-P2KBT4CK.js";import{C as Y,E as Z,F as ee,J as _,b as L,i as b,l as q,p as J,q as K,u as Q,x as U,y as X}from"./chunk-XMPVE5LH.js";import{$ as V,ea as S,ja as W}from"./chunk-AAD5V3QY.js";import"./chunk-AUCKEBH6.js";import"./chunk-7G4BDYBK.js";import{Cb as f,Cc as R,Mb as l,Nb as E,Ob as A,Qa as o,Ra as v,Ub as G,Vb as C,_ as w,bc as M,cc as I,gb as g,ha as c,ib as n,ma as h,q as k,tb as r,ub as m,vb as u,wb as F,xb as T,yc as O,zc as $}from"./chunk-YBEOGPR3.js";import{a as D}from"./chunk-NEB6MB4Y.js";function de(s,a){if(s&1&&(r(0,"mat-option",14),l(1),m()),s&2){let d=a.$implicit;n("value",d.id),o(),E(d.nombre)}}function pe(s,a){if(s&1&&(F(0),g(1,de,2,2,"mat-option",13),T()),s&2){let d=a.ngIf;o(),n("ngForOf",d.data)}}function ue(s,a){if(s&1&&(r(0,"mat-option",14),l(1),m()),s&2){let d=a.$implicit;n("value",d.id),o(),E(d.nombre)}}function fe(s,a){if(s&1&&(F(0),g(1,ue,2,2,"mat-option",13),T()),s&2){let d=a.ngIf;o(),n("ngForOf",d.data)}}var ge={validation:!1},B=(()=>{let a=class a{constructor(){this.fb=c(Y),this.dialogRef=c(P),this.fuseService=c(H),this.estadosDatosService=c(x),this.toasService=c(oe),this.bancosService=c(ne),this.cuentasBancariasService=c(y),this.tipoCuentasService=c(re),this.tipoCuentas$=this.tipoCuentasService.getTipoCuentas().pipe(w(i=>{let e=i.data,t=this._matData;e&&!t.edit&&this.form.get("idTipoCuenta").setValue(e[0].id)})),this._matData=c(j),this.bancos$=this.bancosService.getBancos().pipe(w(i=>{let e=i.data,t=this._matData;e&&!t.edit&&this.form.get("idBanco").setValue(e[0].id)}))}ngOnInit(){this.createForm();let i=this._matData;if(i.edit){let e=i.data;this.form.patchValue(e)}}createForm(){this.form=this.fb.group({id:[null],idTipoCuenta:[""],idBanco:[""],numeroCuenta:[""],descripcion:[""]})}onSave(){if(this.form.valid)if(this._matData.edit){let i=this.form.getRawValue();this.fuseService.open(D({},N)).afterClosed().subscribe(t=>{t==="confirmed"?this.cuentasBancariasService.putCuentas(i).subscribe(p=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let i=this.form.getRawValue();this.fuseService.open(D({},N)).afterClosed().subscribe(t=>{t==="confirmed"?this.cuentasBancariasService.postCuentas(i).subscribe(p=>{console.log(p),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro Creado o Actualizado con Exito.",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}closeDialog(){this.dialogRef.close()}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=h({type:a,selectors:[["app-form-cuentas"]],standalone:!0,features:[G([ae(ge)]),C],decls:32,vars:14,consts:[[1,"sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],["floatLabel","always",1,"w-full"],["placeholder","Tipo de cuenta",3,"formControlName"],[4,"ngIf"],["placeholder","Banco",3,"formControlName"],["matInput","","placeholder","N\xFAmero de cuenta",3,"formControlName"],["matInput","","placeholder","Detalle",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3),m(),r(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),l(7,"Tipo de cuenta"),m(),r(8,"mat-select",5),g(9,pe,2,1,"ng-container",6),M(10,"async"),m()(),r(11,"mat-form-field",4)(12,"mat-label"),l(13,"Banco"),m(),r(14,"mat-select",7),g(15,fe,2,1,"ng-container",6),M(16,"async"),m()(),r(17,"mat-form-field",4)(18,"mat-label"),l(19,"N\xFAmero de cuenta"),m(),u(20,"input",8),m(),r(21,"mat-form-field",4)(22,"mat-label"),l(23,"Descripci\xF3n"),m(),u(24,"textarea",9),m(),r(25,"div",10)(26,"button",11),f("click",function(){return t.closeDialog()}),r(27,"span"),l(28," Cancelar "),m()(),r(29,"button",12),f("click",function(){return t.onSave()}),r(30,"span"),l(31," Guardar "),m()()()()()()),e&2&&(o(3),A(" ",t._matData.edit?"Actualizar cuenta":"Agregar cuenta"," "),o(),n("formGroup",t.form),o(4),n("formControlName","idTipoCuenta"),o(),n("ngIf",I(10,10,t.tipoCuentas$)),o(5),n("formControlName","idBanco"),o(),n("ngIf",I(16,12,t.bancos$)),o(5),n("formControlName","numeroCuenta"),o(4),n("formControlName","descripcion"),o(2),n("color","primary"),o(3),n("color","primary"))},dependencies:[Z,Q,q,J,K,S,b,_,L,ee,U,X,V,te,O,$,R],styles:[".custom-dialog-container{width:80%}@media (min-width: 1280px){  .custom-dialog-container{width:40%}}"]});let s=a;return s})();var me=(()=>{let a=class a{constructor(i,e,t){this._matDialog=i,this.estadoDatosService=e,this.cuentasService=t,this.searchTerm="",this.data=[],this.columns=["N\xFAmero de cuenta","Tipo de cuenta","Banco"],this.columnPropertyMap={"N\xFAmero de cuenta":"numeroCuenta","Tipo de cuenta":"nombreTipoCuenta",Banco:"nombreBanco"},this.buttons=[{label:"Edit",icon:"edit",action:p=>{console.log("Editing",p),this.selectedData=p,this.onEdit()}}]}onNew(){this._matDialog.open(B,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(B,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0,panelClass:"custom-dialog-container"})}getCuentas(){this.subcription$=this.cuentasService.getCuentas().pipe(k(i=>(i.data.forEach(e=>{if(e.estado)return e.estado=se.ACTIVO,e}),i))).subscribe(i=>{this.data=i.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCuentas()})}onSearch(i){let e=i.target;this.searchTerm=e.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCuentas(),this.listenGrid()}};a.\u0275fac=function(e){return new(e||a)(v(z),v(x),v(y))},a.\u0275cmp=h({type:a,selectors:[["app-grid-cuentas"]],standalone:!0,features:[C],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Cuentas Bancarias"),m(),r(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5),r(7,"input",6),f("input",function(le){return t.onSearch(le)}),m()(),r(8,"button",7),f("click",function(){return t.onNew()}),u(9,"mat-icon",8),r(10,"span",9),l(11,"Agregar"),m()()()(),r(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),m()()()),e&2&&(o(5),n("subscriptSizing","dynamic"),o(),n("svgIcon","heroicons_solid:magnifying-glass"),o(),n("autocomplete","off")("placeholder","Buscar"),o(),n("color","primary"),o(),n("svgIcon","heroicons_outline:plus"),o(5),n("columns",t.columns)("displayedColumns",t.columns)("columnPropertyMap",t.columnPropertyMap)("data",t.data)("buttons",t.buttons)("searchTerm",t.searchTerm))},dependencies:[ie,S,b,W,_]});let s=a;return s})();var Ye=[{path:"",component:me}];export{Ye as default};