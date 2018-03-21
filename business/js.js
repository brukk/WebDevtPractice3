var shopper={
    shoe:"nike",
    height:184,
    groceryCart:["banana", "orange", "apple","onion"],
    theShopper:function (){
               return "the shopper wears " + this.shoe+ " shoe and he is "+this.height+"cms tall";
    }
}
console.log(shopper.theShopper())

//************************************************** */

var bed={
   confi:true,
   width:2,
   color:"red",
   accessaries:["pillow","sheets","matrice"],
   myBed:function(){
       return "is the bed confortable? the answer is " + this.confi+ " and its color is "+this.color+ 
              " and it has " +this.accessaries;
   }
}

console.log(bed.myBed())

// ************************************************************************
var tv ={
    weight:5,
    width:32,
    highDef:false,
    color:"black",
    thisTv:function(){
        return "this TV is " +this.width+"inch with "+ this.color+" color with "
                + this.features;
    },
    features:["4k","HDMI port", "super slim"]
}

console.log(tv.thisTv())

