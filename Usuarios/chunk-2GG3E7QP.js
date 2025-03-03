import{e as q}from"./chunk-SQFV6KDN.js";import{F as B,H as P,L as H}from"./chunk-XAHG6FXJ.js";import{Da as J,Ia as N,q as v,z as L}from"./chunk-YEU4SLVL.js";import{$a as U,Db as l,E as O,Eb as u,Fb as M,I as R,Pb as E,X as _,Zb as h,_ as k,_a as b,_b as A,ca as T,cc as F,g as C,h as I,ia as c,l as a,la as j,m as D,q as m,sb as S,z as g}from"./chunk-NQMNK77Y.js";import{a as y}from"./chunk-NEB6MB4Y.js";var W=(()=>{let t=class t{constructor(){this._httpClient=c(v),this._user=new I(1)}set user(e){this._user.next(e)}get user$(){return this._user.asObservable()}get(){return this._httpClient.get("api/common/user").pipe(k(e=>{this._user.next(e)}))}update(e){return this._httpClient.patch("api/common/user",{user:e}).pipe(m(i=>{this._user.next(i)}))}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var d=class{static isTokenExpired(t,r){if(!t||t==="")return!0;let e=this._getTokenExpirationDate(t);return r=r||0,e===null?!0:!(e.valueOf()>new Date().valueOf()+r*1e3)}static _b64decode(t){let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="";if(t=String(t).replace(/=+$/,""),t.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let i=0,n,o,p=0;o=t.charAt(p++);~o&&(n=i%4?n*64+o:o,i++%4)?e+=String.fromCharCode(255&n>>(-2*i&6)):0)o=r.indexOf(o);return e}static _b64DecodeUnicode(t){return decodeURIComponent(Array.prototype.map.call(this._b64decode(t),r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join(""))}static _urlBase64Decode(t){let r=t.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:{r+="==";break}case 3:{r+="=";break}default:throw Error("Illegal base64url string!")}return this._b64DecodeUnicode(r)}static _decodeToken(t){if(!t)return null;let r=t.split(".");if(r.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let e=this._urlBase64Decode(r[1]);if(!e)throw new Error("Cannot decode the token.");return JSON.parse(e)}static _getTokenExpirationDate(t){let r=this._decodeToken(t);if(r.iat=new Date(r.iat),r.iat=Math.floor(r.iat.getTime()/1e4),!r.hasOwnProperty("exp"))return null;let e=new Date(0);return e.setUTCSeconds(r.exp),e.setUTCSeconds(r.exp),e}static getTokenExpirationTime(t){if(!t)return null;try{let r=JSON.parse(atob(t.split(".")[1]));return r.exp?new Date(r.exp*1e3):null}catch(r){return console.error("Error decoding token:",r),null}}};var $=(()=>{let t=class t{constructor(e){this.dialogRef=e,this.countDown=30,g(1e3).pipe(R(30)).subscribe(i=>{this.countDown=29-i,this.countDown===0&&this.dialogRef.close(!1)})}onRenew(){this.dialogRef.close(!0)}onLogout(){this.dialogRef.close(!1)}};t.\u0275fac=function(i){return new(i||t)(U(B))},t.\u0275cmp=j({type:t,selectors:[["app-tokenrenewaldialog"]],standalone:!0,features:[F],decls:17,vars:3,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-flat-button","",1,"sm:w-auto","w-full","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color"],["mat-stroked-button","",1,"sm:w-auto","w-full","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"]],template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),M(3,"mat-icon",3),u(),l(4,"div",4)(5,"h2",5),h(6,"Tu sesi\xF3n est\xE1 por expirar"),u(),l(7,"p",6),h(8,"Tu sesi\xF3n expirar\xE1 en "),l(9,"strong"),h(10),u(),h(11," segundos."),u()()(),l(12,"div",7)(13,"button",8),E("click",function(){return n.onRenew()}),h(14," Extender "),u(),l(15,"button",9),E("click",function(){return n.onLogout()}),h(16," Cerrar sesi\xF3n "),u()()()),i&2&&(b(3),S("svgIcon","heroicons_solid:question-mark-circle"),b(7),A(n.countDown),b(3),S("color","primary"))},dependencies:[J,N]});let s=t;return s})();var ke=(()=>{let t=class t{constructor(){this._authenticated=!1,this._httpClient=c(v),this._userService=c(W),this._appSettings=c(H),this.aesEncriptService=c(q),this.matDialog=c(P),this.router=c(L),this._tokenExpirationSubject=new C(!1),this.restoreSession(),this.checkTokenExpiration()}restoreSession(){if(!this.accessToken||!this.accessRefreshToken){this.signOut();return}d.isTokenExpired(this.accessToken)?(console.log("Token expirado, intentando renovar..."),this.signInUsingToken().subscribe(e=>{e?(console.log("Token renovado exitosamente."),this._authenticated=!0):(console.log("No se pudo renovar el token, cerrando sesi\xF3n..."),this.signOut())})):(console.log("Token v\xE1lido, restaurando sesi\xF3n..."),this._authenticated=!0)}set accessToken(e){localStorage.setItem("accessToken",e)}set refreshToken(e){localStorage.setItem("refreshToken",e)}get accessToken(){return localStorage.getItem("accessToken")??""}get accessRefreshToken(){return localStorage.getItem("refreshToken")??""}forgotPassword(e){return this._httpClient.post("api/auth/forgot-password",e)}resetPassword(e){return this._httpClient.post("api/auth/reset-password",e)}signIn(e){let i={correo:e.correo,contrasena:e.contrasena,idTipoUsuario:e.idTipoUsuario},n={login:this.aesEncriptService.encryptObject(i)};return this._authenticated?D("User is already logged in."):this._httpClient.post(this._appSettings.auth.url.base,n).pipe(m(o=>{let p={id:Math.random().toString(),name:o.data.nombre,email:o.data.correo,avatar:"images/avatars/avatar-user.png",status:"online"};return o.tokenType="bearer",o.user=y({},p),delete o.data,o}),_(o=>(this.accessToken=o.accessToken,this.refreshToken=o.refreshToken,this._authenticated=!0,this._userService.user=o.user,a(o))))}signInUsingToken(){let e=this.accessToken,i=this.accessRefreshToken;return!e||!i?(this.signOut(),a(!1)):(console.log("Verificando token con API..."),this._httpClient.post(this._appSettings.auth.url.baseRefresh,{token:e,refreshToken:i}).pipe(O(n=>(this.signOut(),a(!1))),_(n=>n.token?(this.accessToken=n.token,this.refreshToken=n.refreshToken,this._authenticated=!0,a(!0)):(this.signOut(),a(!1)))))}checkTokenExpiration(){let e=!0,i=3e5,n=6e4,o=()=>{e=!1,setTimeout(()=>{e=!0},i)};["mousemove","keydown","scroll","click","touchstart"].forEach(f=>{window.addEventListener(f,o)}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?e=!0:o()}),window.addEventListener("blur",()=>{e=!0}),window.addEventListener("focus",o),g(1e4).pipe(k(()=>{let f=this.accessToken,z=this.accessRefreshToken;if(!f||!z){this.signOut();return}let x=d.getTokenExpirationTime(f)-Date.now();x>0&&x<=n?e||this.signInUsingToken().subscribe({next:w=>{w?console.log("Token renovado autom\xE1ticamente"):(console.error("Error renovando el token"),this.signOut())},error:w=>{console.error("Error renovando el token:",w),this.signOut()}}):x<=0&&(e?this.signOut():this.signOut())})).subscribe()}openTokenRenewalDialog(){this.matDialog.open($,{width:"400px",disableClose:!0}).afterClosed().subscribe(i=>{i?this.signInUsingToken().subscribe():(this.signOut(),this.router.navigate(["/sign-in"]))})}logoutSession(){return this._httpClient.post(this._appSettings.auth.url.baseOut,{})}signOut(){return localStorage.removeItem("accessToken"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),this._authenticated=!1,this._userService.user=null,this.router.navigate(["/sign-in"]),a(!0)}signUp(e){return this._httpClient.post(this._appSettings.authTrabajador.url.base,e)}unlockSession(e){return this._httpClient.post("api/auth/unlock-session",e)}check(){return this._authenticated?a(!0):this.accessToken?d.isTokenExpired(this.accessToken)?a(!1):a(!0):a(!1)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{d as a,W as b,ke as c};
