'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(module('sheepsheadApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe("when adding players to the game", function() {
    it("they are added to a list", function() {
      expect(scope.players).toEqual([]);
      MainCtrl.addNewPlayer('Jason');
      expect(scope.players[0].name).toEqual('Jason');
    });

    it("will not be added to the list if it is more than 5 players", function() {
      for(var i=0; i<6; i++) {
        MainCtrl.addNewPlayer('Jason');
      }

      expect(scope.players.length).toEqual(5);
    });

    it("clears out the new player's name", function() {
      scope.newPlayerName = 'Jason';
      MainCtrl.addNewPlayer('Jason');
      expect(scope.newPlayerName).toEqual('');
    });
  });
});
