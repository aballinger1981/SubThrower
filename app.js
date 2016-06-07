(function () {

  var app = angular.module("SubThrower", ['ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate', 'ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
    .when('/currentWeather', {
      templateUrl: 'currentWeather/view.html',
      controller: 'subThrowController'
    })
    .when('/temp', {
      templateUrl: 'temp/view.html',
      controller: 'subThrowController'
    })
  });

})();