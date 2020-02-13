const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    userInput.push(data);
});
inp.on("close",() => {
    console.log(arear(userInput));
});
function arear(data){
    var A=parseInt(data[0]);
var B=parseInt(data[1]);
var C=A*B;
return C
}
