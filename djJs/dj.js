var box1=document.getElementById("redBox");
var button1=document.getElementById("myButton");
var bodyy=document.getElementById("wrapper");
var textt=document.getElementById("t");


//1
box1.addEventListener("mouseover",function(){
    box1.style.backgroundColor="blue";
});
box1.addEventListener("mouseout",function(){
    box1.style.backgroundColor="white";
});

//2
box1.addEventListener("mousedown",function(){
    box1.style.backgroundColor="red";
})

//3
box1.addEventListener("mouseup",function(){
    box1.style.backgroundColor="yellow";
})

//4
box1.addEventListener("dblclick",function(){
    box1.style.backgroundColor="green";
});

//5
bodyy.addEventListener("wheel",function(){
    bodyy.style.backgroundColor="orange";
})

// var box1=document.getElementById("redBox");
// var button1=document.getElementById("myButton");
// var bodyy=document.getElementById("wrapper");
// var textt=document.getElementById("t");

//6
textt.addEventListener("keyDown", function(){
    x=value.keyCode;
    if (x==80){
        box1.style.backgroundColor="pink"
    }

})
