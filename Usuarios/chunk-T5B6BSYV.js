import{ba as r}from"./chunk-T2GNEYCX.js";var i={urlApi:"https://api.crediplus.com.co/api/",baseUrl:"https://api.crediplus.com.co/api/"};var s=class{static uriBase(a){return i.baseUrl+a}};var c=(()=>{let a=class a{constructor(){this.auth={url:{base:s.uriBase("Usuarios/Login")}},this.departamentos={url:{base:s.uriBase("Departamentos")}},this.municipios={url:{base:s.uriBase("Municipios/Departamento"),baseMunicipio:s.uriBase("Municipios")}},this.empresasMaestras={url:{base:s.uriBase("EmpresaMaestras")}},this.empresasClientes={url:{base:s.uriBase("SubEmpresas"),baseTrabajador:s.uriBase("SubEmpresas/Clientes")}},this.tiposEmpresas={url:{base:s.uriBase("TipoEmpresas")}},this.tiposDocumentos={url:{base:s.uriBase("TipoDocumentos")}},this.generos={url:{base:s.uriBase("Generos")}},this.capitalInversion={url:{base:s.uriBase("CapitalInversiones")}},this.solicitudesCreditos={url:{base:s.uriBase("Solicitudes")}},this.tasasIntereses={url:{base:s.uriBase("TasaIntereses")}},this.tiposPagos={url:{base:s.uriBase("TipoPagos")}},this.empleados={url:{base:s.uriBase("Trabajadores"),baseValidate:s.uriBase("Trabajadores/ValidaInfo"),basePerfil:s.uriBase("Trabajadores/perfil")}},this.cargos={url:{base:s.uriBase("Cargos")}},this.creditos={url:{base:s.uriBase("Creditos")}},this.estadoCreditos={url:{base:s.uriBase("EstadoCreditos/Creditos"),baseCobros:s.uriBase("EstadoCreditos/CobroTrabajadores")}},this.detalleConsumos={url:{base:s.uriBase("DetalleConsumos"),baseTrabajador:s.uriBase("DetalleConsumos/Trabajador"),desembolsoBase:s.uriBase("DetalleConsumos/DetalleConsumoDesembolso")}},this.cobroTrabajadores={url:{base:s.uriBase("CobroTrabajadores"),baseTabla:s.uriBase("CobroTrabajadores/Tabla"),baseCard:s.uriBase("CobroTrabajadores/CardTrabajador")}},this.subcripciones={url:{base:s.uriBase("Suscripciones")}},this.riesgos={url:{base:s.uriBase("NivelesRiesgos")}},this.bancos={url:{base:s.uriBase("Bancos")}},this.cuentasBancarias={url:{base:s.uriBase("CuentasBancarias")}},this.tipoConsumos={url:{base:s.uriBase("TipoConsumos")}},this.tipoCuentas={url:{base:s.uriBase("TipoCuentas")}},this.tipoSolicitudes={url:{base:s.uriBase("TipoSolicitudes")}},this.authTrabajador={url:{base:s.uriBase("Usuarios/RegistroTrabajador")}}}};a.\u0275fac=function(o){return new(o||a)},a.\u0275prov=r({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();export{c as a};
