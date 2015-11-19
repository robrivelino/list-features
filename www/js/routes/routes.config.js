'use strict';

angular
  .module('starter')
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  console.log('testando routesConfig');

  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'templates/list.html'
    })
    .state('list-features', {
      url: '/list/detail/:id',
      templateUrl: 'templates/list-features.html'
    });
}
