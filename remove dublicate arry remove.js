var arry = [12, 23, 12, 13, 13, 34, 56 ,34, 56,78, 67, 45];
var arry2 = [];
for(i = 0; i < arry.length; i++){
    var takearry = arry[i];
    var index = arry2.indexOf(takearry);
    if(index == -1){
        arry2.push(takearry);
    }
}
console.log(arry2);