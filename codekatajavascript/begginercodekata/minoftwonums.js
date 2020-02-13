const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    userInput.push(data);
});
inp.on("close",() => {
    console.log(minimum(userInput));
});
function minimum(data){
var array = data[0].split(' ');
var c = Math.min(array[0],array[1]);
  return c;
}
