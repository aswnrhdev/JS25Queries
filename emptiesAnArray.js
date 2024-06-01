// Create a function that empties an array without resetting it to a new array or using a loop to pop each value individually. 
// Instead, find a more efficient method to clear all elements from the array while keeping the array itself intact.

const array = [1, 2, 3, 4, 5, 6]
console.log(array) //[ 1, 2, 3, 4, 5, 6 ]

array.length = 0;
console.log(array) //[]

