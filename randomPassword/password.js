// a function that generates a random password  with a parameter 
    //    defining how long the password should be.

    function password(pwLength){
        var characterSet="123456ABCDEFabcdef!@#$%&";
        var password="";
        for(var i=0; i<pwLength; i++){
            var index=Math.floor(Math.random() * characterSet.length);
            password=password+ characterSet.charAt(index);
        }return password
    }
    console.log(password(8));
    
    
    
    
    