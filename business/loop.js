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

//another option to do it using .forEach() method

people.forEach((x)=>{
  if(x.age > 18) {
  console.log("old enough")
}else {
  console.log("not old enough")
}
})


//to log a personalized message to the console

for(var i=0; i<people.length; i++){
  if(people[i].age >= 18){
    console.log(people[i].name+" is old enough to enter")
  }else{
    console.log(people[i].name+ " is not old enough so cant come in")
  }
}

// to check z movie goer is a male or female for an even more personalized message.
for(var i=0; i<people.length; i++){
  if((people[i].gender=="male") && (people[i].age >=18)){
    console.log(people[i].name + " is old enougn but still dont let HIM in")
  }else if((people[i].gender=="female") && (people[i].age >=18)){
    console.log(people[i].name + " is old enough so let HER in")
  }else{
    console.log(people[i].name + " is not old enough so dont let him in")
  }
}

//*********************************************************************************** 

//to log to the console whether or not the light is on at the end.
//the light is off to start with , i.e when sumT=0 z light is "off"

var toggleA=[2, 5, 435, 4, 3];
var sumT=0
for(x=0; x<toggleA.length; x++){
    sumT=sumT+toggleA[x];
}
if(sumT % 2 == 0){
      console.log("light off")
   }else if (sumT%2==1){
      console.log("light on")
   }

