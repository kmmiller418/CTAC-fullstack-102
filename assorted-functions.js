const reverseNum = (num) => {
    let number = num.toString();
    let newNum = '';

    for (i=number.length-1; i > -1 ; i--){
        newNum += number[i];
    }

    return newNum;
}

console.log(reverseNum(349210));

