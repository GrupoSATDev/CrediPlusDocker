import{a as f}from"./chunk-6IEWE3OU.js";import{a as P}from"./chunk-T5QDQ6JU.js";import{b as w}from"./chunk-T4MK3X37.js";import"./chunk-JGIPM7RV.js";import{F as I,i as E}from"./chunk-AZYYSVXK.js";import{ja as S}from"./chunk-JWHB23S2.js";import"./chunk-TAOXPEWO.js";import{a as M}from"./chunk-RNHPHDKV.js";import{d as x}from"./chunk-7GFVIFOO.js";import{j as u,r as C}from"./chunk-TI3VW26V.js";import{$ as h,Cb as m,Db as d,Eb as l,Yb as v,Za as s,dc as y,ea as c,ec as g,fa as a,ka as b,q as p,rb as n}from"./chunk-MZ7JCHPI.js";import"./chunk-NEB6MB4Y.js";var F=(()=>{let o=class o{constructor(t,e){this._http=t,this.appSettings=e}getCreditos(){return this._http.get(`${this.appSettings.creditos.url.base}/Abierto`)}};o.\u0275fac=function(e){return new(e||o)(c(C),c(M))},o.\u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();var j=(()=>{let o=class o{constructor(){this.datePipe=a(u),this.router=a(x),this.estadoDatosService=a(P),this.creditoService=a(F),this.data=[],this.columns=["Empleado","Cupo solicitado","Empresa","Estado","Fecha de solicitud"],this.columnPropertyMap={Empleado:"nombreTrabajador","Cupo solicitado":"cupoConsumido",Empresa:"nombreEmpresaMaestra",Estado:"nombreEstadoCredito","Fecha de solicitud":"fechaCreacion"},this.buttons=[{label:"View",icon:"visibility",action:t=>{console.log("Approve",t),this.selectedData=t}}]}getCreditos(){this.subcription$=this.creditoService.getCreditos().pipe(p(t=>(t.data.forEach(e=>{e.estado?e.estado=f.ACTIVO:e.estado=f.INACTIVO}),t)),p(t=>(t.data.forEach(e=>{e.fechaCreacion=this.datePipe.transform(e.fechaCreacion,"dd/MM/yyyy")}),t))).subscribe(t=>{this.data=t.data})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getCreditos()}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=b({type:o,selectors:[["app-grid-creditos"]],standalone:!0,features:[y([u]),g],decls:11,vars:9,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(e,r){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),v(3,"Cr\xE9ditos"),d(),m(4,"div",3)(5,"mat-form-field",4),l(6,"mat-icon",5)(7,"input",6),d()()(),m(8,"div",7)(9,"div",8),l(10,"app-custom-table",9),d()()()),e&2&&(s(5),n("subscriptSizing","dynamic"),s(),n("svgIcon","heroicons_solid:magnifying-glass"),s(),n("autocomplete","off")("placeholder","Buscar"),s(3),n("columns",r.columns)("displayedColumns",r.columns)("columnPropertyMap",r.columnPropertyMap)("data",r.data)("buttons",r.buttons))},dependencies:[w,E,S,I]});let i=o;return i})();var U=[{path:"",component:j}];export{U as default};
