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

      $scope.containsRatings = function(rating) {

        var ratingExists = false;

        $scope.content.some(function(contentItem) {
          if (contentItem.rating == rating) {
            return ratingExists = true;
          }
        });

        return ratingExists;
      };
    });
}]);
