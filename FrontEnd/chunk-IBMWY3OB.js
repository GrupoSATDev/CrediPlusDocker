import{a as Se}from"./chunk-OVX3NFD3.js";import{a as Ce}from"./chunk-MKBCZZKF.js";import{a as be}from"./chunk-ESE56W36.js";import{a as Ee}from"./chunk-BK4RLMSC.js";import{a as ve}from"./chunk-FSEIAN2B.js";import{a as K}from"./chunk-4WJQLHI3.js";import{a as B}from"./chunk-X5Y573WK.js";import{a as he}from"./chunk-CTPZLWJZ.js";import"./chunk-EKEQAN42.js";import{g as se}from"./chunk-5EJ56Z4T.js";import{a as te,b as ie,c as oe}from"./chunk-CPZFSZTM.js";import"./chunk-6AAUO4WA.js";import{C as fe,E as ge,F as _e,J as G,b as ae,c as re,i as j,l as me,n as v,p as le,q as ce,u as pe,x as de,y as ue}from"./chunk-P24RU7FU.js";import{$ as ee,ea as R,ga as ne,ja as L}from"./chunk-BMFSCGUM.js";import"./chunk-QJN4CBG2.js";import{a as M}from"./chunk-IUELCRM3.js";import{$ as b,$b as D,Ab as S,Cb as P,Ic as U,Jb as N,Kb as c,Lb as I,Mb as J,Oa as i,Pa as A,Tb as $,Y as E,ac as T,ea as C,eb as d,fa as _,gb as a,ka as k,nb as u,rb as s,sb as n,tb as f,ua as x,ub as w,va as y,vb as F,vc as X,wc as Y,xb as W,yc as Z}from"./chunk-WDMQQ6H3.js";import{a as z,d as H}from"./chunk-NEB6MB4Y.js";var we=(()=>{let t=class t{constructor(l,o){this._http=l,this.appSettingService=o}getUsuarios(){return this._http.get(`${this.appSettingService.usuarios.url.base}/Table`)}postUsuarios(l){return delete l.id,this._http.post(`${this.appSettingService.usuarios.url.base}/RegistroEmpresas`,l)}};t.\u0275fac=function(o){return new(o||t)(C(U),C(M))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Fe=(()=>{let t=class t{constructor(l,o){this._http=l,this.appSettingService=o}getTipoUsuarios(){return this._http.get(`${this.appSettingService.tipoUsuarios.url.base}`)}};t.\u0275fac=function(o){return new(o||t)(C(U),C(M))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ie=(()=>{let t=class t{constructor(l,o){this._http=l,this.appSettingService=o}getRoles(){return this._http.get(`${this.appSettingService.roles.url.base}`)}};t.\u0275fac=function(o){return new(o||t)(C(U),C(M))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ue(e,t){if(e&1&&(s(0,"mat-option",26),c(1),n()),e&2){let m=t.$implicit;a("value",m.id),i(),I(m.nombre)}}function Me(e,t){if(e&1&&(w(0),d(1,Ue,2,2,"mat-option",25),F()),e&2){let m=t.ngIf;i(),a("ngForOf",m.data)}}function Ne(e,t){e&1&&f(0,"mat-icon",16),e&2&&a("svgIcon","heroicons_solid:eye")}function Ve(e,t){e&1&&f(0,"mat-icon",16),e&2&&a("svgIcon","heroicons_solid:eye-slash")}function ke(e,t){e&1&&c(0," La contrase\xF1a es requerida!. ")}function Ae(e,t){e&1&&c(0," El m\xEDnimo de caracteres son 5. ")}function $e(e,t){e&1&&c(0," El maximo de caracteres son 20. ")}function je(e,t){if(e&1&&(s(0,"mat-error"),d(1,ke,1,0)(2,Ae,1,0)(3,$e,1,0),n()),e&2){let m=P();i(),u(m.form.get("contrasena").hasError("required")?1:-1),i(),u(m.form.get("contrasena").hasError("minlength")?2:-1),i(),u(m.form.get("contrasena").hasError("maxlength")?3:-1)}}function Re(e,t){e&1&&f(0,"mat-icon",16),e&2&&a("svgIcon","heroicons_solid:eye")}function Le(e,t){e&1&&f(0,"mat-icon",16),e&2&&a("svgIcon","heroicons_solid:eye-slash")}function Ge(e,t){e&1&&c(0," La confirmaci\xF3n de contrase\xF1a es requerida!. ")}function Be(e,t){e&1&&c(0," El m\xEDnimo de caracteres son 5. ")}function Oe(e,t){e&1&&c(0," El maximo de caracteres son 20. ")}function qe(e,t){e&1&&c(0," Las contrase\xF1as no coinciden! ")}function ze(e,t){if(e&1&&(s(0,"mat-error"),d(1,Ge,1,0)(2,Be,1,0)(3,Oe,1,0)(4,qe,1,0),n()),e&2){let m=P();i(),u(m.form.get("confirmaContrasena").hasError("required")?1:-1),i(),u(m.form.get("confirmaContrasena").hasError("minlength")?2:-1),i(),u(m.form.get("confirmaContrasena").hasError("maxlength")?3:-1),i(),u(m.form.get("confirmaContrasena").hasError("passwordMismatchError")?4:-1)}}function He(e,t){if(e&1&&(s(0,"mat-option",26),c(1),n()),e&2){let m=t.$implicit;a("value",m.id),i(),I(m.nombre)}}function Pe(e,t){if(e&1&&(w(0),d(1,He,2,2,"mat-option",25),F()),e&2){let m=t.ngIf;i(),a("ngForOf",m.data)}}function Je(e,t){if(e&1&&(s(0,"mat-option",26),c(1),n()),e&2){let m=t.$implicit;a("value",m.id),i(),I(m.razonSocial)}}function Ke(e,t){if(e&1&&(w(0),d(1,Je,2,2,"mat-option",25),F()),e&2){let m=t.ngIf;i(),a("ngForOf",m.data)}}function Qe(e,t){if(e&1&&(s(0,"mat-option",26),c(1),n()),e&2){let m=t.$implicit;a("value",m.id),i(),I(m.nombre)}}function We(e,t){if(e&1&&(w(0),d(1,Qe,2,2,"mat-option",25),F()),e&2){let m=t.ngIf;i(),a("ngForOf",m.data)}}function Xe(e,t){if(e&1&&(s(0,"mat-option",26),c(1),n()),e&2){let m=t.$implicit;a("value",m.id),i(),I(m.nombre)}}function Ye(e,t){if(e&1&&(w(0),d(1,Xe,2,2,"mat-option",25),F()),e&2){let m=t.ngIf;i(),a("ngForOf",m.data)}}var Q=(()=>{let t=class t{constructor(){this.fb=_(fe),this._locacionService=_(Ce),this.dialogRef=_(te),this.fuseService=_(se),this.estadosDatosService=_(B),this.usuariosService=_(we),this.tipoUsuariosService=_(Fe),this.empresaClienteService=_(Se),this.rolesService=_(Ie),this._matData=_(ie),this.swalService=_(Ee),this.departamentos$=this._locacionService.getDepartamentos().pipe(E(l=>{let o=l.data,r=this._matData;if(o&&!r.edit){this.form.get("idDepartamento").setValue(o[0].id);let p=this.form.get("idDepartamento").value;this.getMunicipios(p)}})),this.tipoUsuarios$=this.tipoUsuariosService.getTipoUsuarios().pipe(E(l=>{let o=l.data,r=this._matData;o&&!r.edit&&this.form.get("idTipoUsuario").setValue(o[0].id)})),this.roles$=this.rolesService.getRoles().pipe(E(l=>{let o=l.data,r=this._matData;o&&!r.edit&&this.form.get("idRol").setValue(o[0].id)})),this.empresas$=this.empresaClienteService.getEmpresasClientesSelect().pipe(E(l=>{let o=l.data,r=this._matData;o&&!r.edit&&this.form.get("idSubEmpresa").setValue(o[0].id)}))}onSelected(l){let o=l.value;this.getMunicipios(o)}getMunicipios(l){this.municipios$=this._locacionService.getMunicipio(l).pipe(E(o=>{let r=o.data,p=this._matData;r&&!p.edit&&this.form.get("idMunicipio").setValue(r[0].id)}))}ngOnInit(){this.createForm()}createForm(){this.form=this.fb.group({id:[null],nombre:["",[v.required]],apellido:["",[v.required]],correo:["",[v.required]],contrasena:["",[v.required,v.minLength(5),v.maxLength(20)]],confirmaContrasena:["",[v.required,v.minLength(5),v.maxLength(20)]],idRol:[""],idSubEmpresa:[""],idTipoUsuario:[""],idDepartamento:[""],idMunicipio:[""]},{validators:Ze("contrasena","confirmaContrasena")})}onSave(){if(this.form.valid)if(this._matData.edit){let o=this.form.getRawValue(),{idDepartamento:p,confirmaContrasena:h}=o,g=H(o,["idDepartamento","confirmaContrasena"]);this.fuseService.open(z({},K)).afterClosed().subscribe(q=>{q==="confirmed"?this.usuariosService.postUsuarios(g).subscribe(V=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},V=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}else{let l=this.form.getRawValue(),{idDepartamento:p,confirmaContrasena:h}=l,g=H(l,["idDepartamento","confirmaContrasena"]);this.fuseService.open(z({},K)).afterClosed().subscribe(q=>{q==="confirmed"?this.usuariosService.postUsuarios(g).subscribe(V=>{console.log(V),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},V=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}closeDialog(){this.dialogRef.close()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=k({type:t,selectors:[["app-form-usuarios-empresas"]],standalone:!0,features:[$],decls:80,vars:36,consts:[["data",""],["passwordField",""],["passwordConfirm",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","lg:flex-row","mb-4","gap-2"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],["matInput","","placeholder","Apellido",3,"formControlName"],["placeholder","Tipo de usuario",3,"formControlName"],[4,"ngIf"],["id","nit","matInput","","placeholder","Correo",3,"formControlName"],["id","contrasena","matInput","","type","password","placeholder","Contrase\xF1a",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","confirmaContrasena","matInput","","type","password","placeholder","Confirmar contrase\xF1a",3,"formControlName"],["placeholder","Rol",3,"formControlName"],["placeholder","Empresa",3,"formControlName"],["placeholder","Departamento",3,"selectionChange","formControlName"],["placeholder","Ciudad",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"lg:w-auto","w-full","lg:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","lg:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,r){if(o&1){let p=W();s(0,"div",3)(1,"div",4)(2,"div",5),c(3),n(),s(4,"form",6)(5,"div",7)(6,"mat-form-field",8)(7,"mat-label"),c(8,"Nombre"),n(),f(9,"input",9),n(),s(10,"mat-form-field",8)(11,"mat-label"),c(12,"Apellido"),n(),f(13,"input",10),n()(),s(14,"div",7)(15,"mat-form-field",8)(16,"mat-label"),c(17,"Tipo de usuario"),n(),s(18,"mat-select",11,0),d(20,Me,2,1,"ng-container",12),D(21,"async"),n()(),s(22,"mat-form-field",8)(23,"mat-label"),c(24,"Correo"),n(),f(25,"input",13),n()(),s(26,"div",7)(27,"mat-form-field",8)(28,"mat-label"),c(29,"Contrase\xF1a"),n(),f(30,"input",14,1),s(32,"button",15),S("click",function(){x(p);let g=N(31);return y(g.type==="password"?g.type="text":g.type="password")}),d(33,Ne,1,1,"mat-icon",16)(34,Ve,1,1,"mat-icon",16),n(),d(35,je,4,3,"mat-error"),n(),s(36,"mat-form-field",8)(37,"mat-label"),c(38,"Confirmar contrase\xF1a"),n(),f(39,"input",17,2),s(41,"button",15),S("click",function(){x(p);let g=N(40);return y(g.type==="password"?g.type="text":g.type="password")}),d(42,Re,1,1,"mat-icon",16)(43,Le,1,1,"mat-icon",16),n(),d(44,ze,5,4,"mat-error"),n()(),s(45,"div",7)(46,"mat-form-field",8)(47,"mat-label"),c(48,"Rol"),n(),s(49,"mat-select",18,0),d(51,Pe,2,1,"ng-container",12),D(52,"async"),n()(),s(53,"mat-form-field",8)(54,"mat-label"),c(55,"Empresa"),n(),s(56,"mat-select",19),d(57,Ke,2,1,"ng-container",12),D(58,"async"),n()()(),s(59,"div",7)(60,"mat-form-field",8)(61,"mat-label"),c(62,"Departamento"),n(),s(63,"mat-select",20,0),S("selectionChange",function(g){return x(p),y(r.onSelected(g))}),d(65,We,2,1,"ng-container",12),D(66,"async"),n()(),s(67,"mat-form-field",8)(68,"mat-label"),c(69,"Ciudad"),n(),s(70,"mat-select",21),d(71,Ye,2,1,"ng-container",12),D(72,"async"),n()()(),s(73,"div",22)(74,"button",23),S("click",function(){return x(p),y(r.closeDialog())}),s(75,"span"),c(76," Cancelar "),n()(),s(77,"button",24),S("click",function(){return x(p),y(r.onSave())}),s(78,"span"),c(79),n()()()()()()}if(o&2){let p=N(31),h=N(40);i(3),J(" ",r._matData.edit?"Actualizar usuario":"Agregar usuario"," "),i(),a("formGroup",r.form),i(5),a("formControlName","nombre"),i(4),a("formControlName","apellido"),i(5),a("formControlName","idTipoUsuario"),i(2),a("ngIf",T(21,26,r.tipoUsuarios$)),i(5),a("formControlName","correo"),i(5),a("formControlName","contrasena"),i(3),u(p.type==="password"?33:-1),i(),u(p.type==="text"?34:-1),i(),u(r.form.get("contrasena").dirty||r.form.get("contrasena").touched?35:-1),i(4),a("formControlName","confirmaContrasena"),i(3),u(h.type==="password"?42:-1),i(),u(h.type==="text"?43:-1),i(),u(r.form.get("confirmaContrasena").dirty||r.form.get("confirmaContrasena").touched?44:-1),i(5),a("formControlName","idRol"),i(2),a("ngIf",T(52,28,r.roles$)),i(5),a("formControlName","idSubEmpresa"),i(),a("ngIf",T(58,30,r.empresas$)),i(6),a("formControlName","idDepartamento"),i(2),a("ngIf",T(66,32,r.departamentos$)),i(5),a("formControlName","idMunicipio"),i(),a("ngIf",T(72,34,r.municipios$)),i(3),a("color","primary"),i(3),a("color","primary"),i(2),J(" ",r._matData.edit?"Actualizar":"Guardar"," ")}},dependencies:[ge,pe,me,le,ce,j,G,ae,_e,de,ue,Z,ee,he,X,Y,R,L,ne,re],styles:[".custom-dialog-container{width:100%}@media (min-width: 600px){  .custom-dialog-container{width:60%}}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let e=t;return e})();function Ze(e,t){return m=>{let l=m.get(e),o=m.get(t);return o?.errors&&!o.errors.passwordMismatchError||(l?.value!==o?.value?o?.setErrors({passwordMismatchError:!0}):o?.setErrors(null)),null}}var De=(()=>{let t=class t{constructor(l,o,r){this._matDialog=l,this.estadoDatosService=o,this.generoService=r,this.searchTerm="",this.data=[],this.columns=["Estado","Identificaci\xF3n","Nombre completo","Tel\xE9fono","Empresa","Cargo"],this.columnPropertyMap={Estado:"estado",Identificaci\u00F3n:"numDoc","Nombre completo":"nombreCompleto",Tel\u00E9fono:"telefono",Empresa:"nombreSubEmpresa",Cargo:"cargo"},this.buttons=[{label:"Edit",icon:"edit",action:p=>{console.log("Editing",p),this.selectedData=p,this.onEdit()}}]}onNew(){this._matDialog.open(Q,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(Q,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onSearch(l){let o=l.target;this.searchTerm=o.value.trim().toLowerCase()}};t.\u0275fac=function(o){return new(o||t)(A(oe),A(B),A(be))},t.\u0275cmp=k({type:t,selectors:[["app-grid-usuarios-empresas"]],standalone:!0,features:[$],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(o,r){o&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Usuarios"),n(),s(4,"div",3)(5,"mat-form-field",4),f(6,"mat-icon",5),s(7,"input",6),S("input",function(h){return r.onSearch(h)}),n()(),s(8,"button",7),S("click",function(){return r.onNew()}),f(9,"mat-icon",8),s(10,"span",9),c(11,"Agregar"),n()()()(),s(12,"div",10)(13,"div",11),f(14,"app-custom-table",12),n()()()),o&2&&(i(5),a("subscriptSizing","dynamic"),i(),a("svgIcon","heroicons_solid:magnifying-glass"),i(),a("autocomplete","off")("placeholder","Buscar"),i(),a("color","primary"),i(),a("svgIcon","heroicons_outline:plus"),i(5),a("columns",r.columns)("displayedColumns",r.columns)("columnPropertyMap",r.columnPropertyMap)("data",r.data)("buttons",r.buttons)("searchTerm",r.searchTerm))},dependencies:[ve,R,j,L,G]});let e=t;return e})();var jt=[{path:"",component:De}];export{jt as default};