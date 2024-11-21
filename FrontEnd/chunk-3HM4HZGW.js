import{a as ye}from"./chunk-KLZ2O2JW.js";import{a as xe}from"./chunk-44YRV46B.js";import{a as Fe}from"./chunk-FLKBOCHD.js";import{a as Y}from"./chunk-6IEWE3OU.js";import{a as we}from"./chunk-NSEYXXXF.js";import{a as be}from"./chunk-V6LYLNL7.js";import{a as X}from"./chunk-4WJQLHI3.js";import{a as q}from"./chunk-I6O77O5V.js";import{a as Ee}from"./chunk-LY2DLABR.js";import{a as Se}from"./chunk-BMKXXZGX.js";import"./chunk-ZBMXX536.js";import{g as ce}from"./chunk-KAGG2YQO.js";import{a as re,b as ae,c as ne}from"./chunk-QQ53EZKV.js";import"./chunk-M3FFSLWT.js";import{C as he,E as ve,F as Ce,J as B,b as se,c as me,i as O,l as pe,n as C,p as de,q as ue,u as fe,x as ge,y as _e}from"./chunk-TY3VSE3A.js";import{$ as oe,ea as L,ga as le,ja as G}from"./chunk-3AUPHK2F.js";import"./chunk-DQGOCNTQ.js";import{a as N}from"./chunk-RNYZFOOK.js";import{Bc as ie,Cb as v,Eb as A,Lb as T,Lc as M,Mb as c,Nb as U,Ob as j,Qa as o,Ra as k,Vb as R,_ as x,ba as y,bc as I,cc as D,ga as S,gb as d,ha as g,ib as a,ma as $,pb as u,q as Q,tb as m,ub as l,vb as f,wa as E,wb as w,xa as b,xb as F,yc as ee,zb as W,zc as te}from"./chunk-SBESXTFM.js";import{a as J,d as K}from"./chunk-NEB6MB4Y.js";var H=(()=>{let t=class t{constructor(r,i){this._http=r,this.appSettingService=i}getUsuarios(){return this._http.get(`${this.appSettingService.usuarios.url.base}/Table`)}getUsuario(r){return this._http.get(`${this.appSettingService.usuarios.url.base}/${r}`)}postUsuarios(r){return delete r.id,this._http.post(`${this.appSettingService.usuarios.url.base}/RegistroEmpresas`,r)}putUsuario(r){let i=r.id;return delete r.id,this._http.put(`${this.appSettingService.usuarios.url.base}/${i}`,r)}};t.\u0275fac=function(i){return new(i||t)(S(M),S(N))},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ie=(()=>{let t=class t{constructor(r,i){this._http=r,this.appSettingService=i}getTipoUsuarios(){return this._http.get(`${this.appSettingService.tipoUsuarios.url.base}`)}};t.\u0275fac=function(i){return new(i||t)(S(M),S(N))},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var De=(()=>{let t=class t{constructor(r,i){this._http=r,this.appSettingService=i}getRoles(){return this._http.get(`${this.appSettingService.roles.url.base}`)}};t.\u0275fac=function(i){return new(i||t)(S(M),S(N))},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ve(e,t){if(e&1){let n=W();m(0,"div",8)(1,"div",27),v("click",function(){E(n);let i=T(5);return b(i.toggle())}),m(2,"div",28),c(3),l()(),f(4,"mat-slide-toggle",29,3),l()}if(e&2){let n=A();o(3),j(" Estado ",n.form.get("estado").value?"Activo":"Inactivo"," "),o(),a("color","primary")("formControlName","estado")}}function $e(e,t){if(e&1&&(m(0,"mat-option",31),c(1),l()),e&2){let n=t.$implicit;a("value",n.id),o(),U(n.nombre)}}function ke(e,t){if(e&1&&(w(0),d(1,$e,2,2,"mat-option",30),F()),e&2){let n=t.ngIf;o(),a("ngForOf",n.data)}}function Ae(e,t){e&1&&f(0,"mat-icon",18),e&2&&a("svgIcon","heroicons_solid:eye")}function je(e,t){e&1&&f(0,"mat-icon",18),e&2&&a("svgIcon","heroicons_solid:eye-slash")}function Re(e,t){e&1&&c(0," La contrase\xF1a es requerida!. ")}function Oe(e,t){e&1&&c(0," El m\xEDnimo de caracteres son 5. ")}function Le(e,t){e&1&&c(0," El maximo de caracteres son 20. ")}function Ge(e,t){if(e&1&&(m(0,"mat-error"),d(1,Re,1,0)(2,Oe,1,0)(3,Le,1,0),l()),e&2){let n=A();o(),u(n.form.get("contrasena").hasError("required")?1:-1),o(),u(n.form.get("contrasena").hasError("minlength")?2:-1),o(),u(n.form.get("contrasena").hasError("maxlength")?3:-1)}}function Be(e,t){e&1&&f(0,"mat-icon",18),e&2&&a("svgIcon","heroicons_solid:eye")}function qe(e,t){e&1&&f(0,"mat-icon",18),e&2&&a("svgIcon","heroicons_solid:eye-slash")}function ze(e,t){e&1&&c(0," La confirmaci\xF3n de contrase\xF1a es requerida!. ")}function He(e,t){e&1&&c(0," El m\xEDnimo de caracteres son 5. ")}function Pe(e,t){e&1&&c(0," El maximo de caracteres son 20. ")}function Je(e,t){e&1&&c(0," Las contrase\xF1as no coinciden! ")}function Ke(e,t){if(e&1&&(m(0,"mat-error"),d(1,ze,1,0)(2,He,1,0)(3,Pe,1,0)(4,Je,1,0),l()),e&2){let n=A();o(),u(n.form.get("confirmaContrasena").hasError("required")?1:-1),o(),u(n.form.get("confirmaContrasena").hasError("minlength")?2:-1),o(),u(n.form.get("confirmaContrasena").hasError("maxlength")?3:-1),o(),u(n.form.get("confirmaContrasena").hasError("passwordMismatchError")?4:-1)}}function Qe(e,t){if(e&1&&(m(0,"mat-option",31),c(1),l()),e&2){let n=t.$implicit;a("value",n.id),o(),U(n.nombre)}}function We(e,t){if(e&1&&(w(0),d(1,Qe,2,2,"mat-option",30),F()),e&2){let n=t.ngIf;o(),a("ngForOf",n.data)}}function Xe(e,t){if(e&1&&(m(0,"mat-option",31),c(1),l()),e&2){let n=t.$implicit;a("value",n.id),o(),U(n.razonSocial)}}function Ye(e,t){if(e&1&&(w(0),d(1,Xe,2,2,"mat-option",30),F()),e&2){let n=t.ngIf;o(),a("ngForOf",n.data)}}function Ze(e,t){if(e&1&&(m(0,"mat-option",31),c(1),l()),e&2){let n=t.$implicit;a("value",n.id),o(),U(n.nombre)}}function et(e,t){if(e&1&&(w(0),d(1,Ze,2,2,"mat-option",30),F()),e&2){let n=t.ngIf;o(),a("ngForOf",n.data)}}function tt(e,t){if(e&1&&(m(0,"mat-option",31),c(1),l()),e&2){let n=t.$implicit;a("value",n.id),o(),U(n.nombre)}}function it(e,t){if(e&1&&(w(0),d(1,tt,2,2,"mat-option",30),F()),e&2){let n=t.ngIf;o(),a("ngForOf",n.data)}}var Z=(()=>{let t=class t{constructor(){this.fb=g(he),this._locacionService=g(xe),this.dialogRef=g(re),this.fuseService=g(ce),this.estadosDatosService=g(q),this.usuariosService=g(H),this.tipoUsuariosService=g(Ie),this.empresaClienteService=g(ye),this.rolesService=g(De),this._matData=g(ae),this.swalService=g(we),this.departamentos$=this._locacionService.getDepartamentos().pipe(x(r=>{let i=r.data,s=this._matData;if(i&&!s.edit){this.form.get("idDepartamento").setValue(i[0].id);let p=this.form.get("idDepartamento").value;this.getMunicipios(p)}})),this.tipoUsuarios$=this.tipoUsuariosService.getTipoUsuarios().pipe(x(r=>{let i=r.data,s=this._matData;i&&!s.edit&&this.form.get("idTipoUsuario").setValue(i[0].id)})),this.roles$=this.rolesService.getRoles().pipe(x(r=>{let i=r.data,s=this._matData;i&&!s.edit&&this.form.get("idRol").setValue(i[0].id)})),this.empresas$=this.empresaClienteService.getEmpresasClientesSelect().pipe(x(r=>{let i=r.data,s=this._matData;i&&!s.edit&&this.form.get("idSubEmpresa").setValue(i[0].id)}))}onSelected(r){let i=r.value;this.getMunicipios(i)}getMunicipios(r){this.municipios$=this._locacionService.getMunicipio(r).pipe(x(i=>{let s=i.data,p=this._matData;s&&!p.edit&&this.form.get("idMunicipio").setValue(s[0].id)}))}ngOnInit(){this.createForm()}createForm(){this.form=this.fb.group({id:[null],nombre:["",[C.required]],apellido:["",[C.required]],correo:["",[C.required]],contrasena:["",[C.required,C.minLength(5),C.maxLength(20)]],confirmaContrasena:["",[C.required,C.minLength(5),C.maxLength(20)]],idRol:[""],idSubEmpresa:[""],idTipoUsuario:[""],idDepartamento:[""],idMunicipio:[""],estado:[!0]},{validators:ot("contrasena","confirmaContrasena")})}onSave(){if(this.form.valid)if(this._matData.edit){let i=this.form.getRawValue(),{idDepartamento:p,confirmaContrasena:h}=i,_=K(i,["idDepartamento","confirmaContrasena"]);this.fuseService.open(J({},X)).afterClosed().subscribe(P=>{P==="confirmed"?this.usuariosService.postUsuarios(_).subscribe(V=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},V=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}else{let r=this.form.getRawValue(),{idDepartamento:p,confirmaContrasena:h}=r,_=K(r,["idDepartamento","confirmaContrasena"]);this.fuseService.open(J({},X)).afterClosed().subscribe(P=>{P==="confirmed"?this.usuariosService.postUsuarios(_).subscribe(V=>{console.log(V),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},V=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}closeDialog(){this.dialogRef.close()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=$({type:t,selectors:[["app-form-usuarios-empresas"]],standalone:!0,features:[R],decls:81,vars:37,consts:[["data",""],["passwordField",""],["passwordConfirm",""],["twoStepToggle",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"flex","mb-4"],[1,"flex","flex-col","lg:flex-row","mb-4","gap-2"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nombre",3,"formControlName"],["matInput","","placeholder","Apellido",3,"formControlName"],["placeholder","Tipo de usuario",3,"formControlName"],[4,"ngIf"],["id","nit","matInput","","placeholder","Correo",3,"formControlName"],["id","contrasena","matInput","","type","password","placeholder","Contrase\xF1a",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","confirmaContrasena","matInput","","type","password","placeholder","Confirmar contrase\xF1a",3,"formControlName"],["placeholder","Rol",3,"formControlName"],["placeholder","Empresa",3,"formControlName"],["placeholder","Departamento",3,"selectionChange","formControlName"],["placeholder","Ciudad",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"lg:w-auto","w-full","lg:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","lg:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,s){if(i&1){let p=W();m(0,"div",4)(1,"div",5)(2,"div",6),c(3),l(),m(4,"form",7),d(5,Ve,6,3,"div",8),m(6,"div",9)(7,"mat-form-field",10)(8,"mat-label"),c(9,"Nombre"),l(),f(10,"input",11),l(),m(11,"mat-form-field",10)(12,"mat-label"),c(13,"Apellido"),l(),f(14,"input",12),l()(),m(15,"div",9)(16,"mat-form-field",10)(17,"mat-label"),c(18,"Tipo de usuario"),l(),m(19,"mat-select",13,0),d(21,ke,2,1,"ng-container",14),I(22,"async"),l()(),m(23,"mat-form-field",10)(24,"mat-label"),c(25,"Correo"),l(),f(26,"input",15),l()(),m(27,"div",9)(28,"mat-form-field",10)(29,"mat-label"),c(30,"Contrase\xF1a"),l(),f(31,"input",16,1),m(33,"button",17),v("click",function(){E(p);let _=T(32);return b(_.type==="password"?_.type="text":_.type="password")}),d(34,Ae,1,1,"mat-icon",18)(35,je,1,1,"mat-icon",18),l(),d(36,Ge,4,3,"mat-error"),l(),m(37,"mat-form-field",10)(38,"mat-label"),c(39,"Confirmar contrase\xF1a"),l(),f(40,"input",19,2),m(42,"button",17),v("click",function(){E(p);let _=T(41);return b(_.type==="password"?_.type="text":_.type="password")}),d(43,Be,1,1,"mat-icon",18)(44,qe,1,1,"mat-icon",18),l(),d(45,Ke,5,4,"mat-error"),l()(),m(46,"div",9)(47,"mat-form-field",10)(48,"mat-label"),c(49,"Rol"),l(),m(50,"mat-select",20,0),d(52,We,2,1,"ng-container",14),I(53,"async"),l()(),m(54,"mat-form-field",10)(55,"mat-label"),c(56,"Empresa"),l(),m(57,"mat-select",21),d(58,Ye,2,1,"ng-container",14),I(59,"async"),l()()(),m(60,"div",9)(61,"mat-form-field",10)(62,"mat-label"),c(63,"Departamento"),l(),m(64,"mat-select",22,0),v("selectionChange",function(_){return E(p),b(s.onSelected(_))}),d(66,et,2,1,"ng-container",14),I(67,"async"),l()(),m(68,"mat-form-field",10)(69,"mat-label"),c(70,"Ciudad"),l(),m(71,"mat-select",23),d(72,it,2,1,"ng-container",14),I(73,"async"),l()()(),m(74,"div",24)(75,"button",25),v("click",function(){return E(p),b(s.closeDialog())}),m(76,"span"),c(77," Cancelar "),l()(),m(78,"button",26),v("click",function(){return E(p),b(s.onSave())}),m(79,"span"),c(80),l()()()()()()}if(i&2){let p=T(32),h=T(41);o(3),j(" ",s._matData.edit?"Actualizar usuario":"Agregar usuario"," "),o(),a("formGroup",s.form),o(),u(s._matData.edit?5:-1),o(5),a("formControlName","nombre"),o(4),a("formControlName","apellido"),o(5),a("formControlName","idTipoUsuario"),o(2),a("ngIf",D(22,27,s.tipoUsuarios$)),o(5),a("formControlName","correo"),o(5),a("formControlName","contrasena"),o(3),u(p.type==="password"?34:-1),o(),u(p.type==="text"?35:-1),o(),u(s.form.get("contrasena").dirty||s.form.get("contrasena").touched?36:-1),o(4),a("formControlName","confirmaContrasena"),o(3),u(h.type==="password"?43:-1),o(),u(h.type==="text"?44:-1),o(),u(s.form.get("confirmaContrasena").dirty||s.form.get("confirmaContrasena").touched?45:-1),o(5),a("formControlName","idRol"),o(2),a("ngIf",D(53,29,s.roles$)),o(5),a("formControlName","idSubEmpresa"),o(),a("ngIf",D(59,31,s.empresas$)),o(6),a("formControlName","idDepartamento"),o(2),a("ngIf",D(67,33,s.departamentos$)),o(5),a("formControlName","idMunicipio"),o(),a("ngIf",D(73,35,s.municipios$)),o(3),a("color","primary"),o(3),a("color","primary"),o(2),j(" ",s._matData.edit?"Actualizar":"Guardar"," ")}},dependencies:[ve,fe,pe,de,ue,O,B,se,Ce,ge,_e,ie,oe,Ee,ee,te,L,G,le,me,Se],styles:[".custom-dialog-container{width:100%}@media (min-width: 600px){  .custom-dialog-container{width:60%}}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let e=t;return e})();function ot(e,t){return n=>{let r=n.get(e),i=n.get(t);return i?.errors&&!i.errors.passwordMismatchError||(r?.value!==i?.value?i?.setErrors({passwordMismatchError:!0}):i?.setErrors(null)),null}}var Me=(()=>{let t=class t{constructor(r,i,s){this._matDialog=r,this.estadoDatosService=i,this.generoService=s,this.usuariosService=g(H),this.searchTerm="",this.data=[],this.columns=["Estado","Usuario","Nombre completo","Rol","Tipo de usuario"],this.columnPropertyMap={Estado:"estado",Usuario:"correo","Nombre completo":"nombreCompleto",Rol:"nombreRol","Tipo de usuario":"nombreTipoUsuario"},this.buttons=[{label:"Edit",icon:"edit",action:p=>{console.log("Editing",p),this.selectedData=p,this.onEdit()}}]}onNew(){this._matDialog.open(Z,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(Z,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onSearch(r){let i=r.target;this.searchTerm=i.value.trim().toLowerCase()}getUsuarios(){this.subcription$=this.usuariosService.getUsuarios().pipe(Q(r=>(r.data.forEach(i=>{i.estado?i.estado=Y.ACTIVO:i.estado=Y.INACTIVO}),r)),Q(r=>(r.data.forEach(i=>{i&&(i.nombreCompleto=i.nombre.concat(" ",i.apellido))}),r))).subscribe(r=>{r.data&&(this.data=r.data)})}ngOnInit(){this.getUsuarios()}ngOnDestroy(){this.subcription$.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(k(ne),k(q),k(Fe))},t.\u0275cmp=$({type:t,selectors:[["app-grid-usuarios-empresas"]],standalone:!0,features:[R],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(i,s){i&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Usuarios"),l(),m(4,"div",3)(5,"mat-form-field",4),f(6,"mat-icon",5),m(7,"input",6),v("input",function(h){return s.onSearch(h)}),l()(),m(8,"button",7),v("click",function(){return s.onNew()}),f(9,"mat-icon",8),m(10,"span",9),c(11,"Agregar"),l()()()(),m(12,"div",10)(13,"div",11),f(14,"app-custom-table",12),l()()()),i&2&&(o(5),a("subscriptSizing","dynamic"),o(),a("svgIcon","heroicons_solid:magnifying-glass"),o(),a("autocomplete","off")("placeholder","Buscar"),o(),a("color","primary"),o(),a("svgIcon","heroicons_outline:plus"),o(5),a("columns",s.columns)("displayedColumns",s.columns)("columnPropertyMap",s.columnPropertyMap)("data",s.data)("buttons",s.buttons)("searchTerm",s.searchTerm))},dependencies:[be,L,O,G,B]});let e=t;return e})();var Jt=[{path:"",component:Me}];export{Jt as default};
