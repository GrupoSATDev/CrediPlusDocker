import{a as x}from"./chunk-BATVVIF6.js";import{a as K}from"./chunk-6IEWE3OU.js";import{b as q,c as F,d as y,e as J}from"./chunk-PUZHLFDV.js";import{E as O,u as A,v as G,w as T}from"./chunk-4PABNQQO.js";import{A as H,E as S,a as R,h as b,k as V,o as z,p as P,s as B,u as L,v as W,x as $}from"./chunk-JABQIN56.js";import{ba as D,ga as j}from"./chunk-COZCVVRH.js";import"./chunk-NFYLEJKB.js";import"./chunk-IUWUTE73.js";import"./chunk-LP47ZEUX.js";import{Cb as a,Db as s,Eb as p,Ob as f,Yb as l,Za as i,_a as h,_b as k,dc as v,fa as c,ka as g,q as I,rb as n}from"./chunk-5H7N2SGK.js";import{a as u,d as M}from"./chunk-NEB6MB4Y.js";var w=(()=>{let r=class r{constructor(){this.fb=c($),this._locacionService=c(x),this.dialogRef=c(A),this.fuseService=c(O),this.estadosDatosService=c(y),this.toasService=c(J),this._matData=c(G)}ngOnInit(){this.createForm();let e=this._matData;if(e.edit){let t=e.data;this.form.patchValue(t)}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue(),{codigoDane:m}=t,C=M(t,["codigoDane"]),_=u({codigoDane:Number(m)},C);this.fuseService.open(u({},F)).afterClosed().subscribe(E=>{E==="confirmed"?this._locacionService.putDepartamento(_).subscribe(N=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let e=this.form.getRawValue(),{codigoDane:m}=e,C=M(e,["codigoDane"]),_=u({codigoDane:Number(m)},C);this.fuseService.open(u({},F)).afterClosed().subscribe(E=>{E==="confirmed"?this._locacionService.postDepartamento(_).subscribe(N=>{console.log(N),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],codigoDane:[""],nombre:[""]})}closeDialog(){this.dialogRef.close()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=g({type:r,selectors:[["app-form-departamentos"]],standalone:!0,features:[v],decls:20,vars:6,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-between"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"click","color"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3),s(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),l(7,"C\xF3digo del DANE"),s(),p(8,"input",5),s(),a(9,"mat-form-field",4)(10,"mat-label"),l(11,"Nombre"),s(),p(12,"input",5),s(),a(13,"div",6)(14,"button",7),f("click",function(){return o.closeDialog()}),a(15,"span"),l(16," Cancelar "),s()(),a(17,"button",8),f("click",function(){return o.onSave()}),a(18,"span"),l(19," Guardar "),s()()()()()()),t&2&&(i(3),k(" ",o._matData.edit?"Actualizar departamento":"Crear departamento"," "),i(),n("formGroup",o.form),i(4),n("formControlName","codigoDane"),i(4),n("formControlName","nombre"),i(2),n("color","primary"),i(3),n("color","primary"))},dependencies:[D,b,S,R,H,B,V,z,P,L,W]});let d=r;return d})();var Q=(()=>{let r=class r{constructor(e,t,o){this._matDialog=e,this.estadoDatosService=t,this.locacionService=o,this.data=[],this.columns=["Estado","C\xF3digo DANE","Nombre departamento"],this.columnPropertyMap={Estado:"estado","Nombre departamento":"nombre","C\xF3digo DANE":"codigoDane"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(w,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(w,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getDepartamentos(){this.subcription$=this.locacionService.getDepartamentos().pipe(I(e=>(e.data.forEach(t=>{if(t.estado)return t.estado=K.ACTIVO,t}),e))).subscribe(e=>{this.data=e.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getDepartamentos()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getDepartamentos(),this.listenGrid()}};r.\u0275fac=function(t){return new(t||r)(h(T),h(y),h(x))},r.\u0275cmp=g({type:r,selectors:[["app-grid-departamentos"]],standalone:!0,features:[v],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Departamentos"),s(),a(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),s(),a(8,"button",7),f("click",function(){return o.onNew()}),p(9,"mat-icon",8),a(10,"span",9),l(11,"Crear departamento"),s()()()(),a(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),s()()()),t&2&&(i(5),n("subscriptSizing","dynamic"),i(),n("svgIcon","heroicons_solid:magnifying-glass"),i(),n("autocomplete","off")("placeholder","Buscar"),i(),n("color","primary"),i(),n("svgIcon","heroicons_outline:plus"),i(5),n("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons))},dependencies:[q,D,b,j,S]});let d=r;return d})();var Mt=[{path:"",component:Q}];export{Mt as default};
