var object={name:"Rajinikanth",age:33,haspets:false};
function printAllKeys(n){
var keys=[]
for(i in n)
keys.push(i)
console.log(keys)
}
printAllKeys(object);
