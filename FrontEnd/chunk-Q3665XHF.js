import{a as w}from"./chunk-SGVUTC7R.js";import{a as fe,b as ge}from"./chunk-D35OUFHA.js";import{a as de}from"./chunk-VPNWUXBJ.js";import{a as ue}from"./chunk-WNV7KYNW.js";import{a as N}from"./chunk-HN2IWLXW.js";import{a as pe}from"./chunk-6B6PMKOT.js";import{a as ce}from"./chunk-CIRWMTLN.js";import{g as te,i as j}from"./chunk-UD2FEJ4L.js";import{a as U,b as X,c as Y}from"./chunk-MDZA5IL6.js";import"./chunk-XP7WEH62.js";import{C as se,F as le,J as y,b as Z,i as E,l as ie,p as oe,q as ae,u as re,x as ne,y as me}from"./chunk-KKJSUWDN.js";import"./chunk-L5AVPIHT.js";import"./chunk-3D4SSKQC.js";import{Ba as ee,ba as Q,wa as M}from"./chunk-H26SRIJU.js";import{Ac as J,Cb as g,Dc as q,Ic as K,Mb as l,Nb as z,Ob as G,Qa as o,Ra as _,Vb as H,Wb as D,_ as P,cc as R,dc as $,gb as b,ha as u,ib as a,ma as S,tb as r,ub as e,vb as p,wa as x,wb as A,xa as C,xb as V,zb as L,zc as W}from"./chunk-IEDNLM77.js";import{a as v,d as k}from"./chunk-NEB6MB4Y.js";function Se(s,m){if(s&1&&(r(0,"mat-option",22),l(1),e()),s&2){let d=m.$implicit;a("value",d.id),o(),z(d.nombre)}}function xe(s,m){if(s&1&&(A(0),b(1,Se,2,2,"mat-option",21),V()),s&2){let d=m.ngIf;o(),a("ngForOf",d.data)}}function Ce(s,m){if(s&1&&(r(0,"mat-option",22),l(1),e()),s&2){let d=m.$implicit;a("value",d.id),o(),z(d.nombre)}}function _e(s,m){if(s&1&&(A(0),b(1,Ce,2,2,"mat-option",21),V()),s&2){let d=m.ngIf;o(),a("ngForOf",d.data)}}var De={validation:!1},O=(()=>{let m=class m{constructor(){this.fb=u(se),this._locacionService=u(de),this.empresasService=u(w),this.dialogRef=u(U),this.fuseService=u(te),this.estadosDatosService=u(N),this.toasService=u(ue),this.departamentos$=this._locacionService.getDepartamentos().pipe(P(n=>{let t=n.data,i=this._matData;if(t&&!i.edit){this.form.get("idDepartamento").setValue(t[0].id);let c=this.form.get("idDepartamento").value;this.getMunicipios(c)}})),this._matData=u(X)}onSelected(n){let t=n.value;this.getMunicipios(t)}getMunicipios(n){this.municipios$=this._locacionService.getMunicipio(n).pipe(P(t=>{let i=t.data,c=this._matData;i&&!c.edit&&this.form.get("idMunicipio").setValue(i[0].id)}))}ngOnInit(){this.createForm();let n=this._matData;if(n.edit){let t=n.data;this.form.patchValue(t);let{idDepartamento:i}=t;this.municipios$=this._locacionService.getMunicipio(i)}}createForm(){this.form=this.fb.group({id:[null],nit:[""],razonSocial:[""],correo:[""],telefono:[""],direccion:[""],idDepartamento:[""],idMunicipio:[""],procMaxPrestamo:[""],procMaxDesembolso:[""]})}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue(),{idDepartamento:c,procMaxPrestamo:f,procMaxDesembolso:h}=t,F=k(t,["idDepartamento","procMaxPrestamo","procMaxDesembolso"]),I=v({procMaxPrestamo:Number(f),procMaxDesembolso:Number(h)},F);this.fuseService.open(v({},j)).afterClosed().subscribe(T=>{T==="confirmed"?this.empresasService.putEmpresa(I).subscribe(B=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let n=this.form.getRawValue(),{idDepartamento:c,procMaxPrestamo:f,procMaxDesembolso:h}=n,F=k(n,["idDepartamento","procMaxPrestamo","procMaxDesembolso"]),I=v({procMaxPrestamo:Number(f),procMaxDesembolso:Number(h)},F);this.fuseService.open(v({},j)).afterClosed().subscribe(T=>{T==="confirmed"?this.empresasService.postEmpresa(I).subscribe(B=>{console.log(B),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro Creado o Actualizado con Exito.",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}closeDialog(){this.dialogRef.close()}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=S({type:m,selectors:[["app-form-empresas"]],standalone:!0,features:[H([fe(De)]),D],decls:58,vars:26,consts:[["data",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","lg:flex-row","mb-4","gap-2"],["floatLabel","always",1,"w-full"],["id","nit","matInput","","placeholder","Nit",3,"formControlName"],["matInput","","placeholder","Raz\xF3n social",3,"formControlName"],["matInput","","placeholder","Porcentaje maximo","decimalMarker",".",3,"formControlName","thousandSeparator","dropSpecialCharacters","mask"],["matInput","","placeholder","Porcentaje maximo desembolso","decimalMarker",".",3,"formControlName","thousandSeparator","dropSpecialCharacters","mask"],["matInput","","placeholder","Correo electronico",3,"formControlName"],["matInput","","placeholder","Tel\xE9fono",3,"formControlName"],["placeholder","Departamento",3,"selectionChange","formControlName"],[4,"ngIf"],["placeholder","Ciudad",3,"formControlName"],[1,"flex","flex-col","sm:flex-row","mb-4","gap-2"],["matInput","","placeholder","Direcci\xF3n",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"lg:w-auto","w-full","lg:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","lg:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,i){if(t&1){let c=L();r(0,"div",1)(1,"div",2)(2,"div",3),l(3),e(),r(4,"form",4)(5,"div",5)(6,"mat-form-field",6)(7,"mat-label"),l(8,"Nit"),e(),p(9,"input",7),e(),r(10,"mat-form-field",6)(11,"mat-label"),l(12,"Raz\xF3n social"),e(),p(13,"input",8),e()(),r(14,"div",5)(15,"mat-form-field",6)(16,"mat-label"),l(17,"Porcentaje maximo prestamo"),e(),p(18,"input",9),e(),r(19,"mat-form-field",6)(20,"mat-label"),l(21,"Porcentaje maximo desembolso"),e(),p(22,"input",10),e()(),r(23,"div",5)(24,"mat-form-field",6)(25,"mat-label"),l(26,"Correo"),e(),p(27,"input",11),e(),r(28,"mat-form-field",6)(29,"mat-label"),l(30,"Tel\xE9fono"),e(),p(31,"input",12),e()(),r(32,"div",5)(33,"mat-form-field",6)(34,"mat-label"),l(35,"Departamento"),e(),r(36,"mat-select",13,0),g("selectionChange",function(h){return x(c),C(i.onSelected(h))}),b(38,xe,2,1,"ng-container",14),R(39,"async"),e()(),r(40,"mat-form-field",6)(41,"mat-label"),l(42,"Ciudad"),e(),r(43,"mat-select",15),b(44,_e,2,1,"ng-container",14),R(45,"async"),e()()(),r(46,"div",16)(47,"mat-form-field",6)(48,"mat-label"),l(49,"Direcci\xF3n"),e(),p(50,"input",17),e()(),r(51,"div",18)(52,"button",19),g("click",function(){return x(c),C(i.closeDialog())}),r(53,"span"),l(54," Cancelar "),e()(),r(55,"button",20),g("click",function(){return x(c),C(i.onSave())}),r(56,"span"),l(57),e()()()()()()}t&2&&(o(3),G(" ",i._matData.edit?"Actualizar empresa":"Agregar empresa"," "),o(),a("formGroup",i.form),o(5),a("formControlName","nit"),o(4),a("formControlName","razonSocial"),o(5),a("formControlName","procMaxPrestamo")("thousandSeparator","")("dropSpecialCharacters",!0)("mask","separator.6"),o(4),a("formControlName","procMaxDesembolso")("thousandSeparator","")("dropSpecialCharacters",!0)("mask","separator.6"),o(5),a("formControlName","correo"),o(4),a("formControlName","telefono"),o(5),a("formControlName","idDepartamento"),o(2),a("ngIf",$(39,22,i.departamentos$)),o(5),a("formControlName","idMunicipio"),o(),a("ngIf",$(45,24,i.municipios$)),o(6),a("formControlName","direccion"),o(2),a("color","primary"),o(3),a("color","primary"),o(2),G(" ",i._matData.edit?"Actualizar":"Guardar"," "))},dependencies:[E,y,M,Z,ce,Q,J,q,W,le,re,ie,oe,ae,ne,me,ge],styles:[".custom-dialog-container{width:100%}@media (min-width: 600px){  .custom-dialog-container{width:60%}}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let s=m;return s})();var he=(()=>{let m=class m{constructor(n,t,i){this._matDialog=n,this.empresasService=t,this.estadoDatosService=i,this.searchTerm="",this.data=[],this.columns=["Nit","Razon social","Correo","Telefono","Direccion"],this.columnPropertyMap={Nit:"nit","Razon social":"razonSocial",Correo:"correo",Telefono:"telefono",Direccion:"direccion"},this.buttons=[{label:"Edici\xF3n",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open(O,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",width:"50%",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(O,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",width:"50%",disableClose:!0,panelClass:"custom-dialog-container"})}getEmpresas(){this.subcription$=this.empresasService.getEmpresas().subscribe(n=>{this.data=n.data})}ngOnInit(){this.getEmpresas(),this.listenGrid()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getEmpresas()})}onSearch(n){let t=n.target;this.searchTerm=t.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngAfterViewInit(){}};m.\u0275fac=function(t){return new(t||m)(_(Y),_(w),_(N))},m.\u0275cmp=S({type:m,selectors:[["app-grid-empresas"]],standalone:!0,features:[D],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Empresas Maestras"),e(),r(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5),r(7,"input",6),g("input",function(f){return i.onSearch(f)}),e()(),r(8,"button",7),g("click",function(){return i.onNew()}),p(9,"mat-icon",8),r(10,"span",9),l(11,"Agregar"),e()()()(),r(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),e()()()),t&2&&(o(5),a("subscriptSizing","dynamic"),o(),a("svgIcon","heroicons_solid:magnifying-glass"),o(),a("autocomplete","off")("placeholder","Buscar"),o(),a("color","primary"),o(),a("svgIcon","heroicons_outline:plus"),o(5),a("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data)("buttons",i.buttons)("searchTerm",i.searchTerm))},dependencies:[K,E,ee,M,y,pe]});let s=m;return s})();var at=[{path:"",component:he}];export{at as default};
