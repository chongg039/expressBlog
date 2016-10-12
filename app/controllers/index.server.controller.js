exports.render = function(req, res){
	req.session.lastVisit = new Date();
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}
};

exports.render = function(req, res){
	res.render('index', {
		title: 'hello word',
		//userFullName: req.user ? req.user.fullName : ''
		user: JSON.stringify(req.user)
	});
};
//函数模块