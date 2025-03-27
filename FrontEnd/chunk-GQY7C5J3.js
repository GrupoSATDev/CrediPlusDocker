import{a as Ce}from"./chunk-IM3AUN4N.js";import{a as he}from"./chunk-E2UHK2JZ.js";import{a as T}from"./chunk-FAEUQIFQ.js";import{a as be,b as g}from"./chunk-P4PAYY2C.js";import{a as me,b as pe,c as fe}from"./chunk-LZ3ZEVTF.js";import{a as ue}from"./chunk-DTORAJAR.js";import{a as j}from"./chunk-6IEWE3OU.js";import{a as de}from"./chunk-3R6HD5RM.js";import"./chunk-CJO6YW5P.js";import"./chunk-7YBFULQ5.js";import{g as Q,h as ce}from"./chunk-QVE5MGEQ.js";import{C as ie,F as ne,J as le,b as q,e as $,i as H,l as Y,n as E,p as Z,q as ee,s as oe,u as te,x as ae,y as re}from"./chunk-4PVPKBBG.js";import{e as W}from"./chunk-KAEQCOKJ.js";import"./chunk-YKJB7XET.js";import{h as U}from"./chunk-FUOI65R5.js";import{a as se}from"./chunk-73F67TFK.js";import"./chunk-XTYNXB3F.js";import"./chunk-PA2SJPJO.js";import{$a as P,Ad as z,Eb as D,Fb as f,Ka as r,Ob as N,Pb as L,Sb as X,Z as _,bb as i,fe as J,ga as p,ib as V,ka as I,ke as K,mb as l,nb as n,ob as h,pc as B,q as x,sb as R,ua as C,va as y,vb as v,vc as w,xb as A,xc as O,yc as F,zd as G}from"./chunk-ODJKW74N.js";import{a as M,d as k}from"./chunk-NEB6MB4Y.js";var ge=(c,s)=>({"bg-green-700":c,"bg-credigray-100":s});function Te(c,s){if(c&1&&(l(0,"div",16)(1,"div",18),h(2,"app-custom-table",19),n()()),c&2){let b=A();r(2),i("columns",b.columns)("displayedColumns",b.columns)("columnPropertyMap",b.columnPropertyMap)("data",b.data)("searchTerm",b.searchTerm)}}function Se(c,s){c&1&&(l(0,"div",17)(1,"div",20)(2,"fuse-alert",21)(3,"span",22),f(4,"Informaci\xF3n"),n(),f(5," No hay informaci\xF3n hasta el momento. "),n()()()),c&2&&(r(2),i("type","info")("appearance","outline"))}var ye=(()=>{let s=class s{constructor(){this.searchTerm="",this.fb=p(ie),this.reportesService=p(Ce),this.datePipe=p(w),this.estados=new oe([""]),this.detalleConsumoService=p(he),this.aesEncriptService=p(W),this.currencyPipe=p(F),this.fuseService=p(Q),this.detalleConsumo$=this.detalleConsumoService.getDetalleConsumo().pipe(x(t=>(t.data=t.data.filter(o=>o.nombre!=="Rechazado"&&o.nombre!=="Pagado"&&o.nombre!=="En Revision"&&o.nombre!=="En Mora"),t)),_(t=>{let o=t.data;o&&this.form.get("idEstadoCredito").setValue(o[0].id)})),this.data=[],this.exportData=[],this.columns=["Fecha de solicitud","Identificaci\xF3n","Trabajador","Empresa","Cargo","Tipo de contrato","Fecha de inicio contrato","Fecha fin de contrato","Salario devengado","Monto aprobado","Cupo disponible","Tipo de cuenta","Banco","Cuenta destino","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacionSolicitud",Identificaci\u00F3n:"documentoTrabajador",Trabajador:"nombreTrabajador",Empresa:"nombreEmpresaTrabajador",Cargo:"cargoTrabajador","Tipo de contrato":"tipoContratoTrabajador","Fecha de inicio contrato":"fechaInicioContratoTrabajador","Fecha fin de contrato":"fechaFinContratoTrabajador","Salario devengado":"salarioDevengadoTrabajador","Monto aprobado":"montoConsumo","Cupo disponible":"cupoDisponibleTrabajador","Tipo de cuenta":"tipoCuentaTrabajador",Banco:"bancotrabajador","Cuenta destino":"cuentaDestino",Estado:"nombreEstadoCredito"}}convertDataExport(t){let o=t.map(e=>({FechaSolicitud:e.fechaCreacionSolicitud,Identificacion:e.documentoTrabajador,Trabajador:e.nombreTrabajador,Empresa:e.nombreEmpresaTrabajador,Cargo:e.cargoTrabajador,TipoContrato:e.tipoContratoTrabajador,FechaInicioContrato:e.fechaInicioContratoTrabajador,FechaFinContrato:e.fechaFinContratoTrabajador,SalarioDevengado:T(e.salarioDevengadoTrabajador),MontoAprobado:T(e.montoConsumo),CupoDisponible:T(e.cupoDisponibleTrabajador),TipoCuenta:e.tipoCuentaTrabajador,Banco:e.bancotrabajador,Cuentadestino:e.cuentaDestino,Estado:e.nombreEstadoCredito}));this.exportData=o}onSearch(t){let o=t.target;this.searchTerm=o.value.trim().toLowerCase()}onSelect(t){this.data=[],this.exportData=[]}createForm(){this.form=this.fb.group({fechaInicio:["",E.required],fechaFinal:["",E.required]})}ngOnInit(){this.createForm()}onConsultar(){if(this.form.valid){let t=this.form.getRawValue(),{fechaInicio:o,fechaFinal:e}=t,m=k(t,["fechaInicio","fechaFinal"]),d=this.datePipe.transform(o,"yyyy-MM-dd"),S=this.datePipe.transform(e,"yyyy-MM-dd"),ve={fechaInicio:d,fechaFinal:S};this.reportesService.getReporteDesembolsos(ve).pipe(x(u=>(u.data.forEach(a=>{a.estado=a.estado?j.ACTIVO:j.INACTIVO,a.fechaCreacionSolicitud=this.datePipe.transform(a.fechaCreacionSolicitud,"dd/MM/yyyy"),a.fechaInicioContratoTrabajador=this.datePipe.transform(a.fechaInicioContratoTrabajador,"dd/MM/yyyy"),a.fechaFinContratoTrabajador=this.datePipe.transform(a.fechaFinContratoTrabajador,"dd/MM/yyyy"),a.salarioDevengadoTrabajador=this.currencyPipe.transform(a.salarioDevengadoTrabajador,"USD","symbol","1.2-2"),a.montoConsumo&&(a.montoConsumo=this.aesEncriptService.decrypt(a.montoConsumo)),a.cupoDisponibleTrabajador=this.currencyPipe.transform(a.cupoDisponibleTrabajador,"USD","symbol","1.2-2"),a.montoConsumo=this.currencyPipe.transform(a.montoConsumo,"USD","symbol","1.2-2")}),u))).subscribe(u=>{u.data?(this.data=u.data,this.convertDataExport(u.data)):this.data=[]})}}exportToExcel(t){this.fuseService.open(M({},ce)).afterClosed().subscribe(e=>{if(e==="confirmed"){let m=g.json_to_sheet(t),d=g.book_new();g.book_append_sheet(d,m,"Sheet1"),be(d,`Reporte de Desembolsos${this.datePipe.transform(new Date,"dd/MM/yyyy")}.xlsx`)}})}};s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=I({type:s,selectors:[["app-reporte-desembolsos"]],standalone:!0,features:[N([{provide:z,useClass:ue},{provide:G,useValue:"en-GB"},w,F,O]),L],decls:32,vars:19,consts:[["inicioPicker",""],["finalPicker",""],["cdkScrollable","",1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],[1,"px-6","border-b","mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"flex","flex-col","sm:flex-row","gap-2.5",3,"formGroup"],["floatLabel","always",1,"w-full","sm:w-1/2"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["mat-flat-button","",1,"sm:w-1/6","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:sm:w-1/6","w-full","sm:mt-6","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","searchTerm"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(o,e){if(o&1){let m=R();l(0,"div",2)(1,"div",3)(2,"div",4),f(3,"Reporte de Desembolsos"),n(),l(4,"div",5)(5,"mat-form-field",6),h(6,"mat-icon",7),l(7,"input",8),v("input",function(S){return C(m),y(e.onSearch(S))}),n()()()(),l(8,"div",9)(9,"form",10)(10,"mat-form-field",11)(11,"mat-label"),f(12,"Fecha de inicio"),n(),h(13,"input",12)(14,"mat-datepicker-toggle",13)(15,"mat-datepicker",null,0),n(),l(17,"mat-form-field",11)(18,"mat-label"),f(19,"Fecha fin"),n(),h(20,"input",12)(21,"mat-datepicker-toggle",13)(22,"mat-datepicker",null,1),n(),l(24,"button",14),v("click",function(){return C(m),y(e.onConsultar())}),l(25,"span"),f(26," Consultar "),n()(),l(27,"button",15),v("click",function(){return C(m),y(e.exportToExcel(e.exportData))}),l(28,"span"),f(29," Exportar "),n()()()(),P(30,Te,3,5,"div",16)(31,Se,6,2,"div",17),n()}if(o&2){let m=D(16),d=D(23);r(5),i("subscriptSizing","dynamic"),r(),i("svgIcon","heroicons_solid:magnifying-glass"),r(),i("autocomplete","off")("placeholder","Buscar"),r(2),i("formGroup",e.form),r(4),i("matDatepicker",m)("formControlName","fechaInicio"),r(),i("for",m),r(6),i("matDatepicker",d)("formControlName","fechaFinal"),r(),i("for",d),r(3),i("color","primary"),r(3),i("color","primary")("ngClass",X(16,ge,e.exportData.length,!e.exportData.length))("disabled",!e.exportData.length),r(3),V(e.data.length>0?30:31)}},dependencies:[U,de,se,J,me,pe,fe,H,K,le,q,$,ne,te,Y,Z,ee,ae,re,B]});let c=s;return c})();var oo=[{path:"",component:ye}];export{oo as default};
