"use strict";

const logger = require("../utils/logger");


const thingspeak = {
  index(request, response) {
    logger.info("ThingSpeak rendering");
    const viewData = {
      title: "ThingSpeak",
    }
    response.render("thingspeak", viewData);
  }
};

module.exports = thingspeak;