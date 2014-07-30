'use strict'

var userModel = require('../models/model.product')
// create a user (accessed at POST http://localhost:3000/products
exports.insert = function(req, res) {
    var user = new userModel(); // create a new instance of the Product model
    user.name = req.body.name; // set the products name (comes from the request)
	user.description = req.body.description ;
    user.save(function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}
// create a user (accessed at GET http://localhost:3000/products
exports.list = function(req, res) {
    userModel.find(function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}
// get the user with that id
exports.read = function(req, res) {
    userModel.findById(req.params.product_id, function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}
// update the user with that id
exports.update = function(req, res) {
    userModel.findById(req.params.product_id, function(err, user) {
        if(err) res.send(err);
        user.name = req.body.name;
        user.save(function(err) {
            if(err) res.send(err);
            res.json({
                message: 'Product updated!'
            });
        });
    });
}
// delete the user with that id
exports.delete = function(req, res) {
    userModel.remove({
        _id: req.params.product_id
    }, function(err, data) {
        if(err) res.send(err);
        res.json(data);
    });
}
