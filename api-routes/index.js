var blogs = require('./blogs');
var admins = require('./admins')
var projects = require('./projects')

module.exports = function(app, db) {
	blogs(app, db)
	admins(app, db)
	projects(app, db)
}