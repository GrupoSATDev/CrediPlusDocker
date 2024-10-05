import{a as S,b as R}from"./chunk-2VC7SEPD.js";import{a as Ze,b as Ye,c as Je}from"./chunk-AV45XYUC.js";import{a as Xe,b as $e,c as We,d as He}from"./chunk-LVIWDW4T.js";import{a as ce}from"./chunk-D3LMVGHO.js";import{a as Be,b as Ue}from"./chunk-BAD57Q24.js";import{a as pe}from"./chunk-6IEWE3OU.js";import{a as de}from"./chunk-ACIMG2KZ.js";import{a as je}from"./chunk-QE3E4OX7.js";import{a as Ve,b as G}from"./chunk-GD676RBR.js";import{a as T}from"./chunk-OFEOPKCC.js";import{a as Le}from"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import{g as ae}from"./chunk-CUGJBCL5.js";import{a as ee,b as te,c as ie,d as Te}from"./chunk-3P4FUJJD.js";import{h as Q}from"./chunk-4CCKGQO6.js";import{a as Ge}from"./chunk-OL2ABKOO.js";import{C as le,G as z,b as oe,c as we,i as O,l as ne,n as _,p as se,q as qe,s as Me,u as Pe,v as Ne,w as Oe,x as ke,z as ze}from"./chunk-7YVLRDAA.js";import{$ as Ae,ea as A,fa as Re,ja as k}from"./chunk-T34F2ICN.js";import"./chunk-XMIUBE2U.js";import{a as re}from"./chunk-PDEGUYSW.js";import{b as K,d as N,e as Ie}from"./chunk-HGIHZLIS.js";import{e as Y,f as Fe,g as P,i as _e,j as U,m as X,s as J}from"./chunk-YH7HM3TK.js";import{$,$b as Se,Cb as e,Da as ve,Db as i,Eb as p,Fb as D,Gb as F,Ib as M,Ob as b,Qb as h,U as ge,Yb as o,Za as s,Zb as x,_a as W,_b as he,ac as Ee,bc as xe,cc as ye,dc as H,ea as q,ec as C,fa as m,fc as Ce,hc as V,ka as y,mc as B,nc as Z,oc as De,pb as f,q as j,rb as c,ua as g,va as v}from"./chunk-32HXX3OB.js";import{a as ue,d as be}from"./chunk-NEB6MB4Y.js";var w=(()=>{let r=class r{constructor(l,t){this._http=l,this.appSettings=t}getSolicitudes(l){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${l}`)}getSolicitud(l){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${l}`)}postSolicitudes(l){return delete l.id,this._http.post(this.appSettings.solicitudesCreditos.url.base,l)}putSolicitudes(l){let t=l.id;return delete l.id,this._http.put(`${this.appSettings.solicitudesCreditos.url.base}/${t}`,l)}patchSolicitud(l){let t=l.id;delete l.id;let{idEstado:n}=l;return this._http.patch(`${this.appSettings.solicitudesCreditos.url.base}/${t}?idEstado=${n}`,{})}};r.\u0275fac=function(t){return new(t||r)(q(J),q(re))},r.\u0275prov=$({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();var Ke=(()=>{let r=class r{constructor(){this.aceptado=!1,this.aceptacionCambiada=new ve}toggleAceptar(l){this.aceptado=l.checked,this.aceptacionCambiada.emit(this.aceptado)}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=y({type:r,selectors:[["app-terminos-condiciones"]],outputs:{aceptacionCambiada:"aceptacionCambiada"},standalone:!0,features:[C],decls:35,vars:0,consts:[[1,"p-4","border","rounded-md","shadow-sm"],[1,"text-lg","font-semibold","mb-2","text-center"],["cdkScrollable","",1,"terminos-contenido"],[1,"mb-4"],[1,"block","text-center"],[1,"text-gray-800","text-left"],[1,"check"],[3,"change"]],template:function(t,n){t&1&&(e(0,"div",0)(1,"h2",1),o(2,"T\xC9RMINOS Y CONDICIONES"),i(),e(3,"div",2)(4,"p",3)(5,"span",4)(6,"b"),o(7," DECLARACI\xD3N DE TITULARIDAD Y VERACIDAD DE LA INFORMACI\xD3N. "),i()(),p(8,"br"),e(9,"small",5),o(10," Como la informaci\xF3n aqu\xED suministrada por m\xED es confidencial y b\xE1sica para la vinculaci\xF3n como Cliente de CREDIPLUS, la gesti\xF3n y aprobaci\xF3n de cualquier producto u operaci\xF3n y/o la atenci\xF3n de mis solicitudes, peticiones, quejas o reclamos; CREDIPLUS exige que todos los datos suministrados sean exactos y se puedan verificar. Declaro que la informaci\xF3n suministrada en este Sitio Web/Aplicaci\xF3n es de mi titularidad, concuerda con la realidad y asumo plena responsabilidad por la veracidad de la misma; cualquier inexactitud podr\xE1 acarrear su rechazo o la no aprobaci\xF3n de la vinculaci\xF3n al Banco y/o de la solicitud del (de los) producto(s), sin responsabilidad alguna por parte de CREDIPLUS frente a terceros o al (a los) solicitantes. Reconozco y acepto que en el evento que la informaci\xF3n por m\xED suministrada en este Sitio Web/Aplicaci\xF3n no sea de mi propiedad, induzca a una falsedad personal o sea violatoria del bien jur\xEDdico tutelado denominado \u201Cde la protecci\xF3n de la informaci\xF3n y de los datos\u201D podr\xE9 incurrir en tipos penales sanci\xF3nales por la Ley Penal Colombiana. "),i()(),e(11,"p",3)(12,"span",4)(13,"b"),o(14," AUTORIZACI\xD3N PARA EL REPORTE Y CONSULTA DE INFORMACI\xD3N ANTE LOS OPERADORES DE BANCOS DE DATOS DE INFORMACI\xD3N FINANCIERA Y/O CREDITICIA (LEY 1266 DE 2008). "),i()(),p(15,"br"),e(16,"small",5),o(17," Con la finalidad de que CREDIPLUS pueda dar tr\xE1mite a mi solicitud de nuevos productos, evaluar y estudiar mi comportamiento crediticio y comercial y mantener actualizada mi informaci\xF3n financiera, crediticia y comercial ante los operadores de bancos de datos, AUTORIZO a CREDIPLUS para que: i) obtenga toda la informaci\xF3n y referencias relativas a mi persona, a mi comportamiento crediticio y comercial, mis h\xE1bitos de pago, el manejo de la(s) cuenta(s) corriente(s) y de ahorros, de tarjetas de cr\xE9dito, de otros productos financieros y/o de servicios contratados con el sector financiero y/o con el sector real y, en general, el cumplimiento dado a mis obligaciones; ii) consulte ante los operadores de bancos de datos, as\xED como ante cualquier otra entidad de caracter\xEDsticas similares que en el futuro se establezca, mi endeudamiento con el sector financiero, as\xED como la informaci\xF3n comercial disponible sobre el cumplimiento dado a los compromisos adquiridos con dicho(s) sector(es); iii) incluya mi nombre, apellidos y tipo y n\xFAmero de mi documento de identificaci\xF3n, y dem\xE1s informaci\xF3n que se haga necesaria, en los archivos de deudores y obligados que llevan los operadores de bancos de datos, o cualquiera otra entidad que en el futuro se establezca con ese prop\xF3sito, reportando el comportamiento positivo o negativo que se presente en la atenci\xF3n de las obligaciones a mi cargo. La autorizaci\xF3n de reporte aqu\xED establecida se hace extensiva a cualquier persona natural o jur\xEDdica que en el futuro llegue a ostentar la calidad de acreedor en relaci\xF3n con la(s) obligaci\xF3n(es) contra\xEDda(s) con CREDIPLUS; iv) consulte y procese mi informaci\xF3n ante los operadores de bancos de datos y operadores de informaci\xF3n y riesgo (Cifin, Experian, Covinoc, Fenalcheque) o cualquier otra que en un futuro se establezca; v) entregue o comparta mi informaci\xF3n con personas jur\xEDdicas que administran bases de datos, para efectos de prevenci\xF3n y control de fraudes y selecci\xF3n de riesgos; vi) remita v\xEDa correo electr\xF3nico y/o f\xEDsico, seg\xFAn lo estime pertinente, a la(s) direcci\xF3n(direcciones) suministradas por m\xED en este Sitio Web/Aplicaci\xF3n y/o en los registros de esa Entidad Financiera la notificaci\xF3n previa de que trata el art\xEDculo 21 de la Ley 1266 de 2008 y/o cualquier otra norma que lo modifique o adicione; vii) conserve, con las debidas actualizaciones y durante el per\xEDodo necesario se\xF1alado en la Ley, mi informaci\xF3n crediticia; viii) reporte a las autoridades p\xFAblicas, tributarias, aduaneras o judiciales, la informaci\xF3n que requieran en el desarrollo de sus funciones; ix) ejerza el derecho de inspecci\xF3n para corroborar en cualquier tiempo que la informaci\xF3n que he suministrado para la aprobaci\xF3n del (de los) producto(s) y/o servicio(s) es veraz, completa, exacta y actualizada; y, x) para que en el evento de negarse la solicitud de vinculaci\xF3n al Banco y/o el otorgamiento de uno o varios de los productos y/o servicios que \xE9ste ofrece, dicha Entidad destruya los documentos que se aportan como soporte de la respectiva solicitud, dejando al efecto constancia expresa de su destrucci\xF3n. El resultado del an\xE1lisis para acceder al producto, me ser\xE1 informado a trav\xE9s de alguno de los medios de contacto que he suministrado. "),i()(),e(18,"p",3)(19,"span",4)(20,"b"),o(21," AUTORIZACI\xD3N PARA EL TRATAMIENTO DE LA INFORMACI\xD3N PERSONAL (LEY 1581 DE 2012) "),i()(),p(22,"br"),e(23,"small",5),o(24," De manera libre, voluntaria y expresa autorizo a CREDIPLUS para que lleve a cabo el tratamiento de mis datos personales. En virtud de dicha autorizaci\xF3n de tratamiento, CREDIPLUS podr\xE1 recolectar, almacenar, usar, circular, transferir, trasmitir, suprimir y/o actualizar mis datos e informaci\xF3n personal, la cual, es suministrada por m\xED a trav\xE9s del Sitio Web/Aplicaci\xF3n. Mis datos e informaci\xF3n personal podr\xE1n ser sujetos de tratamiento por CREDIPLUS, sus Encargados o Personas Responsables a quienes \xE9l les haya transmitido o transferido la informaci\xF3n. En ese sentido, el tratamiento por la presente autorizaci\xF3n permitido a CREDIPLUS y a quien tenga la calidad de Encargado o Persona Responsable podr\xE1 tener por objeto las finalidades leg\xEDtimas de: i) cumplir las obligaciones contractuales y reglamentarias, as\xED como para la prestaci\xF3n de los servicios contratados; ii) atender y dar soluci\xF3n a las solicitudes, peticiones, quejas o reclamos formulados al Banco; iii) crear y actualizar los perfiles transaccionales; iv) realizar gestiones comerciales; v) ofrecer productos o servicios, propios o de terceros; vi) realizar labores para que se avalen, afiancen o garanticen las operaciones de cr\xE9dito; vii) realizar labores para que se origine mi vinculaci\xF3n al Banco como Cliente de uno o varios productos y servicios financieros pudiendo compartir informaci\xF3n con terceros, tales como, Compa\xF1\xEDas Aseguradoras, Intermediarios de Seguros, Instituciones Educativas, Concesionarios, y Entidades P\xFAblicas y/o Privadas de cualquier naturaleza con las que se tengan Convenios de Libranza y/u otro tipo de alianzas comerciales, entre otros; viii) realizar gestiones de cobranza; ix) informar sobre los cambios realizados a los productos y servicios del portafolio del Banco; x) informar sobre las campa\xF1as y estrategias promocionales y de mercadeo; xi) analizar las tendencias y comportamientos de consumo de los consumidores financieros; xii) recibir informaci\xF3n, ofertas comerciales y publicitarias de productos del Banco y de aliados de \xE9ste; xiii) recibir cualquier tipo de informaci\xF3n y/o comunicaci\xF3n que el Banco estime necesario; y, xiv) se adelanten todos los procesos de relacionamiento con el cliente (soportados o no en tecnolog\xEDa), para un abordaje integral con todos mis productos y soluciones contratadas con CREDIPLUS, entre otros permitidos por la Ley. Conozco y entiendo que las respuestas a las preguntas sobre el tratamiento de datos sensibles son facultativas. Como Titular de la informaci\xF3n tengo derecho a conocer, actualizar y rectificar mis datos personales, solicitar prueba de la autorizaci\xF3n otorgada para el tratamiento de la informaci\xF3n, informarme sobre el uso que se ha dado a los mismos, revocar la autorizaci\xF3n, solicitar la supresi\xF3n de mis datos cuando sea procedente y acceder en forma gratuita a los mismos. En virtud de la presente autorizaci\xF3n el responsable del tratamiento de la informaci\xF3n es CREDIPLUS. La presente autorizaci\xF3n se hace extensiva a quien represente los intereses de CREDIPLUS y a quien la Entidad ceda sus derechos, obligaciones o su posici\xF3n contractual a cualquier t\xEDtulo, en relaci\xF3n con los productos o servicios de los que soy titular. Para ejercer los derechos sobre sus datos personales puede comunicarse a la l\xEDnea de Atenci\xF3n en Barranquilla: XXXXXXXXXXX. Para conocer nuestra pol\xEDtica de privacidad visite https://www.XXXXXXXXXXXX. "),i()(),e(25,"p",3)(26,"span",4)(27,"b"),o(28," AUTORIZACI\xD3N PARA COMPARTIR DATOS PERSONALES CON ENTIDADES PERTENECIENTES AL GRUPO ECON\xD3MICO "),i()(),p(29,"br"),e(30,"small",5),o(31," Autorizo expresa y voluntariamente a CREDIPLUS y/o a cualquier otra Entidad que represente sus derechos, a compartir mi informaci\xF3n personal, financiera, crediticia y comercial como Cliente de la entidad con cualquiera otra persona o Entidad Vinculada al Grupo Econ\xF3mico al que pertenece y/o llegue a pertenecer CREDIPLUS o la Entidad que represente sus derechos; para realizar el mismo tratamiento y con las mismas finalidades que haya llegado a autorizar a CREDIPLUS. Declaro haber le\xEDdo cuidadosamente el contenido de este documento y haberlo comprendido a cabalidad, raz\xF3n por la cual entiendo su alcance e implicaciones y con la aceptaci\xF3n de los t\xE9rminos y condiciones contenidos en este Sitio Web/Aplicaci\xF3n de CREDIPLUS acepto expresamente: i) la autorizaci\xF3n para el reporte y consulta de mi informaci\xF3n ante los operadores de bancos de datos de informaci\xF3n financiera y/o crediticia (Ley 1266 de 2008); ii) el tratamiento de mis datos personales y dem\xE1s informaci\xF3n; y, iii) el compartir mis datos personales con Entidades pertenecientes al Grupo Econ\xF3mico. El presente documento tendr\xE1 validez desde su aceptaci\xF3n de los t\xE9rminos y condiciones marcando el check de aceptaci\xF3n electr\xF3nica del formulario de solicitud, durante la vigencia de la relaci\xF3n del Cliente con CREDIPLUS y/o de quien en el futuro represente sus derechos, u ostente los derechos y/u obligaciones a cargo de CREDIPLUS, y en general por el t\xE9rmino establecido en la Ley. "),i()()(),e(32,"div",6)(33,"mat-checkbox",7),b("change",function(E){return n.toggleAceptar(E)}),o(34," Acepto los t\xE9rminos y condiciones "),i()()())},dependencies:[Ge,Q],styles:['@charset "UTF-8";.terminos-contenido[_ngcontent-%COMP%]{max-height:200px;overflow-y:auto;padding-right:10px;margin-bottom:15px}.check[_ngcontent-%COMP%]{margin-left:-12px}']});let a=r;return a})();var Qe=(()=>{let r=class r{constructor(l,t){this._http=l,this.appSettings=t}getTipos(){return this._http.get(this.appSettings.tipoSolicitudes.url.base)}};r.\u0275fac=function(t){return new(t||r)(q(J),q(re))},r.\u0275prov=$({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();var et=(a,r)=>({"bg-crediblue-50":a,"bg-credigray-100":r});function dt(a,r){if(a&1&&(e(0,"mat-option",30),o(1),i()),a&2){let d=r.$implicit;c("value",d.id),s(),x(d.nombre)}}function ct(a,r){if(a&1&&(D(0),f(1,dt,2,2,"mat-option",29),F()),a&2){let d=r.ngIf;s(),c("ngForOf",d.data)}}function mt(a,r){a&1&&(e(0,"mat-error"),o(1," Este campo es requerido!. "),i())}function ut(a,r){a&1&&(e(0,"mat-error"),o(1," Este campo es requerido!. "),i())}var pt={validation:!1},tt=(()=>{let r=class r{constructor(){this.fb=m(ze),this.dialogRef=m(ee),this.fuseService=m(ae),this.estadosDatosService=m(T),this.toasService=m(G),this.empleadoService=m(ce),this._matData=m(te),this.aceptoTerminos=!1,this.matDisabled=!1,this.swalService=m(de),this.tipoSolicitudService=m(Qe),this.tipoSolicitud$=this.tipoSolicitudService.getTipos(),this.solicitudService=m(w)}ngOnInit(){this.createForm();let l="c6d6b3a7-799f-42eb-8868-e069df989b11";this.subcripstion$=this.empleadoService.getEmpleado(l).pipe(j(t=>(t.data.nombreCompleto=t.data.primerNombre+" "+t.data.segundoNombre+" "+t.data.primerApellido+" "+t.data.segundoApellido,t))).subscribe(t=>{let n=t.data,u={nombreCompleto:t.data.nombreCompleto,numDoc:t.data.numDoc,direccion:t.data.direccion,idMunicipio:t.data.nombreMunicipio,correo:t.data.correo};this.firstFormGroup.patchValue(u)})}onAceptarTerminos(l){this.aceptoTerminos=l,l?this.initialInfoForm.patchValue({check:!0}):this.initialInfoForm.patchValue({check:""})}onSave(){if(this.secondFormGroup.valid&&!this._matData.edit){let l=this.secondFormGroup.getRawValue(),{cupo:n}=l,u=be(l,["cupo"]),E=ue({cupo:Number(n)},u);this.fuseService.open(ue({},Ve)).afterClosed().subscribe(at=>{at==="confirmed"?this.solicitudService.postSolicitudes(E).subscribe(me=>{console.log(me),console.log("Edicion"),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:2}),this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.closeDialog()},me=>{this.swalService.ToastAler({icon:"info",title:me.error.errorMenssages[0],timer:6e3})}):this.closeDialog()})}}createForm(){this.initialInfoForm=this.fb.group({check:["",_.required]}),this.firstFormGroup=this.fb.group({nombreCompleto:[{value:"",disabled:!0},_.required],numDoc:[{value:"",disabled:!0},_.required],direccion:[{value:"",disabled:!0},_.required],idMunicipio:[{value:"",disabled:!0},_.required],correo:[{value:"",disabled:!0},_.required]}),this.secondFormGroup=this.fb.group({cupo:["",[_.required]],observacion:[""],idTipoSolicitud:["",[_.required]]})}closeDialog(){this.dialogRef.close()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=y({type:r,selectors:[["app-form-solicitudes"]],standalone:!0,features:[H([Be(pt)]),C],decls:92,vars:41,consts:[["stepper",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[3,"linear"],["label","Terminos y condiciones",3,"stepControl","editable"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full","px-4"],[1,"max-w-lg",3,"formGroup"],[3,"aceptacionCambiada"],[1,"text-center"],["mat-flat-button","",1,"bg-crediorange-100","mt-4","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-raised-button","","matStepperNext","",1,"text-white","px-6","py-2","rounded-md","mt-4","ml-2",3,"disabled","ngClass"],["label","Verifica tu informaci\xF3n",3,"stepControl","editable"],[3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-center","gap-2.5"],["mat-raised-button","","matStepperPrevious","",1,"bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold"],["mat-raised-button","","matStepperNext","",1,"bg-crediblue-50","text-white","px-6","py-2","rounded-md",3,"disabled"],["label","Pasos a seguir",3,"editable"],[1,"max-w-lg","text-center",3,"formGroup"],[1,"text-2xl","font-bold","mb-4"],[1,"mb-6","text-left"],["mat-flat-button","",1,"bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-raised-button","","matStepperNext","",1,"bg-crediblue-50","text-white","px-6","py-2","rounded-md","ml-2",3,"disabled"],["label","Solicita tu cupo",3,"stepControl","editable"],["placeholder","Tipo de solicitud",3,"formControlName"],[4,"ngIf"],["matInput","","thousandSeparator",".","placeholder","Cupo solicitado",3,"formControlName","mask"],["matInput","","placeholder","Observaciones",3,"formControlName"],["mat-raised-button","",1,"text-white","px-6","py-2","rounded-md","ml-2",3,"click","disabled","ngClass"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(t&1){let u=M();e(0,"div",1)(1,"mat-horizontal-stepper",2,0)(3,"mat-step",3)(4,"div",4)(5,"form",5)(6,"app-terminos-condiciones",6),b("aceptacionCambiada",function(I){return g(u),v(n.onAceptarTerminos(I))}),i(),e(7,"div",7)(8,"button",8),b("click",function(){return g(u),v(n.closeDialog())}),e(9,"span"),o(10," Cancelar "),i()(),e(11,"button",9),o(12," Siguiente "),i()()()()(),e(13,"mat-step",10)(14,"div",4)(15,"form",11)(16,"mat-form-field",12)(17,"mat-label"),o(18,"Nombre de completo"),i(),p(19,"input",13),i(),e(20,"mat-form-field",12)(21,"mat-label"),o(22,"Identificaci\xF3n"),i(),p(23,"input",13),i(),e(24,"mat-form-field",12)(25,"mat-label"),o(26,"Direcci\xF3n"),i(),p(27,"input",13),i(),e(28,"mat-form-field",12)(29,"mat-label"),o(30,"Email"),i(),p(31,"input",13),i(),e(32,"mat-form-field",12)(33,"mat-label"),o(34,"Ciudad"),i(),p(35,"input",13),i(),e(36,"div",14)(37,"button",15),o(38,"Anterior"),i(),e(39,"button",16),o(40,"Siguiente"),i()()()()(),e(41,"mat-step",17)(42,"div",4)(43,"form",18)(44,"h2",19),o(45,"Pasos a seguir"),i(),e(46,"p",20),o(47," 1. Al completar estos pasos nuestro equipo validar\xE1 la informaci\xF3n y aprobar\xE1 o rechazar\xE1 la solicitud, puedes ver el estado en cualquier momento. "),i(),e(48,"p",20),o(49," 2.	Si tu solicitud fue aprobada nuestro equipo se comunicar\xE1 contigo para socializarte el cupo aprobado y los detalles de tu cr\xE9dito. "),i(),e(50,"p",20),o(51," 3.	Si tu solicitud fue rechazada puedes comunicarte con nuestro equipo para obtener m\xE1s informaci\xF3n, podr\xE1s realizar una nueva solicitud dentro de XXX d\xEDas. "),i(),e(52,"div")(53,"button",21),b("click",function(){return g(u),v(n.closeDialog())}),e(54,"span"),o(55," Cancelar "),i()(),e(56,"button",22),o(57," Siguiente "),i()()()()(),e(58,"mat-step",23)(59,"div",4)(60,"form",18)(61,"h2",19),o(62,"Solicita tu cupo"),i(),e(63,"p",20),o(64," Tu solicitud ser\xE1 revisada por nuestro equipo, en caso de ser aprobada, tu cr\xE9dito quedar\xE1 en estado "),e(65,"b"),o(66,"pendiente,"),i(),o(67," mientras validamos tu informaci\xF3n financiera. "),i(),e(68,"p",20),o(69," Te invitamos a revisar constantemente tus solicitudes y cr\xE9ditos para conocer el estado en que se encuentran. "),i(),e(70,"mat-form-field",12)(71,"mat-label"),o(72,"Tipo de solicitud"),i(),e(73,"mat-select",24),f(74,ct,2,1,"ng-container",25),B(75,"async"),i(),f(76,mt,2,0,"mat-error",25),i(),e(77,"mat-form-field",12)(78,"mat-label"),o(79,"Digita el cupo que deseas solicitar"),i(),p(80,"input",26),f(81,ut,2,0,"mat-error",25),i(),e(82,"mat-form-field",12)(83,"mat-label"),o(84,"Observaci\xF3nes"),i(),p(85,"textarea",27),i(),e(86,"div")(87,"button",21),b("click",function(){return g(u),v(n.closeDialog())}),e(88,"span"),o(89," Cancelar "),i()(),e(90,"button",28),b("click",function(){return g(u),v(n.onSave())}),o(91,"Finalizar "),i()()()()()()()}t&2&&(s(),c("linear",!0),s(2),c("stepControl",n.initialInfoForm)("editable",!n.matDisabled),s(2),c("formGroup",n.initialInfoForm),s(3),c("color","primary"),s(3),c("disabled",!n.aceptoTerminos)("ngClass",V(35,et,n.aceptoTerminos,!n.aceptoTerminos)),s(2),c("stepControl",n.firstFormGroup)("editable",!n.matDisabled),s(2),c("formGroup",n.firstFormGroup),s(4),c("formControlName","nombreCompleto"),s(4),c("formControlName","numDoc"),s(4),c("formControlName","direccion"),s(4),c("formControlName","correo"),s(4),c("formControlName","idMunicipio"),s(4),c("disabled",n.firstFormGroup.invalid),s(2),c("editable",!n.matDisabled),s(2),c("formGroup",n.initialInfoForm),s(10),c("color","primary"),s(3),c("disabled",n.initialInfoForm.invalid),s(2),c("stepControl",n.secondFormGroup)("editable",!n.matDisabled),s(2),c("formGroup",n.secondFormGroup),s(13),c("formControlName","idTipoSolicitud"),s(),c("ngIf",Z(75,33,n.tipoSolicitud$)),s(2),c("ngIf",n.secondFormGroup.get("idTipoSolicitud").dirty||n.secondFormGroup.get("idTipoSolicitud").touched&&n.secondFormGroup.get("idTipoSolicitud").errors.required),s(4),c("formControlName","cupo")("mask","separator.0"),s(),c("ngIf",n.secondFormGroup.get("cupo").dirty||n.secondFormGroup.get("cupo").touched&&n.secondFormGroup.get("cupo").errors.required),s(4),c("formControlName","observacion"),s(2),c("color","primary"),s(3),c("disabled",n.secondFormGroup.invalid)("ngClass",V(38,et,n.secondFormGroup.valid,n.secondFormGroup.invalid)))},dependencies:[A,O,z,oe,le,Pe,ne,se,qe,Oe,ke,$e,Xe,He,We,Ke,Y,P,we,Ue,_e,Ae,Le,Fe]});let a=r;return a})();function ft(a,r){if(a&1&&(D(0),p(1,"app-custom-table",20),F()),a&2){let d=h(2);s(),c("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttons)}}function bt(a,r){if(a&1&&f(0,ft,2,5,"ng-container",19),a&2){let d=h();c("ngIf",d.data.length)}}function gt(a,r){if(a&1&&(D(0),p(1,"app-custom-table",20),F()),a&2){let d=h(2);s(),c("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttons)}}function vt(a,r){if(a&1&&f(0,gt,2,5,"ng-container",19),a&2){let d=h();c("ngIf",d.data.length)}}function ht(a,r){if(a&1&&(D(0),p(1,"app-custom-table",20),F()),a&2){let d=h(2);s(),c("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttons)}}function St(a,r){if(a&1&&f(0,ht,2,5,"ng-container",19),a&2){let d=h();c("ngIf",d.data.length)}}function Et(a,r){if(a&1&&(D(0),p(1,"app-custom-table",20),F()),a&2){let d=h(2);s(),c("columns",d.columns)("displayedColumns",d.columns)("columnPropertyMap",d.columnPropertyMap)("data",d.data)("buttons",d.buttons)}}function xt(a,r){if(a&1&&f(0,Et,2,5,"ng-container",19),a&2){let d=h();c("ngIf",d.data.length)}}var it=(()=>{let r=class r{constructor(l,t,n){this._matDialog=l,this.estadoDatosService=t,this.solicitudService=n,this.datePipe=m(U),this.currencyPipe=m(X),this.router=m(N),this.selectedTab=S.APROBADA,this.data=[],this.columns=["Fecha de solicitud","Empleado","Cupo solicitado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Empleado:"nombreTrabajador","Cupo solicitado":"cupo",Empresa:"nombreSubEmpresa",Estado:"nombreEstadoSolicitud"},this.buttons=[{label:"View",icon:"visibility",action:u=>{console.log("Approve",u),this.selectedData=u,this.router.navigate(["pages/gestion-creditos/solicitudes/estados",this.selectedData.id])}}],this.tabChanged=u=>{console.log("tabChangeEvent => ",u),console.log("index => ",u.index),this.tabIndex=u.index,console.log(this.tabIndex),this.selectedTab=u.index==0?S.APROBADA:u.index==1?S.RECHAZADA:u.index==2?S.PENDIENTE:u.index==3?S.PENDIENTE_DESEMBOLSO:S.APROBADA,this.getSolicitudes(this.selectedTab)}}onNew(){this._matDialog.open(tt,{autoFocus:!1,data:{edit:!1},maxHeight:"95vh",maxWidth:"100%",disableClose:!0})}getSolicitudes(l){this.subcription$=this.solicitudService.getSolicitudes(l).pipe(j(t=>(t.data.forEach(n=>{n.estado?n.estado=pe.ACTIVO:n.estado=pe.INACTIVO}),t)),j(t=>(t.data.forEach(n=>{n.fechaCreacion=this.datePipe.transform(n.fechaCreacion,"dd/MM/yyyy"),n.cupo=this.currencyPipe.transform(n.cupo,"USD","symbol","1.2-2")}),t))).subscribe(t=>{t?this.data=t.data:this.data=[]},t=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGridSolicitudes.asObservable().subscribe(t=>{t.state&&(console.log("Si entro"),console.log(t),this.selectedTab=t.tab==0?S.APROBADA:t.tab==1?S.RECHAZADA:t.tab==2?S.PENDIENTE:t.tab==3?S.PENDIENTE_DESEMBOLSO:S.APROBADA,this.tabIndex=t.tab,console.log(this.tabIndex),this.getSolicitudes(this.selectedTab))})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getSolicitudes(this.selectedTab),this.listenGrid()}};r.\u0275fac=function(t){return new(t||r)(W(ie),W(T),W(w))},r.\u0275cmp=y({type:r,selectors:[["app-grid-solicitudes"]],standalone:!0,features:[H([U,X]),C],decls:24,vars:7,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","Aprobadas"],["matTabContent",""],["label","Rechazadas"],["label","Pendientes"],["label","Pendiente desembolso"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(t,n){if(t&1){let u=M();e(0,"div",1)(1,"div",2)(2,"div",3),o(3,"Solicitud de Cr\xE9ditos"),i(),e(4,"div",4)(5,"mat-form-field",5),p(6,"mat-icon",6)(7,"input",7),i(),e(8,"button",8),b("click",function(){return g(u),v(n.onNew())}),p(9,"mat-icon",9),e(10,"span",10),o(11,"Agregar"),i()()()(),e(12,"div",11)(13,"div",12)(14,"mat-tab-group",13,0),ye("selectedIndexChange",function(I){return g(u),xe(n.tabIndex,I)||(n.tabIndex=I),v(I)}),b("selectedTabChange",function(I){return g(u),v(n.tabChanged(I))}),e(16,"mat-tab",14),f(17,bt,1,1,"ng-template",15),i(),e(18,"mat-tab",16),f(19,vt,1,1,"ng-template",15),i(),e(20,"mat-tab",17),f(21,St,1,1,"ng-template",15),i(),e(22,"mat-tab",18),f(23,xt,1,1,"ng-template",15),i()()()()()}t&2&&(s(5),c("subscriptSizing","dynamic"),s(),c("svgIcon","heroicons_solid:magnifying-glass"),s(),c("autocomplete","off")("placeholder","Buscar"),s(2),c("svgIcon","heroicons_outline:plus"),s(5),c("animationDuration","500"),Ee("selectedIndex",n.tabIndex))},dependencies:[je,A,O,k,z,Ye,Je,Ze,P]});let a=r;return a})();var yt=(a,r)=>({"bg-crediblue-50":a,"bg-crediorange-100":r}),fe=(()=>{let r=class r{constructor(){this.inputValue=new Me(""),this._matData=m(te),this.solicitudService=m(w),this.toasService=m(G),this.estadosDatosService=m(T),this.activatedRoute=m(K),this.dialogRef=m(ee),this.router=m(N),this.swalService=m(de),this.CodigosEstadosSolicitudes=R}onSave(){let l={},t={};this._matData.data.idEstado==R.APROBADA?(t={id:this._matData.data.id,cupo:this._matData.data.cupo,idTipoSolicitud:this._matData.data.idTipoSolicitud,observacion:this._matData.data.observacion,observaci\u00F3nAprueba:this.inputValue.value,observacionRechazo:""},l={id:this._matData.data.id,idEstado:this._matData.data.idEstado}):(t={id:this._matData.data.id,cupo:this._matData.data.cupo,idTipoSolicitud:this._matData.data.idTipoSolicitud,observacion:this._matData.data.observacion,observacionRechazo:this.inputValue.value,observaci\u00F3nAprueba:""},l={id:this._matData.data.id,idEstado:this._matData.data.idEstado}),this.subcription$=this.solicitudService.patchSolicitud(l).pipe(ge(n=>this.solicitudService.putSolicitudes(t))).subscribe(n=>{this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),this.router.navigate(["/pages/gestion-creditos/solicitudes"]),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:0}),this.close()},n=>{this.swalService.ToastAler({icon:"error",title:"Ha ocurrido un error al crear el registro!",timer:4e3})})}close(){this.dialogRef.close()}ngOnDestroy(){}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=y({type:r,selectors:[["app-dialog-confirm-solicitud"]],standalone:!0,features:[C],decls:19,vars:10,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:text-left"],[1,"w-full"],["matInput","","placeholder","Observaciones",3,"formControl"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-stroked-button","",1,"fuse-mat-button-large","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"matDialogClose"],["mat-flat-button","",1,"fuse-mat-button-large","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color","matDialogClose","ngClass"]],template:function(t,n){t&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),p(3,"mat-icon",3),i(),e(4,"div",4)(5,"div",5),o(6," Confirmacion "),i(),e(7,"div",6),o(8),i()()(),e(9,"div",7)(10,"mat-form-field",8)(11,"mat-label"),o(12,"Observaciones"),i(),p(13,"textarea",9),i()(),e(14,"div",10)(15,"button",11),o(16," Cancelar "),i(),e(17,"button",12),b("click",function(){return n.onSave()}),o(18," Confirmar "),i()()()),t&2&&(s(3),c("svgIcon","heroicons_solid:question-mark-circle"),s(5),he(" ",n._matData.data.idEstado==n.CodigosEstadosSolicitudes.APROBADA?"Confirma que su informaci\xF3n y el cupo solicitado es el correcto \xBFDesea continuar?":"Confirma que rechaza la solicitud y el cupo solicitado \xBFDesea continuar?"," "),s(5),c("formControl",n.inputValue),s(2),c("matDialogClose","cancelled"),s(2),c("color","primary")("matDialogClose","confirmed")("ngClass",V(7,yt,n._matData.data.idEstado==n.CodigosEstadosSolicitudes.APROBADA,n._matData.data.idEstado==n.CodigosEstadosSolicitudes.RECHAZADA)))},dependencies:[k,Te,Y,O,z,oe,le,ne,se,Ne,A]});let a=r;return a})();var Ct=()=>["/pages/gestion-creditos/solicitudes"];function Dt(a,r){if(a&1){let d=M();D(0),e(1,"div",15)(2,"button",16),b("click",function(){g(d);let t=h(2);return v(t.onReject())}),o(3," Rechazar "),i(),e(4,"button",17),b("click",function(){g(d);let t=h(2);return v(t.onSave())}),o(5," Aprobar "),i()(),F()}}function Ft(a,r){if(a&1&&(e(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),o(4),i(),e(5,"p",11),o(6,"Identificaci\xF3n: "),e(7,"span",12),o(8),i()(),e(9,"p",11),o(10,"Empresa: "),e(11,"span",12),o(12),i()(),e(13,"p",13),o(14,"Cargo: "),e(15,"span",12),o(16),i()(),e(17,"p",11),o(18,"Correo: "),e(19,"span",12),o(20),i()(),e(21,"p",11),o(22,"Direcci\xF3n: "),e(23,"span",12),o(24),i()(),e(25,"p",11),o(26,"Tel\xE9fono: "),e(27,"span",12),o(28),i()()(),e(29,"div")(30,"p",11),o(31,"N\xFAmero de solicitud: #12345"),i(),e(32,"p",11),o(33,"Cupo solicitado: "),e(34,"span",12),o(35),B(36,"currency"),i()(),e(37,"p",11),o(38,"Fecha de Solicitud: "),e(39,"span",12),o(40),B(41,"date"),i()()()(),f(42,Dt,6,0,"ng-container",14),i()),a&2){let d=h();s(4),Se("",d.items.trabajador.primerNombre," ",d.items.trabajador.segundoNombre," ",d.items.trabajador.primerApellido," ",d.items.trabajador.segundoApellido," "),s(4),x(d.items.trabajador.numDoc),s(4),x(d.items.nombreSubEmpresa),s(4),x(d.items.trabajador.cargo),s(4),x(d.items.trabajador.correo),s(4),x(d.items.trabajador.direccion),s(4),x(d.items.trabajador.telefono),s(7),x(Z(36,13,d.items.cupo)),s(5),x(De(41,15,d.items.fechaCreacion,"dd/MM/yyyy")),s(2),c("ngIf",d.detalleEmpleado.idEstadoSolicitud==d.CodigosEstadosSolicitudes.PENDIENTE)}}var ot=(()=>{let r=class r{constructor(){this.empleadosServices=m(ce),this.solicitudService=m(w),this.toasService=m(G),this.fuseService=m(ae),this.estadosDatosService=m(T),this.activatedRoute=m(K),this.router=m(N),this._matDialog=m(ie),this.CodigosEstadosSolicitudes=R}ngOnInit(){let l=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(l)}getSolicitud(l){this.subcription$=this.solicitudService.getSolicitud(l).subscribe(t=>{console.log(t.data),this.items=t.data,this.detalleEmpleado=t.data})}onSave(){let l={idEstado:R.APROBADA,id:this.detalleEmpleado.id,cupo:this.detalleEmpleado.cupo,observacion:this.detalleEmpleado.observacion,idTipoSolicitud:this.detalleEmpleado.idTipoSolicitud};this._matDialog.open(fe,{autoFocus:!0,data:{data:l,aprobado:!0},width:"30%",disableClose:!0})}onReject(){let l={idEstado:R.RECHAZADA,id:this.detalleEmpleado.id,cupo:this.detalleEmpleado.cupo,observacion:this.detalleEmpleado.observacion,idTipoSolicitud:this.detalleEmpleado.idTipoSolicitud};this._matDialog.open(fe,{autoFocus:!0,data:{data:l},width:"30%",disableClose:!0})}ngOnDestroy(){this.subcription$.unsubscribe()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=y({type:r,selectors:[["app-form-approve"]],standalone:!0,features:[C],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"text-gray-600","font-semibold"],[4,"ngIf"],[1,"flex","justify-end","items-center","gap-2.5","mt-10"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"]],template:function(t,n){t&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),p(6,"mat-icon",5),i()(),e(7,"h2",6),o(8,"Detalle de Solicitud"),i()(),f(9,Ft,43,18,"div",7),i()()()),t&2&&(s(5),c("routerLink",Ce(3,Ct)),s(),c("svgIcon","heroicons_outline:arrow-long-left"),s(3),c("ngIf",n.items))},dependencies:[A,X,P,Q,U,Re,k,Ie]});let a=r;return a})();var ro=[{path:"",component:it},{path:"estados/:id",component:ot}];export{ro as default};
