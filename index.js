var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var stenoCtrl = require('./controllers/stenoCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));


app.get("/stenotype", stenoCtrl.read);
app.post('/stenotype', stenoCtrl.create);
app.put('/stenotype/:id', stenoCtrl.update);
app.delete('/stenotype/:id', stenoCtrl.delete);

mongoose.connect("mongodb://localhost:27017/stenodb");
mongoose.connection.once("open",function(){
  console.log("connected on mongo");
});


app.listen(8000, function() {
    console.log("hosted on 8000");
});
