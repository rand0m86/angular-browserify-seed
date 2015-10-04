'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('photoService', require('./photo.service'));
