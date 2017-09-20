var express = require('express');
var router = express.Router();
var database = require('../db/knex');

router.get('/', function(req, res, next) {
  database('question').select()
    .then((question) => {
      res.status(200)
      res.json(question)
    })
    .catch((error) => {
      res.status(500).json({
        error
      })
    });
});

module.exports = router;
