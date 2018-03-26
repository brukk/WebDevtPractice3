var firstN=document.getElementById("num1");
var secondN=document.getElementById("num2");
var result1=document.getElementById("result");




function addup(){
    var x,y,r
    x=document.getElementById("num1").value;
    y=document.getElementById("num2").value;
    r=(x*1)+(y*1);
    document.getElementById("answer").innerHTML="the result is: " +r;
}

result1.addEventListener("click", addup);
//******************************************************************

var thirdN=document.getElementById("num3");
var forthN=document.getElementById("num4");
var result2=document.getElementById("subResult");
var answer2=document.getElementById("subAnswer");

function subtraction(){
    var x,y,r
    x=thirdN.value;
    y=forthN.value;
    r=(x*1)-(y*1);
    answer2.innerHTML="the result is: " + r;
}
result2.addEventListener("click",subtraction);
//****************************************************************

function multiply(){
    var x,y,r;
    x=document.getElementById("num5").value;
    y=document.getElementById("num6").value;
    r=(x*1)*(y*1);
    document.getElementById("multiAnswer").innerHTML=
                   "the result is: " + r;
}
document.getElementById("multiResult").addEventListener("click",multiply);


