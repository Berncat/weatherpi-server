"use strict";

const logger = require("../utils/logger");
const database = require("../models/database");
const dateTime = require('node-datetime')
const fs = require('fs-extra');

const home = {
  async index(request, response) {
    logger.info("Home rendering");
    const dbInput = dateTime.create().format('n-Y');
    const collectionInput = dateTime.create().format('d-m-Y');
    const output = await database.getCollection(dbInput, collectionInput);
    const latestReading = fs.readJSONSync("./IoT/readings.json");
    const viewData = {
      title: "Home",
      last: latestReading,
      data: output,
    }
    response.render("home", viewData);
  }
};

module.exports = home;