angular.module ('stenoCtrl', [ ]).controller('StenoCtrl', function($scope) {
    $scope.tagline = 'Stenotype machines for sale ... ... ... ';
});
var stenoModel = require('./../models/stenoModel');
            module.exports = {
                read: function(req, res) {
                    stenoModel.find().exec(function(err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(result);
                        }
                    });
                },
                create: function(req, res) {
                  var stenotype=new stenoModel(req.body);

                    stenotype.save(function(err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(result);
                        }
                    });
                },
                update: function(req, res) {
                    stenoModel.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(result);
                        }
                    });
                },
                delete: function(req, res) {
                  stenoModel.findByIdAndRemove(req.params.id, req.body,  function(err, result) {
                      if (err) {
                          res.send(err);
                      } else {
                          res.send(result);
                      }
                  });
                }
            }
