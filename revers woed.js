var string = "Abdullah";
var revers = "";
for(i = 0; i < string.length; i++){
    var take = string[i];
    revers = take + revers;
 
}
   console.log(revers);


function testRevers (namee){
    var fakaString = "";
    for(i = 0; i < namee.length; i++){
        var takeit = namee[i];
        fakaString = takeit + fakaString;
    }
    return fakaString;
}
    var nam= "Masud";
    var ras = testRevers(nam);
    console.log(ras);
