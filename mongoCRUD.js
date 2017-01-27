/**
 * Created by Alex_Xie on 25/01/2017.
 */

function Location(name, category, lon, lat) {

    this.name = name,
    this.category = category,
    this.lon = lon,
    this.lat = lat;
};

var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/hwD11", {native_parser: true});

db.bind('test');

// add, update, delete location (name, category, longitude)
db.test.find().toArray(function (err, items) {

    console.log('something');
    items.forEach(item => console.log(item));
    db.close();
});

var addLocation = function (loca) {

    db.test.insert({ name: loca.name, category: loca.category, lon: loca.lon, lat: loca.lat });
};

var updateLoca = function (loca) {

    db.test.save({ name: loca.name, category: loca.category, lon: loca.lon, lat: loca.lat });
};

var deleLoca = function (loca) {

    db.test.remove({name: loca.name});
};

var testLoca = new Location('asaad', 'cate-test', 77, 100);
var newLoca = new Location('asaad1122', 'cate-test', 77, 100);

// deleLoca(testLoca);
// addLocation(testLoca);
updateLoca(newLoca);

addLocation(new Location('square', 'park', -91.9781, 41.0102));
addLocation(new Location('Washington Avenue', 'road', -91.9636, 41.0077));

db.createIndex();





