var homeApp = angular.module('homeApp', []);

var homeNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

homeApp.controller('homeCtrl', function($scope) {
  return $scope.homeScore = homeNumber;
});