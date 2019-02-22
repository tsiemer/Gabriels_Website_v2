const passport = require('passport');

const authenticationMiddleware = () => {
    console.log("Auth Middleware")
    return (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.render('login')
    }
}

const ensureOnlyAdmin = (app, db) => {
    return (req, res, next) => {
        db.Admin.findOne({
            where: {
                id: req.params.adminId
            }
        }).then(function(result){
            if(result === null || result === undefined) {
                res.render("error", {errorMessage: "You are not an admin"})
                console.log("Hit an error")
            } else {
                console.log("Admin found")
                return next()
            }
        })
    }
}

module.exports = { authenticationMiddleware, ensureOnlyAdmin };