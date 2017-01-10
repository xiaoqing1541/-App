
angular.module('sortdeil.router', ['sortdeil.controller'])
.config(function($stateProvider) {
 $stateProvider
.state('tab.sortdeil', {
    url: '/sortdeil',
    views: {
      'tab-sortdeil': {
        templateUrl: 'areas/sortdeil/tab-sortdeil.html',
        controller: 'SortdeilCtrl'
      }
    }
  })
});


