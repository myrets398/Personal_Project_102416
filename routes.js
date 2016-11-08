var Stenotype = require('./models/stenotype_model');
module.exports = function(app){
        // handle things like api calls
        // authentication routes
        app.get('/api/stenotype', function(req, res) {


            // use mongoose to get all stenotypes in the database
            Stenotype.find(function(err, stenotype) {
                // if there is an error retrieving, send the error. 
                               // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json(stenotype);
            });
        });
// route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)
// frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); 
            // load our public/index.html file
        });
};
