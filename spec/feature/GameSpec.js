describe('A game of bowling', function(){

  var bowl;
  var scorecard;

  beforeEach(function(){
    bowl = new Bowl();
    scorecard = new Scorecard();
    game = new Game();
  });

  it('consists of a game with regular scoring', function(){

    bowl.hitPins(4);
    bowl.hitPins(5);

    game.calculateScore();

    expect(scorecard.score).toEqual(9);
  })
})