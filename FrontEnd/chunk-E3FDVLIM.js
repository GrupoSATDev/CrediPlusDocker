import{a as F,b as $}from"./chunk-OEWDNAIN.js";import{a as Ye}from"./chunk-4LXGTGGR.js";import{a as Ue}from"./chunk-FAEUQIFQ.js";import{a as ze,b as Q}from"./chunk-P4PAYY2C.js";import{a as Xe,b as $e,c as qe}from"./chunk-VEFQUVFM.js";import{a as Be}from"./chunk-PD3DQ6DR.js";import{a as Re,b as Le,c as Oe}from"./chunk-73HPXQ4R.js";import{a as X}from"./chunk-LUBH4OK2.js";import{a as B,b as Ge}from"./chunk-6P2FO4H4.js";import{a as O}from"./chunk-HN2IWLXW.js";import{a as L}from"./chunk-NCBPDMPS.js";import{a as Ve}from"./chunk-QF5DML3C.js";import{a as ce}from"./chunk-LUXURQN6.js";import{g as re,j as Ne}from"./chunk-2MNMAZZP.js";import{a as Fe,b as je,c as Me,d as ke}from"./chunk-CY7MRQJZ.js";import"./chunk-P63XEOLN.js";import{C as de,E as G,F as R,J as D,b as A,e as Ie,i as P,l as ne,n as K,p as le,q as N,r as Ae,u as V,x as se,y as me}from"./chunk-5EZKXU2X.js";import{b as Ee,d as M}from"./chunk-UEKZXHJT.js";import"./chunk-GQMDELPL.js";import{a as pe}from"./chunk-VQY6X2PJ.js";import"./chunk-QTY5OGKD.js";import{Q as k,R as I,ba as De,ga as E,la as ie}from"./chunk-TS7YPRLN.js";import"./chunk-YMFBC3ZU.js";import"./chunk-5TY7V3W7.js";import"./chunk-6DC3KIX3.js";import{Ac as oe,Cb as g,Dc as Pe,Eb as v,Ec as x,Gc as j,Hc as h,Lb as H,Mb as m,Nb as ae,Ob as ue,Qa as n,Sb as ye,Tb as Ce,Ub as Se,Vb as T,Wb as w,Zb as _e,_ as ee,cc as W,dc as J,fc as be,gb as y,ha as c,ib as s,ma as _,pb as z,q as xe,tb as o,ub as i,vb as f,wa as C,wb as U,xa as S,xb as Y,yc as Te,zb as te,zc as we}from"./chunk-IEDNLM77.js";import{a as q,b as he,d as ve}from"./chunk-NEB6MB4Y.js";var Ze={validation:!1},We=(()=>{let l=class l{constructor(){this.dialogRef=c(Fe),this._matData=c(je),this.fb=c(de),this.pagoTrabajadoresService=c(F),this.estadosDatosService=c(O),this.swalService=c(ce)}ngOnInit(){this.createForm();let r=this._matData.data;console.log(r),this.form.patchValue({valorRecibido:parseFloat(r.total.replace(/[\$,]/g,""))})}onCambioEstado(){if(this.form.valid){let t=this._matData.data,r=this.form.getRawValue(),{valorRecibido:p}=r,b=ve(r,["valorRecibido"]),u=q({id:t.id,idEstadoCobroPago:$.PAGADOS,valorRecibido:parseFloat(p)},b);this.pagoTrabajadoresService.putPagoTrabajadorIndividual(u).subscribe(Z=>{this.estadosDatosService.stateGrid.next(!0),this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.closeDialog()},Z=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}}closeDialog(){this.dialogRef.close()}createForm(){this.form=this.fb.group({comprobante:["",K.required],valorRecibido:[""],observacion:[""]})}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=_({type:l,selectors:[["app-dialog-estado-masivo"]],standalone:!0,features:[T([{provide:I,useClass:X},{provide:k,useValue:"en-GB"},x,h,B(Ze)]),w],decls:30,vars:8,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"mt-8",3,"formGroup"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:text-left"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","Comprobante",3,"formControlName"],["matInput","","placeholder","Valor recibido","mask","separator.2","thousandSeparator",",","decimalMarker",".",3,"formControlName"],["floatLabel","always",1,"w-full"],["matInput","","placeholder","Observaciones",3,"formControlName"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-stroked-button","",1,"sm:w-auto","w-full","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"matDialogClose"],["mat-flat-button","",1,"sm:w-auto","w-full","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color","matDialogClose"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),f(3,"mat-icon",3),i(),o(4,"div",4)(5,"div",5),m(6," Confirmacion "),i(),o(7,"div",6),m(8," \xBFEst\xE1 seguro de cambiar el estado?. "),i()()(),o(9,"form",7)(10,"div",8)(11,"mat-form-field",9)(12,"mat-label"),m(13,"N\xFAmero de comprobante"),i(),f(14,"input",10),i()(),o(15,"div",8)(16,"mat-form-field",9)(17,"mat-label"),m(18,"Valor recibido"),i(),f(19,"input",11),i()(),o(20,"div",8)(21,"mat-form-field",12)(22,"mat-label"),m(23,"Observaciones"),i(),f(24,"textarea",13),i()()(),o(25,"div",14)(26,"button",15),m(27," Cancelar "),i(),o(28,"button",16),g("click",function(){return e.onCambioEstado()}),m(29," Confirmar "),i()()()),t&2&&(n(3),s("svgIcon","heroicons_solid:question-mark-circle"),n(6),s("formGroup",e.form),n(5),s("formControlName","comprobante"),n(5),s("formControlName","valorRecibido"),n(5),s("formControlName","observacion"),n(2),s("matDialogClose","cancelled"),n(2),s("color","primary")("matDialogClose","confirmed"))},dependencies:[G,V,ne,le,N,E,P,ie,D,A,Ge,R,se,me,ke]});let a=l;return a})();function et(a,l){if(a&1&&(U(0),f(1,"app-custom-table",19),Y()),a&2){let d=v(2);n(),s("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttons)("searchTerm",d.searchTerm)}}function tt(a,l){a&1&&(o(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),m(4,"Informaci\xF3n"),i(),m(5," No hay pagos pendientes hasta el momento. "),i()()()),a&2&&(n(2),s("type","info")("appearance","outline"))}function at(a,l){if(a&1&&y(0,et,2,6,"ng-container",18)(1,tt,6,2,"ng-template",null,1,be),a&2){let d=H(2),r=v();s("ngIf",r.data.length)("ngIfElse",d)}}function ot(a,l){if(a&1&&(U(0),f(1,"app-custom-table",19),Y()),a&2){let d=v(2);n(),s("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttonsPagado)("searchTerm",d.searchTerm)}}function it(a,l){a&1&&(o(0,"div",20)(1,"div",21)(2,"fuse-alert",22)(3,"span",23),m(4,"Informaci\xF3n"),i(),m(5," No hay pagos hasta el momento. "),i()()()),a&2&&(n(2),s("type","info")("appearance","outline"))}function rt(a,l){if(a&1&&y(0,ot,2,6,"ng-container",18)(1,it,6,2,"ng-template",null,1,be),a&2){let d=H(2),r=v();s("ngIf",r.data.length)("ngIfElse",d)}}var Je=(()=>{let l=class l{constructor(){this.datePipe=c(x),this.searchTerm="",this.currencyPipe=c(h),this.pagoTrabajadorService=c(F),this._matDialog=c(Me),this.estadoDatosService=c(O),this.router=c(M),this.selectedTab=$.PENDIENTES,this.data=[],this.columns=["Fecha de liquidaci\xF3n","Empresa","Valor","Estado"],this.columnPropertyMap={"Fecha de liquidaci\xF3n":"fechaCreacion",Empresa:"nombreSubempresa",Valor:"total",Estado:"nombreEstadoCobro"},this.buttons=[{label:"Eye",icon:"visibility",action:r=>{console.log("Editing",r),this.router.navigate(["/pages/gestion-cobros/trabajadores/pago/",r.id])}},{label:"View",icon:"published_with_changes",action:r=>{console.log("View",r),this.selectedData=r,this.onCambioEstado()}}],this.buttonsPagado=[{label:"Eye",icon:"visibility",action:r=>{console.log("Editing",r),this.router.navigate(["/pages/gestion-cobros/trabajadores/pago/",r.id])}}],this.tabChanged=r=>{this.tabIndex=r.index,this.selectedTab=r.index==0?$.PENDIENTES:$.PAGADOS,this.getPagoTrabajadores(this.selectedTab)}}onCambioEstado(){this._matDialog.open(We,{autoFocus:!1,data:{edit:!0,data:this.selectedData},width:"30%",disableClose:!0,panelClass:"custom-dialog-container"})}ngOnDestroy(){}ngOnInit(){this.getPagoTrabajadores(this.selectedTab),this.listenGrid()}onNew(){this.router.navigate(["/pages/gestion-cobros/trabajadores/pago"])}getPagoTrabajadores(r){this.pagoTrabajadorService.getPagosTrabajadores(r).pipe(ee(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.total=this.currencyPipe.transform(e.total,"USD","symbol","1.2-2")}),t))).subscribe(t=>{this.data=t.data})}onSearch(r){let t=r.target;this.searchTerm=t.value.trim().toLowerCase()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getPagoTrabajadores(this.selectedTab)})}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=_({type:l,selectors:[["app-grid-pago-trabajadores"]],standalone:!0,features:[T([x,h]),w],decls:20,vars:8,consts:[["tabGroup",""],["noData",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","Pendientes"],["matTabContent",""],["label","Pagados"],[4,"ngIf","ngIfElse"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-4","sm:p-2","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""]],template:function(t,e){if(t&1){let p=te();o(0,"div",2)(1,"div",3)(2,"div",4),m(3,"Registro de Cobro Masivo"),i(),o(4,"div",5)(5,"mat-form-field",6),f(6,"mat-icon",7),o(7,"input",8),g("input",function(u){return C(p),S(e.onSearch(u))}),i()(),o(8,"button",9),g("click",function(){return C(p),S(e.onNew())}),f(9,"mat-icon",10),o(10,"span",11),m(11,"Registrar"),i()()()(),o(12,"div",12)(13,"div",13)(14,"mat-tab-group",14,0),Se("selectedIndexChange",function(u){return C(p),Ce(e.tabIndex,u)||(e.tabIndex=u),S(u)}),g("selectedTabChange",function(u){return C(p),S(e.tabChanged(u))}),o(16,"mat-tab",15),y(17,at,3,2,"ng-template",16),i(),o(18,"mat-tab",17),y(19,rt,3,2,"ng-template",16),i()()()()()}t&2&&(n(5),s("subscriptSizing","dynamic"),n(),s("svgIcon","heroicons_solid:magnifying-glass"),n(),s("autocomplete","off")("placeholder","Buscar"),n(),s("color","primary"),n(),s("svgIcon","heroicons_outline:plus"),n(5),s("animationDuration","500"),ye("selectedIndex",e.tabIndex))},dependencies:[L,E,P,ie,D,pe,$e,Xe,qe,oe]});let a=l;return a})();var nt=(a,l)=>({"bg-credigray-100":a,"bg-green-600":l});function lt(a,l){if(a&1&&(o(0,"mat-option",23),m(1),i()),a&2){let d=l.$implicit;s("value",d.id),n(),ae(d.razonSocial)}}function st(a,l){if(a&1&&(U(0),y(1,lt,2,2,"mat-option",22),Y()),a&2){let d=l.ngIf;n(),s("ngForOf",d.data)}}function mt(a,l){if(a&1&&(o(0,"div",18)(1,"div",24),f(2,"app-custom-table",25),i()()),a&2){let d=v();n(2),s("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)}}function dt(a,l){if(a&1&&(o(0,"div",19)(1,"div",26)(2,"fuse-alert",27)(3,"span",28),m(4,"Informaci\xF3n"),i(),m(5),i()()()),a&2){let d=v();n(2),s("type","info")("appearance","outline"),n(3),ue(" ",d.message," ")}}function ct(a,l){if(a&1&&(o(0,"span",21),m(1,"Subtotal: "),o(2,"span",29),m(3),W(4,"currency"),i()()),a&2){let d=v();n(3),ae(J(4,1,d.subtotal))}}function pt(a,l){if(a&1&&(o(0,"span",21),m(1,"Comisiones: "),o(2,"span",29),m(3),W(4,"currency"),i()()),a&2){let d=v();n(3),ae(J(4,1,d.totalComision))}}function ft(a,l){if(a&1&&(o(0,"span",21),m(1,"Total a pagar: "),o(2,"span",29),m(3),W(4,"currency"),i()()),a&2){let d=v();n(3),ue(" ",J(4,1,d.totalPagar)," ")}}var ut={validation:!1},Ke=(()=>{let l=class l{constructor(){this.fb=c(de),this.empresaClienteService=c(Be),this.pagoTrabajadorService=c(F),this.cobroTrabajadorService=c(Ye),this.datePipe=c(x),this.swalService=c(ce),this.estadosDatosService=c(O),this.fuseService=c(re),this.currencyPipe=c(h),this.decimalPipe=c(j),this.router=c(M),this.empresa$=this.empresaClienteService.getEmpresasClientes(),this.tipoPago$=this.pagoTrabajadorService.tipoPagoTrabajadores().subscribe(r=>{this.idTipoPagoTrabajador=r.data[0].id}),this.data=[],this.fechaActual=new Date,this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor pendiente"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor pendiente":"valorPendiente"}}createForm(){this.form=this.fb.group({fechaFinal:["",K.required],idSubEmpresa:["",K.required],idTipoPagoTrabajador:[""]})}ngOnInit(){this.createForm()}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}onGet(){if(this.form.valid){let{fechaFinal:r,idSubEmpresa:t}=this.form.getRawValue();console.log(r);let p={fechaFinallData:this.datePipe.transform(r,"yyyy-MM-dd"),idSubEmpresa:t};this.getAllPagoTrabajador(p)}}onSave(){let{fechaFinal:r,idSubEmpresa:t,idTipoPagoTrabajador:e}=this.form.getRawValue(),b={fechaFinal:this.datePipe.transform(r,"yyyy-MM-dd"),idSubEmpresa:t},u=[];u=this.data.map(fe=>({idCobroTrabajador:fe.id}));let Z=he(q({},b),{detallePagoTrabajador:u});console.log(Z),this.fuseService.open(q({},Ne)).afterClosed().subscribe(fe=>{fe==="confirmed"&&this.postSave(Z)})}getAllPagoTrabajador(r){this.cobroTrabajadorService.getCobroTrabajadores(r).pipe(xe(t=>(this.subtotal=0,this.totalComision=0,this.totalPagar=0,t&&Array.isArray(t.data)?t.data.forEach(e=>{e.montoCuota=this.currencyPipe.transform(e.montoCuota,"USD","symbol","1.2-2"),e.pagar=this.currencyPipe.transform(e.pagar,"USD","symbol","1.2-2"),e.valorPendiente=this.currencyPipe.transform(e.valorPendiente,"USD","symbol","1.2-2"),e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),this.totalPagar+=parseFloat(e.montoCuota.replace(/[^0-9.-]+/g,""))}):this.data=[],t))).subscribe(t=>{t&&Array.isArray(t.data)?this.data=t.data:(this.data=[],this.message=t.msg)})}postSave(r){this.pagoTrabajadorService.postPagosTrabajadores(r).subscribe(t=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.estadosDatosService.stateGrid.next(!0),this.closeDialog()},t=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=_({type:l,selectors:[["app-form-pago-trabajadores"]],standalone:!0,features:[T([{provide:I,useClass:X},{provide:k,useValue:"en-GB"},x,h,j,B(ut)]),w],decls:39,vars:19,consts:[["finalPicker",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","pl-8"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["placeholder","Empresa",3,"formControlName"],[4,"ngIf"],[1,"relative","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4","pr-2"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-col","gap-4","justify-end","sm:flex-row"],[1,"sm:pr-4","text-gray-600","font-bold","text-right"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""],[1,"text-gray-800"]],template:function(t,e){if(t&1){let p=te();o(0,"div",1)(1,"div",2),m(2," Cobro Masivo "),i(),o(3,"div",3)(4,"div",4)(5,"form",5)(6,"div",6)(7,"mat-form-field",7)(8,"mat-label"),m(9,"Fecha de corte"),i(),f(10,"input",8)(11,"mat-datepicker-toggle",9)(12,"mat-datepicker",null,0),i(),o(14,"mat-form-field",7)(15,"mat-label"),m(16,"Empresa"),i(),o(17,"mat-select",10),y(18,st,2,1,"ng-container",11),W(19,"async"),i()()(),o(20,"div",12)(21,"div",13),m(22," Opciones "),i(),o(23,"div",14)(24,"button",15),g("click",function(){return C(p),S(e.closeDialog())}),o(25,"span"),m(26," Atras "),i()(),o(27,"button",16),g("click",function(){return C(p),S(e.onGet())}),o(28,"span"),m(29," Consultar "),i()(),o(30,"button",17),g("click",function(){return C(p),S(e.onSave())}),o(31,"span"),m(32," Regitrar "),i()()()()()()(),y(33,mt,3,4,"div",18)(34,dt,6,3,"div",19),o(35,"div",20),y(36,ct,5,3,"span",21)(37,pt,5,3,"span",21)(38,ft,5,3,"span",21),i()()}if(t&2){let p=H(13);n(5),s("formGroup",e.form),n(5),s("matDatepicker",p)("formControlName","fechaFinal"),n(),s("for",p),n(6),s("formControlName","idSubEmpresa"),n(),s("ngIf",J(19,14,e.empresa$)),n(6),s("color","primary"),n(3),s("color","primary"),n(3),s("ngClass",_e(16,nt,e.data.length==0,e.data.length>0))("disabled",e.data.length==0),n(3),z(e.data.length?33:e.message?34:-1),n(3),z(e.subtotal?36:-1),n(),z(e.totalComision?37:-1),n(),z(e.totalPagar?38:-1)}},dependencies:[Pe,h,L,G,V,ne,le,N,pe,E,Re,Le,Oe,P,D,A,De,Ve,Ie,we,oe,R,se,me,Te]});let a=l;return a})();var bt={validation:!1},Qe=(()=>{let l=class l{constructor(){this.fuseService=c(re),this.currencyPipe=c(h),this.decimalPipe=c(j),this.router=c(M),this.activatedRoute=c(Ee),this.datePipe=c(x),this.pagoTrabajadorService=c(F),this.data=[],this.form={fechaCreacion:"",fechaFinal:"",fechaIncial:"",nombreSubempresa:"",total:""},this.columns=["Identificaci\xF3n","Nombres Apellidos","Valor cobro"],this.columnPropertyMap={Identificaci\u00F3n:"documentoTrabajador","Nombres Apellidos":"nombreCompleto","Valor cobro":"valorPago"}}ngOnDestroy(){this.subscription$.unsubscribe()}ngOnInit(){this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getTrabajador(this.id)}getTrabajador(r){this.subscription$=this.pagoTrabajadorService.getPagosTrabajador(r).pipe(ee(t=>(t.data.detallePagoTrabajador?.forEach(e=>{e.fechaCobro=this.datePipe.transform(e.fechaCobro,"dd/MM/yyyy"),e.valorPago=this.currencyPipe.transform(e.valorPago,"USD","symbol","1.2-2")}),t))).subscribe(t=>{console.log("Si entra"),this.data=t.data.detallePagoTrabajador,this.form.fechaCreacion=this.datePipe.transform(t.data.fechaCreacion,"dd/MM/YYYY"),this.form.fechaFinal=t.data.fechaFinal,this.form.nombreSubempresa=t.data.nombreSubempresa,this.form.total=this.currencyPipe.transform(t.data.total,"USD","symbol","1.2-2"),this.exportData=t.data})}exportToExcel(){let r=[["Detalle cobro trabajadores"],["Empresa:",this.exportData.nombreSubempresa],["Fecha de liquidaci\xF3n:",this.exportData.fechaFinal],["Total:",this.exportData.total]],t=this.exportData.detallePagoTrabajador.map(u=>({Identificaci\u00F3n:u.documentoTrabajador,"Nombre completo":u.nombreCompleto,Valor:Ue(u.valorPago)})),e=Q.aoa_to_sheet(r),p=r.length+2;Q.sheet_add_json(e,t,{origin:`A${p}`,skipHeader:!1}),e["!merges"]=[{s:{r:0,c:0},e:{r:0,c:2}}];let b=Q.book_new();Q.book_append_sheet(b,e,`DetallePago${this.exportData.fechaFinal}`),ze(b,`DetallePago${this.exportData.fechaFinal}.xlsx`)}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajadores"])}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=_({type:l,selectors:[["app-form-view-pago-trabajadores"]],standalone:!0,features:[T([{provide:I,useClass:X},{provide:k,useValue:"en-GB"},x,h,j,B(bt)]),w],decls:32,vars:8,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"sm:ml-8","mt-8","text-3xl","font-semibold","leading-tight","tracking-tight"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","Empresa","readonly","",3,"value"],[1,"relative","p-2","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","bg-green-600","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1),m(2," Detalle cobro trabajadores "),i(),o(3,"div",2)(4,"div",3)(5,"form",4)(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),m(9,"Empresa"),i(),f(10,"input",7),i(),o(11,"mat-form-field",6)(12,"mat-label"),m(13,"Fecha de liquidaci\xF3n"),i(),f(14,"input",7),i(),o(15,"mat-form-field",6)(16,"mat-label"),m(17,"Total"),i(),f(18,"input",7),i()(),o(19,"div",8)(20,"div",9),m(21," Opciones "),i(),o(22,"div",10)(23,"button",11),g("click",function(){return e.closeDialog()}),o(24,"span"),m(25," Atras "),i()(),o(26,"button",12),g("click",function(){return e.exportToExcel()}),o(27,"span"),m(28," Descargar "),i()()()()()()(),o(29,"div",13)(30,"div",14),f(31,"app-custom-table",15),i()()()),t&2&&(n(10),s("value",e.form.nombreSubempresa),n(4),s("value",e.form.fechaCreacion),n(4),s("value",e.form.total),n(5),s("color","primary"),n(8),s("columns",e.columns)("displayedColumns",e.columns)("columnPropertyMap",e.columnPropertyMap)("data",e.data))},dependencies:[L,G,V,N,Ae,E,P,D,A,R]});let a=l;return a})();var za=[{path:"",component:Je},{path:"pago",component:Ke},{path:"pago/:id",component:Qe}];export{za as default};