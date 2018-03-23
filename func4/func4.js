function myF(x,y){
    return x*y
}
console.log(myF(2,3))



function myFu(x,y,z,){
    return Math.max(x,y,z)
}
console.log(myFu(4,28,12))



function myFun(x){
    if(x%2===0){
        return "even"
    } else if(x%2===1){
        return "odd"
    }
 }
 console.log(myFun(6))


 
function myFunc(str){
    if(str.length <= 20){
        return str.concat(str);
    }else if(str.length > 20){
        return str.slice(0,str.length/2)
    }
}
console.log(myFunc("this is the best thing i ever seen"))
console.log(myFunc("this is the best "))



