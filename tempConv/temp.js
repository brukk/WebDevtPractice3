var input1=document.getElementById("celsius");
var input2=document.getElementById("fahrenheit");



function getFara(){
   var fTemp=parseFloat(input1.value*9/5)+32;
   input2.value=fTemp
};

function getcelsius(){
  var cTemp=parseFloat(input2.value-32)*5/9;
  input1.value=cTemp;
};


input1.addEventListener("input", getFara);
input2.addEventListener("input", getcelsius);

