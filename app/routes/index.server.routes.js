module.exports = function (app) {
	var index = require('../controllers/index.server.controllers');
	app.use('/bye.html', index.bye);
	app.use('/index.html', index.hello);
}