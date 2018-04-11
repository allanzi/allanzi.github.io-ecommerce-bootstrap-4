angular.module('astec', [])
  .controller('IndexController', ['$http', '$scope', function ($http, $scope) {

    $http.get('./vendor/custom/json/index.json')
      .then(function (response) {
        $scope.products = response.data.products;
        $scope.imagens = response.data.imagens;        
      });
  }]);