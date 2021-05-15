var string = "Abdullah al -  Masud";
var pod = 0;
for(i = 0; i < string.length; i++){
    var take = string[i];
    if(take == " " && string[i-1] != " "){
        pod++;
    }
}
console.log(pod);