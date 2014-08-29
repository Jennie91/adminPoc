'use strict';

/* Services */

angular.module('myApp.services', [])
    .factory('API', function ($rootScope, $http) {
        var dashboard = "";
        return {
            getDashboard: function () {
                dashboard = $http.get('http://jennie91.apiary-mock.com/dashboard', {
                    method: 'GET'
                });
                return dashboard
            }
        }
});
/*http://mgmt1.apiary-mock.com/dashboard*/