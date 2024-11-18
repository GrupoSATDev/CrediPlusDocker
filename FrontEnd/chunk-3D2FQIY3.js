import{a as $}from"./chunk-J6VGP5AE.js";import{a as ke}from"./chunk-M7BLWLGU.js";import{a as Ie}from"./chunk-E3T3BIAV.js";import{a as je}from"./chunk-646GMTWS.js";import{a as Pe,b as we,c as Ee}from"./chunk-NIDNKUZY.js";import{a as Fe}from"./chunk-EWC7O7YA.js";import{a as De,b as Me}from"./chunk-JDVS6Z7H.js";import{a as Ae}from"./chunk-BK4RLMSC.js";import{a as G}from"./chunk-FSEIAN2B.js";import{b as Te}from"./chunk-4WJQLHI3.js";import{a as B}from"./chunk-X5Y573WK.js";import{a as Ce}from"./chunk-CTPZLWJZ.js";import"./chunk-EKEQAN42.js";import{g as fe}from"./chunk-5EJ56Z4T.js";import{c as me}from"./chunk-CPZFSZTM.js";import{h as le}from"./chunk-6AAUO4WA.js";import{a as _e}from"./chunk-47IZMZ73.js";import"./chunk-DHZL2CSM.js";import{C as xe,F as Se,J as O,b as se,c as de,e as pe,i as V,l as ue,n as T,p as ge,q as be,u as ve,x as he,y as ye}from"./chunk-P24RU7FU.js";import{$ as ne,Q as re,R as ie,ea as N,ja as ce}from"./chunk-BMFSCGUM.js";import"./chunk-SKG7QTPE.js";import"./chunk-QJN4CBG2.js";import"./chunk-JHGRPN2G.js";import{d as k}from"./chunk-SV64OFO3.js";import{$b as h,Ab as b,Bc as q,Cb as v,Cc as x,Jb as W,Kb as d,Lb as F,Mb as L,Nb as X,Oa as n,Sb as I,Tb as _,Wb as Y,Y as P,ac as y,eb as f,fa as p,gb as s,ka as S,nb as j,q as Q,rb as i,sb as m,tb as g,ua as w,ub as M,uc as ee,va as E,vb as A,vc as te,wc as ae,xb as z,yc as oe,zc as C}from"./chunk-WDMQQ6H3.js";import{a as D,b as J,d as K}from"./chunk-NEB6MB4Y.js";var Ne=(()=>{let o=class o{constructor(){this.datePipe=p(C),this.searchTerm="",this.currencyPipe=p(x),this.pagoTrabajadorService=p($),this._matDialog=p(me),this.estadoDatosService=p(B),this.router=p(k),this.data=[],this.columns=["Creaci\xF3n","Empresa","Total"],this.columnPropertyMap={Creaci\u00F3n:"fechaCreacion",Empresa:"nombreSubempresa",Total:"total"},this.buttons=[{label:"Eye",icon:"visibility",action:a=>{console.log("Editing",a),this.router.navigate(["/pages/gestion-cobros/trabajador/individual/",a.id])}}]}ngOnDestroy(){}ngOnInit(){this.getPagoTrabajadores(),this.listenGrid()}onNew(){this.router.navigate(["/pages/gestion-cobros/trabajador/individual"])}getPagoTrabajadores(){this.pagoTrabajadorService.getPagoTrabajadorIndividual().pipe(P(a=>(a.data.forEach(t=>{t.fechaCreacion=this.datePipe.transform(t.fechaCreacion,"dd/MM/yyyy"),t.total=this.currencyPipe.transform(t.total,"USD","symbol","1.2-2")}),a))).subscribe(a=>{this.data=a.data})}onSearch(a){let t=a.target;this.searchTerm=t.value.trim().toLowerCase()}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(t=>{t&&this.getPagoTrabajadores()})}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=S({type:o,selectors:[["app-grid-pago-trabajador"]],standalone:!0,features:[I([C,x]),_],decls:15,vars:12,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","items-center","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"input","autocomplete","placeholder"],["mat-flat-button","",1,"mt-2","w-full","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold","sm:ml-4","sm:mt-0","sm:w-auto",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons","searchTerm"]],template:function(t,r){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"Registro de Pago Individual"),m(),i(4,"div",3)(5,"mat-form-field",4),g(6,"mat-icon",5),i(7,"input",6),b("input",function(u){return r.onSearch(u)}),m()(),i(8,"button",7),b("click",function(){return r.onNew()}),g(9,"mat-icon",8),i(10,"span",9),d(11,"Registrar"),m()()()(),i(12,"div",10)(13,"div",11),g(14,"app-custom-table",12),m()()()),t&2&&(n(5),s("subscriptSizing","dynamic"),n(),s("svgIcon","heroicons_solid:magnifying-glass"),n(),s("autocomplete","off")("placeholder","Buscar"),n(),s("color","primary"),n(),s("svgIcon","heroicons_outline:plus"),n(5),s("columns",r.columns)("displayedColumns",r.columns)("columnPropertyMap",r.columnPropertyMap)("data",r.data)("buttons",r.buttons)("searchTerm",r.searchTerm))},dependencies:[G,N,V,ce,O]});let e=o;return e})();var $e=(e,o)=>({"bg-credigray-100":e,"bg-green-600":o});function Re(e,o){if(e&1&&(i(0,"mat-option",26),d(1),m()),e&2){let l=o.$implicit;s("value",l.id),n(),F(l.nombre)}}function ze(e,o){if(e&1&&(M(0),f(1,Re,2,2,"mat-option",25),A()),e&2){let l=o.ngIf;n(),s("ngForOf",l.data)}}function Le(e,o){if(e&1&&(i(0,"mat-option",26),d(1),m()),e&2){let l=o.$implicit;s("value",l.id),n(),F(l.razonSocial)}}function qe(e,o){if(e&1&&(M(0),f(1,Le,2,2,"mat-option",25),A()),e&2){let l=o.ngIf;n(),s("ngForOf",l.data)}}function Ue(e,o){if(e&1&&(i(0,"mat-option",26),d(1),m()),e&2){let l=o.$implicit;s("value",l.id),n(),X("",l.primerNombre," ",l.primerApellido,"")}}function Ze(e,o){if(e&1&&(M(0),f(1,Ue,2,3,"mat-option",25),A()),e&2){let l=o.ngIf;n(),s("ngForOf",l.data)}}function He(e,o){e&1&&(i(0,"mat-error"),d(1,"El valor es requerido!"),m())}function Je(e,o){e&1&&(i(0,"mat-error"),d(1,"El valor ingresado no puede superar el total a pagar!"),m())}function Ke(e,o){e&1&&(i(0,"mat-error"),d(1,"El valor ingresado no puede ser 0!"),m())}function Qe(e,o){if(e&1){let l=z();i(0,"div",27)(1,"mat-form-field",28)(2,"mat-label"),d(3,"Valor a cancelar"),m(),i(4,"input",29),b("blur",function(){w(l);let t=v();return E(t.valorAbono.updateValueAndValidity())}),m(),f(5,He,2,0,"mat-error",11)(6,Je,2,0,"mat-error",11)(7,Ke,2,0,"mat-error",11),m(),i(8,"mat-form-field",28)(9,"mat-label"),d(10,"Observaciones"),m(),g(11,"textarea",30),m()()}if(e&2){let l=v();n(4),s("allowNegativeNumbers",!1)("separatorLimit","999999999")("formControlName","valorAbono"),n(),s("ngIf",(l.valorAbono.touched||l.valorAbono.dirty)&&l.valorAbono.hasError("required")),n(),s("ngIf",(l.valorAbono.touched||l.valorAbono.dirty)&&l.valorAbono.hasError("exceedsBalance")),n(),s("ngIf",(l.valorAbono.touched||l.valorAbono.dirty)&&l.valorAbono.hasError("valueZero")),n(4),s("formControlName","observacion")}}function We(e,o){if(e&1&&(i(0,"div",21)(1,"div",31)(2,"p",32),d(3,"Movimientos"),m(),g(4,"app-custom-table",33),m()()),e&2){let l=v();n(4),s("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)}}function Xe(e,o){if(e&1&&(i(0,"div",22)(1,"div",34)(2,"fuse-alert",35)(3,"span",36),d(4,"Informaci\xF3n"),m(),d(5),m()()()),e&2){let l=v();n(2),s("type","info")("appearance","outline"),n(3),L(" ",l.message," ")}}function Ye(e,o){if(e&1&&(i(0,"span",24),d(1,"Subtotal: "),i(2,"span",37),d(3),h(4,"currency"),m()()),e&2){let l=v();n(3),F(y(4,1,l.subtotal))}}function et(e,o){if(e&1&&(i(0,"span",24),d(1,"Comisiones: "),i(2,"span",37),d(3),h(4,"currency"),m()()),e&2){let l=v();n(3),F(y(4,1,l.totalComision))}}function tt(e,o){if(e&1&&(i(0,"span",24),d(1,"Total a pagar: "),i(2,"span",37),d(3),h(4,"currency"),m()()),e&2){let l=v();n(3),L(" ",y(4,1,l.totalPagar)," ")}}var at={validation:!1},Oe=(()=>{let o=class o{constructor(){this.fb=p(xe),this.empresaClienteService=p(je),this.pagoTrabajadorService=p($),this.cobroTrabajadorService=p(ke),this.datePipe=p(C),this.swalService=p(Ae),this.estadosDatosService=p(B),this.fuseService=p(fe),this.currencyPipe=p(x),this.decimalPipe=p(q),this.router=p(k),this.empleadosService=p(Ie),this.empresa$=this.empresaClienteService.getEmpresasClientes().pipe(P(a=>{let t=a.data;t&&(this.form.get("idSubEmpresa").setValue(t[0].id),this.getEmpleadosSubEmpresas(t[0].id))})),this.tipoPago$=this.pagoTrabajadorService.tipoPagoTrabajadores().pipe(P(a=>{let t=a.data;t&&(this.selectOptionValue=t)})),this.data=[],this.columns=["Empresa","N factura / Comprobante","Valor pendiente"],this.columnPropertyMap={Empresa:"nombreSubEmpresa","N factura / Comprobante":"numeroFactura","Valor pendiente":"valorPendiente"}}createForm(){this.form=this.fb.group({fechaFinal:["",T.required],idSubEmpresa:["",T.required],idTipoPagoTrabajador:["",T.required],idTrabajador:["",T.required],valorAbono:["",[this.maxAmountValidator.bind(this)]],observacion:[""]})}ngOnInit(){this.createForm(),this.form.get("valorAbono").valueChanges.subscribe(a=>{console.log(a),a==0?(this.form.get("valorAbono").setValidators([T.required,this.maxAmountValidator.bind(this)]),this.form.updateValueAndValidity()):a>0&&this.actualizaSelected(a)})}actualizaSelected(a){a===this.totalPagar?(console.log("Si entra al actualizar"),this.form.get("idTipoPagoTrabajador").setValue(this.selectOptionValue[0].id)):a<this.totalPagar&&(console.log("Si entra al actualizar 2"),this.form.get("idTipoPagoTrabajador").setValue(this.selectOptionValue[1].id))}get valorAbono(){return this.form.get("valorAbono")}maxAmountValidator(a){if(a.value===null||a.value===void 0||a.value==="")return null;console.log(a.value);let t=parseFloat(a.value.toString().replace(/,/g,""));return console.log(t),t===0?{valueZero:!0}:t>this.totalPagar?(console.log("Si entra"),{exceedsBalance:!0}):null}closeDialog(){this.router.navigate(["/pages/gestion-cobros/trabajador"])}getEmpleadosSubEmpresas(a){this.empleados$=this.empleadosService.getEmpleadosSubempresas(a)}onGet(){if(this.form.valid){let{fechaFinal:a,idSubEmpresa:t,idTrabajador:r}=this.form.getRawValue(),u={fechaFinallData:this.datePipe.transform(a,"yyyy-MM-dd"),idSubEmpresa:t,idTrabajador:r};console.log(u),this.getAllPagoTrabajador(u)}}onSave(){let H=this.form.getRawValue(),{fechaFinal:a,idSubEmpresa:t,idTrabajador:r,idTipoPagoTrabajador:c}=H,u=K(H,["fechaFinal","idSubEmpresa","idTrabajador","idTipoPagoTrabajador"]),Be={fechaFinal:this.datePipe.transform(a,"yyyy-MM-dd"),idSubEmpresa:t},U=[];U=this.data.map(R=>({idCobroTrabajador:R.id}));let Z=D(J(D({},Be),{idTipoPagoTrabajador:c,detallePagoTrabajador:U,idTrabajador:r}),u);console.log(Z),this.fuseService.open(D({},Te)).afterClosed().subscribe(R=>{R==="confirmed"&&this.postSave(Z)})}getAllPagoTrabajador(a){this.cobroTrabajadorService.getCobroTrabajador(a).pipe(Q(t=>(this.subtotal=0,this.totalComision=0,this.totalPagar=0,t&&Array.isArray(t.data)?t.data.forEach(r=>{r.montoCuota=this.currencyPipe.transform(r.montoCuota,"USD","symbol","1.2-2"),r.comision=this.currencyPipe.transform(r.comision,"USD","symbol","1.2-2"),r.pagar=this.currencyPipe.transform(r.pagar,"USD","symbol","1.2-2"),r.valorPendiente=this.currencyPipe.transform(r.valorPendiente,"USD","symbol","1.2-2"),r.fechaCobro=this.datePipe.transform(r.fechaCobro,"dd/MM/yyyy"),this.totalPagar+=parseFloat(r.montoCuota.replace(/[^0-9.-]+/g,""))}):this.data=[],t))).subscribe(t=>{t&&Array.isArray(t.data)?this.data=t.data:(this.data=[],this.message=t.msg)})}postSave(a){this.pagoTrabajadorService.postPagoTrabajador(a).subscribe(t=>{this.swalService.ToastAler({icon:"success",title:"Registro Creado o Actualizado con Exito.",timer:4e3}),this.estadosDatosService.stateGrid.next(!0),this.closeDialog()},t=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=S({type:o,selectors:[["app-form-pago-trabajador"]],standalone:!0,features:[I([{provide:ie,useClass:Fe},{provide:re,useValue:"en-GB"},C,x,q,De(at)]),_],decls:53,vars:28,consts:[["finalPicker",""],["cdkScrollable","",1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:inset-0","sm:overflow-hidden"],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","pl-8"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","sm:flex-row","md:px-8"],[1,"mt-6","w-full","shrink-0","sm:mt-0","sm:space-x-2","lg:w-full"],[1,"mt-8",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full","min-w-90"],["matInput","","placeholder","dd/mm/yyyy",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],["placeholder","Tipo de pago trabajador",3,"formControlName"],[4,"ngIf"],["placeholder","Empresa",3,"formControlName"],["placeholder","Trabajadores",3,"formControlName"],["class","flex flex-col items-baseline sm:flex-row gap-2.5",4,"ngIf"],[1,"relative","border","border-gray-300","rounded-lg"],[1,"absolute","-top-3","left-4","bg-white","px-2","text-gray-500","font-semibold"],[1,"flex","flex-wrap","justify-end","gap-2.5","sm:mb-4","pr-2"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"sm:w-auto","w-full","sm:mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"lg:w-auto","w-full","sm:mt-6","transition","duration-200","text-white","font-semibold","rounded-lg","md:w-auto",3,"click","ngClass","disabled"],[1,"flex","flex-auto","overflow-hidden"],[1,"inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"flex","flex-col","gap-4","justify-end","sm:flex-row"],[1,"sm:pr-4","text-gray-600","font-bold","text-right"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"flex","flex-col","items-baseline","sm:flex-row","gap-2.5"],["floatLabel","always",1,"w-full"],["matInput","","mask","separator.2","thousandSeparator",",","decimalMarker",".","placeholder","Valor a cancelar",3,"blur","allowNegativeNumbers","separatorLimit","formControlName"],["matInput","","placeholder","Observaciones",3,"formControlName"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:p-4","sm:mb-10","sm:overflow-y-auto"],[1,"text-lg","text-black","font-semibold","mb-4"],[3,"columns","displayedColumns","columnPropertyMap","data"],[1,"inline-block","p-4","sm:p-8","print:p-0","w-full"],[3,"type","appearance"],["fuseAlertTitle",""],[1,"text-gray-800"]],template:function(t,r){if(t&1){let c=z();i(0,"div",1)(1,"div",2),d(2," Registro de Pago Individual "),m(),i(3,"div",3)(4,"div",4)(5,"form",5)(6,"div",6)(7,"mat-form-field",7)(8,"mat-label"),d(9,"Fecha de corte"),m(),g(10,"input",8)(11,"mat-datepicker-toggle",9)(12,"mat-datepicker",null,0),m(),i(14,"mat-form-field",7)(15,"mat-label"),d(16,"Tipo de pago"),m(),i(17,"mat-select",10),f(18,ze,2,1,"ng-container",11),h(19,"async"),m()()(),i(20,"div",6)(21,"mat-form-field",7)(22,"mat-label"),d(23,"Empresa"),m(),i(24,"mat-select",12),f(25,qe,2,1,"ng-container",11),h(26,"async"),m()(),i(27,"mat-form-field",7)(28,"mat-label"),d(29,"Trabajadores"),m(),i(30,"mat-select",13),f(31,Ze,2,1,"ng-container",11),h(32,"async"),m()()(),f(33,Qe,12,7,"div",14),i(34,"div",15)(35,"div",16),d(36," Opciones "),m(),i(37,"div",17)(38,"button",18),b("click",function(){return w(c),E(r.closeDialog())}),i(39,"span"),d(40," Atras "),m()(),i(41,"button",19),b("click",function(){return w(c),E(r.onGet())}),i(42,"span"),d(43," Consultar "),m()(),i(44,"button",20),b("click",function(){return w(c),E(r.onSave())}),i(45,"span"),d(46," Registrar "),m()()()()()()(),f(47,We,5,4,"div",21)(48,Xe,6,3,"div",22),i(49,"div",23),f(50,Ye,5,3,"span",24)(51,et,5,3,"span",24)(52,tt,5,3,"span",24),m()()}if(t&2){let c=W(13);n(5),s("formGroup",r.form),n(5),s("matDatepicker",c)("formControlName","fechaFinal"),n(),s("for",c),n(6),s("formControlName","idTipoPagoTrabajador"),n(),s("ngIf",y(19,19,r.tipoPago$)),n(6),s("formControlName","idSubEmpresa"),n(),s("ngIf",y(26,21,r.empresa$)),n(5),s("formControlName","idTrabajador"),n(),s("ngIf",y(32,23,r.empleados$)),n(2),s("ngIf",r.data.length),n(5),s("color","primary"),n(3),s("color","primary"),n(3),s("ngClass",Y(25,$e,r.data.length==0,r.data.length>0))("disabled",r.data.length==0||r.form.invalid),n(3),j(r.data.length?47:r.message?48:-1),n(3),j(r.subtotal?50:-1),n(),j(r.totalComision?51:-1),n(),j(r.totalPagar?52:-1)}},dependencies:[oe,x,G,_e,N,Pe,we,Ee,V,O,se,ne,Ce,pe,te,ae,Se,ve,ue,ge,be,he,ye,ee,Me,de,le]});let e=o;return e})();var Ge=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=S({type:o,selectors:[["app-form-view-pago-trabajador"]],standalone:!0,features:[_],decls:2,vars:0,template:function(t,r){t&1&&(i(0,"p"),d(1,"form-view-pago-trabajador works!"),m())}});let e=o;return e})();var Xt=[{path:"",component:Ne},{path:"individual",component:Oe},{path:"individual/:id",component:Ge}];export{Xt as default};
