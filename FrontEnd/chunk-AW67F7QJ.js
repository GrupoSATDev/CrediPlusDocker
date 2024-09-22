import{a as A,b as W,c as Te,d as Ge,e as Ne}from"./chunk-MMIVTPZO.js";import{a as Fe,b as Ie,c as we,d as Ae}from"./chunk-PM7Y6XOW.js";import{a as Me}from"./chunk-VS2UVASU.js";import{a as K}from"./chunk-6IEWE3OU.js";import{a as _e}from"./chunk-B3JKLSIR.js";import{a as P,b as De,c as w,d as B}from"./chunk-NYXXZLC7.js";import"./chunk-XLGI4M45.js";import"./chunk-FLYHOBTN.js";import{a as de,b as ce,c as pe,k as O}from"./chunk-7MJ462UO.js";import{h as me}from"./chunk-C2BDAT5Z.js";import{B as ye,E as Ee,I as q,b as ue,i as k,l as ge,n as z,p as he,q as ve,t as Se,w as xe,x as Ce}from"./chunk-DESY5WO2.js";import{ea as I,fa as fe,ja as $}from"./chunk-JWHB23S2.js";import"./chunk-TAOXPEWO.js";import{a as be}from"./chunk-QEQK4NML.js";import{b as se,d as V,e as le}from"./chunk-7GFVIFOO.js";import{g as R,j as G,l as N,r as ne}from"./chunk-TI3VW26V.js";import{$ as ee,$b as te,Cb as e,Db as t,Eb as u,Fb as E,Gb as _,Ib as D,Ob as x,Qb as f,Yb as o,Za as a,Zb as g,_a as j,dc as ie,ea as U,ec as F,fa as p,fc as oe,ka as y,mc as J,nc as re,oc as ae,pb as b,q as Z,rb as l,ua as v,va as S}from"./chunk-MZ7JCHPI.js";import{a as h,d as X}from"./chunk-NEB6MB4Y.js";var M=(()=>{let m=class m{constructor(r,i){this._http=r,this.appSettings=i}getSolicitudes(r){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${r}`)}getSolicitud(r){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${r}`)}postSolicitudes(r){return delete r.id,this._http.post(this.appSettings.solicitudesCreditos.url.base,r)}putSolicitudes(r){let i=r.id;return delete r.id,this._http.put(`${this.appSettings.solicitudesCreditos.url.base}/${i}`,r)}patchSolicitud(r){let i=r.id;delete r.id;let{idEstado:d}=r;return this._http.patch(`${this.appSettings.solicitudesCreditos.url.base}/${i}?idEstado=${d}`,{})}};m.\u0275fac=function(i){return new(i||m)(U(ne),U(be))},m.\u0275prov=ee({token:m,factory:m.\u0275fac,providedIn:"root"});let s=m;return s})();var Pe=(()=>{let m=class m{constructor(){this.fb=p(ye),this.dialogRef=p(de),this.fuseService=p(O),this.estadosDatosService=p(w),this.toasService=p(B),this._matData=p(ce),this.solicitudService=p(M)}ngOnInit(){this.initialInfoForm=this.fb.group({}),this.firstFormGroup=this.fb.group({nombre:["",z.required]}),this.secondFormGroup=this.fb.group({cupo:["",[z.required]],observacion:["",[z.required]]}),this.createForm();let r=this._matData;if(r.edit){let i=r.data;this.form.patchValue(i)}}onSave(){if(this.secondFormGroup.valid)if(this._matData.edit){let i=this.form.getRawValue(),{cupo:c}=i,C=X(i,["cupo"]),T=h({cupo:Number(c)},C);this.fuseService.open(h({},P)).afterClosed().subscribe(L=>{L==="confirmed"?this.solicitudService.putSolicitudes(T).subscribe(Y=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let r=this.secondFormGroup.getRawValue(),{cupo:c}=r,C=X(r,["cupo"]),T=h({cupo:Number(c)},C);this.fuseService.open(h({},P)).afterClosed().subscribe(L=>{L==="confirmed"?this.solicitudService.postSolicitudes(T).subscribe(Y=>{console.log(Y),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],cupo:[""],observacion:[""]})}closeDialog(){this.dialogRef.close()}};m.\u0275fac=function(i){return new(i||m)},m.\u0275cmp=y({type:m,selectors:[["app-form-solicitudes"]],standalone:!0,features:[F],decls:70,vars:19,consts:[["stepper",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[3,"linear"],["label","Terminos y condiciones",3,"stepControl"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full","px-4"],[1,"max-w-lg","text-center",3,"formGroup"],[1,"text-2xl","font-bold","mb-4"],[1,"mb-6"],["mat-raised-button","","matStepperNext","",1,"bg-blue-500","text-white","px-6","py-2","rounded-md","bg-credigray-100",3,"disabled"],["label","Verifica tu informaci\xF3n",3,"stepControl"],[3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-center","gap-2.5"],["mat-raised-button","","matStepperPrevious","",1,"px-6","py-2","rounded-md"],["label","Pasos a seguir"],["label","Solicita tu cupo",3,"stepControl"],["matInput","","placeholder","observacion",3,"formControlName"],["mat-raised-button","",1,"bg-blue-500","text-white","px-6","py-2","rounded-md","bg-credigray-100",3,"click","disabled"]],template:function(i,d){if(i&1){let c=D();e(0,"div",1)(1,"mat-horizontal-stepper",2,0)(3,"mat-step",3)(4,"div",4)(5,"form",5)(6,"h2",6),o(7,"Terminos y condiciones"),t(),e(8,"p",7),o(9," Se presentar\xE1n los t\xE9rminos y condiciones para acceder al cr\xE9dito en la plataforma. En espera de los textos, por ahora se mantiene el lorem ipsu. "),t(),e(10,"button",8),o(11," Siguiente "),t()()()(),e(12,"mat-step",9)(13,"div",4)(14,"form",10)(15,"mat-form-field",11)(16,"mat-label"),o(17,"Nombre de completo"),t(),u(18,"input",12),t(),e(19,"mat-form-field",11)(20,"mat-label"),o(21,"Identificaci\xF3n"),t(),u(22,"input",12),t(),e(23,"mat-form-field",11)(24,"mat-label"),o(25,"Direcci\xF3n"),t(),u(26,"input",12),t(),e(27,"mat-form-field",11)(28,"mat-label"),o(29,"Email"),t(),u(30,"input",12),t(),e(31,"mat-form-field",11)(32,"mat-label"),o(33,"Ciudad"),t(),u(34,"input",12),t(),e(35,"div",13)(36,"button",14),o(37,"Anterior"),t(),e(38,"button",8),o(39,"Siguiente"),t()()()()(),e(40,"mat-step",15)(41,"div",4)(42,"form",5)(43,"h2",6),o(44,"Pasos a seguir"),t(),e(45,"p",7),o(46," 1. Al completar estos pasos nuestro equipo validar\xE1 la informaci\xF3n y aprobar\xE1 o rechazar\xE1 la solicitud, puedes ver el estado en cualquier momento. "),t(),e(47,"p",7),o(48," 2.	Si tu solicitud fue aprobada nuestro equipo se comunicar\xE1 contigo para socializarte el cupo aprobado y los detalles de tu cr\xE9dito. "),t(),e(49,"p",7),o(50," 3.	Si tu solicitud fue rechazada puedes comunicarte con nuestro equipo para obtener m\xE1s informaci\xF3n, podr\xE1s realizar una nueva solicitud dentro de XXX d\xEDas. "),t(),e(51,"button",8),o(52," Siguiente "),t()()()(),e(53,"mat-step",16)(54,"div",4)(55,"form",5)(56,"h2",6),o(57,"Solicita tu cupo"),t(),e(58,"p",7),o(59," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto consequuntur eveniet exercitationem expedita facere in, magnam magni molestiae mollitia natus obcaecati odit quibusdam quisquam sit soluta, sunt vel voluptatibus! "),t(),e(60,"mat-form-field",11)(61,"mat-label"),o(62,"Cupo"),t(),u(63,"input",12),t(),e(64,"mat-form-field",11)(65,"mat-label"),o(66,"Observaci\xF3nes"),t(),u(67,"textarea",17),t(),e(68,"button",18),x("click",function(){return v(c),S(d.onSave())}),o(69,"Finalizar"),t()()()()()()}i&2&&(a(),l("linear",!0),a(2),l("stepControl",d.initialInfoForm),a(2),l("formGroup",d.initialInfoForm),a(5),l("disabled",d.initialInfoForm.invalid),a(2),l("stepControl",d.firstFormGroup),a(2),l("formGroup",d.firstFormGroup),a(4),l("formControlName","nombre"),a(4),l("formControlName","nombre"),a(4),l("formControlName","nombre"),a(4),l("formControlName","nombre"),a(4),l("formControlName","nombre"),a(4),l("disabled",d.firstFormGroup.invalid),a(4),l("formGroup",d.initialInfoForm),a(9),l("disabled",d.initialInfoForm.invalid),a(2),l("stepControl",d.secondFormGroup),a(2),l("formGroup",d.secondFormGroup),a(8),l("formControlName","cupo"),a(4),l("formControlName","observacion"),a(),l("disabled",d.secondFormGroup.invalid))},dependencies:[I,k,q,ue,Ee,Se,ge,he,ve,xe,Ce,Ie,Fe,Ae,we]});let s=m;return s})();var ke=()=>["/pages/gestion-creditos/solicitudes"];function $e(s,m){if(s&1){let n=D();E(0),e(1,"div",15)(2,"button",16),x("click",function(){v(n);let i=f(2);return S(i.onSave())}),o(3," Aprobar "),t(),e(4,"button",17),x("click",function(){v(n);let i=f(2);return S(i.onReject())}),o(5," Rechazar "),t()(),_()}}function Oe(s,m){if(s&1&&(e(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),o(4),t(),e(5,"p",11),o(6,"Identificaci\xF3n: "),e(7,"span",12),o(8),t()(),e(9,"p",11),o(10,"Empresa: "),e(11,"span",12),o(12),t()(),e(13,"p",13),o(14,"Cargo: "),e(15,"span",12),o(16),t()(),e(17,"p",11),o(18,"Correo: "),e(19,"span",12),o(20),t()(),e(21,"p",11),o(22,"Direcci\xF3n: "),e(23,"span",12),o(24),t()(),e(25,"p",11),o(26,"Tel\xE9fono: "),e(27,"span",12),o(28),t()()(),e(29,"div")(30,"p",11),o(31,"N\xFAmero de solicitud: #12345"),t(),e(32,"p",11),o(33,"Monto solicitado: "),e(34,"span",12),o(35),J(36,"currency"),t()(),e(37,"p",11),o(38,"Fecha de Solicitud: "),e(39,"span",12),o(40),J(41,"date"),t()()()(),b(42,$e,6,0,"ng-container",14),t()),s&2){let n=f();a(4),te("",n.items.trabajador.primerNombre," ",n.items.trabajador.segundoNombre," ",n.items.trabajador.primerApellido," ",n.items.trabajador.segundoApellido," "),a(4),g(n.items.trabajador.numDoc),a(4),g(n.items.nombreSubEmpresa),a(4),g(n.items.trabajador.cargo),a(4),g(n.items.trabajador.correo),a(4),g(n.items.trabajador.direccion),a(4),g(n.items.trabajador.telefono),a(7),g(re(36,13,n.items.cupo)),a(5),g(ae(41,15,n.items.fechaCreacion,"dd/MM/yyyy")),a(2),l("ngIf",n.detalleEmpleado.idEstadoSolicitud==n.CodigosEstadosSolicitudes.PENDIENTE)}}var H=(()=>{let m=class m{constructor(){this.empleadosServices=p(Me),this.solicitudService=p(M),this.toasService=p(B),this.fuseService=p(O),this.estadosDatosService=p(w),this.activatedRoute=p(se),this.router=p(V),this.CodigosEstadosSolicitudes=W}ngOnInit(){let r=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(r)}getSolicitud(r){this.subcription$=this.solicitudService.getSolicitud(r).subscribe(i=>{this.items=i.data,this.detalleEmpleado=i.data})}onSave(){let r={idEstado:W.APROBADA,id:this.detalleEmpleado.id};this.fuseService.open(h({},P)).afterClosed().subscribe(d=>{d==="confirmed"&&(this.subcription$=this.solicitudService.patchSolicitud(r).subscribe(c=>{c&&(this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/solicitudes"]))},c=>{this.toasService.toasAlertWarn({message:"Ha ocurrido un error!!!!",actionMessage:"Cerrar",duration:3e3})}))})}onReject(){let r={idEstado:W.RECHAZADA,id:this.detalleEmpleado.id};this.fuseService.open(h({},De)).afterClosed().subscribe(d=>{d==="confirmed"&&(this.subcription$=this.solicitudService.patchSolicitud(r).subscribe(c=>{c&&(this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/solicitudes"]))},c=>{this.toasService.toasAlertWarn({message:"Ha ocurrido un error!!!!",actionMessage:"Cerrar",duration:3e3})}))})}ngOnDestroy(){this.subcription$.unsubscribe()}};m.\u0275fac=function(i){return new(i||m)},m.\u0275cmp=y({type:m,selectors:[["app-form-approve"]],standalone:!0,features:[F],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"text-gray-600","font-semibold"],[4,"ngIf"],[1,"flex","justify-between","items-center","mt-10"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"]],template:function(i,d){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),u(6,"mat-icon",5),t()(),e(7,"h2",6),o(8,"Detalle de Solicitud"),t()(),b(9,Oe,43,18,"div",7),t()()()),i&2&&(a(5),l("routerLink",oe(3,ke)),a(),l("svgIcon","heroicons_outline:arrow-long-left"),a(3),l("ngIf",d.items))},dependencies:[I,N,R,me,G,fe,$,le]});let s=m;return s})();function ze(s,m){if(s&1&&(E(0),u(1,"app-custom-table",19),_()),s&2){let n=f(2);a(),l("columns",n.columns)("displayedColumns",n.columns)("columnPropertyMap",n.columnPropertyMap)("data",n.data)("buttons",n.buttons)}}function qe(s,m){if(s&1&&b(0,ze,2,5,"ng-container",18),s&2){let n=f();l("ngIf",n.data.length)}}function Be(s,m){if(s&1&&(E(0),u(1,"app-custom-table",19),_()),s&2){let n=f(2);a(),l("columns",n.columns)("displayedColumns",n.columns)("columnPropertyMap",n.columnPropertyMap)("data",n.data)("buttons",n.buttons)}}function We(s,m){if(s&1&&b(0,Be,2,5,"ng-container",18),s&2){let n=f();l("ngIf",n.data.length)}}function He(s,m){if(s&1&&(E(0),u(1,"app-custom-table",19),_()),s&2){let n=f(2);a(),l("columns",n.columns)("displayedColumns",n.columns)("columnPropertyMap",n.columnPropertyMap)("data",n.data)("buttons",n.buttons)}}function Le(s,m){if(s&1&&b(0,He,2,5,"ng-container",18),s&2){let n=f();l("ngIf",n.data.length)}}var je=(()=>{let m=class m{constructor(r,i,d){this._matDialog=r,this.estadoDatosService=i,this.solicitudService=d,this.datePipe=p(G),this.currencyPipe=p(N),this.router=p(V),this.selectedTab=A.APROBADA,this.data=[],this.columns=["Empleado","Cupo solicitado","Empresa","Estado","Fecha de solicitud"],this.columnPropertyMap={Empleado:"nombreTrabajador","Cupo solicitado":"cupo",Empresa:"nombreSubEmpresa",Estado:"nombreEstadoSolicitud","Fecha de solicitud":"fechaCreacion"},this.buttons=[{label:"View",icon:"visibility",action:c=>{console.log("Approve",c),this.selectedData=c,this.router.navigate(["pages/gestion-creditos/solicitudes/estados",this.selectedData.id])}}],this.tabChanged=c=>{console.log("tabChangeEvent => ",c),console.log("index => ",c.index),this.selectedTab=c.index==0?A.APROBADA:c.index==1?A.RECHAZADA:c.index==2?A.PENDIENTE:A.APROBADA,this.getSolicitudes(this.selectedTab)}}onNew(){this._matDialog.open(Pe,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onApprove(){this._matDialog.open(H,{autoFocus:!1,data:{data:this.selectedData},maxHeight:"90vh",width:"50%",maxWidth:"100%"})}getSolicitudes(r){this.subcription$=this.solicitudService.getSolicitudes(r).pipe(Z(i=>(i.data.forEach(d=>{d.estado?d.estado=K.ACTIVO:d.estado=K.INACTIVO}),i)),Z(i=>(i.data.forEach(d=>{d.fechaCreacion=this.datePipe.transform(d.fechaCreacion,"dd/MM/yyyy"),d.cupo=this.currencyPipe.transform(d.cupo,"USD","symbol","1.2-2")}),i))).subscribe(i=>{i?this.data=i.data:this.data=[]},i=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(i=>{i&&this.getSolicitudes(this.selectedTab)})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getSolicitudes(this.selectedTab),this.listenGrid()}};m.\u0275fac=function(i){return new(i||m)(j(pe),j(w),j(M))},m.\u0275cmp=y({type:m,selectors:[["app-grid-solicitudes"]],standalone:!0,features:[ie([G,N]),F],decls:22,vars:7,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedTabChange","animationDuration"],["label","Aprobadas"],["matTabContent",""],["label","Rechazadas"],["label","Pendientes"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(i,d){if(i&1){let c=D();e(0,"div",1)(1,"div",2)(2,"div",3),o(3,"Solicitud de cr\xE9ditos"),t(),e(4,"div",4)(5,"mat-form-field",5),u(6,"mat-icon",6)(7,"input",7),t(),e(8,"button",8),x("click",function(){return v(c),S(d.onNew())}),u(9,"mat-icon",9),e(10,"span",10),o(11,"Crear solicitud"),t()()()(),e(12,"div",11)(13,"div",12)(14,"mat-tab-group",13,0),x("selectedTabChange",function(T){return v(c),S(d.tabChanged(T))}),e(16,"mat-tab",14),b(17,qe,1,1,"ng-template",15),t(),e(18,"mat-tab",16),b(19,We,1,1,"ng-template",15),t(),e(20,"mat-tab",17),b(21,Le,1,1,"ng-template",15),t()()()()()}i&2&&(a(5),l("subscriptSizing","dynamic"),a(),l("svgIcon","heroicons_solid:magnifying-glass"),a(),l("autocomplete","off")("placeholder","Buscar"),a(),l("color","primary"),a(),l("svgIcon","heroicons_outline:plus"),a(5),l("animationDuration","500"))},dependencies:[_e,I,k,$,q,Ge,Ne,Te,R]});let s=m;return s})();var Ut=[{path:"",component:je},{path:"estados/:id",component:H}];export{Ut as default};
