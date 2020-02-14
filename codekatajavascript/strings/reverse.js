const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    console.log(reverse(data));
});
    function reverse(data){
     return data.split('').reverse().join('') 
     
    }
