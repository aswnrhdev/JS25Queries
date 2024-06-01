// Write a function to reverse the characters of each word in a string while preserving the word order.
// For example, the input "hello world" should be transformed to "olleh dlrow".

let string = "Hello World"

let output = string.split(" ").map((word) =>{
    return word.split("").reverse().join("")
})

console.log(output.join(" ")); //olleH dlroW

