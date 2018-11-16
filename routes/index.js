var express = require('express');
var router = express.Router();
const accm = require('./models/maindata');
var fs = require('fs');
const path = require("path");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Oceaneering REST API' });
});

//inserts json data inside record 
router.get('/insert', function (req, res, next) {
  fs.readFile(path.resolve(__dirname, "json/str_data.json"), 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    var json = JSON.parse(data);

    accm.create(json, function (err, final) {
      if (err) {
        res.send({ status: false, body: [], err: err });
      }
      else {
        res.send({ status: true, body: final, err: "" });

      }
    });
  });
});

module.exports = router;
