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


//2 Make a function that takes a string and returns true 
    //if the string could be a number else return false.
var string1=8;    
var function1=function(str){
    if(typeof str=="number"){
        return "true"
    }else{
        return "false"
    }
}
console.log(function1(string1));


//3    Make a function that takes a number and returns true 
    //   if the number is even else return false.
var myNum=8
var isEven=function(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
};
console.log(isEven(myNum));


//4    Making a function that takes an array and returns the average of the array.
var array2=[5,-10,10,20]
var averageF=function(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum=sum+parseInt(arr[i],10);
       var avg=sum/arr.length;
    } return avg
}
console.log(averageF(array2))


//5 
var array1 = ["a", "b", "c"],
    array2 = [1, 2, 3],
    result = [],
    i = Math.min(array1.length, array2.length);
    l = Math.min(array1.length, array2.length);
    
for (i = 0; i < l; i++) {
    result.push(array1[i], array2[i]);
}
result.push(...array1.slice(l), ...array2.slice(l));

console.log(result);


function comboF(arr1,arr2){
    result=[];
    
}






