//1
for(var i=0; i<10; i++){
    console.log(i)
}

//2
for(var i=9;i>=0;i--){
    console.log(i)
}

//3
var fruit = ["banana", "orange", "apple", "kiwi"]
for(i=0; i<fruit.length; i++){
    console.log(fruit[i])
}

//bronze 1
var zArr=[]
for(var i=0; i<=9; i++){
    zArr.push(i)
}
console.log(zArr)

//bronze 2
for(var i=0; i<=100; i+=2){
    console.log(i)
}

//bronze 3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newF=[]
for(var i=0; i<fruit.length; i+=2){
     newF.push(fruit[i])
}
console.log(newF)

//******************************************************************* 
var people = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah Winfrei",
      occupation: "Entertainer"
    }
  ]
  
//   silver 1
for(var i=0; i<people.length;i++){
    console.log(people[i].name)
}

// silver 2
var names=[];
var occupations=[];
for(var i=0;i<people.length;i++){
    names.push(people[i].name);
    occupations.push(people[i].occupation)
}
console.log(occupations)

//silver 3
var names2=[];
var occ2=[];
for(var i=0; i<people.length;i++){
    names2.push(people[i].name);
    occ2.push(people[i].occupation);   
}
occ2.splice(0,1)  ;
console.log(occ2)
