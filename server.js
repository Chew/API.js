'use strict';

var express = require('express');
var trbmb = require('./trbmb');
var app = express();
var port = process.env.PORT || 3000;

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/trbmb/', function (req, res) {
	res.send(trbmb.getRandom());
});

app.get('/', function (req, res) {
	res.send('<meta http-equiv="refresh" content="0; url=http://github.com/Chewsterchew/API" /><p>Not refreshing? Click <a href="http://github.com/Chewsterchew/API">here</a>.</p>');
});

app.listen(port, function () {
	console.log('Server running on port', port);
})
