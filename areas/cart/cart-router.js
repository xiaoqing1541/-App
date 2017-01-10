angular.module('cart.router', ['cart.controller'])
.config(function($stateProvider) {

 
  $stateProvider
  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'areas/cart/tab-cart.html',
        controller: 'CartCtrl'
      }
    }
  })
});
