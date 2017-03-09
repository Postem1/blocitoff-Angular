(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: 'templates/landing.html',
                controller: "MainCtrl as main"
            })
            .state('history', {
                url: '/history',
                templateUrl: 'templates/history.html',
                controller: 'HistoryCtrl as history'
            });
    }
    
    angular
        .module('blocitoff', ['ngAnimate', 'ui.router', 'firebase'])
        .config(config)
})();