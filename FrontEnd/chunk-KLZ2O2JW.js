import{a}from"./chunk-RNYZFOOK.js";import{Lc as n,ba as p,ga as r}from"./chunk-SBESXTFM.js";var c=(()=>{let e=class e{constructor(t,s){this._http=t,this.appSettings=s}getEmpresas(){return this._http.get(this.appSettings.empresasClientes.url.base)}getEmpresasClientes(){return this._http.get(this.appSettings.empresasClientes.url.baseTrabajador)}getEmpresasClientesSelect(){return this._http.get(`${this.appSettings.empresasClientes.url.base}/Select`)}postEmpresaCliente(t){return delete t.id,this._http.post(this.appSettings.empresasClientes.url.base,t)}putEmpresaCliente(t){let s=t.id;return delete t.id,this._http.put(`${this.appSettings.empresasClientes.url.base}/${s}`,t)}};e.\u0275fac=function(s){return new(s||e)(r(n),r(a))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{c as a};
