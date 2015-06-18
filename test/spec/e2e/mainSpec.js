describe('The Sheedshead Counter', function() {
  it('allows players to be added', function() {
    browser.get('http://localhost:9000');
    element(by.css('[placeholder="New Player Name"]')).sendKeys('Jason');
    element(by.buttonText('Add Player')).click();

    expect(element(by.css('.players')).getText()).toContain('Jason');
  });
});
