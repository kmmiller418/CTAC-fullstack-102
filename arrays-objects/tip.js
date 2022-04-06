function calculateTip(billAmount) {
    return billAmount * .20;
}

console.log(calculateTip(200));

function getBillTotal(billAmount) {
    return billAmount + calculateTip(billAmount);
}

console.log(getBillTotal(200));