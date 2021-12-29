const { MongoClient } = require('mongodb');
const fs = require('fs-extra');
const uri = 'mongodb://127.0.0.1:27017';
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const database = {

	async connection(input) {
		mongoClient.connect();
		console.log("Connected correctly to server");
		const db = mongoClient.db(input);
		console.log(`Successfully connected to db ${db.databaseName}`);
		return db;
	},

	async closeConnection() {
		mongoClient.close();
		console.log("Connection closed");
	},

	async getDatabases() {
		try {
			await mongoClient.connect();
			console.log("Connected correctly to server");
			const databaseList = await mongoClient.db().admin().listDatabases({ nameOnly: true, filter: { "name": /-/ } });
			return databaseList.databases;
		} catch (err) {
			console.error(`we encountered ${err}`);
		} finally {
			await this.closeConnection()
		}
	},

	async getCollections(dbInput) {
		try {
			db = await this.connection(dbInput);
			const list = db.listCollections();
			const collectionsList = await list.toArray();
			console.log(collectionsList);
			return collectionsList;
		} catch (err) {
			console.error(`we encountered ${err}`);
		} finally {
			await this.closeConnection()
		}
	},

	async getCollection(dbInput, collectionInput) {
		try {
			db = await this.connection(dbInput);
			const collection = db.collection(collectionInput);
			const cursorFind = collection.find();
			const data = await cursorFind.toArray();
			return data;
		} catch (err) {
			console.error(`we encountered ${err}`);
		} finally {
			await this.closeConnection()
		}
	},

	async addReading(dbInput, collectionInput) {
		try {
			db = await this.connection(dbInput);
			const collection = db.collection(collectionInput);
			const newReading = fs.readJSONSync("/home/ubuntu/weatherServer/IoT/readings.json");
			await collection.insertOne(newReading);
		} catch (err) {
			console.error(`we encountered ${err}`);
		} finally {
			await this.closeConnection()
		}
	}
};

module.exports = database;







