import{a as D}from"./chunk-FNHMNHEF.js";import{a as G}from"./chunk-6IEWE3OU.js";import{a as L}from"./chunk-ACIMG2KZ.js";import{a as H}from"./chunk-QE3E4OX7.js";import{a as w,b as $}from"./chunk-GD676RBR.js";import{a as x}from"./chunk-OFEOPKCC.js";import"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import{g as k}from"./chunk-CUGJBCL5.js";import{a as F,b as M,c as I}from"./chunk-3P4FUJJD.js";import"./chunk-4CCKGQO6.js";import{C as B,G as S,b as A,i as v,l as N,p as R,q as O,u as V,w as j,x as z,z as P}from"./chunk-7YVLRDAA.js";import{ea as b,ja as T}from"./chunk-T34F2ICN.js";import"./chunk-XMIUBE2U.js";import"./chunk-PDEGUYSW.js";import"./chunk-YH7HM3TK.js";import{Cb as a,Db as s,Eb as u,Ob as p,Yb as c,Za as r,_a as g,_b as _,ec as h,fa as m,ka as f,q as E,rb as n}from"./chunk-32HXX3OB.js";import{a as y}from"./chunk-NEB6MB4Y.js";var C=(()=>{let i=class i{constructor(){this.fb=m(P),this.dialogRef=m(F),this.generoService=m(D),this.fuseService=m(k),this.estadosDatosService=m(x),this.toasService=m($),this._matData=m(M),this.swalService=m(L)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue();this.fuseService.open(y({},w)).afterClosed().subscribe(o=>{o==="confirmed"?this.generoService.putGeneros(t).subscribe(l=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},l=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue();this.fuseService.open(y({},w)).afterClosed().subscribe(o=>{o==="confirmed"?this.generoService.postGeneros(t).subscribe(l=>{console.log(l),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},l=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombre:[""]})}closeDialog(){this.dialogRef.close()}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-form-generos"]],standalone:!0,features:[h],decls:16,vars:5,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),c(3),s(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),c(7,"Nombre"),s(),u(8,"input",5),s(),a(9,"div",6)(10,"button",7),p("click",function(){return o.closeDialog()}),a(11,"span"),c(12," Cancelar "),s()(),a(13,"button",8),p("click",function(){return o.onSave()}),a(14,"span"),c(15," Guardar "),s()()()()()()),e&2&&(r(3),_(" ",o._matData.edit?"Actualizar g\xE9nero":"Agregar g\xE9nero"," "),r(),n("formGroup",o.form),r(4),n("formControlName","nombre"),r(2),n("color","primary"),r(3),n("color","primary"))},dependencies:[b,v,S,A,B,V,N,R,O,j,z]});let d=i;return d})();var W=(()=>{let i=class i{constructor(t,e,o){this._matDialog=t,this.estadoDatosService=e,this.generoService=o,this.data=[],this.columns=["Estado","Nombre"],this.columnPropertyMap={Estado:"estado",Nombre:"nombre"},this.buttons=[{label:"Edit",icon:"edit",action:l=>{console.log("Editing",l),this.selectedData=l,this.onEdit()}}]}onNew(){this._matDialog.open(C,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}onEdit(){this._matDialog.open(C,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}getGeneros(){this.subcription$=this.generoService.getGeneros().pipe(E(t=>(t.data.forEach(e=>{e.estado?e.estado=G.ACTIVO:e.estado=G.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getGeneros()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getGeneros(),this.listenGrid()}};i.\u0275fac=function(e){return new(e||i)(g(I),g(x),g(D))},i.\u0275cmp=f({type:i,selectors:[["app-grid-generos"]],standalone:!0,features:[h],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),c(3,"G\xE9neros"),s(),a(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5)(7,"input",6),s(),a(8,"button",7),p("click",function(){return o.onNew()}),u(9,"mat-icon",8),a(10,"span",9),c(11,"Agregar"),s()()()(),a(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),s()()()),e&2&&(r(5),n("subscriptSizing","dynamic"),r(),n("svgIcon","heroicons_solid:magnifying-glass"),r(),n("autocomplete","off")("placeholder","Buscar"),r(),n("color","primary"),r(),n("svgIcon","heroicons_outline:plus"),r(5),n("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons))},dependencies:[H,b,v,T,S]});let d=i;return d})();var ye=[{path:"",component:W}];export{ye as default};