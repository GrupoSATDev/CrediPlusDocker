import{a as x}from"./chunk-IWDGODRY.js";import{a as M}from"./chunk-6IEWE3OU.js";import{a as W}from"./chunk-B3JKLSIR.js";import{a as C,c as S,d as $}from"./chunk-NYXXZLC7.js";import"./chunk-XLGI4M45.js";import"./chunk-FLYHOBTN.js";import{a as w,b as T,c as I,k as G}from"./chunk-7MJ462UO.js";import"./chunk-C2BDAT5Z.js";import{B as P,E as B,I as D,b as N,i as v,l as A,p as R,q as O,t as V,w as j,x as z}from"./chunk-DESY5WO2.js";import{ea as b,ja as k}from"./chunk-JWHB23S2.js";import"./chunk-TAOXPEWO.js";import"./chunk-QEQK4NML.js";import"./chunk-TI3VW26V.js";import{Cb as a,Db as n,Eb as u,Ob as p,Yb as m,Za as i,_a as g,_b as F,ec as h,fa as l,ka as f,q as E,rb as s}from"./chunk-MZ7JCHPI.js";import{a as y}from"./chunk-NEB6MB4Y.js";var _=(()=>{let r=class r{constructor(){this.fb=l(P),this.dialogRef=l(w),this.fuseService=l(G),this.toasService=l($),this.estadosDatosService=l(S),this.tiposDocumentoService=l(x),this._matData=l(T)}ngOnInit(){this.createForm();let e=this._matData;if(e.edit){let t=e.data;this.form.patchValue(t)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue();this.fuseService.open(y({},C)).afterClosed().subscribe(o=>{o==="confirmed"?this.tiposDocumentoService.putDocumentos(e).subscribe(d=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let e=this.form.getRawValue();this.fuseService.open(y({},C)).afterClosed().subscribe(o=>{o==="confirmed"?this.tiposDocumentoService.postDocumentos(e).subscribe(d=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],codigo:[""],nombre:[""]})}closeDialog(){this.dialogRef.close()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=f({type:r,selectors:[["app-form-tipos-documentos"]],standalone:!0,features:[h],decls:20,vars:6,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-between"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"click","color"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),m(3),n(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),m(7,"C\xF3digo"),n(),u(8,"input",5),n(),a(9,"mat-form-field",4)(10,"mat-label"),m(11,"Nombre"),n(),u(12,"input",5),n(),a(13,"div",6)(14,"button",7),p("click",function(){return o.closeDialog()}),a(15,"span"),m(16," Cancelar "),n()(),a(17,"button",8),p("click",function(){return o.onSave()}),a(18,"span"),m(19," Guardar "),n()()()()()()),t&2&&(i(3),F(" ",o._matData.edit?"Actualizar documento":"Crear documento"," "),i(),s("formGroup",o.form),i(4),s("formControlName","codigo"),i(4),s("formControlName","nombre"),i(2),s("color","primary"),i(3),s("color","primary"))},dependencies:[B,V,A,R,O,j,z,v,D,N,b]});let c=r;return c})();var H=(()=>{let r=class r{constructor(e,t,o){this._matDialog=e,this.estadoDatosService=t,this.tiposDocumentosServices=o,this.data=[],this.columns=["Estado","C\xF3digo","Nombre documento"],this.columnPropertyMap={Estado:"estado",C\u00F3digo:"codigo","Nombre documento":"nombre"},this.buttons=[{label:"Edit",icon:"edit",action:d=>{console.log("Editing",d),this.selectedData=d,this.onEdit()}}]}onNew(){this._matDialog.open(_,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(_,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getDocumentos(){this.subcription$=this.tiposDocumentosServices.getTiposDocumentos().pipe(E(e=>(e.data.forEach(t=>{t.estado?t.estado=M.ACTIVO:t.estado=M.INACTIVO}),e))).subscribe(e=>{this.data=e.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getDocumentos()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getDocumentos(),this.listenGrid()}};r.\u0275fac=function(t){return new(t||r)(g(I),g(S),g(x))},r.\u0275cmp=f({type:r,selectors:[["app-grid-tipos-documentos"]],standalone:!0,features:[h],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Tipos de documentos"),n(),a(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5)(7,"input",6),n(),a(8,"button",7),p("click",function(){return o.onNew()}),u(9,"mat-icon",8),a(10,"span",9),m(11,"Crear documento"),n()()()(),a(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),n()()()),t&2&&(i(5),s("subscriptSizing","dynamic"),i(),s("svgIcon","heroicons_solid:magnifying-glass"),i(),s("autocomplete","off")("placeholder","Buscar"),i(),s("color","primary"),i(),s("svgIcon","heroicons_outline:plus"),i(5),s("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons))},dependencies:[W,b,v,k,D]});let c=r;return c})();var St=[{path:"",component:H}];export{St as default};
