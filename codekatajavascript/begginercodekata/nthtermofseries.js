const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(term(data));
});
function term(data){
    var N = parseInt(data);
    if (N < 0){
	console.log("Error");
    }
    else if (N == 0){
	console.log(0);
    }
    else
	return (N*N)
    
    
    
}
