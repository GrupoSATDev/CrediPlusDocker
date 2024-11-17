import{a as d}from"./chunk-ZLDYCSTQ.js";import{s as c}from"./chunk-EFLKOK57.js";import{E as m,X as u,_ as f,ca as o,h as p,ia as a,l as s,m as l,q as n}from"./chunk-7AZRAXFU.js";import{a as h}from"./chunk-NEB6MB4Y.js";var g=(()=>{let r=class r{constructor(){this._httpClient=a(c),this._user=new p(1)}set user(t){this._user.next(t)}get user$(){return this._user.asObservable()}get(){return this._httpClient.get("api/common/user").pipe(f(t=>{this._user.next(t)}))}update(t){return this._httpClient.patch("api/common/user",{user:t}).pipe(n(e=>{this._user.next(e)}))}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var E=(()=>{let r=class r{constructor(){this._authenticated=!1,this._httpClient=a(c),this._userService=a(g),this._appSettings=a(d)}set accessToken(t){localStorage.setItem("accessToken",t)}get accessToken(){return localStorage.getItem("accessToken")??""}forgotPassword(t){return this._httpClient.post("api/auth/forgot-password",t)}resetPassword(t){return this._httpClient.post("api/auth/reset-password",t)}signIn(t){return this._authenticated?l("User is already logged in."):this._httpClient.post(this._appSettings.auth.url.base,t).pipe(n(e=>{let k={id:Math.random().toString(),name:e.data.nombre,email:e.data.correo,avatar:"images/avatars/avatar-user.png",status:"online"};return e.tokenType="bearer",e.user=h({},k),delete e.data,e}),u(e=>(console.log(e),this.accessToken=e.accessToken,this._authenticated=!0,this._userService.user=e.user,s(e))))}signInUsingToken(){return this._httpClient.post("api/auth/sign-in-with-token",{accessToken:this.accessToken}).pipe(m(()=>s(!1)),u(t=>(t.accessToken&&(this.accessToken=t.accessToken),this._authenticated=!0,this._userService.user=t.user,s(!0))))}signOut(){return localStorage.removeItem("accessToken"),this._authenticated=!1,s(!0)}signUp(t){return this._httpClient.post("api/auth/sign-up",t)}unlockSession(t){return this._httpClient.post("api/auth/unlock-session",t)}check(){return this._authenticated?s(!0):this.accessToken?s(!0):s(!1)}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{g as a,E as b};