'use strict';

module.exports = /*@ngInject*/
  function imageController($scope, $routeParams, photoService) {
      $scope.imageId = $routeParams.id;
      $scope.loaded = false;

      var imagePromise = photoService.getImage($scope.imageId);
      imagePromise.then(function (image) {
          $scope.image = image;
          $scope.loaded = true;
      });
  };
