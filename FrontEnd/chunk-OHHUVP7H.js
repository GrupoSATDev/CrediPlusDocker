import{b as c}from"./chunk-AOGIMPKX.js";import{Nc as n,ba as s,ga as r}from"./chunk-IEDNLM77.js";var l=(()=>{let e=class e{constructor(t,i){this._http=t,this.appSettings=i}getReporteConsumo(t){return console.log(t),this._http.get(`${this.appSettings.reportes.url.reporteConsumo}?idEstadoCredito=${t.idEstadoCredito}&fechaInicio=${t.fechaInicio}&fechaFinal=${t.fechaFinal}`)}getReporteDesembolsos(t){return console.log(t),this._http.get(`${this.appSettings.reportes.url.reporteDesembolso}?fechaInicio=${t.fechaInicio}&fechaFinal=${t.fechaFinal}`)}getReporteCobros(t){return console.log(t),this._http.get(`${this.appSettings.reportes.url.reporteCobro}?idEstadoCredito=${t.idEstadoCredito}&fechaInicio=${t.fechaInicio}&fechaFinal=${t.fechaFinal}`)}};e.\u0275fac=function(i){return new(i||e)(r(n),r(c))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{l as a};
