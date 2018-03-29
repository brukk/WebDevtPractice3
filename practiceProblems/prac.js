//1  Making a function that takes a string and returns that string reversed.
var myArr="Hello World" 

function reversedF(str){
   var splited=str.split("");
   var reversed=splited.reverse();
   var joined=reversed.join("");
   return joined;
}
console.log(reversedF(myArr));

    // short way to make a function that takes a string and returns that string reversed.
var myFunc=function(str){
    return str.split("").reverse().join("");
}
console.log(myFunc(myArr));