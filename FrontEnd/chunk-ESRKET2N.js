import{a as p}from"./chunk-JHGRPN2G.js";import{$ as r,Ic as n,ea as o}from"./chunk-WDMQQ6H3.js";var d=(()=>{let e=class e{constructor(t,s){this._http=t,this.appSettings=s}getDetalle(t){return this._http.get(`${this.appSettings.detalleConsumos.url.base}/${t}`)}getConsumo(t){return this._http.get(`${this.appSettings.detalleConsumos.url.base}/${t}`)}getConsumoTrabajador(t){return this._http.get(`${this.appSettings.detalleConsumos.url.baseTrabajador}/${t}`)}postDetalle(t){return this._http.post(this.appSettings.detalleConsumos.url.base,t)}postDesembolso(t){return this._http.post(this.appSettings.detalleConsumos.url.base,t)}getResumen(t){return this._http.get(`${this.appSettings.detalleConsumos.url.base}/trabajador/${t}`)}getPagosAliados(t){let{fechaFinallData:s,idSubEmpresa:a}=t;return this._http.get(`${this.appSettings.detalleConsumos.url.aliado}?fechaFinal=${s}&IdSubEmpresa=${a}`)}patchConsumo(t){let s=t.id;delete t.id;let{idEstado:a}=t;return this._http.patch(`${this.appSettings.detalleConsumos.url.base}/${s}?idEstado=${a}`,{})}};e.\u0275fac=function(s){return new(s||e)(o(n),o(p))},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{d as a};
