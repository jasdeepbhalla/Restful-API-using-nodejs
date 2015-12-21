//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongoDB
mongoose.connect('mongodb://localhost/test');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//start server
app.listen(3000);
console.log('listening on port 3000')

