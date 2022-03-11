const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/forwarding', async function (req, res, next) {
    try{
        //get POST payload
        let jsonData = "";
        // console.log(req)
        console.log(req.body.channel)
        // req.on("data", function(chunk) {
        //     jsonData += chunk;
        // });
        // req.on("end", function() {
        //     //parse input data into json
        //     const reqObj = JSON.parse(jsonData);
        //     //-----------Make sure response is sent within 15 seconds------------//
        //     fs.writeFile("log.txt", JSON.stringify(reqObj), function(err) {
        //         if(err) {
        //             res.end('ERROR');//mark request as error
        //         }
        //     });
        //     res.end('SUCCESS');//mark request as successful
        // });
        res.end('SUCCESS');//mark request as successful
    }catch{
        res.end('ERROR');//mark request as error
    }
});

router.get('/message', async function (req, res, next) {
    res.send("Hello UbiBot")
});

module.exports = router;
