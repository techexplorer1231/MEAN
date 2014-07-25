var express = require('express');
var router = express.Router();
var userController = require('../controllers/controller.users')
/* GET users listing. */
// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// for routes like /users
router.route('/')
    .post(userController.insert)
    .get(userController.list)

// for routes like /users/:user_id
router.route('/:user_id')
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)

module.exports = router;