import{c as F}from"./chunk-SM2BZLVT.js";import"./chunk-L7XSEERQ.js";import{d as O,e as j}from"./chunk-DJAHQBBJ.js";import{k as I}from"./chunk-NP3GUERB.js";import{Cb as n,Db as o,Eb as b,K as f,Qb as S,V as x,W as h,X as g,Yb as r,Za as s,_a as u,_b as y,ec as A,f as d,fc as C,ka as v,mc as E,oc as k,pb as w,rb as _,y as p,yb as m}from"./chunk-32HXX3OB.js";import"./chunk-NEB6MB4Y.js";var M=()=>["/sign-in"];function D(t,e){if(t&1&&(r(0),E(1,"i18nPlural")),t&2){let l=S();y(" Redirigiendo en ",k(1,1,l.countdown,l.countdownMapping)," ")}}function P(t,e){t&1&&r(0," Ahora est\xE1s siendo redirigido! ")}var L=(()=>{let e=class e{constructor(a,i){this._authService=a,this._router=i,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new d}ngOnInit(){this._authService.signOut(),p(1e3,1e3).pipe(f(()=>{this._router.navigate(["sign-in"])}),h(()=>this.countdown>0),x(this._unsubscribeAll),g(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}};e.\u0275fac=function(i){return new(i||e)(u(F),u(O))},e.\u0275cmp=v({type:e,selectors:[["auth-sign-out"]],standalone:!0,features:[A],decls:15,vars:4,consts:[[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:justify-center"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"mx-auto","w-12"],["src","images/logo/loading.svg"],[1,"mt-8","text-center","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","flex","justify-center","font-medium"],[1,"text-secondary","mt-8","text-center","text-md","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(i,c){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),b(4,"img",4),o(),n(5,"div",5),r(6," Cerrando sesi\xF3n "),o(),n(7,"div",6),w(8,D,2,4)(9,P,1,0),o(),n(10,"div",7)(11,"span"),r(12,"Ir a"),o(),n(13,"a",8),r(14,"Login "),o()()()()()),i&2&&(s(8),m(c.countdown>0?8:-1),s(),m(c.countdown===0?9:-1),s(4),_("routerLink",C(3,M)))},dependencies:[j,I],encapsulation:2});let t=e;return t})();var G=[{path:"",component:L}];export{G as default};
