import{b as n}from"./chunk-HGO6ZKVD.js";import{Mc as r,ba as p,ga as o}from"./chunk-YBEOGPR3.js";var a=(()=>{let i=class i{constructor(t,e){this._http=t,this.appSettings=e}getTiposDocumentos(){return this._http.get(this.appSettings.tiposDocumentos.url.base)}postDocumentos(t){return delete t.id,this._http.post(this.appSettings.tiposDocumentos.url.base,t)}putDocumentos(t){let e=t.id;return delete t.id,this._http.put(`${this.appSettings.tiposDocumentos.url.base}/${e}`,t)}};i.\u0275fac=function(e){return new(e||i)(o(r),o(n))},i.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{a};
