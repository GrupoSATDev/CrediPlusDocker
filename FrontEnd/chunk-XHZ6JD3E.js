import{$ as r}from"./chunk-32HXX3OB.js";var i={urlApi:"https://api.crediplus.com.co/api/",baseUrl:"https://api.crediplus.com.co/api/"};var s=class{static uriBase(e){return i.baseUrl+e}};var c=(()=>{let e=class e{constructor(){this.auth={url:{base:s.uriBase("Usuarios/Login")}},this.departamentos={url:{base:s.uriBase("Departamentos")}},this.municipios={url:{base:s.uriBase("Municipios/Departamento"),baseMunicipio:s.uriBase("Municipios")}},this.empresasMaestras={url:{base:s.uriBase("EmpresaMaestras")}},this.empresasClientes={url:{base:s.uriBase("SubEmpresas")}},this.tiposEmpresas={url:{base:s.uriBase("TipoEmpresas")}},this.tiposDocumentos={url:{base:s.uriBase("TipoDocumentos")}},this.generos={url:{base:s.uriBase("Generos")}},this.capitalInversion={url:{base:s.uriBase("CapitalInversiones")}},this.solicitudesCreditos={url:{base:s.uriBase("Solicitudes")}},this.tasasIntereses={url:{base:s.uriBase("TasaIntereses")}},this.tiposPagos={url:{base:s.uriBase("TipoPagos")}},this.empleados={url:{base:s.uriBase("Trabajadores")}},this.cargos={url:{base:s.uriBase("Cargos")}},this.creditos={url:{base:s.uriBase("Creditos")}},this.estadoCreditos={url:{base:s.uriBase("EstadoCreditos/Creditos"),baseCobros:s.uriBase("EstadoCreditos/CobroTrabajadores")}},this.detalleConsumos={url:{base:s.uriBase("DetalleConsumos"),desembolsoBase:s.uriBase("DetalleConsumos/DetalleConsumoDesembolso")}},this.cobroTrabajadores={url:{base:s.uriBase("CobroTrabajadores"),baseTabla:s.uriBase("CobroTrabajadores/Tabla")}},this.subcripciones={url:{base:s.uriBase("Suscripciones")}},this.riesgos={url:{base:s.uriBase("NivelesRiesgos")}},this.bancos={url:{base:s.uriBase("Bancos")}},this.cuentasBancarias={url:{base:s.uriBase("CuentasBancarias")}},this.tipoConsumos={url:{base:s.uriBase("TipoConsumos")}},this.tipoCuentas={url:{base:s.uriBase("TipoCuentas")}}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();export{c as a};
