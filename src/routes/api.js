const express = require('express');
const path = require("path");
const router = express.Router();
const fs = require('fs');

router.post('/forwarding', async function (req, res, next) {
    try{
        // append data to file
        const logPath = path.join(__dirname, '../../log/log.txt');
        console.log("Forwarding Request Body:",req.body)
        let channel = req.body.channel
        channel.feeds.forEach(feed =>{
            feed['field'] = Object.values(feed)[1]
        })
        fs.appendFileSync(logPath, JSON.stringify(channel) + '\n', function(err) {
            if(err) {
                res.end('ERROR');//mark request as error
            }else{
                res.end("SUCCESS")
            }
        });
        res.end('SUCCESS');//mark request as successful
    }catch{
        res.end('ERROR');//mark request as error
    }
});

router.get('/info', async function (req, res, next) {
    const logPath = path.join(__dirname, '../../log/log.txt');
    const allFileContents = fs.readFileSync(logPath, 'utf-8');
    let data = Array()
    allFileContents.split(/\r?\n/).forEach(line =>  {
        if (line.length>0){
            data.push(`${line}`)
        }
    });
    res.send(JSON.stringify(data.sort()))
});

module.exports = router;
