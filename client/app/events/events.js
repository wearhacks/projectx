'use strict';

angular.module('meanstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html',
        controller: 'EventsCtrl',
        controllerAs:'events'
      });
  });