'use strict';

/**
 * @ngdoc overview
 * @name portoApp
 * @description
 * # portoApp
 *
 * Main module of the application.
 */
angular
  .module('portoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/mainView.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
