var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Client = new Schema({
    name: {
	type: String,
	unique: true,
	required: true		
    }
});

module.exports = mongoose.model('Client', Client);
