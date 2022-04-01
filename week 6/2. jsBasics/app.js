//! ======================= DataTypes ======================= !//
//? ==> "var" vs "let" vs "const":
// https://www.youtube.com/watch?v=9WIJQDvt4Us
// https://www.w3schools.com/js/js_let.asp
// https://www.w3schools.com/js/js_const.asp

if (true) {
  var varVariable = 'this is true'
}

console.log(varVariable) //'this is true'

if (true) {
  let letVariable = 'this is true'
}
//console.log(letVariable) //(error) "letVariable is not defined"

//? ==> "let" is like var, but it's block scoped instead of function scoped:
let y = 'hello'
y = 3

console.log(y) //3 (no errors)

//? ==> "const" variable can't be reassigned:
const x = 'hello'
//x = 'world' //error

//? ==> arrays, objects:
const arraysInJS = [1, 2, '3', true, { key: 'value' }] //can have numbers, strings, or any
const objectsInJs = {
  key1: 'value1',
  'key-two': 'value2',
  key3: [1, 2, 3],
  key4: { key: 'value' },
}
console.log(objectsInJs['key4'])
const strings = 'hello world !'
const booleans = true || false

console.log(strings)

//! ======================= (=== vs == vs = , != !==) ======================= !//
// https://www.youtube.com/watch?v=C5ZVC4HHgIg

console.log(1 == 1) //true
console.log(1 === 1) //true

console.log('' == 0) //true
console.log('' === 0) //false

console.log(false == 0) //true
console.log(false === 0) //false

console.log(2 == '2') //true
console.log(2 === '2') //false

console.log(2 != '2') //false
console.log(2 !== '2') //true

//! ======================= n++ vs ++n ======================= !//
let n1 = 5
let n2 = ++n1 //6 (prefix)

n1 = 5
n2 = n1++ //5 (postfix)
console.log(n2)

//! ======================= ** operator ======================= !//
n1 = 5
console.log(n1 ** 2) //5*5=25

//! ======================= Ternary operator (?:) ======================= !//
let condition = true
condition ? console.log('condition is true') : console.log('condition is false')

//! ======================= syntax of "switch", "while", "do-while", and "for" loops ======================= !//
let iter
iter = 1

//switch:
switch (iter) {
  case 1:
    console.log('switch: iter=1')
    break

  default:
    console.log('no case has been matched')
    break
}

//do-while:
iter = 1
do {
  console.log('do-while:', iter)
  iter++
} while (iter <= 0) // output--> 'do-while:1' (loop will run at least one time)(event if the condition is false)

//while:
iter = 1
while (iter <= 0) {
  console.log('while:', iter)
  iter++
} // output--> *nothing* (loop wont run)

//for:
for (let i = 1; i <= 5; i++) {
  console.log('for:', i)
}

//! ======================= arrow functions and regular functions ======================= !//
/**
 * *(optional)*
 * - https://www.youtube.com/watch?v=gigtS_5KOqo
 * - https://www.youtube.com/watch?v=h33Srr5J9nY
 * */

console.log(add(1, 2)) //can be used with no problem
function add(n1, n2) {
  return n1 + n2
}

//console.log(addd(1, 2)) // cannot use before initialization
const addd = function (n1, n2) {
  return n1 + n2
}
console.log(addd(1, 2))

//==> newer syntax (arrow functions):

// console.log(arrowAdd(1, 2)) // cannot use before initialization
const arrowAdd = (n1, n2) => {
  return n1 + n2
}
console.log(arrowAdd(1, 2))

//! ======================= iterating through Arrays ======================= !//
const arr = [1, 2, 3, 4, 5]
arr.forEach(element => {
  console.log(element) //1, 2, 3, 4, 5
})

for (const index in arr) {
  console.log(index) //0,1,2,3,4 (arr index)
}

for (const element of arr) {
  console.log(element) //1,2,3,4,5 (values of each index)
}

//! ======================= iterating through objects ======================= !//
const obj = { key1: 1, key2: 2, key3: 3 }
for (const key in obj) {
  console.log(key) //key1 ,key2, key3 (object keys)

  console.log(obj[key]) //1, 2, 3 (gets the value of the specified key)
}

console.log(Object.values(obj)) //[1,2,3] (returns array of obj values)
for (const value of Object.values(obj)) {
  console.log(value) // 1, 2, 3
}

//! ======================= null vs undefined ======================= !//
// null vs undefined https://www.youtube.com/watch?v=7bpQUVK9Gn4
/*
 - undefined means a variable has been declared but not defined yet.
 - null means a variable has been declared and defined but has no value.
*/

let variable
console.log(variable) //undefined

variable = null // defined but has no value
console.log(variable) //null

console.log(null == undefined) //true
console.log(null === undefined) //false
