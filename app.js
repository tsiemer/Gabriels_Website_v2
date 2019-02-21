var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var MySQLStore = require('express-mysql-session')(session)
var db = require('./db/models');
var apiRoutes = require('./api-routes/index');

var indexRoute = require('./routes/index');
var authRoutes = require('./routes/authentication');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'http') {
        const sslUrl = `https://${req.hostname}${req.originalUrl}`;
        res.redirect(sslUrl);
    } else {
        next();
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var options = {
    host: `${process.env.DB_HOST}`,
    port: `${process.env.PORT}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`
};

var sessionStore = new MySQLStore(options)

app.use(session({
    secret: 'Aspire to Inspire before you Expire... - Trinity Siemer',
    resave: false,
    store: sessionStore,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
})

app.use( async (req, res, next) => {
    if (req.isAuthenticated()) {
        let adminDetails = db.Admin.findOne({
            where: {
                id: req.session.passport.user
            }
        })
    
        if (!!adminDetails) res.locals.accountName = `${adminDetails.dataValues.username}`
    }
    
    next();
});

app.use('/', indexRoute);
app.use('/', authRoutes);
apiRoutes(app, db)

passport.use('adminRoute', new LocalStrategy(
    async function (username, password, done) {
        console.log("Using the Admin Route ")
        const adminDetails = await db.Admin.findOne({
            where: {
                username
            }
        }).then((result) => {
            if (!result) {
                console.log("No result")
                done(null, false)
            } else {
                const hash = result.dataValues.password;
                bcrypt.compare(password, hash, (err, response) => {
                    if (response) {
                        console.log("Passing the user id")
                        const user_id = result.dataValues.id;
                        return done(null, user_id);
                    } else {
                        console.log("No result")
                        return done(null, false);
                    }
                })
            }
        })
    }
));

passport.serializeUser(function(user_id, done) {
    done(null, user_id);
});
  
passport.deserializeUser(function(user, done) {
    done(err, user);
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    res.render('error', {Message: err.message, errorStatus: err.status || 404});
});

  

module.exports = app;