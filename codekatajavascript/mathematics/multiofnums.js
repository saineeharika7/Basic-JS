const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(fun(data))
});
function fun(data){
    var a = data.length;
    var b =1;
    for(var i=0;i<a;i++){
         b *=data[i]
    }
    return b
    
   
}
