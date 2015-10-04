'use strict';

module.exports =
    angular.module('expressly', [
        'ngRoute',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'pascalprecht.translate',

        // html templates in $templateCache
        require('../../../tmp/templates').name,

        // common directives, filters, services
        require('../common').name,

        // modules
        require('./foo').name
    ])
        .config(/*@ngInject*/ function ($translateProvider, $mdIconProvider) {
            $translateProvider.preferredLanguage('en');
            $mdIconProvider.icon("album", "../../assets/img/ic_collections_black_48px.svg", 48);
            $mdIconProvider.icon("menu", "../../assets/img/ic_menu_white_48px.svg", 48);
            $mdIconProvider.icon("home", "../../assets/img/ic_home_white_48px.svg", 48);
            $mdIconProvider.icon("google", "../../assets/img/ic_search_white_48px.svg", 48);
            $mdIconProvider.icon("github", "../../assets/img/github.svg", 48);
        });
