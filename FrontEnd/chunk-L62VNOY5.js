import{b as C,c as I}from"./chunk-IBPAYEIF.js";import{v as h}from"./chunk-5D6W3F3G.js";import{A as S,D as v,a as y,h as u,p as E,s as M}from"./chunk-SSGJEUMN.js";import{Z as f,ca as w}from"./chunk-HX54Y7AS.js";import"./chunk-LWAHI2AJ.js";import"./chunk-4MKAVAKB.js";import{Cb as i,Db as e,Eb as l,Ob as x,Yb as m,Za as a,_a as b,ac as c,ka as p,rb as r}from"./chunk-E724JXGB.js";import"./chunk-NEB6MB4Y.js";var g=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-form-capital-inversion"]],standalone:!0,features:[c],decls:24,vars:2,consts:[[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8"],[1,"w-full"],["matInput",""],["matInput","","placeholder","Detalle"],[1,"flex","flex-wrap","justify-between"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100",3,"color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50",3,"color"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),m(3," Nuevo capital inversor "),e(),i(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),m(7,"Nombre inversor"),e(),l(8,"input",5),e(),i(9,"mat-form-field",4)(10,"mat-label"),m(11,"Rubro inversor"),e(),l(12,"input",5),e(),i(13,"mat-form-field",4)(14,"mat-label"),m(15,"Detalle inveri\xF3n"),e(),l(16,"textarea",6),e(),i(17,"div",7)(18,"button",8)(19,"span"),m(20," Cancelar "),e()(),i(21,"button",9)(22,"span"),m(23," Guardar "),e()()()()()()),o&2&&(a(18),r("color","primary"),a(3),r("color","primary"))},dependencies:[f,u,v,y,S,M,E]});let s=t;return s})();var D=(()=>{let t=class t{constructor(d,o){this._matDialog=d,this.estadoDatosService=o,this.data=[],this.columns=["Nombre inversor","Rubro inversion"],this.columnPropertyMap={"Nombre inversor":"Nombreinversor","Rubro inversion":"Rubroinversion"},this.buttons=[{label:"Edit",icon:"edit",action:n=>{console.log("Editing",n),this.selectedData=n,this.onEdit()}}]}onNew(){this._matDialog.open(g,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(g,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}};t.\u0275fac=function(o){return new(o||t)(b(h),b(I))},t.\u0275cmp=p({type:t,selectors:[["app-grid-capital-inversion"]],standalone:!0,features:[c],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","fuse-mat-rounded","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Capital de inversi\xF3n"),e(),i(4,"div",3)(5,"mat-form-field",4),l(6,"mat-icon",5)(7,"input",6),e(),i(8,"button",7),x("click",function(){return n.onNew()}),l(9,"mat-icon",8),i(10,"span",9),m(11,"Nuevo capital"),e()()()(),i(12,"div",10)(13,"div",11),l(14,"app-custom-table",12),e()()()),o&2&&(a(5),r("subscriptSizing","dynamic"),a(),r("svgIcon","heroicons_solid:magnifying-glass"),a(),r("autocomplete","off")("placeholder","Buscar"),a(),r("color","primary"),a(),r("svgIcon","heroicons_outline:plus"),a(5),r("columns",n.columns)("displayedColumns",n.columns)("columnPropertyMap",n.columnPropertyMap)("data",n.data)("buttons",n.buttons))},dependencies:[C,f,u,w,v]});let s=t;return s})();var K=[{path:"",component:D}];export{K as default};
