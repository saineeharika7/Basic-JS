const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(fact(data));
});
var factorial = 1;
function fact(data){
var N=parseInt(data);
for (var i=1;i<=N;i++){
  factorial = factorial*i ;
}
return factorial
}
  
  
