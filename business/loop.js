var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer",
                    "lamp", "stapler", "computer",  "computer"]  
var comp=[];
var compLen=0;
          for(var i=0; i<officeItems.length;i++){
               if(officeItems[i]==="computer"){
                   comp.push(officeItems[i])
                   var compLen=comp.length
               }
          }  
          console.log(compLen)

//***********************************************************************
var people = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
 
  //to log to the console "old enough" if they are 18 or older,
  // and "not old enough" if thy aren't 18.

for (var i=0; i<people.length; i++){
  if(people[i].age>=18){
    console.log("old enough")
  }else if(people[i].age<18){
    console.log("not old enough")
  }
}


