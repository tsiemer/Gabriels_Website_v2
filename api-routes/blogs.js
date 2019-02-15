'use strict';


module.exports = function(app, db) {


    // POSTS
    app.post('/myThoughts', (req, res, next) => {
        db.Blog.create({
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content,
            imgUrl: req.body.imgUrl,
            blogType: req.body.blogType
        }).then((result) => {
            db.Blog.findAll({}).then(function(result){
                res.redirect('/blogs/all');
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
                res.redirect('/blogs/all');
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
                res.redirect('/blogs/all');
            })
        });
    })

    app.post('/wayIDoThings', (req, res, next) => {
        db.Blog.create({
            quote: req.body.quote,
            blogType: req.body.blogType
        }).then((result) => {
            db.Blog.findAll({}).then(function(result){
                res.redirect('/blogs/all');
            })
        });
    })

    app.post('/foodForThought', (req, res, next) => {
        db.Blog.create({
            content: req.body.content,
            imgUrl: req.body.imgUrl,
            blogType: req.body.blogType
        }).then((result) => {
            res.redirect('/blogs/all');
        });
    });



    // GETS
    app.get('/', (req, res, next) => {
        db.Blog.findAll({}).then(function(result){
            res.render('index', { data: result });
        });
    });

    app.get('/blogs/all', (req, res, next) => {
        db.Blog.findAll({}).then(function(result){
            res.render('blogs', {blogDetails: result});
        });
    });
    
    app.get('/blogs/:blogId', (req, res, next) => {
        db.Blog.findOne({
            where: {
                id: req.params.blogId
            }
        }).then(function(result){
            res.render('blog', {blogDetails: result});
        });
    });

    app.get('/delete/:blogId', (req, res, next) => {
        db.Blog.destroy({
            where: {
                id: req.params.blogId
            }
        }).then(function(result){
            db.Blog.findAll({}).then(function(result) {
                res.redirect('/blogs/all');
            })
        });
    });

    // PUTS
    app.post('/blogs/update/:blogId', (req, res, next) => {
        db.Blog.update({
            where: {
                id: req.params.blogId
            }
        }).then(function(result){
            db.Blog.findAll({}).then(function(result) {
                res.redirect('/blogs/all');
            })
        })
    })
};