let horses = 1;

if (horses > 8) {
    console.log("There isn't enough room for all these horses!");
} else {
    console.log("There is plenty of room in the stable");
}


// as a function

function stableCalculator(numHorses) {
    if (numHorses > 8) {
        console.log("There isn't enough room for all these horses!");
    } else {
        console.log("There is plenty of room in the stable");
    }
}

console.log(stableCalculator(9));
console.log(stableCalculator(4));