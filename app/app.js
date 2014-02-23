(function() {
  'use strict';


  // Declare app level module which depends on filters, and services
  angular
    .module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/services', {templateUrl: 'partials/services.html', controller: "Services"});
      $routeProvider.when('/from', {templateUrl: 'partials/from.html'});
      $routeProvider.when('/form', {templateUrl: 'partials/form.html'});
      $routeProvider.when('/congrats', {templateUrl: 'partials/congrats.html'})
      $routeProvider.otherwise({redirectTo: 'from'});
    }]);
})();