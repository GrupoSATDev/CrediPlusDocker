import{a as x,b as H}from"./chunk-K4ESK6U2.js";import{a as Me,b as ze,c as Oe,d as Ge,e as Le,f as je}from"./chunk-XSFTABVP.js";import{a as $}from"./chunk-PWHPCRCN.js";import{a as ke,b as Ve,c as Ue}from"./chunk-E7PUDPFG.js";import{a as ie}from"./chunk-6IEWE3OU.js";import{a as O,b as Ne}from"./chunk-NW3IUUPG.js";import{a as we}from"./chunk-LBLJGZM7.js";import{a as P,b as W}from"./chunk-TVROLQDL.js";import"./chunk-55LFJ2HF.js";import"./chunk-CHOSRW5W.js";import{a as ve,b as he,c as Ee,k as X}from"./chunk-GIPKHLVS.js";import{h as k}from"./chunk-7U4JZNVG.js";import{a as Pe}from"./chunk-EG5KDCD7.js";import{B as qe,E as Re,I as B,b as Se,c as xe,i as V,l as Fe,n as I,p as De,q as Ie,t as _e,w as Ae,x as Te}from"./chunk-CURMXRYA.js";import{ea as R,fa as ye,ja as U}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import{a as Ce}from"./chunk-EJW5UVWF.js";import{b as be,d as j,e as ge}from"./chunk-DJAHQBBJ.js";import{e as pe,g as q,j as M,l as z,r as fe}from"./chunk-NP3GUERB.js";import{$ as ae,$b as ne,Cb as t,Da as re,Db as i,Eb as p,Fb as _,Gb as A,Ib as T,Ob as v,Qb as h,Yb as a,Za as c,Zb as y,_a as G,ac as se,bc as ce,cc as le,dc as L,ea as Q,ec as D,fa as m,fc as de,hc as ee,ka as F,mc as te,nc as ue,oc as me,pb as b,q as N,rb as d,ua as E,va as S}from"./chunk-32HXX3OB.js";import{a as C,d as K}from"./chunk-NEB6MB4Y.js";var w=(()=>{let s=class s{constructor(r,o){this._http=r,this.appSettings=o}getSolicitudes(r){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${r}`)}getSolicitud(r){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${r}`)}postSolicitudes(r){return delete r.id,this._http.post(this.appSettings.solicitudesCreditos.url.base,r)}putSolicitudes(r){let o=r.id;return delete r.id,this._http.put(`${this.appSettings.solicitudesCreditos.url.base}/${o}`,r)}patchSolicitud(r){let o=r.id;delete r.id;let{idEstado:e}=r;return this._http.patch(`${this.appSettings.solicitudesCreditos.url.base}/${o}?idEstado=${e}`,{})}};s.\u0275fac=function(o){return new(o||s)(Q(fe),Q(Ce))},s.\u0275prov=ae({token:s,factory:s.\u0275fac,providedIn:"root"});let n=s;return n})();var Xe=(()=>{let s=class s{constructor(){this.aceptado=!1,this.aceptacionCambiada=new re}toggleAceptar(r){this.aceptado=r.checked,this.aceptacionCambiada.emit(this.aceptado)}};s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=F({type:s,selectors:[["app-terminos-condiciones"]],outputs:{aceptacionCambiada:"aceptacionCambiada"},standalone:!0,features:[D],decls:35,vars:0,consts:[[1,"p-4","border","rounded-md","shadow-sm"],[1,"text-lg","font-semibold","mb-2","text-center"],["cdkScrollable","",1,"terminos-contenido"],[1,"mb-4"],[1,"block","text-center"],[1,"text-gray-800","text-left"],[1,"check"],[3,"change"]],template:function(o,e){o&1&&(t(0,"div",0)(1,"h2",1),a(2,"T\xC9RMINOS Y CONDICIONES"),i(),t(3,"div",2)(4,"p",3)(5,"span",4)(6,"b"),a(7," DECLARACI\xD3N DE TITULARIDAD Y VERACIDAD DE LA INFORMACI\xD3N. "),i()(),p(8,"br"),t(9,"small",5),a(10," Como la informaci\xF3n aqu\xED suministrada por m\xED es confidencial y b\xE1sica para la vinculaci\xF3n como Cliente de CREDIPLUS, la gesti\xF3n y aprobaci\xF3n de cualquier producto u operaci\xF3n y/o la atenci\xF3n de mis solicitudes, peticiones, quejas o reclamos; CREDIPLUS exige que todos los datos suministrados sean exactos y se puedan verificar. Declaro que la informaci\xF3n suministrada en este Sitio Web/Aplicaci\xF3n es de mi titularidad, concuerda con la realidad y asumo plena responsabilidad por la veracidad de la misma; cualquier inexactitud podr\xE1 acarrear su rechazo o la no aprobaci\xF3n de la vinculaci\xF3n al Banco y/o de la solicitud del (de los) producto(s), sin responsabilidad alguna por parte de CREDIPLUS frente a terceros o al (a los) solicitantes. Reconozco y acepto que en el evento que la informaci\xF3n por m\xED suministrada en este Sitio Web/Aplicaci\xF3n no sea de mi propiedad, induzca a una falsedad personal o sea violatoria del bien jur\xEDdico tutelado denominado \u201Cde la protecci\xF3n de la informaci\xF3n y de los datos\u201D podr\xE9 incurrir en tipos penales sanci\xF3nales por la Ley Penal Colombiana. "),i()(),t(11,"p",3)(12,"span",4)(13,"b"),a(14," AUTORIZACI\xD3N PARA EL REPORTE Y CONSULTA DE INFORMACI\xD3N ANTE LOS OPERADORES DE BANCOS DE DATOS DE INFORMACI\xD3N FINANCIERA Y/O CREDITICIA (LEY 1266 DE 2008). "),i()(),p(15,"br"),t(16,"small",5),a(17," Con la finalidad de que CREDIPLUS pueda dar tr\xE1mite a mi solicitud de nuevos productos, evaluar y estudiar mi comportamiento crediticio y comercial y mantener actualizada mi informaci\xF3n financiera, crediticia y comercial ante los operadores de bancos de datos, AUTORIZO a CREDIPLUS para que: i) obtenga toda la informaci\xF3n y referencias relativas a mi persona, a mi comportamiento crediticio y comercial, mis h\xE1bitos de pago, el manejo de la(s) cuenta(s) corriente(s) y de ahorros, de tarjetas de cr\xE9dito, de otros productos financieros y/o de servicios contratados con el sector financiero y/o con el sector real y, en general, el cumplimiento dado a mis obligaciones; ii) consulte ante los operadores de bancos de datos, as\xED como ante cualquier otra entidad de caracter\xEDsticas similares que en el futuro se establezca, mi endeudamiento con el sector financiero, as\xED como la informaci\xF3n comercial disponible sobre el cumplimiento dado a los compromisos adquiridos con dicho(s) sector(es); iii) incluya mi nombre, apellidos y tipo y n\xFAmero de mi documento de identificaci\xF3n, y dem\xE1s informaci\xF3n que se haga necesaria, en los archivos de deudores y obligados que llevan los operadores de bancos de datos, o cualquiera otra entidad que en el futuro se establezca con ese prop\xF3sito, reportando el comportamiento positivo o negativo que se presente en la atenci\xF3n de las obligaciones a mi cargo. La autorizaci\xF3n de reporte aqu\xED establecida se hace extensiva a cualquier persona natural o jur\xEDdica que en el futuro llegue a ostentar la calidad de acreedor en relaci\xF3n con la(s) obligaci\xF3n(es) contra\xEDda(s) con CREDIPLUS; iv) consulte y procese mi informaci\xF3n ante los operadores de bancos de datos y operadores de informaci\xF3n y riesgo (Cifin, Experian, Covinoc, Fenalcheque) o cualquier otra que en un futuro se establezca; v) entregue o comparta mi informaci\xF3n con personas jur\xEDdicas que administran bases de datos, para efectos de prevenci\xF3n y control de fraudes y selecci\xF3n de riesgos; vi) remita v\xEDa correo electr\xF3nico y/o f\xEDsico, seg\xFAn lo estime pertinente, a la(s) direcci\xF3n(direcciones) suministradas por m\xED en este Sitio Web/Aplicaci\xF3n y/o en los registros de esa Entidad Financiera la notificaci\xF3n previa de que trata el art\xEDculo 21 de la Ley 1266 de 2008 y/o cualquier otra norma que lo modifique o adicione; vii) conserve, con las debidas actualizaciones y durante el per\xEDodo necesario se\xF1alado en la Ley, mi informaci\xF3n crediticia; viii) reporte a las autoridades p\xFAblicas, tributarias, aduaneras o judiciales, la informaci\xF3n que requieran en el desarrollo de sus funciones; ix) ejerza el derecho de inspecci\xF3n para corroborar en cualquier tiempo que la informaci\xF3n que he suministrado para la aprobaci\xF3n del (de los) producto(s) y/o servicio(s) es veraz, completa, exacta y actualizada; y, x) para que en el evento de negarse la solicitud de vinculaci\xF3n al Banco y/o el otorgamiento de uno o varios de los productos y/o servicios que \xE9ste ofrece, dicha Entidad destruya los documentos que se aportan como soporte de la respectiva solicitud, dejando al efecto constancia expresa de su destrucci\xF3n. El resultado del an\xE1lisis para acceder al producto, me ser\xE1 informado a trav\xE9s de alguno de los medios de contacto que he suministrado. "),i()(),t(18,"p",3)(19,"span",4)(20,"b"),a(21," AUTORIZACI\xD3N PARA EL TRATAMIENTO DE LA INFORMACI\xD3N PERSONAL (LEY 1581 DE 2012) "),i()(),p(22,"br"),t(23,"small",5),a(24," De manera libre, voluntaria y expresa autorizo a CREDIPLUS para que lleve a cabo el tratamiento de mis datos personales. En virtud de dicha autorizaci\xF3n de tratamiento, CREDIPLUS podr\xE1 recolectar, almacenar, usar, circular, transferir, trasmitir, suprimir y/o actualizar mis datos e informaci\xF3n personal, la cual, es suministrada por m\xED a trav\xE9s del Sitio Web/Aplicaci\xF3n. Mis datos e informaci\xF3n personal podr\xE1n ser sujetos de tratamiento por CREDIPLUS, sus Encargados o Personas Responsables a quienes \xE9l les haya transmitido o transferido la informaci\xF3n. En ese sentido, el tratamiento por la presente autorizaci\xF3n permitido a CREDIPLUS y a quien tenga la calidad de Encargado o Persona Responsable podr\xE1 tener por objeto las finalidades leg\xEDtimas de: i) cumplir las obligaciones contractuales y reglamentarias, as\xED como para la prestaci\xF3n de los servicios contratados; ii) atender y dar soluci\xF3n a las solicitudes, peticiones, quejas o reclamos formulados al Banco; iii) crear y actualizar los perfiles transaccionales; iv) realizar gestiones comerciales; v) ofrecer productos o servicios, propios o de terceros; vi) realizar labores para que se avalen, afiancen o garanticen las operaciones de cr\xE9dito; vii) realizar labores para que se origine mi vinculaci\xF3n al Banco como Cliente de uno o varios productos y servicios financieros pudiendo compartir informaci\xF3n con terceros, tales como, Compa\xF1\xEDas Aseguradoras, Intermediarios de Seguros, Instituciones Educativas, Concesionarios, y Entidades P\xFAblicas y/o Privadas de cualquier naturaleza con las que se tengan Convenios de Libranza y/u otro tipo de alianzas comerciales, entre otros; viii) realizar gestiones de cobranza; ix) informar sobre los cambios realizados a los productos y servicios del portafolio del Banco; x) informar sobre las campa\xF1as y estrategias promocionales y de mercadeo; xi) analizar las tendencias y comportamientos de consumo de los consumidores financieros; xii) recibir informaci\xF3n, ofertas comerciales y publicitarias de productos del Banco y de aliados de \xE9ste; xiii) recibir cualquier tipo de informaci\xF3n y/o comunicaci\xF3n que el Banco estime necesario; y, xiv) se adelanten todos los procesos de relacionamiento con el cliente (soportados o no en tecnolog\xEDa), para un abordaje integral con todos mis productos y soluciones contratadas con CREDIPLUS, entre otros permitidos por la Ley. Conozco y entiendo que las respuestas a las preguntas sobre el tratamiento de datos sensibles son facultativas. Como Titular de la informaci\xF3n tengo derecho a conocer, actualizar y rectificar mis datos personales, solicitar prueba de la autorizaci\xF3n otorgada para el tratamiento de la informaci\xF3n, informarme sobre el uso que se ha dado a los mismos, revocar la autorizaci\xF3n, solicitar la supresi\xF3n de mis datos cuando sea procedente y acceder en forma gratuita a los mismos. En virtud de la presente autorizaci\xF3n el responsable del tratamiento de la informaci\xF3n es CREDIPLUS. La presente autorizaci\xF3n se hace extensiva a quien represente los intereses de CREDIPLUS y a quien la Entidad ceda sus derechos, obligaciones o su posici\xF3n contractual a cualquier t\xEDtulo, en relaci\xF3n con los productos o servicios de los que soy titular. Para ejercer los derechos sobre sus datos personales puede comunicarse a la l\xEDnea de Atenci\xF3n en Barranquilla: XXXXXXXXXXX. Para conocer nuestra pol\xEDtica de privacidad visite https://www.XXXXXXXXXXXX. "),i()(),t(25,"p",3)(26,"span",4)(27,"b"),a(28," AUTORIZACI\xD3N PARA COMPARTIR DATOS PERSONALES CON ENTIDADES PERTENECIENTES AL GRUPO ECON\xD3MICO "),i()(),p(29,"br"),t(30,"small",5),a(31," Autorizo expresa y voluntariamente a CREDIPLUS y/o a cualquier otra Entidad que represente sus derechos, a compartir mi informaci\xF3n personal, financiera, crediticia y comercial como Cliente de la entidad con cualquiera otra persona o Entidad Vinculada al Grupo Econ\xF3mico al que pertenece y/o llegue a pertenecer CREDIPLUS o la Entidad que represente sus derechos; para realizar el mismo tratamiento y con las mismas finalidades que haya llegado a autorizar a CREDIPLUS. Declaro haber le\xEDdo cuidadosamente el contenido de este documento y haberlo comprendido a cabalidad, raz\xF3n por la cual entiendo su alcance e implicaciones y con la aceptaci\xF3n de los t\xE9rminos y condiciones contenidos en este Sitio Web/Aplicaci\xF3n de CREDIPLUS acepto expresamente: i) la autorizaci\xF3n para el reporte y consulta de mi informaci\xF3n ante los operadores de bancos de datos de informaci\xF3n financiera y/o crediticia (Ley 1266 de 2008); ii) el tratamiento de mis datos personales y dem\xE1s informaci\xF3n; y, iii) el compartir mis datos personales con Entidades pertenecientes al Grupo Econ\xF3mico. El presente documento tendr\xE1 validez desde su aceptaci\xF3n de los t\xE9rminos y condiciones marcando el check de aceptaci\xF3n electr\xF3nica del formulario de solicitud, durante la vigencia de la relaci\xF3n del Cliente con CREDIPLUS y/o de quien en el futuro represente sus derechos, u ostente los derechos y/u obligaciones a cargo de CREDIPLUS, y en general por el t\xE9rmino establecido en la Ley. "),i()()(),t(32,"div",6)(33,"mat-checkbox",7),v("change",function(f){return e.toggleAceptar(f)}),a(34," Acepto los t\xE9rminos y condiciones "),i()()())},dependencies:[Pe,k],styles:['@charset "UTF-8";.terminos-contenido[_ngcontent-%COMP%]{max-height:200px;overflow-y:auto;padding-right:10px;margin-bottom:15px}.check[_ngcontent-%COMP%]{margin-left:-12px}']});let n=s;return n})();var Be=(n,s)=>({"bg-crediblue-50":n,"bg-credigray-100":s});function Ye(n,s){n&1&&(t(0,"mat-error"),a(1," Este campo es requerido!. "),i())}var Je={validation:!1},We=(()=>{let s=class s{constructor(){this.fb=m(qe),this.dialogRef=m(ve),this.fuseService=m(X),this.estadosDatosService=m(P),this.toasService=m(W),this.empleadoService=m($),this._matData=m(he),this.aceptoTerminos=!1,this.matDisabled=!1,this.solicitudService=m(w)}ngOnInit(){this.initialInfoForm=this.fb.group({check:["",I.required]}),this.firstFormGroup=this.fb.group({nombreCompleto:[{value:"",disabled:!0},I.required],numDoc:[{value:"",disabled:!0},I.required],direccion:[{value:"",disabled:!0},I.required],idMunicipio:[{value:"",disabled:!0},I.required],correo:[{value:"",disabled:!0},I.required]}),this.secondFormGroup=this.fb.group({cupo:["",[I.required]],observacion:[""]}),this.createForm();let r=this._matData;if(r.edit){let e=r.data;this.form.patchValue(e)}let o="c6d6b3a7-799f-42eb-8868-e069df989b11";this.subcripstion$=this.empleadoService.getEmpleado(o).pipe(N(e=>(e.data.nombreCompleto=e.data.primerNombre+" "+e.data.segundoNombre+" "+e.data.primerApellido+" "+e.data.segundoApellido,e))).subscribe(e=>{let u=e.data,f={nombreCompleto:e.data.nombreCompleto,numDoc:e.data.numDoc,direccion:e.data.direccion,idMunicipio:e.data.nombreMunicipio,correo:e.data.correo};this.firstFormGroup.patchValue(f)})}onAceptarTerminos(r){this.aceptoTerminos=r,r?this.initialInfoForm.patchValue({check:!0}):this.initialInfoForm.patchValue({check:""})}onSave(){if(this.secondFormGroup.valid)if(this._matData.edit){let o=this.form.getRawValue(),{cupo:u}=o,f=K(o,["cupo"]),g=C({cupo:Number(u)},f);this.fuseService.open(C({},O)).afterClosed().subscribe(J=>{J==="confirmed"?this.solicitudService.putSolicitudes(g).subscribe(oe=>{this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:2}),console.log("Guardado"),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let r=this.secondFormGroup.getRawValue(),{cupo:u}=r,f=K(r,["cupo"]),g=C({cupo:Number(u)},f);this.fuseService.open(C({},O)).afterClosed().subscribe(J=>{J==="confirmed"?this.solicitudService.postSolicitudes(g).subscribe(oe=>{console.log(oe),console.log("Edicion"),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:2}),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],cupo:[""],observacion:[""]})}closeDialog(){this.dialogRef.close()}};s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=F({type:s,selectors:[["app-form-solicitudes"]],standalone:!0,features:[L([Le(Je)]),D],decls:74,vars:33,consts:[["stepper",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:mx-0","mx-auto"],[3,"linear"],["label","Terminos y condiciones",3,"stepControl","editable"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full","px-4"],[1,"max-w-lg",3,"formGroup"],[3,"aceptacionCambiada"],[1,"text-center"],["mat-raised-button","","matStepperNext","",1,"text-white","px-6","py-2","rounded-md","mt-4",3,"disabled","ngClass"],["label","Verifica tu informaci\xF3n",3,"stepControl","editable"],[3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex","flex-wrap","justify-center","gap-2.5"],["mat-raised-button","","matStepperPrevious","",1,"px-6","py-2","rounded-md"],["mat-raised-button","","matStepperNext","",1,"bg-crediblue-50","text-white","px-6","py-2","rounded-md",3,"disabled"],["label","Pasos a seguir",3,"editable"],[1,"max-w-lg","text-center",3,"formGroup"],[1,"text-2xl","font-bold","mb-4"],[1,"mb-6","text-left"],["label","Solicita tu cupo",3,"stepControl","editable"],["matInput","","thousandSeparator",".",3,"formControlName","mask"],[4,"ngIf"],["matInput","","placeholder","Observacion",3,"formControlName"],["mat-raised-button","",1,"text-white","px-6","py-2","rounded-md",3,"click","disabled","ngClass"]],template:function(o,e){if(o&1){let u=T();t(0,"div",1)(1,"mat-horizontal-stepper",2,0)(3,"mat-step",3)(4,"div",4)(5,"form",5)(6,"app-terminos-condiciones",6),v("aceptacionCambiada",function(g){return E(u),S(e.onAceptarTerminos(g))}),i(),t(7,"div",7)(8,"button",8),a(9," Siguiente "),i()()()()(),t(10,"mat-step",9)(11,"div",4)(12,"form",10)(13,"mat-form-field",11)(14,"mat-label"),a(15,"Nombre de completo"),i(),p(16,"input",12),i(),t(17,"mat-form-field",11)(18,"mat-label"),a(19,"Identificaci\xF3n"),i(),p(20,"input",12),i(),t(21,"mat-form-field",11)(22,"mat-label"),a(23,"Direcci\xF3n"),i(),p(24,"input",12),i(),t(25,"mat-form-field",11)(26,"mat-label"),a(27,"Email"),i(),p(28,"input",12),i(),t(29,"mat-form-field",11)(30,"mat-label"),a(31,"Ciudad"),i(),p(32,"input",12),i(),t(33,"div",13)(34,"button",14),a(35,"Anterior"),i(),t(36,"button",15),a(37,"Siguiente"),i()()()()(),t(38,"mat-step",16)(39,"div",4)(40,"form",17)(41,"h2",18),a(42,"Pasos a seguir"),i(),t(43,"p",19),a(44," 1. Al completar estos pasos nuestro equipo validar\xE1 la informaci\xF3n y aprobar\xE1 o rechazar\xE1 la solicitud, puedes ver el estado en cualquier momento. "),i(),t(45,"p",19),a(46," 2.	Si tu solicitud fue aprobada nuestro equipo se comunicar\xE1 contigo para socializarte el cupo aprobado y los detalles de tu cr\xE9dito. "),i(),t(47,"p",19),a(48," 3.	Si tu solicitud fue rechazada puedes comunicarte con nuestro equipo para obtener m\xE1s informaci\xF3n, podr\xE1s realizar una nueva solicitud dentro de XXX d\xEDas. "),i(),t(49,"button",15),a(50," Siguiente "),i()()()(),t(51,"mat-step",20)(52,"div",4)(53,"form",17)(54,"h2",18),a(55,"Solicita tu cupo"),i(),t(56,"p",19),a(57," Tu solicitud ser\xE1 revisada por nuestro equipo, en caso de ser aprobada, tu cr\xE9dito quedar\xE1 en estado "),t(58,"b"),a(59,"pendiente,"),i(),a(60," mientras validamos tu informaci\xF3n financiera. "),i(),t(61,"p",19),a(62," Te invitamos a revisar constantemente tus solicitudes y cr\xE9ditos para conocer el estado en que se encuentran. "),i(),t(63,"mat-form-field",11)(64,"mat-label"),a(65,"Digita el cupo que deseas solicitar"),i(),p(66,"input",21),b(67,Ye,2,0,"mat-error",22),i(),t(68,"mat-form-field",11)(69,"mat-label"),a(70,"Observaci\xF3nes"),i(),p(71,"textarea",23),i(),t(72,"button",24),v("click",function(){return E(u),S(e.onSave())}),a(73,"Finalizar"),i()()()()()()}o&2&&(c(),d("linear",!0),c(2),d("stepControl",e.initialInfoForm)("editable",!e.matDisabled),c(2),d("formGroup",e.initialInfoForm),c(3),d("disabled",!e.aceptoTerminos)("ngClass",ee(27,Be,e.aceptoTerminos,!e.aceptoTerminos)),c(2),d("stepControl",e.firstFormGroup)("editable",!e.matDisabled),c(2),d("formGroup",e.firstFormGroup),c(4),d("formControlName","nombreCompleto"),c(4),d("formControlName","numDoc"),c(4),d("formControlName","direccion"),c(4),d("formControlName","correo"),c(4),d("formControlName","idMunicipio"),c(4),d("disabled",e.firstFormGroup.invalid),c(2),d("editable",!e.matDisabled),c(2),d("formGroup",e.initialInfoForm),c(9),d("disabled",e.initialInfoForm.invalid),c(2),d("stepControl",e.secondFormGroup)("editable",!e.matDisabled),c(2),d("formGroup",e.secondFormGroup),c(13),d("formControlName","cupo")("mask","separator.0"),c(),d("ngIf",e.secondFormGroup.get("cupo").dirty||e.secondFormGroup.get("cupo").touched&&e.secondFormGroup.get("cupo").errors.required),c(4),d("formControlName","observacion"),c(),d("disabled",e.secondFormGroup.invalid)("ngClass",ee(30,Be,e.secondFormGroup.valid,e.secondFormGroup.invalid)))},dependencies:[R,V,B,Se,Re,_e,Fe,De,Ie,Ae,Te,ze,Me,Ge,Oe,Xe,pe,q,xe,je]});let n=s;return n})();var Ke=()=>["/pages/gestion-creditos/solicitudes"];function Qe(n,s){if(n&1){let l=T();_(0),t(1,"div",15)(2,"button",16),v("click",function(){E(l);let o=h(2);return S(o.onSave())}),a(3," Aprobar "),i(),t(4,"button",17),v("click",function(){E(l);let o=h(2);return S(o.onReject())}),a(5," Rechazar "),i()(),A()}}function et(n,s){if(n&1&&(t(0,"div",8)(1,"div",9)(2,"div")(3,"h3",10),a(4),i(),t(5,"p",11),a(6,"Identificaci\xF3n: "),t(7,"span",12),a(8),i()(),t(9,"p",11),a(10,"Empresa: "),t(11,"span",12),a(12),i()(),t(13,"p",13),a(14,"Cargo: "),t(15,"span",12),a(16),i()(),t(17,"p",11),a(18,"Correo: "),t(19,"span",12),a(20),i()(),t(21,"p",11),a(22,"Direcci\xF3n: "),t(23,"span",12),a(24),i()(),t(25,"p",11),a(26,"Tel\xE9fono: "),t(27,"span",12),a(28),i()()(),t(29,"div")(30,"p",11),a(31,"N\xFAmero de solicitud: #12345"),i(),t(32,"p",11),a(33,"Cupo solicitado: "),t(34,"span",12),a(35),te(36,"currency"),i()(),t(37,"p",11),a(38,"Fecha de Solicitud: "),t(39,"span",12),a(40),te(41,"date"),i()()()(),b(42,Qe,6,0,"ng-container",14),i()),n&2){let l=h();c(4),ne("",l.items.trabajador.primerNombre," ",l.items.trabajador.segundoNombre," ",l.items.trabajador.primerApellido," ",l.items.trabajador.segundoApellido," "),c(4),y(l.items.trabajador.numDoc),c(4),y(l.items.nombreSubEmpresa),c(4),y(l.items.trabajador.cargo),c(4),y(l.items.trabajador.correo),c(4),y(l.items.trabajador.direccion),c(4),y(l.items.trabajador.telefono),c(7),y(ue(36,13,l.items.cupo)),c(5),y(me(41,15,l.items.fechaCreacion,"dd/MM/yyyy")),c(2),d("ngIf",l.detalleEmpleado.idEstadoSolicitud==l.CodigosEstadosSolicitudes.PENDIENTE)}}var Y=(()=>{let s=class s{constructor(){this.empleadosServices=m($),this.solicitudService=m(w),this.toasService=m(W),this.fuseService=m(X),this.estadosDatosService=m(P),this.activatedRoute=m(be),this.router=m(j),this.CodigosEstadosSolicitudes=H}ngOnInit(){let r=this.activatedRoute.snapshot.paramMap.get("id");this.getSolicitud(r)}getSolicitud(r){this.subcription$=this.solicitudService.getSolicitud(r).subscribe(o=>{this.items=o.data,this.detalleEmpleado=o.data})}onSave(){let r={idEstado:H.APROBADA,id:this.detalleEmpleado.id};this.fuseService.open(C({},O)).afterClosed().subscribe(e=>{e==="confirmed"&&(this.subcription$=this.solicitudService.patchSolicitud(r).subscribe(u=>{u.isExitoso&&(this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/solicitudes"]),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:0}))},u=>{this.toasService.toasAlertWarn({message:"Ha ocurrido un error!!!!",actionMessage:"Cerrar",duration:3e3})}))})}onReject(){let r={idEstado:H.RECHAZADA,id:this.detalleEmpleado.id};this.fuseService.open(C({},Ne)).afterClosed().subscribe(e=>{e==="confirmed"&&(this.subcription$=this.solicitudService.patchSolicitud(r).subscribe(u=>{u.isExitoso&&(this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.router.navigate(["/pages/gestion-creditos/solicitudes"]),this.estadosDatosService.stateGridSolicitudes.next({state:!0,tab:1}))},u=>{this.toasService.toasAlertWarn({message:"Ha ocurrido un error!!!!",actionMessage:"Cerrar",duration:3e3})}))})}ngOnDestroy(){this.subcription$.unsubscribe()}};s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=F({type:s,selectors:[["app-form-approve"]],standalone:!0,features:[D],decls:10,vars:4,consts:[["cdkScrollable","",1,"absolute","inset-0","min-w-0","overflow-auto","print:overflow-visible"],[1,"inline-block","p-6","sm:p-10","print:p-0","w-full"],[1,"bg-card","shadow","print:bg-transparent","print:p-0","print:shadow-none","rounded-2xl","max-w-xl","mx-auto","overflow-hidden"],[1,"bg-crediblue-50","px-6","py-4","flex","items-center","justify-between"],["mat-button","",1,"flex","items-center",3,"routerLink"],[1,"text-white",3,"svgIcon"],[1,"text-xl","font-bold","text-white"],["class","p-6",4,"ngIf"],[1,"p-6"],[1,"mb-4","flex","justify-between"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-gray-600","font-bold"],[1,"text-gray-800"],[1,"text-gray-600","font-semibold"],[4,"ngIf"],[1,"flex","justify-between","items-center","mt-10"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"],["mat-flat-button","",1,"fuse-mat-button-large","bg-crediorange-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click"]],template:function(o,e){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),p(6,"mat-icon",5),i()(),t(7,"h2",6),a(8,"Detalle de Solicitud"),i()(),b(9,et,43,18,"div",7),i()()()),o&2&&(c(5),d("routerLink",de(3,Ke)),c(),d("svgIcon","heroicons_outline:arrow-long-left"),c(3),d("ngIf",e.items))},dependencies:[R,z,q,k,M,ye,U,ge]});let n=s;return n})();function tt(n,s){if(n&1&&(_(0),p(1,"app-custom-table",19),A()),n&2){let l=h(2);c(),d("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons)}}function it(n,s){if(n&1&&b(0,tt,2,5,"ng-container",18),n&2){let l=h();d("ngIf",l.data.length)}}function ot(n,s){if(n&1&&(_(0),p(1,"app-custom-table",19),A()),n&2){let l=h(2);c(),d("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons)}}function at(n,s){if(n&1&&b(0,ot,2,5,"ng-container",18),n&2){let l=h();d("ngIf",l.data.length)}}function rt(n,s){if(n&1&&(_(0),p(1,"app-custom-table",19),A()),n&2){let l=h(2);c(),d("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons)}}function nt(n,s){if(n&1&&b(0,rt,2,5,"ng-container",18),n&2){let l=h();d("ngIf",l.data.length)}}var $e=(()=>{let s=class s{constructor(r,o,e){this._matDialog=r,this.estadoDatosService=o,this.solicitudService=e,this.datePipe=m(M),this.currencyPipe=m(z),this.router=m(j),this.selectedTab=x.APROBADA,this.data=[],this.columns=["Fecha de solicitud","Empleado","Cupo solicitado","Empresa","Estado"],this.columnPropertyMap={"Fecha de solicitud":"fechaCreacion",Empleado:"nombreTrabajador","Cupo solicitado":"cupo",Empresa:"nombreSubEmpresa",Estado:"nombreEstadoSolicitud"},this.buttons=[{label:"View",icon:"visibility",action:u=>{console.log("Approve",u),this.selectedData=u,this.router.navigate(["pages/gestion-creditos/solicitudes/estados",this.selectedData.id])}}],this.tabChanged=u=>{console.log("tabChangeEvent => ",u),console.log("index => ",u.index),this.tabIndex=u.index,console.log(this.tabIndex),this.selectedTab=u.index==0?x.APROBADA:u.index==1?x.RECHAZADA:u.index==2?x.PENDIENTE:x.APROBADA,this.getSolicitudes(this.selectedTab)}}onNew(){this._matDialog.open(We,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onApprove(){this._matDialog.open(Y,{autoFocus:!1,data:{data:this.selectedData},maxHeight:"90vh",width:"50%",maxWidth:"100%"})}getSolicitudes(r){this.subcription$=this.solicitudService.getSolicitudes(r).pipe(N(o=>(o.data.forEach(e=>{e.estado?e.estado=ie.ACTIVO:e.estado=ie.INACTIVO}),o)),N(o=>(o.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy"),e.cupo=this.currencyPipe.transform(e.cupo,"USD","symbol","1.2-2")}),o))).subscribe(o=>{o?this.data=o.data:this.data=[]},o=>{this.data=[]})}listenGrid(){this.estadoDatosService.stateGridSolicitudes.asObservable().subscribe(o=>{o.state&&(console.log("Si entro"),console.log(o),this.selectedTab=o.tab==0?x.APROBADA:o.tab==1?x.RECHAZADA:o.tab==2?x.PENDIENTE:x.APROBADA,this.tabIndex=o.tab,console.log(this.tabIndex),this.getSolicitudes(this.selectedTab))})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getSolicitudes(this.selectedTab),this.listenGrid()}};s.\u0275fac=function(o){return new(o||s)(G(Ee),G(P),G(w))},s.\u0275cmp=F({type:s,selectors:[["app-grid-solicitudes"]],standalone:!0,features:[L([M,z]),D],decls:22,vars:8,consts:[["tabGroup",""],[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:overflow-y-auto","bg-gray-100"],["mat-stretch-tabs","false",1,"sm:px-2",3,"selectedIndexChange","selectedTabChange","animationDuration","selectedIndex"],["label","Aprobadas"],["matTabContent",""],["label","Rechazadas"],["label","Pendientes"],[4,"ngIf"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(o,e){if(o&1){let u=T();t(0,"div",1)(1,"div",2)(2,"div",3),a(3,"Solicitud de cr\xE9ditos"),i(),t(4,"div",4)(5,"mat-form-field",5),p(6,"mat-icon",6)(7,"input",7),i(),t(8,"button",8),v("click",function(){return E(u),S(e.onNew())}),p(9,"mat-icon",9),t(10,"span",10),a(11,"Crear solicitud"),i()()()(),t(12,"div",11)(13,"div",12)(14,"mat-tab-group",13,0),le("selectedIndexChange",function(g){return E(u),ce(e.tabIndex,g)||(e.tabIndex=g),S(g)}),v("selectedTabChange",function(g){return E(u),S(e.tabChanged(g))}),t(16,"mat-tab",14),b(17,it,1,1,"ng-template",15),i(),t(18,"mat-tab",16),b(19,at,1,1,"ng-template",15),i(),t(20,"mat-tab",17),b(21,nt,1,1,"ng-template",15),i()()()()()}o&2&&(c(5),d("subscriptSizing","dynamic"),c(),d("svgIcon","heroicons_solid:magnifying-glass"),c(),d("autocomplete","off")("placeholder","Buscar"),c(),d("color","primary"),c(),d("svgIcon","heroicons_outline:plus"),c(5),d("animationDuration","500"),se("selectedIndex",e.tabIndex))},dependencies:[we,R,V,U,B,Ve,Ue,ke,q]});let n=s;return n})();var Si=[{path:"",component:$e},{path:"estados/:id",component:Y}];export{Si as default};
