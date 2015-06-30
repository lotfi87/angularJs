'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
