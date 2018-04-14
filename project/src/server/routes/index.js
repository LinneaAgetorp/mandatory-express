const express = require('express');

const route = express.Router();


route.use('/api/products', require('./product'));
route.use('/api/posts', require('./posts'));

module.exports = route;