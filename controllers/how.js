"use strict";

const logger = require("../utils/logger");


const how = {
  index(request, response) {
    logger.info("How it's made rendering");
    const viewData = {
      title: "How it's made",
    }
    response.render("how", viewData);
  },

  station(request, response) {
    logger.info("How it's made rendering");
    const viewData = {
      title: "How it's made: Weather Station",
    }
    response.render("howstation", viewData);
  },

  server(request, response) {
    logger.info("How it's made rendering");
    const viewData = {
      title: "How it's made: Web Server",
    }
    response.render("howserver", viewData);
  }
};

module.exports = how;