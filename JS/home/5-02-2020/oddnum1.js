(function() {
   var b = [];
  var size = prompt();

for(var i=0; i<size; i++) {
    b[i] = prompt('Enter Element ' + (i+1));
}
  for(var j=0;j<b.length;j++){
    if(b[j]%2!=0){
      console.log(b[j]);
    }
    
  }
})
  ();
