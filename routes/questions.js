var express = require('express');
var router = express.Router();
var questions = require('../data/questions');

router.get('/', function(req, res, next) {
    // .catch((error) => {
    //   res.status(500).json({
    //     error
    //   })
    // });
});

module.exports = router;
