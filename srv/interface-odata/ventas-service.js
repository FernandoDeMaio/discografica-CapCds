const cds = require("@sap/cds/libx/_runtime/cds");
const xsenv = require("@sap/xsenv");
const Axios = require("axios").default;
const SapCfAxios = require("sap-cf-axios").default;

xsenv.loadEnv();


module.exports = class Ventas extends cds.ApplicationService {
    async init() {
        try {
            console.log('Inicio BajasMxService.init()');

            await super.init();
        } 
        
        catch (error) {
            console.log('Error  BajasMxService.init() - Catch: ' + error.message);
            return error.message;
        }
    }

//nuestras funciones
}