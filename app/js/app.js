'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/dashboard', {
          templateUrl: 'partials/partial-dashboardView.html',
          controller: 'dashboardCtrlAPI'
      });
$routeProvider.
      when('/dashboard/:listId', {
          templateUrl: 'partials/partial-listView.html',
          controller: 'dashboardCtrlAPI',
          controllerAs: 'instance'
      });
$routeProvider.
       when('/dashboard/:instanceGroup/:instanceId', {
            templateUrl: 'partials/partial-instanceView.html',
            controller: 'dashboardCtrlAPI',
            controllerAs: 'instance'
       });
  $routeProvider.
      otherwise({
          redirectTo: '/dashboard'
      });
}]);

