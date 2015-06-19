'use strict';

var calculateScoreForPlayerFunc = function(player, rounds) {
  function playerIsPicker(currentRound) {
    return currentRound.pickerId == player.id;
  }

  function playerIsPartner(currentRound) {
    return currentRound.partnerId == player.id;
  }

  function scoreWhenPickerWon(currentRound) {
    if(playerIsPicker(currentRound)) { return 2; }
    if(playerIsPartner(currentRound)) { return 1; }
    return -1;
  }

  function scoreWhenPickerLost(currentRound) {
    if(playerIsPicker(currentRound)) { return -2; }
    if(playerIsPartner(currentRound)) { return -1; }
    return 1;
  }

  return rounds.reduce(function(currentScore, currentRound) {
    if(currentRound.pickersWon === true) {
      return currentScore + scoreWhenPickerWon(currentRound);
    }
    if(currentRound.pickersWon === false) {
      return currentScore + scoreWhenPickerLost(currentRound);
    }

    return currentScore;
  }, 0);
};

(function(angular) {
  angular.module("sheepsheadApp").factory('calculateScoreForPlayer', function() {
    return calculateScoreForPlayerFunc;
  });
})(window.angular);
