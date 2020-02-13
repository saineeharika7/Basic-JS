const readline = require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
const userInput = [];
inp.on("line",(data) => {
    userInput.push(data);
});
inp.on("close",() => {
    console.log(interest(userInput));
});
function interest(data){
    var array = data[0].split(' ');
    var P = parseFloat(array[0]);
    var R = parseFloat(array[1]);
    var T = parseFloat(array[2]);
    var S = ((P*R*T)/100);
    return S.toFixed(2)
}
