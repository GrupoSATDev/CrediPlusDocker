import{a as o}from"./chunk-IUELCRM3.js";import{$ as s,Ic as n,ea as p}from"./chunk-WDMQQ6H3.js";var u=(()=>{let e=class e{constructor(t,i){this._http=t,this.appSettingService=i}getDepartamentos(){return this._http.get(this.appSettingService.departamentos.url.base)}getMunicipio(t){return this._http.get(`${this.appSettingService.municipios.url.base}/${t}`)}postDepartamento(t){return delete t.id,this._http.post(this.appSettingService.departamentos.url.base,t)}putDepartamento(t){let i=t.id;return delete t.id,this._http.put(`${this.appSettingService.departamentos.url.base}/${i}`,t)}};e.\u0275fac=function(i){return new(i||e)(p(n),p(o))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{u as a};
