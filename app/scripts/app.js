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
            });
    }
    
    angular
        .module('blocitoff', ['ngAnimate', 'ui.bootstrap', 'ui.router', 'firebase'])
        .config(config)
})();