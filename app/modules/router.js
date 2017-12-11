function config($stateProvider, $httpProvider, $urlRouterProvider) {
    
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = {Accept: "application/json, text/plain, */**"};
        $httpProvider.defaults.headers.post = {"Content-Type": "application/json;charset=utf-8"};
    
        $urlRouterProvider.otherwise('agenda');
    
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'listaTelefonicaCtrl',
                templateUrl: '../index.html'
            });          
    }
    
    angular.module('appAgenda').config(config);