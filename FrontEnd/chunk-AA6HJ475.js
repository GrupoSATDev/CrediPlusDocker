import{a as x}from"./chunk-646T3EOX.js";import{a as T}from"./chunk-6IEWE3OU.js";import{a as q}from"./chunk-LBLJGZM7.js";import{a as C,c as D,d as J}from"./chunk-JM6PAC2Q.js";import"./chunk-55LFJ2HF.js";import"./chunk-CHOSRW5W.js";import{a as k,b as G,c as N,k as R}from"./chunk-GIPKHLVS.js";import"./chunk-7U4JZNVG.js";import{B as H,E as L,I as S,b as A,i as v,l as O,p as V,q as z,t as B,w as W,x as $}from"./chunk-CURMXRYA.js";import{ea as b,ja as P}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import"./chunk-EJW5UVWF.js";import"./chunk-NP3GUERB.js";import{Cb as r,Db as n,Eb as p,Ob as u,Yb as c,Za as o,_a as h,_b as j,ec as g,fa as l,ka as f,q as E,rb as s}from"./chunk-32HXX3OB.js";import{a as y,d as F}from"./chunk-NEB6MB4Y.js";var M=(()=>{let i=class i{constructor(){this.fb=l(H),this.dialogRef=l(k),this.fuseService=l(R),this.estadosDatosService=l(D),this.toasService=l(J),this._matData=l(G),this.tasasService=l(x)}ngOnInit(){this.createForm();let e=this._matData;if(e.edit){let t=e.data;this.form.patchValue(t)}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue(),{porcentaje:a}=t,m={porcentaje:Number(a)};this.fuseService.open(y({},C)).afterClosed().subscribe(I=>{I==="confirmed"?this.tasasService.putTasas(m).subscribe(w=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let e=this.form.getRawValue(),{porcentaje:a}=e,m=F(e,["porcentaje"]),_={porcentaje:Number(a)};this.fuseService.open(y({},C)).afterClosed().subscribe(w=>{w==="confirmed"?this.tasasService.postTasas(_).subscribe(Q=>{console.log(Q),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],porcentaje:[""]})}closeDialog(){this.dialogRef.close()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=f({type:i,selectors:[["app-form-tasas"]],standalone:!0,features:[g],decls:16,vars:5,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-between"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"click","color"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),c(3),n(),r(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),c(7,"Porcentaje %"),n(),p(8,"input",5),n(),r(9,"div",6)(10,"button",7),u("click",function(){return a.closeDialog()}),r(11,"span"),c(12," Cancelar "),n()(),r(13,"button",8),u("click",function(){return a.onSave()}),r(14,"span"),c(15," Guardar "),n()()()()()()),t&2&&(o(3),j(" ",a._matData.edit?"Actualizar tasa":"Crear tasa"," "),o(),s("formGroup",a.form),o(4),s("formControlName","porcentaje"),o(2),s("color","primary"),o(3),s("color","primary"))},dependencies:[b,v,S,A,L,B,O,V,z,W,$]});let d=i;return d})();var K=(()=>{let i=class i{constructor(e,t,a){this._matDialog=e,this.estadoDatosService=t,this.tasasService=a,this.data=[],this.columns=["Estado","Porcentaje %"],this.columnPropertyMap={Estado:"estado","Porcentaje %":"porcentaje"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(M,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(M,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getTasas(){this.subcription$=this.tasasService.getTass().pipe(E(e=>(e.data.forEach(t=>{t.estado?t.estado=T.ACTIVO:t.estado=T.INACTIVO}),e))).subscribe(e=>{this.data=e.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getTasas()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTasas(),this.listenGrid()}};i.\u0275fac=function(t){return new(t||i)(h(N),h(D),h(x))},i.\u0275cmp=f({type:i,selectors:[["app-grid-tasas"]],standalone:!0,features:[g],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Tasas de interes"),n(),r(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),n(),r(8,"button",7),u("click",function(){return a.onNew()}),p(9,"mat-icon",8),r(10,"span",9),c(11,"Crear tasa"),n()()()(),r(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),n()()()),t&2&&(o(5),s("subscriptSizing","dynamic"),o(),s("svgIcon","heroicons_solid:magnifying-glass"),o(),s("autocomplete","off")("placeholder","Buscar"),o(),s("color","primary"),o(),s("svgIcon","heroicons_outline:plus"),o(5),s("columns",a.columns)("displayedColumns",a.columns)("columnPropertyMap",a.columnPropertyMap)("data",a.data)("buttons",a.buttons))},dependencies:[q,b,v,P,S]});let d=i;return d})();var Mt=[{path:"",component:K}];export{Mt as default};