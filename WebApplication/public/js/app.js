var thinkRecursionApp= angular.module('thinkRecursionApp', ['ui.select2']);

'use strict';

var guessBlissApp =
    angular.module('guessBlissApp', [
            'ngSanitize',
            'ngCookies',
            'ngAnimate',
            'ngRoute'
    ]);


guessBlissApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/home', {
          templateUrl: '/partials/home.html?datetime=' + Date().toString(),
          controller: 'HomeController'
      }).
      otherwise({
          redirectTo: '/home'
      });
}]);





