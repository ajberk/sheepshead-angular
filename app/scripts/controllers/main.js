(function(angular) {
  'use strict';

  angular.module('sheepsheadApp').controller('MainCtrl', function ($scope, uuid) {
    $scope.players = [];
    $scope.rounds = [];
    $scope.newPlayer = {name: ""};

    this.addNewPlayer = function(newPlayer) {
      newPlayer.id = uuid();
      if ($scope.players.length < 5) {
        $scope.players.push(newPlayer);
      }

      $scope.newPlayer = {name: ""};
    };

    this.startNewGame = function(players) {
      $scope.rounds = [{players: players, completed: false}];
    };

    this.roundCompleted = function(round, options) {
      round.completed = true;
      round.pickersWon = options.pickersWon;
      $scope.rounds.push({players: $scope.players, completed: false});
    };
  });
})(window.angular);
