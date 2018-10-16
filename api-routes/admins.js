'use strict';
var passport = require('passport');
// var helpers = require('./route_helpers');

// These routes pass information from the database to front end.

module.exports = function(app, db) {
    app.get('/admins', (req, res, next) => {
        db.Admin.findAll({
        }).then((result) => {
            res.render('index', {admins: result})
        })
    });

    app.post('/login', passport.authenticate( 'admin', 
        { 
            successRedirect: '/dashboard', 
            failureRedirect: '/login'
        },
    ));

    app.get('/dashboard', function(req, res) {
        res.render('dashboard');
    });

    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
};