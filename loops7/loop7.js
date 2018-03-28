//1
function myFunction(str) {
    for (var i = 0; i < str.length; i++) {
      console.log(str.charAt(i));
    }
  }
  myFunction("great");


//2
function myFunc(str, x) {
    for (i = 0; i < str.length; i++) {
      if (str.indexOf(x) === i) {
        console.log(str.indexOf(x));
        return;
      }     
  }
  console.log("character not found")      
}
  myFunc("abcdefg", "d");
//   myFunc("abcdefg", "h");


//3
function zfunc(arr){
    for(var i=0; i<arr.length; i++){
        if(arr.indexOf(42)==i){
            return
        }
    }console.log("42 is not found")
};

var b=[22,32,42,52,62];
zfunc(b);
// var c=[20,40,60,80,100];
// zfunc(c)


//4 lets find the smallest num
var myArray =[2,3,1,9,8,100,0,-6,5,4];
function myFuncti(arr) {
    var smallestNumber = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
}
console.log(myFuncti(myArray))

//based on Q no 4, lets find the largest num
arr2=[3,6,22,88,100,29,-2];
function getLargest(arr){
    var largest=arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>largest){
           largest=arr[i];
        }
    }return largest
}
console.log(getLargest(arr2))



