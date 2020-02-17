const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(fun(data))
});
function fun(data){
    if(data%7==0){
        return "yes"
    }
    else{
        return "no"
    }
    
   
}
