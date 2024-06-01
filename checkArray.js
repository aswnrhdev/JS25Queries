// Implement a function to determine whether a given input is an array or an object.
// The function should return `true` if the input is an array and `false` if it is an object.

function checkArray(element) {
    return Array.isArray(element)
}

console.log(checkArray([])) //true
console.log(checkArray({})) //false


