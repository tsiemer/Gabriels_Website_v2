'use strict';


module.exports = function(app, db) {
    app.post('/myThoughts', (req, res, next) => {
        db.Blog.create({
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content,
            imgUrl: req.body.imgUrl,
            blogType: req.body.blogType
        }).then((result) => {
            db.Blog.findAll({}).then(function(result){
                res.render('index', {data: result});
            })
        });
    })

    app.post('/aboutMe', (req, res, next) => {
        db.Blog.create({
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content,
            imgUrl: req.body.imgUrl,
            blogType: req.body.blogType,
            headerLink: req.body.headerLink
        }).then((result) => {
            db.Blog.findAll({}).then(function(result){
                history.push('index', {data: result});
                // res.render('index', {data: result});
            })
        });
    })

    app.post('/doneAndDoing', (req, res, next) => {
        db.Blog.create({
            content: req.body.content,
            imgUrl: req.body.imgUrl,
            title: req.body.title,
            subtitle: req.body.subtitle,
            blogType: req.body.blogType
        }).then((result) => {
            db.Blog.findAll({}).then(function(result){
                res.render('index', {data: result});
            })
        });
    })

    app.post('/foodForThought', (req, res, next) => {
        db.Blog.create({
            content: req.body.content,
            imgUrl: req.body.imgUrl,
            blogType: req.body.blogType
        }).then((result) => {
            res.render('index');
        });
    });

    app.get('/', (req, res, next) => {
        db.Blog.findAll({}).then(function(result){
            res.render('index', { data: result });
        });
    });

    app.get('/blogs', (req, res, next) => {
        db.Blog.findAll({}).then(function(result){
            res.render('blogs', {data: result});
        });
    });
};