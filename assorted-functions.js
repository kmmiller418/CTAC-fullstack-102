const reverseNum = (num) => {
    let number = num.toString();
    let newNum = '';

    for (i=number.length-1; i > -1 ; i--){
        newNum += number[i];
    }

    return (newNum[0] === '0') ? newNum : Number(newNum);
};

console.log(reverseNum(349210));
console.log(reverseNum(349212));

const alphebetizeString = (str) => {
    return str.split('').sort().join('')
};

console.log(alphebetizeString('webmaster'));

