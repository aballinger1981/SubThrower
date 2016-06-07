(function () {

  var app = angular.module("SubThrower", ['ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate', 'ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/currentWeather', {
        templateUrl: 'currentWeather/view.html',
        controller: 'subThrowController'
      })
      .when('/temp', {
        templateUrl: 'temp/view.html',
        controller: 'subThrowController'
      });
    // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
  });

})();