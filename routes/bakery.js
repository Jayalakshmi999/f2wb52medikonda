var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bakery', { title: 'Search Results Bakery' });
});

module.exports = router;
