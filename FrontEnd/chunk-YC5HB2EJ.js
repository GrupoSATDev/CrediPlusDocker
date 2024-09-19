import{a as x}from"./chunk-CGUVD37V.js";import{a as K}from"./chunk-6IEWE3OU.js";import{a as _}from"./chunk-NW3IUUPG.js";import{a as q}from"./chunk-AAAXQYIG.js";import{a as D,b as J}from"./chunk-3DTARJTQ.js";import"./chunk-6PPPUFOC.js";import"./chunk-FLYHOBTN.js";import{a as G,b as R,c as A,k as O}from"./chunk-7MJ462UO.js";import"./chunk-C2BDAT5Z.js";import{B as L,F as S,b as T,i as g,l as V,p as z,q as P,t as B,v as W,w as $,y as H}from"./chunk-AZYYSVXK.js";import{ea as C,ja as j}from"./chunk-JWHB23S2.js";import"./chunk-TAOXPEWO.js";import"./chunk-YPPCX2UT.js";import"./chunk-TI3VW26V.js";import{Cb as a,Db as r,Eb as d,Ob as f,Yb as l,Za as o,_a as b,_b as k,ec as h,fa as c,ka as v,q as N,rb as n}from"./chunk-MZ7JCHPI.js";import{a as u,d as M}from"./chunk-NEB6MB4Y.js";var E=(()=>{let s=class s{constructor(){this.fb=c(H),this.dialogRef=c(G),this.fuseService=c(O),this.estadosDatosService=c(D),this.toasService=c(J),this.capitalService=c(x),this._matData=c(R)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{rubroInversion:m}=e,I=M(e,["rubroInversion"]),y=u({rubroInversion:Number(m)},I);this.fuseService.open(u({},_)).afterClosed().subscribe(F=>{F==="confirmed"?this.capitalService.putCapitales(y).subscribe(w=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let t=this.form.getRawValue(),{rubroInversion:m}=t,I=M(t,["rubroInversion"]),y=u({rubroInversion:Number(m)},I);this.fuseService.open(u({},_)).afterClosed().subscribe(F=>{F==="confirmed"?this.capitalService.postCapitales(y).subscribe(w=>{console.log(w),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombreInversor:[""],rubroInversion:[""],detalleInversion:[""]})}closeDialog(){this.dialogRef.close()}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=v({type:s,selectors:[["app-form-capital-inversion"]],standalone:!0,features:[h],decls:24,vars:7,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],["matInput","","placeholder","Detalle",3,"formControlName"],[1,"flex","flex-wrap","justify-between"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"click","color"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3),r(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),l(7,"Nombre de inversor"),r(),d(8,"input",5),r(),a(9,"mat-form-field",4)(10,"mat-label"),l(11,"Rubro de inversor"),r(),d(12,"input",5),r(),a(13,"mat-form-field",4)(14,"mat-label"),l(15,"Detalle de inversi\xF3n"),r(),d(16,"textarea",6),r(),a(17,"div",7)(18,"button",8),f("click",function(){return i.closeDialog()}),a(19,"span"),l(20," Cancelar "),r()(),a(21,"button",9),f("click",function(){return i.onSave()}),a(22,"span"),l(23," Guardar "),r()()()()()()),e&2&&(o(3),k(" ",i._matData.edit?"Actualizar capital":"Crear capital"," "),o(),n("formGroup",i.form),o(4),n("formControlName","nombreInversor"),o(4),n("formControlName","rubroInversion"),o(4),n("formControlName","detalleInversion"),o(2),n("color","primary"),o(3),n("color","primary"))},dependencies:[C,g,S,T,L,B,V,z,P,W,$]});let p=s;return p})();var Q=(()=>{let s=class s{constructor(t,e,i){this._matDialog=t,this.estadoDatosService=e,this.capitalService=i,this.data=[],this.columns=["Nombre de inversor","Rubro de inversi\xF3n","Detalle de inversi\xF3n"],this.columnPropertyMap={"Nombre de inversor":"nombreInversor","Rubro de inversi\xF3n":"rubroInversion","Detalle de inversi\xF3n":"detalleInversion"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(E,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getCapital(){this.subcription$=this.capitalService.getCapitales().pipe(N(t=>(t.data.forEach(e=>{if(e.estado)return e.estado=K.ACTIVO,e}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCapital()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCapital(),this.listenGrid()}};s.\u0275fac=function(e){return new(e||s)(b(A),b(D),b(x))},s.\u0275cmp=v({type:s,selectors:[["app-grid-capital-inversion"]],standalone:!0,features:[h],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Capital de inversi\xF3n"),r(),a(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),r(),a(8,"button",7),f("click",function(){return i.onNew()}),d(9,"mat-icon",8),a(10,"span",9),l(11,"Crear capital"),r()()()(),a(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),r()()()),e&2&&(o(5),n("subscriptSizing","dynamic"),o(),n("svgIcon","heroicons_solid:magnifying-glass"),o(),n("autocomplete","off")("placeholder","Buscar"),o(),n("color","primary"),o(),n("svgIcon","heroicons_outline:plus"),o(5),n("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data)("buttons",i.buttons))},dependencies:[q,C,g,j,S]});let p=s;return p})();var Me=[{path:"",component:Q}];export{Me as default};
