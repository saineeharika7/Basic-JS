const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(string(data));
});
function string(data){
var listA = [1,3,5,7,8,10,12];
var listB =[4,6,9,11];
var i = parseInt(data);
if(listA.includes(i)){
 return 31
}
else if (listB.includes(i)){
    return 30
} 
     else if (i == 2){
       return 28
     }
       else{
        return 'Error'
       }
}
