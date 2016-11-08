angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
    })

    // nerds page that will use the NerdController
    .when('/stenotypes', {
        templateUrl: 'views/stenotype.html',
        controller: 'StenotypeController'
    });

$locationProvider.html5Mode(true);

}]);
