var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session'),
	passport = require('passport'),
	flash = require('connect-flash');


module.exports = function(){
	var app = express();

	if (process.env.NODE_ENV === 'development') { //判定系统环境是开发环境
		app.use(morgan('dev'));
	}else if (process.env.NODE_ENV === 'production') { //判定系统环境是生产环境
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride()); //上面这三个中间件不区分环境，一定会加载

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	app.set('views', './app/views'); //视图文件存储路径
	app.set('view engine', 'ejs'); //模板引擎

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session()); 

	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	require('../app/routes/articles.server.routes.js')(app);

	app.use(express.static('./public'));

	return app;
};
//创建express应用对象