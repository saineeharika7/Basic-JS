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
    var a = parseInt(data[0]);
    var b = data[1].split(' ');
    
    var or = (b[0]|b[1]);
    
    
    return or
}
