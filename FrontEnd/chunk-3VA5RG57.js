import{a as p}from"./chunk-DGQEWR53.js";import{s as o}from"./chunk-X7QBE67O.js";import{aa as e,fa as i}from"./chunk-UANZ7CBN.js";var b=(()=>{let a=class a{constructor(t,s){this._http=t,this.appSettings=s}getPagosTrabajadores(){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/Tabla`)}getPagoTrabajadorIndividual(){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/TablaIndividual`)}postPagosTrabajadores(t){return this._http.post(this.appSettings.pagoTrabajadores.url.base,t)}postPagoTrabajador(t){return this._http.post(`${this.appSettings.pagoTrabajadores.url.base}/Individual`,t)}getPagosTrabajador(t){return this._http.get(`${this.appSettings.pagoTrabajadores.url.base}/${t}`)}tipoPagoTrabajadores(){return this._http.get(this.appSettings.pagoTrabajadores.url.baseTipo)}};a.\u0275fac=function(s){return new(s||a)(i(o),i(p))},a.\u0275prov=e({token:a,factory:a.\u0275fac,providedIn:"root"});let r=a;return r})();export{b as a};
