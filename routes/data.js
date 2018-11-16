var express = require('express');
var router = express.Router();
const acc = require('./models/maindata');

router.post('/list', async function (req, res, next) {
    var query = req.body.search;
    var records = [];
    if (!query || query.trim() == "") {
        var data = await acc.find();
        records.push({ count: data.length, records: data });
        return res.send({ status: true, body: records, err: "" });
    }
    else if (query) {
        var re = new RegExp(query, 'i');
        var data = await acc.find().or([
            { 'KEYWORD': { $regex: re } },
            { 'STATUS': { $regex: re } },
        ]);
        records.push({ count: data.length, records: data });
        return res.send({ status: true, body: records, err: "" });
    }
    else {
        return res.send({ status: false, body: [], err: "error occured" });
    }
});

module.exports = router;
