var g=document.getElementById("gumbasId");
var b=document.getElementById("bobId");
var c=document.getElementById("cheepId");



g.addEventListener("input",getTotal);
b.addEventListener("input",getTotal);
c.addEventListener("input",getTotal);

function getTotal(){
    var x,y,z,r;
    x=g.value;
    y=b.value;
    z=c.value;
    r=(x*5)+(y*7)+(z*11);
    document.getElementById("resultDiv").innerHTML=r;
}

