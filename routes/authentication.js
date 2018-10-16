var express = require('express');
var router = express.Router();
var passport = require('passport');
var session = require('express-session');

// Get Login pages research: passport they have a tutorial on setting this up
router.get('/login', function(req, res, next) { 
    res.render('login', { title: 'Networking Professional'});
})

router.get('/logout', function(req, res, next){
    req.logout();
    req.session.destroy();
    res.redirect('/login');
});





module.exports = router;