
angular.module('router', ['dash.router','tabs.router','home.router','sort.router','cart.router','sortdeil.router',
'goodsList.route','details.route'])


.config(function($stateProvider, $urlRouterProvider) {

 
  $urlRouterProvider.otherwise('/tab/dash');

});
