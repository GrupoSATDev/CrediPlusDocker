import{b as n}from"./chunk-HGO6ZKVD.js";import{Mc as a,ba as r,ga as p}from"./chunk-YBEOGPR3.js";var l=(()=>{let i=class i{constructor(t,e){this._http=t,this.appSettings=e}getCapitales(){return this._http.get(this.appSettings.capitalInversion.url.base)}getCapital(t){return this._http.get(`${this.appSettings.capitalInversion.url.base}/${t}`)}postCapitales(t){return delete t.id,this._http.post(this.appSettings.capitalInversion.url.base,t)}putCapitales(t){let e=t.id;return this._http.put(`${this.appSettings.capitalInversion.url.base}/${e}`,t)}};i.\u0275fac=function(e){return new(e||i)(p(a),p(n))},i.\u0275prov=r({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{l as a};
