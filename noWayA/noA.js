function noA(str){
    for(var i=0; i<str.length; i++){
        return str.replace(/a/gi,"")
    }
}
console.log(noA("this Add and sand lAnd"))