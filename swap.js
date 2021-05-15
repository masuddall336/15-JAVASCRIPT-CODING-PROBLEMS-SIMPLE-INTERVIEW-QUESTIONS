var a = 10;
var b = 20;
console.log("a:",a,      "b:",b);

var take = a;
a = 20;
b = take;
console.log("a:",a,      "b:",b);



var x = 5;
var y = 7;

x = x + y;
y = x - y;
x = x - y;
console.log("x:",x,      "y:",y);



var p = 10;
var q = 5;
[p, q] = [q, p];
console.log(q, p);