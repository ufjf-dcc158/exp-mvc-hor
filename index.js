var mongoose = require('./config/mongoose');
var aplicativo = require('./config/aplicativo');
var db = mongoose();
var app = aplicativo();
app.listen("3000");
module.exports = app;
console.log("Aplicação executando em http://localhost:3000");