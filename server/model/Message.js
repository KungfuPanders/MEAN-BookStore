var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({message: String});

var Message = mongoose.model('Message', messageSchema);
//var mongoMessage;

exports.showMessage = function () {
    Message.findOne().exec(function(err, messageDoc) {
        //mongoMessage = messageDoc.message;
    });
}

exports.mongoMessage = "Hello MongoDB";
