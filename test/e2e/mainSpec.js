var _ = require('lodash');

describe('The Sheepshead Counter', function() {
  var players = ['Jason', 'Freddie', 'Greta', 'Hans', 'Yoda'];

  it('tracks a round of sheepshead', function() {
    browser.get('http://localhost:9000');

    _.each(players, function(playerName) {
      $('[placeholder="New Player Name"]').sendKeys(playerName);
      element(by.buttonText('Add Player')).click();
    });

    element(by.buttonText('Start New Game')).click();

    element(
      by.cssContainingText('.round .player', 'Freddie')
    ).$('.picker').click();

    element(
      by.cssContainingText('.round .player', 'Greta')
    ).$('.partner').click();

    element(by.buttonText('Pickers Won')).click();
  });
});
