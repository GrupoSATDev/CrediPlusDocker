import{a as A}from"./chunk-F223F3ON.js";import{a as Me,b as Ie,c as we}from"./chunk-UHISEFFO.js";import{a as Te}from"./chunk-Z2MQWE4K.js";import{a as xe}from"./chunk-GTV2Y2LM.js";import{a as De}from"./chunk-Q4KGMJO7.js";import{a as z}from"./chunk-6IEWE3OU.js";import{a as ye}from"./chunk-J5FCIPDY.js";import{a as j,c as Fe}from"./chunk-OPNYY4B4.js";import{a as k}from"./chunk-OFEOPKCC.js";import{a as _e}from"./chunk-KQASFADC.js";import"./chunk-CHOSRW5W.js";import{g as de}from"./chunk-MHKPHMKH.js";import{a as re,b as ne,c as me}from"./chunk-JND367CQ.js";import"./chunk-7U4JZNVG.js";import{C as Ee,F as be,J as N,b as se,e as le,i as w,j as pe,l as ue,p as ge,q as he,u as ve,x as Ce,y as Se}from"./chunk-K2P4EKGI.js";import{$ as ae,Q as ie,R as oe,ea as T,ja as ce}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import{a as fe}from"./chunk-L7XSEERQ.js";import{f as Y,g as Z,i as ee,j as P,r as te}from"./chunk-NP3GUERB.js";import{$ as J,Cb as r,Db as e,Eb as d,Fb as y,Gb as D,Ib as q,Ob as h,Xb as K,Yb as m,Za as o,Zb as x,_a as _,_b as Q,dc as U,ea as G,ec as F,fa as f,fc as X,ka as S,mc as M,nc as I,pb as u,q as H,rb as a,ua as E,va as b}from"./chunk-32HXX3OB.js";import{a as C,d as O}from"./chunk-NEB6MB4Y.js";var ke=(()=>{let t=class t{constructor(s,n){this._http=s,this.appSettings=n}getTiposEmpresas(){return this._http.get(this.appSettings.tiposEmpresas.url.base)}};t.\u0275fac=function(n){return new(n||t)(G(te),G(fe))},t.\u0275prov=J({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var $e=()=>[1,2,3];function Oe(i,t){if(i&1&&(r(0,"mat-option",18),m(1),e()),i&2){let p=t.$implicit;a("value",p.id),o(),x(p.nombre)}}function Ge(i,t){if(i&1&&(y(0),u(1,Oe,2,2,"mat-option",13),D()),i&2){let p=t.ngIf;o(),a("ngForOf",p.data)}}function Pe(i,t){if(i&1&&(r(0,"mat-option",18),m(1),e()),i&2){let p=t.$implicit;a("value",p.id),o(),x(p.nombre)}}function je(i,t){if(i&1&&(y(0),u(1,Pe,2,2,"mat-option",13),D()),i&2){let p=t.ngIf;o(),a("ngForOf",p.data)}}function ze(i,t){if(i&1&&(r(0,"mat-option",18),m(1),e()),i&2){let p=t.$implicit;a("value",p.id),o(),x(p.nombre)}}function Re(i,t){if(i&1&&(y(0),u(1,ze,2,2,"mat-option",13),D()),i&2){let p=t.ngIf;o(),a("ngForOf",p.data)}}function Be(i,t){if(i&1&&(r(0,"mat-option",18),m(1,"Valor por definir"),e()),i&2){let p=t.$implicit;a("value",p.id)}}var R=(()=>{let t=class t{constructor(){this.fb=f(Ee),this._locacionService=f(De),this.empresasService=f(xe),this.dialogRef=f(re),this.fuseService=f(de),this.estadosDatosService=f(k),this.toasService=f(Fe),this.tiposEmpresaService=f(ke),this.empresaClienteService=f(A),this.departamentos$=this._locacionService.getDepartamentos(),this.empresas$=this.empresasService.getEmpresas(),this.tiposEmpresas$=this.tiposEmpresaService.getTiposEmpresas(),this._matData=f(ne),this.datePipe=f(P)}getMunicipios(s){let n=s.value;this.municipios$=this._locacionService.getMunicipio(n)}ngOnInit(){this.createForm();let s=this._matData;if(s.edit){let n=s.data;this.form.patchValue(n);let{idDepartamento:l,fechaCorte:c}=n,g=new Date(c);this.form.patchValue({fechaCorte:g}),this.municipios$=this._locacionService.getMunicipio(l)}}onSave(){if(this.form.valid)if(this._matData.edit){let n=this.form.getRawValue(),{idDepartamento:c,fechaCorte:g}=n,v=O(n,["idDepartamento","fechaCorte"]),V=this.datePipe.transform(g,"dd/MM/yyyy"),$=C({fechaCorte:V},v);this.fuseService.open(C({},j)).afterClosed().subscribe(L=>{L==="confirmed"?this.empresaClienteService.putEmpresaCliente($).subscribe(W=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let s=this.form.getRawValue(),{idDepartamento:c,idEmpresa:g,fechaCorte:v}=s,V=O(s,["idDepartamento","idEmpresa","fechaCorte"]),$=this.datePipe.transform(v,"dd/MM/yyyy"),B=C({fechaCorte:$},V);this.fuseService.open(C({},j)).afterClosed().subscribe(W=>{W==="confirmed"?this.empresaClienteService.postEmpresaCliente(B).subscribe(Ve=>{console.log(Ve),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nit:[""],razonSocial:[""],correo:[""],telefono:[""],direccion:[""],idDepartamento:[""],idTipoEmpresa:[""],idMunicipio:[""],fechaCorte:[""],estado:[!0]})}closeDialog(){this.dialogRef.close()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["app-form-empresas-clientes"]],standalone:!0,features:[U([{provide:oe,useClass:Te},{provide:ie,useValue:"en-GB"},P]),F],decls:71,vars:26,consts:[["data",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[3,"selectionChange","formControlName"],[4,"ngIf"],[3,"formControlName"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[3,"value",4,"ngFor","ngForOf"],["matInput",""],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value"]],template:function(n,l){if(n&1){let c=q();r(0,"div",2)(1,"div",3)(2,"div",4),m(3),e(),r(4,"form",5)(5,"mat-form-field",6)(6,"mat-label"),m(7,"Nit"),e(),d(8,"input",7),e(),r(9,"mat-form-field",6)(10,"mat-label"),m(11,"Raz\xF3n social"),e(),d(12,"input",7),e(),r(13,"mat-form-field",6)(14,"mat-label"),m(15,"Correo"),e(),d(16,"input",7),e(),r(17,"mat-form-field",6)(18,"mat-label"),m(19,"Tel\xE9fono"),e(),d(20,"input",7),e(),r(21,"mat-form-field",6)(22,"mat-label"),m(23,"Departamento"),e(),r(24,"mat-select",8,0),h("selectionChange",function(v){return E(c),b(l.getMunicipios(v))}),u(26,Ge,2,1,"ng-container",9),M(27,"async"),e()(),r(28,"mat-form-field",6)(29,"mat-label"),m(30,"Ciudad"),e(),r(31,"mat-select",10),u(32,je,2,1,"ng-container",9),M(33,"async"),e()(),r(34,"mat-form-field",6)(35,"mat-label"),m(36,"Direcci\xF3n"),e(),d(37,"input",7),e(),r(38,"mat-form-field",6)(39,"mat-label"),m(40,"Fecha de corte"),e(),d(41,"input",11)(42,"mat-datepicker-toggle",12)(43,"mat-datepicker",null,1),e(),r(45,"mat-form-field",6)(46,"mat-label"),m(47,"Tipos de empresa"),e(),r(48,"mat-select",10),u(49,Re,2,1,"ng-container",9),M(50,"async"),e()(),r(51,"mat-form-field",6)(52,"mat-label"),m(53,"Subscripci\xF3n"),e(),r(54,"mat-select"),u(55,Be,2,1,"mat-option",13),e()(),r(56,"mat-form-field",6)(57,"mat-label"),m(58,"Valor subscripci\xF3n"),e(),d(59,"input",14),e(),r(60,"mat-form-field",6)(61,"mat-label"),m(62,"Porcentaje cobro"),e(),d(63,"input",14),e(),r(64,"div",15)(65,"button",16),h("click",function(){return E(c),b(l.closeDialog())}),r(66,"span"),m(67," Cancelar "),e()(),r(68,"button",17),h("click",function(){return E(c),b(l.onSave())}),r(69,"span"),m(70," Guardar "),e()()()()()()}if(n&2){let c=K(44);o(3),Q(" ",l._matData.edit?"Actualizar empresa":"Agregar empresa"," "),o(),a("formGroup",l.form),o(4),a("formControlName","nit"),o(4),a("formControlName","razonSocial"),o(4),a("formControlName","correo"),o(4),a("formControlName","telefono"),o(4),a("formControlName","idDepartamento"),o(2),a("ngIf",I(27,19,l.departamentos$)),o(5),a("formControlName","idMunicipio"),o(),a("ngIf",I(33,21,l.municipios$)),o(5),a("formControlName","direccion"),o(4),a("matDatepicker",c)("formControlName","fechaCorte"),o(),a("for",c),o(6),a("formControlName","idTipoEmpresa"),o(),a("ngIf",I(50,23,l.tiposEmpresas$)),o(6),a("ngForOf",X(25,$e)),o(10),a("color","primary"),o(3),a("color","primary")}},dependencies:[T,w,N,se,be,ve,ue,ge,he,Ce,Se,ee,ae,_e,Y,Z,Ie,we,Me,pe,le]});let i=t;return i})();var Ae=(()=>{let t=class t{constructor(s,n,l){this._matDialog=s,this.empresaClienteService=n,this.estadoDatosService=l,this.data=[],this.columns=["Nit","Razon social","Correo","Telefono","Direccion","Estado"],this.columnPropertyMap={Nit:"nit","Razon social":"razonSocial",Correo:"correo",Telefono:"telefono",Direccion:"direccion",Estado:"estado"},this.buttons=[{label:"Edit",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open(R,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(R,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getEmpresas(){this.subcription$=this.empresaClienteService.getEmpresas().pipe(H(s=>(s.data.forEach(n=>{n.estado?n.estado=z.ACTIVO:n.estado=z.INACTIVO}),s))).subscribe(s=>{this.data=s.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(n=>{n&&this.getEmpresas()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpresas(),this.listenGrid()}};t.\u0275fac=function(n){return new(n||t)(_(me),_(A),_(k))},t.\u0275cmp=S({type:t,selectors:[["app-grid-empresas-clientes"]],standalone:!0,features:[F],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(n,l){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Clientes - Aliados"),e(),r(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),e(),r(8,"button",7),h("click",function(){return l.onNew()}),d(9,"mat-icon",8),r(10,"span",9),m(11,"Agregar"),e()()()(),r(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),e()()()),n&2&&(o(5),a("subscriptSizing","dynamic"),o(),a("svgIcon","heroicons_solid:magnifying-glass"),o(),a("autocomplete","off")("placeholder","Buscar"),o(),a("color","primary"),o(),a("svgIcon","heroicons_outline:plus"),o(5),a("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons))},dependencies:[T,w,ce,N,ye]});let i=t;return i})();var Tt=[{path:"",component:Ae}];export{Tt as default};
