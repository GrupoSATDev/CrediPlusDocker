import{a as K}from"./chunk-UTHMLIDY.js";import{a as Xe}from"./chunk-YUIDPSZ5.js";import{a as Ze}from"./chunk-L2EUJHKC.js";import{a as et}from"./chunk-W35ES4XE.js";import{a as Ye}from"./chunk-3L6CDPYN.js";import{a as tt}from"./chunk-4GDLIBBU.js";import{a as Ue,b as qe,c as Je}from"./chunk-VMONEH2L.js";import{a as Ke,b as Qe}from"./chunk-5E3BI53K.js";import{a as He}from"./chunk-B3262OVV.js";import{a as it}from"./chunk-E5JP7PP4.js";import{a as re}from"./chunk-6IEWE3OU.js";import{a as We}from"./chunk-24W6POED.js";import{a as Ge}from"./chunk-HKOJEADL.js";import{a as ze}from"./chunk-UFLWJOQO.js";import{a as ae}from"./chunk-4WJQLHI3.js";import{a as Y}from"./chunk-HDKW2ETT.js";import{a as Le}from"./chunk-YRFWKKCQ.js";import{a as Be}from"./chunk-W4ZGSDEU.js";import"./chunk-ZVTEZKTX.js";import{g as ke}from"./chunk-WPQBWK4Z.js";import{a as Ie,b as Ne,c as Fe}from"./chunk-4EGREALI.js";import"./chunk-D266PZ43.js";import{C as Pe,G as Z,b as we,e as Te,i as U,l as je,p as Me,q as Ve,u as Ae,w as $e,x as Oe,z as Re}from"./chunk-BFUN2CON.js";import{$ as xe,Q as Ee,R as De,ea as q,ja as J}from"./chunk-PKP5UGVL.js";import"./chunk-NSFGWBZH.js";import{a as N}from"./chunk-X4MAXHGU.js";import{f as be,g as _e,i as ye,j as ne,s as I}from"./chunk-D7SIZTGA.js";import{$b as c,Ea as L,Fb as l,Gb as i,Hb as p,Ib as v,Jb as C,Lb as he,Rb as D,Tb as oe,W as ue,Y as b,Za as ge,_b as M,aa as x,ab as a,ac as _,bb as G,bc as H,c as pe,cc as ve,fa as S,ga as u,hc as Ce,ic as z,la as B,q as ie,qc as y,rc as E,sb as f,tc as Se,ua as fe,ub as r,wa as T,xa as k}from"./chunk-KIIQGHZ6.js";import{a as j,d as P}from"./chunk-NEB6MB4Y.js";var ot=(()=>{let o=class o{constructor(n,e){this._http=n,this.appSettings=e}getCargos(){return this._http.get(this.appSettings.cargos.url.base)}postCargos(n){return delete n.id,this._http.post(this.appSettings.cargos.url.base,n)}putCargos(n){let e=n.id;return delete n.id,this._http.put(`${this.appSettings.cargos.url.base}/${e}`,n)}};o.\u0275fac=function(e){return new(e||o)(S(I),S(N))},o.\u0275prov=x({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var nt=(()=>{let o=class o{constructor(n,e){this._http=n,this.appSettings=e}getRiesgos(){return this._http.get(this.appSettings.riesgos.url.base)}getRiesgo(n){return this._http.get(`${this.appSettings.riesgos.url.base}/${n}`)}};o.\u0275fac=function(e){return new(e||o)(S(I),S(N))},o.\u0275prov=x({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var at=(()=>{let o=class o{constructor(n,e){this._http=n,this.appSettings=e}getContratos(){return this._http.get(this.appSettings.tipoContratos.url.base)}};o.\u0275fac=function(e){return new(e||o)(S(I),S(N))},o.\u0275prov=x({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var rt=(()=>{let o=class o{constructor(n,e){this._http=n,this.appSettings=e}getDeducciones(){return this._http.get(this.appSettings.deduccionesLegales.url.base)}};o.\u0275fac=function(e){return new(e||o)(S(I),S(N))},o.\u0275prov=x({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();function Q(t){t||(fe(Q),t=u(L));let o=new pe(s=>t.onDestroy(s.next.bind(s)));return s=>s.pipe(ue(o))}function ct(t,o){if(t&1&&(v(0),p(1,"img",55),C()),t&2){let s=oe();a(),r("src",s.image,ge)("alt","Profile avatar")}}function dt(t,o){if(t&1&&(l(0,"div",56),c(1),i()),t&2){let s,n=oe();a(),H(" ",(s=n.form.get("primerNombre").value.charAt(0))!==null&&s!==void 0?s:"P"," ")}}function pt(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function ut(t,o){if(t&1&&(v(0),f(1,pt,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function ft(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function gt(t,o){if(t&1&&(v(0),f(1,ft,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function ht(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function vt(t,o){if(t&1&&(v(0),f(1,ht,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function Ct(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function St(t,o){if(t&1&&(v(0),f(1,Ct,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function bt(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.razonSocial)}}function _t(t,o){if(t&1&&(v(0),f(1,bt,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function yt(t,o){if(t&1&&(v(0),l(1,"mat-form-field",22)(2,"mat-label"),c(3,"Fin de contrato"),i(),p(4,"input",31)(5,"mat-datepicker-toggle",32)(6,"mat-datepicker",null,5),i(),C()),t&2){let s=M(7);a(4),r("matDatepicker",s)("formControlName","fechaFinContrato"),a(),r("for",s)}}function Et(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function Dt(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),ve("Porcentaje salud: ",s.porcentajeSalud,"% - Porcentaje pensi\xF3n: ",s.porcentajePension,"%")}}function xt(t,o){if(t&1&&(v(0),f(1,Dt,2,3,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function It(t,o){t&1&&(v(0),l(1,"div",21)(2,"mat-form-field",22)(3,"mat-label"),c(4,"Salud"),i(),p(5,"input",58),i(),l(6,"mat-form-field",22)(7,"mat-label"),c(8,"Pensi\xF3n"),i(),p(9,"input",59),i()(),C()),t&2&&(a(5),r("readonly",!0)("formControlName","salud"),a(4),r("readonly",!0)("formControlName","pension"))}function Nt(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function Ft(t,o){if(t&1&&(v(0),f(1,Nt,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function wt(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function Tt(t,o){if(t&1&&(v(0),f(1,wt,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}function kt(t,o){if(t&1&&(l(0,"mat-option",57),c(1),i()),t&2){let s=o.$implicit;r("value",s.id),a(),_(s.nombre)}}function jt(t,o){if(t&1&&(v(0),f(1,kt,2,2,"mat-option",42),C()),t&2){let s=o.ngIf;a(),r("ngForOf",s.data)}}var Mt={validation:!1},se=(()=>{let o=class o{constructor(){this.fb=u(Re),this.dialogRef=u(Ie),this.fuseService=u(ke),this.estadosDatosService=u(Y),this.toasService=u(ze),this.tiposDocumentosService=u(tt),this._locacionService=u(He),this.generoService=u(it),this.empresaClienteService=u(Ze),this.datePipe=u(ne),this.empleadosServices=u(K),this.cargosServices=u(ot),this.riesgosServices=u(nt),this.bancosServices=u(Xe),this.swalService=u(We),this.destroyedRef=u(L),this.departamentos$=this._locacionService.getDepartamentos().pipe(b(n=>{let e=n.data,m=this._matData;if(e&&!m.edit){this.form.get("idDepartamento").setValue(e[0].id);let d=this.form.get("idDepartamento").value;this.getMunicipios(d)}})),this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&this.form.get("idTipoDoc").setValue(e[3].id)})),this.generos$=this.generoService.getGeneros().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&this.form.get("idGenero").setValue(e[1].id)})),this.empresasClientes$=this.empresaClienteService.getEmpresasClientes().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&this.form.get("idSubEmpresa").setValue(e[0].id)})),this.cargos$=this.cargosServices.getCargos(),this.riesgos$=this.riesgosServices.getRiesgos().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&this.form.get("idNivelRiesgo").setValue(e[0].id)})),this.bancos$=this.bancosServices.getBancos().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&this.form.get("idBanco").setValue(e[0].id)})),this._matData=u(Ne),this.tipoCuentasService=u(et),this.tipoCuentas$=this.tipoCuentasService.getTipoCuentas().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&this.form.get("idTipoCuenta").setValue(e[0].id)})),this.tipoContratosService=u(at),this.tipoContratos=[],this.deduccioLegalService=u(rt),this.deduccion$=this.deduccioLegalService.getDeducciones().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&(this.form.get("idDeduccionLegal").setValue(e[0].id),this.porcentajeSalud=e[0].porcentajeSalud,this.porcentajePension=e[0].porcentajePension,this.sumaPorcentaje=e[0].estado?this.porcentajePension+this.porcentajeSalud:0)})),this.profile={avatar:"",name:"Pedro"},this.event=event}getContratos(){this.tipoContratosService.getContratos().pipe(b(n=>{let e=n.data,m=this._matData;e&&!m.edit&&(this.form.get("idTipoContrato").setValue(e[0].id),this.deduccionLegal=e[0].deduccioneLegal)})).subscribe(n=>{n.data&&(this.tipoContratos=n.data)})}selectedDeduccion(n){let e=n.value,m=this.tipoContratos.find(d=>{if(d.id==e)return d});this.deduccionLegal=m.deduccioneLegal,this.deduccionLegal?this.resetConDeduccion():this.resetSinDeduccion()}ngOnInit(){this.createForm(),this.getContratos();let n=this._matData;if(n.edit){let e=n.data;this.getTrabajador(e.id)}this.setCampoValue()}getTrabajador(n){this.empleadosServices.getEmpleado(n).subscribe(e=>{if(e){let d=e.data;this.buscarContrato(d.idTipoContrato);let m=d,{idDepartamento:g,fechaNacimiento:h,fechaInicioContrato:$,fechaFinContrato:W}=m,X=P(m,["idDepartamento","fechaNacimiento","fechaInicioContrato","fechaFinContrato"]),ee=new Date(h),F=new Date($),w=new Date(W);this.municipios$=this._locacionService.getMunicipio(g),this.form.patchValue(j({fechaNacimiento:ee,fechaInicioContrato:new Date(F.getFullYear(),F.getMonth(),F.getDate()),fechaFinContrato:new Date(w.getFullYear(),w.getMonth(),w.getDate()),idDepartamento:g},X)),this.image=`data:image/png;base64,  ${d.foto}`}})}buscarContrato(n){let e=n,m=this.tipoContratos.find(d=>{if(d.id==e)return d});this.deduccionLegal=m.deduccioneLegal}setCampoValue(){this.form.get("salarioBase").valueChanges.pipe(Q(this.destroyedRef)).subscribe(()=>this.calcularCampo()),this.form.get("otroIngreso").valueChanges.pipe(Q(this.destroyedRef)).subscribe(()=>this.calcularCampo())}resetConDeduccion(){this.form.get("salarioBase").setValue(0),this.form.get("otroIngreso").setValue(0),this.form.get("salarioDevengado").setValue(0),this.form.get("salud").setValue(0),this.form.get("pension").setValue(0),this.form.get("capacidadEndeudamiento").setValue(0)}resetSinDeduccion(){this.form.get("salarioBase").setValue(0),this.form.get("otroIngreso").setValue(0),this.form.get("salarioDevengado").setValue(0)}calcularCampo(){if(!this._matData.edit&&this.deduccionLegal){let n=this.form.get("salarioBase")?.value||0,e=this.form.get("otroIngreso")?.value||0,m=n+e-n*this.sumaPorcentaje/100,d=(n+e)*this.porcentajeSalud/100,g=(n+e)*this.porcentajePension/100,h=m*30/100;this.form.get("salarioDevengado").setValue(m),this.form.get("salud").setValue(d),this.form.get("pension").setValue(g),this.form.get("capacidadEndeudamiento").setValue(h)}else if(!this._matData.edit&&this.deduccionLegal==!1){let n=this.form.get("salarioBase")?.value||0,e=this.form.get("otroIngreso")?.value||0,m=n+e,d=m*30/100;this.form.get("salarioDevengado").setValue(m),this.form.get("capacidadEndeudamiento").setValue(d)}}onFileSelected(n){let e=n.target;if(e.files&&e.files.length>0){let m=e.files[0],d=new FileReader;d.onload=()=>{let g=d.result;this.image=g;let h=g.split(",")[1];this.form.get("foto").setValue(h)},d.readAsDataURL(m)}}onSelected(n){let e=n.value;this.getMunicipios(e)}getMunicipios(n){this.municipios$=this._locacionService.getMunicipio(n).pipe(b(e=>{let m=e.data,d=this._matData;m&&!d.edit&&this.form.get("idMunicipio").setValue(m[0].id)}))}onSave(){if(this.form.valid)if(this._matData.edit){let e=this.form.getRawValue(),{idDepartamento:d,fechaNacimiento:g,fechaInicioContrato:h,fechaFinContrato:$,salarioDevengado:W,salud:X,pension:ee}=e,F=P(e,["idDepartamento","fechaNacimiento","fechaInicioContrato","fechaFinContrato","salarioDevengado","salud","pension"]),w=this.datePipe.transform(g,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),te=this.datePipe.transform(h,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),O=this.datePipe.transform($,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),ce=j({fechaNacimiento:w,fechaInicioContrato:te,fechaFinContrato:O},F);this.fuseService.open(j({},ae)).afterClosed().subscribe(R=>{R==="confirmed"?this.empleadosServices.putEmpleados(ce).subscribe(st=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},st=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let n=this.form.getRawValue(),{idDepartamento:d,fechaNacimiento:g,fechaInicioContrato:h,fechaFinContrato:$,salarioDevengado:W,salud:X,pension:ee}=n,F=P(n,["idDepartamento","fechaNacimiento","fechaInicioContrato","fechaFinContrato","salarioDevengado","salud","pension"]),w=this.datePipe.transform(g,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),te=this.datePipe.transform(h,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),O=j({fechaNacimiento:w,fechaInicioContrato:te,fechaFinContrato:"0001-01-01T00:00:00+00:00"},F);console.log(O),this.fuseService.open(j({},ae)).afterClosed().subscribe(de=>{de==="confirmed"?this.empleadosServices.postEmpleados(O).subscribe(R=>{console.log(R),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},R=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],primerNombre:[""],segundoNombre:[""],primerApellido:[""],segundoApellido:[""],idTipoDoc:[""],numDoc:[""],idDepartamento:[""],idMunicipio:[""],telefono:[""],telefono2:[""],direccion:[""],idGenero:[""],correo:[""],cargo:[""],fechaNacimiento:[""],fechaInicioContrato:[""],fechaFinContrato:["null"],numCuentaBancaria:[""],capacidadEndeudamiento:[{value:0,disabled:!0}],idNivelRiesgo:[""],idBanco:[""],idTipoCuenta:[""],foto:[""],firma:[""],idSubEmpresa:[""],idTipoContrato:[""],salarioBase:[0],otroIngreso:[0],idDeduccionLegal:[""],salarioDevengado:[{value:0,disabled:!0}],salud:[{value:0,disabled:!0}],pension:[{value:0,disabled:!0}],estado:[!0]})}closeDialog(){this.dialogRef.close()}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=B({type:o,selectors:[["app-form-empleados"]],standalone:!0,features:[Ce([{provide:De,useClass:Ye},{provide:Ee,useValue:"en-GB"},ne,Ke(Mt)]),z],decls:191,vars:74,consts:[["noAvatar",""],["twoStepToggle",""],["picker",""],["data",""],["inicio",""],["fin",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8","space-y-8",3,"formGroup"],[1,"group","relative","mx-auto","mt-8","flex","h-40","w-40","flex-0","rounded-full","mb-8"],[1,"absolute","inset-0","hidden","cursor-pointer","flex-col","items-center","justify-center","rounded-full","bg-gray-800","bg-opacity-80","backdrop-blur","backdrop-filter","group-hover:flex"],[1,"text-white",3,"svgIcon"],[1,"mx-6","mt-2","text-center","font-medium","text-white"],["type","file",1,"absolute","inset-0","opacity-0","cursor-pointer",3,"change"],[4,"ngIf","ngIfElse"],[1,"font-bold","mb-4","text-2xl"],[1,"flex","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Primer nombre",3,"formControlName"],["matInput","","placeholder","Segundo nombre",3,"formControlName"],["matInput","","placeholder","Primer apellido",3,"formControlName"],["matInput","","placeholder","Segundo apellido",3,"formControlName"],["placeholder","Tipo de documento",3,"formControlName"],[4,"ngIf"],["matInput","","placeholder","N\xFAmero de identificaci\xF3n",3,"formControlName"],["placeholder","G\xE9nero",3,"formControlName"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["placeholder","Departamento",3,"selectionChange","formControlName"],["placeholder","Ciudad",3,"formControlName"],["matInput","","placeholder","Direcci\xF3n",3,"formControlName"],["matInput","","placeholder","Celular",3,"formControlName"],["matInput","","placeholder","Tel\xE9fono",3,"formControlName"],["matInput","","placeholder","Correo electronico",3,"formControlName"],["placeholder","Empresa",3,"formControlName"],["matInput","","placeholder","Cargo",3,"formControlName"],["placeholder","Tipo de contrato",3,"selectionChange","formControlName"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Deducciones legales",3,"formControlName","disabled"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Salario base",3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Otros ingresos",3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Salario devengdado",3,"readonly","formControlName"],["placeholder","Nivel de riesgo",3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Capacidad de endeudamiento",3,"formControlName","readonly"],["placeholder","Tipo de cuenta",3,"formControlName"],["placeholder","Bancos",3,"formControlName"],["matInput","","placeholder","N\xFAmero de cuenta",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[1,"h-full","w-full","rounded-full","object-cover",3,"src","alt"],[1,"flex","h-full","w-full","items-center","justify-center","rounded-full","bg-gray-200","text-8xl","font-semibold","uppercase","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[3,"value"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Salud",3,"readonly","formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Pensi\xF3n",3,"readonly","formControlName"]],template:function(e,m){if(e&1){let d=he();l(0,"div",6)(1,"div",7)(2,"div",8),c(3),i(),l(4,"form",9)(5,"div",10)(6,"div",11),p(7,"mat-icon",12),l(8,"div",13),c(9," Cambiar foto "),i(),l(10,"input",14),D("change",function(h){return T(d),k(m.onFileSelected(h))}),i()(),f(11,ct,2,2,"ng-container",15)(12,dt,2,1,"ng-template",null,0,Se),i(),l(14,"div")(15,"p",16),c(16,"Informaci\xF3n general"),i(),l(17,"div",17)(18,"div",18),D("click",function(){T(d);let h=M(22);return k(h.toggle())}),l(19,"div",19),c(20),i()(),p(21,"mat-slide-toggle",20,1),i(),l(23,"div",21)(24,"mat-form-field",22)(25,"mat-label"),c(26,"Primer nombre"),i(),p(27,"input",23),i(),l(28,"mat-form-field",22)(29,"mat-label"),c(30,"Segundo nombre"),i(),p(31,"input",24),i()(),l(32,"div",21)(33,"mat-form-field",22)(34,"mat-label"),c(35,"Primer apellido"),i(),p(36,"input",25),i(),l(37,"mat-form-field",22)(38,"mat-label"),c(39,"Segundo apellido"),i(),p(40,"input",26),i()(),l(41,"div",21)(42,"mat-form-field",22)(43,"mat-label"),c(44,"Tipo de documento"),i(),l(45,"mat-select",27),f(46,ut,2,1,"ng-container",28),y(47,"async"),i()(),l(48,"mat-form-field",22)(49,"mat-label"),c(50,"N\xFAmero de identificaci\xF3n"),i(),p(51,"input",29),i()(),l(52,"div",21)(53,"mat-form-field",22)(54,"mat-label"),c(55,"G\xE9nero"),i(),l(56,"mat-select",30),f(57,gt,2,1,"ng-container",28),y(58,"async"),i()(),l(59,"mat-form-field",22)(60,"mat-label"),c(61,"Fecha de nacimiento"),i(),p(62,"input",31)(63,"mat-datepicker-toggle",32)(64,"mat-datepicker",null,2),i()()(),l(66,"div")(67,"p",16),c(68,"Informaci\xF3n demogr\xE1fica"),i(),l(69,"div",21)(70,"mat-form-field",22)(71,"mat-label"),c(72,"Departamento"),i(),l(73,"mat-select",33,3),D("selectionChange",function(h){return T(d),k(m.onSelected(h))}),f(75,vt,2,1,"ng-container",28),y(76,"async"),i()(),l(77,"mat-form-field",22)(78,"mat-label"),c(79,"Ciudad"),i(),l(80,"mat-select",34),f(81,St,2,1,"ng-container",28),y(82,"async"),i()()(),l(83,"div",21)(84,"mat-form-field",22)(85,"mat-label"),c(86,"Direcci\xF3n"),i(),p(87,"input",35),i(),l(88,"mat-form-field",22)(89,"mat-label"),c(90,"Celular"),i(),p(91,"input",36),i()(),l(92,"div",21)(93,"mat-form-field",22)(94,"mat-label"),c(95,"Tel\xE9fono"),i(),p(96,"input",37),i(),l(97,"mat-form-field",22)(98,"mat-label"),c(99,"Email"),i(),p(100,"input",38),i()(),l(101,"div")(102,"p",16),c(103,"Informaci\xF3n contractual"),i(),l(104,"div",21)(105,"mat-form-field",22)(106,"mat-label"),c(107,"Empresa"),i(),l(108,"mat-select",39),f(109,_t,2,1,"ng-container",28),y(110,"async"),i()(),l(111,"mat-form-field",22)(112,"mat-label"),c(113,"Cargo"),i(),p(114,"input",40),i()(),l(115,"div",21)(116,"mat-form-field",22)(117,"mat-label"),c(118,"Inicio de contrato"),i(),p(119,"input",31)(120,"mat-datepicker-toggle",32)(121,"mat-datepicker",null,4),i(),f(123,yt,8,3,"ng-container",28),i(),l(124,"div",21)(125,"mat-form-field",22)(126,"mat-label"),c(127,"Tipo de contrato"),i(),l(128,"mat-select",41),D("selectionChange",function(h){return T(d),k(m.selectedDeduccion(h))}),f(129,Et,2,2,"mat-option",42),i()()(),l(130,"div",21)(131,"mat-form-field",22)(132,"mat-label"),c(133,"Deducciones legales"),i(),l(134,"mat-select",43),f(135,xt,2,1,"ng-container",28),y(136,"async"),i()()(),l(137,"div",21)(138,"mat-form-field",22)(139,"mat-label"),c(140,"Salario base"),i(),p(141,"input",44),i(),l(142,"mat-form-field",22)(143,"mat-label"),c(144,"Otros ingresos"),i(),p(145,"input",45),i()(),f(146,It,10,4,"ng-container",28),l(147,"div",21)(148,"mat-form-field",22)(149,"mat-label"),c(150,"Salario devengado"),i(),p(151,"input",46),i()(),l(152,"div",21)(153,"mat-form-field",22)(154,"mat-label"),c(155,"Nivel de riesgo"),i(),l(156,"mat-select",47),f(157,Ft,2,1,"ng-container",28),y(158,"async"),i()(),l(159,"mat-form-field",22)(160,"mat-label"),c(161,"Capacidad de endeudamiento"),i(),p(162,"input",48),i()()(),l(163,"div")(164,"p",16),c(165,"Informaci\xF3n bancaria"),i(),l(166,"div",21)(167,"mat-form-field",22)(168,"mat-label"),c(169,"Tipo de cuenta"),i(),l(170,"mat-select",49),f(171,Tt,2,1,"ng-container",28),y(172,"async"),i()()(),l(173,"div",21)(174,"mat-form-field",22)(175,"mat-label"),c(176,"Bancos"),i(),l(177,"mat-select",50),f(178,jt,2,1,"ng-container",28),y(179,"async"),i()(),l(180,"mat-form-field",22)(181,"mat-label"),c(182,"N\xFAmero de cuenta bancaria"),i(),p(183,"input",51),i()()()(),l(184,"div",52)(185,"button",53),D("click",function(){return T(d),k(m.closeDialog())}),l(186,"span"),c(187," Cancelar "),i()(),l(188,"button",54),D("click",function(){return T(d),k(m.onSave())}),l(189,"span"),c(190," Guardar "),i()()()()()()}if(e&2){let d=M(13),g=M(65),h=M(122);a(3),H(" ",m._matData.edit?"Actualizar trabajador":"Agregar trabajador"," "),a(),r("formGroup",m.form),a(3),r("svgIcon","heroicons_outline:camera"),a(4),r("ngIf",m.form.get("foto").value)("ngIfElse",d),a(9),H(" Estado ",m.form.get("estado").value?"Activo":"Inactivo"," "),a(),r("color","primary")("formControlName","estado"),a(6),r("formControlName","primerNombre"),a(4),r("formControlName","segundoNombre"),a(5),r("formControlName","primerApellido"),a(4),r("formControlName","segundoApellido"),a(5),r("formControlName","idTipoDoc"),a(),r("ngIf",E(47,56,m.tiposDocumentos$)),a(5),r("formControlName","numDoc"),a(5),r("formControlName","idGenero"),a(),r("ngIf",E(58,58,m.generos$)),a(5),r("matDatepicker",g)("formControlName","fechaNacimiento"),a(),r("for",g),a(10),r("formControlName","idDepartamento"),a(2),r("ngIf",E(76,60,m.departamentos$)),a(5),r("formControlName","idMunicipio"),a(),r("ngIf",E(82,62,m.municipios$)),a(6),r("formControlName","direccion"),a(4),r("formControlName","telefono"),a(5),r("formControlName","telefono2"),a(4),r("formControlName","correo"),a(8),r("formControlName","idSubEmpresa"),a(),r("ngIf",E(110,64,m.empresasClientes$)),a(5),r("formControlName","cargo"),a(5),r("matDatepicker",h)("formControlName","fechaInicioContrato"),a(),r("for",h),a(3),r("ngIf",m.form.get("estado").value==!1),a(5),r("formControlName","idTipoContrato"),a(),r("ngForOf",m.tipoContratos),a(5),r("formControlName","idDeduccionLegal")("disabled",!0),a(),r("ngIf",E(136,66,m.deduccion$)),a(6),r("formControlName","salarioBase"),a(4),r("formControlName","otroIngreso"),a(),r("ngIf",m.deduccionLegal),a(5),r("readonly",!0)("formControlName","salarioDevengado"),a(5),r("formControlName","idNivelRiesgo"),a(),r("ngIf",E(158,68,m.riesgos$)),a(5),r("formControlName","capacidadEndeudamiento")("readonly",!0),a(8),r("formControlName","idTipoCuenta"),a(),r("ngIf",E(172,70,m.tipoCuentas$)),a(6),r("formControlName","idBanco"),a(),r("ngIf",E(179,72,m.bancos$)),a(5),r("formControlName","numCuentaBancaria"),a(2),r("color","primary"),a(3),r("color","primary")}},dependencies:[q,U,Z,we,Pe,Ae,je,Me,Ve,$e,Oe,ye,xe,Le,be,_e,Ue,qe,Je,Te,J,Qe,Be],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let t=o;return t})();var mt=(()=>{let o=class o{constructor(n,e,m){this._matDialog=n,this.estadoDatosService=e,this.empleadoService=m,this.data=[],this.columns=["Estado","Documento","Identificaci\xF3n","Nombre completo","Tel\xE9fono","Cargo"],this.columnPropertyMap={Estado:"estado",Documento:"nombreTipoDocumento",Identificaci\u00F3n:"numDoc","Nombre completo":"nombreCompleto",Tel\u00E9fono:"telefono",Cargo:"cargo"},this.buttons=[{label:"Edit",icon:"edit",action:d=>{console.log("Editing",d),this.selectedData=d,this.onEdit()}}]}onNew(){this._matDialog.open(se,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(se,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getEmpleados(){this.subcription$=this.empleadoService.getEmpleados().pipe(ie(n=>(n.data.forEach(e=>{e.estado?e.estado=re.ACTIVO:e.estado=re.INACTIVO}),n)),ie(n=>(n.data.forEach(e=>{e&&(e.nombreCompleto=e.primerNombre.concat(" ",e.segundoNombre?e.segundoNombre+" ":"",e.primerApellido," ",e.segundoApellido))}),n))).subscribe(n=>{this.data=n.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(e=>{e&&this.getEmpleados()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpleados(),this.listenGrid()}};o.\u0275fac=function(e){return new(e||o)(G(Fe),G(Y),G(K))},o.\u0275cmp=B({type:o,selectors:[["app-grid-empleados"]],standalone:!0,features:[z],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,m){e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),c(3,"Trabajadores"),i(),l(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),i(),l(8,"button",7),D("click",function(){return m.onNew()}),p(9,"mat-icon",8),l(10,"span",9),c(11,"Agregar"),i()()()(),l(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),i()()()),e&2&&(a(5),r("subscriptSizing","dynamic"),a(),r("svgIcon","heroicons_solid:magnifying-glass"),a(),r("autocomplete","off")("placeholder","Buscar"),a(),r("color","primary"),a(),r("svgIcon","heroicons_outline:plus"),a(5),r("columns",m.columns)("displayedColumns",m.columns)("columnPropertyMap",m.columnPropertyMap)("data",m.data)("buttons",m.buttons))},dependencies:[Ge,q,U,J,Z]});let t=o;return t})();var Yi=[{path:"",component:mt}];export{Yi as default};
