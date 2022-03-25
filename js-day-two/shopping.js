let shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shoppingList.push("fruit loops");
shoppingList[4] = "fair trade coffee";
shoppingList[2] = "rice";
shoppingList[3] = "beans";

let shoppingCart = [];
shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());

while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.pop());
}

console.log(shoppingList);
shoppingCart.sort();
console.log(shoppingCart);
shoppingCart.reverse();
console.log(shoppingCart);

console.log(shoppingCart.join(","));
