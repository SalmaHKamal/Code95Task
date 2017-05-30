var app = angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html',
                controller: 'homeCtrl',
                controllerAs: 'homeController'
            })
            .otherwise({ redirectTo: '/' });

        // this is used to remove # symbol in url  so we added $locationProvider
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        // then add <base href="/">  in your html
    });




