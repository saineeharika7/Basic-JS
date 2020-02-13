const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(table(data).join(' '));
});
function table(data){
 var listA = [];
var i = parseInt(data);
var a = 9;
if (i==0){
     console.log("NULL");
}
else{
   
 	for (var j=1;j<i+1;j++){
		listA.push(a*j);
    }
  return listA
}
}
