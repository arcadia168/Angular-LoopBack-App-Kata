angular
  .module('app', [
    'ui.router',
    'lbServices',
    'angularFileUpload'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
                                                             $urlRouterProvider) {
    $stateProvider
      .state('rate-content', {
        url: '/rate-content',
        templateUrl: 'views/rate-content.html',
        controller: 'RateContentController'
      })
      .state('content-leaderboard', {
        url: '/content-leaderboard',
        templateUrl: 'views/content-leaderboard.html',
        controller: 'ContentLeaderboardController'
      })
      .state('upload-content', {
        url: '/upload-content',
        templateUrl: 'views/upload-content.html',
        controller: 'UploadContentController'
      });
    $urlRouterProvider.otherwise('rate-content');
  }]);
