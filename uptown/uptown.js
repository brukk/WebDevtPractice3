var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];  

//1
function myF(arr){
   return arr.join(" ")
 }
console.log(myF(lyrics));


//3 i=i-1,i+3
function myFun(arr){
    var half=[];
    for(var i=0; i < arr.length;  i=i+2 ){
       
        half.push(arr[i]);
       
    } 
    return myF(half);
}
console.log(myFun(lyrics))

//***************************************************************************

 var zlyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];  
//2 
//reversing the array

function myFu(arr){
    return arr.reverse().join(" ");
}
console.log(myFu(zlyrics));

//4
// reversing every two words
// ??











