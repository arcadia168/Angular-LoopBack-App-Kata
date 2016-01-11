angular.module('app').controller('UploadContentController',
  ['$scope', '$state', 'FileUploader',
    function ($scope, $state, FileUploader) {
      //controller code here

      $scope.uploader = new FileUploader({
        url: 'api/containers/xml_content_upload/upload'
      });

      $scope.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
      };
      $scope.uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
      };
      $scope.uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
      };
      $scope.uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
      };
      $scope.uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
      };
      $scope.uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
      };
      $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
      };
      $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
      };
      $scope.uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
      };
      $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);

        //once item has successfully been uploaded and returned...
        $state.go('rate-content');

      };
      $scope.uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
      };

      console.info('uploader', $scope.uploader);
    }
  ]
);
