// document.getElementById("button").addEventListener("click",airline);
var name1=document.getElementById("firstName");
var name2=document.getElementById("lastName");
var age1=document.getElementById("age");
var genderM=document.getElementById("male");
var genderF=document.getElementById("female");
var dest=document.getElementById("city");
var food1=document.getElementById("food");
var submit=document.getElementById("button");

var data={
    firstName:"",
    lastName:"",
    age:"",
    gender:[],
    destination:[],
    food:[],
}

name1.addEventListener("input", function(event){
    data.firstName=event.target.value;   
});

name2.addEventListener("input", function(event){
    data.lastName=event.target.value;   
});

age1.addEventListener("input", function(event){
    data.age=event.target.value;   
});

genderM.addEventListener("change",setGender);
genderF.addEventListener("change",setGender);

function setGender(event){
    if(event.target.checked){
        data.gender.push(event.target.value);
    }else{
        var index=data.gender.indexOf(event.target.value);
        data.gender.splice(index,num);
    }
}

dest.addEventListener("change",setDest)


function setDest(){
    data.destination.push(dest.value)
}






submit.addEventListener("click",function(){
    alert("First Name: "+data.firstName + "\n" 
        +"Last Name: "+data.lastName+ "\n" +
        "your age: "+data.age + "\n" +
         "Gender: " + data.gender + "\n" +
        "your Destination: "+ data.destination);
})
