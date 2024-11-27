import{a as F}from"./chunk-NSRSKA3U.js";import{a as Ee}from"./chunk-5KPGHXNF.js";import{a as Fe}from"./chunk-QIYVVOLP.js";import{a as we,b as je,c as _e}from"./chunk-EOWWQ4JG.js";import{a as H}from"./chunk-M6JKQUTX.js";import{a as J}from"./chunk-QDHNBSMD.js";import{a as Me}from"./chunk-OFI6PGZL.js";import{a as _}from"./chunk-M7Y7PXSI.js";import{b as Te}from"./chunk-4WJQLHI3.js";import{a as q}from"./chunk-VOLXTRGQ.js";import{a as Pe}from"./chunk-DUV3XJVH.js";import"./chunk-CNRP5CR4.js";import{g as L}from"./chunk-2XRFSBL3.js";import{c as fe}from"./chunk-BF24YLJO.js";import"./chunk-AIQUJILU.js";import{a as Ce}from"./chunk-EZC5HSZS.js";import"./chunk-ZFUJRZBK.js";import{C as Se,E as z,F as Y,J as j,b as B,e as ue,i as T,l as be,n as W,p as he,q as $,r as ve,u as U,x as ye,y as xe}from"./chunk-D3YOWHEC.js";import{Q as R,R as O,ba as ce,ga as w,la as ge}from"./chunk-V35GW63T.js";import"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import"./chunk-IX5SFALL.js";import{b as pe,d as P}from"./chunk-FSJGACMT.js";import{Cb as g,Cc as de,Dc as b,Eb as y,Fc as C,Gc as u,Lb as re,Mb as s,Nb as G,Ob as D,Qa as o,Ub as x,Vb as S,Yb as ne,_ as I,bc as k,cc as A,gb as M,ha as m,ib as d,ma as v,pb as E,q as te,tb as a,ub as i,vb as f,wa as N,wb as ae,xa as V,xb as oe,xc as le,yc as se,zb as ie,zc as me}from"./chunk-YBEOGPR3.js";import{a as Q,b as ee}from"./chunk-NEB6MB4Y.js";var ke=(()=>{let n=class n{constructor(){this.datePipe=m(b),this.searchTerm="",this.currencyPipe=m(u),this.pagoTrabajadorService=m(F),this._matDialog=m(fe),this.estadoDatosService=m(q),this.router=m(P),this.data=[],this.columns=["Fecha de corte","Empresa","Pago registrado"],this.columnPropertyMap={"Fecha de corte":"fechaCreacion",Empresa:"nombreSubempresa","Pago registrado":"total"},this.buttons=[{label:"Eye",icon:"visibility",action:l=>{console.log("Editing",l),this.router.navigate(["/pages/gestion-cobros/trabajadores/pago/",l.id])}}]}ngOnDestroy(){}ngOnInit(){this.getPagoTrabajadores(),this.listenGrid()}onNew(){this.router.navigate(["/pages/gestion-cobros/trabajadores/pago"])}getPagoTrabajadores(){this.pagoTrabajadorService.getPagosTrabajadores().pipe(I(l=>(l.data.forEach(t=>{t.fechaCreacion=this.datePipe.transform(t.fechaCreacion,"dd/MM/yyyy"),t.total=this.currencyPipe.transform(t.total,"USD","symbol","1.2-2")}),l))).subscribe(l=>{this.data=l.data})}onSearch(l){let t=l.target;this.searchTerm=t.value.trim().toLowerCase()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getPagoTrabajadores()})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=v({type:n,selectors:[["app-grid-pago-trabajadores"]],standalone:!0,features:[x([b,u]),S],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),s(3,"Registro de Pago Masivo"),i(),a(4,"div",3)(5,"mat-form-field",4),f(6,"mat-icon",5),a(7,"input",6),g("input",function(h){return e.onSearch(h)}),i()(),a(8,"button",7),g("click",function(){return e.onNew()}),f(9,"mat-icon",8),a(10,"span",9),s(11,"Registrar"),i()()()(),a(12,"div",10)(13,"div",11),f(14,"app-custom-table",12),i()()()),t&2&&(o(5),d("subscriptSizing","dynamic"),o(),d("svgIcon","heroicons_solid:magnifying-glass"),o(),d("autocomplete","off")("placeholder","Buscar"),o(),d("color","primary"),o(),d("svgIcon","heroicons_outline:plus"),o(5),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data)("buttons",e.buttons)("searchTerm",e.searchTerm))},dependencies:[_,w,T,ge,j]});let r=n;return r})();var Ve=(r,n)=>({"bg-credigray-100":r,"bg-green-600":n});function Ge(r,n){if(r&1&&(a(0,"mat-option",23),s(1),i()),r&2){let p=n.$implicit;d("value",p.id),o(),G(p.razonSocial)}}function Re(r,n){if(r&1&&(ae(0),M(1,Ge,2,2,"mat-option",22),oe()),r&2){let p=n.ngIf;o(),d("ngForOf",p.data)}}function Oe(r,n){if(r&1&&(a(0,"div",18)(1,"div",24),f(2,"app-custom-table",25),i()()),r&2){let p=y();o(2),d("columns",p.columns)("displayedColumns",p.columns)("columnPropertyMap",p.columnPropertyMap)("data",p.data)}}function Be(r,n){if(r&1&&(a(0,"div",19)(1,"div",26)(2,"fuse-alert",27)(3,"span",28),s(4,"Informaci\xF3n"),i(),s(5),i()()()),r&2){let p=y();o(2),d("type","info")("appearance","outline"),o(3),D(" ",p.message," ")}}function Le(r,n){if(r&1&&(a(0,"span",21),s(1,"Subtotal: "),a(2,"span",29),s(3),k(4,"currency"),i()()),r&2){let p=y();o(3),G(A(4,1,p.subtotal))}}function $e(r,n){if(r&1&&(a(0,"span",21),s(1,"Comisiones: "),a(2,"span",29),s(3),k(4,"currency"),i()()),r&2){let p=y();o(3),G(A(4,1,p.totalComision))}}function Ue(r,n){if(r&1&&(a(0,"span",21),s(1,"Total a pagar: "),a(2,"span",29),s(3),k(4,"currency"),i()()),r&2){let p=y();o(3),D(" ",A(4,1,p.totalPagar)," ")}}var ze={validation:!1},Ae=(()=>{let n=class n{constructor(){this.fb=m(Se),this.empresaClienteService=m(Fe),this.pagoTrabajadorService=m(F),this.cobroTrabajadorService=m(Ee),this.datePipe=m(b),this.swalService=m(Me),this.estadosDatosService=m(q),this.fuseService=m(L),this.currencyPipe=m(u),this.decimalPipe=m(C),this.router=m(P),this.empresa$=this.empresaClienteService.getEmpresasClientes(),this.tipoPago$=this.pagoTrabajadorService.tipoPagoTrabajadores().subscribe(l=>{this.idTipoPagoTrabajador=l.data[0].id}),this.data=[],this.fechaActual=new Date,this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor pendiente"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor pendiente":"valorPendiente"}}createForm(){this.form=this.fb.group({fechaFinal:["",W.required],idSubEmpresa:["",W.required],idTipoPagoTrabajador:[""]})}ngOnInit(){this.createForm()}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}onGet(){if(this.form.valid){let{fechaFinal:l,idSubEmpresa:t}=this.form.getRawValue();console.log(l);let c={fechaFinallData:this.datePipe.transform(l,"yyyy-MM-dd"),idSubEmpresa:t};this.getAllPagoTrabajador(c)}}onSave(){let{fechaFinal:l,idSubEmpresa:t,idTipoPagoTrabajador:e}=this.form.getRawValue(),h={fechaFinal:this.datePipe.transform(l,"yyyy-MM-dd"),idSubEmpresa:t},X=[];X=this.data.map(K=>({idCobroTrabajador:K.id}));let Z=ee(Q({},h),{idTipoPagoTrabajador:this.idTipoPagoTrabajador,detallePagoTrabajador:X});console.log(Z),this.fuseService.open(Q({},Te)).afterClosed().subscribe(K=>{K==="confirmed"&&this.postSave(Z)})}getAllPagoTrabajador(l){this.cobroTrabajadorService.getCobroTrabajadores(l).pipe(te(t=>(this.subtotal=0,this.totalComision=0,this.totalPagar=0,t&&Array.isArray(t.data)?t.data.forEach(e=>{e.comision=e.montoConsumo*e.porcentajeSubEmpresa/100,e.pagar=e.montoConsumo-e.comision,e.montoConsumo=this.currencyPipe.transform(e.montoConsumo,"USD","symbol","1.2-2"),e.comision=this.currencyPipe.transform(e.comision,"USD","symbol","1.2-2"),e.pagar=this.currencyPipe.transform(e.pagar,"USD","symbol","1.2-2"),e.valorPendiente=this.currencyPipe.transform(e.valorPendiente,"USD","symbol","1.2-2"),e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy")}):this.data=[],t))).subscribe(t=>{t&&Array.isArray(t.data)?this.data=t.data:(this.data=[],this.message=t.msg)})}postSave(l){this.pagoTrabajadorService.postPagosTrabajadores(l).subscribe(t=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.estadosDatosService.stateGrid.next(!0),this.closeDialog()},t=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=v({type:n,selectors:[["app-form-pago-trabajadores"]],standalone:!0,features:[x([{provide:O,useClass:H},{provide:R,useValue:"en-GB"},b,u,C,J(ze)]),S],decls:39,vars:20,consts:[["finalPicker",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","pl-8"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName","max"],["matIconSuffix","",3,"for"],["placeholder","Empresa",3,"formControlName"],[4,"ngIf"],[1,"relative","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4","pr-2"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-col","gap-4","justify-end","sm:flex-row"],[1,"sm:pr-4","text-gray-600","font-bold","text-right"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""],[1,"text-gray-800"]],template:function(t,e){if(t&1){let c=ie();a(0,"div",1)(1,"div",2),s(2," Registro de Pago Masivo "),i(),a(3,"div",3)(4,"div",4)(5,"form",5)(6,"div",6)(7,"mat-form-field",7)(8,"mat-label"),s(9,"Fecha de corte"),i(),f(10,"input",8)(11,"mat-datepicker-toggle",9)(12,"mat-datepicker",null,0),i(),a(14,"mat-form-field",7)(15,"mat-label"),s(16,"Empresa"),i(),a(17,"mat-select",10),M(18,Re,2,1,"ng-container",11),k(19,"async"),i()()(),a(20,"div",12)(21,"div",13),s(22," Opciones "),i(),a(23,"div",14)(24,"button",15),g("click",function(){return N(c),V(e.closeDialog())}),a(25,"span"),s(26," Atras "),i()(),a(27,"button",16),g("click",function(){return N(c),V(e.onGet())}),a(28,"span"),s(29," Consultar "),i()(),a(30,"button",17),g("click",function(){return N(c),V(e.onSave())}),a(31,"span"),s(32," Regitrar "),i()()()()()()(),M(33,Oe,3,4,"div",18)(34,Be,6,3,"div",19),a(35,"div",20),M(36,Le,5,3,"span",21)(37,$e,5,3,"span",21)(38,Ue,5,3,"span",21),i()()}if(t&2){let c=re(13);o(5),d("formGroup",e.form),o(5),d("matDatepicker",c)("formControlName","fechaFinal")("max",e.fechaActual),o(),d("for",c),o(6),d("formControlName","idSubEmpresa"),o(),d("ngIf",A(19,15,e.empresa$)),o(6),d("color","primary"),o(3),d("color","primary"),o(3),d("ngClass",ne(17,Ve,e.data.length==0,e.data.length>0))("disabled",e.data.length==0),o(3),E(e.data.length?33:e.message?34:-1),o(3),E(e.subtotal?36:-1),o(),E(e.totalComision?37:-1),o(),E(e.totalPagar?38:-1)}},dependencies:[de,u,_,z,U,be,he,$,Ce,w,we,je,_e,T,j,B,ce,Pe,ue,se,me,Y,ye,xe,le]});let r=n;return r})();var Ye={validation:!1},Ie=(()=>{let n=class n{constructor(){this.fuseService=m(L),this.currencyPipe=m(u),this.decimalPipe=m(C),this.router=m(P),this.activatedRoute=m(pe),this.datePipe=m(b),this.pagoTrabajadorService=m(F),this.data=[],this.form={fechaCreacion:"",fechaFinal:"",fechaIncial:"",nombreSubempresa:"",total:""},this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor pagado"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor pagado":"valorPago"}}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getTrabajador(this.id)}getTrabajador(l){this.subscription$=this.pagoTrabajadorService.getPagosTrabajador(l).pipe(I(t=>(t.data.detallePagoTrabajador?.forEach(e=>{e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),e.valorPago=this.currencyPipe.transform(e.valorPago,"USD","symbol","1.2-2")}),t))).subscribe(t=>{console.log("Si entra"),this.data=t.data.detallePagoTrabajador,this.form.fechaCreacion=this.datePipe.transform(t.data.fechaCreacion,"dd/MM/YYYY"),this.form.fechaFinal=t.data.fechaFinal,this.form.nombreSubempresa=t.data.nombreSubempresa,this.form.total=this.currencyPipe.transform(t.data.total,"USD","symbol","1.2-2")})}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=v({type:n,selectors:[["app-form-view-pago-trabajadores"]],standalone:!0,features:[x([{provide:O,useClass:H},{provide:R,useValue:"en-GB"},b,u,C,J(Ye)]),S],decls:32,vars:9,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"sm:ml-8","mt-8","text-3xl","font-semibold","leading-tight","tracking-tight"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","Empresa","readonly","",3,"value"],[1,"relative","p-2","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","bg-green-600","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1),s(2),i(),a(3,"div",2)(4,"div",3)(5,"form",4)(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),s(9,"Empresa"),i(),f(10,"input",7),i(),a(11,"mat-form-field",6)(12,"mat-label"),s(13,"Fecha de corte"),i(),f(14,"input",7),i(),a(15,"mat-form-field",6)(16,"mat-label"),s(17,"Total"),i(),f(18,"input",7),i()(),a(19,"div",8)(20,"div",9),s(21," Opciones "),i(),a(22,"div",10)(23,"button",11),g("click",function(){return e.closeDialog()}),a(24,"span"),s(25," Atras "),i()(),a(26,"button",12)(27,"span"),s(28," Descargar "),i()()()()()()(),a(29,"div",13)(30,"div",14),f(31,"app-custom-table",15),i()()()),t&2&&(o(2),D(" ","Detalle pago trabajadores"," "),o(8),d("value",e.form.nombreSubempresa),o(4),d("value",e.form.fechaCreacion),o(4),d("value",e.form.total),o(5),d("color","primary"),o(8),d("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data))},dependencies:[_,z,U,$,ve,w,T,j,B,Y]});let r=n;return r})();var Wt=[{path:"",component:ke},{path:"pago",component:Ae},{path:"pago/:id",component:Ie}];export{Wt as default};
