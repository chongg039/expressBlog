process.env.NODE_ENV = process.env.NODE_ENV || 'development'; //系统环境变量

var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();
app.listen(3002);

module.exports = app;

console.log('Server is running at http://localhost:3002');