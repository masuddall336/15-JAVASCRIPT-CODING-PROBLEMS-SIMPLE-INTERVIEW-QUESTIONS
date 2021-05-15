var a = 12.4475;
var raslut = Math.ceil(a);
var raslut2 = Math.floor(a);
var raslut3 = Math.round(a);
var raslut4 = Math.random(a) * 10;
var roundRasult = Math.round(raslut4);

console.log(raslut);
console.log(raslut2);
console.log(raslut3);
console.log(raslut4);
console.log(roundRasult);

for(i = 1; i <=10; i++){
    var change = Math.random() * 6;
    var ras = Math.round(change);
    console.log(ras);
}