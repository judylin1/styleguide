var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('stylesheet');
});

router.get('/stylesheet', function(req, res, next) {
  res.render('styleguide')
});

router.get('/post/new', function(req, res, next) {
  res.render('index')
});

module.exports = router;
