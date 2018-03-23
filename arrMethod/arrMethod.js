var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.pop();
console.log(vegetables);

fruit.shift();
console.log(fruit);

var orangeInd=fruit.indexOf("orange");
console.log(orangeInd);

fruit.push(orangeInd);
console.log(fruit);

//5
var vegLen= vegetables.length;
console.log(vegLen);

//6
vegetables.push(vegLen);
console.log(vegetables);

//7
var food=fruit.concat(vegetables)
console.log(food)

//8
food.splice(4,2);
console.log(food);

//9
food.reverse()
console.log(food)

//10
var newF=food.toString()
console.log(newF)






