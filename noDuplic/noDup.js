//no duplicates
var input="bookkeeper larry";
function myFunc(str){
    var output={
                 nonD:"",
                 dup:""
                };
    for(var i=0; i<str.length; i++){
        if(str.indexOf(str[i])===i){
            output.nonD=output.nonD+str[i];
        }else if(str.indexOf(str[i])!==i){
            output.dup=output.dup+str[i]
        }
    }return output
}
console.log(myFunc("bookkeeper larry"))
