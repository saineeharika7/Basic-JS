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
    var array = data[0].split(" ");
    array.sort()
    return array.join(" ")
}
