import{a as x}from"./chunk-HQNBHNHK.js";import{a as d}from"./chunk-6IEWE3OU.js";import{a as y}from"./chunk-QE3E4OX7.js";import"./chunk-QYSIOB6Y.js";import"./chunk-ISHIQJYM.js";import"./chunk-4CCKGQO6.js";import{G as b,i as v}from"./chunk-7YVLRDAA.js";import{ja as h}from"./chunk-T34F2ICN.js";import"./chunk-XMIUBE2U.js";import"./chunk-XHZ6JD3E.js";import"./chunk-YH7HM3TK.js";import{Cb as n,Db as r,Eb as p,Yb as u,Za as i,_a as f,ec as g,ka as c,q as l,rb as s}from"./chunk-32HXX3OB.js";import"./chunk-NEB6MB4Y.js";var P=(()=>{let o=class o{constructor(e){this.tiposPagos=e,this.data=[],this.columns=["Estado","Tipos de pagos"],this.columnPropertyMap={Estado:"estado","Tipos de pagos":"nombre"}}getTiposPagos(){this.subcription$=this.tiposPagos.getTiposPagos().pipe(l(e=>(e.data.forEach(t=>{t.estado?t.estado=d.ACTIVO:t.estado=d.INACTIVO}),e))).subscribe(e=>{this.data=e.data})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTiposPagos()}};o.\u0275fac=function(t){return new(t||o)(f(x))},o.\u0275cmp=c({type:o,selectors:[["app-grid-tipos-pagos"]],standalone:!0,features:[g],decls:11,vars:8,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,a){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),u(3,"Tipos de Pagos"),r(),n(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),r()()(),n(8,"div",7)(9,"div",8),p(10,"app-custom-table",9),r()()()),t&2&&(i(5),s("subscriptSizing","dynamic"),i(),s("svgIcon","heroicons_solid:magnifying-glass"),i(),s("autocomplete","off")("placeholder","Buscar"),i(3),s("columns",a.columns)("displayedColumns",a.columns)("columnPropertyMap",a.columnPropertyMap)("data",a.data))},dependencies:[y,v,h,b]});let m=o;return m})();var z=[{path:"",component:P}];export{z as default};
