var shopper={
     shoe:"nike",
     height:184,
     groceryCart:["banana", "orange", "apple","onion"],
     theShopper:function (){
                return "the shopper wears " + this.shoe+ " shoe and he is "+this.height+"cms tall";
     }
}

console.log(shopper.theShopper())