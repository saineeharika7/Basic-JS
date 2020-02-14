const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    console.log(conversion(data))
});
function conversion(data){
 var decimal = parseInt(data);
var binary = parseInt(decimal, 10).toString(2);
var count = 0;
for(var i=0;i<binary.length;i++){
    if(binary[i]==1){
        count += 1;
    }
}
return count
}
