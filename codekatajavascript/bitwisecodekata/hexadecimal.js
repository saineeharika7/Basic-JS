const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    console.log(conversion(data))
});
function conversion(data){
 var binary = parseInt(data);
var hexa = parseInt(binary, 2).toString(16);
return hexa
}
