import{a as x}from"./chunk-FPMZ5B5I.js";import{a as C}from"./chunk-6IEWE3OU.js";import{a as L}from"./chunk-TRVR57AA.js";import{a as H}from"./chunk-YMBTTIVN.js";import{a as $}from"./chunk-ARYACW5V.js";import{a as y}from"./chunk-4WJQLHI3.js";import{a as w}from"./chunk-MO2NC6JB.js";import"./chunk-H5OWTWVS.js";import"./chunk-3EEAMLKT.js";import{g as N}from"./chunk-45VFWK2F.js";import{a as F,b as M,c as I}from"./chunk-3F72AFMB.js";import"./chunk-T4J43FBS.js";import{C as B,G as S,b as A,i as v,l as k,p as R,q as z,u as O,w as V,x as j,z as P}from"./chunk-JBQZ6BPD.js";import{ea as b,ja as T}from"./chunk-SUQ5NR2B.js";import"./chunk-TO3CLTNT.js";import"./chunk-7LIXJ3C3.js";import"./chunk-SQ7M4XTP.js";import{$a as g,$b as _,Db as a,Eb as n,Fb as u,Pb as p,Zb as c,_a as r,fc as h,ga as m,la as f,q as E,sb as s}from"./chunk-RICNMTJI.js";import{a as D}from"./chunk-NEB6MB4Y.js";var G=(()=>{let i=class i{constructor(){this.fb=m(P),this.dialogRef=m(F),this.generoService=m(x),this.fuseService=m(N),this.estadosDatosService=m(w),this.toasService=m($),this._matData=m(M),this.swalService=m(L)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue();this.fuseService.open(D({},y)).afterClosed().subscribe(o=>{o==="confirmed"?this.generoService.putGeneros(t).subscribe(l=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},l=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue();this.fuseService.open(D({},y)).afterClosed().subscribe(o=>{o==="confirmed"?this.generoService.postGeneros(t).subscribe(l=>{console.log(l),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},l=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombre:[""]})}closeDialog(){this.dialogRef.close()}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-form-generos"]],standalone:!0,features:[h],decls:16,vars:5,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),c(3),n(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),c(7,"Nombre"),n(),u(8,"input",5),n(),a(9,"div",6)(10,"button",7),p("click",function(){return o.closeDialog()}),a(11,"span"),c(12," Cancelar "),n()(),a(13,"button",8),p("click",function(){return o.onSave()}),a(14,"span"),c(15," Guardar "),n()()()()()()),e&2&&(r(3),_(" ",o._matData.edit?"Actualizar g\xE9nero":"Agregar g\xE9nero"," "),r(),s("formGroup",o.form),r(4),s("formControlName","nombre"),r(2),s("color","primary"),r(3),s("color","primary"))},dependencies:[b,v,S,A,B,O,k,R,z,V,j],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:25%}}"]});let d=i;return d})();var q=(()=>{let i=class i{constructor(t,e,o){this._matDialog=t,this.estadoDatosService=e,this.generoService=o,this.data=[],this.columns=["Estado","Nombre"],this.columnPropertyMap={Estado:"estado",Nombre:"nombre"},this.buttons=[{label:"Edit",icon:"edit",action:l=>{console.log("Editing",l),this.selectedData=l,this.onEdit()}}]}onNew(){this._matDialog.open(G,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(G,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getGeneros(){this.subcription$=this.generoService.getGeneros().pipe(E(t=>(t.data.forEach(e=>{e.estado?e.estado=C.ACTIVO:e.estado=C.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getGeneros()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getGeneros(),this.listenGrid()}};i.\u0275fac=function(e){return new(e||i)(g(I),g(w),g(x))},i.\u0275cmp=f({type:i,selectors:[["app-grid-generos"]],standalone:!0,features:[h],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),c(3,"G\xE9neros"),n(),a(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5)(7,"input",6),n(),a(8,"button",7),p("click",function(){return o.onNew()}),u(9,"mat-icon",8),a(10,"span",9),c(11,"Agregar"),n()()()(),a(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),n()()()),e&2&&(r(5),s("subscriptSizing","dynamic"),r(),s("svgIcon","heroicons_solid:magnifying-glass"),r(),s("autocomplete","off")("placeholder","Buscar"),r(),s("color","primary"),r(),s("svgIcon","heroicons_outline:plus"),r(5),s("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons))},dependencies:[H,b,v,T,S]});let d=i;return d})();var De=[{path:"",component:q}];export{De as default};
