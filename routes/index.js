var express = require('express');
var userModel = require('../models/users.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {title: 'Insync',});

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
