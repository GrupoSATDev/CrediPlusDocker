import{b as ce}from"./chunk-RUXS4FGL.js";import{a as se,b as me}from"./chunk-PJZ7DH6Y.js";import{a as de}from"./chunk-FJXBOPPW.js";import{A as ne,B as oe,C as re,F as ae,G as le,a as U,b as q,d as D,h as G,i as z,l as X,n as w,p as Z,q as $,u as ee,w as te,x as ie}from"./chunk-72YUQRCJ.js";import{$ as O,Z as Q,aa as H,ca as W,da as Y}from"./chunk-E54QLSYT.js";import{p as K}from"./chunk-7HDWK74Y.js";import{b as J}from"./chunk-LWHCCTMV.js";import"./chunk-C2VUAL6V.js";import{w as P,y as j,z as L}from"./chunk-6D7RVOMY.js";import{Cb as i,Db as t,Eb as c,Ib as M,Ob as v,Qb as A,Ub as k,Vb as T,Wb as V,Xb as I,Yb as r,Za as o,_a as p,_b as N,bc as R,cc as B,ka as C,pb as f,rb as d,ua as g,va as h,wa as F,xa as E,yb as u}from"./chunk-T2GNEYCX.js";import{a as S,b}from"./chunk-NEB6MB4Y.js";var pe=["signInNgForm"],fe=()=>["/sign-up"];function ge(e,a){if(e&1&&(i(0,"fuse-alert",8),r(1),t()),e&2){let x=A();d("appearance","outline")("showIcon",!1)("type",x.alert.type)("@shake",x.alert.type==="error"),o(),N(" ",x.alert.message," ")}}function he(e,a){e&1&&(i(0,"mat-error"),r(1," El correo es requirido "),t())}function ve(e,a){e&1&&(i(0,"mat-error"),r(1," El correo es invalido! "),t())}function we(e,a){e&1&&c(0,"mat-icon",14),e&2&&d("svgIcon","heroicons_solid:eye")}function xe(e,a){e&1&&c(0,"mat-icon",14),e&2&&d("svgIcon","heroicons_solid:eye-slash")}function ye(e,a){e&1&&(i(0,"span"),r(1," Inciar sesi\xF3n "),t())}function Ie(e,a){e&1&&c(0,"mat-progress-spinner",16),e&2&&d("diameter",24)("mode","indeterminate")}var ue=(()=>{let a=class a{constructor(l,s,n,m){this._activatedRoute=l,this._authService=s,this._formBuilder=n,this._router=m,this.showInstallButton=!1,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({correo:["",[w.required,w.email]],contrasena:["",w.required]}),window.addEventListener("beforeinstallprompt",l=>{console.log(l),l.preventDefault(),this.deferredPrompt=l,this.showInstallButton=!0})}signIn(){if(this.signInForm.invalid)return;this.signInForm.disable(),this.showAlert=!1;let l=this.signInForm.getRawValue(),s=b(S({},l),{idTipoUsuario:"e626ea69-e995-4462-be9a-905326714781"});this._authService.signIn(s).subscribe(()=>{let n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},n=>{this.signInForm.enable(),this.alert={type:"error",message:"\xA1Error de Usuario o Contrase\xF1a!"},this.showAlert=!0})}installApp(){console.log("Clickic"),this.deferredPrompt&&(this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(l=>{l.outcome==="accepted"?console.log("PWA instalada"):console.log("Instalaci\xF3n rechazada"),this.deferredPrompt=null}))}};a.\u0275fac=function(s){return new(s||a)(p(P),p(J),p(ne),p(j))},a.\u0275cmp=C({type:a,selectors:[["auth-sign-in"]],viewQuery:function(s,n){if(s&1&&k(pe,5),s&2){let m;T(m=V())&&(n.signInNgForm=m.first)}},standalone:!0,features:[R],decls:52,vars:13,consts:[["signInNgForm","ngForm"],["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-4/5"],["src","images/logo/logo-azul.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],["floatLabel","always",1,"w-full"],["id","correo","matInput","","placeholder","Usuario",3,"formControlName"],["id","contrasena","matInput","","type","password","placeholder","Contrase\xF1a",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full","bg-crediblue-50","text-white","font-semibold","rounded-lg",3,"click","disabled"],[3,"diameter","mode"],[1,"mt-2","flex","flex-col","font-medium"],[1,"text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full","bg-crediorange-100","text-white","font-semibold","rounded-lg",3,"click"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"]],template:function(s,n){if(s&1){let m=M();i(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),c(4,"img",6),t(),i(5,"div",7),r(6," Inicio de sesi\xF3n "),t(),f(7,ge,2,5,"fuse-alert",8),i(8,"form",9,0)(10,"mat-form-field",10)(11,"mat-label"),r(12,"Correo electronico"),t(),c(13,"input",11),f(14,he,2,0,"mat-error")(15,ve,2,0,"mat-error"),t(),i(16,"mat-form-field",10)(17,"mat-label"),r(18,"Contrase\xF1a"),t(),c(19,"input",12,1),i(21,"button",13),v("click",function(){g(m);let y=I(20);return h(y.type==="password"?y.type="text":y.type="password")}),f(22,we,1,1,"mat-icon",14)(23,xe,1,1,"mat-icon",14),t(),i(24,"mat-error"),r(25," Contrase\xF1a es invalida! "),t()(),i(26,"button",15),v("click",function(){return g(m),h(n.signIn())}),f(27,ye,2,0,"span")(28,Ie,1,2,"mat-progress-spinner",16),t(),i(29,"div",17)(30,"div"),r(31,"Si no tienes una cuentas por favor"),t(),i(32,"a",18),r(33,"Registrate aqu\xED "),t()()(),i(34,"button",19),v("click",function(){return g(m),h(n.installApp())}),r(35," Instalar App "),t()()(),i(36,"div",20),F(),i(37,"svg",21)(38,"g",22),c(39,"circle",23)(40,"circle",24),t()(),i(41,"svg",25)(42,"defs")(43,"pattern",26),c(44,"rect",27),t()(),c(45,"rect",28),t(),E(),i(46,"div",29)(47,"div",30)(48,"div"),r(49,"CrediPlus - Trabajador"),t()(),i(50,"div",31),r(51," Plataforma para gestionar pr\xE9stamos a colaboradores de manera eficiente y segura. Inicia Sesi\xF3n y accede las opciones que tenemos para ti. "),t()()()()}if(s&2){let m=I(20);o(7),u(n.showAlert?7:-1),o(),d("formGroup",n.signInForm),o(5),d("formControlName","correo"),o(),u(n.signInForm.get("correo").hasError("required")?14:-1),o(),u(n.signInForm.get("correo").hasError("correo")?15:-1),o(4),d("formControlName","contrasena"),o(3),u(m.type==="password"?22:-1),o(),u(m.type==="text"?23:-1),o(3),d("disabled",n.signInForm.disabled),o(),u(n.signInForm.disabled?-1:27),o(),u(n.signInForm.disabled?28:-1),o(4),d("routerLink",B(12,fe))}},dependencies:[L,de,oe,ee,X,Z,$,re,te,ie,z,G,U,q,D,le,ae,H,Q,O,Y,W,ce,me,se],encapsulation:2,data:{animation:K}});let e=a;return e})();var Qe=[{path:"",component:ue}];export{Qe as default};
