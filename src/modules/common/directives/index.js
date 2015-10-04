'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('endlessScroll', require('./endlessScroll.directive.js'));
