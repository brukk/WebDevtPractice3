var pound=document.getElementById("p");
var kilogram=document.getElementById("k");
var ounce=document.getElementById("o");



function rounding(num){
    return Math.round(num*100)/100;
}

function poundFunc(){
    var poundV = parseFloat(pound.value);
    kilogram.value = rounding(poundV*0.45);
    ounce.value = rounding(poundV*16);
};

function kiloFunc(){
    var kiloV = parseFloat(kilogram.value);
    pound.value = rounding(kiloV*2.2);
    ounce.value = rounding(kiloV*35.274);
};

function ounceFunc(){
    var ounceV = parseFloat(ounce.value);
    pound.value = rounding(ounceV*0.0625);
    kilogram.value = rounding(ounceV*0.0283);
};


pound.addEventListener("input",poundFunc);
kilogram.addEventListener("input",kiloFunc);
ounce.addEventListener("input",ounceFunc);

