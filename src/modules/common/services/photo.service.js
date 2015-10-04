'use strict';

module.exports = /*@ngInject*/
    function photoService($http, $log, $q) {
        var apiEndpoint = "http://jsonplaceholder.typicode.com";
        var _handleResponse = function(endpoint) {
            var deferred = $q.defer();
            $http.get(endpoint)
                .success(function success(response) {
                    deferred.resolve(response);
                })
                .error(function error(err) {
                    $log.error(err);
                    deferred.reject(err);
                });
            return deferred.promise;
        };

        return {
            getAllImages: function () {
                return _handleResponse(apiEndpoint + '/photos');
            },
            getAlbumImages: function (albumId) {
                return _handleResponse(apiEndpoint + '/albums/' + albumId + '/photos');
            },
            getImage: function (imageId) {
                return _handleResponse(apiEndpoint + '/photos/' + imageId);
            }
        };
    };
