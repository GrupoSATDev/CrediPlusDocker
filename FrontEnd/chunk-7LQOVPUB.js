import{a as h}from"./chunk-L74MGLUL.js";import{a as n}from"./chunk-6IEWE3OU.js";import{a as b}from"./chunk-3R6HD5RM.js";import"./chunk-CJO6YW5P.js";import"./chunk-7YBFULQ5.js";import"./chunk-4PVPKBBG.js";import"./chunk-FUOI65R5.js";import"./chunk-FBBBUL3D.js";import{Fb as u,Ka as d,La as l,Pb as g,bb as f,ka as m,mb as a,nb as r,ob as c,q as p}from"./chunk-ODJKW74N.js";import"./chunk-NEB6MB4Y.js";var v=(()=>{let e=class e{constructor(t){this.tiposPagos=t,this.data=[],this.columns=["Estado","Tipos de pagos"],this.columnPropertyMap={Estado:"estado","Tipos de pagos":"nombre"}}getTiposPagos(){this.subcription$=this.tiposPagos.getTiposPagos().pipe(p(t=>(t.data.forEach(o=>{o.estado?o.estado=n.ACTIVO:o.estado=n.INACTIVO}),t))).subscribe(t=>{this.data=t.data})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getTiposPagos()}};e.\u0275fac=function(o){return new(o||e)(l(h))},e.\u0275cmp=m({type:e,selectors:[["app-grid-tipos-pagos"]],standalone:!0,features:[g],decls:7,vars:4,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),u(3,"Tipos de Pagos"),r()(),a(4,"div",3)(5,"div",4),c(6,"app-custom-table",5),r()()()),o&2&&(d(6),f("columns",i.columns)("displayedColumns",i.columns)("columnPropertyMap",i.columnPropertyMap)("data",i.data))},dependencies:[b]});let s=e;return s})();var I=[{path:"",component:v}];export{I as default};
