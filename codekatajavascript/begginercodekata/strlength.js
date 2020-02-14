const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(string(data));
});
function string(data){
var A=data.split(" ").join('');
A=A.length
return A
}
