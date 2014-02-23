(function () {
  'use strict';

  var CONTROLLER_NAME = "User";

  function controller($scope, $http) {
    $scope.name = CONTROLLER_NAME;
    var config = {
    	name: 'Luca',
    	surname: 'Lanziani'
    }

    $http.get('/data/from_to.json').success(function (data) {
      config["tos"] = data["to"];
      config["froms"] = data["from"];

      console.log(data)
    });
    $scope.user = config
  }

  controller.$inject = ["$scope", "$http"];

  angular
    .module('myApp')
    .controller(CONTROLLER_NAME, controller);

})();