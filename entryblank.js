window.myApp = this.angular.module('myApp', []);

var entry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

myApp.controller('MyCtrl', function($scope) {
    $scope.entries = entry;
});
                         
myApp.filter('groupCount', function() {
    return function(input, count) {
      var rows = [];
      for (var i = 0; i < input.length; i++) {
        if ( i % count == 0) rows.push([]);
         rows[rows.length-1].push(input[i]);
      }
      return rows;
    }
});