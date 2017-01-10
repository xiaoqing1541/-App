angular.module('goodsList.route', ['goodsList.controller'])

  .config(function($stateProvider, $urlRouterProvider) {

   
    $stateProvider

      .state('goodsList', {
        // :typeNumeber  参数名称
        url: '/goodsList/:typeNumber',
        templateUrl: 'areas/goodsList/goodsList.html',
        controller: 'GoodsListCtrl'
      })

  });