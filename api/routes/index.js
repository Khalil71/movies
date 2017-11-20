var express = require('express');
var router = express.Router();

/* GET home page. */
var movies = ['The Matrix', 'Lord of The Rings', 'The Godfather', 'Se7en', 'Fight Club']
router.get('/movies', function(req, res, next) {
  res.status(200).send(movies);
});

module.exports = router;
