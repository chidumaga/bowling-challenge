function Scorecard(){
  this.score = 0;
  this.scores = [];
}

Scorecard.prototype.addToScores = function(bowl){

  this.scores.push(bowl);

}