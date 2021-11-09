var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/aboutus', function(req, res, next) {
  res.send(aboutus);
});
router.get('/contactus', function(req, res, next) {
  res.send(contactus);
});

module.exports = router;
