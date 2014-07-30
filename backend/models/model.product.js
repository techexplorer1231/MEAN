/**
* Created with MEAN.
* User: dreamweaver1231
* Date: 2014-07-25
* Time: 08:58 PM
* To change this template use Tools | Templates.
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name: {
		type : String,
		unique : true
	},
	description: {
		type : String,
		required : true
	}
});
module.exports = mongoose.model('Product', ProductSchema);
