import{a as p}from"./chunk-IUELCRM3.js";import{$ as n,Ic as o,ea as s}from"./chunk-WDMQQ6H3.js";var u=(()=>{let t=class t{constructor(i,r){this._http=i,this.appSettings=r}getTipoCuentas(){return this._http.get(this.appSettings.tipoCuentas.url.base)}getTipoCuenta(i){return this._http.get(`${this.appSettings.tipoCuentas.url.base}/${i}`)}};t.\u0275fac=function(r){return new(r||t)(s(o),s(p))},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{u as a};