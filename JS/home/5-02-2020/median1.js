(function() {
 var b=[1,2,5,7,9];
 var c=[2,4,7,8,10];
 var d=b.sort(function(z,y){return z - y});
 var e=c.sort(function(z, y){return z - y});
 var f=Math.floor((d.length)/2);
 var g=(d[f]+e[f]);
 var h=g/2;
 console.log(h);
});
  ();
