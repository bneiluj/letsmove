(function() {
  'use strict';


  // Declare app level module which depends on filters, and services
  angular
    .module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/services', {templateUrl: 'partials/services.html', controller: "Services"});
      $routeProvider.when('/from', {templateUrl: 'partials/from.html'});
      $routeProvider.otherwise({redirectTo: 'from'});
    }]);
})();(function () {
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

})();(function () {
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

})();(function () {
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

})();(function() {
  'use strict';

  /* Directives */


  angular.module('myApp.directives', []).
    directive('appVersion', ['version', function(version) {
      return function(scope, elm, attrs) {
        elm.text(version);
      };
    }]);

})();
(function () {
  'use strict';

  /* Filters */

  angular.module('myApp.filters', []).
    filter('interpolate', ['version', function(version) {
      return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      }
    }]);
})();(function() {
  'use strict';

  /* Services */


  // Demonstrate how to register services
  // In this case it is a simple value service.
  angular.module('myApp.services', []).
    value('version', '0.1');
})();