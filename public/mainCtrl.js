angular.module("stenotypeEmporium").controller(
    "mainCtrl",
    function($scope, $firebaseArray) {
        var partyRef = new Firebase('https://new-a0369.firebaseio.com/thingstodo');
        $scope.thingstodo = $stenotypeArray(emporiumRef);

        $scope.addNewThing = function(newthing) {
            $scope.thingstodo.$add(newthing);
        }
        $scope.editThing = function(editedthing) {
            $scope.thingstodo.$save(editedthing);
        };
        $scope.deleteThing = function(thingtodelete) {
            $scope.thingstodo.$remove(thingtodelete);
        };
        //get//post//put//delete}
    })
