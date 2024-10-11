import{a as k}from"./chunk-KIYBEPDV.js";import{a as ie,b as oe,c as ae}from"./chunk-B7LJFNKT.js";import{a as ne,b as le}from"./chunk-DNIDWOKC.js";import{a as se}from"./chunk-6IEWE3OU.js";import{a as te}from"./chunk-AVIANEB4.js";import{a as re}from"./chunk-CQJY43M3.js";import{a as y}from"./chunk-OFEOPKCC.js";import"./chunk-CHOSRW5W.js";import{a as ee}from"./chunk-ACIMG2KZ.js";import{a as z}from"./chunk-H7DTTKLU.js";import"./chunk-33XTDNRI.js";import{g as W}from"./chunk-QS2WZY2K.js";import{a as O,b as j,c as B}from"./chunk-JND367CQ.js";import"./chunk-7U4JZNVG.js";import{C as Z,G as D,b as H,e as $,i as C,l as U,p as q,q as J,u as K,w as Q,x as X,z as Y}from"./chunk-JLNARVDU.js";import{ea as x,ja as L}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import"./chunk-HHDBYFMG.js";import{j as _,l as T}from"./chunk-NP3GUERB.js";import{Cb as i,Db as t,Eb as d,Ib as G,Ob as v,Xb as R,Yb as n,Za as r,_a as b,_b as V,dc as S,ec as I,fa as c,ka as g,q as P,rb as o,ua as F,va as N}from"./chunk-32HXX3OB.js";import{a as f,d as M}from"./chunk-NEB6MB4Y.js";var pe={validation:!1},A=(()=>{let m=class m{constructor(){this.fb=c(Y),this.dialogRef=c(O),this.fuseService=c(W),this.estadosDatosService=c(y),this.toasService=c(re),this.capitalService=c(k),this._matData=c(j),this.swalService=c(ee)}ngOnInit(){this.createForm();let a=this._matData;if(a.edit){let e=a.data;this.form.patchValue(e)}}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{rubroInversion:s}=e,u=M(e,["rubroInversion"]),w=f({rubroInversion:Number(s)},u);this.fuseService.open(f({},z)).afterClosed().subscribe(E=>{E==="confirmed"?this.capitalService.putCapitales(w).subscribe(h=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let a=this.form.getRawValue(),{rubroInversion:s}=a,u=M(a,["rubroInversion"]),w=f({rubroInversion:Number(s)},u);this.fuseService.open(f({},z)).afterClosed().subscribe(E=>{E==="confirmed"?this.capitalService.postCapitales(w).subscribe(h=>{console.log(h),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},h=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nombreInversor:[""],rubroInversion:[""],detalleInversion:[""],fuenteIngresoProveedor:[""],tasaInteresProveedor:[""],tasaInteresInversor:[""],plazoPagoProveedor:[""],plazoPagoInversor:[""]})}closeDialog(){this.dialogRef.close()}};m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=g({type:m,selectors:[["app-form-capital-inversion"]],standalone:!0,features:[S([ne(pe)]),I],decls:56,vars:25,consts:[["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"font-bold","mb-4","text-2xl"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Inversor",3,"formControlName"],["matInput","","placeholder","Valor","thousandSeparator",".",3,"formControlName","mask"],["matInput","","placeholder","Valor",3,"formControlName","decimalMarker","thousandSeparator","dropSpecialCharacters","mask"],["matInput","","placeholder","Plazo de pago",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["matInput","","placeholder","Detalle inversi\xF3n",3,"formControlName"],["matInput","","placeholder","Origen del rubro (Proveedor)",3,"formControlName"],["matInput","","placeholder","Plazo pago proveedor",3,"matDatepicker","formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"]],template:function(e,l){if(e&1){let s=G();i(0,"div",1)(1,"div",2)(2,"div",3),n(3),t(),i(4,"form",4)(5,"div")(6,"p",5),n(7,"Informaci\xF3n de inversor"),t(),i(8,"mat-form-field",6)(9,"mat-label"),n(10,"Inversor"),t(),d(11,"input",7),t(),i(12,"mat-form-field",6)(13,"mat-label"),n(14,"Rubro a invertir"),t(),d(15,"input",8),t(),i(16,"mat-form-field",6)(17,"mat-label"),n(18,"Tasa de interes inversor"),t(),d(19,"input",9),t(),i(20,"mat-form-field",6)(21,"mat-label"),n(22,"Plazo pago invesor"),t(),d(23,"input",10)(24,"mat-datepicker-toggle",11)(25,"mat-datepicker",null,0),t(),i(27,"mat-form-field",6)(28,"mat-label"),n(29,"Detalle de la inversi\xF3n"),t(),d(30,"textarea",12),t()(),i(31,"div")(32,"p",5),n(33,"Proveedor de origen "),t(),i(34,"mat-form-field",6)(35,"mat-label"),n(36,"Origen del rubro (Proveedor)"),t(),d(37,"input",13),t(),i(38,"mat-form-field",6)(39,"mat-label"),n(40,"Tasa de interes proveedor"),t(),d(41,"input",9),t(),i(42,"mat-form-field",6)(43,"mat-label"),n(44,"Plazo pago proveedor"),t(),d(45,"input",14)(46,"mat-datepicker-toggle",11)(47,"mat-datepicker",null,0),t()(),i(49,"div",15)(50,"button",16),v("click",function(){return F(s),N(l.closeDialog())}),i(51,"span"),n(52," Cancelar "),t()(),i(53,"button",17),v("click",function(){return F(s),N(l.onSave())}),i(54,"span"),n(55," Guardar "),t()()()()()()}if(e&2){let s=R(26);r(3),V(" ",l._matData.edit?"Actualizar capital":"Agregar capital"," "),r(),o("formGroup",l.form),r(7),o("formControlName","nombreInversor"),r(4),o("formControlName","rubroInversion")("mask","separator.0"),r(4),o("formControlName","tasaInteresInversor")("decimalMarker",",")("thousandSeparator",".")("dropSpecialCharacters",!1)("mask","separator.2"),r(4),o("matDatepicker",s)("formControlName","plazoPagoInversor"),r(),o("for",s),r(6),o("formControlName","detalleInversion"),r(7),o("formControlName","fuenteIngresoProveedor"),r(4),o("formControlName","tasaInteresProveedor")("decimalMarker",",")("thousandSeparator",".")("dropSpecialCharacters",!1)("mask","separator.2"),r(4),o("matDatepicker",s)("formControlName","plazoPagoProveedor"),r(),o("for",s),r(4),o("color","primary"),r(3),o("color","primary")}},dependencies:[x,C,D,H,Z,K,U,q,J,Q,X,le,ie,oe,ae,$]});let p=m;return p})();var me=(()=>{let m=class m{constructor(a,e,l){this._matDialog=a,this.estadoDatosService=e,this.capitalService=l,this.datePipe=c(_),this.currencyPipe=c(T),this.data=[],this.columns=["Inversor","Rubro invertido","Rubro disponible","Fecha de retorno","Detalle de inversi\xF3n"],this.columnPropertyMap={Inversor:"nombreInversor","Rubro invertido":"rubroInversion","Rubro disponible":"montoDisponible","Fecha de retorno":"fechaCreacion","Detalle de inversi\xF3n":"detalleInversion"},this.buttons=[{label:"Edit",icon:"edit",action:s=>{console.log("Editing",s),this.selectedData=s,this.onEdit()}}]}onNew(){this._matDialog.open(A,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}onEdit(){this._matDialog.open(A,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%",disableClose:!0})}getCapital(){this.subcription$=this.capitalService.getCapitales().pipe(P(a=>(a.data.forEach(e=>{if(e.estado)return e.estado=se.ACTIVO,e}),a)),P(a=>(a.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.rubroInversion=this.currencyPipe.transform(e.rubroInversion,"USD","symbol","1.2-2")}),a))).subscribe(a=>{this.data=a.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getCapital()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCapital(),this.listenGrid()}};m.\u0275fac=function(e){return new(e||m)(b(B),b(y),b(k))},m.\u0275cmp=g({type:m,selectors:[["app-grid-capital-inversion"]],standalone:!0,features:[S([_,T]),I],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,l){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),n(3,"Capital de Inversi\xF3n"),t(),i(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),t(),i(8,"button",7),v("click",function(){return l.onNew()}),d(9,"mat-icon",8),i(10,"span",9),n(11,"Agregar"),t()()()(),i(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),t()()()),e&2&&(r(5),o("subscriptSizing","dynamic"),r(),o("svgIcon","heroicons_solid:magnifying-glass"),r(),o("autocomplete","off")("placeholder","Buscar"),r(),o("color","primary"),r(),o("svgIcon","heroicons_outline:plus"),r(5),o("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons))},dependencies:[te,x,C,L,D]});let p=m;return p})();var qe=[{path:"",component:me}];export{qe as default};