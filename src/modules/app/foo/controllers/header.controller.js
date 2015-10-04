'use strict';

module.exports = /*@ngInject*/
    function headerController($scope, $location) {
        $scope.state = {
            isOpen: false,
            selectedDirection: 'right'
        };

        $scope.loadHome = function() {
            $location.url('/');
        };
    };
