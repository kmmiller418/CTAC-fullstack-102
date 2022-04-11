const reverseNum = (num) => {
  let number = num.toString();
  let newNum = "";

  for (let i = number.length - 1; i > -1; i--) {
    newNum += number[i];
  }

  return newNum[0] === "0" ? newNum : Number(newNum);
};

console.log(reverseNum(349210));
console.log(reverseNum(349212));

const alphebetizeString = (str) => {
  return str.split("").sort().join("");
};

console.log(alphebetizeString("webmaster"));

const capitalize = (str) => {
  let sentence = str.split(" ");

  return sentence
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

console.log(capitalize("the quick brown fox"));

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    return num % i === 0 ? false : true;
  }
};

console.log(isPrime(5));
console.log(isPrime(8));

const removeDupes = (str) => {
  let noDupes = [];

  str.split("").forEach((letter) => {
    if (!noDupes.includes(letter)) {
      noDupes.push(letter);
    }
  });
  return noDupes.join("");
};

console.log(removeDupes("thequickbrownfoxjumpsoverthelazydog"));

const secondFinder = (arr) => {
  arr.sort((a, b) => a - b);

  return [arr[1], arr[arr.length - 2]];
};

console.log(secondFinder([1, 2, 3, 4, 5]));

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];

  return array;
}

function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) { //swap this to change ascending/descending
        swap(array, i, i + 1);
        sorted = false;
      }
    }
  }

  return array;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
