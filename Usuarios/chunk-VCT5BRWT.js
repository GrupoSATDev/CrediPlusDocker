import{a as o}from"./chunk-U7HZP7QI.js";import{r as p}from"./chunk-NP3GUERB.js";import{$ as n,ea as s}from"./chunk-32HXX3OB.js";var f=(()=>{let i=class i{constructor(t,r){this._http=t,this.appSettings=r}getSolicitudes(t){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${t}`)}getSolicitud(t){return this._http.get(`${this.appSettings.solicitudesCreditos.url.base}/${t}`)}postSolicitudes(t){return delete t.id,this._http.post(this.appSettings.solicitudesCreditos.url.base,t)}putSolicitudes(t){let r=t.id;return delete t.id,this._http.put(`${this.appSettings.solicitudesCreditos.url.base}/${r}`,t)}patchSolicitud(t){let r=t.id;delete t.id;let{idEstado:a}=t;return this._http.patch(`${this.appSettings.solicitudesCreditos.url.base}/${r}?idEstado=${a}`,{})}};i.\u0275fac=function(r){return new(r||i)(s(p),s(o))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var l=function(e){return e.APROBADA="Aprobada",e.RECHAZADA="Rechazada",e.PENDIENTE="Pendiente",e.PENDIENTE_DESEMBOLSO="PendienteDesembolso",e}(l||{}),d=function(e){return e.APROBADA="e626ea69-e995-4462-be9a-905326714781",e.RECHAZADA="e626ea69-e995-4462-be9a-905326714780",e.PENDIENTE="e626ea69-e995-4462-be9a-905326714782",e}(d||{});var A=(()=>{let i=class i{constructor(t,r){this._http=t,this.appSettings=r}getTipos(){return this._http.get(this.appSettings.tipoSolicitudes.url.base)}};i.\u0275fac=function(r){return new(r||i)(s(p),s(o))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();export{f as a,A as b,l as c,d};
