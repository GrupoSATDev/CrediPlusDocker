import{a as Me,b as Fe,c as Ie,d as A,e as Te}from"./chunk-AO6DLKMK.js";import{a as De}from"./chunk-35D2PYXW.js";import{a as ye}from"./chunk-YMHQQ6B2.js";import{a as R}from"./chunk-6IEWE3OU.js";import{a as z,b as k,c as xe}from"./chunk-D2WA66PX.js";import{a as _e,b as be}from"./chunk-KK37BEM6.js";import{a as ae,b as re,c as ne,k as ce}from"./chunk-MW3QT2ZK.js";import"./chunk-MPMWAGXF.js";import{A as Ee,E as N,a as se,d as me,h as T,i as le,k as fe,o as ue,p as ge,s as ve,u as he,v as Ce,x as Se}from"./chunk-FX7WUQQF.js";import{N as te,O as ie,Y as oe,ba as w,ga as pe}from"./chunk-Y7SWYIYW.js";import"./chunk-QH33P6NP.js";import{a as de}from"./chunk-T2KHVOBS.js";import{f as X,g as Y,i as Z,j as P,r as ee}from"./chunk-7DC5V47F.js";import{$ as J,Cb as n,Db as o,Eb as f,Fb as y,Gb as D,Ib as q,Ob as g,Xb as K,Yb as l,Za as t,Zb as x,_a as b,_b as Q,cc as U,dc as M,ea as O,fa as d,ka as S,lc as F,mc as I,pb as u,q as H,rb as i,ua as E,va as _}from"./chunk-5H7N2SGK.js";import{a as C,d as G}from"./chunk-NEB6MB4Y.js";var Ne=(()=>{let e=class e{constructor(s,r){this._http=s,this.appSettings=r}getTiposEmpresas(){return this._http.get(this.appSettings.tiposEmpresas.url.base)}};e.\u0275fac=function(r){return new(r||e)(O(ee),O(de))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();function Ve(a,e){if(a&1&&(n(0,"mat-option",17),l(1),o()),a&2){let p=e.$implicit;i("value",p.id),t(),x(p.nombre)}}function $e(a,e){if(a&1&&(y(0),u(1,Ve,2,2,"mat-option",16),D()),a&2){let p=e.ngIf;t(),i("ngForOf",p.data)}}function Ge(a,e){if(a&1&&(n(0,"mat-option",17),l(1),o()),a&2){let p=e.$implicit;i("value",p.id),t(),x(p.nombre)}}function Oe(a,e){if(a&1&&(y(0),u(1,Ge,2,2,"mat-option",16),D()),a&2){let p=e.ngIf;t(),i("ngForOf",p.data)}}function Pe(a,e){if(a&1&&(n(0,"mat-option",17),l(1),o()),a&2){let p=e.$implicit;i("value",p.id),t(),x(p.nombre)}}function ze(a,e){if(a&1&&(y(0),u(1,Pe,2,2,"mat-option",16),D()),a&2){let p=e.ngIf;t(),i("ngForOf",p.data)}}var j=(()=>{let e=class e{constructor(){this.fb=d(Se),this._locacionService=d(ye),this.empresasService=d(De),this.dialogRef=d(ae),this.fuseService=d(ce),this.estadosDatosService=d(k),this.toasService=d(xe),this.tiposEmpresaService=d(Ne),this.empresaClienteService=d(A),this.departamentos$=this._locacionService.getDepartamentos(),this.empresas$=this.empresasService.getEmpresas(),this.tiposEmpresas$=this.tiposEmpresaService.getTiposEmpresas(),this._matData=d(re),this.datePipe=d(P)}getMunicipios(s){let r=s.value;this.municipios$=this._locacionService.getMunicipio(r)}ngOnInit(){this.createForm();let s=this._matData;if(s.edit){let r=s.data;this.form.patchValue(r);let{idDepartamento:m}=r;this.municipios$=this._locacionService.getMunicipio(m)}}onSave(){if(this.form.valid)if(this._matData.edit){let r=this.form.getRawValue(),{idDepartamento:c,fechaCorte:v}=r,h=G(r,["idDepartamento","fechaCorte"]),V=this.datePipe.transform(v,"dd/MM/yyyy"),$=C({fechaCorte:V},h);this.fuseService.open(C({},z)).afterClosed().subscribe(L=>{L==="confirmed"?this.empresaClienteService.putEmpresaCliente($).subscribe(W=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let s=this.form.getRawValue(),{idDepartamento:c,idEmpresa:v,fechaCorte:h}=s,V=G(s,["idDepartamento","idEmpresa","fechaCorte"]),$=this.datePipe.transform(h,"dd/MM/yyyy"),B=C({fechaCorte:$},V);this.fuseService.open(C({},z)).afterClosed().subscribe(W=>{W==="confirmed"?this.empresaClienteService.postEmpresaCliente(B).subscribe(Ae=>{console.log(Ae),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nit:[""],razonSocial:[""],correo:[""],telefono:[""],direccion:[""],idDepartamento:[""],idTipoEmpresa:[""],idMunicipio:[""],fechaCorte:[""],estado:[!0]})}closeDialog(){this.dialogRef.close()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=S({type:e,selectors:[["app-form-empresas-clientes"]],standalone:!0,features:[U([{provide:ie,useClass:Te},{provide:te,useValue:"en-GB"},P]),M],decls:58,vars:24,consts:[["data",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[3,"selectionChange","formControlName"],[4,"ngIf"],[3,"formControlName"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-wrap","justify-between"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(r,m){if(r&1){let c=q();n(0,"div",2)(1,"div",3)(2,"div",4),l(3),o(),n(4,"form",5)(5,"mat-form-field",6)(6,"mat-label"),l(7,"Nit"),o(),f(8,"input",7),o(),n(9,"mat-form-field",6)(10,"mat-label"),l(11,"Raz\xF3n social"),o(),f(12,"input",7),o(),n(13,"mat-form-field",6)(14,"mat-label"),l(15,"Correo"),o(),f(16,"input",7),o(),n(17,"mat-form-field",6)(18,"mat-label"),l(19,"Tel\xE9fono"),o(),f(20,"input",7),o(),n(21,"mat-form-field",6)(22,"mat-label"),l(23,"Departamentos"),o(),n(24,"mat-select",8,0),g("selectionChange",function(h){return E(c),_(m.getMunicipios(h))}),u(26,$e,2,1,"ng-container",9),F(27,"async"),o()(),n(28,"mat-form-field",6)(29,"mat-label"),l(30,"Ciudad"),o(),n(31,"mat-select",10),u(32,Oe,2,1,"ng-container",9),F(33,"async"),o()(),n(34,"mat-form-field",6)(35,"mat-label"),l(36,"Direcci\xF3n"),o(),f(37,"input",7),o(),n(38,"mat-form-field",6)(39,"mat-label"),l(40,"Fecha de corte"),o(),f(41,"input",11)(42,"mat-datepicker-toggle",12)(43,"mat-datepicker",null,1),o(),n(45,"mat-form-field",6)(46,"mat-label"),l(47,"Tipos de empresas"),o(),n(48,"mat-select",10),u(49,ze,2,1,"ng-container",9),F(50,"async"),o()(),n(51,"div",13)(52,"button",14),g("click",function(){return E(c),_(m.closeDialog())}),n(53,"span"),l(54," Cancelar "),o()(),n(55,"button",15),g("click",function(){return E(c),_(m.onSave())}),n(56,"span"),l(57," Guardar "),o()()()()()()}if(r&2){let c=K(44);t(3),Q(" ",m._matData.edit?"Actualizar empresa cliente":"Crear empresa cliente"," "),t(),i("formGroup",m.form),t(4),i("formControlName","nit"),t(4),i("formControlName","razonSocial"),t(4),i("formControlName","correo"),t(4),i("formControlName","telefono"),t(4),i("formControlName","idDepartamento"),t(2),i("ngIf",I(27,18,m.departamentos$)),t(5),i("formControlName","idMunicipio"),t(),i("ngIf",I(33,20,m.municipios$)),t(5),i("formControlName","direccion"),t(4),i("matDatepicker",c)("formControlName","fechaCorte"),t(),i("for",c),t(6),i("formControlName","idTipoEmpresa"),t(),i("ngIf",I(50,22,m.tiposEmpresas$)),t(3),i("color","primary"),t(3),i("color","primary")}},dependencies:[w,T,N,se,Ee,ve,fe,ue,ge,he,Ce,Z,oe,_e,X,Y,Fe,Ie,Me,le,me]});let a=e;return a})();var ke=(()=>{let e=class e{constructor(s,r,m){this._matDialog=s,this.empresaClienteService=r,this.estadoDatosService=m,this.data=[],this.columns=["Nit","Razon social","Correo","Telefono","Direccion","Estado"],this.columnPropertyMap={Nit:"nit","Razon social":"razonSocial",Correo:"correo",Telefono:"telefono",Direccion:"direccion",Estado:"estado"},this.buttons=[{label:"Edit",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open(j,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(j,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getEmpresas(){this.subcription$=this.empresaClienteService.getEmpresas().pipe(H(s=>(s.data.forEach(r=>{r.estado?r.estado=R.ACTIVO:r.estado=R.INACTIVO}),s))).subscribe(s=>{this.data=s.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(r=>{r&&this.getEmpresas()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpresas(),this.listenGrid()}};e.\u0275fac=function(r){return new(r||e)(b(ne),b(A),b(k))},e.\u0275cmp=S({type:e,selectors:[["app-grid-empresas-clientes"]],standalone:!0,features:[M],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(r,m){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Empresas Clientes"),o(),n(4,"div",3)(5,"mat-form-field",4),f(6,"mat-icon",5)(7,"input",6),o(),n(8,"button",7),g("click",function(){return m.onNew()}),f(9,"mat-icon",8),n(10,"span",9),l(11,"Crear empresa"),o()()()(),n(12,"div",10)(13,"div",11),f(14,"app-custom-table",12),o()()()),r&2&&(t(5),i("subscriptSizing","dynamic"),t(),i("svgIcon","heroicons_solid:magnifying-glass"),t(),i("autocomplete","off")("placeholder","Buscar"),t(),i("color","primary"),t(),i("svgIcon","heroicons_outline:plus"),t(5),i("columns",m.columns)("displayedColumns",m.columns)("columnPropertyMap",m.columnPropertyMap)("data",m.data)("buttons",m.buttons))},dependencies:[w,T,pe,N,be]});let a=e;return a})();var Ft=[{path:"",component:ke}];export{Ft as default};
