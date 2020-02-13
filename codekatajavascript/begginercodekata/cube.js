const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(cube(data));
});
function cube(data){
  var A = parseInt(data);
  var N = Math.pow(A,3);
  return N
}
