import{a as C}from"./chunk-6IEWE3OU.js";import{a as J}from"./chunk-AVIANEB4.js";import{a as K}from"./chunk-CQJY43M3.js";import{a as x}from"./chunk-OFEOPKCC.js";import"./chunk-CHOSRW5W.js";import{a as q}from"./chunk-ACIMG2KZ.js";import{a as G}from"./chunk-H7DTTKLU.js";import"./chunk-33XTDNRI.js";import{g as R}from"./chunk-QS2WZY2K.js";import{a as A,b as T,c as k}from"./chunk-JND367CQ.js";import"./chunk-7U4JZNVG.js";import{C as W,G as S,b as N,i as v,l as V,p as z,q as $,u as H,w as P,x as B,z as L}from"./chunk-JLNARVDU.js";import{ea as b,ja as j}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import{a as O}from"./chunk-HHDBYFMG.js";import{r as M}from"./chunk-NP3GUERB.js";import{$ as _,Cb as a,Db as l,Eb as p,Ob as u,Yb as d,Za as r,_a as g,_b as F,ea as w,ec as h,fa as c,ka as f,q as I,rb as s}from"./chunk-32HXX3OB.js";import{a as D}from"./chunk-NEB6MB4Y.js";var y=(()=>{let i=class i{constructor(e,t){this._http=e,this.appSettings=t}getGeneros(){return this._http.get(this.appSettings.generos.url.base)}postGeneros(e){return delete e.id,this._http.post(this.appSettings.generos.url.base,e)}putGeneros(e){let t=e.id;return delete e.id,this._http.put(`${this.appSettings.generos.url.base}/${t}`,e)}};i.\u0275fac=function(t){return new(t||i)(w(M),w(O))},i.\u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var E=(()=>{let i=class i{constructor(){this.fb=c(L),this.dialogRef=c(A),this.generoService=c(y),this.fuseService=c(R),this.estadosDatosService=c(x),this.toasService=c(K),this._matData=c(T),this.swalService=c(q)}ngOnInit(){this.createForm();let e=this._matData;if(e.edit){let t=e.data;this.form.patchValue(t)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue();this.fuseService.open(D({},G)).afterClosed().subscribe(o=>{o==="confirmed"?this.generoService.putGeneros(e).subscribe(m=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},m=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let e=this.form.getRawValue();this.fuseService.open(D({},G)).afterClosed().subscribe(o=>{o==="confirmed"?this.generoService.postGeneros(e).subscribe(m=>{console.log(m),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},m=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombre:[""]})}closeDialog(){this.dialogRef.close()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=f({type:i,selectors:[["app-form-generos"]],standalone:!0,features:[h],decls:16,vars:5,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),d(3),l(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),d(7,"Nombre"),l(),p(8,"input",5),l(),a(9,"div",6)(10,"button",7),u("click",function(){return o.closeDialog()}),a(11,"span"),d(12," Cancelar "),l()(),a(13,"button",8),u("click",function(){return o.onSave()}),a(14,"span"),d(15," Guardar "),l()()()()()()),t&2&&(r(3),F(" ",o._matData.edit?"Actualizar g\xE9nero":"Agregar g\xE9nero"," "),r(),s("formGroup",o.form),r(4),s("formControlName","nombre"),r(2),s("color","primary"),r(3),s("color","primary"))},dependencies:[b,v,S,N,W,H,V,z,$,P,B]});let n=i;return n})();var U=(()=>{let i=class i{constructor(e,t,o){this._matDialog=e,this.estadoDatosService=t,this.generoService=o,this.data=[],this.columns=["Estado","Nombre"],this.columnPropertyMap={Estado:"estado",Nombre:"nombre"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}onEdit(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}getGeneros(){this.subcription$=this.generoService.getGeneros().pipe(I(e=>(e.data.forEach(t=>{t.estado?t.estado=C.ACTIVO:t.estado=C.INACTIVO}),e))).subscribe(e=>{this.data=e.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getGeneros()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getGeneros(),this.listenGrid()}};i.\u0275fac=function(t){return new(t||i)(g(k),g(x),g(y))},i.\u0275cmp=f({type:i,selectors:[["app-grid-generos"]],standalone:!0,features:[h],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),d(3,"G\xE9neros"),l(),a(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),l(),a(8,"button",7),u("click",function(){return o.onNew()}),p(9,"mat-icon",8),a(10,"span",9),d(11,"Agregar"),l()()()(),a(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),l()()()),t&2&&(r(5),s("subscriptSizing","dynamic"),r(),s("svgIcon","heroicons_solid:magnifying-glass"),r(),s("autocomplete","off")("placeholder","Buscar"),r(),s("color","primary"),r(),s("svgIcon","heroicons_outline:plus"),r(5),s("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons))},dependencies:[J,b,v,j,S]});let n=i;return n})();var _e=[{path:"",component:U}];export{_e as default};
