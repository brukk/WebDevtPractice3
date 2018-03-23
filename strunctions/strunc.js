function firstF(x,y){
    return x.concat(y);
}
console.log(firstF("i am", " hot"))

var obj1={
    name:"Bk",
    age:30,
    coo:"Eth",
    disc:function(){
        return this.name.concat(" is a Gem ").concat("and he's ".concat(this.age).concat(" years old"))
    }
}
console.log(obj1.disc())



function secF(str){
    return str.indexOf("e");
}
console.log(secF("abebe"))



function third(str){
     return str.match(/f/gi)
}
console.log(third("abe first and from France"))



function forth(str){
    return str.substr(2,6)
}
console.log(forth("greeen is the color"))
