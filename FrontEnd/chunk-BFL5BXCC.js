import{a as y}from"./chunk-OUAYGTQY.js";import{a as l}from"./chunk-6IEWE3OU.js";import{a as b}from"./chunk-HKOJEADL.js";import"./chunk-YRFWKKCQ.js";import"./chunk-ZVTEZKTX.js";import"./chunk-D266PZ43.js";import{G as x,i as v}from"./chunk-BFUN2CON.js";import{ja as h}from"./chunk-PKP5UGVL.js";import"./chunk-NSFGWBZH.js";import"./chunk-X4MAXHGU.js";import"./chunk-D7SIZTGA.js";import{$b as u,Fb as n,Gb as r,Hb as p,ab as i,bb as f,ic as g,la as c,q as d,ub as s}from"./chunk-KIIQGHZ6.js";import"./chunk-NEB6MB4Y.js";var w=(()=>{let o=class o{constructor(e){this.tiposPagos=e,this.data=[],this.columns=["Estado","Tipos de pagos"],this.columnPropertyMap={Estado:"estado","Tipos de pagos":"nombre"}}getTiposPagos(){this.subcription$=this.tiposPagos.getTiposPagos().pipe(d(e=>(e.data.forEach(t=>{t.estado?t.estado=l.ACTIVO:t.estado=l.INACTIVO}),e))).subscribe(e=>{this.data=e.data})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTiposPagos()}};o.\u0275fac=function(t){return new(t||o)(f(y))},o.\u0275cmp=c({type:o,selectors:[["app-grid-tipos-pagos"]],standalone:!0,features:[g],decls:11,vars:8,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","w-full","shrink-0","flex-col","sm:ml-4","sm:mt-0","sm:flex-row","sm:space-x-2","sm:w-auto"],[1,"fuse-mat-dense","rounded-lg","w-full","sm:w-auto","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(t,a){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),u(3,"Tipos de Pagos"),r(),n(4,"div",3)(5,"mat-form-field",4),p(6,"mat-icon",5)(7,"input",6),r()()(),n(8,"div",7)(9,"div",8),p(10,"app-custom-table",9),r()()()),t&2&&(i(5),s("subscriptSizing","dynamic"),i(),s("svgIcon","heroicons_solid:magnifying-glass"),i(),s("autocomplete","off")("placeholder","Buscar"),i(3),s("columns",a.columns)("displayedColumns",a.columns)("columnPropertyMap",a.columnPropertyMap)("data",a.data))},dependencies:[b,v,h,x]});let m=o;return m})();var z=[{path:"",component:w}];export{z as default};