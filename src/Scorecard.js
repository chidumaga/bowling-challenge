bowl = new Game();

function Scorecard(){
  this.score;
}

Scorecard.prototype.calculateScore = function(arg) {
  this.score = arg;
};