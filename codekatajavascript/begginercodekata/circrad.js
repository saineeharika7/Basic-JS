const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(circle(data));
});
function circle(data){
var A =parseFloat(data);
if (A < 0){
	return "Error"
}
else{    
	var C = (2*(22/7)*A) ;
	C =C.toFixed(2);
	return C
}
}
