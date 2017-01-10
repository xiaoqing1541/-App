
angular.module('sort.router', ['sort.controller'])
.config(function($stateProvider) {
 $stateProvider
.state('tab.sort', {
    url: '/sort',
    views: {
      'tab-sort': {
        templateUrl: 'areas/sort/tab-sort.html',
        controller:'SortCtrl'
      }
    }
  })
});


