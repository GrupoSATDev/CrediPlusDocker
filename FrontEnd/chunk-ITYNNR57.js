import{a as y}from"./chunk-YEQVMDAS.js";import{a as I}from"./chunk-6IEWE3OU.js";import{a as Q}from"./chunk-ACIMG2KZ.js";import{a as J}from"./chunk-QE3E4OX7.js";import{a as M,b as K}from"./chunk-GD676RBR.js";import{a as C}from"./chunk-OFEOPKCC.js";import"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import{g as j}from"./chunk-CUGJBCL5.js";import{a as k,b as G,c as R}from"./chunk-3P4FUJJD.js";import"./chunk-4CCKGQO6.js";import{C as q,G as x,b as O,i as D,l as z,p as P,q as B,u as H,w as L,x as $,z as W}from"./chunk-7YVLRDAA.js";import{ea as S,ja as V}from"./chunk-T34F2ICN.js";import"./chunk-XMIUBE2U.js";import"./chunk-PDEGUYSW.js";import"./chunk-YH7HM3TK.js";import{Cb as a,Db as s,Eb as p,Ob as f,Yb as c,Za as i,_a as v,_b as T,ec as b,fa as l,ka as h,q as A,rb as n}from"./chunk-32HXX3OB.js";import{a as u,d as F}from"./chunk-NEB6MB4Y.js";var N=(()=>{let r=class r{constructor(){this.fb=l(W),this._locacionService=l(y),this.dialogRef=l(k),this.fuseService=l(j),this.estadosDatosService=l(C),this.toasService=l(K),this._matData=l(G),this.swalService=l(Q)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{codigoDane:m}=e,w=F(e,["codigoDane"]),_=u({codigoDane:Number(m)},w);this.fuseService.open(u({},M)).afterClosed().subscribe(E=>{E==="confirmed"?this._locacionService.putDepartamento(_).subscribe(g=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},g=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un problema al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue(),{codigoDane:m}=t,w=F(t,["codigoDane"]),_=u({codigoDane:Number(m)},w);this.fuseService.open(u({},M)).afterClosed().subscribe(E=>{E==="confirmed"?this._locacionService.postDepartamento(_).subscribe(g=>{console.log(g),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},g=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un problema al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],codigoDane:[""],nombre:[""]})}closeDialog(){this.dialogRef.close()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=h({type:r,selectors:[["app-form-departamentos"]],standalone:!0,features:[b],decls:20,vars:6,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),c(3),s(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),c(7,"C\xF3digo del DANE"),s(),p(8,"input",5),s(),a(9,"mat-form-field",4)(10,"mat-label"),c(11,"Nombre"),s(),p(12,"input",5),s(),a(13,"div",6)(14,"button",7),f("click",function(){return o.closeDialog()}),a(15,"span"),c(16," Cancelar "),s()(),a(17,"button",8),f("click",function(){return o.onSave()}),a(18,"span"),c(19," Guardar "),s()()()()()()),e&2&&(i(3),T(" ",o._matData.edit?"Actualizar departamento":"Agregar departamento"," "),i(),n("formGroup",o.form),i(4),n("formControlName","codigoDane"),i(4),n("formControlName","nombre"),i(2),n("color","primary"),i(3),n("color","primary"))},dependencies:[S,D,x,O,q,H,z,P,B,L,$]});let d=r;return d})();var U=(()=>{let r=class r{constructor(t,e,o){this._matDialog=t,this.estadoDatosService=e,this.locacionService=o,this.data=[],this.columns=["Estado","C\xF3digo DANE","Nombre departamento"],this.columnPropertyMap={Estado:"estado","Nombre departamento":"nombre","C\xF3digo DANE":"codigoDane"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(N,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}onEdit(){this._matDialog.open(N,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}getDepartamentos(){this.subcription$=this.locacionService.getDepartamentos().pipe(A(t=>(t.data.forEach(e=>{e.estado?e.estado=I.ACTIVO:e.estado=I.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getDepartamentos()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getDepartamentos(),this.listenGrid()}};r.\u0275fac=function(e){return new(e||r)(v(R),v(C),v(y))},r.\u0275cmp=h({type:r,selectors:[["app-grid-departamentos"]],standalone:!0,features:[b],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","d","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Departamentos"),s(),a(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),s(),a(8,"button",7),f("click",function(){return o.onNew()}),p(9,"mat-icon",8),a(10,"span",9),c(11,"Agregar"),s()()()(),a(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),s()()()),e&2&&(i(5),n("subscriptSizing","dynamic"),i(),n("svgIcon","heroicons_solid:magnifying-glass"),i(),n("autocomplete","off")("placeholder","Buscar"),i(),n("color","primary"),i(),n("svgIcon","heroicons_outline:plus"),i(5),n("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons))},dependencies:[J,S,D,V,x]});let d=r;return d})();var Me=[{path:"",component:U}];export{Me as default};