var meuApp = angular.module('meuApp', []);

sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }).
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/favoritos', {
        templateUrl: 'templates/favoritos.html',
        controller: 'FavoritosCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
