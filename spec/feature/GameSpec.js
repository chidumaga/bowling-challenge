describe('A game of bowling', function(){

  var bowl;
  var scorecard;

  beforeEach(function(){
    bowl = new Bowl();
    scorecard = new Scorecard();
    game = new Game();
  });

  it('consists of a game with regular scoring', function(){

    scorecard.addToScores(bowl.hitPins(4));
    scorecard.addToScores(bowl.hitPins(5));

    game.calculateScore(scorecard, scorecard.scores);

    expect(scorecard.score).toEqual(9);
  })
})