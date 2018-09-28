const authenticationMiddleware = () => {
    return (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.redirect('/login')
    }
}

const ensureOnlyAdmin = (app, db) => {
    return (req, res, next) => {
        db.Admins.findOne({
            where: {
                id: req.session.passport.user
            }
        }).then(function(result){
            if(result === null || result === undefined) {
                res.render("layout/businessMessage", {reason: "You are not an admin" , nav: "admin"})
            } else {
                return next()
            }
        })
    }
}

module.exports = { authenticationMiddleware, ensureOnlyAdmin };