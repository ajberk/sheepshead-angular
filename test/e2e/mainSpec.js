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

    expect(element(
      by.cssContainingText('.totals .player', 'Freddie')).getText()
    ).toContain("2");

    expect(element(
      by.cssContainingText('.totals .player', 'Greta')).getText()
    ).toContain("1");

    expect(element(
      by.cssContainingText('.totals .player', 'Jason')).getText()
    ).toContain("-1");

    expect(element(
      by.cssContainingText('.totals .player', 'Hans')).getText()
    ).toContain("-1");

    expect(element(
      by.cssContainingText('.totals .player', 'Yoda')).getText()
    ).toContain("-1");
  });
});
