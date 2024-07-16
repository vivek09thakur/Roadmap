"use strict"; // Treat all the JS code as newer version

// alert("hello") // alert() has a diff syntax in nodejs, this is for browser

// console.log(9+9); console.log("jkbfbb") Bad practice

let name = 'Mukta karve' // string : seq of characters
let age = 30 // int: range of number 2^53
let isLoggedIn = false // boolean: True or False
let nothing = null // standalone type
let something = undefined
let object = {}

console.table(
    [
        name,
        age,
        isLoggedIn,
        nothing,
        something,
        object
    ]
)

console.table([
    typeof(name),
    typeof(age),
    typeof(isLoggedIn),
    typeof(nothing), // null is an Object????? WTF?
    typeof(something),
    typeof(object)
])