import{a as n}from"./chunk-JLHRDN2O.js";import{r as o}from"./chunk-HL6COMRQ.js";import{$ as r,ea as p}from"./chunk-BVO2LY3R.js";var c=(()=>{let e=class e{constructor(t,i){this._http=t,this.appSettings=i}getEmpleados(){return this._http.get(this.appSettings.empleados.url.base)}getEmpleado(t){return this._http.get(`${this.appSettings.empleados.url.base}/${t}`)}postEmpleados(t){return delete t.id,this._http.post(this.appSettings.empleados.url.base,t)}putEmpleados(t){let i=t.id;return delete t.id,this._http.put(`${this.appSettings.empleados.url.base}/${i}`,t)}};e.\u0275fac=function(i){return new(i||e)(p(o),p(n))},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{c as a};