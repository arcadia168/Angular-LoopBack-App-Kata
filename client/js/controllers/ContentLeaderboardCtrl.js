angular.module('app').controller('ContentLeaderboardController', ['$scope', 'Content', function ($scope,
                                                                                          Content) {
  //retrieve content sorted in descending order by ratings.
  Content.find({
    filter: {
      order: 'rating DESC'
    }
  })
    .$promise
    .then(function(content) {
      $scope.content = content;
    });
}]);
