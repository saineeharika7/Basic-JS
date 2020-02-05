var a=function(){
var c=prompt();
var d=[]
 for(var i=0;i<c;i++){
 d[i] = prompt("enter element"+(i+1));
     
 };
 console.log(d);
 for(var j=0;j<d.length;j++){
    if(d[j]%2!=0){
    console.log(d[j]);
    };
 };
}
a();
