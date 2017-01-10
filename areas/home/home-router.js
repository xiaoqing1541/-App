
angular.module('home.router', ['home.controller'])
.config(function($stateProvider) {
 $stateProvider
.state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'areas/home/tab-home.html',
        controller: 'HomehCtrl'
      }
    }
  })
});
