var Ministur =  100;
var pm = 400;
var bcsCder = 300;

var rasult = Math.max(Ministur, pm, bcsCder);
console.log(rasult);

if(Ministur >  pm){
    if( Ministur > bcsCder){
        console.log("Minister is bigger");
    }else{
        console.log("BCS is bigger");
    }
}else{
    if(pm > bcsCder){
        console.log("PM is bigger.");
    }else{
        console.log("BCS is bigger.");
    }
}
