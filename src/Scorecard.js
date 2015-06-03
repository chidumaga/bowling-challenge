function Scorecard(){
  this.score = 0;
}

Scorecard.prototype.calculateScore = function(arg) {
  this.score = arg;
};