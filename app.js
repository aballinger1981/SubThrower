(function () {
  var app = angular.module("SubThrower", []);

  app.controller("subThrowController", ['$scope', '$http', function ($scope, $http) {
    $scope.temperature = '79';
    //var zip = $scope.zip;
    
    
    getTempByZip(19067, function (temperature) {
      $scope.temperature = temperature;
    });
    
    $scope.getTempByZip = function (zip) {
      getTempByZip(zip, function (temperature) {
        $scope.temperature = temperature;
      });
    };
    
    function getTempByZip(zip, callback) {
      zip = zip ? zip : 19067;

      $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=70de8e260c0bef512c9c05dbf2058280').then(function (response) {
        var temp = response.data.main.temp;
        var temperature = 1.8 * (temp - 273) + 32;
        callback(temperature);
      }, function () {
        alert('An error has occured.');
        callback(2);
      });
    };
  }]);
})();