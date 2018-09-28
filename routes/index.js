var express = require('express');
var router = express.Router();

    // Get Login pages
  router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Networking Professional'});
  })

  module.exports = router;