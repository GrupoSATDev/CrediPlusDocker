import{a as x}from"./chunk-TB655AZI.js";import{a as C}from"./chunk-6IEWE3OU.js";import{a as L}from"./chunk-ACIMG2KZ.js";import{a as H}from"./chunk-QE3E4OX7.js";import{a as w,b as $}from"./chunk-GD676RBR.js";import{a as S}from"./chunk-OFEOPKCC.js";import"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import{g as G}from"./chunk-CUGJBCL5.js";import{a as F,b as I,c as M}from"./chunk-3P4FUJJD.js";import"./chunk-4CCKGQO6.js";import{C as B,G as D,b as A,i as v,l as N,p as R,q as O,u as V,w as j,x as z,z as P}from"./chunk-7YVLRDAA.js";import{ea as b,ja as k}from"./chunk-T34F2ICN.js";import"./chunk-XMIUBE2U.js";import"./chunk-PDEGUYSW.js";import"./chunk-YH7HM3TK.js";import{Cb as r,Db as n,Eb as u,Ob as p,Yb as c,Za as i,_a as h,_b as E,ec as g,fa as l,ka as f,q as _,rb as s}from"./chunk-32HXX3OB.js";import{a as y}from"./chunk-NEB6MB4Y.js";var T=(()=>{let a=class a{constructor(){this.fb=l(P),this.dialogRef=l(F),this.fuseService=l(G),this.toasService=l($),this.estadosDatosService=l(S),this.tiposDocumentoService=l(x),this._matData=l(I),this.swalService=l(L)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue();this.fuseService.open(y({},w)).afterClosed().subscribe(o=>{o==="confirmed"?this.tiposDocumentoService.putDocumentos(t).subscribe(m=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},m=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue();this.fuseService.open(y({},w)).afterClosed().subscribe(o=>{o==="confirmed"?this.tiposDocumentoService.postDocumentos(t).subscribe(m=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},m=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],codigo:[""],nombre:[""]})}closeDialog(){this.dialogRef.close()}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=f({type:a,selectors:[["app-form-tipos-documentos"]],standalone:!0,features:[g],decls:20,vars:6,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","","placeholder","Abreviaatura",3,"formControlName"],["matInput","","placeholder","Tipo de documento",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-raised-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-raised-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),c(3),n(),r(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),c(7,"Abreviaatura"),n(),u(8,"input",5),n(),r(9,"mat-form-field",4)(10,"mat-label"),c(11,"Tipo de documento"),n(),u(12,"input",6),n(),r(13,"div",7)(14,"button",8),p("click",function(){return o.closeDialog()}),r(15,"span"),c(16," Cancelar "),n()(),r(17,"button",9),p("click",function(){return o.onSave()}),r(18,"span"),c(19," Guardar "),n()()()()()()),e&2&&(i(3),E(" ",o._matData.edit?"Actualizar":"Agregar"," "),i(),s("formGroup",o.form),i(4),s("formControlName","codigo"),i(4),s("formControlName","nombre"),i(2),s("color","primary"),i(3),s("color","primary"))},dependencies:[B,V,N,R,O,j,z,v,D,A,b]});let d=a;return d})();var W=(()=>{let a=class a{constructor(t,e,o){this._matDialog=t,this.estadoDatosService=e,this.tiposDocumentosServices=o,this.data=[],this.columns=["Estado","Abreviatura","Tipo de documento"],this.columnPropertyMap={Estado:"estado",Abreviatura:"codigo","Tipo de documento":"nombre"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(T,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}onEdit(){this._matDialog.open(T,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}getDocumentos(){this.subcription$=this.tiposDocumentosServices.getTiposDocumentos().pipe(_(t=>(t.data.forEach(e=>{e.estado?e.estado=C.ACTIVO:e.estado=C.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getDocumentos()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getDocumentos(),this.listenGrid()}};a.\u0275fac=function(e){return new(e||a)(h(M),h(S),h(x))},a.\u0275cmp=f({type:a,selectors:[["app-grid-tipos-documentos"]],standalone:!0,features:[g],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Tipos de Documentos"),n(),r(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5)(7,"input",6),n(),r(8,"button",7),p("click",function(){return o.onNew()}),u(9,"mat-icon",8),r(10,"span",9),c(11,"Agregar"),n()()()(),r(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),n()()()),e&2&&(i(5),s("subscriptSizing","dynamic"),i(),s("svgIcon","heroicons_solid:magnifying-glass"),i(),s("autocomplete","off")("placeholder","Buscar"),i(),s("color","primary"),i(),s("svgIcon","heroicons_outline:plus"),i(5),s("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons))},dependencies:[H,b,v,k,D]});let d=a;return d})();var ye=[{path:"",component:W}];export{ye as default};