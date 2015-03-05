define(function(require) {
    'use strict';

    var projects = require('./module');

    var controller = function(
        $scope,
        ProjectService,
        $attr
    ) {


    };

    var directive = function() {
        return {
            restrictions: 'E',
            scope: true,
            replace: true,
            transclude: true,
            controller: controller
        };
    };

    projects.directive('dtlProjects', directive);

});