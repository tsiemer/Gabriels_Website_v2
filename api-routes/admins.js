'use strict';
const bcrypt = require("bcrypt");
var session = require('express-session');
var passport = require('passport');
var helpers = require('./route_helpers');

// These routes pass information from the database to front end.

module.exports = function(app, db) {
    app.get('/admins', (req, res, next) => {
        db.Admin.findAll({
        }).then((result) => {
            res.render('customer-views/index', {admins: result})
        })
    });

    app.post('/login', passport.authenticate(
        'adminRoute', {
            failureRedirect: '/',
            successRedirect: `/dashboard/`
        }
    ));
   
    app.get('/register', (req, res, next) => {
        res.render('register');
    })

    app.post('/register', (req, res, next) => {
        const saltRounds = 10;
        var password = req.body.password;
        
        if(!!password && !!req.body.username) {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if(hash){
                    let newAdmin = await db.Admin.create({
                        username: req.body.username,
                        password: hash,
                        isAuthenticated: true
                    })

                    if(!!newAdmin) {
                        const user_id = newAdmin.dataValues.id;

                        req.login(user_id, function(error){
                            res.redirect('/dashboard/' + user_id)
                        })
                    }  else {
                        throw new Error
                    }
                }
            });
        }
    });

    app.get('/dashboard',  function(req, res) {
        res.render('admin-views/dashboard');
    });
    
    // app.get('/dashboard/:id', function(req, res) {
    //     res.render('admin-views/dashboard');
    // });

    passport.serializeUser(function(user_id, done){
        done(null, user_id);
    });

    passport.deserializeUser(function(user_id, done){
        done(null, user_id)
    })
};