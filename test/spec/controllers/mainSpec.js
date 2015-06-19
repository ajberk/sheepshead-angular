'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(module('sheepsheadApp'));

  var MainCtrl,
    scope;

  var fakeUuid = function() { return "some-dumb-uuid" };

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      uuid: fakeUuid
    });
  }));

  describe("when adding players to the game", function() {
    it("they are added to a list", function() {
      expect(scope.players).toEqual([]);
      MainCtrl.addNewPlayer({name: 'Jason'});
      expect(scope.players[0].name).toEqual('Jason');
    });

    it("the new player is given an identifier", function() {
      MainCtrl.addNewPlayer({name: 'Jason'});
      expect(scope.players[0].id).toEqual('some-dumb-uuid');
    });

    it("will not be added to the list if it is more than 5 players", function() {
      for(var i=0; i<6; i++) {
        MainCtrl.addNewPlayer({name: 'Jason'});
      }

      expect(scope.players.length).toEqual(5);
    });

    it("clears out the new player's name", function() {
      scope.newPlayer = {name: 'Jason'};
      MainCtrl.addNewPlayer('Jason');
      expect(scope.newPlayer).toEqual({name: ''});
    });
  });

  describe("when starting a new game", function() {
    it("starts a game with a single new round", function() {
      var players = [{name: 'Bob'}, {name: 'Jim'}, {name: 'John'}];

      expect(scope.rounds).toEqual([]);
      MainCtrl.startNewGame(players);

      var newRound = scope.rounds[0];
      expect(newRound.players).toEqual(players);
      expect(newRound.completed).toEqual(false);
    });
  });

  describe("completing a round", function() {
    it("marks the round as completed", function() {
      var round = {completed: false};
      MainCtrl.roundCompleted(round, {pickersWon: true});
      expect(round.completed).toEqual(true);
    });

    it("starts a new round", function() {
      scope.rounds = [{}];
      MainCtrl.roundCompleted(scope.rounds[0], {pickersWon: true});
      expect(scope.rounds.length).toEqual(2);
    });

    it("stores who won the round", function() {
      var round = {};
      MainCtrl.roundCompleted(round, {pickersWon: true});
      expect(round.pickersWon).toEqual(true);
    });
  })
});
