var object={name:"ISRO",age:35,role:"scientist"};
function convertobjecttolist(n){
var objj=[]
for(i in n)
     objj.push([i,n[i]])
console.log(objj)
}
convertobjecttolist(object);
