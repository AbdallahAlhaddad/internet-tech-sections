//! ======================= DataTypes ======================= !//
// console.log() & alert()
console.log('hello world')

//?==> JS is dynamic:
//string, int, double, boolean:

//arrays + how to access data:
let x = [1, 'str', true, [1, 2, 3]]

console.log(x[1])

// objects + how to access data:
let person = {
  'first-name': 'Ahmed',
  lastName: 'Ali',
  a: 'val',
}

let a = 'lastName'

console.log(person['first-name'])

//? ==> "var" vs "let":

//? ==> "const" vs "let":

//! ======================= (=== vs == vs = , != !==) ======================= !//

console.log(2 == '2') //true
console.log(2 === '2') //false

console.log(1 == 1) //true
console.log(1 === 1) //true

console.log('' == 0) //true
console.log('' === 0) //false

console.log(false == 0) //true
console.log(false === 0) //false

console.log(2 != '2') //false
console.log(2 !== '2') //true

//! ======================= n++ vs ++n ======================= !//
let v1 = 5
let v2 = ++v1 //++v1

console.log(v1)
console.log(v2)

//! =======================  Exponentiation operator (**) ======================= !//
const v3 = 2 ** 3
console.log(v3)

//! ======================= Ternary operator (?:) ======================= !//
let v4 = 5
//?==> using if statement:
if (v4 == 5) {
  console.log('v4=5')
} else {
  console.log('unknown')
}

//?==> using ternary:
v4 == 5 ? console.log('v4=5') : console.log('unknown')

//! ======================= syntax of "switch", "while", "do-while", and "for" loops ======================= !//

let iter
iter = 1
//?==>switch:
switch (iter) {
  case 1:
    console.log('switch: iter=1')
    break
  case 2:
    console.log('switch: iter=2')
    break

  default:
    console.log('no case has been matched')
}

//?==>while:
// iter = -2
// while (iter <= 0) {
//   console.log('while:', iter)
//   iter++
// } // output--> *nothing* (loop wont run)

//?==>do-while:
// // iter = 1
// do {
//   console.log('do-while:', iter)
//   iter++
// } while (iter <= 0) // output--> 'do-while:1' (loop will run at least one time)(event if the condition is false)

//?==>for:
for (let i = 1; i <= 5; i++) {
  console.log('for:', i)
}

//! ======================= arrow functions and regular functions ======================= !//
function sum(num1, num2) {
  num1 + num2
}

const sum1 = (num1, num2) => num1 + num2

console.log(sum1(1, 2))
//! ======================= iterating through Arrays ======================= !//
const arr = [1, 2, 3, 4, 5]

//?==> normal for loop:
for (let i = 0; i < arr.length; i++) {
  console.log('i:', i)
  console.log('arr[i]:', arr[i])
}

//?==> forEach(elements):
arr.forEach(function (el) {
  console.log(el)
})

//?==> for of (elements):
for (let el of arr) {
  console.log(el)
}

//?==> for in (index):
for (const index in arr) {
  console.log(arr[index])
}

//! ======================= iterating through objects ======================= !//
const obj = {
  key1: 1,
  key2: 2,
  key3: 3,
}

//?==>for in (key):
for (const key in obj) {
  console.log(obj[key])
}

//?==>for of (Using Object.values(obj)):

console.log()
for (let el of Object.values(obj)) {
  console.log(el)
}

//! ======================= null vs undefined ======================= !//
// null vs undefined https://www.youtube.com/watch?v=7bpQUVK9Gn4
/*
 - undefined means a variable has been declared but not defined yet.
 - null means a variable has been declared and defined but has no value.
*/

let variable

console.log(variable)

// console.log(variable) //undefined
// variable = null // defined but has no value
// console.log(variable) //null

console.log(null == undefined) //true
console.log(null === undefined) //false
