import{b as le}from"./chunk-H4SBMZNI.js";import{a as oe,b as re}from"./chunk-FRD6CQFX.js";import{a as ae}from"./chunk-UEIAJYGY.js";import"./chunk-ZFUJRZBK.js";import{D as $,E as ee,F as te,J as ie,K as ne,b as P,c as R,e as j,i as q,j as U,l as W,n as v,p as Y,q as J,u as K,x as X,y as Z}from"./chunk-XMPVE5LH.js";import{ea as L,ga as D,ha as G,ja as z,ka as Q}from"./chunk-AAD5V3QY.js";import{a as H}from"./chunk-HADAFI3S.js";import"./chunk-AUCKEBH6.js";import{b as O}from"./chunk-DTEGV2CS.js";import"./chunk-HGO6ZKVD.js";import{b as N,d as T}from"./chunk-FSJGACMT.js";import{Cb as w,Eb as M,Ib as E,Jb as A,Kb as k,Lb as y,Mb as l,Ob as V,Qa as r,Ra as u,Vb as B,gb as f,ib as c,ma as S,pb as p,tb as i,ub as t,vb as d,wa as g,xa as h,ya as b,za as C,zb as F}from"./chunk-YBEOGPR3.js";import"./chunk-NEB6MB4Y.js";var me=["signInNgForm"];function de(e,n){if(e&1&&(i(0,"fuse-alert",8),l(1),t()),e&2){let x=M();c("appearance","outline")("showIcon",!1)("type",x.alert.type)("@shake",x.alert.type==="error"),r(),V(" ",x.alert.message," ")}}function ce(e,n){e&1&&(i(0,"mat-error"),l(1," El correo es requirido "),t())}function pe(e,n){e&1&&(i(0,"mat-error"),l(1," El correo es invalido! "),t())}function ue(e,n){e&1&&d(0,"mat-icon",14),e&2&&c("svgIcon","heroicons_solid:eye")}function fe(e,n){e&1&&d(0,"mat-icon",14),e&2&&c("svgIcon","heroicons_solid:eye-slash")}function ge(e,n){e&1&&(i(0,"span"),l(1," Inciar sesi\xF3n "),t())}function he(e,n){e&1&&d(0,"mat-progress-spinner",16),e&2&&c("diameter",24)("mode","indeterminate")}var se=(()=>{let n=class n{constructor(s,a,o,m){this._activatedRoute=s,this._authService=a,this._formBuilder=o,this._router=m,this.showInstallButton=!1,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({correo:["",[v.required,v.email]],contrasena:["",v.required]}),window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),this.deferredPrompt=s,this.showInstallButton=!0})}installApp(){this.deferredPrompt&&(this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(s=>{s.outcome==="accepted"?console.log("PWA instalada"):console.log("Instalaci\xF3n rechazada"),this.deferredPrompt=null}))}signIn(){if(this.signInForm.invalid)return;this.signInForm.disable(),this.showAlert=!1;let s=this.signInForm.getRawValue();this._authService.signIn(s).subscribe(()=>{let a=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(a)},a=>{this.signInForm.enable(),this.alert={type:"error",message:"\xA1Error de Usuario o Contrase\xF1a!"},this.showAlert=!0})}};n.\u0275fac=function(a){return new(a||n)(u(N),u(O),u($),u(T))},n.\u0275cmp=S({type:n,selectors:[["auth-sign-in"]],viewQuery:function(a,o){if(a&1&&E(me,5),a&2){let m;A(m=k())&&(o.signInNgForm=m.first)}},standalone:!0,features:[B],decls:47,vars:11,consts:[["signInNgForm","ngForm"],["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-4/5"],["src","images/logo/logo-azul.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","correo","matInput","",3,"formControlName"],["id","contrasena","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full","bg-crediblue-50","text-white","font-semibold","rounded-lg",3,"click","disabled"],[3,"diameter","mode"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full","bg-crediorange-100","text-white","font-semibold","rounded-lg",3,"click"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"]],template:function(a,o){if(a&1){let m=F();i(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),d(4,"img",6),t(),i(5,"div",7),l(6," Inicio de sesi\xF3n "),t(),f(7,de,2,5,"fuse-alert",8),i(8,"form",9,0)(10,"mat-form-field",10)(11,"mat-label"),l(12,"Correo electronico"),t(),d(13,"input",11),f(14,ce,2,0,"mat-error")(15,pe,2,0,"mat-error"),t(),i(16,"mat-form-field",10)(17,"mat-label"),l(18,"Contrase\xF1a"),t(),d(19,"input",12,1),i(21,"button",13),w("click",function(){g(m);let I=y(20);return h(I.type==="password"?I.type="text":I.type="password")}),f(22,ue,1,1,"mat-icon",14)(23,fe,1,1,"mat-icon",14),t(),i(24,"mat-error"),l(25," Contrase\xF1a es invalida! "),t()(),i(26,"button",15),w("click",function(){return g(m),h(o.signIn())}),f(27,ge,2,0,"span")(28,he,1,2,"mat-progress-spinner",16),t()(),i(29,"button",17),w("click",function(){return g(m),h(o.installApp())}),l(30," Instalar App "),t()()(),i(31,"div",18),b(),i(32,"svg",19)(33,"g",20),d(34,"circle",21)(35,"circle",22),t()(),i(36,"svg",23)(37,"defs")(38,"pattern",24),d(39,"rect",25),t()(),d(40,"rect",26),t(),C(),i(41,"div",27)(42,"div",28)(43,"div"),l(44,"Bienvenido a CrediPlus"),t()(),i(45,"div",29),l(46," Plataforma para gestionar pr\xE9stamos a colaboradores de manera eficiente y segura. Inicia Sesi\xF3n y accede las opciones que tenemos para ti. "),t()()()()}if(a&2){let m=y(20);r(7),p(o.showAlert?7:-1),r(),c("formGroup",o.signInForm),r(5),c("formControlName","correo"),r(),p(o.signInForm.get("correo").hasError("required")?14:-1),r(),p(o.signInForm.get("correo").hasError("correo")?15:-1),r(4),c("formControlName","contrasena"),r(3),p(m.type==="password"?22:-1),r(),p(m.type==="text"?23:-1),r(3),c("disabled",o.signInForm.disabled),r(),p(o.signInForm.disabled?-1:27),r(),p(o.signInForm.disabled?28:-1)}},dependencies:[ae,ee,K,W,Y,J,te,X,Z,U,q,P,R,j,ne,ie,G,L,D,Q,z,le,re,oe],encapsulation:2,data:{animation:H}});let e=n;return e})();var je=[{path:"",component:se}];export{je as default};
