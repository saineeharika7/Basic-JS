const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(area(data));
});
function area(data){
var a = parseInt(data);
var b = ((0.25)*Math.pow(3,(0.5))*Math.pow(a,2));
 b =b.toFixed(2);
  return b
}
