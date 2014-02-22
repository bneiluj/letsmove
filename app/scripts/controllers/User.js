(function () {
  'use strict';

  var CONTROLLER_NAME = "User";

  function controller($scope) {
    $scope.name = CONTROLLER_NAME;
    $scope.user = {
    	name: 'Luca',
    	surname: 'Lanziani'
    }
  }

  controller.$inject = ["$scope"];

  angular
    .module('myApp')
    .controller(CONTROLLER_NAME, controller);

})();