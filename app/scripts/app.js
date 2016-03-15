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
        redirectTo: 'about'
      })
      .when('/about', {
        templateUrl: 'scripts/about/aboutView.html'
        //controller: 'AboutCtrl',
        //controllerAs: 'about'
      })
      .when('/skills', {
        templateUrl: 'scripts/skills/skillsView.html'
        //controller: 'AboutCtrl',
        //controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
