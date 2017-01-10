
angular.module('dash.router', ['dash.controller'])
.config(function($stateProvider) {
 $stateProvider
.state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'areas/dash/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
});
