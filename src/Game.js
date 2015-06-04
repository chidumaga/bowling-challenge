scorecard = new Scorecard();
bowl = new Bowl();

function Game(){}

Game.prototype.calculateScore = function(scorecard, scores){

  scorecard.score = array_total(scores);

}

function array_total(arr){
  return arr.reduce(function(prev_score, curr_score){
    return prev_score + curr_score;
  });
}