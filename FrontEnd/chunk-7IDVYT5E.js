import{a as p}from"./chunk-IUELCRM3.js";import{$ as s,Ic as n,ea as o}from"./chunk-WDMQQ6H3.js";var l=(()=>{let a=class a{constructor(t,r){this._http=t,this.appSettings=r}getCobros(){return this._http.get(this.appSettings.cobroTrabajadores.url.base)}getCobroEmpleado(t){return this._http.get(`${this.appSettings.cobroTrabajadores.url.base}/${t}`)}getCobrosGrid(t){return this._http.get(`${this.appSettings.cobroTrabajadores.url.baseTabla}/${t}`)}getCobroTrabajadores(t){let{fechaFinallData:r,idSubEmpresa:i}=t;return this._http.get(`${this.appSettings.cobroTrabajadores.url.baseTrabajador}?fechaFinal=${r}&IdSubEmpresa=${i}`)}getCobroTrabajador(t){let{fechaFinallData:r,idSubEmpresa:i,idTrabajador:b}=t;return this._http.get(`${this.appSettings.cobroTrabajadores.url.baseTrabajadorIndividual}?fechaFinal=${r}&IdSubEmpresa=${i}&Idtrabajador=${b}`)}};a.\u0275fac=function(r){return new(r||a)(o(n),o(p))},a.\u0275prov=s({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();export{l as a};
