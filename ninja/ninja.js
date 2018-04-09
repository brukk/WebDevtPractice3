$(document).ready(function(){
    // $("h2").on("mouseenter" ,function(){
    //    $("#middle article").slideToggle(2000)
    //    .slideDown(1200);
        
    // });

    $("h2").on("click", function(){
        $("#bottom article p").animate({
            opacity:"0.4",height:"toggle"}
        ,2000)
    });



})