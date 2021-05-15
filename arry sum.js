// var arry  =  [10, 32, 12, 13, 34, 16, 34, 34];
// var arryIndex = arry[0];
// for(i = 0; i < arry.length; i++){
//     var takeArry = arry[i];
//     arryIndex = takeArry + arryIndex; 
//     console.log(arryIndex);
// } 
// console.log(arryIndex);





function test(userInput){
    var arryIn = arry[0];
    for(i = 0; i < arry.length; i++){
        var takeArrys = arry[i];
        arryIn = takeArrys + arryIn;
    }
    return arryIn;
}
var arry = [10, 23, 45, 23, 34, 23, 2];
var rasult = test(arry);
console.log(rasult);