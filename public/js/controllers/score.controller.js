app.controller('StatsController', function ($scope, ScoreFactory) {
    $scope.scores = ScoreFactory.scores;
});


// app.config(function($stateProvider){
//      $stateProvider.state(‘stats’, {
//           url: '/stats', 
//           template: '<p>score!</p>'
//           // controller: 'StatsController'
//      });
// });
