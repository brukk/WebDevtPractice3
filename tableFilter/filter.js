$(document).ready(function(){

    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();

      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        // The return value of the indexOf() function is the numeric 
          // index of that value in the target value, or -1 if it's  
            // not found. So for each value that we're looking for, 
              // we'd want to check if it's index is > -1 
                // (which means it's found in the string(value)). 
        
      });
    });

    $("button").on("click", function(){
      $("p").hide(800,"swing");
    })

    


});