import{a as Ve}from"./chunk-UY7QZ62J.js";import{a as Pe}from"./chunk-WVPPDZHY.js";import{a as V}from"./chunk-OVX3NFD3.js";import{a as Ge}from"./chunk-HAUSW77H.js";import{a as we}from"./chunk-7HAAQBXX.js";import{a as Ne,b as Me,c as ke}from"./chunk-NIDNKUZY.js";import{a as Ae}from"./chunk-EWC7O7YA.js";import{a as $e,b as Be}from"./chunk-JDVS6Z7H.js";import{a as Te}from"./chunk-MKBCZZKF.js";import{a as Z}from"./chunk-6IEWE3OU.js";import{a as Oe}from"./chunk-BK4RLMSC.js";import{a as Ie}from"./chunk-GRTEZM5R.js";import{a as Fe}from"./chunk-FSEIAN2B.js";import{a as L}from"./chunk-4WJQLHI3.js";import{a as A}from"./chunk-X5Y573WK.js";import{a as De}from"./chunk-CTPZLWJZ.js";import{a as xe}from"./chunk-YSIJR6ZQ.js";import"./chunk-EKEQAN42.js";import{g as ue}from"./chunk-5EJ56Z4T.js";import{a as me,b as se,c as le}from"./chunk-CPZFSZTM.js";import"./chunk-6AAUO4WA.js";import{C as Ee,F as ye,J as k,b as ce,e as pe,i as N,j as de,l as he,p as ve,q as Ce,u as Se,x as _e,y as be}from"./chunk-P24RU7FU.js";import{$ as ne,Q as ae,R as re,ea as M,ja as fe}from"./chunk-BMFSCGUM.js";import"./chunk-QJN4CBG2.js";import{a as ge}from"./chunk-IUELCRM3.js";import{$ as W,$b as E,Ab as v,Ic as oe,Jb as z,Kb as l,Lb as b,Mb as R,Oa as i,Pa as w,Sb as Y,Tb as I,Y as C,ac as y,ea as j,eb as u,fa as d,gb as a,ka as T,q as U,rb as n,sb as e,tb as f,ua as D,ub as S,va as F,vb as _,vc as ee,wc as te,xb as X,yc as ie,zc as H}from"./chunk-WDMQQ6H3.js";import{a as x,d as G}from"./chunk-NEB6MB4Y.js";var ze=(()=>{let r=class r{constructor(s,t){this._http=s,this.appSettings=t}getTiposEmpresas(){return this._http.get(this.appSettings.tiposEmpresas.url.base)}};r.\u0275fac=function(t){return new(t||r)(j(oe),j(ge))},r.\u0275prov=W({token:r,factory:r.\u0275fac,providedIn:"root"});let o=r;return o})();function He(o,r){if(o&1&&(n(0,"mat-option",36),l(1),e()),o&2){let c=r.$implicit;a("value",c.id),i(),b(c.nombre)}}function Le(o,r){if(o&1&&(S(0),u(1,He,2,2,"mat-option",35),_()),o&2){let c=r.ngIf;i(),a("ngForOf",c.data)}}function Ze(o,r){if(o&1&&(n(0,"mat-option",36),l(1),e()),o&2){let c=r.$implicit;a("value",c.id),i(),b(c.nombre)}}function Je(o,r){if(o&1&&(S(0),u(1,Ze,2,2,"mat-option",35),_()),o&2){let c=r.ngIf;i(),a("ngForOf",c.data)}}function qe(o,r){if(o&1&&(n(0,"mat-option",36),l(1),e()),o&2){let c=r.$implicit;a("value",c.id),i(),b(c.nombre)}}function Ke(o,r){if(o&1&&(S(0),u(1,qe,2,2,"mat-option",35),_()),o&2){let c=r.ngIf;i(),a("ngForOf",c.data)}}function Qe(o,r){if(o&1&&(n(0,"mat-option",36),l(1),e()),o&2){let c=r.$implicit;a("value",c.id),i(),b(c.nombre)}}function Ue(o,r){if(o&1&&(S(0),u(1,Qe,2,2,"mat-option",35),_()),o&2){let c=r.ngIf;i(),a("ngForOf",c.data)}}function We(o,r){if(o&1&&(n(0,"mat-option",36),l(1),e()),o&2){let c=r.$implicit;a("value",c.id),i(),b(c.nombre)}}function Xe(o,r){if(o&1&&(S(0),u(1,We,2,2,"mat-option",35),_()),o&2){let c=r.ngIf;i(),a("ngForOf",c.data)}}function Ye(o,r){if(o&1&&(n(0,"mat-option",36),l(1),e()),o&2){let c=r.$implicit;a("value",c.id),i(),b(c.nombre)}}function et(o,r){if(o&1&&(S(0),u(1,Ye,2,2,"mat-option",35),_()),o&2){let c=r.ngIf;i(),a("ngForOf",c.data)}}var tt={validation:!1},J=(()=>{let r=class r{constructor(){this.fb=d(Ee),this._locacionService=d(Te),this.empresasService=d(we),this.dialogRef=d(me),this.fuseService=d(ue),this.estadosDatosService=d(A),this.toasService=d(Ie),this.tiposEmpresaService=d(ze),this.empresaClienteService=d(V),this.subcripciones=d(Ve),this.bancosServices=d(Pe),this.tipoCuentasService=d(Ge),this.bancos$=this.bancosServices.getBancos().pipe(C(s=>{let t=s.data,m=this._matData;t&&!m.edit&&this.form.get("idBanco").setValue(t[0].id)})),this.tipoCuentas$=this.tipoCuentasService.getTipoCuentas().pipe(C(s=>{let t=s.data,m=this._matData;t&&!m.edit&&this.form.get("idTipoCuenta").setValue(t[0].id)})),this.departamentos$=this._locacionService.getDepartamentos().pipe(C(s=>{let t=s.data,m=this._matData;if(t&&!m.edit){this.form.get("idDepartamento").setValue(t[0].id);let p=this.form.get("idDepartamento").value;this.getMunicipios(p)}})),this.empresas$=this.empresasService.getEmpresas(),this.tiposEmpresas$=this.tiposEmpresaService.getTiposEmpresas().pipe(C(s=>{let t=s.data,m=this._matData;t&&!m.edit&&this.form.get("idTipoEmpresa").setValue(t[0].id)})),this.subcripciones$=this.subcripciones.getSubcripciones().pipe(C(s=>{let t=s.data,m=this._matData;t&&!m.edit&&this.form.get("idSubscripcion").setValue(t[0].id)})),this._matData=d(se),this.datePipe=d(H),this.swalService=d(Oe)}onSelected(s){let t=s.value;this.getMunicipios(t)}getMunicipios(s){this.municipios$=this._locacionService.getMunicipio(s).pipe(C(t=>{let m=t.data,p=this._matData;m&&!p.edit&&this.form.get("idMunicipio").setValue(m[0].id)}))}ngOnInit(){this.createForm();let s=this._matData;if(s.edit){let t=s.data;this.form.patchValue(t);let{idDepartamento:m,fechaCorte:p,estado:h}=t,g=new Date(p);this.form.patchValue({estado:h=="Activo",fechaCorte:g}),this.municipios$=this._locacionService.getMunicipio(m),this.currentValuePorcentaje=x({},this.form.get("porcCobro"))}}onSave(){if(this.form.valid)if(this._matData.edit){let t=this.form.getRawValue(),{idDepartamento:p,fechaCobro:h,porcCobro:g}=t,$=G(t,["idDepartamento","fechaCobro","porcCobro"]),B=this.datePipe.transform(h,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),O=x({fechaCobro:B,porcCobro:this.currentValuePorcentaje==g?g:Number(g/100)},$);this.fuseService.open(x({},L)).afterClosed().subscribe(K=>{K==="confirmed"?this.empresaClienteService.putEmpresaCliente(O).subscribe(P=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro actualizado con exito!",timer:4e3}),this.closeDialog()},P=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al actualizar el registro!",timer:4e3})}):this.closeDialog()})}else{let s=this.form.getRawValue(),{idDepartamento:p,idEmpresa:h,fechaCobro:g,porcCobro:$}=s,B=G(s,["idDepartamento","idEmpresa","fechaCobro","porcCobro"]),O=this.datePipe.transform(g,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),q=x({fechaCobro:O,porcCobro:Number($/100)},B);this.fuseService.open(x({},L)).afterClosed().subscribe(P=>{P==="confirmed"?this.empresaClienteService.postEmpresaCliente(q).subscribe(Q=>{console.log(Q),this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},Q=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nit:[""],razonSocial:[""],correo:[""],telefono:[""],direccion:[""],idDepartamento:[""],idTipoEmpresa:[""],idMunicipio:[""],fechaCorte:[""],idSubscripcion:[""],valorSuscripcion:[""],porcCobro:[""],fechaCobro:[""],idTipoCuenta:[""],idBanco:[""],numCuentaBancaria:[""],estado:[!0]})}closeDialog(){this.dialogRef.close()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=T({type:r,selectors:[["app-form-empresas-clientes"]],standalone:!0,features:[Y([{provide:re,useClass:Ae},{provide:ae,useValue:"en-GB"},H,$e(tt)]),I],decls:112,vars:45,consts:[["twoStepToggle",""],["data",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"font-bold","mb-4","text-2xl"],[1,"flex","flex-col","sm:flex-row","mb-4"],[1,"fcursor-pointer",3,"click"],[1,"font-medium","leading-6"],[1,"ml-4",3,"color","formControlName"],[1,"flex","flex-col","sm:flex-row","mb-4","gap-2"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Nit",3,"formControlName"],["matInput","","placeholder","Raz\xF3n social",3,"formControlName"],["matInput","","placeholder","Correo electronico",3,"formControlName"],["matInput","","placeholder","Tel\xE9fono",3,"formControlName"],["placeholder","Departamento",3,"selectionChange","formControlName"],[4,"ngIf"],["placeholder","Ciudad",3,"formControlName"],["matInput","","placeholder","Direcci\xF3n",3,"formControlName"],["placeholder","Tipo de empresa",3,"formControlName"],["placeholder","Subscripci\xF3n",3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".","placeholder","Valor subcripci\xF3n",3,"formControlName"],["matInput","","placeholder","Porcentaje %",3,"formControlName","thousandSeparator","dropSpecialCharacters","mask"],["matInput","","placeholder","Fecha de cobro",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["placeholder","Tipo de cuenta",3,"formControlName"],["placeholder","Bancos",3,"formControlName"],["matInput","","placeholder","N\xFAmero de cuenta",3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"sm:w-auto","w-full","lg:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","lg:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,m){if(t&1){let p=X();n(0,"div",3)(1,"div",4)(2,"div",5),l(3),e(),n(4,"form",6)(5,"div")(6,"p",7),l(7,"Informaci\xF3n general"),e(),n(8,"div",8)(9,"div",9),v("click",function(){D(p);let g=z(13);return F(g.toggle())}),n(10,"div",10),l(11),e()(),f(12,"mat-slide-toggle",11,0),e(),n(14,"div",12)(15,"mat-form-field",13)(16,"mat-label"),l(17,"Nit"),e(),f(18,"input",14),e(),n(19,"mat-form-field",13)(20,"mat-label"),l(21,"Raz\xF3n social"),e(),f(22,"input",15),e()(),n(23,"div",12)(24,"mat-form-field",13)(25,"mat-label"),l(26,"Correo"),e(),f(27,"input",16),e(),n(28,"mat-form-field",13)(29,"mat-label"),l(30,"Tel\xE9fono"),e(),f(31,"input",17),e()(),n(32,"div",12)(33,"mat-form-field",13)(34,"mat-label"),l(35,"Departamento"),e(),n(36,"mat-select",18,1),v("selectionChange",function(g){return D(p),F(m.onSelected(g))}),u(38,Le,2,1,"ng-container",19),E(39,"async"),e()(),n(40,"mat-form-field",13)(41,"mat-label"),l(42,"Ciudad"),e(),n(43,"mat-select",20),u(44,Je,2,1,"ng-container",19),E(45,"async"),e()()(),n(46,"div",8)(47,"mat-form-field",13)(48,"mat-label"),l(49,"Direcci\xF3n"),e(),f(50,"input",21),e()()(),n(51,"div")(52,"p",7),l(53,"Informaci\xF3n de contrato"),e(),n(54,"div",12)(55,"mat-form-field",13)(56,"mat-label"),l(57,"Tipo de empresa"),e(),n(58,"mat-select",22),u(59,Ke,2,1,"ng-container",19),E(60,"async"),e()(),n(61,"mat-form-field",13)(62,"mat-label"),l(63,"Subscripci\xF3n"),e(),n(64,"mat-select",23),u(65,Ue,2,1,"ng-container",19),E(66,"async"),e()()(),n(67,"div",12)(68,"mat-form-field",13)(69,"mat-label"),l(70,"Valor subscripci\xF3n"),e(),f(71,"input",24),e(),n(72,"mat-form-field",13)(73,"mat-label"),l(74,"Porcentaje cobro"),e(),f(75,"input",25),e()(),n(76,"div",8)(77,"mat-form-field",13)(78,"mat-label"),l(79,"Fecha de cobro"),e(),f(80,"input",26)(81,"mat-datepicker-toggle",27)(82,"mat-datepicker",null,2),e()(),n(84,"div")(85,"p",7),l(86,"Informaci\xF3n bancaria"),e(),n(87,"div",28)(88,"mat-form-field",13)(89,"mat-label"),l(90,"Tipo de cuenta"),e(),n(91,"mat-select",29),u(92,Xe,2,1,"ng-container",19),E(93,"async"),e()(),n(94,"mat-form-field",13)(95,"mat-label"),l(96,"Bancos"),e(),n(97,"mat-select",30),u(98,et,2,1,"ng-container",19),E(99,"async"),e()()(),n(100,"div",28)(101,"mat-form-field",13)(102,"mat-label"),l(103,"N\xFAmero de cuenta bancaria"),e(),f(104,"input",31),e()()()(),n(105,"div",32)(106,"button",33),v("click",function(){return D(p),F(m.closeDialog())}),n(107,"span"),l(108," Cancelar "),e()(),n(109,"button",34),v("click",function(){return D(p),F(m.onSave())}),n(110,"span"),l(111," Guardar "),e()()()()()()}if(t&2){let p=z(83);i(3),R(" ",m._matData.edit?"Actualizar empresa":"Agregar empresa"," "),i(),a("formGroup",m.form),i(7),R(" Estado ",m.form.get("estado").value?"Activo":"Inactivo"," "),i(),a("color","primary")("formControlName","estado"),i(6),a("formControlName","nit"),i(4),a("formControlName","razonSocial"),i(5),a("formControlName","correo"),i(4),a("formControlName","telefono"),i(5),a("formControlName","idDepartamento"),i(2),a("ngIf",y(39,33,m.departamentos$)),i(5),a("formControlName","idMunicipio"),i(),a("ngIf",y(45,35,m.municipios$)),i(6),a("formControlName","direccion"),i(8),a("formControlName","idTipoEmpresa"),i(),a("ngIf",y(60,37,m.tiposEmpresas$)),i(5),a("formControlName","idSubscripcion"),i(),a("ngIf",y(66,39,m.subcripciones$)),i(6),a("formControlName","valorSuscripcion"),i(4),a("formControlName","porcCobro")("thousandSeparator",".")("dropSpecialCharacters",!0)("mask","9.00"),i(5),a("matDatepicker",p)("formControlName","fechaCobro"),i(),a("for",p),i(10),a("formControlName","idTipoCuenta"),i(),a("ngIf",y(93,41,m.tipoCuentas$)),i(5),a("formControlName","idBanco"),i(),a("ngIf",y(99,43,m.bancos$)),i(6),a("formControlName","numCuentaBancaria"),i(2),a("color","primary"),i(3),a("color","primary")}},dependencies:[M,N,k,ce,ye,Se,he,ve,Ce,_e,be,ie,ne,De,ee,te,Me,ke,Ne,de,pe,Be,xe],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:50%}}"]});let o=r;return o})();var Re=(()=>{let r=class r{constructor(s,t,m){this._matDialog=s,this.empresaClienteService=t,this.estadoDatosService=m,this.searchTerm="",this.data=[],this.columns=["Nit","Razon social","Correo","Telefono","Direccion","Estado"],this.columnPropertyMap={Nit:"nit","Razon social":"razonSocial",Correo:"correo",Telefono:"telefono",Direccion:"direccion",Estado:"estado"},this.buttons=[{label:"Edit",icon:"edit",action:p=>{console.log("Editing",p),this.selectedData=p,this.onEdit()}}]}onNew(){this._matDialog.open(J,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}onEdit(){this._matDialog.open(J,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",disableClose:!0,panelClass:"custom-dialog-container"})}getEmpresas(){this.subcription$=this.empresaClienteService.getEmpresas().pipe(U(s=>(s.data.forEach(t=>{t.estado?t.estado=Z.ACTIVO:t.estado=Z.INACTIVO}),s))).subscribe(s=>{this.data=s.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getEmpresas()})}onSearch(s){let t=s.target;this.searchTerm=t.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpresas(),this.listenGrid()}};r.\u0275fac=function(t){return new(t||r)(w(le),w(V),w(A))},r.\u0275cmp=T({type:r,selectors:[["app-grid-empresas-clientes"]],standalone:!0,features:[I],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(t,m){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Clientes - Aliados"),e(),n(4,"div",3)(5,"mat-form-field",4),f(6,"mat-icon",5),n(7,"input",6),v("input",function(h){return m.onSearch(h)}),e()(),n(8,"button",7),v("click",function(){return m.onNew()}),f(9,"mat-icon",8),n(10,"span",9),l(11,"Agregar"),e()()()(),n(12,"div",10)(13,"div",11),f(14,"app-custom-table",12),e()()()),t&2&&(i(5),a("subscriptSizing","dynamic"),i(),a("svgIcon","heroicons_solid:magnifying-glass"),i(),a("autocomplete","off")("placeholder","Buscar"),i(),a("color","primary"),i(),a("svgIcon","heroicons_outline:plus"),i(5),a("columns",m.columns)("displayedColumns",m.columns)("columnPropertyMap",m.columnPropertyMap)("data",m.data)("buttons",m.buttons)("searchTerm",m.searchTerm))},dependencies:[M,N,fe,k,Fe]});let o=r;return o})();var Ut=[{path:"",component:Re}];export{Ut as default};