
var app = angular.module('flashCards', ['ui.router']);
		
app.config(function($stateProvider){
     $stateProvider.state('all', {
          url: '/', 
          templateUrl: '/template/all.html',
     });
     $stateProvider.state('manage', {
          url: '/manage/:_id', 
          templateUrl: '/template/manage.html',
          controller: function($state,$scope, $stateParams, $http){ 
          	$http.get('/cards/' + $stateParams._id).then(function(res){
          		$scope.card = res.data;
          	});
          }

     });

     $stateProvider.state('manage.edit', {
          url: '/edit', 
          templateUrl: '/template/edit.html',

 			
     });

     $stateProvider.state('manage.delete', {
          url: '/delete', 
          controller: function($state,$scope,$stateParams,$http) {
          	$http.delete('/cards/' + $stateParams._id).then(function(res){
          			$scope.card = res.data;
          			$state.go('all');
          	});
          	
          }
     });

     $stateProvider.state('newCard', {
          url: '/newCard', 
          templateUrl: '/template/newCard.html'
     });
     $stateProvider.state('editCard', {
          url: '/editCard', 
          templateUrl: '/template/all.html'
     });
});

app.value('currentFlashCards', []);

