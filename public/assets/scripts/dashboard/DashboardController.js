define(function(require, module, exports) {
    'use strict';

    var ng = require('angular');
    var dashboard = require('./module');
    var $ = require('jquery');

    dashboard.controller('DashboardController', [
        '$rootScope',
        '$scope',
        '$state',
        'Projects',
        'TeamMembers',
        '$q',
        function(
            $rootScope,
            $scope,
            $state,
            Projects,
            TeamMembers,
            $q
        ) {

            // $scope.projects = Projects.list();
            console.log('DashboardController');

            /**
             *
             */
            var getProjects = function() {
                Projects.list()
                    .then(processProjects)
                    .then(mapProjectsToScope);
            };

            /**
             *
             */
            var getTeamMembers = function() {
               TeamMembers.list()
                   .then(processTeamMembers)
                   .then(mapTeamMembersToScope);
            };


            /**
             *
             * @param response
             * @returns {*}
             */
            var processProjects = function(response) {
                console.log('processProjects', response);
                return response;
            };


            var processTeamMembers = function(response) {
                console.log('processTeamMembers', response);
                return response;
            };

            /**
             *
             * @param response
             */
            var mapProjectsToScope = function(response) {
                console.log('MapProjectsToScope', response);
                $scope.projects = response.data;
            };

            /**
             *
             */
            var mapTeamMembersToScope = function(response) {
                console.log('MapTeamMembersToScope', response);
                $scope.teamMembers = response.data;
            };




            function init() {
                getProjects();
                getTeamMembers();
            }


            init();
        }
    ]);
});