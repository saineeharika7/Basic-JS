const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(data) => {
    console.log(strLength(data));
});
function strLength(data) {
  var length = 0;
  while (data[length] != undefined)
    length++;
  return length;
}
