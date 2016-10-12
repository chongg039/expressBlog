module.exports = function(app){
	var index = require('../controllers/index.server.controller');
	app.get('/', index.render);
};
//导出单个函数