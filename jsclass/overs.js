class overs{
  constructor(score,wickets){
    this.score = score;
    this.wickets = wickets;
  }
};
var ovr1 = new overs(10,2);
var ovr2 = new overs(20,0);
console.log(ovr1.score);
console.log(ovr1.wickets);
console.log(ovr2.score);
console.log(ovr2.wickets);
