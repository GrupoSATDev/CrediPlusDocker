import{a}from"./chunk-KDIFW2XS.js";import{r as n}from"./chunk-CLM5DCBX.js";import{aa as p,fa as r}from"./chunk-RICNMTJI.js";var m=(()=>{let e=class e{constructor(t,s){this._http=t,this.appSettings=s}getEmpresas(){return this._http.get(this.appSettings.empresasMaestras.url.base)}postEmpresa(t){return delete t.id,this._http.post(this.appSettings.empresasMaestras.url.base,t)}putEmpresa(t){let s=t.id;return delete t.id,this._http.put(`${this.appSettings.empresasMaestras.url.base}/${s}`,t)}};e.\u0275fac=function(s){return new(s||e)(r(n),r(a))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{m as a};
