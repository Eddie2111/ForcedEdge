var Mongo = require('mongodb').MongoClient;

// Connect to the db
var MongoClient = Mongo.connect("mongodb://localhost:27017/event_career", function (err, db) {
   if(err) throw err;
   else console.log('Local mongodb connection active!');
// Connect to the db
});

module.exports= MongoClient;
