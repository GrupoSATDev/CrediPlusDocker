import{a}from"./chunk-PDEGUYSW.js";import{r as n}from"./chunk-NP3GUERB.js";import{$ as r,ea as p}from"./chunk-32HXX3OB.js";var l=(()=>{let i=class i{constructor(t,e){this._http=t,this.appSettings=e}getCapitales(){return this._http.get(this.appSettings.capitalInversion.url.base)}postCapitales(t){return delete t.id,this._http.post(this.appSettings.capitalInversion.url.base,t)}putCapitales(t){let e=t.id;return this._http.put(`${this.appSettings.capitalInversion.url.base}/${e}`,t)}};i.\u0275fac=function(e){return new(e||i)(p(n),p(a))},i.\u0275prov=r({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{l as a};