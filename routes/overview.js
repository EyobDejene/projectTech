var express = require('express');
var userList = require('../models/users.model');

var overview = express.Router();

/* GET users listing. */
overview.get('/', function(req, res, next) {
    // check if url contains keys
    if(Object.keys(req.query).length) {
        var skillLevel = req.query.skilLevel;
        var ageRange = req.query.ageRange;
        var maxDistance = req.query.maxDistance;
        var runningScheme = req.query.runningScheme;
        var practiceTime = req.query.practiceTime;
       // var ageDifference =  (userAge - ageRange);
        userList.find({
            skill_level : skillLevel,
            age: {$gte : 0,  $lte : ageRange},
            location: {$gte : maxDistance,  $lte : maxDistance},
            running_scheme: runningScheme,
            practice_time: practiceTime
        }).select('first_name age avatar location match_date')
            .exec()
            .then(function (users) {
                if(req.xhr) {
                    res.json(users);
                }else{
                    res.render('overview', {
                        title: 'Filter',
                        users: users,
                        filter: true
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    }else{
        userList.find().select('first_name age avatar location match_date')
            .exec()
            .then(function (users) {
                res.render('overview', {
                    title: 'Matches',
                    users: users,
                    filter: false
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    }
});


module.exports = overview;
