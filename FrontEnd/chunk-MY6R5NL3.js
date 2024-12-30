import{a as C}from"./chunk-SQDIRAQF.js";import{a as D}from"./chunk-K7UKSVEC.js";import{a as F}from"./chunk-6IEWE3OU.js";import{a as Y}from"./chunk-L5Y3WK7D.js";import"./chunk-BW2UNIQM.js";import{a as W}from"./chunk-4HNTIYYB.js";import{a as X}from"./chunk-QETDVRLC.js";import{g as j,i as E}from"./chunk-YDAJC2H3.js";import{a as G,b as V,c as R}from"./chunk-C7ANG7GI.js";import"./chunk-566EJEQN.js";import{C as K,E as Q,F as U,J as y,b as z,i as w,l as P,p as H,q as L,u as $,x as q,y as J}from"./chunk-NFNLINIV.js";import"./chunk-32OSWJVT.js";import{ga as x,la as O}from"./chunk-IP22JCCO.js";import"./chunk-VFBDOJ4Z.js";import"./chunk-ZKYOPOAZ.js";import{Cb as p,Lb as N,Mb as c,Ob as T,Qa as r,Ra as _,Wb as S,ha as m,ib as n,ma as h,q as A,tb as i,ub as s,vb as u,wa as v,xa as b,zb as k}from"./chunk-VNCXNJPE.js";import{a as g,b as B,d as I}from"./chunk-NEB6MB4Y.js";var M=(()=>{let a=class a{constructor(){this.fb=m(K),this.dialogRef=m(G),this.estadosDatosService=m(D),this._matData=m(V),this.swalService=m(X),this.fuseService=m(j),this.bancosService=m(C)}ngOnInit(){this.createForm();let o=this._matData;if(o.edit){let e=o.data,{estado:t}=e,l=I(e,["estado"]);this.form.patchValue(B(g({},l),{estado:t=="Activo"}))}}onSave(){if(this.form.valid)if(this._matData.edit){let o=this.form.getRawValue();this.fuseService.open(g({},E)).afterClosed().subscribe(t=>{t==="confirmed"?this.bancosService.putBancos(o).subscribe(l=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},l=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let o=this.form.getRawValue();this.fuseService.open(g({},E)).afterClosed().subscribe(t=>{t==="confirmed"?this.bancosService.postBancos(o).subscribe(l=>{console.log(l),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},l=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombre:[""],estado:[!0]})}closeDialog(){this.dialogRef.close()}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=h({type:a,selectors:[["app-form-bancos"]],standalone:!0,features:[S],decls:22,vars:8,consts:[["twoStepToggle",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,t){if(e&1){let l=k();i(0,"div",1)(1,"div",2)(2,"div",3),c(3),s(),i(4,"form",4)(5,"div",5)(6,"div",6),p("click",function(){v(l);let ee=N(10);return b(ee.toggle())}),i(7,"div",7),c(8),s()(),u(9,"mat-slide-toggle",8,0),s(),i(11,"mat-form-field",9)(12,"mat-label"),c(13,"Nombre"),s(),u(14,"input",10),s(),i(15,"div",11)(16,"button",12),p("click",function(){return v(l),b(t.closeDialog())}),i(17,"span"),c(18," Cancelar "),s()(),i(19,"button",13),p("click",function(){return v(l),b(t.onSave())}),i(20,"span"),c(21," Guardar "),s()()()()()()}e&2&&(r(3),T(" ",t._matData.edit?"Actualizar banco":"Agregar banco"," "),r(),n("formGroup",t.form),r(4),T(" Estado ",t.form.get("estado").value?"Activo":"Inactivo"," "),r(),n("color","primary")("formControlName","estado"),r(5),n("formControlName","nombre"),r(2),n("color","primary"),r(3),n("color","primary"))},dependencies:[Q,$,P,H,L,x,w,y,z,U,q,J,W]});let d=a;return d})();var Z=(()=>{let a=class a{constructor(o,e){this._matDialog=o,this.estadoDatosService=e,this.bancosService=m(C),this.searchTerm="",this.data=[],this.columns=["Estado","Nombre"],this.columnPropertyMap={Estado:"estado",Nombre:"nombre"},this.buttons=[{label:"Edit",icon:"edit",action:t=>{console.log("Editing",t),this.selectedData=t,this.onEdit()}}]}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getBancos(),this.listenGrid()}onNew(){this._matDialog.open(M,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(M,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getBancos(){this.subcription$=this.bancosService.getBancos().pipe(A(o=>(o.data.forEach(e=>{e.estado?e.estado=F.ACTIVO:e.estado=F.INACTIVO}),o))).subscribe(o=>{this.data=o.data})}onSearch(o){let e=o.target;this.searchTerm=e.value.trim().toLowerCase()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getBancos()})}};a.\u0275fac=function(e){return new(e||a)(_(R),_(D))},a.\u0275cmp=h({type:a,selectors:[["app-grid-bancos"]],standalone:!0,features:[S],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Bancos"),s(),i(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5),i(7,"input",6),p("input",function(f){return t.onSearch(f)}),s()(),i(8,"button",7),p("click",function(){return t.onNew()}),u(9,"mat-icon",8),i(10,"span",9),c(11,"Agregar"),s()()()(),i(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),s()()()),e&2&&(r(5),n("subscriptSizing","dynamic"),r(),n("svgIcon","heroicons_solid:magnifying-glass"),r(),n("autocomplete","off")("placeholder","Buscar"),r(),n("color","primary"),r(),n("svgIcon","heroicons_outline:plus"),r(5),n("columns",t.columns)("displayedColumns",t.columns)("columnPropertyMap",t.columnPropertyMap)("data",t.data)("buttons",t.buttons)("searchTerm",t.searchTerm))},dependencies:[Y,x,w,O,y]});let d=a;return d})();var ke=[{path:"",component:Z}];export{ke as default};
