const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    userInput.push(data);
});
inp.on("close",() => {
    console.log(largest(userInput));
});
function largest(data){
 var A = parseInt(data[0]);
  var B = parseInt(data[1]);
   var C = parseInt(data[2]);
if((A>B) && (A>C)){
  return and}
else if((B>A) && (B>C)){
    return B
}
else{
      return C 
}
}
