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


