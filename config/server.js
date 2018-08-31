var express = require('express');
var app = express();
var expressValidator = require('express-validator');
var bodyParser = require ('body-parser');




app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./app/public/'));
app.use(expressValidator());








module.exports = app;
