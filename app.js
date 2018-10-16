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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
    secret: 'Gabriel is my bestfriend',
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

app.use('/', indexRoute);
app.use('/', authRoutes);
apiRoutes(app, db)


passport.use('admin', new LocalStrategy(
    function (username, password, done) {
        db.Admin.findOne({
            where: {
                username: username
            }
        }).then(function (result, err, fields) {
            if (err) {
                done(err)
            } else if (!result || result === 0) {
                done(null, false)
            } else {
                var hash = result.dataValues.password;
                bcrypt.compare(password, hash, function (err, response) {
                    if (response === true && result.dataValues.isConfirmed === true) {
                        var id = result.dataValues.id;
                        return done(null, id)
                    } else {
                        return done(null, false);
                    }
                })
            }

        })
    }
));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.render('error', {Message: err.message, errorStatus: err.status || 404});
});

  

module.exports = app;
