// Develop a function to determine whether a given number is an integer or not. 
// The function should return `true` if the number is an integer and `false` if it is not.

function checkNumber(number) {
    if (number % 1 === 0) {
        return true
    } else {
        return false
    }
}

console.log(checkNumber(4)) //true
console.log(checkNumber(4.4)) //false



