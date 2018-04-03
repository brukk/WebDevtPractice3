var pound=document.getElementById("p");
var kilogram=document.getElementById("k");
var gram=document.getElementById("g");



function rounding(num){
    return Math.round(num*1000)/1000;
}

function poundFunc(){
    var poundV = parseFloat(pound.value);
    kilogram.value = rounding(poundV*0.45);
    gram.value = rounding(poundV*455.6);
};

function kiloFunc(){
    var kiloV = parseFloat(kilogram.value);
    pound.value = rounding(kiloV*2.2);
    gram.value = rounding(kiloV*1000);
};

function gramFunc(){
    var gramV = parseFloat(gram.value);
    pound.value = rounding(gramV*0.0022);
    kilogram.value = rounding(gramV*0.001);
};


pound.addEventListener("input",poundFunc);
kilogram.addEventListener("input",kiloFunc);
gram.addEventListener("input",gramFunc);

