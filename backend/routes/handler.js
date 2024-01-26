// handler.js
const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Michal Lukawski",
        "msg": "This is libraty guide",
        "username": "Informatyk",
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;