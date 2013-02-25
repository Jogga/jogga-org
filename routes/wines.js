var mongo = require('mongodb');

var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('winedb', server, {w: 1},{safe: true}, {strict:true});

db.open(function(err, db) {
	if(!err) {
		console.log('Connected to "winedb" database');
		// db.dropCollection('wines', function(){});
		// populateDB(db);
		db.collection('wines', {safe: true}, function(err, collection) {
			console.log('entered db.collection(...');
			console.log(err);
			if(err) {
				console.log('The "wines" collection does not exist. Creating it with sample data...');
				populateDB(db);
			}
		});
	}
});

exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('Retrieving wine: ' +id);
	db.collection('wines', function(err, collection) {
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
			res.send(item);
		});
	});
};

exports.findAll = function(req, res) {
	db.collection('wines', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

exports.addWine = function(req, res) {
	var wine = req.body;
	console.log('Adding wine: ' + JSON.stringify(wine));
	db.collection('wines', function(err, collection) {
		collection.insert(wine, {safe:true}, function(err, result) {
			if (err) {
				res.send({'error' : 'an error has occurred'});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				res.send(result[0]);
			}
		});
	}); 
}

exports.updateWine = function(req, res) {
	var id = req.params.id;
	var wine = req.body;
	console.log('Updating wine: ' + id);
	console.log(JSON.stringify(wine));
	db.collection('wines', function(err, collection) {
		collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe:true}, function(err, result) {
			if (err) {
				console.log('Error updating wine: ' + err);
				res.send({'error' : 'an error has occurred'});
			} else {
				console.log('' + result + ' document(s) updated');
				res.send(wine);
			}
		});
	}); 
}

exports.deleteWine = function(req, res) {
	var id = req.params.id;
	console.log('Deleting wine: ' + id);
	db.collection('wines', function(err, collection) {
		collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
			if (err) {
				res.send({'error' : 'an error has occurred - ' + err });
			} else {
				console.log('' + result + ' document(s) deleted');
				res.send(req.body);
			}
		});
	}); 
}


/* Populate database with sample data */
var populateDB = function(db2) {
	console.log('populateDB!');
	var wines = [
	{
		name: "Chateau de Saint Cosme",
		year: "2009",
		grapes: "Grenache / Syrah",
		country: "France",
		region: "Southern Rhone",
		description: "The aromas of fruit and spice",
		picture: "saint_cosme.jpg"
	},
	{
		name: "Lan Rioja Crianza",
		year: "2006",
		grapes: "Tempranillo",
		country: "Spain",
		region: "Rioja",
		description: "A resurgence of interest in boutique vineyards...",
		picture: "lan_rioja.jpg"
	}];
	
	db2.collection('wines', function(err, collection) {
		collection.insert(wines, {safe: true}, function(err, result) {});
	});

};




