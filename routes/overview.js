var express = require('express');
var overview = express.Router();

/* GET users listing. */
overview.get('/', function(req, res, next) {

    res.render('overview', { title: 'Overview' });
});

overview.get('/:id', function(req, res, next) {
    res.render('overview', { title: req.params.id });
});




module.exports = overview;
