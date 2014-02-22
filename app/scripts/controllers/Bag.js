(function () {
  'use strict';

  var CONTROLLER_NAME = "BagCtrl",
      MODULE = "myApp";

  function controller($scope) {


    var config = {
      name: CONTROLLER_NAME,
      items: {},
    };

    var toggle = function (service, item) {
      if (config.items[service] == item) {
         delete config.items[service]
      } else {
    	   config.items[service] = item
      }
    }

    $scope.bag = config;
    $scope.toggle = toggle;

  }

  controller.$inject = ['$scope'];

  angular
  .module(MODULE) //retrieves the module
  .controller(CONTROLLER_NAME, controller); //register the controller by name, avoiding minification problems

})();