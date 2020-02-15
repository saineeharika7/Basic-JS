const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    userInput.push(data);
});
inp.on("close",() => {
    console.log(fun(userInput));
});
function fun(data){
    var array = data[0].split(' ');
    var a = parseInt(array[0]);
    var b = parseInt(array[1]);
    var c =a<<b;
    return c
    
}
