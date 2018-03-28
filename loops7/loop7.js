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


