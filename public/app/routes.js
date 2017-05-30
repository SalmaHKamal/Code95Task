var app = angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html',
                controller: 'homeCtrl',
                controllerAs: 'homeController'
            })
            .when('/about', {
                templateUrl: 'app/views/pages/about.html'
            })
            .when('/register', {
                templateUrl: 'app/views/pages/users/register.html',
                controller: 'regCtrl',
                controllerAs: 'signUp', // is a nickname
                authenticated: false
            })
            .when('/login', {
                templateUrl: 'app/views/pages/users/login.html',
                authenticated: false
            })
            .when('/startProject', {
                templateUrl: 'app/views/pages/projects/projectForm.html',
                controller: 'proCtrl',
                controllerAs: 'projectCtrl'
            })
            .when('/video/:projectCategory/:projectTitle', {
                templateUrl: 'app/views/pages/videos/video.html',
                controller: 'videoCtrl',
                controllerAs: 'videoController'
            })
            .when('/logout', {
                templateUrl: 'app/views/pages/users/logout.html',
                authenticated: true
            })
            .when('/userProfile/:username', {
                templateUrl: 'app/views/pages/users/profile.html',
                controller: 'profileCtrl',
                controllerAs: 'profileCtrl',
                authenticated: true
            })
            .when('/fund/:projectTitle', {
                templateUrl: 'app/views/pages/investor/fund.html',
                controller: 'fundCtrl',
                controllerAs: 'fundCtrl'
            })
            .when('/Category/:categoryName', {
                templateUrl: 'app/views/pages/videos/category.html',
                controller: 'categoryCtrl',
                controllerAs: 'categoryCtrl'
            })
            .when('/facebook/:token', {
                templateUrl: 'app/views/pages/users/social/social.html',
                controller: 'facebookCtrl',
                controllerAs: 'facebook',
                authenticated: false
            })
            .when('/facebookerror', {
                templateUrl: 'app/views/pages/users/login.html',
                controller: 'facebookCtrl',
                controllerAs: 'facebook',
                authenticated: false
            })
            .when('/management', {
                templateUrl: 'app/views/pages/management/management.html',
                authenticated: true,
                permission: ['admin', 'moderator']
            })
            .when('/management/user', {
                templateUrl: 'app/views/pages/management/user.html',
                controller: 'allUserCtrl',
                controllerAs: 'userCtrl',
                authenticated: true,
                permission: ['admin', 'moderator']
            })
            .when('/edit/:id', {
                templateUrl: 'app/views/pages/management/edit.html',
                controller: 'editCtrl',
                controllerAs: 'edit',
                authenticated: true,
                permission: ['admin', 'moderator']
            })
            .when('/searchUser', {
                templateUrl: 'app/views/pages/management/searchUser.html',
                controller: 'allUserCtrl',
                controllerAs: 'userCtrl',
                authenticated: true,
                permission: ['admin', 'moderator']
            })
            .when('/unavilable', {
                templateUrl: 'app/views/pages/users/unavilable.html'
            })
            .when('/management/projects', {
                templateUrl: 'app/views/pages/management/projects.html',
                controller: 'allProjectsCtrl',
                controllerAs: 'projectsCtrl',
                authenticated: true,
                permission: ['admin', 'moderator']
            })
            .when('/viewProject/:id', {
                templateUrl: 'app/views/pages/management/viewProject.html',
                controller: 'viewProjectCtrl',
                controllerAs: 'viewProject',
                authenticated: true,
                permission: ['admin', 'moderator']
            })
            .when('/searchProject', {
                templateUrl: 'app/views/pages/management/searchProject.html',
                controller: 'allProjectsCtrl',
                controllerAs: 'projectsCtrl',
                authenticated: true,
                permission: ['admin', 'moderator']
            })
            .when('/waiting', {
                templateUrl: 'app/views/pages/investor/waitPage.html'
            })
            .when('/project/:projectTitle' , {
                templateUrl : 'app/views/pages/projects/projectData.html',
                controller : 'displayProject',
                controllerAs : 'displayPro'
            })
            .otherwise({ redirectTo: '/' });

        // this is used to remove # symbol in url  so we added $locationProvider
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        // then add <base href="/">  in your html
    });




