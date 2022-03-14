const express = require('express');
const router = express.Router();
const request = require('request');
const {response} = require("express");

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'TSOD' });
});

router.get('/display', function(req, res, next) {
    const host = req.headers.host;
    const options = {
        'method': 'GET',
        'url': 'http://' + host + '/api/info',
    };
    request(options, function(error, response) {
        if (error) throw new Error(error);
        let recordArr = {}
        JSON.parse(response.body).forEach(data =>{
            let record = {}
            record = JSON.parse(data);
            recordArr.push(record)
        })
        res.render('display', {
            title: 'Records',
            records: recordArr,
        });
    });
});


module.exports = router;

