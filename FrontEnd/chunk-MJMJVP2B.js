import{a as o}from"./chunk-RNYZFOOK.js";import{Lc as p,ba as n,ga as s}from"./chunk-SBESXTFM.js";var D=(()=>{let i=class i{constructor(e,r){this._http=e,this.appSettings=r}getSolicitudes(e){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${e}`)}getSolicitud(e){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${e}`)}postSolicitudes(e){return delete e.id,this._http.post(this.appSettings.solicitudesCreditos.url.base,e)}putSolicitudes(e){let r=e.id;return delete e.id,this._http.put(`${this.appSettings.solicitudesCreditos.url.base}/${r}`,e)}patchSolicitud(e){let r=e.id;delete e.id;let{idEstado:a}=e;return this._http.patch(`${this.appSettings.solicitudesCreditos.url.base}/${r}?idEstado=${a}`,{})}};i.\u0275fac=function(r){return new(r||i)(s(p),s(o))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var c=function(t){return t.APROBADA="Aprobada",t.RECHAZADA="Rechazada",t.PENDIENTE="Pendiente",t.PENDIENTE_DESEMBOLSO="PendienteDesembolso",t.APROBADO_DESEMBOLSO="AprobadaDesembolso",t.RECHAZADA_DESEMBOLSO="RechazadaDesembolso",t.REALIZADA_DESEMBOLSO="RealizadaDesembolso",t}(c||{}),h=function(t){return t.APROBADA="e626ea69-e995-4462-be9a-905326714781",t.RECHAZADA="e626ea69-e995-4462-be9a-905326714780",t.PENDIENTE="e626ea69-e995-4462-be9a-905326714782",t}(h||{});export{D as a,c as b,h as c};
