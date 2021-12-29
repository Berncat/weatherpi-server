"use strict";

const logger = require("../utils/logger");
const database = require("../models/database");

const archive = {
  async index(request, response) {
    logger.info("Archive rendering");
    const output = await database.getDatabases();
    const viewData = {
      title: "Archive",
      data: output
    };
    response.render("archivebymonth", viewData);
  },

  async select(request, response) {
    logger.info("Archive rendering");
    const databaseName = request.params.id1;
    const output = await database.getCollections(databaseName);
    const viewData = {
      title: "Archive",
      month: databaseName,
      data: output
    };
    response.render("archivebyday", viewData);
  },

  async view(request, response) {
    logger.info("Archive rendering");
    const databaseName = request.params.id1;
    const collectionName = request.params.id2;
    const output = await database.getCollection(databaseName, collectionName);
    const viewData = {
      title: "Archive",
      day: collectionName,
      data: output
    };
    response.render("archiveview", viewData);
  }
};

module.exports = archive;