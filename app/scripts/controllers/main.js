'use strict';

angular.module('sheepsheadApp').controller('MainCtrl', function ($scope) {
  $scope.players = [];

  this.addNewPlayer = function(playerName) {
    if ($scope.players.length < 5) {
      $scope.players.push({name: playerName});
    }
  };
});
