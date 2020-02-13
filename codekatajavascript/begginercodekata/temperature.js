const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(temp(data));
});
function temp(data){
   var  A=parseInt(data);
var B=(A*(9/5))+32 ;
 return B.toFixed(2)
}
