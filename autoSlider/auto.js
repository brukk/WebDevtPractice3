$(document).ready(function(){

    $(".slides img:first").addClass("top");

    var change=function(){
        var curr=$(".slides img.top");
        var next=curr.next();

        if(!next.length){
            next=$(".slides img:first");
            next.addClass("top");
            curr.removeClass("top");
        }else{
            next.addClass("top");
            curr.removeClass("top");
        }
    }

    setInterval(change,1400);


});