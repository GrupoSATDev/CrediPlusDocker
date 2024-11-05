import{a as w}from"./chunk-P6WEQ7U2.js";import{a as ie,b as re,c as oe}from"./chunk-VMONEH2L.js";import{a as ae,b as ne}from"./chunk-5E3BI53K.js";import{a as le}from"./chunk-6IEWE3OU.js";import{a as se}from"./chunk-24W6POED.js";import{a as ee}from"./chunk-HKOJEADL.js";import{a as te}from"./chunk-UFLWJOQO.js";import{a as A}from"./chunk-4WJQLHI3.js";import{a as y}from"./chunk-HDKW2ETT.js";import"./chunk-YRFWKKCQ.js";import"./chunk-ZVTEZKTX.js";import{g as U}from"./chunk-WPQBWK4Z.js";import{a as j,b as O,c as B}from"./chunk-4EGREALI.js";import"./chunk-D266PZ43.js";import{C as Z,G as D,b as H,e as $,i as I,l as q,p as J,q as K,u as Q,w as W,x as X,z as Y}from"./chunk-BFUN2CON.js";import{ea as x,ja as L}from"./chunk-PKP5UGVL.js";import"./chunk-NSFGWBZH.js";import"./chunk-X4MAXHGU.js";import{j as P,m as T}from"./chunk-D7SIZTGA.js";import{$b as m,Fb as o,Gb as i,Hb as d,Lb as R,Rb as v,_b as V,ab as r,bb as b,bc as z,ga as c,hc as S,ic as C,la as g,q as F,ub as a,wa as _,xa as N}from"./chunk-KIIQGHZ6.js";import{a as f,d as E}from"./chunk-NEB6MB4Y.js";var pe={validation:!1},G=(()=>{let s=class s{constructor(){this.fb=c(Y),this.dialogRef=c(j),this.fuseService=c(U),this.estadosDatosService=c(y),this.toasService=c(te),this.capitalService=c(w),this._matData=c(O),this.swalService=c(se)}ngOnInit(){this.createForm();let t=this._matData;if(t.edit){let e=t.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{rubroInversion:l}=e,u=E(e,["rubroInversion"]),k=f({rubroInversion:Number(l)},u);this.fuseService.open(f({},A)).afterClosed().subscribe(M=>{M==="confirmed"?this.capitalService.putCapitales(k).subscribe(h=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let t=this.form.getRawValue(),{rubroInversion:l}=t,u=E(t,["rubroInversion"]),k=f({rubroInversion:Number(l)},u);this.fuseService.open(f({},A)).afterClosed().subscribe(M=>{M==="confirmed"?this.capitalService.postCapitales(k).subscribe(h=>{console.log(h),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombreInversor:[""],rubroInversion:[""],detalleInversion:[""],tasaInteresInversor:[""],plazoPagoInversor:[""]})}closeDialog(){this.dialogRef.close()}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=g({type:s,selectors:[["app-form-capital-inversion"]],standalone:!0,features:[S([ae(pe)]),C],decls:41,vars:16,consts:[["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"font-bold","mb-4","text-2xl"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Inversor",3,"formControlName"],["matInput","","placeholder","Valor","thousandSeparator",".",3,"formControlName","mask"],["matInput","","placeholder","Valor",3,"formControlName","decimalMarker","thousandSeparator","dropSpecialCharacters","mask"],["matInput","","placeholder","Plazo de pago",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["matInput","","placeholder","Detalle inversi\xF3n",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,n){if(e&1){let l=R();o(0,"div",1)(1,"div",2)(2,"div",3),m(3),i(),o(4,"form",4)(5,"div")(6,"p",5),m(7,"Informaci\xF3n de inversor"),i(),o(8,"div",6)(9,"mat-form-field",7)(10,"mat-label"),m(11,"Inversor"),i(),d(12,"input",8),i(),o(13,"mat-form-field",7)(14,"mat-label"),m(15,"Rubro a invertir"),i(),d(16,"input",9),i()(),o(17,"div",6)(18,"mat-form-field",7)(19,"mat-label"),m(20,"Tasa de interes inversor"),i(),d(21,"input",10),i(),o(22,"mat-form-field",7)(23,"mat-label"),m(24,"Plazo pago invesor"),i(),d(25,"input",11)(26,"mat-datepicker-toggle",12)(27,"mat-datepicker",null,0),i()(),o(29,"div",6)(30,"mat-form-field",7)(31,"mat-label"),m(32,"Detalle de la inversi\xF3n"),i(),d(33,"textarea",13),i()()(),o(34,"div",14)(35,"button",15),v("click",function(){return _(l),N(n.closeDialog())}),o(36,"span"),m(37," Cancelar "),i()(),o(38,"button",16),v("click",function(){return _(l),N(n.onSave())}),o(39,"span"),m(40," Guardar "),i()()()()()()}if(e&2){let l=V(28);r(3),z(" ",n._matData.edit?"Actualizar capital":"Agregar capital"," "),r(),a("formGroup",n.form),r(8),a("formControlName","nombreInversor"),r(4),a("formControlName","rubroInversion")("mask","separator.0"),r(5),a("formControlName","tasaInteresInversor")("decimalMarker",",")("thousandSeparator",".")("dropSpecialCharacters",!1)("mask","separator.2"),r(4),a("matDatepicker",l)("formControlName","plazoPagoInversor"),r(),a("for",l),r(7),a("formControlName","detalleInversion"),r(2),a("color","primary"),r(3),a("color","primary")}},dependencies:[x,I,D,H,Z,Q,q,J,K,W,X,ne,ie,re,oe,$],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let p=s;return p})();var me=(()=>{let s=class s{constructor(t,e,n){this._matDialog=t,this.estadoDatosService=e,this.capitalService=n,this.datePipe=c(P),this.currencyPipe=c(T),this.data=[],this.columns=["Inversor","Rubro invertido","Rubro disponible","Fecha de retorno","Detalle de inversi\xF3n"],this.columnPropertyMap={Inversor:"nombreInversor","Rubro invertido":"rubroInversion","Rubro disponible":"montoDisponible","Fecha de retorno":"fechaCreacion","Detalle de inversi\xF3n":"detalleInversion"},this.buttons=[{label:"Edit",icon:"edit",action:l=>{console.log("Editing",l),this.selectedData=l,this.onEdit()}}]}onNew(){this._matDialog.open(G,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(G,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getCapital(){this.subcription$=this.capitalService.getCapitales().pipe(F(t=>(t.data.forEach(e=>{if(e.estado)return e.estado=le.ACTIVO,e}),t)),F(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.rubroInversion=this.currencyPipe.transform(e.rubroInversion,"USD","symbol","1.2-2")}),t))).subscribe(t=>{this.data=t.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCapital()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCapital(),this.listenGrid()}};s.\u0275fac=function(e){return new(e||s)(b(B),b(y),b(w))},s.\u0275cmp=g({type:s,selectors:[["app-grid-capital-inversion"]],standalone:!0,features:[S([P,T]),C],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Capital de Inversi\xF3n"),i(),o(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),i(),o(8,"button",7),v("click",function(){return n.onNew()}),d(9,"mat-icon",8),o(10,"span",9),m(11,"Agregar"),i()()()(),o(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),i()()()),e&2&&(r(5),a("subscriptSizing","dynamic"),r(),a("svgIcon","heroicons_solid:magnifying-glass"),r(),a("autocomplete","off")("placeholder","Buscar"),r(),a("color","primary"),r(),a("svgIcon","heroicons_outline:plus"),r(5),a("columns",n.columns)("displayedColumns",n.columns)("columnPropertyMap",n.columnPropertyMap)("data",n.data)("buttons",n.buttons))},dependencies:[ee,x,I,L,D]});let p=s;return p})();var Je=[{path:"",component:me}];export{Je as default};
