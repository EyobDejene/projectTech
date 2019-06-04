var express = require('express');
var clientsModel = require('../models/clients.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    clientsModel.findOne({_id: process.env.SESSION_SECRECT})
        .exec()
        .then(function (client) {
            req.session.user = client._id;
            req.session.userName = client.first_name;
            req.session.lastName = client.last_name;
            req.session.userAge = client.age;
            req.session.userLocation = client.location;

            res.render('login', {
                message: 'login session created!',
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });


});






module.exports = router;
