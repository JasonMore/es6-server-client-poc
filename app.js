"use strict";

let express = require('express');
let app = express();
let router = new express.Router();
let join = require("path").join;

//router.use(express.static(join(__dirname, "app")));

app.use('/app', express.static('app'));

//app.get('/', (req, res) => res.render('index'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/api/derp', (req, res) => res.json({foo: 'bar'}));


var server = app.listen(3000, () => {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});