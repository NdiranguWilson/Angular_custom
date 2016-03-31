/**
 * Cytonn Technologies
 * @author Ndirangu Wilson <wndirangu@cytonn.com>
 */
var myapp = angular.module('countryRegions', ["ui.router"]);
myapp.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("world");

  $stateProvider
    .state('world', {
      url: "/world",
      templateUrl: "world.html"
    })
    .state('world.list', {
      url: "/list",
      templateUrl: "world.list.html",
      controller: function($scope, $http) {
        $scope.items = ["Loading the countries"];
        $scope.populations = ["Population of the city"];

        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/all'
          })
          .success(function(data, status) {
            //$scope.items = [];
            countries = [];

            population = [];

            for (i = 0; i < data.length; i++) {
              countries.push(data[i].name);

              population.push(data[i].population);
            }
            $scope.items = countries;

            $scope.populations = population;

            console.log($scope.populations);






          })
          .error(function(data, status) {
            alert(" Sorry We couldn't find a movie with that title!");
          });
      }
    })
    .state('africa', {
      url: "/africa",
      templateUrl: "africa.html"
    })
    .state('africa.list', {
      url: "/list",
      templateUrl: "africa.list.html",
      controller: function($scope, $http) {
        $scope.items = ["Loading african countries ....."];
        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/region/africa'
          })
          .success(function(data, status) {
            //$scope.items = [];
            countries = [];

            population = [];

            for (i = 0; i < data.length; i++) {
              countries.push(data[i].name);

              population.push(data[i].population);
            }
            $scope.items = countries;

            $scope.populations = population;

            console.log($scope.populations);

          })
          .error(function(data, status) {
            alert(" Sorry cant find African countries for now !");
          });
      }
    })

  .state('asia', {
      url: "/asia",
      templateUrl: "asia.html"
    })
    .state('asia.list', {
      url: "/list",
      templateUrl: "asia.list.html",
      controller: function($scope, $http) {

        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/region/asia'
          })
          .success(function(data, status) {
            //$scope.items = [];
            countries = [];

            population = [];

            for (i = 0; i < data.length; i++) {
              countries.push(data[i].name);

              population.push(data[i].population);
            }
            $scope.items = countries;

            $scope.populations = population;

            console.log($scope.populations);






          })
          .error(function(data, status) {
            alert(" Sorry We couldn't find Asian countries!");
          });
      }
    });
});
