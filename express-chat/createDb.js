var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/chat';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    db.close();
  });
});

var insertDocuments = function(db, callback) {

  var collection = db.collection('documents');
  // Get the documents collection
  collection.remove();
  collection.insertOne({a : 2}, function(err, result) {
    console.log("count = " + result.ops.length);
    console.log(result.ops);
    callback(result);
  });

  collection.findOne({a: 2}, function(err, item) {
    console.log(item);
    db.close();
  });
}