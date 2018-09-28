'use strict';

module.exports = function(app, db) {
    app.get('/projects/:page', (req, res, next) => {
        let limit = 10;
        let offset = 0;
        db.Project.findAndCountAll({}).then((data) => {
            let page = req.params.page;
            let pages = Math.ceil(data.count / limit);
                offset = limit * (page - 1);
            db.Project.findAll({
                limit: limit,
                offset: offset,
                order: [
                    ['title', 'ASC']
                ]
            }).then(function(result){
                return res.render('projects-index', { data: result, pages})
            })
        })
    });

    app.post('/projects', (req, res, next) => {
        db.Project.create({
            title: req.body.title,
            subtitle: req.body.subtitle,
            description: req.body.description,
            imgUrl: req.body.imgUrl
        }).then(function(result){
            res.render('projects-index', {data: result});
        });
    });

    app.get('/project/:title', (req, res, next) => {
        db.Project.findOne({
            where: {
                title: req.params.title
            }
        }).then(function(result){
            res.render('project-details', {data: result});
        });
    });
};