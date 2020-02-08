var object={name:"Rajinikanth",age:33,haspets:false};
function printAllValues(n){
var values= [];
for(var i in n)
       values.push(n[i])
console.log(values);
}
printAllValues(object);


