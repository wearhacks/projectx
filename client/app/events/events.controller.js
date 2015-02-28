'use strict';

angular.module('meanstackApp')
  .controller('EventsCtrl', function ($scope,$http,User,socket) {
    $scope.message = 'Hello';
    $scope.eventsData = [];
    $scope.users = User.query();


    $http.get('/api/events').success(function(eventsData) {
      $scope.eventsData = eventsData;
      socket.syncUpdates('event', $scope.eventsData); //Sync data via sockets
    });
    
    $scope.addEvent = function() {
    	if($scope.event === '') {
	        return;
	      }
    	$scope.event.creator = [];
    	$scope.event.creator.push($scope.selectedUser._id);
    	$http.post('/api/events',$scope.event);
    	$scope.event = '';
    }


   $scope.$on('$destroy', function () {
      socket.unsyncUpdates('event');
    });

  });
