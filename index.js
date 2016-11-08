var express = require('express');
var cors = require('cors');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var stenoCtrl = require('./controllers/stenoCtrl');
var passport=require("passport");
var app = express();

var methodOverride=require('method-override');
// Added 110216
// app.use(session(config));
// app.use(passport.initialize());
// app.use(passport.session());

//config files 11_04_16
var db = require('./config/db');
//port
var port=process.env.PORT || 8080;
//

app.use(cors());

app.use(bodyParser.json());
//11_04_16
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// app.use(bodyParser.urlencoded());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
//11_04_16
app.use(express.static(__dirname + '/public'));

require('./routes')(app);
//app.use(session(config));
// Added 110216
// app.post('/login', passport.authenticate('local-signup'), userCtrl.create);
// app.get('/current', userCtrl.getMe);
//
app.post('/stenotype', stenoCtrl.create);
app.get('/stenotype', stenoCtrl.read);

app.put('/stenotype/:id', function(req, res) {
    for (var i = 0; i < stenoList.length; i++) {
        if (stenoList[i].key == req.params.id) stenoList[i] = req.body;
    }
});

app.delete('/stenotype/:id', stenoCtrl.delete);


mongoose.connect("mongodb://localhost:27017/stenoDB");
mongoose.connection.on('error', console.error.bind('console error'));
mongoose.connection.once("open", function() {
    console.log("connected on mongo");

})

app.listen(port, function() {
    console.log("hosted on" +port);
});
exports=module.exports=app;
 