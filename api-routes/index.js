var blogs = require('./blogs');
var admins = require('./admins')
var projects = require('./projects')
var networks = require('./networks')

module.exports = function(app, db) {
	blogs(app, db)
	admins(app, db)
	projects(app, db)
	networks(app, db)
}