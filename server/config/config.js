var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db: 'mongodb://admin:123456@ds015334.mlab.com:15334/bookstore',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: 'mongodb://admin:123456@ds015334.mlab.com:15334/bookstore',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}