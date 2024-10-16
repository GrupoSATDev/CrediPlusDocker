import{a as w}from"./chunk-HTL4QT5Y.js";import{a as re,b as ie,c as oe}from"./chunk-B7LJFNKT.js";import{a as ae,b as ne}from"./chunk-DNIDWOKC.js";import{a as se}from"./chunk-6IEWE3OU.js";import{a as le}from"./chunk-ACIMG2KZ.js";import{a as ee}from"./chunk-FMZRTJU7.js";import{a as z,b as te}from"./chunk-2RSQTUPN.js";import{a as y}from"./chunk-OFEOPKCC.js";import"./chunk-33XTDNRI.js";import"./chunk-CHOSRW5W.js";import{g as U}from"./chunk-QS2WZY2K.js";import{a as O,b as j,c as B}from"./chunk-JND367CQ.js";import"./chunk-7U4JZNVG.js";import{C as Z,G as D,b as H,e as $,i as I,l as q,p as J,q as K,u as Q,w as W,x as X,z as Y}from"./chunk-JLNARVDU.js";import{ea as x,ja as L}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import"./chunk-PDEGUYSW.js";import{j as _,l as T}from"./chunk-NP3GUERB.js";import{Cb as i,Db as t,Eb as d,Ib as G,Ob as v,Xb as R,Yb as n,Za as r,_a as b,_b as V,dc as S,ec as C,fa as c,ka as g,q as P,rb as o,ua as F,va as N}from"./chunk-32HXX3OB.js";import{a as f,d as M}from"./chunk-NEB6MB4Y.js";var pe={validation:!1},A=(()=>{let m=class m{constructor(){this.fb=c(Y),this.dialogRef=c(O),this.fuseService=c(U),this.estadosDatosService=c(y),this.toasService=c(te),this.capitalService=c(w),this._matData=c(j),this.swalService=c(le)}ngOnInit(){this.createForm();let a=this._matData;if(a.edit){let e=a.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{rubroInversion:s}=e,u=M(e,["rubroInversion"]),k=f({rubroInversion:Number(s)},u);this.fuseService.open(f({},z)).afterClosed().subscribe(E=>{E==="confirmed"?this.capitalService.putCapitales(k).subscribe(h=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let a=this.form.getRawValue(),{rubroInversion:s}=a,u=M(a,["rubroInversion"]),k=f({rubroInversion:Number(s)},u);this.fuseService.open(f({},z)).afterClosed().subscribe(E=>{E==="confirmed"?this.capitalService.postCapitales(k).subscribe(h=>{console.log(h),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombreInversor:[""],rubroInversion:[""],detalleInversion:[""],fuenteIngresoProveedor:[""],tasaInteresProveedor:[""],tasaInteresInversor:[""],plazoPagoProveedor:[""],plazoPagoInversor:[""]})}closeDialog(){this.dialogRef.close()}};m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=g({type:m,selectors:[["app-form-capital-inversion"]],standalone:!0,features:[S([ae(pe)]),C],decls:61,vars:25,consts:[["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"font-bold","mb-4","text-2xl"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Inversor",3,"formControlName"],["matInput","","placeholder","Valor","thousandSeparator",".",3,"formControlName","mask"],["matInput","","placeholder","Valor",3,"formControlName","decimalMarker","thousandSeparator","dropSpecialCharacters","mask"],["matInput","","placeholder","Plazo de pago",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["matInput","","placeholder","Detalle inversi\xF3n",3,"formControlName"],["matInput","","placeholder","Origen del rubro (Proveedor)",3,"formControlName"],["matInput","","placeholder","Plazo pago proveedor",3,"matDatepicker","formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,l){if(e&1){let s=G();i(0,"div",1)(1,"div",2)(2,"div",3),n(3),t(),i(4,"form",4)(5,"div")(6,"p",5),n(7,"Informaci\xF3n de inversor"),t(),i(8,"div",6)(9,"mat-form-field",7)(10,"mat-label"),n(11,"Inversor"),t(),d(12,"input",8),t(),i(13,"mat-form-field",7)(14,"mat-label"),n(15,"Rubro a invertir"),t(),d(16,"input",9),t()(),i(17,"div",6)(18,"mat-form-field",7)(19,"mat-label"),n(20,"Tasa de interes inversor"),t(),d(21,"input",10),t(),i(22,"mat-form-field",7)(23,"mat-label"),n(24,"Plazo pago invesor"),t(),d(25,"input",11)(26,"mat-datepicker-toggle",12)(27,"mat-datepicker",null,0),t()(),i(29,"div",6)(30,"mat-form-field",7)(31,"mat-label"),n(32,"Detalle de la inversi\xF3n"),t(),d(33,"textarea",13),t()()(),i(34,"div")(35,"p",5),n(36,"Proveedor de origen "),t(),i(37,"div",6)(38,"mat-form-field",7)(39,"mat-label"),n(40,"Origen del rubro (Proveedor)"),t(),d(41,"input",14),t(),i(42,"mat-form-field",7)(43,"mat-label"),n(44,"Tasa de interes proveedor"),t(),d(45,"input",10),t()(),i(46,"div",6)(47,"mat-form-field",7)(48,"mat-label"),n(49,"Plazo pago proveedor"),t(),d(50,"input",15)(51,"mat-datepicker-toggle",12)(52,"mat-datepicker",null,0),t()()(),i(54,"div",16)(55,"button",17),v("click",function(){return F(s),N(l.closeDialog())}),i(56,"span"),n(57," Cancelar "),t()(),i(58,"button",18),v("click",function(){return F(s),N(l.onSave())}),i(59,"span"),n(60," Guardar "),t()()()()()()}if(e&2){let s=R(28);r(3),V(" ",l._matData.edit?"Actualizar capital":"Agregar capital"," "),r(),o("formGroup",l.form),r(8),o("formControlName","nombreInversor"),r(4),o("formControlName","rubroInversion")("mask","separator.0"),r(5),o("formControlName","tasaInteresInversor")("decimalMarker",",")("thousandSeparator",".")("dropSpecialCharacters",!1)("mask","separator.2"),r(4),o("matDatepicker",s)("formControlName","plazoPagoInversor"),r(),o("for",s),r(7),o("formControlName","detalleInversion"),r(8),o("formControlName","fuenteIngresoProveedor"),r(4),o("formControlName","tasaInteresProveedor")("decimalMarker",",")("thousandSeparator",".")("dropSpecialCharacters",!1)("mask","separator.2"),r(5),o("matDatepicker",s)("formControlName","plazoPagoProveedor"),r(),o("for",s),r(4),o("color","primary"),r(3),o("color","primary")}},dependencies:[x,I,D,H,Z,Q,q,J,K,W,X,ne,re,ie,oe,$],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let p=m;return p})();var me=(()=>{let m=class m{constructor(a,e,l){this._matDialog=a,this.estadoDatosService=e,this.capitalService=l,this.datePipe=c(_),this.currencyPipe=c(T),this.data=[],this.columns=["Inversor","Rubro invertido","Rubro disponible","Fecha de retorno","Detalle de inversi\xF3n"],this.columnPropertyMap={Inversor:"nombreInversor","Rubro invertido":"rubroInversion","Rubro disponible":"montoDisponible","Fecha de retorno":"fechaCreacion","Detalle de inversi\xF3n":"detalleInversion"},this.buttons=[{label:"Edit",icon:"edit",action:s=>{console.log("Editing",s),this.selectedData=s,this.onEdit()}}]}onNew(){this._matDialog.open(A,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(A,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getCapital(){this.subcription$=this.capitalService.getCapitales().pipe(P(a=>(a.data.forEach(e=>{if(e.estado)return e.estado=se.ACTIVO,e}),a)),P(a=>(a.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.rubroInversion=this.currencyPipe.transform(e.rubroInversion,"USD","symbol","1.2-2")}),a))).subscribe(a=>{this.data=a.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCapital()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCapital(),this.listenGrid()}};m.\u0275fac=function(e){return new(e||m)(b(B),b(y),b(w))},m.\u0275cmp=g({type:m,selectors:[["app-grid-capital-inversion"]],standalone:!0,features:[S([_,T]),C],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,l){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),n(3,"Capital de Inversi\xF3n"),t(),i(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),t(),i(8,"button",7),v("click",function(){return l.onNew()}),d(9,"mat-icon",8),i(10,"span",9),n(11,"Agregar"),t()()()(),i(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),t()()()),e&2&&(r(5),o("subscriptSizing","dynamic"),r(),o("svgIcon","heroicons_solid:magnifying-glass"),r(),o("autocomplete","off")("placeholder","Buscar"),r(),o("color","primary"),r(),o("svgIcon","heroicons_outline:plus"),r(5),o("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons))},dependencies:[ee,x,I,L,D]});let p=m;return p})();var Je=[{path:"",component:me}];export{Je as default};
