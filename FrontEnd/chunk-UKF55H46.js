import{a as k}from"./chunk-6OCF44QB.js";import{a as ne,b as le,c as me}from"./chunk-NC4T4CB6.js";import{a as ce}from"./chunk-3L6CDPYN.js";import{a as de,b as pe}from"./chunk-EU232K5P.js";import{a as P}from"./chunk-6IEWE3OU.js";import{a as ue}from"./chunk-24W6POED.js";import{a as se}from"./chunk-UFLWJOQO.js";import{a as re}from"./chunk-QSY2X5AG.js";import{a as V}from"./chunk-4WJQLHI3.js";import{a as M}from"./chunk-HDKW2ETT.js";import"./chunk-QVWBKL7G.js";import{a as oe}from"./chunk-6IMELV5A.js";import"./chunk-ZVTEZKTX.js";import{g as Q}from"./chunk-WPQBWK4Z.js";import{a as B,b as $,c as Z}from"./chunk-4EGREALI.js";import"./chunk-D266PZ43.js";import{C as ie,F as ae,J as _,b as q,e as J,i as C,l as U,p as W,q as X,u as Y,x as ee,y as te}from"./chunk-AHLZYED5.js";import{Q as R,R as L,ea as y,ja as K}from"./chunk-PKP5UGVL.js";import"./chunk-NSFGWBZH.js";import"./chunk-X4MAXHGU.js";import{j}from"./chunk-D7SIZTGA.js";import{$b as m,Fb as o,Gb as r,Hb as p,Lb as z,Rb as v,_b as A,ab as s,bb as x,bc as F,ga as d,hc as H,ic as T,la as S,q as O,ub as l,wa as w,xa as D}from"./chunk-KIIQGHZ6.js";import{a as h,d as b}from"./chunk-NEB6MB4Y.js";var ve={validation:!1},G=(()=>{let n=class n{constructor(){this.fb=d(ie),this.dialogRef=d(B),this.fuseService=d(Q),this.estadosDatosService=d(M),this.toasService=d(se),this._matData=d($),this.datePipe=d(j),this.tasasService=d(k),this.swalService=d(ue)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data,{estado:a,vigencia:c}=e,g=b(e,["estado","vigencia"]),u=new Date(c);u.setMinutes(u.getMinutes()+u.getTimezoneOffset()),this.form.patchValue(h({estado:a=="Activo",vigencia:u},g)),this.currentValuePorcentaje=h({},this.form.get("porcentaje"))}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{porcentaje:a,vigencia:c}=e,g=b(e,["porcentaje","vigencia"]),u=this.datePipe.transform(c,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),E=h({vigencia:u,porcentaje:this.currentValuePorcentaje.value==a?a:Number(a/100)},g);this.fuseService.open(h({},V)).afterClosed().subscribe(I=>{I==="confirmed"?this.tasasService.putTasas(E).subscribe(N=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},N=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue(),{porcentaje:a,vigencia:c}=t,g=b(t,["porcentaje","vigencia"]),u=this.datePipe.transform(c,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),E=h({vigencia:u,porcentaje:Number(a/100)},g);this.fuseService.open(h({},V)).afterClosed().subscribe(I=>{I==="confirmed"?this.tasasService.postTasas(E).subscribe(N=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},N=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],porcentaje:[""],vigencia:[""],nombre:[""],estado:["true"]})}closeDialog(){this.dialogRef.close()}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=S({type:n,selectors:[["app-form-tasas"]],standalone:!0,features:[H([{provide:L,useClass:ce},{provide:R,useValue:"en-GB"},j,de(ve)]),T],decls:33,vars:12,consts:[["twoStepToggle",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],["matInput","","placeholder","Porcentaje %","thousandSeparator",".",3,"formControlName","mask","dropSpecialCharacters"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"]],template:function(e,i){if(e&1){let a=z();o(0,"div",2)(1,"div",3)(2,"div",4),m(3),r(),o(4,"form",5)(5,"div",6)(6,"div",7),v("click",function(){w(a);let g=A(10);return D(g.toggle())}),o(7,"div",8),m(8),r()(),p(9,"mat-slide-toggle",9,0),r(),o(11,"mat-form-field",10)(12,"mat-label"),m(13,"Nombre"),r(),p(14,"input",11),r(),o(15,"mat-form-field",10)(16,"mat-label"),m(17,"Porcentaje %"),r(),p(18,"input",12),r(),o(19,"mat-form-field",10)(20,"mat-label"),m(21,"Vigencia"),r(),p(22,"input",13)(23,"mat-datepicker-toggle",14)(24,"mat-datepicker",null,1),r(),o(26,"div",15)(27,"button",16),v("click",function(){return w(a),D(i.closeDialog())}),o(28,"span"),m(29," Cancelar "),r()(),o(30,"button",17),v("click",function(){return w(a),D(i.onSave())}),o(31,"span"),m(32," Guardar "),r()()()()()()}if(e&2){let a=A(25);s(3),F(" ",i._matData.edit?"Actualizar tasa":"Agregar tasa"," "),s(),l("formGroup",i.form),s(4),F(" Estado ",i.form.get("estado").value?"Activo":"Inactivo"," "),s(),l("color","primary")("formControlName","estado"),s(5),l("formControlName","nombre"),s(4),l("formControlName","porcentaje")("mask","9.00")("dropSpecialCharacters",!0),s(4),l("matDatepicker",a)("formControlName","vigencia"),s(),l("for",a)}},dependencies:[y,C,_,q,ae,Y,U,W,X,ee,te,ne,le,me,J,oe,pe],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:max-content}}"]});let f=n;return f})();var fe=(()=>{let n=class n{constructor(t,e,i){this._matDialog=t,this.estadoDatosService=e,this.tasasService=i,this.searchTerm="",this.data=[],this.columns=["Estado","Nombre","Porcentaje %"],this.columnPropertyMap={Estado:"estado",Nombre:"nombre","Porcentaje %":"porcentaje"},this.buttons=[{label:"Edit",icon:"edit",action:a=>{console.log("Editing",a),this.selectedData=a,this.onEdit()}}]}onNew(){this._matDialog.open(G,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(G,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getTasas(){this.subcription$=this.tasasService.getTass().pipe(O(t=>(t.data.forEach(e=>{e.estado?e.estado=P.ACTIVO:e.estado=P.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getTasas()})}onSearch(t){let e=t.target;this.searchTerm=e.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTasas(),this.listenGrid()}};n.\u0275fac=function(e){return new(e||n)(x(Z),x(M),x(k))},n.\u0275cmp=S({type:n,selectors:[["app-grid-tasas"]],standalone:!0,features:[T],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Tasas de inter\xE9s"),r(),o(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5),o(7,"input",6),v("input",function(c){return i.onSearch(c)}),r()(),o(8,"button",7),v("click",function(){return i.onNew()}),p(9,"mat-icon",8),o(10,"span",9),m(11,"Agregar"),r()()()(),o(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),r()()()),e&2&&(s(5),l("subscriptSizing","dynamic"),s(),l("svgIcon","heroicons_solid:magnifying-glass"),s(),l("autocomplete","off")("placeholder","Buscar"),s(2),l("svgIcon","heroicons_outline:plus"),s(5),l("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data)("buttons",i.buttons)("searchTerm",i.searchTerm))},dependencies:[re,y,C,K,_]});let f=n;return f})();var Ye=[{path:"",component:fe}];export{Ye as default};
