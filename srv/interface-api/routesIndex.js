"use strict";
const router = require('express').Router();

// expose routes
router.use("/index", (_, res) => { res.send("Ruta principal") });

module.exports = router;