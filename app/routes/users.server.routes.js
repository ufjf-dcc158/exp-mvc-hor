module.exports = function (app) {
	var users = require('../controllers/users.server.controllers');
	app.route('/users').post(users.create);
}