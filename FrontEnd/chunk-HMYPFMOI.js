import{a as Le}from"./chunk-SLB2PHFE.js";import{a as ze}from"./chunk-UCYE6AFY.js";import{a as q}from"./chunk-ROSU44AN.js";import{a as Pe}from"./chunk-YT5XYPLI.js";import{a as Be}from"./chunk-Z2MQWE4K.js";import{a as Re}from"./chunk-XHAWQ72E.js";import{a as Ae,b as $e,c as Ve}from"./chunk-B7LJFNKT.js";import{a as Ge,b as Oe}from"./chunk-DNIDWOKC.js";import{a as Me}from"./chunk-HLQ77KX7.js";import{a as He}from"./chunk-FSHGP6PN.js";import{a as ee}from"./chunk-6IEWE3OU.js";import{a as je}from"./chunk-ACIMG2KZ.js";import{a as we}from"./chunk-FMZRTJU7.js";import{a as X,b as ke}from"./chunk-2RSQTUPN.js";import{a as J}from"./chunk-OFEOPKCC.js";import{a as Te}from"./chunk-33XTDNRI.js";import{a as Fe}from"./chunk-JPRW2DCB.js";import"./chunk-CHOSRW5W.js";import{g as Ce}from"./chunk-QS2WZY2K.js";import{a as ue,b as ge,c as he}from"./chunk-JND367CQ.js";import"./chunk-7U4JZNVG.js";import{C as Ne,G as Y,b as ve,e as Se,i as z,l as _e,p as Ee,q as be,u as ye,w as xe,x as De,z as Ie}from"./chunk-JLNARVDU.js";import{$ as fe,Q as de,R as ce,ea as L,ja as Z}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import{a as U}from"./chunk-DDPHQILY.js";import{f as le,g as se,i as pe,j as W,r as H}from"./chunk-NP3GUERB.js";import{$ as B,Cb as n,Db as e,Eb as d,Fb as v,Gb as S,Ib as ne,Ob as x,Qb as Q,Wa as ae,X as C,Xb as w,Yb as l,Za as o,Zb as _,_a as O,_b as j,dc as re,ea as N,ec as R,fa as u,ka as G,mc as E,nc as b,pb as f,pc as me,q as K,rb as a,ua as F,va as T}from"./chunk-32HXX3OB.js";import{a as I,d as P}from"./chunk-NEB6MB4Y.js";var Ze=(()=>{let r=class r{constructor(m,i){this._http=m,this.appSettings=i}getCargos(){return this._http.get(this.appSettings.cargos.url.base)}postCargos(m){return delete m.id,this._http.post(this.appSettings.cargos.url.base,m)}putCargos(m){let i=m.id;return delete m.id,this._http.put(`${this.appSettings.cargos.url.base}/${i}`,m)}};r.\u0275fac=function(i){return new(i||r)(N(H),N(U))},r.\u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"root"});let t=r;return t})();var Ue=(()=>{let r=class r{constructor(m,i){this._http=m,this.appSettings=i}getRiesgos(){return this._http.get(this.appSettings.riesgos.url.base)}getRiesgo(m){return this._http.get(`${this.appSettings.riesgos.url.base}/${m}`)}};r.\u0275fac=function(i){return new(i||r)(N(H),N(U))},r.\u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"root"});let t=r;return t})();function Qe(t,r){if(t&1&&(v(0),d(1,"img",56),S()),t&2){let p=Q();o(),a("src",p.image,ae)("alt","Profile avatar")}}function We(t,r){if(t&1&&(n(0,"div",57),l(1),e()),t&2){let p,m=Q();o(),j(" ",(p=m.form.get("primerNombre").value.charAt(0))!==null&&p!==void 0?p:"P"," ")}}function Xe(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.nombre)}}function et(t,r){if(t&1&&(v(0),f(1,Xe,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}function tt(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.nombre)}}function it(t,r){if(t&1&&(v(0),f(1,tt,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}function ot(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.nombre)}}function at(t,r){if(t&1&&(v(0),f(1,ot,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}function nt(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.nombre)}}function rt(t,r){if(t&1&&(v(0),f(1,nt,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}function mt(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.razonSocial)}}function lt(t,r){if(t&1&&(v(0),f(1,mt,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}function st(t,r){if(t&1&&(v(0),n(1,"mat-form-field",22)(2,"mat-label"),l(3,"Fin de contrato"),e(),d(4,"input",31)(5,"mat-datepicker-toggle",32)(6,"mat-datepicker",null,5),e(),S()),t&2){let p=w(7);o(4),a("matDatepicker",p)("formControlName","fechaFinContrato"),o(),a("for",p)}}function pt(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.nombre)}}function dt(t,r){if(t&1&&(v(0),f(1,pt,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}function ct(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.nombre)}}function ft(t,r){if(t&1&&(v(0),f(1,ct,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}function ut(t,r){if(t&1&&(n(0,"mat-option",42),l(1),e()),t&2){let p=r.$implicit;a("value",p.id),o(),_(p.nombre)}}function gt(t,r){if(t&1&&(v(0),f(1,ut,2,2,"mat-option",58),S()),t&2){let p=r.ngIf;o(),a("ngForOf",p.data)}}var ht={validation:!1},ie=(()=>{let r=class r{constructor(){this.fb=u(Ie),this.dialogRef=u(ue),this.fuseService=u(Ce),this.estadosDatosService=u(J),this.toasService=u(ke),this.tiposDocumentosService=u(Re),this._locacionService=u(Me),this.generoService=u(He),this.empresaClienteService=u(Pe),this.datePipe=u(W),this.empleadosServices=u(q),this.cargosServices=u(Ze),this.riesgosServices=u(Ue),this.bancosServices=u(Le),this.swalService=u(je),this.departamentos$=this._locacionService.getDepartamentos().pipe(C(m=>{let i=m.data,s=this._matData;if(i&&!s.edit){this.form.get("idDepartamento").setValue(i[0].id);let c=this.form.get("idDepartamento").value;this.getMunicipios(c)}})),this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(C(m=>{let i=m.data,s=this._matData;i&&!s.edit&&this.form.get("idTipoDoc").setValue(i[3].id)})),this.generos$=this.generoService.getGeneros().pipe(C(m=>{let i=m.data,s=this._matData;i&&!s.edit&&this.form.get("idGenero").setValue(i[1].id)})),this.empresasClientes$=this.empresaClienteService.getEmpresasClientes().pipe(C(m=>{let i=m.data,s=this._matData;i&&!s.edit&&this.form.get("idSubEmpresa").setValue(i[0].id)})),this.cargos$=this.cargosServices.getCargos(),this.riesgos$=this.riesgosServices.getRiesgos().pipe(C(m=>{let i=m.data,s=this._matData;i&&!s.edit&&this.form.get("idNivelRiesgo").setValue(i[0].id)})),this.bancos$=this.bancosServices.getBancos().pipe(C(m=>{let i=m.data,s=this._matData;i&&!s.edit&&this.form.get("idBanco").setValue(i[0].id)})),this._matData=u(ge),this.tipoCuentasService=u(ze),this.tipoCuentas$=this.tipoCuentasService.getTipoCuentas().pipe(C(m=>{let i=m.data,s=this._matData;i&&!s.edit&&this.form.get("idTipoCuenta").setValue(i[0].id)})),this.profile={avatar:"",name:"Pedro"}}ngOnInit(){this.createForm();let m=this._matData;if(m.edit){let s=m.data,i=s,{estado:c,idDepartamento:g,fechaNacimiento:h,fechaInicioContrato:$,fechaFinContrato:M}=i,k=P(i,["estado","idDepartamento","fechaNacimiento","fechaInicioContrato","fechaFinContrato"]),A=new Date(h),y=new Date($),D=new Date(M);this.municipios$=this._locacionService.getMunicipio(g),this.form.patchValue(I({fechaNacimiento:A,fechaInicioContrato:new Date(y.getFullYear(),y.getMonth(),y.getDate()),fechaFinContrato:new Date(D.getFullYear(),D.getMonth(),D.getDate()),idDepartamento:g,estado:c=="Activo"},k)),console.log(this.form.getRawValue()),this.image=`data:image/png;base64,  ${s.foto}`}}onFileSelected(m){let i=m.target;if(i.files&&i.files.length>0){let s=i.files[0],c=new FileReader;c.onload=()=>{let g=c.result;this.image=g;let h=g.split(",")[1];this.form.get("foto").setValue(h)},c.readAsDataURL(s)}}onSelected(m){let i=m.value;this.getMunicipios(i)}getMunicipios(m){this.municipios$=this._locacionService.getMunicipio(m).pipe(C(i=>{let s=i.data,c=this._matData;s&&!c.edit&&this.form.get("idMunicipio").setValue(s[0].id)}))}onSave(){if(this.form.valid)if(this._matData.edit){let i=this.form.getRawValue(),{idDepartamento:c,fechaNacimiento:g,fechaInicioContrato:h,fechaFinContrato:$}=i,M=P(i,["idDepartamento","fechaNacimiento","fechaInicioContrato","fechaFinContrato"]),k=this.datePipe.transform(g,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),A=this.datePipe.transform(h,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),y=this.datePipe.transform($,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),D=I({fechaNacimiento:k,fechaInicioContrato:A,fechaFinContrato:y},M);this.fuseService.open(I({},X)).afterClosed().subscribe(V=>{V==="confirmed"?this.empleadosServices.putEmpleados(D).subscribe(Je=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},Je=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let m=this.form.getRawValue(),{idDepartamento:c,fechaNacimiento:g,fechaInicioContrato:h,fechaFinContrato:$}=m,M=P(m,["idDepartamento","fechaNacimiento","fechaInicioContrato","fechaFinContrato"]),k=this.datePipe.transform(g,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),A=this.datePipe.transform(h,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),y=I({fechaNacimiento:k,fechaInicioContrato:A,fechaFinContrato:"0001-01-01T00:00:00+00:00"},M);console.log(y),this.fuseService.open(I({},X)).afterClosed().subscribe(oe=>{oe==="confirmed"?this.empleadosServices.postEmpleados(y).subscribe(V=>{console.log(V),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},V=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],primerNombre:[""],segundoNombre:[""],primerApellido:[""],segundoApellido:[""],idTipoDoc:[""],numDoc:[""],idDepartamento:[""],idMunicipio:[""],telefono:[""],telefono2:[""],direccion:[""],idGenero:[""],correo:[""],cargo:[""],fechaNacimiento:[""],fechaInicioContrato:[""],fechaFinContrato:["null"],numCuentaBancaria:[""],salarioDevengado:[""],capacidadEndeudamiento:[""],idNivelRiesgo:[""],idBanco:[""],idTipoCuenta:[""],foto:[""],firma:[""],idSubEmpresa:[""],estado:["true"]})}closeDialog(){this.dialogRef.close()}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=G({type:r,selectors:[["app-form-empleados"]],standalone:!0,features:[re([{provide:ce,useClass:Be},{provide:de,useValue:"en-GB"},W,Ge(ht)]),R],decls:189,vars:62,consts:[["noAvatar",""],["twoStepToggle",""],["picker",""],["data",""],["inicio",""],["fin",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8","space-y-8",3,"formGroup"],[1,"group","relative","mx-auto","mt-8","flex","h-40","w-40","flex-0","rounded-full","mb-8"],[1,"absolute","inset-0","hidden","cursor-pointer","flex-col","items-center","justify-center","rounded-full","bg-gray-800","bg-opacity-80","backdrop-blur","backdrop-filter","group-hover:flex"],[1,"text-white",3,"svgIcon"],[1,"mx-6","mt-2","text-center","font-medium","text-white"],["type","file",1,"absolute","inset-0","opacity-0","cursor-pointer",3,"change"],[4,"ngIf","ngIfElse"],[1,"font-bold","mb-4","text-2xl"],[1,"flex","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Primer nombre",3,"formControlName"],["matInput","","placeholder","Segundo nombre",3,"formControlName"],["matInput","","placeholder","Primer apellido",3,"formControlName"],["matInput","","placeholder","Segundo apellido",3,"formControlName"],["placeholder","Tipo de documento",3,"formControlName"],[4,"ngIf"],["matInput","","placeholder","N\xFAmero de identificaci\xF3n",3,"formControlName"],["placeholder","G\xE9nero",3,"formControlName"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["placeholder","Departamento",3,"selectionChange","formControlName"],["placeholder","Ciudad",3,"formControlName"],["matInput","","placeholder","Direcci\xF3n",3,"formControlName"],["matInput","","placeholder","Celular",3,"formControlName"],["matInput","","placeholder","Tel\xE9fono",3,"formControlName"],["matInput","","placeholder","Correo electronico",3,"formControlName"],["placeholder","Empresa",3,"formControlName"],["matInput","","placeholder","Cargo",3,"formControlName"],["placeholder","Tipo de contrato"],[3,"value"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Salario base"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Otros ingresos"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Salario devengdado",3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Salud"],["matInput","","placeholder","Pensi\xF3n"],["placeholder","Tipo de cuenta",3,"formControlName"],["placeholder","Bancos",3,"formControlName"],["matInput","","placeholder","N\xFAmero de cuenta",3,"formControlName"],["placeholder","Nivel de riesgo",3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Capacidad de endeudamiento",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[1,"h-full","w-full","rounded-full","object-cover",3,"src","alt"],[1,"flex","h-full","w-full","items-center","justify-center","rounded-full","bg-gray-200","text-8xl","font-semibold","uppercase","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[3,"value",4,"ngFor","ngForOf"]],template:function(i,s){if(i&1){let c=ne();n(0,"div",6)(1,"div",7)(2,"div",8),l(3),e(),n(4,"form",9)(5,"div",10)(6,"div",11),d(7,"mat-icon",12),n(8,"div",13),l(9," Cambiar foto "),e(),n(10,"input",14),x("change",function(h){return F(c),T(s.onFileSelected(h))}),e()(),f(11,Qe,2,2,"ng-container",15)(12,We,2,1,"ng-template",null,0,me),e(),n(14,"div")(15,"p",16),l(16,"Informaci\xF3n general"),e(),n(17,"div",17)(18,"div",18),x("click",function(){F(c);let h=w(22);return T(h.toggle())}),n(19,"div",19),l(20),e()(),d(21,"mat-slide-toggle",20,1),e(),n(23,"div",21)(24,"mat-form-field",22)(25,"mat-label"),l(26,"Primer nombre"),e(),d(27,"input",23),e(),n(28,"mat-form-field",22)(29,"mat-label"),l(30,"Segundo nombre"),e(),d(31,"input",24),e()(),n(32,"div",21)(33,"mat-form-field",22)(34,"mat-label"),l(35,"Primer apellido"),e(),d(36,"input",25),e(),n(37,"mat-form-field",22)(38,"mat-label"),l(39,"Segundo apellido"),e(),d(40,"input",26),e()(),n(41,"div",21)(42,"mat-form-field",22)(43,"mat-label"),l(44,"Tipo de documento"),e(),n(45,"mat-select",27),f(46,et,2,1,"ng-container",28),E(47,"async"),e()(),n(48,"mat-form-field",22)(49,"mat-label"),l(50,"N\xFAmero de identificaci\xF3n"),e(),d(51,"input",29),e()(),n(52,"div",21)(53,"mat-form-field",22)(54,"mat-label"),l(55,"G\xE9nero"),e(),n(56,"mat-select",30),f(57,it,2,1,"ng-container",28),E(58,"async"),e()(),n(59,"mat-form-field",22)(60,"mat-label"),l(61,"Fecha de nacimiento"),e(),d(62,"input",31)(63,"mat-datepicker-toggle",32)(64,"mat-datepicker",null,2),e()()(),n(66,"div")(67,"p",16),l(68,"Informaci\xF3n demogr\xE1fica"),e(),n(69,"div",21)(70,"mat-form-field",22)(71,"mat-label"),l(72,"Departamento"),e(),n(73,"mat-select",33,3),x("selectionChange",function(h){return F(c),T(s.onSelected(h))}),f(75,at,2,1,"ng-container",28),E(76,"async"),e()(),n(77,"mat-form-field",22)(78,"mat-label"),l(79,"Ciudad"),e(),n(80,"mat-select",34),f(81,rt,2,1,"ng-container",28),E(82,"async"),e()()(),n(83,"div",21)(84,"mat-form-field",22)(85,"mat-label"),l(86,"Direcci\xF3n"),e(),d(87,"input",35),e(),n(88,"mat-form-field",22)(89,"mat-label"),l(90,"Celular"),e(),d(91,"input",36),e()(),n(92,"div",21)(93,"mat-form-field",22)(94,"mat-label"),l(95,"Tel\xE9fono"),e(),d(96,"input",37),e(),n(97,"mat-form-field",22)(98,"mat-label"),l(99,"Email"),e(),d(100,"input",38),e()(),n(101,"div",21)(102,"mat-form-field",22)(103,"mat-label"),l(104,"Empresa"),e(),n(105,"mat-select",39),f(106,lt,2,1,"ng-container",28),E(107,"async"),e()(),n(108,"mat-form-field",22)(109,"mat-label"),l(110,"Cargo"),e(),d(111,"input",40),e()(),n(112,"div",21)(113,"mat-form-field",22)(114,"mat-label"),l(115,"Inicio de contrato"),e(),d(116,"input",31)(117,"mat-datepicker-toggle",32)(118,"mat-datepicker",null,4),e(),f(120,st,8,3,"ng-container",28),e(),n(121,"div",21)(122,"mat-form-field",22)(123,"mat-label"),l(124,"Tipo de contrato"),e(),n(125,"mat-select",41)(126,"mat-option",42),l(127,"Indefinido"),e(),n(128,"mat-option",42),l(129,"Bolsa de empleo"),e()()()(),n(130,"div",21)(131,"mat-form-field",22)(132,"mat-label"),l(133,"Salario base"),e(),d(134,"input",43),e(),n(135,"mat-form-field",22)(136,"mat-label"),l(137,"Otros ingresos"),e(),d(138,"input",44),e()(),n(139,"div",21)(140,"mat-form-field",22)(141,"mat-label"),l(142,"Salario devengado"),e(),d(143,"input",45),e()(),n(144,"div",21)(145,"mat-form-field",22)(146,"mat-label"),l(147,"Salud"),e(),d(148,"input",46),e(),n(149,"mat-form-field",22)(150,"mat-label"),l(151,"Pensi\xF3n"),e(),d(152,"input",47),e()(),n(153,"div",21)(154,"mat-form-field",22)(155,"mat-label"),l(156,"Tipo de cuenta"),e(),n(157,"mat-select",48),f(158,dt,2,1,"ng-container",28),E(159,"async"),e()()(),n(160,"div",21)(161,"mat-form-field",22)(162,"mat-label"),l(163,"Bancos"),e(),n(164,"mat-select",49),f(165,ft,2,1,"ng-container",28),E(166,"async"),e()(),n(167,"mat-form-field",22)(168,"mat-label"),l(169,"N\xFAmero de cuenta bancaria"),e(),d(170,"input",50),e()(),n(171,"div",21)(172,"mat-form-field",22)(173,"mat-label"),l(174,"Nivel de riesgo"),e(),n(175,"mat-select",51),f(176,gt,2,1,"ng-container",28),E(177,"async"),e()(),n(178,"mat-form-field",22)(179,"mat-label"),l(180,"Capacidad de endeudamiento"),e(),d(181,"input",52),e()()(),n(182,"div",53)(183,"button",54),x("click",function(){return F(c),T(s.closeDialog())}),n(184,"span"),l(185," Cancelar "),e()(),n(186,"button",55),x("click",function(){return F(c),T(s.onSave())}),n(187,"span"),l(188," Guardar "),e()()()()()()}if(i&2){let c=w(13),g=w(65),h=w(119);o(3),j(" ",s._matData.edit?"Actualizar trabajador":"Agregar trabajador"," "),o(),a("formGroup",s.form),o(3),a("svgIcon","heroicons_outline:camera"),o(4),a("ngIf",s.form.get("foto").value)("ngIfElse",c),o(9),j(" Estado ",s.form.get("estado").value?"Activo":"Inactivo"," "),o(),a("color","primary")("formControlName","estado"),o(6),a("formControlName","primerNombre"),o(4),a("formControlName","segundoNombre"),o(5),a("formControlName","primerApellido"),o(4),a("formControlName","segundoApellido"),o(5),a("formControlName","idTipoDoc"),o(),a("ngIf",b(47,46,s.tiposDocumentos$)),o(5),a("formControlName","numDoc"),o(5),a("formControlName","idGenero"),o(),a("ngIf",b(58,48,s.generos$)),o(5),a("matDatepicker",g)("formControlName","fechaNacimiento"),o(),a("for",g),o(10),a("formControlName","idDepartamento"),o(2),a("ngIf",b(76,50,s.departamentos$)),o(5),a("formControlName","idMunicipio"),o(),a("ngIf",b(82,52,s.municipios$)),o(6),a("formControlName","direccion"),o(4),a("formControlName","telefono"),o(5),a("formControlName","telefono2"),o(4),a("formControlName","correo"),o(5),a("formControlName","idSubEmpresa"),o(),a("ngIf",b(107,54,s.empresasClientes$)),o(5),a("formControlName","cargo"),o(5),a("matDatepicker",h)("formControlName","fechaInicioContrato"),o(),a("for",h),o(3),a("ngIf",s.form.get("estado").value==!1),o(23),a("formControlName","salarioDevengado"),o(14),a("formControlName","idTipoCuenta"),o(),a("ngIf",b(159,56,s.tipoCuentas$)),o(6),a("formControlName","idBanco"),o(),a("ngIf",b(166,58,s.bancos$)),o(5),a("formControlName","numCuentaBancaria"),o(5),a("formControlName","idNivelRiesgo"),o(),a("ngIf",b(177,60,s.riesgos$)),o(5),a("formControlName","capacidadEndeudamiento"),o(2),a("color","primary"),o(3),a("color","primary")}},dependencies:[L,z,Y,ve,Ne,ye,_e,Ee,be,xe,De,pe,fe,Te,le,se,Ae,$e,Ve,Se,Z,Oe,Fe],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let t=r;return t})();var Ye=(()=>{let r=class r{constructor(m,i,s){this._matDialog=m,this.estadoDatosService=i,this.empleadoService=s,this.data=[],this.columns=["Estado","Documento","Identificaci\xF3n","Nombre completo","Tel\xE9fono","Cargo"],this.columnPropertyMap={Estado:"estado",Documento:"nombreTipoDocumento",Identificaci\u00F3n:"numDoc","Nombre completo":"nombreCompleto",Tel\u00E9fono:"telefono",Cargo:"cargo"},this.buttons=[{label:"Edit",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open(ie,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(ie,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getEmpleados(){this.subcription$=this.empleadoService.getEmpleados().pipe(K(m=>(m.data.forEach(i=>{i.estado?i.estado=ee.ACTIVO:i.estado=ee.INACTIVO}),m)),K(m=>(m.data.forEach(i=>{i&&(i.nombreCompleto=i.primerNombre.concat(" ",i.segundoNombre?i.segundoNombre+" ":"",i.primerApellido," ",i.segundoApellido))}),m))).subscribe(m=>{this.data=m.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(i=>{i&&this.getEmpleados()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpleados(),this.listenGrid()}};r.\u0275fac=function(i){return new(i||r)(O(he),O(J),O(q))},r.\u0275cmp=G({type:r,selectors:[["app-grid-empleados"]],standalone:!0,features:[R],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Trabajadores"),e(),n(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),e(),n(8,"button",7),x("click",function(){return s.onNew()}),d(9,"mat-icon",8),n(10,"span",9),l(11,"Agregar"),e()()()(),n(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),e()()()),i&2&&(o(5),a("subscriptSizing","dynamic"),o(),a("svgIcon","heroicons_solid:magnifying-glass"),o(),a("autocomplete","off")("placeholder","Buscar"),o(),a("color","primary"),o(),a("svgIcon","heroicons_outline:plus"),o(5),a("columns",s.columns)("displayedColumns",s.columns)("columnPropertyMap",s.columnPropertyMap)("data",s.data)("buttons",s.buttons))},dependencies:[we,L,z,Z,Y]});let t=r;return t})();var ci=[{path:"",component:Ye}];export{ci as default};
