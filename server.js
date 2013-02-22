var express = require('express');
var path = require('path');
var http = require('http');
var wine = require('./routes/wines');

var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 8000);
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById); 
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
