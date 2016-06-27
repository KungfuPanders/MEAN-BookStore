var mongoose = require('mongoose'),
    messageModel = require('../model/Message');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error ...'));
    db.once('open', function callback() {
        console.log('multivision db opend');
    });
};
exports.mongoMessage = messageModel.showMessage();
exports.mongoMessage = messageModel.mongoMessage;