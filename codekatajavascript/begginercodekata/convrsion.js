const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(circle(data));
});
function circle(data){
 var A=parseFloat(data);
var B=(A*1000)
var C=(A*100000)
B=B.toFixed(2);
C=C.toFixed(2);
console.log(B);
return C
}
