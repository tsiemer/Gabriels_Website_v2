const authenticationMiddleware = () => {
    console.log("Auth Middleware")
    return (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.redirect('/login')
    }
}

const ensureOnlyAdmin = (app, db) => {
    return (req, res, next) => {
        console.log("Ensuring only admin ")
        db.Admins.findOne({
            where: {
                id: req.session.passport.user
            }
        }).then(function(result){
            
            if(result === null || result === undefined) {
                res.render("error", {errorMessage: "You are not an admin"})
            } else {
                return next()
            }
        })
    }
}

module.exports = { authenticationMiddleware, ensureOnlyAdmin };