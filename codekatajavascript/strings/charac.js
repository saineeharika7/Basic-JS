const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    console.log(conversion(data).join(''));
});
function conversion(data){
var array = [];
array.push(data[0]);
array.push(data[2]);
return array
}
