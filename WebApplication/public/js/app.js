var thinkRecursionApp= angular.module('thinkRecursionApp', ['ui.select2']);

'use strict';

var guessBlissApp =
    angular.module('guessBlissApp', [
            'ngSanitize',
            'ngCookies',
            'ngAnimate',
            'ngRoute',
            'ui.bootstrap'
    ]);


guessBlissApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/home', {
          templateUrl: '/partials/home.html?datetime=' + Date().toString(),
          controller: 'HomeController'
      }).
      when('/', {
          templateUrl: '/partials/home.html?datetime=' + Date().toString(),
          controller: 'HomeController'
      }).
      when('/error', {
          templateUrl: '/partials/error.html?datetime=' + Date().toString(),
          controller: 'ErrorController'
      }).
      otherwise({
          redirectTo: '/'
      });
}]);





