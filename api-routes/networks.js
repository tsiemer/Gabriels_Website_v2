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
    
    // Search functionality
    app.post('/searchNetwork', (req, res, next) => {
        db.Network.findOne({
            where:{
                clientName: req.body.clientName
            }
        }).then(function(result){
            console.log(result)
            res.redirect(`/networks/all/${result.clientName}`)
        })
    });

    app.get('/networks/all/:clientName', (req, res, next) => {
        db.Network.findAll({
            where:{
                clientName: req.params.clientName
            }
        }).then(function(result){
            if(!result || result == null) {
                res.redirect('/networks/all')
            } else {
                res.render('admin-views/networks', {networkDetails: result});
            }
        });
    });

    
};