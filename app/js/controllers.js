'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('dashboardCtrlAPI', ['$scope','$rootScope','$location', '$routeParams','API', function($rootScope, $scope, $location, $routeParams, API) {
    API.getDashboard()
        .success(function (data, status, headers, config) {
          /* alert(data);
           alert(JSON.stringify(data));*/
           $scope.dashboardItems = data;

        })
        .error(function (data, status, headers, config) {
            alert(data + " Error");
        });
    $scope.show = function(item, id){
           //redirects to instanceGroup.html



        $scope.dataItems = item;
        $scope.dataHolder = [];
            angular.forEach(item.data, function(key, value){
                $scope.dataHolder.push(key);
            })

           if(item.view === 'instance') {
               $location.path('/dashboard' + item.url + '/' + item.view);
               $scope.instanceId = $routeParams.instanceId;
               $scope.id = id;
               $scope.name = item.title;
               $scope.data = item.data;
           }
           //redirects to listView.html
           if(item.view === 'list') {
               $location.path('/dashboard' + item.url + '/');
               $scope.listId = $routeParams.listId;
               $scope.id = id;
               $scope.name = item.title;
               $scope.data = item.data;
           }
       };
    $scope.showSelectedItem = function(item){
        //show selected item on detailed page

    }
    $scope.showItemDetails = function(item){
        //show selected item
    }
}])


