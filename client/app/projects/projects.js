'use strict';


//create Projects
angular.module('meanstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });


//view a specific projects
angular.module('meanstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewProjects', {
        url: '/projects/:projectName',
        templateUrl: 'app/projects/viewproject.html',
        controller: 'ViewProjectCtrl'
      });
  });