'use strict';

module.exports = /*@ngInject*/
    function photoListController($scope, photoService) {
        $scope.loaded = false;
        $scope.images = [];
        var imagesPromise = photoService.getAllImages(),
            _loadedImages = [],
            _shownImages = 0,
            _step = 15;

        $scope.addImages = function() {
            for (var i = _shownImages; (i < _shownImages + _step) && (i < _loadedImages.length); i++) {
                $scope.images.push(_loadedImages[i]);
            }
            _shownImages += _step;
        };

        imagesPromise.then(function (images) {
            _loadedImages = images;
            $scope.loaded = true;
            $scope.addImages();
        });
    };
