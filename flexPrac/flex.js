$("a.stack").on("click" ,function(){
    $("article").addClass("stack");
});
   
$("a.grid").on("click" ,function(){
   $("article").removeClass("stack");
});

// var button=$(".lay .toggle");

// button[0].onclick=function(){
//     $("article").toggleClass("open");
//     return false
// }
