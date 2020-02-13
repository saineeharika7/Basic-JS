const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(evodd(data));
});
function evodd(data){
  var  A = parseInt(data);
if (A == 0){
	return "Zero"
}
else if (A % 2 == 0){
	return "Even"
}
else{
	return "Odd" 
}
    

}
