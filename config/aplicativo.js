process.env.NODE_ENV = process.env.NODE_ENV || 'devel';

var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var ejs = require('ejs');
var config = require('../config/config.js');

module.exports = function(){
	var app = express();
	if(process.env.NODE_ENV==='devel'){
		app.use(morgan('dev'));
	}else if(process.env.NODE_ENV==='prod'){
		app.use(compression());
	}
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.set('views', 'app/views');
	app.set('view engine', 'ejs');
	require('../app/routes/index.server.routes')(app);
	return app;
};