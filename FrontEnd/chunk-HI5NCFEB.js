import{a as y}from"./chunk-IWPLUVSL.js";import{a as Z,b as ee,c as te}from"./chunk-UHISEFFO.js";import{a as I}from"./chunk-6IEWE3OU.js";import{a as X}from"./chunk-J5FCIPDY.js";import{a as T,c as Y}from"./chunk-OPNYY4B4.js";import{a as D}from"./chunk-OFEOPKCC.js";import"./chunk-KQASFADC.js";import"./chunk-CHOSRW5W.js";import{g as W}from"./chunk-MHKPHMKH.js";import{a as N,b as O,c as P}from"./chunk-JND367CQ.js";import"./chunk-7U4JZNVG.js";import{C as Q,F as U,J as S,b as R,e as z,i as b,l as $,p as H,q as L,u as q,x as J,y as K}from"./chunk-K2P4EKGI.js";import{ea as x,ja as B}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import"./chunk-L7XSEERQ.js";import"./chunk-NP3GUERB.js";import{Cb as a,Db as o,Eb as d,Ib as A,Ob as u,Xb as G,Yb as l,Za as r,_a as h,_b as V,ec as v,fa as c,ka as g,q as j,rb as n,ua as C,va as M}from"./chunk-32HXX3OB.js";import{a as w,d as F}from"./chunk-NEB6MB4Y.js";var _=(()=>{let s=class s{constructor(){this.fb=c(Q),this.dialogRef=c(N),this.fuseService=c(W),this.estadosDatosService=c(D),this.toasService=c(Y),this._matData=c(O),this.tasasService=c(y)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{porcentaje:i}=e,m={porcentaje:Number(i)};this.fuseService.open(w({},T)).afterClosed().subscribe(E=>{E==="confirmed"?this.tasasService.putTasas(m).subscribe(k=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let t=this.form.getRawValue(),{porcentaje:i}=t,m=F(t,["porcentaje"]),f={porcentaje:Number(i)};this.fuseService.open(w({},T)).afterClosed().subscribe(k=>{k==="confirmed"?this.tasasService.postTasas(f).subscribe(ae=>{console.log(ae),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],porcentaje:[""]})}closeDialog(){this.dialogRef.close()}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=g({type:s,selectors:[["app-form-tasas"]],standalone:!0,features:[v],decls:27,vars:7,consts:[["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","placeholder","Detalle"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,i){if(e&1){let m=A();a(0,"div",1)(1,"div",2)(2,"div",3),l(3),o(),a(4,"form",4)(5,"mat-form-field",5)(6,"mat-label"),l(7,"Porcentaje %"),o(),d(8,"input",6),o(),a(9,"mat-form-field",5)(10,"mat-label"),l(11,"Vigencia"),o(),d(12,"input",7)(13,"mat-datepicker-toggle",8)(14,"mat-datepicker",null,0),o(),a(16,"mat-form-field",5)(17,"mat-label"),l(18,"Observaciones"),o(),d(19,"textarea",9),o(),a(20,"div",10)(21,"button",11),u("click",function(){return C(m),M(i.closeDialog())}),a(22,"span"),l(23," Cancelar "),o()(),a(24,"button",12),u("click",function(){return C(m),M(i.onSave())}),a(25,"span"),l(26," Guardar "),o()()()()()()}if(e&2){let m=G(15);r(3),V(" ",i._matData.edit?"Actualizar tasa":"Agregar tasa"," "),r(),n("formGroup",i.form),r(4),n("formControlName","porcentaje"),r(4),n("matDatepicker",m),r(),n("for",m),r(8),n("color","primary"),r(3),n("color","primary")}},dependencies:[x,b,S,R,U,q,$,H,L,J,K,Z,ee,te,z]});let p=s;return p})();var ie=(()=>{let s=class s{constructor(t,e,i){this._matDialog=t,this.estadoDatosService=e,this.tasasService=i,this.data=[],this.columns=["Estado","Porcentaje %"],this.columnPropertyMap={Estado:"estado","Porcentaje %":"porcentaje"},this.buttons=[{label:"Edit",icon:"edit",action:m=>{console.log("Editing",m),this.selectedData=m,this.onEdit()}}]}onNew(){this._matDialog.open(_,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(_,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getTasas(){this.subcription$=this.tasasService.getTass().pipe(j(t=>(t.data.forEach(e=>{e.estado?e.estado=I.ACTIVO:e.estado=I.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getTasas()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTasas(),this.listenGrid()}};s.\u0275fac=function(e){return new(e||s)(h(P),h(D),h(y))},s.\u0275cmp=g({type:s,selectors:[["app-grid-tasas"]],standalone:!0,features:[v],decls:15,vars:10,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Tasas de interes"),o(),a(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),o(),a(8,"button",7),u("click",function(){return i.onNew()}),d(9,"mat-icon",8),a(10,"span",9),l(11,"Agregar"),o()()()(),a(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),o()()()),e&2&&(r(5),n("subscriptSizing","dynamic"),r(),n("svgIcon","heroicons_solid:magnifying-glass"),r(),n("autocomplete","off")("placeholder","Buscar"),r(2),n("svgIcon","heroicons_outline:plus"),r(5),n("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data)("buttons",i.buttons))},dependencies:[X,x,b,B,S]});let p=s;return p})();var Ge=[{path:"",component:ie}];export{Ge as default};
