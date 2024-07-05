const cds = require('@sap/cds');
const {JWTStrategy} = require("@sap/xssec");
const passport = require("passport");
const xsenv = require("@sap/xsenv");
const express = require('express');
const apiExpress = require('./interface-api/routesIndex.js')



cds.on('bootstrap', app => {
    console.log("init app")
   /* passport.use(new JWTStrategy(xsenv.getServices({'uaa': {tag: "xsuaa"}}).uaa));
    app.use(passport.initialize());
    app.use(passport.authenticate("JWT", { session: false})); */

    //>>>>>>>>>>>>>>>Inicializamos los servicios odata<<<<<<<<<<<<<<<<<<<<<
    cds.serve('all').from('./srv/interface-odata').in(app) 

    //>>>>>>>>>>>>>>>Inicializamos la api con express<<<<<<<<<<<<<<<<<<<<<
    app.use('/api',apiExpress);
});



module.exports = cds.server;