import{a as n}from"./chunk-KAOV7GZU.js";import{s as r}from"./chunk-SQ7M4XTP.js";import{aa as o,fa as p}from"./chunk-RICNMTJI.js";var h=(()=>{let e=class e{constructor(t,i){this._http=t,this.appSettings=i}getEmpleados(){return this._http.get(this.appSettings.empleados.url.base)}getEmpleado(t){return this._http.get(`${this.appSettings.empleados.url.base}/${t}`)}postEmpleados(t){return delete t.id,this._http.post(this.appSettings.empleados.url.base,t)}putEmpleados(t){let i=t.id;return delete t.id,this._http.put(`${this.appSettings.empleados.url.base}/${i}`,t)}getEmpleadoParams(t){let{idTipoDoc:i,numDocumento:a}=t;return this._http.get(`${this.appSettings.empleados.url.base}/Consultar?idTdocumento=${i}&numDocumento=${a}`)}getValidaInfo(){return this._http.get(this.appSettings.empleados.url.baseValidate)}};e.\u0275fac=function(i){return new(i||e)(p(r),p(n))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{h as a};
