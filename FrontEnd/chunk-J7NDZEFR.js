import{a as E}from"./chunk-OO5FTOYY.js";import{a as ce}from"./chunk-GHM3KWJ3.js";import{a as ne,b as le,c as me}from"./chunk-6R5HSEPB.js";import{a as G}from"./chunk-6IEWE3OU.js";import{a as de}from"./chunk-ACIMG2KZ.js";import{a as re}from"./chunk-KLTAH632.js";import{a as se}from"./chunk-QDZO5CSW.js";import{a as V}from"./chunk-5ZCUS56W.js";import{a as M}from"./chunk-OFEOPKCC.js";import"./chunk-EPIDILZO.js";import{a as ae}from"./chunk-DH53KH43.js";import"./chunk-IL4J5XQF.js";import{g as Q}from"./chunk-YEBJNSDR.js";import{a as L,b as $,c as Z}from"./chunk-LUFMAAH4.js";import"./chunk-KZTPSQL5.js";import{C as oe,G as _,b as q,e as J,i as T,l as U,p as W,q as X,u as Y,w as ee,x as te,z as ie}from"./chunk-APJW3MZG.js";import{Q as z,R as B,ea as C,ja as K}from"./chunk-LFYNPSYO.js";import"./chunk-FC4BJC6I.js";import"./chunk-FSQXHWP6.js";import{j}from"./chunk-B43ZVACX.js";import{Cb as o,Db as a,Eb as d,Ib as O,Ob as g,Xb as F,Yb as m,Za as s,_a as D,_b as N,dc as R,ec as y,fa as c,ka as S,q as H,rb as l,ua as w,va as x}from"./chunk-32HXX3OB.js";import{a as f,d as b}from"./chunk-NEB6MB4Y.js";var P=(()=>{let n=class n{constructor(){this.fb=c(ie),this.dialogRef=c(L),this.fuseService=c(Q),this.estadosDatosService=c(M),this.toasService=c(se),this._matData=c($),this.datePipe=c(j),this.tasasService=c(E),this.swalService=c(de)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data,{estado:r}=e,p=b(e,["estado"]);this.form.patchValue(f({estado:r=="Activo"},p))}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{porcentaje:r,vigencia:p}=e,v=b(e,["porcentaje","vigencia"]),I=this.datePipe.transform(p,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),k=f({vigencia:I,porcentaje:Number(r)},v);this.fuseService.open(f({},V)).afterClosed().subscribe(A=>{A==="confirmed"?this.tasasService.putTasas(k).subscribe(h=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue(),{porcentaje:r,vigencia:p}=t,v=b(t,["porcentaje","vigencia"]),I=this.datePipe.transform(p,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),k=f({vigencia:I,porcentaje:Number(r)},v);this.fuseService.open(f({},V)).afterClosed().subscribe(A=>{A==="confirmed"?this.tasasService.postTasas(k).subscribe(h=>{console.log(h),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],porcentaje:[""],vigencia:[""],nombre:[""],estado:["true"]})}closeDialog(){this.dialogRef.close()}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=S({type:n,selectors:[["app-form-tasas"]],standalone:!0,features:[R([{provide:B,useClass:ce},{provide:z,useValue:"en-GB"},j]),y],decls:33,vars:10,consts:[["twoStepToggle",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],["matInput","","placeholder","Porcentaje %",3,"formControlName"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"]],template:function(e,i){if(e&1){let r=O();o(0,"div",2)(1,"div",3)(2,"div",4),m(3),a(),o(4,"form",5)(5,"div",6)(6,"div",7),g("click",function(){w(r);let v=F(10);return x(v.toggle())}),o(7,"div",8),m(8),a()(),d(9,"mat-slide-toggle",9,0),a(),o(11,"mat-form-field",10)(12,"mat-label"),m(13,"Nombre"),a(),d(14,"input",11),a(),o(15,"mat-form-field",10)(16,"mat-label"),m(17,"Porcentaje %"),a(),d(18,"input",12),a(),o(19,"mat-form-field",10)(20,"mat-label"),m(21,"Vigencia"),a(),d(22,"input",13)(23,"mat-datepicker-toggle",14)(24,"mat-datepicker",null,1),a(),o(26,"div",15)(27,"button",16),g("click",function(){return w(r),x(i.closeDialog())}),o(28,"span"),m(29," Cancelar "),a()(),o(30,"button",17),g("click",function(){return w(r),x(i.onSave())}),o(31,"span"),m(32," Guardar "),a()()()()()()}if(e&2){let r=F(25);s(3),N(" ",i._matData.edit?"Actualizar tasa":"Agregar tasa"," "),s(),l("formGroup",i.form),s(4),N(" Estado ",i.form.get("estado").value?"Activo":"Inactivo"," "),s(),l("color","primary")("formControlName","estado"),s(5),l("formControlName","nombre"),s(4),l("formControlName","porcentaje"),s(4),l("matDatepicker",r)("formControlName","vigencia"),s(),l("for",r)}},dependencies:[C,T,_,q,oe,Y,U,W,X,ee,te,ne,le,me,J,ae],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:max-content}}"]});let u=n;return u})();var pe=(()=>{let n=class n{constructor(t,e,i){this._matDialog=t,this.estadoDatosService=e,this.tasasService=i,this.data=[],this.columns=["Estado","Nombre","Porcentaje %"],this.columnPropertyMap={Estado:"estado",Nombre:"nombre","Porcentaje %":"porcentaje"},this.buttons=[{label:"Edit",icon:"edit",action:r=>{console.log("Editing",r),this.selectedData=r,this.onEdit()}}]}onNew(){this._matDialog.open(P,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(P,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getTasas(){this.subcription$=this.tasasService.getTass().pipe(H(t=>(t.data.forEach(e=>{e.estado?e.estado=G.ACTIVO:e.estado=G.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getTasas()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTasas(),this.listenGrid()}};n.\u0275fac=function(e){return new(e||n)(D(Z),D(M),D(E))},n.\u0275cmp=S({type:n,selectors:[["app-grid-tasas"]],standalone:!0,features:[y],decls:15,vars:10,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Tasas de inter\xE9s"),a(),o(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),a(),o(8,"button",7),g("click",function(){return i.onNew()}),d(9,"mat-icon",8),o(10,"span",9),m(11,"Agregar"),a()()()(),o(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),a()()()),e&2&&(s(5),l("subscriptSizing","dynamic"),s(),l("svgIcon","heroicons_solid:magnifying-glass"),s(),l("autocomplete","off")("placeholder","Buscar"),s(2),l("svgIcon","heroicons_outline:plus"),s(5),l("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data)("buttons",i.buttons))},dependencies:[re,C,T,K,_]});let u=n;return u})();var Qe=[{path:"",component:pe}];export{Qe as default};
