import{b as a}from"./chunk-MFC34HHM.js";import{Mc as o,ba as r,ga as p}from"./chunk-YBEOGPR3.js";var h=(()=>{let e=class e{constructor(t,s){this._http=t,this.appSettings=s}getEmpleados(){return this._http.get(this.appSettings.empleados.url.base)}getEmpleadosSubempresas(t){return this._http.get(`${this.appSettings.empleados.url.base}/subEmpresa?IdSubEmpresa=${t}`)}getEmpleado(t){return this._http.get(`${this.appSettings.empleados.url.base}/${t}`)}postEmpleados(t){return delete t.id,this._http.post(this.appSettings.empleados.url.base,t)}putEmpleados(t){let s=t.id;return delete t.id,this._http.put(`${this.appSettings.empleados.url.base}/${s}`,t)}getEmpleadoParams(t){let{idTipoDoc:s,numDocumento:n}=t;return this._http.get(`${this.appSettings.empleados.url.base}/Consultar?idTdocumento=${s}&numDocumento=${n}`)}getValidaInfo(){return this._http.get(this.appSettings.empleados.url.baseValidate)}};e.\u0275fac=function(s){return new(s||e)(p(o),p(a))},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{h as a};
