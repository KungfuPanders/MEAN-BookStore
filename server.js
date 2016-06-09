var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));
app.use(express.static(__dirname + '/public'));

//mongoose.connect('mongodb://localhost/multivision');
//var db = mongoose.connections;
//db.on('error', console.error.bind(console, 'connection error ...'));
//db.once('open', function callback() {
//    console.log('multivision db opend');
//});

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
})

app.get('*', function (req, res) {
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listen on port ' + port + ' ...');


//process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//var mongoose = require('./config/mongoose'),
//    express = require('./config/express');

//var db = mongoose();
//var app = express();
    
//app.listen(1234);
//module.exports = app;

//console.log('Server running at http://localhost:1234');