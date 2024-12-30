import{a as k}from"./chunk-O6ZO6FD4.js";import{a as ue,b as fe,c as ge}from"./chunk-JDA76RF6.js";import{a as he}from"./chunk-N3QIRYNR.js";import{a as de,b as pe}from"./chunk-XVIRI3LF.js";import{a as ce}from"./chunk-QKXBZ27Z.js";import{a as j}from"./chunk-K7UKSVEC.js";import{a as O}from"./chunk-6IEWE3OU.js";import{a as me}from"./chunk-L5Y3WK7D.js";import"./chunk-BW2UNIQM.js";import{a as se}from"./chunk-4HNTIYYB.js";import{a as le}from"./chunk-QETDVRLC.js";import{g as X,i as G}from"./chunk-YDAJC2H3.js";import{a as q,b as J,c as K}from"./chunk-C7ANG7GI.js";import"./chunk-566EJEQN.js";import{C as re,F as ne,J as _,b as Q,e as U,i as M,l as Z,p as ee,q as te,u as ae,x as ie,y as oe}from"./chunk-NFNLINIV.js";import"./chunk-32OSWJVT.js";import{Q as Y,R as $,ga as y,la as W}from"./chunk-IP22JCCO.js";import"./chunk-VFBDOJ4Z.js";import"./chunk-ZKYOPOAZ.js";import{Cb as v,Ec as V,Lb as A,Mb as m,Ob as P,Qa as n,Ra as C,Vb as H,Wb as T,ha as p,ib as s,ma as D,q as L,tb as a,ub as t,vb as c,wa as w,xa as x,zb as B}from"./chunk-VNCXNJPE.js";import{a as h,d as S}from"./chunk-NEB6MB4Y.js";var Se={validation:!1},z=(()=>{let l=class l{constructor(){this.fb=p(re),this.dialogRef=p(q),this.fuseService=p(X),this.estadosDatosService=p(j),this.toasService=p(ce),this._matData=p(J),this.datePipe=p(V),this.tasasService=p(k),this.swalService=p(le)}ngOnInit(){this.createForm();let i=this._matData;if(i.edit){let e=i.data,{estado:r,vigencia:d}=e,g=S(e,["estado","vigencia"]),u=new Date(d);u.setMinutes(u.getMinutes()+u.getTimezoneOffset()),this.form.patchValue(h({estado:r=="Activo",vigencia:u},g)),this.currentValuePorcentaje=h({},this.form.get("porcentaje"))}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{porcentaje:r,porcentajeMensual:d,porcentajeDiario:g,vigencia:u}=e,E=S(e,["porcentaje","porcentajeMensual","porcentajeDiario","vigencia"]),I=this.datePipe.transform(u,"yyyy-MM-dd"),b=h({vigencia:I,porcentaje:parseFloat(r),porcentajeMensual:parseFloat(d),porcentajeDiario:parseFloat(g)},E);this.fuseService.open(h({},G)).afterClosed().subscribe(F=>{F==="confirmed"?this.tasasService.putTasas(b).subscribe(N=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},N=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let i=this.form.getRawValue(),{porcentaje:r,porcentajeMensual:d,porcentajeDiario:g,vigencia:u}=i,E=S(i,["porcentaje","porcentajeMensual","porcentajeDiario","vigencia"]),I=this.datePipe.transform(u,"yyyy-MM-dd"),b=h({vigencia:I,porcentaje:parseFloat(r),porcentajeMensual:parseFloat(d),porcentajeDiario:parseFloat(g)},E),R=this.fuseService.open(h({},G));console.log(b),R.afterClosed().subscribe(F=>{F==="confirmed"?this.tasasService.postTasas(b).subscribe(N=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},N=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],porcentaje:[""],porcentajeMensual:[""],porcentajeDiario:[""],vigencia:[""],nombre:[""],estado:["true"]})}closeDialog(){this.dialogRef.close()}};l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=D({type:l,selectors:[["app-form-tasas"]],standalone:!0,features:[H([{provide:$,useClass:he},{provide:Y,useValue:"en-GB"},V,de(Se)]),T],decls:44,vars:15,consts:[["twoStepToggle",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],[1,"flex","flex-col","lg:flex-row","mb-4","gap-2"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],["matInput","","placeholder","Tasa efectiva anual","mask","separator.6","thousandSeparator","","decimalMarker",".",3,"formControlName","dropSpecialCharacters"],["matInput","","placeholder","Tasa efectiva mensual","mask","separator.6","thousandSeparator","","decimalMarker",".",3,"formControlName","dropSpecialCharacters"],["matInput","","placeholder","Tasa efectiva diaria","mask","separator.6","thousandSeparator","","decimalMarker",".",3,"formControlName","dropSpecialCharacters"],["matInput","","placeholder","DD/MM/YYYY",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"]],template:function(e,o){if(e&1){let r=B();a(0,"div",2)(1,"div",3)(2,"div",4),m(3),t(),a(4,"form",5)(5,"div",6)(6,"div",7),v("click",function(){w(r);let g=A(10);return x(g.toggle())}),a(7,"div",8),m(8),t()(),c(9,"mat-slide-toggle",9,0),t(),a(11,"div",10)(12,"mat-form-field",11)(13,"mat-label"),m(14,"Nombre"),t(),c(15,"input",12),t()(),a(16,"div",10)(17,"mat-form-field",11)(18,"mat-label"),m(19,"Tasa efectiva anual"),t(),c(20,"input",13),t(),a(21,"mat-form-field",11)(22,"mat-label"),m(23,"Tasa efectiva mensual"),t(),c(24,"input",14),t()(),a(25,"div",10)(26,"mat-form-field",11)(27,"mat-label"),m(28,"Tasa efectiva diaria"),t(),c(29,"input",15),t(),a(30,"mat-form-field",11)(31,"mat-label"),m(32,"Vigencia"),t(),c(33,"input",16)(34,"mat-datepicker-toggle",17)(35,"mat-datepicker",null,1),t()(),a(37,"div",18)(38,"button",19),v("click",function(){return w(r),x(o.closeDialog())}),a(39,"span"),m(40," Cancelar "),t()(),a(41,"button",20),v("click",function(){return w(r),x(o.onSave())}),a(42,"span"),m(43," Guardar "),t()()()()()()}if(e&2){let r=A(36);n(3),P(" ",o._matData.edit?"Actualizar tasa":"Agregar tasa"," "),n(),s("formGroup",o.form),n(4),P(" Estado ",o.form.get("estado").value?"Activo":"Inactivo"," "),n(),s("color","primary")("formControlName","estado"),n(6),s("formControlName","nombre"),n(5),s("formControlName","porcentaje")("dropSpecialCharacters",!0),n(4),s("formControlName","porcentajeMensual")("dropSpecialCharacters",!0),n(5),s("formControlName","porcentajeDiario")("dropSpecialCharacters",!0),n(4),s("matDatepicker",r)("formControlName","vigencia"),n(),s("for",r)}},dependencies:[y,M,_,Q,ne,ae,Z,ee,te,ie,oe,ue,fe,ge,U,se,pe],styles:[".custom-dialog-container{width:100%}@media (min-width: 600px){  .custom-dialog-container{width:60%}}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let f=l;return f})();var ve=(()=>{let l=class l{constructor(i,e,o){this._matDialog=i,this.estadoDatosService=e,this.tasasService=o,this.searchTerm="",this.data=[],this.columns=["Estado","Nombre","Porcentaje anual %","Porcentaje mensual %","Porcentaje diario %"],this.columnPropertyMap={Estado:"estado",Nombre:"nombre","Porcentaje anual %":"porcentaje","Porcentaje mensual %":"porcentajeMensual","Porcentaje diario %":"porcentajeDiario"},this.buttons=[{label:"Edit",icon:"edit",action:r=>{console.log("Editing",r),this.selectedData=r,this.onEdit()}}]}onNew(){this._matDialog.open(z,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(z,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getTasas(){this.subcription$=this.tasasService.getTass().pipe(L(i=>(i.data.forEach(e=>{e.estado?e.estado=O.ACTIVO:e.estado=O.INACTIVO}),i))).subscribe(i=>{this.data=i.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getTasas()})}onSearch(i){let e=i.target;this.searchTerm=e.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTasas(),this.listenGrid()}};l.\u0275fac=function(e){return new(e||l)(C(K),C(j),C(k))},l.\u0275cmp=D({type:l,selectors:[["app-grid-tasas"]],standalone:!0,features:[T],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Tasas de inter\xE9s"),t(),a(4,"div",3)(5,"mat-form-field",4),c(6,"mat-icon",5),a(7,"input",6),v("input",function(d){return o.onSearch(d)}),t()(),a(8,"button",7),v("click",function(){return o.onNew()}),c(9,"mat-icon",8),a(10,"span",9),m(11,"Agregar"),t()()()(),a(12,"div",10)(13,"div",11),c(14,"app-custom-table",12),t()()()),e&2&&(n(5),s("subscriptSizing","dynamic"),n(),s("svgIcon","heroicons_solid:magnifying-glass"),n(),s("autocomplete","off")("placeholder","Buscar"),n(2),s("svgIcon","heroicons_outline:plus"),n(5),s("columns",o.columns)("displayedColumns",o.columns)("columnPropertyMap",o.columnPropertyMap)("data",o.data)("buttons",o.buttons)("searchTerm",o.searchTerm))},dependencies:[me,y,M,W,_]});let f=l;return f})();var tt=[{path:"",component:ve}];export{tt as default};
