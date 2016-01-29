module.exports = function (app) {
	var users = require('../controllers/users.server.controllers');
	app.route('/users')
		.post(users.create)
		.get(users.list)
		//.put(users.update);
	app.route('/user/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);
	app.param('userId', users.userById);
}