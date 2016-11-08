// public/js/services/StenotypeService.js
angular.module('StenotypeService', []).factory('Stenotype', ['$http', function($http) {

    return {
        // call to get all stenotypes
        get : function() {
            return $http.get('/api/stenotypes');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new stenotype
        create : function(stenotypeData) {
            return $http.post('/api/stenotypes', stenotypeData);
        },

        // call to DELETE a stenotype
        delete : function(id) {
            return $http.delete('/api/stenotypes/' + id);
        }
    }

}]);
