import{a as Ne}from"./chunk-XICZ7F6M.js";import{a as ke}from"./chunk-L2EUJHKC.js";import{a as De,b as Me,c as Te}from"./chunk-NC4T4CB6.js";import{a as Y}from"./chunk-3L6CDPYN.js";import{a as q}from"./chunk-EU232K5P.js";import{a as Ie}from"./chunk-24W6POED.js";import{a as E}from"./chunk-QSY2X5AG.js";import{b as Ee}from"./chunk-4WJQLHI3.js";import{a as z}from"./chunk-HDKW2ETT.js";import{a as _e}from"./chunk-QVWBKL7G.js";import"./chunk-ZVTEZKTX.js";import{g as R}from"./chunk-WPQBWK4Z.js";import{c as fe}from"./chunk-4EGREALI.js";import"./chunk-D266PZ43.js";import{a as Fe}from"./chunk-DTC2A3GX.js";import"./chunk-QBODUMHZ.js";import{C as we,E as Ae,F as Pe,J as _,b as L,e as ge,i as P,l as be,n as Q,p as ye,q as $,r as xe,u as U,x as Se,y as Ce}from"./chunk-AHLZYED5.js";import{$ as ue,Q as G,R as B,ea as F,ja as he}from"./chunk-PKP5UGVL.js";import"./chunk-WKKRDNHB.js";import"./chunk-NSFGWBZH.js";import{a as ve}from"./chunk-X4MAXHGU.js";import{b as ce,d as A}from"./chunk-EH2C4XHQ.js";import{e as le,f as se,g as me,i as pe,j as h,l as w,m as f,s as de}from"./chunk-D7SIZTGA.js";import{$b as s,Bb as T,Fb as o,Gb as n,Hb as u,Ib as ie,Jb as oe,Lb as ae,Rb as g,Tb as y,Y as N,_b as re,aa as te,ab as r,ac as O,bc as x,fa as K,ga as m,hc as S,ic as C,la as b,lc as ne,q as ee,qc as k,rc as I,sb as M,ub as p,wa as j,xa as V}from"./chunk-KIIQGHZ6.js";import{a as J,b as Z}from"./chunk-NEB6MB4Y.js";var D=(()=>{let i=class i{constructor(l,t){this._http=l,this.appSettings=t}getAliados(){return this._http.get(`${this.appSettings.pagoAliados.url.base}/Tabla`)}postAliados(l){return this._http.post(this.appSettings.pagoAliados.url.base,l)}getAliado(l){return this._http.get(`${this.appSettings.pagoAliados.url.base}/${l}`)}};i.\u0275fac=function(t){return new(t||i)(K(de),K(ve))},i.\u0275prov=te({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var je=(()=>{let i=class i{constructor(){this.datePipe=m(h),this.searchTerm="",this.currencyPipe=m(f),this.pagoAliadoService=m(D),this._matDialog=m(fe),this.estadoDatosService=m(z),this.router=m(A),this.data=[],this.columns=["Creaci\xF3n","Empresa","Total"],this.columnPropertyMap={Creaci\u00F3n:"fechaCreacion",Empresa:"nombreSubempresa",Total:"total"},this.buttons=[{label:"Eye",icon:"visibility",action:l=>{console.log("Editing",l),this.router.navigate(["/pages/gestion-cobros/aliados/detalle/",l.id])}}]}ngOnDestroy(){}ngOnInit(){this.getAliados(),this.listenGrid()}onNew(){this.router.navigate(["/pages/gestion-cobros/aliados/aliado"])}getAliados(){this.pagoAliadoService.getAliados().pipe(N(l=>(l.data.forEach(t=>{t.fechaCreacion=this.datePipe.transform(t.fechaCreacion,"dd/MM/yyyy"),t.total=this.currencyPipe.transform(t.total,"USD","symbol","1.2-2")}),l))).subscribe(l=>{this.data=l.data})}onSearch(l){let t=l.target;this.searchTerm=t.value.trim().toLowerCase()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getAliados()})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=b({type:i,selectors:[["app-grid-aliados"]],standalone:!0,features:[S([h,f]),C],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),s(3,"Pago proveedores"),n(),o(4,"div",3)(5,"mat-form-field",4),u(6,"mat-icon",5),o(7,"input",6),g("input",function(v){return e.onSearch(v)}),n()(),o(8,"button",7),g("click",function(){return e.onNew()}),u(9,"mat-icon",8),o(10,"span",9),s(11,"Pagar"),n()()()(),o(12,"div",10)(13,"div",11),u(14,"app-custom-table",12),n()()()),t&2&&(r(5),p("subscriptSizing","dynamic"),r(),p("svgIcon","heroicons_solid:magnifying-glass"),r(),p("autocomplete","off")("placeholder","Buscar"),r(),p("color","primary"),r(),p("svgIcon","heroicons_outline:plus"),r(5),p("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data)("buttons",e.buttons)("searchTerm",e.searchTerm))},dependencies:[E,P,he,_,F]});let a=i;return a})();var Be=(a,i)=>({"bg-credigray-100":a,"bg-green-600":i});function Le(a,i){if(a&1&&(o(0,"mat-option",23),s(1),n()),a&2){let d=i.$implicit;p("value",d.id),r(),O(d.razonSocial)}}function Re(a,i){if(a&1&&(ie(0),M(1,Le,2,2,"mat-option",22),oe()),a&2){let d=i.ngIf;r(),p("ngForOf",d.data)}}function $e(a,i){if(a&1&&(o(0,"div",18)(1,"div",24),u(2,"app-custom-table",25),n()()),a&2){let d=y();r(2),p("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)}}function Ue(a,i){if(a&1&&(o(0,"div",19)(1,"div",26)(2,"fuse-alert",27)(3,"span",28),s(4,"Informaci\xF3n"),n(),s(5),n()()()),a&2){let d=y();r(2),p("type","info")("appearance","outline"),r(3),x(" ",d.message," ")}}function ze(a,i){if(a&1&&(o(0,"span",21),s(1,"Subtotal: "),o(2,"span",29),s(3),k(4,"currency"),n()()),a&2){let d=y();r(3),O(I(4,1,d.subtotal))}}function Ye(a,i){if(a&1&&(o(0,"span",21),s(1,"Comisiones: "),o(2,"span",29),s(3),k(4,"currency"),n()()),a&2){let d=y();r(3),O(I(4,1,d.totalComision))}}function qe(a,i){if(a&1&&(o(0,"span",21),s(1,"Total a pagar: "),o(2,"span",29),s(3),k(4,"currency"),n()()),a&2){let d=y();r(3),x(" ",I(4,1,d.totalPagar)," ")}}var He={validation:!1},Ve=(()=>{let i=class i{constructor(){this.fb=m(we),this.empresaClienteService=m(ke),this.detalleConsumoService=m(Ne),this.pagoAliadoService=m(D),this.datePipe=m(h),this.swalService=m(Ie),this.estadosDatosService=m(z),this.fuseService=m(R),this.currencyPipe=m(f),this.decimalPipe=m(w),this.router=m(A),this.empresa$=this.empresaClienteService.getEmpresasClientes(),this.data=[],this.columns=["N\xFAmero de factura","Porcentaje","Valor","Comision","Total a Pagar"],this.columnPropertyMap={"N\xFAmero de factura":"numeroFactura",Porcentaje:"porcentajeSubEmpresa",Valor:"montoConsumo",Comision:"comision","Total a Pagar":"pagar"}}createForm(){this.form=this.fb.group({fechaFinal:["",Q.required],idSubEmpresa:["",Q.required]})}ngOnInit(){this.createForm()}closeDialog(){this.router.navigate(["/pages/gestion-cobros/aliados"])}onGet(){if(this.form.valid){let{fechaFinal:l,idSubEmpresa:t}=this.form.getRawValue();console.log(l);let c={fechaFinallData:this.datePipe.transform(l,"yyyy-MM-dd"),idSubEmpresa:t};this.getAllPago(c)}}onSave(){let{fechaFinal:l,idSubEmpresa:t}=this.form.getRawValue(),c={fechaFinal:this.datePipe.transform(l,"yyyy-MM-dd"),idSubEmpresa:t},v=[];v=this.data.map(H=>({idDetalleConsumo:H.id}));let X=Z(J({},c),{detallePagoAliado:v});console.log(X),this.fuseService.open(J({},Ee)).afterClosed().subscribe(H=>{H==="confirmed"&&this.postSave(X)})}getAllPago(l){this.detalleConsumoService.getPagosAliados(l).pipe(ee(t=>(this.subtotal=0,this.totalComision=0,this.totalPagar=0,t&&Array.isArray(t.data)?t.data.forEach(e=>{e.comision=e.montoConsumo*e.porcentajeSubEmpresa/100,e.pagar=e.montoConsumo-e.comision,e.montoConsumo=this.currencyPipe.transform(e.montoConsumo,"USD","symbol","1.2-2"),e.comision=this.currencyPipe.transform(e.comision,"USD","symbol","1.2-2"),e.pagar=this.currencyPipe.transform(e.pagar,"USD","symbol","1.2-2"),e.porcentajeSubEmpresa=this.decimalPipe.transform(e.porcentajeSubEmpresa,"1.2-2")+"%",this.subtotal+=parseFloat(e.montoConsumo.replace(/[^0-9.-]+/g,"")),this.totalComision+=parseFloat(e.comision.replace(/[^0-9.-]+/g,"")),this.totalPagar+=parseFloat(e.pagar.replace(/[^0-9.-]+/g,""))}):this.data=[],t))).subscribe(t=>{t&&Array.isArray(t.data)?this.data=t.data:(this.data=[],this.message=t.msg)})}postSave(l){this.pagoAliadoService.postAliados(l).subscribe(t=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.estadosDatosService.stateGrid.next(!0),this.closeDialog()},t=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=b({type:i,selectors:[["app-form-aliados"]],standalone:!0,features:[S([{provide:B,useClass:Y},{provide:G,useValue:"en-GB"},h,f,w,q(He)]),C],decls:39,vars:20,consts:[["finalPicker",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["placeholder","Empresa",3,"formControlName"],[4,"ngIf"],[1,"relative","p-4","border","border-gray-300","rounded-lg","mt-4"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-col","gap-4","justify-end","sm:flex-row"],[1,"sm:pr-4","text-gray-600","font-bold","text-right"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""],[1,"text-gray-800"]],template:function(t,e){if(t&1){let c=ae();o(0,"div",1)(1,"div",2),s(2),n(),o(3,"div",3)(4,"div",4)(5,"form",5)(6,"div",6)(7,"mat-form-field",7)(8,"mat-label"),s(9,"Fecha de corte"),n(),u(10,"input",8)(11,"mat-datepicker-toggle",9)(12,"mat-datepicker",null,0),n(),o(14,"mat-form-field",7)(15,"mat-label"),s(16,"Empresa"),n(),o(17,"mat-select",10),M(18,Re,2,1,"ng-container",11),k(19,"async"),n()()(),o(20,"div",12)(21,"div",13),s(22," Opciones "),n(),o(23,"div",14)(24,"button",15),g("click",function(){return j(c),V(e.closeDialog())}),o(25,"span"),s(26," Atras "),n()(),o(27,"button",16),g("click",function(){return j(c),V(e.onGet())}),o(28,"span"),s(29," Consultar "),n()(),o(30,"button",17),g("click",function(){return j(c),V(e.onSave())}),o(31,"span"),s(32," Pagar "),n()()()()()()(),M(33,$e,3,4,"div",18)(34,Ue,6,3,"div",19),o(35,"div",20),M(36,ze,5,3,"span",21)(37,Ye,5,3,"span",21)(38,qe,5,3,"span",21),n()()}if(t&2){let c=re(13);r(2),x(" ","Pago proveedores"," "),r(3),p("formGroup",e.form),r(5),p("matDatepicker",c)("formControlName","fechaFinal"),r(),p("for",c),r(6),p("formControlName","idSubEmpresa"),r(),p("ngIf",I(19,15,e.empresa$)),r(6),p("color","primary"),r(3),p("color","primary"),r(3),p("ngClass",ne(17,Be,e.data.length==0,e.data.length>0))("disabled",e.data.length==0),r(3),T(e.data.length?33:e.message?34:-1),r(3),T(e.subtotal?36:-1),r(),T(e.totalComision?37:-1),r(),T(e.totalPagar?38:-1)}},dependencies:[Pe,U,be,ye,$,Se,Ce,De,Me,Te,P,_,L,ge,pe,ue,_e,se,me,F,E,le,f,Fe],styles:[".custom-dialog-container{width:100%}@media (min-width: 1280px){  .custom-dialog-container{width:75%}}"]});let a=i;return a})();var Je={validation:!1},Oe=(()=>{let i=class i{constructor(){this.fuseService=m(R),this.currencyPipe=m(f),this.decimalPipe=m(w),this.router=m(A),this.activatedRoute=m(ce),this.pagoAliadoService=m(D),this.datePipe=m(h),this.data=[],this.form={fechaCreacion:"",fechaFinal:"",fechaIncial:"",nombreSubempresa:"",total:""},this.columns=["N\xFAmero de factura","Porcentaje","Valor facturado","Total"],this.columnPropertyMap={"N\xFAmero de factura":"numeroFactura",Porcentaje:"porcentaje","Valor facturado":"valorFacturado",Total:"total"}}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getAliado(this.id)}getAliado(l){this.subscription$=this.pagoAliadoService.getAliado(l).pipe(N(t=>(t.data.detallePagoAliados.forEach(e=>{e.total=this.currencyPipe.transform(e.total,"USD","symbol","1.2-2"),e.valorFacturado=this.currencyPipe.transform(e.valorFacturado,"USD","symbol","1.2-2"),e.porcentaje=this.decimalPipe.transform(e.porcentaje,"1.2-2")+"%"}),t))).subscribe(t=>{t&&Array.isArray(t.data.detallePagoAliados)&&(this.data=t.data.detallePagoAliados,this.form.fechaCreacion=this.datePipe.transform(t.data.fechaCreacion,"dd/MM/YYYY"),this.form.fechaFinal=t.data.fechaFinal,this.form.nombreSubempresa=t.data.nombreSubempresa,this.form.total=this.currencyPipe.transform(t.data.total,"USD","symbol","1.2-2"))})}ngOnDestroy(){this.subscription$.unsubscribe()}closeDialog(){this.router.navigate(["/pages/gestion-cobros/aliados"])}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=b({type:i,selectors:[["app-form-view-aliados"]],standalone:!0,features:[S([{provide:B,useClass:Y},{provide:G,useValue:"en-GB"},h,f,w,q(Je)]),C],decls:32,vars:10,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"sm:ml-8","mt-8","text-3xl","font-semibold","leading-tight","tracking-tight"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","Empresa","readonly","",3,"value"],[1,"relative","p-2","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","bg-green-600","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1),s(2),n(),o(3,"div",2)(4,"div",3)(5,"form",4)(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),s(9,"Empresa"),n(),u(10,"input",7),n(),o(11,"mat-form-field",6)(12,"mat-label"),s(13,"Fecha de creaci\xF3n"),n(),u(14,"input",7),n(),o(15,"mat-form-field",6)(16,"mat-label"),s(17,"Total"),n(),u(18,"input",7),n()(),o(19,"div",8)(20,"div",9),s(21," Opciones "),n(),o(22,"div",10)(23,"button",11),g("click",function(){return e.closeDialog()}),o(24,"span"),s(25," Atras "),n()(),o(26,"button",12)(27,"span"),s(28," Descargar "),n()()()()()()(),o(29,"div",13)(30,"div",14),u(31,"app-custom-table",15),n()()()),t&2&&(r(2),x(" ","Detalle pago proveedores"," "),r(8),p("value",e.form.nombreSubempresa),r(4),p("value",e.form.fechaCreacion),r(4),p("value",e.form.total),r(5),p("color","primary"),r(3),p("disabled",e.data.length==0),r(5),p("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data))},dependencies:[E,Ae,U,$,xe,P,L,_,F]});let a=i;return a})();var di=[{path:"",component:je},{path:"aliado",component:Ve},{path:"detalle/:id",component:Oe}];export{di as default};