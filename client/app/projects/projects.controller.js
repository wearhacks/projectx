'use strict';

angular.module('meanstackApp')
  .controller('ProjectsCtrl', function ($stateParams,$scope,$http,socket) {
  	$scope.eventId = $stateParams.eventId;
    $scope.message = 'Hello';


    $http.get('/api/projects').success(function(projectsData) {
      $scope.projects = projectsData;
      socket.syncUpdates('project', $scope.projects); //Sync data via sockets
    });
    $scope.addProject = function(project) {
    	$http.post('api/projects',project);

    }


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('project');
    });
  });
