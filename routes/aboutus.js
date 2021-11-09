
var express = require('express');
var router = aboutus.Router();

/* GET users listing. */
router.get('/aboutus', function(req, res, next) {
  res.send(aboutus);
});

module.exports = router;
