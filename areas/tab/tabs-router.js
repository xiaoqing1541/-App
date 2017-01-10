angular.module('tabs.router', ['tabs.controllers'])
.config(function($stateProvider) {

 
  $stateProvider

 
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'areas/tab/tabs.html'
  });
});
