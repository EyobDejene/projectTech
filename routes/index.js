var express = require('express');
var userModel = require('../models/users.model');
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

                res.render('index', {
                    title: 'Insync',
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });

    // if(req.session.username) {
    //     res.render('index', {title: 'InSync'});
    // }


});


router.put('/', function(req, res, next) {
   if(!req.body){
     return res.status(400).send('Request body is missing');
   }
   let model = new userModel(req.body);
   model.save()
       .then(doc => {
         if(!doc || doc.length === 0){
           return res.status(500).send(doc);
         }
         res.status(201).send(doc);
       })
       .catch(err => {
         res.status(500).json(err);
       })
});






module.exports = router;
