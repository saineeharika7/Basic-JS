function getLastElement(a) {
  var b=a.length;
  if(b!=0) {
    console.log(a[b-1]);
  }
  else {
    console.log("undefined")
  }
};
a=prompt("enter your array")
getLastElement(a)
