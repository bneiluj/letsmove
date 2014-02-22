(function () {
  'use strict';

  var CONTROLLER_NAME = "Services";

  function controller($scope, $http, $routeParams) {
    $scope.name = CONTROLLER_NAME;
    $scope.services = {}
    $scope.from = $routeParams.from
    $scope.to = $routeParams.to
    
    $http.get('/data/services.json').success(function (data) {
      $scope.services['list'] = data[$routeParams.from+"-"+$routeParams.to];
    });
      
  }

  controller.$inject = ["$scope", "$http", "$routeParams"];

  angular
    .module('myApp')
    .controller(CONTROLLER_NAME, controller);

})();