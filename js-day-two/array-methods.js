function getFirstValue(array) {
    console.log(array[0]);
}
getFirstValue([1, 2, 3]) 
// ➞ 1
getFirstValue([80, 5, 100])
// //  ➞ 80
getFirstValue([-500, 0, 50]) 
// ➞ -500

function incrementItems(array) {
    for (i = 0; i < array.length; i++){
        array[i] = array[i] + 1;
    }
    console.log(array);
}

incrementItems([0, 1, 2, 3]); 
// // ➞ [1, 2, 3, 4]
incrementItems([2, 4, 6, 8]);
// // ➞ [3, 5, 7, 9]
incrementItems([-1, -2, -3, -4]);
// ➞ [0, -1, -2, -3]

function rotate(array) {
    array.push(array.shift());
    console.log(array);
}

rotate(['cat', 'dog', 'table']);
// ➞ ['b', 'c', 'a']