'use strict';

angular.module('sheepsheadApp').controller('MainCtrl', function ($scope) {
  $scope.players = [];
  $scope.newPlayer = {name: ""};

  this.addNewPlayer = function(newPlayer) {
    if ($scope.players.length < 5) {
      $scope.players.push(newPlayer);
    }

    $scope.newPlayer = {name: ""};
  };
});
