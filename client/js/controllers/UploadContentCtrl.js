angular.module('app').controller('UploadContentController', ['$scope', 'Content', function ($scope,
                                                                                                 Content) {
  //controller code here

  Content.find()
    .$promise
    .then(function(content) {
      $scope.content = content;
    });

}]);
