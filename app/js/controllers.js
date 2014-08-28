'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('dashboardCtrl', ['$scope','$rootScope','API', function($rootScope, $scope) {
       /* $scope.dashboardItem = [{
            "id": 1,
            "title": "Trading Station",
            "type": "normal-box",
            "order": "1",
            "url": "/tradingStation"
        }, {
            "id": 2,
            "title": "Jarl",
            "type": "normal-box",
            "order": "2",
            "url": "/jarl"
        }, {
            "id": 3,
            "title": "Risk",
            "type": "normal-box",
            "order": "3",
            "url": "/risk"
        }, {
            "id": 4,
            "title": "Counterparties",
            "type": "normal-box",
            "order": "4",
            "url": "/cpty"
        }, {
            "id": 5,
            "title": "Users",
            "type": "normal-box",
            "order": "5",
            "url": "/user"
        }, {
            "id": 6,
            "title": "Prices",
            "type": "graph-box",
            "order": "6",
            "url": "/price"
        }, {
            "id": 7,
            "title": "Currencies",
            "type": "normal-box",
            "order": "7",
            "url": "/currencies"
        }, {
            "id": 8,
            "title": "Settings",
            "type": "normal-box",
            "order": "8",
            "url": "/settings"
        }];
        $scope.rectangles = [
            new Rectangle(200, 200, "blue"),
            new Rectangle(500, 900, "black")

        ];
        */
  }])

.controller('dashboardCtrlAPI', ['$scope','$rootScope','$location', '$routeParams','API', function($rootScope, $scope, API) {
    API.getDashboard()
        .success(function (data, status, headers, config) {
          /* alert(data);
           alert(JSON.stringify(data));*/
           $scope.dashboardItems = data;

        })
        .error(function (data, status, headers, config) {
            alert(data + " Error");
        });
        $scope.show = function(item, $location, $routeParams){
            if(view === 'instance'){
                $location.url('/dashboard'+item.url+'/')
            }
           alert(view);
        }
}])

.controller('instanceGroupCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.instanceGroup = $routeParams.instanceGroup;
        $scope.name = 'instanceGroupCtrl';
        $scope.params = $routeParams;
}])

.controller('instanceIdCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.listId = $routeParams.listId;
        $scope.name = 'instanceIdCtrl';
        $scope.params = $routeParams;
}])
    .controller('ExampleController', ['$scope', function($scope) {
        $scope.items = ['settings', 'home', 'other'];
        $scope.selection = $scope.items[0];
    }])