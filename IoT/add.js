const database = require("../models/database");
const dateTime = require('node-datetime')

const dbInput = dateTime.create().format('n-Y');
const collectionInput = dateTime.create().format('d-m-Y');

database.addReading(dbInput, collectionInput);