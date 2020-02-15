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
    var b = data[0].split(' ');
   if(b[0].includes(b[1])){
       return "yes"
   }
   else{
    
    return "no" 
   }
}
