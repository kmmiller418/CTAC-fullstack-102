const shoppingList = document.querySelector('ul');
shoppingList.children[1].innerHTML = 'Granny Smith Apples';
shoppingList.children[3].remove();

const newItem = document.createElement('li');
newItem.innerHTML = "Kombucha";
shoppingList.appendChild(newItem);

shoppingList.innerHTML = '';
console.log(shoppingList);

const newShoppingList = ['protein bars', 'almonds', 'peanut butter'];

newShoppingList.forEach((item) => {
    const newItem = document.createElement('li');
    newItem.innerHTML = `${item}`;
    shoppingList.appendChild(newItem);
})

shoppingList.children[1].className = 'important';