import{b as me}from"./chunk-PL6ORWQO.js";import{a as re,b as ae}from"./chunk-DI75G36X.js";import{a as se}from"./chunk-CH3XODOV.js";import"./chunk-ZFQVSUZG.js";import{A as ee,B as te,C as ie,G as ne,H as oe,b as U,c as j,e as q,i as G,j as L,l as J,n as g,p as K,q as W,u as X,w as Z,x as $}from"./chunk-JLNARVDU.js";import{ea as P,ga as D,ha as Q,ja as z,ka as O}from"./chunk-DARKUWJB.js";import{a as Y}from"./chunk-75YALSW6.js";import"./chunk-EENLYY7H.js";import{b as H}from"./chunk-SDLPE2YF.js";import"./chunk-PDEGUYSW.js";import{b as R,d as B}from"./chunk-DJAHQBBJ.js";import"./chunk-NP3GUERB.js";import{Cb as i,Db as t,Eb as l,Ib as M,Ob as y,Qb as E,Ub as A,Vb as k,Wb as N,Xb as I,Yb as s,Za as r,_a as u,_b as T,ec as V,ka as C,pb as f,rb as d,ua as x,va as w,wa as F,xa as b,yb as c}from"./chunk-32HXX3OB.js";import{a as _,b as S}from"./chunk-NEB6MB4Y.js";var ce=["signInNgForm"];function pe(e,o){if(e&1&&(i(0,"fuse-alert",8),s(1),t()),e&2){let h=E();d("appearance","outline")("showIcon",!1)("type",h.alert.type)("@shake",h.alert.type==="error"),r(),T(" ",h.alert.message," ")}}function ue(e,o){e&1&&(i(0,"mat-error"),s(1," El correo es requirido "),t())}function fe(e,o){e&1&&(i(0,"mat-error"),s(1," El correo es invalido! "),t())}function ge(e,o){e&1&&l(0,"mat-icon",14),e&2&&d("svgIcon","heroicons_solid:eye")}function he(e,o){e&1&&l(0,"mat-icon",14),e&2&&d("svgIcon","heroicons_solid:eye-slash")}function ve(e,o){e&1&&(i(0,"span"),s(1," Inciar sesi\xF3n "),t())}function xe(e,o){e&1&&l(0,"mat-progress-spinner",16),e&2&&d("diameter",24)("mode","indeterminate")}var le=(()=>{let o=class o{constructor(p,a,n,m){this._activatedRoute=p,this._authService=a,this._formBuilder=n,this._router=m,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({correo:["",[g.required,g.email]],contrasena:["",g.required]})}signIn(){if(this.signInForm.invalid)return;this.signInForm.disable(),this.showAlert=!1;let p=this.signInForm.getRawValue(),a=S(_({},p),{idTipoUsuario:"e626ea69-e995-4462-be9a-905326714782"});this._authService.signIn(a).subscribe(()=>{let n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},n=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"\xA1Error de Usuario o Contrase\xF1a!"},this.showAlert=!0})}};o.\u0275fac=function(a){return new(a||o)(u(R),u(H),u(ee),u(B))},o.\u0275cmp=C({type:o,selectors:[["auth-sign-in"]],viewQuery:function(a,n){if(a&1&&A(ce,5),a&2){let m;k(m=N())&&(n.signInNgForm=m.first)}},standalone:!0,features:[V],decls:45,vars:11,consts:[["signInNgForm","ngForm"],["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-4/5"],["src","images/logo/logo-azul.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","correo","matInput","",3,"formControlName"],["id","contrasena","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full","bg-crediblue-50","text-white","font-semibold","rounded-lg",3,"click","disabled"],[3,"diameter","mode"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"]],template:function(a,n){if(a&1){let m=M();i(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),l(4,"img",6),t(),i(5,"div",7),s(6," Inicio de sesi\xF3n "),t(),f(7,pe,2,5,"fuse-alert",8),i(8,"form",9,0)(10,"mat-form-field",10)(11,"mat-label"),s(12,"Usuario"),t(),l(13,"input",11),f(14,ue,2,0,"mat-error")(15,fe,2,0,"mat-error"),t(),i(16,"mat-form-field",10)(17,"mat-label"),s(18,"Contrase\xF1a"),t(),l(19,"input",12,1),i(21,"button",13),y("click",function(){x(m);let v=I(20);return w(v.type==="password"?v.type="text":v.type="password")}),f(22,ge,1,1,"mat-icon",14)(23,he,1,1,"mat-icon",14),t(),i(24,"mat-error"),s(25," Contrase\xF1a es invalida! "),t()(),i(26,"button",15),y("click",function(){return x(m),w(n.signIn())}),f(27,ve,2,0,"span")(28,xe,1,2,"mat-progress-spinner",16),t()()()(),i(29,"div",17),F(),i(30,"svg",18)(31,"g",19),l(32,"circle",20)(33,"circle",21),t()(),i(34,"svg",22)(35,"defs")(36,"pattern",23),l(37,"rect",24),t()(),l(38,"rect",25),t(),b(),i(39,"div",26)(40,"div",27)(41,"div"),s(42,"Bienvenido a CrediPlus"),t()(),i(43,"div",28),s(44," Plataforma para gestionar pr\xE9stamos a colaboradores de manera eficiente y segura. Inicia Sesi\xF3n y accede las opciones que tenemos para ti. "),t()()()()}if(a&2){let m=I(20);r(7),c(n.showAlert?7:-1),r(),d("formGroup",n.signInForm),r(5),d("formControlName","correo"),r(),c(n.signInForm.get("correo").hasError("required")?14:-1),r(),c(n.signInForm.get("correo").hasError("correo")?15:-1),r(4),d("formControlName","contrasena"),r(3),c(m.type==="password"?22:-1),r(),c(m.type==="text"?23:-1),r(3),d("disabled",n.signInForm.disabled),r(),c(n.signInForm.disabled?-1:27),r(),c(n.signInForm.disabled?28:-1)}},dependencies:[se,te,X,J,K,W,ie,Z,$,L,G,U,j,q,oe,ne,Q,P,D,O,z,me,ae,re],encapsulation:2,data:{animation:Y}});let e=o;return e})();var Le=[{path:"",component:le}];export{Le as default};
