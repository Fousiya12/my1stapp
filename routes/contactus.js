
var express = require('express');
var router = contactus.Router();

/* GET users listing. */
router.get('/contactus', function(req, res, next) {
  res.send(contactus);
});

module.exports = router;