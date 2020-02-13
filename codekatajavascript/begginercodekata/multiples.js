const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(multiples(data).join(' '));
});
function multiples(data){
   var  N=parseInt(data);
   var listA=[];
for(var i=1;i<4;i++){
     listA.push(i*N);
}
  return listA     

}
