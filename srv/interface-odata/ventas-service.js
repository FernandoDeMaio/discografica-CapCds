const cds = require("@sap/cds/libx/_runtime/cds");
const xsenv = require("@sap/xsenv");
const Axios = require("axios").default;
const SapCfAxios = require("sap-cf-axios").default;

xsenv.loadEnv();


module.exports = class Ventas extends cds.ApplicationService {
    async init() {
        try {
            console.log('Inicio BajasMxService.init()');
            const {Invoice} = cds.entities;
/*             this.after('READ', Invoice, this.changeAmount) */
            this.on("CREATE", Invoice,this.changeAmount)
            await super.init();
        } 
        
        catch (error) {
            console.log('Error  BajasMxService.init() - Catch: ' + error.message);
            return error.message;
        }
    }
/*     changeAmount(results){
        for (let i = 0; i < results.length; i++) {
            results[i].total = 0
        }
    } */
   changeAmount(req){
    console.log("ESTA AQUI --------------------------------------->",req);
    req.data.total = 0
    return req.data
   }
//nuestras funciones
}