module.exports.hello = function (req, res) {
	req.session.i = req.session.i  || 1;
	req.session.ultimaVisita = new Date();
	res.render('index', {
		titulo:"Hello World!",
		contador: req.session.i++,
		acesso: req.session.ultimaVisita
	});
};

module.exports.bye = function (req, res) {
	if(req.query.morreu){
		res.render('index',{titulo:"Goodbye World!"});
	}else{
		res.render('index',{titulo:"Hello World!"});
	}
};