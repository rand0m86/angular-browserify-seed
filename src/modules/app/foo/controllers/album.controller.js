'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $routeParams, photoService) {
        $scope.loaded = false;
        $scope.images = [];
        $scope.albumId = $routeParams.id;

        var imagesPromise = photoService.getAlbumImages($scope.albumId),
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
