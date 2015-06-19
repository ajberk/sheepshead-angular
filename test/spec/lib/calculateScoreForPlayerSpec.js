'use strict';

describe("calculating scores for players", function() {
  beforeEach(module('sheepsheadApp'));

  var calculateScoreForPlayerFunc;
  var rounds;
  var playerId = 'abc123';
  var player = {name: 'Bob', id: playerId};

  beforeEach(inject(function(calculateScoreForPlayer) {
    rounds = [];
    calculateScoreForPlayerFunc = calculateScoreForPlayer;
  }));

  describe("when no rounds have been completed", function() {
    it("initially set the player's score to 0", function() {
      rounds.push({pickersWon: undefined});
      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(0);
    });
  });

  describe("When the picker wins the round", function() {
    it("grants the player 2 points if they win as the picker", function() {
      rounds.push({pickersWon: true, pickerId: playerId});
      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(2);
    });

    it("grants the player 1 points if they win as the partner", function() {
      rounds.push({pickersWon: true, partnerId: playerId});
      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(1);
    });

    it("takes away a point from the player if they are not the picker or partner", function() {
      rounds.push({pickersWon: true});

      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(-1);
    });
  });

  describe("When the picker loses the round", function() {
    it("takes away two points from player if they lose as picker", function() {
      rounds.push({pickersWon: false, pickerId: playerId});
      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(-2);
    });

    it("takes away one point from player if they lose as partner", function() {
      rounds.push({pickersWon: false, partnerId: playerId});
      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(-1);
    });

    it("takes grants one point to the player if the picker loses and they are opponents", function() {
      rounds.push({pickersWon: false});
      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(1);
    });
  });

  describe("When the player wins multiple rounds", function() {
    it("then the player should have 2 points as picker and another point as partner", function() {
      rounds.push({pickersWon: true, pickerId: playerId});
      rounds.push({pickersWon: true, partnerId: playerId});

      var totalScore = calculateScoreForPlayerFunc(player, rounds);
      expect(totalScore).toEqual(2 + 1);
    });
  });
});
