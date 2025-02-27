import{e as L}from"./chunk-KAEQCOKJ.js";import{d as A}from"./chunk-C66ODKJP.js";import{a as $,c as B}from"./chunk-YKJB7XET.js";import{b as P}from"./chunk-FBBBUL3D.js";import{Ba as j,E as D,Ec as T,Fb as p,Gb as M,I,Ka as b,La as U,Pb as F,W as w,Z as g,aa as k,bb as v,fe as J,g as y,ga as c,h as E,ka as R,ke as N,l as a,m as C,mb as l,nb as u,ob as O,q as f,vb as _,z as m}from"./chunk-ODJKW74N.js";import{a as S}from"./chunk-NEB6MB4Y.js";var h=class{static isTokenExpired(t,r){if(!t||t==="")return!0;let e=this._getTokenExpirationDate(t);return r=r||0,e===null?!0:!(e.valueOf()>new Date().valueOf()+r*1e3)}static _b64decode(t){let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="";if(t=String(t).replace(/=+$/,""),t.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let o=0,n,s,x=0;s=t.charAt(x++);~s&&(n=o%4?n*64+s:s,o++%4)?e+=String.fromCharCode(255&n>>(-2*o&6)):0)s=r.indexOf(s);return e}static _b64DecodeUnicode(t){return decodeURIComponent(Array.prototype.map.call(this._b64decode(t),r=>"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)).join(""))}static _urlBase64Decode(t){let r=t.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:{r+="==";break}case 3:{r+="=";break}default:throw Error("Illegal base64url string!")}return this._b64DecodeUnicode(r)}static _decodeToken(t){if(!t)return null;let r=t.split(".");if(r.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let e=this._urlBase64Decode(r[1]);if(!e)throw new Error("Cannot decode the token.");return JSON.parse(e)}static _getTokenExpirationDate(t){let r=this._decodeToken(t);if(r.iat=new Date(r.iat),r.iat=Math.floor(r.iat.getTime()/1e4),!r.hasOwnProperty("exp"))return null;let e=new Date(0);return e.setUTCSeconds(r.exp),e.setUTCSeconds(r.exp),e}static getTokenExpirationTime(t){if(!t)return null;try{let r=JSON.parse(atob(t.split(".")[1]));return r.exp?new Date(r.exp*1e3):null}catch(r){return console.error("Error decoding token:",r),null}}};var q=(()=>{let t=class t{constructor(){this._httpClient=c(T),this._user=new E(1)}set user(e){this._user.next(e)}get user$(){return this._user.asObservable()}get(){return this._httpClient.get("api/common/user").pipe(g(e=>{this._user.next(e)}))}update(e){return this._httpClient.patch("api/common/user",{user:e}).pipe(f(o=>{this._user.next(o)}))}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var d=class extends Error{};d.prototype.name="InvalidTokenError";function z(i){return decodeURIComponent(atob(i).replace(/(.)/g,(t,r)=>{let e=r.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function G(i){let t=i.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return z(t)}catch{return atob(t)}}function V(i,t){if(typeof i!="string")throw new d("Invalid token specified: must be a string");t||(t={});let r=t.header===!0?0:1,e=i.split(".")[r];if(typeof e!="string")throw new d(`Invalid token specified: missing part #${r+1}`);let o;try{o=G(e)}catch(n){throw new d(`Invalid token specified: invalid base64 for part #${r+1} (${n.message})`)}try{return JSON.parse(o)}catch(n){throw new d(`Invalid token specified: invalid json for part #${r+1} (${n.message})`)}}var W=(()=>{let t=class t{constructor(e){this.dialogRef=e,this.countDown=30,m(1e3).pipe(I(30)).subscribe(o=>{this.countDown=29-o,this.countDown===0&&this.dialogRef.close(!1)})}onRenew(){this.dialogRef.close(!0)}onLogout(){this.dialogRef.close(!1)}};t.\u0275fac=function(o){return new(o||t)(U($))},t.\u0275cmp=R({type:t,selectors:[["app-tokenrenewaldialog"]],standalone:!0,features:[F],decls:17,vars:3,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"flex","flex-auto","flex-col","items-center","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4","bg-blue-100","text-blue-600","dark:bg-blue-600","dark:text-blue-50"],[3,"svgIcon"],[1,"flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"text-xl","font-medium","leading-6"],[1,"text-secondary"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-flat-button","",1,"sm:w-auto","w-full","bg-crediblue-50","hover:bg-crediblue-100","text-white","font-semibold","py-2","px-4","rounded-lg","transition","duration-200",3,"click","color"],["mat-stroked-button","",1,"sm:w-auto","w-full","bg-crediorange-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click"]],template:function(o,n){o&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),O(3,"mat-icon",3),u(),l(4,"div",4)(5,"h2",5),p(6,"Tu sesi\xF3n est\xE1 por expirar"),u(),l(7,"p",6),p(8,"Tu sesi\xF3n expirar\xE1 en "),l(9,"strong"),p(10),u(),p(11," segundos."),u()()(),l(12,"div",7)(13,"button",8),_("click",function(){return n.onRenew()}),p(14," Extender "),u(),l(15,"button",9),_("click",function(){return n.onLogout()}),p(16," Cerrar sesi\xF3n "),u()()()),o&2&&(b(3),v("svgIcon","heroicons_solid:question-mark-circle"),b(7),M(n.countDown),b(3),v("color","primary"))},dependencies:[J,N]});let i=t;return i})();var Te=(()=>{let t=class t{constructor(){this._authenticated=!1,this._httpClient=c(T),this._userService=c(q),this._appSettings=c(P),this.aesEncriptService=c(L),this.destroyedRef=c(j),this.matDialog=c(B),this.router=c(A),this._tokenExpirationSubject=new y(!1),this.restoreSession(),this.checkTokenExpiration()}restoreSession(){if(!this.accessToken||!this.accessRefreshToken){this.signOut();return}h.isTokenExpired(this.accessToken)?(console.log("Token expirado, intentando renovar..."),this.signInUsingToken().subscribe(e=>{e?(console.log("Token renovado exitosamente."),this._authenticated=!0):(console.log("No se pudo renovar el token, cerrando sesi\xF3n..."),this.signOut())})):(console.log("Token v\xE1lido, restaurando sesi\xF3n..."),this._authenticated=!0)}set accessToken(e){localStorage.setItem("accessToken",e)}set refreshToken(e){localStorage.setItem("refreshToken",e)}get accessToken(){return localStorage.getItem("accessToken")??""}get accessRefreshToken(){return localStorage.getItem("refreshToken")??""}forgotPassword(e){return this._httpClient.post("api/auth/forgot-password",e)}resetPassword(e){return this._httpClient.post("api/auth/reset-password",e)}signIn(e){let o={correo:e.correo,contrasena:e.contrasena},n={login:this.aesEncriptService.encryptObject(o)};return this._authenticated?C("User is already logged in."):this._httpClient.post(this._appSettings.auth.url.base,n).pipe(f(s=>{let x={id:Math.random().toString(),name:s.data.nombre,email:s.data.correo,avatar:"images/avatars/avatar-user.png",status:"online"};return s.tokenType="bearer",s.user=S({},x),delete s.data,s}),w(s=>(this.accessToken=s.accessToken,this.refreshToken=s.refreshToken,this._authenticated=!0,this._userService.user=s.user,a(s))))}signInUsingToken(){let e=this.accessToken,o=this.accessRefreshToken;return!e||!o?(this.signOut(),a(!1)):(console.log("Verificando token con API..."),this._httpClient.post(this._appSettings.auth.url.baseRefresh,{token:e,refreshToken:o}).pipe(D(n=>(this.signOut(),a(!1))),w(n=>n.token?(this.accessToken=n.token,this.refreshToken=n.refreshToken,this._authenticated=!0,a(!0)):(this.signOut(),a(!1)))))}checkTokenExpiration(){m(1e4).pipe(g(()=>{let e=this.accessToken;if(e){let n=h.getTokenExpirationTime(e)-Date.now();n>0&&n<=6e4&&(this._tokenExpirationSubject.value||(this._tokenExpirationSubject.next(!0),this.openTokenRenewalDialog())),n<=0&&(this._tokenExpirationSubject.value||(this._tokenExpirationSubject.next(!0),this.openTokenRenewalDialog()))}})).subscribe()}openTokenRenewalDialog(){this.matDialog.open(W,{width:"400px",disableClose:!0}).afterClosed().subscribe(o=>{o?this.signInUsingToken().subscribe():(this.signOut(),this.router.navigate(["/sign-in"]))})}logoutSession(){return this._httpClient.post(this._appSettings.auth.url.baseOut,{})}signOut(){return console.log("Cerrando sesi\xF3n..."),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),this._authenticated=!1,this._userService.user=null,this.router.navigate(["/sign-in"]),a(!0)}signUp(e){return this._httpClient.post("api/auth/sign-up",e)}unlockSession(e){return this._httpClient.post("api/auth/unlock-session",e)}check(){return this._authenticated?a(!0):this.accessToken?h.isTokenExpired(this.accessToken)?a(!1):this.signInUsingToken():a(!1)}decodeToken(){if(!this.accessToken)return null;try{return V(this.accessToken)}catch(e){return console.error("Error al decodificar el token",e),null}}getRole(){return this.decodeToken()?.["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]||null}getTipoUsuario(){return this.decodeToken()?.TipoUsuario||null}hasRole(e){return this.getRole()===e}hasTipoUsuario(e){return this.getTipoUsuario()===e}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{h as a,q as b,Te as c};
