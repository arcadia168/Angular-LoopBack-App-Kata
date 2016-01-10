angular.module('app').controller('RateContentController', ['$scope', 'Content', function ($scope,
                                                                                         Content) {
  //first retrieve all content items from backend and attach to scope.
  Content.find()
    .$promise
    .then(function(content) {
      $scope.content = content;
    });

  $scope.updateRating = function(contentItem) {
    //use service to update the rating of the show on the backend server
    contentItem.$save();  //returns a promise
  };

}]);
