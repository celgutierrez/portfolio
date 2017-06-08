var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var typewriter = require('typewriter-js');
var app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(typewriter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);


app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/projects', function(req, res) {
    res.render('projects');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.listen(process.env.PORT || 3000);
