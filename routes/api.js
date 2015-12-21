// Dependencies
var express = require('express');
var router = express.Router();


//Models
var Product = require('../models/product');





//Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

//Retuen Router
module.exports = router;