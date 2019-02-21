'use strict';


module.exports = function(app, db) {

    app.get('/networks/all', (req, res, next) => {
        db.Network.findAll({}).then(function(result){
            res.render('admin-views/networks', {networkDetails: result});
        });
    });

    app.get('/networks/createNew', (req, res, next) => {
        res.render('admin-views/new-network');
    });

    app.post('/networks/createNew', (req, res, next) => {
        db.Network.create({
            clientName: req.body.clientName,
            phone: req.body.phone,
            email: req.body.email,
            businessName: req.body.businessName,
            roleAtBusiness: req.body.roleAtBusiness,
            businessDescription: req.body.businessDescription,
            notes: req.body.notes
        }).then(function(result){
            res.redirect('/networks/all');
        })
    });
};