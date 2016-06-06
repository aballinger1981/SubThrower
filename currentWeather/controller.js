(function () {
    angular
        .module('subThrower')
        .controller("subThrowController", ['$scope', '$http', '$mdDialog', currentWeather]);

    function currentWeather($scope, $http, $mdDialog) {
        // intial default weather
        // getWeatherByZip(19067, function (data) {
        //   $scope.temperature = 1.8 * (data.main.temp - 273) + 32;
        //   $scope.humidity = data.main.humidity;
        //   $scope.dewpoint = ((1.8 * (data.main.temp - 273) + 32) - ((100 - data.main.humidity) / 5));
        // });

        $scope.changeZip = function () {
            var options = {
                templateUrl: 'zipDialog/view.html',
                scope: $scope,
                preserveScope: true,
            };
            $mdDialog
                .show(options)
                .finally(function () {
                    options = undefined;
                });
        }

        if (typeof $scope.zip === 'undefined') {
            $scope.changeZip();
        }

        // update with zip code provided
        $scope.updateWeather = function (zip) {
            getWeatherByZip(zip, function (data) {
                $scope.temperature = 1.8 * (data.main.temp - 273) + 32;
                $scope.humidity = data.main.humidity;
                $scope.dewpoint = ((1.8 * (data.main.temp - 273) + 32) - ((100 - data.main.humidity) / 5));
            });
            $mdDialog.hide(confirm, "updated");
        };

        function getWeatherByZip(zip, callback) {
            zip = zip ? zip : 19067;

            $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=70de8e260c0bef512c9c05dbf2058280').then(function (response) {
                callback(response.data);
            }, function () {
                alert('An error has occured.');
            });
        };

    };
});