if (5>3){
    console.log("5 is greater than 3")
}


var zcat="cat"
if(zcat.length===3){
   console.log("is the length")
}

var c="cat"
var d="dog"
if(c==d){
    console.log("the same")
}else{
    console.log("not the same")
}


var person={
    name:"Abebe",
    age:12,
}

if(person.age>11){
    console.log(person.name + " is old enough to go")
}else{
    console.log(person.name + " is not allowed")
}

if((person.name[0]=="A")&&(person.age>11)   ) {
    console.log(person.name+ " is allowed")
}else{
    console.log("get lost")
}

if(1==="1"){
    console.log("strict")
}else if(1=="1"){
    console.log("loose")
}else{
    console.log("not equal")
}

if((3*4>10)&&(5+10>10)){
    console.log("yes")
}

var d="dog"
if(typeof d=="string"){
    console.log("correcto")
}

var t="true"
if(typeof t==="boolean"){
    console.log("correct")
}else{
    console.log("idiot")
}

var x
if (typeof x==="undefined"){
    console.log("not defined")
}else{
    console.log("is defined")
}


if (parseInt("b",10)>12){
    console.log("s is greater than 12")
}else {
    console.log("s is less than 12")
}

console.log(parseInt("s",10))

var iter=0
for(var i=0; i<101; i++){
    iter+=i;
 }
    if (iter%2===0){
        console.log("even")
    }else if (iter%2 ==1){
        console.log("odd")
    }























