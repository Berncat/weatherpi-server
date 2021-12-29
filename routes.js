"use strict";

const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const archive = require("./controllers/archive.js");
const thingspeak = require("./controllers/thingspeak.js");
const how = require("./controllers/how.js");

router.get("/", home.index);
router.get("/archive", archive.index);
router.get("/archive/:id1", archive.select);
router.get("/archive/:id1/:id2", archive.view);
router.get("/thingspeak", thingspeak.index);
router.get("/howitsmade", how.index);
router.get("/howitsmade/weatherstation", how.station);
router.get("/howitsmade/webserver", how.server);

module.exports = router;
