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
    var a =parseInt(data[0]);
    var array = data[1].split(' ');
   
      var max = Math.max(...array)
   
    return max
}
