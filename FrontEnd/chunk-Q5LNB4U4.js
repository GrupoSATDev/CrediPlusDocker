import{a as x}from"./chunk-R4J4FHVP.js";import{a as se}from"./chunk-VLAQALEV.js";import{a as me}from"./chunk-LBLJGZM7.js";import{a as R,c as M,d as le}from"./chunk-JM6PAC2Q.js";import{a as ne}from"./chunk-55LFJ2HF.js";import"./chunk-CHOSRW5W.js";import{a as J,b as q,c as K,k as X}from"./chunk-GIPKHLVS.js";import"./chunk-7U4JZNVG.js";import{B as ae,E as re,I as D,b as Q,i as E,l as Y,p as Z,q as ee,t as te,w as ie,x as oe}from"./chunk-CURMXRYA.js";import{$ as H,ea as y,ja as U}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import"./chunk-EJW5UVWF.js";import{f as P,g as j,i as L,m as W}from"./chunk-NP3GUERB.js";import{Cb as o,Db as t,Eb as p,Fb as T,Gb as A,Ib as B,Ob as g,Yb as l,Za as e,Zb as G,_a as _,_b as k,ec as C,fa as f,ka as h,mc as V,nc as z,pb as v,rb as i,ua as b,va as S}from"./chunk-32HXX3OB.js";import{a as I,d as N}from"./chunk-NEB6MB4Y.js";function de(m,n){if(m&1&&(o(0,"mat-option",15),l(1),t()),m&2){let d=n.$implicit;i("value",d.id),e(),G(d.nombre)}}function fe(m,n){if(m&1&&(T(0),v(1,de,2,2,"mat-option",14),A()),m&2){let d=n.ngIf;e(),i("ngForOf",d.data)}}function ue(m,n){if(m&1&&(o(0,"mat-option",15),l(1),t()),m&2){let d=n.$implicit;i("value",d.id),e(),G(d.nombre)}}function ge(m,n){if(m&1&&(T(0),v(1,ue,2,2,"mat-option",14),A()),m&2){let d=n.ngIf;e(),i("ngForOf",d.data)}}var $=(()=>{let n=class n{constructor(){this.fb=f(ae),this._locacionService=f(se),this.empresasService=f(x),this.dialogRef=f(J),this.fuseService=f(X),this.estadosDatosService=f(M),this.toasService=f(le),this.departamentos$=this._locacionService.getDepartamentos(),this._matData=f(q)}getMunicipios(s){let a=s.value;this.municipios$=this._locacionService.getMunicipio(a)}ngOnInit(){this.createForm();let s=this._matData;if(s.edit){let a=s.data;this.form.patchValue(a);let{idDepartamento:r}=a;this.municipios$=this._locacionService.getMunicipio(r)}}createForm(){this.form=this.fb.group({id:[null],nit:[""],razonSocial:[""],correo:[""],telefono:[""],direccion:[""],idDepartamento:[""],idMunicipio:[""]})}onSave(){if(this.form.valid)if(this._matData.edit){let a=this.form.getRawValue(),{idDepartamento:c}=a,u=N(a,["idDepartamento"]);this.fuseService.open(I({},R)).afterClosed().subscribe(w=>{w==="confirmed"?this.empresasService.putEmpresa(u).subscribe(O=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let s=this.form.getRawValue(),{idDepartamento:c}=s,u=N(s,["idDepartamento"]);this.fuseService.open(I({},R)).afterClosed().subscribe(w=>{w==="confirmed"?this.empresasService.postEmpresa(u).subscribe(O=>{console.log(O),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}closeDialog(){this.dialogRef.close()}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=h({type:n,selectors:[["app-form-empresas"]],standalone:!0,features:[C],decls:45,vars:18,consts:[["data",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","nit","matInput","",3,"formControlName"],["matInput","",3,"formControlName"],[3,"selectionChange","formControlName"],[4,"ngIf"],[3,"formControlName"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(a,r){if(a&1){let c=B();o(0,"div",1)(1,"div",2)(2,"div",3),l(3),t(),o(4,"form",4)(5,"mat-form-field",5)(6,"mat-label"),l(7,"Nit"),t(),p(8,"input",6),t(),o(9,"mat-form-field",5)(10,"mat-label"),l(11,"Raz\xF3n social"),t(),p(12,"input",7),t(),o(13,"mat-form-field",5)(14,"mat-label"),l(15,"Correo"),t(),p(16,"input",7),t(),o(17,"mat-form-field",5)(18,"mat-label"),l(19,"Tel\xE9fono"),t(),p(20,"input",7),t(),o(21,"mat-form-field",5)(22,"mat-label"),l(23,"Departamento"),t(),o(24,"mat-select",8,0),g("selectionChange",function(F){return b(c),S(r.getMunicipios(F))}),v(26,fe,2,1,"ng-container",9),V(27,"async"),t()(),o(28,"mat-form-field",5)(29,"mat-label"),l(30,"Ciudad"),t(),o(31,"mat-select",10),v(32,ge,2,1,"ng-container",9),V(33,"async"),t()(),o(34,"mat-form-field",5)(35,"mat-label"),l(36,"Direcci\xF3n"),t(),p(37,"input",7),t(),o(38,"div",11)(39,"button",12),g("click",function(){return b(c),S(r.closeDialog())}),o(40,"span"),l(41," Cancelar "),t()(),o(42,"button",13),g("click",function(){return b(c),S(r.onSave())}),o(43,"span"),l(44),t()()()()()()}a&2&&(e(3),k(" ",r._matData.edit?"Actualizar empresa":"Agregar empresa"," "),e(),i("formGroup",r.form),e(4),i("formControlName","nit"),e(4),i("formControlName","razonSocial"),e(4),i("formControlName","correo"),e(4),i("formControlName","telefono"),e(4),i("formControlName","idDepartamento"),e(2),i("ngIf",z(27,14,r.departamentos$)),e(5),i("formControlName","idMunicipio"),e(),i("ngIf",z(33,16,r.municipios$)),e(5),i("formControlName","direccion"),e(2),i("color","primary"),e(3),i("color","primary"),e(2),k(" ",r._matData.edit?"Actualizar":"Guardar"," "))},dependencies:[E,D,y,Q,ne,H,j,L,P,re,te,Y,Z,ee,ie,oe]});let m=n;return m})();var ce=(()=>{let n=class n{constructor(s,a,r){this._matDialog=s,this.empresasService=a,this.estadoDatosService=r,this.searchTerm="",this.data=[],this.columns=["Nit","Razon social","Correo","Telefono","Direccion"],this.columnPropertyMap={Nit:"nit","Razon social":"razonSocial",Correo:"correo",Telefono:"telefono",Direccion:"direccion"},this.buttons=[{label:"Edit",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open($,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open($,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getEmpresas(){this.subcription$=this.empresasService.getEmpresas().subscribe(s=>{this.data=s.data})}ngOnInit(){this.getEmpresas(),this.listenGrid()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(a=>{a&&this.getEmpresas()})}onSearch(s){let a=s.target;this.searchTerm=a.value.trim().toLowerCase()}ngOnDestroy(){this.subcription$.unsubscribe()}ngAfterViewInit(){}};n.\u0275fac=function(a){return new(a||n)(_(K),_(x),_(M))},n.\u0275cmp=h({type:n,selectors:[["app-grid-empresas"]],standalone:!0,features:[C],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(a,r){a&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Empresas Maestras"),t(),o(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5),o(7,"input",6),g("input",function(u){return r.onSearch(u)}),t()(),o(8,"button",7),g("click",function(){return r.onNew()}),p(9,"mat-icon",8),o(10,"span",9),l(11,"Agregar"),t()()()(),o(12,"div",10)(13,"div",11),p(14,"app-custom-table",12),t()()()),a&2&&(e(5),i("subscriptSizing","dynamic"),e(),i("svgIcon","heroicons_solid:magnifying-glass"),e(),i("autocomplete","off")("placeholder","Buscar"),e(),i("color","primary"),e(),i("svgIcon","heroicons_outline:plus"),e(5),i("columns",r.columns)("displayedColumns",r.columns)("columnPropertyMap",r.columnPropertyMap)("data",r.data)("buttons",r.buttons)("searchTerm",r.searchTerm))},dependencies:[W,E,U,y,D,me]});let m=n;return m})();var Ke=[{path:"",component:ce}];export{Ke as default};
