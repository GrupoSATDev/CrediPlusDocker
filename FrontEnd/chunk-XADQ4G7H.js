import{a as $}from"./chunk-PWHPCRCN.js";import{a as Me}from"./chunk-43SPP6HY.js";import{a as Ie,b as Fe,c as Ne}from"./chunk-CHRBUJKG.js";import{a as Te}from"./chunk-Z2MQWE4K.js";import{a as we}from"./chunk-BPPQTQZC.js";import{a as xe}from"./chunk-VLAQALEV.js";import{a as Ae}from"./chunk-YS72ZEKI.js";import{a as U}from"./chunk-6IEWE3OU.js";import{a as ye}from"./chunk-LBLJGZM7.js";import{a as H,c as k,d as De}from"./chunk-JM6PAC2Q.js";import{a as Ce}from"./chunk-55LFJ2HF.js";import"./chunk-CHOSRW5W.js";import{a as me,b as le,c as se,k as de}from"./chunk-GIPKHLVS.js";import"./chunk-7U4JZNVG.js";import{B as Se,E as Ee,I as A,b as pe,e as ce,i as M,l as ue,p as ge,q as ve,t as he,w as _e,x as be}from"./chunk-CURMXRYA.js";import{$ as re,Q as ne,R as ae,ea as T,ja as w}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import{a as fe}from"./chunk-EJW5UVWF.js";import{f as ee,g as te,i as ie,j as W,r as oe}from"./chunk-NP3GUERB.js";import{$ as K,Cb as r,Db as e,Eb as d,Fb as h,Gb as _,Ib as X,Ob as b,Qb as B,Wa as Q,Xb as z,Yb as s,Za as t,Zb as S,_a as F,_b as L,dc as Y,ea as R,ec as N,fa as u,ka as I,mc as E,nc as C,pb as g,pc as Z,q as j,rb as o,ua as x,va as D}from"./chunk-32HXX3OB.js";import{a as y,d as O}from"./chunk-NEB6MB4Y.js";var $e=(()=>{let a=class a{constructor(m,n){this._http=m,this.appSettings=n}getCargos(){return this._http.get(this.appSettings.cargos.url.base)}postCargos(m){return delete m.id,this._http.post(this.appSettings.cargos.url.base,m)}putCargos(m){let n=m.id;return delete m.id,this._http.put(`${this.appSettings.cargos.url.base}/${n}`,m)}};a.\u0275fac=function(n){return new(n||a)(R(oe),R(fe))},a.\u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"});let i=a;return i})();function Pe(i,a){if(i&1&&(h(0),d(1,"img",24),_()),i&2){let l=B();t(),o("src",l.image,Q)("alt","Profile avatar")}}function Oe(i,a){if(i&1&&(r(0,"div",25),s(1),e()),i&2){let l,m=B();t(),L(" ",(l=m.form.get("primerNombre").value.charAt(0))!==null&&l!==void 0?l:"P"," ")}}function je(i,a){if(i&1&&(r(0,"mat-option",27),s(1),e()),i&2){let l=a.$implicit;o("value",l.id),t(),S(l.nombre)}}function Re(i,a){if(i&1&&(h(0),g(1,je,2,2,"mat-option",26),_()),i&2){let l=a.ngIf;t(),o("ngForOf",l.data)}}function Be(i,a){if(i&1&&(r(0,"mat-option",27),s(1),e()),i&2){let l=a.$implicit;o("value",l.id),t(),S(l.nombre)}}function ze(i,a){if(i&1&&(h(0),g(1,Be,2,2,"mat-option",26),_()),i&2){let l=a.ngIf;t(),o("ngForOf",l.data)}}function Le(i,a){if(i&1&&(r(0,"mat-option",27),s(1),e()),i&2){let l=a.$implicit;o("value",l.id),t(),S(l.nombre)}}function We(i,a){if(i&1&&(h(0),g(1,Le,2,2,"mat-option",26),_()),i&2){let l=a.ngIf;t(),o("ngForOf",l.data)}}function He(i,a){if(i&1&&(r(0,"mat-option",27),s(1),e()),i&2){let l=a.$implicit;o("value",l.id),t(),S(l.nombre)}}function Ue(i,a){if(i&1&&(h(0),g(1,He,2,2,"mat-option",26),_()),i&2){let l=a.ngIf;t(),o("ngForOf",l.data)}}function Je(i,a){if(i&1&&(r(0,"mat-option",27),s(1),e()),i&2){let l=a.$implicit;o("value",l.id),t(),S(l.razonSocial)}}function qe(i,a){if(i&1&&(h(0),g(1,Je,2,2,"mat-option",26),_()),i&2){let l=a.ngIf;t(),o("ngForOf",l.data)}}var J=(()=>{let a=class a{constructor(){this.fb=u(Se),this.dialogRef=u(me),this.fuseService=u(de),this.estadosDatosService=u(k),this.toasService=u(De),this.tiposDocumentosService=u(we),this._locacionService=u(xe),this.generoService=u(Ae),this.empresaClienteService=u(Me),this.datePipe=u(W),this.empleadosServices=u($),this.cargosServices=u($e),this.departamentos$=this._locacionService.getDepartamentos(),this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos(),this.generos$=this.generoService.getGeneros(),this.empresasClientes$=this.empresaClienteService.getEmpresas(),this.cargos$=this.cargosServices.getCargos(),this._matData=u(le),this.profile={avatar:"",name:"Pedro"}}ngOnInit(){this.createForm();let m=this._matData;if(m.edit){let n=m.data;this.form.patchValue(n);let{idDepartamento:p,fechaNacimiento:c}=n,f=new Date(c);this.form.patchValue({fechaNacimiento:f}),this.municipios$=this._locacionService.getMunicipio(p),this.image=`data:image/png;base64,  ${n.foto}`}}onFileSelected(m){let n=m.target;if(n.files&&n.files.length>0){let p=n.files[0],c=new FileReader;c.onload=()=>{let f=c.result;this.image=f;let v=f.split(",")[1];this.form.get("foto").setValue(v)},c.readAsDataURL(p)}}getMunicipios(m){let n=m.value;this.municipios$=this._locacionService.getMunicipio(n)}onSave(){if(this.form.valid)if(this._matData.edit){let n=this.form.getRawValue(),{idDepartamento:c,fechaNacimiento:f}=n,v=O(n,["idDepartamento","fechaNacimiento"]),G=this.datePipe.transform(f,"dd/MM/yyyy"),V=y({fechaNacimiento:G},v);this.fuseService.open(y({},H)).afterClosed().subscribe(P=>{P==="confirmed"?this.empleadosServices.putEmpleados(V).subscribe(q=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let m=this.form.getRawValue(),{idDepartamento:c,fechaNacimiento:f}=m,v=O(m,["idDepartamento","fechaNacimiento"]),G=this.datePipe.transform(f,"dd/MM/yyyy"),V=y({fechaNacimiento:G},v);this.fuseService.open(y({},H)).afterClosed().subscribe(P=>{P==="confirmed"?this.empleadosServices.postEmpleados(V).subscribe(q=>{console.log(q),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],primerNombre:[""],segundoNombre:[""],primerApellido:[""],segundoApellido:[""],idTipoDoc:[""],numDoc:[""],idDepartamento:[""],idMunicipio:[""],telefono:[""],telefono2:[""],direccion:[""],idGenero:[""],correo:[""],cargo:[""],fechaNacimiento:[""],foto:[""],firma:[""],idSubEmpresa:[""]})}closeDialog(){this.dialogRef.close()}};a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=I({type:a,selectors:[["app-form-empleados"]],standalone:!0,features:[Y([{provide:ae,useClass:Te},{provide:ne,useValue:"en-GB"},W]),N],decls:107,vars:40,consts:[["noAvatar",""],["picker",""],["data",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"group","relative","mx-auto","mt-8","flex","h-40","w-40","flex-0","rounded-full","mb-8"],[1,"absolute","inset-0","hidden","cursor-pointer","flex-col","items-center","justify-center","rounded-full","bg-gray-800","bg-opacity-80","backdrop-blur","backdrop-filter","group-hover:flex"],[1,"text-white",3,"svgIcon"],[1,"mx-6","mt-2","text-center","font-medium","text-white"],["type","file",1,"absolute","inset-0","opacity-0","cursor-pointer",3,"change"],[4,"ngIf","ngIfElse"],[1,"flex","gap-2.5"],[1,"w-full"],["matInput","",3,"formControlName"],[3,"formControlName"],[4,"ngIf"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[3,"selectionChange","formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"click","color"],[1,"h-full","w-full","rounded-full","object-cover",3,"src","alt"],[1,"flex","h-full","w-full","items-center","justify-center","rounded-full","bg-gray-200","text-8xl","font-semibold","uppercase","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,p){if(n&1){let c=X();r(0,"div",3)(1,"div",4)(2,"div",5),s(3),e(),r(4,"form",6)(5,"div",7)(6,"div",8),d(7,"mat-icon",9),r(8,"div",10),s(9," Cambiar foto "),e(),r(10,"input",11),b("change",function(v){return x(c),D(p.onFileSelected(v))}),e()(),g(11,Pe,2,2,"ng-container",12)(12,Oe,2,1,"ng-template",null,0,Z),e(),r(14,"div",13)(15,"mat-form-field",14)(16,"mat-label"),s(17,"Primer nombre"),e(),d(18,"input",15),e(),r(19,"mat-form-field",14)(20,"mat-label"),s(21,"Segundo nombre"),e(),d(22,"input",15),e()(),r(23,"div",13)(24,"mat-form-field",14)(25,"mat-label"),s(26,"Primer apellido"),e(),d(27,"input",15),e(),r(28,"mat-form-field",14)(29,"mat-label"),s(30,"Segundo apellido"),e(),d(31,"input",15),e()(),r(32,"div",13)(33,"mat-form-field",14)(34,"mat-label"),s(35,"Tipo de documento"),e(),r(36,"mat-select",16),g(37,Re,2,1,"ng-container",17),E(38,"async"),e()(),r(39,"mat-form-field",14)(40,"mat-label"),s(41,"N\xFAmero de identificaci\xF3n"),e(),d(42,"input",15),e()(),r(43,"div",13)(44,"mat-form-field",14)(45,"mat-label"),s(46,"G\xE9nero"),e(),r(47,"mat-select",16),g(48,ze,2,1,"ng-container",17),E(49,"async"),e()(),r(50,"mat-form-field",14)(51,"mat-label"),s(52,"Fecha de nacimiento"),e(),d(53,"input",18)(54,"mat-datepicker-toggle",19)(55,"mat-datepicker",null,1),e()(),r(57,"div",13)(58,"mat-form-field",14)(59,"mat-label"),s(60,"Departamento"),e(),r(61,"mat-select",20,2),b("selectionChange",function(v){return x(c),D(p.getMunicipios(v))}),g(63,We,2,1,"ng-container",17),E(64,"async"),e()(),r(65,"mat-form-field",14)(66,"mat-label"),s(67,"Ciudad"),e(),r(68,"mat-select",16),g(69,Ue,2,1,"ng-container",17),E(70,"async"),e()()(),r(71,"div",13)(72,"mat-form-field",14)(73,"mat-label"),s(74,"Direcci\xF3n"),e(),d(75,"input",15),e(),r(76,"mat-form-field",14)(77,"mat-label"),s(78,"Celular"),e(),d(79,"input",15),e()(),r(80,"div",13)(81,"mat-form-field",14)(82,"mat-label"),s(83,"Tel\xE9fono"),e(),d(84,"input",15),e(),r(85,"mat-form-field",14)(86,"mat-label"),s(87,"Email"),e(),d(88,"input",15),e()(),r(89,"div",13)(90,"mat-form-field",14)(91,"mat-label"),s(92,"Cargo"),e(),d(93,"input",15),e(),r(94,"mat-form-field",14)(95,"mat-label"),s(96,"Empresa"),e(),r(97,"mat-select",16),g(98,qe,2,1,"ng-container",17),E(99,"async"),e()()(),r(100,"div",21)(101,"button",22),b("click",function(){return x(c),D(p.closeDialog())}),r(102,"span"),s(103," Cancelar "),e()(),r(104,"button",23),b("click",function(){return x(c),D(p.onSave())}),r(105,"span"),s(106," Guardar "),e()()()()()()}if(n&2){let c=z(13),f=z(56);t(3),L(" ",p._matData.edit?"Actualizar empleado":"Crear empleado"," "),t(),o("formGroup",p.form),t(3),o("svgIcon","heroicons_outline:camera"),t(4),o("ngIf",p.form.get("foto").value)("ngIfElse",c),t(7),o("formControlName","primerNombre"),t(4),o("formControlName","segundoNombre"),t(5),o("formControlName","primerApellido"),t(4),o("formControlName","segundoApellido"),t(5),o("formControlName","idTipoDoc"),t(),o("ngIf",C(38,30,p.tiposDocumentos$)),t(5),o("formControlName","numDoc"),t(5),o("formControlName","idGenero"),t(),o("ngIf",C(49,32,p.generos$)),t(5),o("matDatepicker",f)("formControlName","fechaNacimiento"),t(),o("for",f),t(7),o("formControlName","idDepartamento"),t(2),o("ngIf",C(64,34,p.departamentos$)),t(5),o("formControlName","idMunicipio"),t(),o("ngIf",C(70,36,p.municipios$)),t(6),o("formControlName","direccion"),t(4),o("formControlName","telefono"),t(5),o("formControlName","telefono2"),t(4),o("formControlName","correo"),t(5),o("formControlName","cargo"),t(4),o("formControlName","idSubEmpresa"),t(),o("ngIf",C(99,38,p.empresasClientes$)),t(3),o("color","primary"),t(3),o("color","primary")}},dependencies:[T,M,A,pe,Ee,he,ue,ge,ve,_e,be,ie,re,Ce,ee,te,Ie,Fe,Ne,ce,w]});let i=a;return i})();var Ge=(()=>{let a=class a{constructor(m,n,p){this._matDialog=m,this.estadoDatosService=n,this.empleadoService=p,this.data=[],this.columns=["Estado","Documento","Identificaci\xF3n","Nombre completo","Tel\xE9fono","Cargo"],this.columnPropertyMap={Estado:"estado",Documento:"nombreTipoDocumento",Identificaci\u00F3n:"numDoc","Nombre completo":"nombreCompleto",Tel\u00E9fono:"telefono",Cargo:"cargo"},this.buttons=[{label:"Edit",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open(J,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",width:"50%",maxWidth:"100%"})}onEdit(){this._matDialog.open(J,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",width:"50%",maxWidth:"100%"})}getEmpleados(){this.subcription$=this.empleadoService.getEmpleados().pipe(j(m=>(m.data.forEach(n=>{n.estado?n.estado=U.ACTIVO:n.estado=U.INACTIVO}),m)),j(m=>(m.data.forEach(n=>{n&&(n.nombreCompleto=n.primerNombre.concat(" ",n.segundoNombre?n.segundoNombre+" ":"",n.primerApellido," ",n.segundoApellido))}),m))).subscribe(m=>{this.data=m.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(n=>{n&&this.getEmpleados()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpleados(),this.listenGrid()}};a.\u0275fac=function(n){return new(n||a)(F(se),F(k),F($))},a.\u0275cmp=I({type:a,selectors:[["app-grid-empleados"]],standalone:!0,features:[N],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(n,p){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),s(3,"Empleados"),e(),r(4,"div",3)(5,"mat-form-field",4),d(6,"mat-icon",5)(7,"input",6),e(),r(8,"button",7),b("click",function(){return p.onNew()}),d(9,"mat-icon",8),r(10,"span",9),s(11,"Crear empleado"),e()()()(),r(12,"div",10)(13,"div",11),d(14,"app-custom-table",12),e()()()),n&2&&(t(5),o("subscriptSizing","dynamic"),t(),o("svgIcon","heroicons_solid:magnifying-glass"),t(),o("autocomplete","off")("placeholder","Buscar"),t(),o("color","primary"),t(),o("svgIcon","heroicons_outline:plus"),t(5),o("columns",p.columns)("displayedColumns",p.columns)("columnPropertyMap",p.columnPropertyMap)("data",p.data)("buttons",p.buttons))},dependencies:[ye,T,M,w,A]});let i=a;return i})();var Ot=[{path:"",component:Ge}];export{Ot as default};
