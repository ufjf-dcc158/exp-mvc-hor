module.exports.hello = function (req, res) {
	res.render('index',{titulo:"Hello World!"});
};

module.exports.bye = function (req, res) {
	if(req.query.morreu){
		res.render('index',{titulo:"Goodbye World!"});
	}else{
		res.render('index',{titulo:"Hello World!"});
	}
};