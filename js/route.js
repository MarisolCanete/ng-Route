var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
    .when('/profile', {
        templateUrl : 'pages/profile.html'
    })
    .when('/skills', {
        templateUrl : 'pages/skills.html'
    })
    .when('/about', {
        templateUrl : 'pages/about.html'
    });
});