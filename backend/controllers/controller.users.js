var userModel = require('../models/model.user')
// create a user (accessed at POST http://localhost:3000/users
exports.insert = function(req, res) {
    var user = new userModel(); // create a new instance of the Product model
    user.name = req.body.name; // set the products name (comes from the request)
    user.save(function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}
// create a user (accessed at GET http://localhost:3000/users
exports.list = function(req, res) {
    userModel.find(function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}
// get the user with that id
exports.read = function(req, res) {
    userModel.findById(req.params.user_id, function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}
// update the user with that id
exports.update = function(req, res) {
    userModel.findById(req.params.user_id, function(err, user) {
        if(err) res.send(err);
        user.name = req.body.name;
        user.save(function(err) {
            if(err) res.send(err);
            res.json({
                message: 'User updated!'
            });
        });
    });
}
// delete the user with that id
exports.delete = function(req, res) {
    userModel.remove({
        _id: req.params.user_id
    }, function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}