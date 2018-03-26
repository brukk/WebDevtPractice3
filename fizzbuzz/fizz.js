
//function that returns an array containing the numbers from 1 to 100.
function fizzBuzz(){
    var fizzArr=[];
    for (var i=1;i<=100;i++){
        fizzArr.push(i)
    }return fizzArr
}
console.log(fizzBuzz())


//Q 1,2,3
function fizz(){
    var fizzArr=[];
    for(i=1; i<=100; i++){
        if((i%3===0)&&(i%5===0)){
            fizzArr.push("fizzBuzz");
        }else if(i%5===0){
            fizzArr.push("buzz")
        }else if(i%3===0){
            fizzArr.push("fizz")
        }else{
            fizzArr.push(i)
        }
    }return fizzArr
}
console.log(fizz())