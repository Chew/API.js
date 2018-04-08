'use strict';

var express = require('express');
var trbmb = require('./trbmb');
var acronym = require('./acronym');
var chewbotccadiscord = require('./chewbotccadiscord');
var chewbotmemedb = require('./memedb');
var app = express();
var port = process.env.PORT || 3000;

app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/trbmb/', function(req, res) {
  res.send(trbmb.getRandom());
});

app.get('/', function(req, res) {
  res.send('<meta http-equiv="refresh" content="0; url=http://github.com/Chewsterchew/API" /><p>Not refreshing? Click <a href="http://github.com/Chewsterchew/API">here</a>.</p>');
});

app.get('/acronym/:acronym', function(req, res) {
  res.send(acronym.genAcro(req.params))
});

app.get('/chewbotcca/discord/command/:command', function(req, res) {
  res.send(chewbotccadiscord.getCommand(req.params))
});

app.get('/chewbotcca/memedb/:meme', function(req, res) {
  res.send(chewbotmemedb.getCommand(req.params))
});

app.listen(port, function() {
  console.log('Server running on port', port);
})
