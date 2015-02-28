'use strict';

angular.module('meanstackApp')
  .controller('ViewProjectCtrl', function ($stateParams,$scope,$http,socket) {
  	$scope.projectName = $stateParams.projectName;
    

    $http.get('/api/projects/url/'+$scope.projectName).success(function(projectData) {
      $scope.project = projectData;
      $scope.comments = projectData.comments;
      socket.syncCustomUpdates('comment',$scope.comments,$scope.project);
    });

    $scope.addComment = function() {
      $scope.comment.project_id = $scope.project._id;
    	$http.post('/api/project/comments',$scope.comment);
      console.log("sending post");
    }


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('comment');
    });
  });
