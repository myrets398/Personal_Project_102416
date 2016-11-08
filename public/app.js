angular.module('stenotypeApp', ['ngRoute','appRoutes','mainCtrl','stenoCtrl','StenotypeService']);
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "views/home.html"
        })
//         .state("about", {
//             url: "/about",
//             templateUrl: "views/about.html",
//             controller: "mainCtrl.js"
//         })
//         .state("contact", {
//             url: "/contact",
//             templateUrl: "views/contact.html",
//             controller: "mainCtrl.js"
//         })
//         .state('home.list', {
//             url: '/list',
//             templateUrl: 'partial-home-list.html',
//             controller: function($scope) {
//                 $scope.stenotypes = ['Old', 'Recent', 'Modern'];
//             }
//         })
//         .state('home.paragraph', {
//             url: '/paragraph',
//             template: 'Insert temp.'
//         })
//
//     // {//     {
//     //         test ? /?/
//     //     }
//     // };
//     $urlRouterProvider.otherwise("/home");


});

//['firebase']);
