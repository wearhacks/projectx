
var app = angular.module('feederApp', []);

angular.module('feederApp', [])
  .controller('ProjectController', function($scope,$http) {
    $scope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
    
 	  $http.get("/api/stories").success(function (data, status) {
            $scope.projects = data;
           
        }).error(function (data, status) {
                $scope.response = 'Request failed';
       });
   	console.log($scope.projects);
  });


app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);
/*
var r = new XMLHttpRequest();
var result ="";
r.open("GET", "/api/stories", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  result = r.responseText;
};*/

