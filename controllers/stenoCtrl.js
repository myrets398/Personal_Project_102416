// //model, (use mongoosedb, code is different from mongodb and mongojs
// .service('User', function(stenotypeEmporium) {
//             function User(firstName, lastName, role, organisation) {
//                 // Public properties, assigned to the instance ('this')
//                 this.firstName = firstName;
//                 this.lastName = lastName;
//                 this.role = role;
//                 this.organisation = organisation;
//             }
//    //Public method, assigned to prototype
//   User.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
//   };
//  //  * Private property
//   var possibleRoles = ['admin', 'editor', 'guest'];
//   //  * Private function
//   function checkRole(role) {
//     return possibleRoles.indexOf(role) !== -1;}
// // Static property using copy to prevent modifications to private property
// User.possibleRoles = angular.copy(possibleRoles);
//
// //  Static method, assigned to class
// // Instance ('this') is not available in static context
//   User.build = function (data) {
//     if (!checkRole(data.role)) {
//       return;
//     }
//     return new User(
//       data.first_name,
//       data.last_name,
//       data.role,
//       Organisation.build(data.organisation) // another model
//     );
//   };
// // Return the constructor function
//   return User;
// });
            // **
            // *not right 1 line below**
            //var stenoModel= build('model0');
var stenoModel = require('./../models/stenoModel');
//create method (.save),read(.find,.exe)update(findById),delete(findbyId.remove)
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
                    stenoModel.mfindByIdAndUpdate.(req.params.id, req.body, function(err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(result);
                        }
                    });
                },
                delete: function(req, res) {
                  stenoModel.mfindByIdAndRemove.(req.params.id, req.body,  function(err, result) {
                      if (err) {
                          res.send(err);
                      } else {
                          res.send(result);
                      }
                  });
                }
            }
