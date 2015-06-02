describe('Scorecard', function(){

  it('can keep track of the user player score', function(){

    var bowl = new Game();
    var scorecard = new Scorecard();

    bowl.hitPins(4);

    expect(scorecard.score).toEqual(4);
  })
})