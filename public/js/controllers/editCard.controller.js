app.controller('EditCardController', function ($scope, FlashCardsFactory) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.saveCard = function () {
		FlashCardsFactory.updateCard($scope.card)
		.then(function (updatedCard) {
			$scope.$parent.editing = false;
		});
	};
});

// app.config(function($stateProvider){
//      $stateProvider.state(‘edit’, {
//           url: '/edit', 
//           template: '<p>Edit the page</p>'
//           controller: 'EditCardController'
//      });
// });