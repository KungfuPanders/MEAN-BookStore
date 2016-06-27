angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl' })
        .when('/login', {templateUrl: '/partials/account/login/login', controller: 'loginCtrl'})
        .when('/register', {templateUrl: '/partials/account/register/register', controller: 'registerCtrl'})
        .when('/contact', {templateUrl: '/partials/account/contact/customerCare', controller: 'contactCtrl'})
        .when('/product', {templateUrl: '/partials/books/products', controller: ''})
        .when('/single', {templateUrl: '/partials/carts/viewCart', controller: ''})
});