import{a as F}from"./chunk-BMX3QS5L.js";import{a as Ee}from"./chunk-YE4XGKUA.js";import{a as _e}from"./chunk-L2EUJHKC.js";import{a as Te,b as je,c as Fe}from"./chunk-VMONEH2L.js";import{a as H}from"./chunk-3L6CDPYN.js";import{a as J}from"./chunk-5E3BI53K.js";import{a as Me}from"./chunk-24W6POED.js";import{a as j}from"./chunk-HKOJEADL.js";import{b as we}from"./chunk-4WJQLHI3.js";import{a as q}from"./chunk-HDKW2ETT.js";import{a as Pe}from"./chunk-YRFWKKCQ.js";import"./chunk-ZVTEZKTX.js";import{g as L}from"./chunk-WPQBWK4Z.js";import{c as fe}from"./chunk-4EGREALI.js";import"./chunk-D266PZ43.js";import{a as Ce}from"./chunk-DTC2A3GX.js";import"./chunk-QBODUMHZ.js";import{B as z,C as Y,G as T,b as B,e as ue,i as P,l as be,n as W,p as he,q as $,r as ve,u as U,w as ye,x as xe,z as Se}from"./chunk-BFUN2CON.js";import{$ as ce,Q as R,R as O,ea as w,ja as ge}from"./chunk-PKP5UGVL.js";import"./chunk-WKKRDNHB.js";import"./chunk-NSFGWBZH.js";import"./chunk-X4MAXHGU.js";import{b as pe,d as C}from"./chunk-EH2C4XHQ.js";import{e as le,f as se,g as me,i as de,j as g,l as S,m as u}from"./chunk-D7SIZTGA.js";import{$b as l,Bb as M,Fb as a,Gb as i,Hb as c,Ib as ae,Jb as oe,Lb as ie,Rb as b,Tb as v,Y as I,_b as re,ab as o,ac as G,bc as E,ga as m,hc as y,ic as x,la as h,lc as ne,q as te,qc as D,rc as k,sb as _,ub as d,wa as N,xa as V}from"./chunk-KIIQGHZ6.js";import{a as Q,b as ee}from"./chunk-NEB6MB4Y.js";var ke=(()=>{let n=class n{constructor(){this.datePipe=m(g),this.currencyPipe=m(u),this.pagoTrabajadorService=m(F),this._matDialog=m(fe),this.estadoDatosService=m(q),this.router=m(C),this.data=[],this.columns=["Fecha de corte","Empresa","Pago registrado"],this.columnPropertyMap={"Fecha de corte":"fechaCreacion",Empresa:"nombreSubempresa","Pago registrado":"total"},this.buttons=[{label:"Eye",icon:"visibility",action:s=>{console.log("Editing",s),this.router.navigate(["/pages/gestion-cobros/trabajadores/pago/",s.id])}}]}ngOnDestroy(){}ngOnInit(){this.getPagoTrabajadores(),this.listenGrid()}onNew(){this.router.navigate(["/pages/gestion-cobros/trabajadores/pago"])}getPagoTrabajadores(){this.pagoTrabajadorService.getPagosTrabajadores().pipe(I(s=>(s.data.forEach(t=>{t.fechaCreacion=this.datePipe.transform(t.fechaCreacion,"dd/MM/yyyy"),t.total=this.currencyPipe.transform(t.total,"USD","symbol","1.2-2")}),s))).subscribe(s=>{this.data=s.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getPagoTrabajadores()})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=h({type:n,selectors:[["app-grid-pago-trabajadores"]],standalone:!0,features:[y([g,u]),x],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Registro de Pago Masivo"),i(),a(4,"div",3)(5,"mat-form-field",4),c(6,"mat-icon",5)(7,"input",6),i(),a(8,"button",7),b("click",function(){return e.onNew()}),c(9,"mat-icon",8),a(10,"span",9),l(11,"Registrar"),i()()()(),a(12,"div",10)(13,"div",11),c(14,"app-custom-table",12),i()()()),t&2&&(o(5),d("subscriptSizing","dynamic"),o(),d("svgIcon","heroicons_solid:magnifying-glass"),o(),d("autocomplete","off")("placeholder","Buscar"),o(),d("color","primary"),o(),d("svgIcon","heroicons_outline:plus"),o(5),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data)("buttons",e.buttons))},dependencies:[j,w,P,ge,T]});let r=n;return r})();var Ve=(r,n)=>({"bg-credigray-100":r,"bg-green-600":n});function Ge(r,n){if(r&1&&(a(0,"mat-option",23),l(1),i()),r&2){let p=n.$implicit;d("value",p.id),o(),G(p.razonSocial)}}function Re(r,n){if(r&1&&(ae(0),_(1,Ge,2,2,"mat-option",22),oe()),r&2){let p=n.ngIf;o(),d("ngForOf",p.data)}}function Oe(r,n){if(r&1&&(a(0,"div",18)(1,"div",24),c(2,"app-custom-table",25),i()()),r&2){let p=v();o(2),d("columns",p.columns)("displayedColumns",p.columns)("columnPropertyMap",p.columnPropertyMap)("data",p.data)}}function Be(r,n){if(r&1&&(a(0,"div",19)(1,"div",26)(2,"fuse-alert",27)(3,"span",28),l(4,"Informaci\xF3n"),i(),l(5),i()()()),r&2){let p=v();o(2),d("type","info")("appearance","outline"),o(3),E(" ",p.message," ")}}function Le(r,n){if(r&1&&(a(0,"span",21),l(1,"Subtotal: "),a(2,"span",29),l(3),D(4,"currency"),i()()),r&2){let p=v();o(3),G(k(4,1,p.subtotal))}}function $e(r,n){if(r&1&&(a(0,"span",21),l(1,"Comisiones: "),a(2,"span",29),l(3),D(4,"currency"),i()()),r&2){let p=v();o(3),G(k(4,1,p.totalComision))}}function Ue(r,n){if(r&1&&(a(0,"span",21),l(1,"Total a pagar: "),a(2,"span",29),l(3),D(4,"currency"),i()()),r&2){let p=v();o(3),E(" ",k(4,1,p.totalPagar)," ")}}var ze={validation:!1},Ae=(()=>{let n=class n{constructor(){this.fb=m(Se),this.empresaClienteService=m(_e),this.pagoTrabajadorService=m(F),this.cobroTrabajadorService=m(Ee),this.datePipe=m(g),this.swalService=m(Me),this.estadosDatosService=m(q),this.fuseService=m(L),this.currencyPipe=m(u),this.decimalPipe=m(S),this.router=m(C),this.empresa$=this.empresaClienteService.getEmpresasClientes(),this.tipoPago$=this.pagoTrabajadorService.tipoPagoTrabajadores().subscribe(s=>{this.idTipoPagoTrabajador=s.data[0].id}),this.data=[],this.fechaActual=new Date,this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor pendiente"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor pendiente":"valorPendiente"}}createForm(){this.form=this.fb.group({fechaFinal:["",W.required],idSubEmpresa:["",W.required],idTipoPagoTrabajador:[""]})}ngOnInit(){this.createForm()}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}onGet(){if(this.form.valid){let{fechaFinal:s,idSubEmpresa:t}=this.form.getRawValue();console.log(s);let f={fechaFinallData:this.datePipe.transform(s,"yyyy-MM-dd"),idSubEmpresa:t};this.getAllPagoTrabajador(f)}}onSave(){let{fechaFinal:s,idSubEmpresa:t,idTipoPagoTrabajador:e}=this.form.getRawValue(),A={fechaFinal:this.datePipe.transform(s,"yyyy-MM-dd"),idSubEmpresa:t},X=[];X=this.data.map(K=>({idCobroTrabajador:K.id}));let Z=ee(Q({},A),{idTipoPagoTrabajador:this.idTipoPagoTrabajador,detallePagoTrabajador:X});console.log(Z),this.fuseService.open(Q({},we)).afterClosed().subscribe(K=>{K==="confirmed"&&this.postSave(Z)})}getAllPagoTrabajador(s){this.cobroTrabajadorService.getCobroTrabajadores(s).pipe(te(t=>(this.subtotal=0,this.totalComision=0,this.totalPagar=0,t&&Array.isArray(t.data)?t.data.forEach(e=>{e.comision=e.montoConsumo*e.porcentajeSubEmpresa/100,e.pagar=e.montoConsumo-e.comision,e.montoConsumo=this.currencyPipe.transform(e.montoConsumo,"USD","symbol","1.2-2"),e.comision=this.currencyPipe.transform(e.comision,"USD","symbol","1.2-2"),e.pagar=this.currencyPipe.transform(e.pagar,"USD","symbol","1.2-2"),e.valorPendiente=this.currencyPipe.transform(e.valorPendiente,"USD","symbol","1.2-2"),e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy")}):this.data=[],t))).subscribe(t=>{t&&Array.isArray(t.data)?this.data=t.data:(this.data=[],this.message=t.msg)})}postSave(s){this.pagoTrabajadorService.postPagosTrabajadores(s).subscribe(t=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.estadosDatosService.stateGrid.next(!0),this.closeDialog()},t=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=h({type:n,selectors:[["app-form-pago-trabajadores"]],standalone:!0,features:[y([{provide:O,useClass:H},{provide:R,useValue:"en-GB"},g,u,S,J(ze)]),x],decls:39,vars:20,consts:[["finalPicker",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","pl-8"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName","max"],["matIconSuffix","",3,"for"],["placeholder","Empresa",3,"formControlName"],[4,"ngIf"],[1,"relative","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4","pr-2"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-col","gap-4","justify-end","sm:flex-row"],[1,"sm:pr-4","text-gray-600","font-bold","text-right"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""],[1,"text-gray-800"]],template:function(t,e){if(t&1){let f=ie();a(0,"div",1)(1,"div",2),l(2," Registro de Pago Masivo "),i(),a(3,"div",3)(4,"div",4)(5,"form",5)(6,"div",6)(7,"mat-form-field",7)(8,"mat-label"),l(9,"Fecha de corte"),i(),c(10,"input",8)(11,"mat-datepicker-toggle",9)(12,"mat-datepicker",null,0),i(),a(14,"mat-form-field",7)(15,"mat-label"),l(16,"Empresa"),i(),a(17,"mat-select",10),_(18,Re,2,1,"ng-container",11),D(19,"async"),i()()(),a(20,"div",12)(21,"div",13),l(22," Opciones "),i(),a(23,"div",14)(24,"button",15),b("click",function(){return N(f),V(e.closeDialog())}),a(25,"span"),l(26," Atras "),i()(),a(27,"button",16),b("click",function(){return N(f),V(e.onGet())}),a(28,"span"),l(29," Consultar "),i()(),a(30,"button",17),b("click",function(){return N(f),V(e.onSave())}),a(31,"span"),l(32," Regitrar "),i()()()()()()(),_(33,Oe,3,4,"div",18)(34,Be,6,3,"div",19),a(35,"div",20),_(36,Le,5,3,"span",21)(37,$e,5,3,"span",21)(38,Ue,5,3,"span",21),i()()}if(t&2){let f=re(13);o(5),d("formGroup",e.form),o(5),d("matDatepicker",f)("formControlName","fechaFinal")("max",e.fechaActual),o(),d("for",f),o(6),d("formControlName","idSubEmpresa"),o(),d("ngIf",k(19,15,e.empresa$)),o(6),d("color","primary"),o(3),d("color","primary"),o(3),d("ngClass",ne(17,Ve,e.data.length==0,e.data.length>0))("disabled",e.data.length==0),o(3),M(e.data.length?33:e.message?34:-1),o(3),M(e.subtotal?36:-1),o(),M(e.totalComision?37:-1),o(),M(e.totalPagar?38:-1)}},dependencies:[de,u,j,z,U,be,he,$,Ce,w,Te,je,Fe,P,T,B,ce,Pe,ue,se,me,Y,ye,xe,le]});let r=n;return r})();var Ye={validation:!1},Ie=(()=>{let n=class n{constructor(){this.fuseService=m(L),this.currencyPipe=m(u),this.decimalPipe=m(S),this.router=m(C),this.activatedRoute=m(pe),this.datePipe=m(g),this.pagoTrabajadorService=m(F),this.data=[],this.form={fechaCreacion:"",fechaFinal:"",fechaIncial:"",nombreSubempresa:"",total:""},this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor pagado"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor pagado":"valorPago"}}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getTrabajador(this.id)}getTrabajador(s){this.subscription$=this.pagoTrabajadorService.getPagosTrabajador(s).pipe(I(t=>(t.data.detallePagoTrabajador?.forEach(e=>{e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),e.valorPago=this.currencyPipe.transform(e.valorPago,"USD","symbol","1.2-2")}),t))).subscribe(t=>{console.log("Si entra"),this.data=t.data.detallePagoTrabajador,this.form.fechaCreacion=this.datePipe.transform(t.data.fechaCreacion,"dd/MM/YYYY"),this.form.fechaFinal=t.data.fechaFinal,this.form.nombreSubempresa=t.data.nombreSubempresa,this.form.total=this.currencyPipe.transform(t.data.total,"USD","symbol","1.2-2")})}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=h({type:n,selectors:[["app-form-view-pago-trabajadores"]],standalone:!0,features:[y([{provide:O,useClass:H},{provide:R,useValue:"en-GB"},g,u,S,J(Ye)]),x],decls:32,vars:9,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"sm:ml-8","mt-8","text-3xl","font-semibold","leading-tight","tracking-tight"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","Empresa","readonly","",3,"value"],[1,"relative","p-2","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","bg-green-600","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1),l(2),i(),a(3,"div",2)(4,"div",3)(5,"form",4)(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),l(9,"Empresa"),i(),c(10,"input",7),i(),a(11,"mat-form-field",6)(12,"mat-label"),l(13,"Fecha de corte"),i(),c(14,"input",7),i(),a(15,"mat-form-field",6)(16,"mat-label"),l(17,"Total"),i(),c(18,"input",7),i()(),a(19,"div",8)(20,"div",9),l(21," Opciones "),i(),a(22,"div",10)(23,"button",11),b("click",function(){return e.closeDialog()}),a(24,"span"),l(25," Atras "),i()(),a(26,"button",12)(27,"span"),l(28," Descargar "),i()()()()()()(),a(29,"div",13)(30,"div",14),c(31,"app-custom-table",15),i()()()),t&2&&(o(2),E(" ","Detalle pago trabajadores"," "),o(8),d("value",e.form.nombreSubempresa),o(4),d("value",e.form.fechaCreacion),o(4),d("value",e.form.total),o(5),d("color","primary"),o(8),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data))},dependencies:[j,z,U,$,ve,w,P,T,B,Y]});let r=n;return r})();var Wt=[{path:"",component:ke},{path:"pago",component:Ae},{path:"pago/:id",component:Ie}];export{Wt as default};