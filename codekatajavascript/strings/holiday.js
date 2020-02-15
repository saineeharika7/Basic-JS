const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    console.log(fun(data))
});
function fun(data){
    var b = ['saturday','sunday'];
   if(b.includes(data)){
       return "yes"
   }
   else{
       return "no"
   }
    
}
