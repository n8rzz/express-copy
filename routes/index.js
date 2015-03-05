var express = require('express');
var router = express.Router();

// project routes
router.get('/projects', function(req, res) {
    var db = req.db;
    db.collection('projects').find().toArray(function(err, items) {
      res.json(items);
    });
});

router.post('/projects', function(req, res) {
    var db = req.db;
    var name = req.body.name;
    var nickname = req.body.nickname;
    var code = req.body.codes;
    var manager = req.body.manager;
    var role = req.body.role;
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var teamMember = req.body.developer.name;
    var status = req.body.status.name;
    var hours = req.body.hours;
    var type = req.body.type;
    var notes = req.body.notes;

    db.collection('projects').insert({
        "name": name,
        "codes": code,
        "manger": manager,
        "roles": role,
        "startDate": startDate,
        "endDate": endDate,
        "teamMembers":
            {
                "name": teamMember
            },
        "status": status,
        "hours": hours,
        "type": type,
        "notes": notes
    }, function(err, doc) {
        if (err) {
            res.send('There was a problem, oops!');
        } else {
            res.location('/');
            res.redirect('/');
        }
    });
});

router.put('/projects/:id', function(req, res) {
   var db = req.db;
   var projectToUpdate = req.params.id;
   var projectBody = req.body;
    db.collection('projects').update(
        {_id: projectToUpdate(projectBody)},
        {$set:projectBody},
        {safe:true},
        function(err, result) {
            if(err) {
                return next(e);
            }
            res.send((result === 1) ? {msg: 'true'} : {msg: 'error'});
    });
});

router.delete('/projects/:id', function(req, res) {
    var db = req.db;
    var projectToDelete = req.params.id;
    db.collection('projects').removeById(projectToDelete, function(err, result) {
       res.send((result === 1) ? { msg: 'true' } : { msg: 'error: ' + err });
    });
});



// project statuses
router.get('/projectStatus', function(req, res) {
   var db = req.db;
    db.collection('projectStatus').find().toArray(function(err, items) {
       res.json(items);
    });
});



// team member routes
router.get('/team-members', function(req, res) {
    var db = req.db;
    db.collection('teamMembers').find().toArray(function(err, items) {
      res.json(items);
    });
});

module.exports = router;