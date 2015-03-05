define(function(require, module, exports) {
    'use strict';

    var projects = require('./module');

    projects.factory('Projects', [
        '$http',
        '$resource',
        '$q',
        function(
            $http,
            $resource,
            $q
        ) {

            var ProjectService = function() {
                this.resource = $resource('/projects');
            };

            ProjectService.prototype.list = function() {
                console.log('ProjectService.list');

                return $http.get('/projects');
            };

            return new ProjectService();
        }
    ]);
});