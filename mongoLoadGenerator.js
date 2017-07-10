/**
 * Created by bmincey on 5/16/17.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var randomstring = require('randomstring')

var url = 'mongodb://localhost:27017/nodeDB'

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    console.log("Connected successfully to server!");

    insertDocuments(db, function () {
        db.close();
    });
});


var insertDocuments = function (db, callback) {

    for( var i = 0; i < 10000; i++) {

        db.collection('myNodeCollection2').insertOne({

            "name": randomstring.generate(12),
            "address": randomstring.generate(25),
            "city": randomstring.generate(20),
            "state": randomstring.generate(2),
            "date": new Date(),
            "favoriteSports" : [ randomstring.generate(10), randomstring.generate(10)],
            "record" : i
        }, function (err, result) {
            assert.equal(err, null);
            console.log("Inserted document into the myNodeCollection.");
            callback();


        });
    }
};
