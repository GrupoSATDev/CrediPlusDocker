import{a as D}from"./chunk-TZIC7FVZ.js";import{a as Q,b as U}from"./chunk-BAD57Q24.js";import{a as Y}from"./chunk-6IEWE3OU.js";import{a as X}from"./chunk-ACIMG2KZ.js";import{a as J}from"./chunk-QE3E4OX7.js";import{a as _,b as K}from"./chunk-GD676RBR.js";import{a as I}from"./chunk-OFEOPKCC.js";import"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import{g as z}from"./chunk-CUGJBCL5.js";import{a as T,b as G,c as R}from"./chunk-3P4FUJJD.js";import"./chunk-4CCKGQO6.js";import{C as q,G as C,b as V,i as S,l as O,p as P,q as B,u as H,w as $,x as L,z as W}from"./chunk-7YVLRDAA.js";import{ea as x,ja as j}from"./chunk-T34F2ICN.js";import"./chunk-XMIUBE2U.js";import"./chunk-PDEGUYSW.js";import"./chunk-YH7HM3TK.js";import{Cb as r,Db as a,Eb as d,Ob as f,Yb as l,Za as o,_a as g,_b as N,dc as A,ec as b,fa as c,ka as h,q as k,rb as n}from"./chunk-32HXX3OB.js";import{a as u,d as M}from"./chunk-NEB6MB4Y.js";var ie={validation:!1},E=(()=>{let s=class s{constructor(){this.fb=c(W),this.dialogRef=c(T),this.fuseService=c(z),this.estadosDatosService=c(I),this.toasService=c(K),this.capitalService=c(D),this._matData=c(G),this.swalService=c(X)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{rubroInversion:m}=e,y=M(e,["rubroInversion"]),w=u({rubroInversion:Number(m)},y);this.fuseService.open(u({},_)).afterClosed().subscribe(F=>{F==="confirmed"?this.capitalService.putCapitales(w).subscribe(v=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},v=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue(),{rubroInversion:m}=t,y=M(t,["rubroInversion"]),w=u({rubroInversion:Number(m)},y);this.fuseService.open(u({},_)).afterClosed().subscribe(F=>{F==="confirmed"?this.capitalService.postCapitales(w).subscribe(v=>{console.log(v),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},v=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombreInversor:[""],rubroInversion:[""],detalleInversion:[""]})}closeDialog(){this.dialogRef.close()}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=h({type:s,selectors:[["app-form-capital-inversion"]],standalone:!0,features:[A([Q(ie)]),b],decls:24,vars:8,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","","placeholder","Inversor",3,"formControlName"],["matInput","","placeholder","Valor","thousandSeparator",".",3,"formControlName","mask"],["matInput","","placeholder","Detalle inversi\xF3n",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3),a(),r(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),l(7,"Inversor"),a(),d(8,"input",5),a(),r(9,"mat-form-field",4)(10,"mat-label"),l(11,"Rubro a invertir"),a(),d(12,"input",6),a(),r(13,"mat-form-field",4)(14,"mat-label"),l(15,"Detalle de la inversi\xF3n"),a(),d(16,"textarea",7),a(),r(17,"div",8)(18,"button",9),f("click",function(){return i.closeDialog()}),r(19,"span"),l(20," Cancelar "),a()(),r(21,"button",10),f("click",function(){return i.onSave()}),r(22,"span"),l(23," Guardar "),a()()()()()()),e&2&&(o(3),N(" ",i._matData.edit?"Actualizar capital":"Agregar capital"," "),o(),n("formGroup",i.form),o(4),n("formControlName","nombreInversor"),o(4),n("formControlName","rubroInversion")("mask","separator.0"),o(4),n("formControlName","detalleInversion"),o(2),n("color","primary"),o(3),n("color","primary"))},dependencies:[x,S,C,V,q,H,O,P,B,$,L,U]});let p=s;return p})();var Z=(()=>{let s=class s{constructor(t,e,i){this._matDialog=t,this.estadoDatosService=e,this.capitalService=i,this.data=[],this.columns=["Inversor","Rubro","Detalle de inversi\xF3n"],this.columnPropertyMap={Inversor:"nombreInversor",Rubro:"rubroInversion","Detalle de inversi\xF3n":"detalleInversion"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}onEdit(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}getCapital(){this.subcription$=this.capitalService.getCapitales().pipe(k(t=>(t.data.forEach(e=>{if(e.estado)return e.estado=Y.ACTIVO,e}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCapital()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCapital(),this.listenGrid()}};s.\u0275fac=function(e){return new(e||s)(g(R),g(I),g(D))},s.\u0275cmp=h({type:s,selectors:[["app-grid-capital-inversion"]],standalone:!0,features:[b],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Capital de Inversi\xF3n"),a(),r(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),a(),r(8,"button",7),f("click",function(){return i.onNew()}),d(9,"mat-icon",8),r(10,"span",9),l(11,"Agregar"),a()()()(),r(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),a()()()),e&2&&(o(5),n("subscriptSizing","dynamic"),o(),n("svgIcon","heroicons_solid:magnifying-glass"),o(),n("autocomplete","off")("placeholder","Buscar"),o(),n("color","primary"),o(),n("svgIcon","heroicons_outline:plus"),o(5),n("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data)("buttons",i.buttons))},dependencies:[J,x,S,j,C]});let p=s;return p})();var Te=[{path:"",component:Z}];export{Te as default};
