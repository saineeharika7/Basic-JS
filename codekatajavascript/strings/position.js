const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    console.log(fun(data))
});
function fun(data){
    var A = parseInt(data);
    var b = Math.log2(data&-data)+1;
    return b
    
}
