//! ======================= DataTypes ======================= !//
//?==> JS is dynamic:
//string, int, double, boolean:

//arrays + (how to access data):
const arr1 = [1, 2, 3, '2', [1, 2], true, null]
console.log(arr1[0])

// objects + how to access data:
const person = { key: 'value', firstName: 'Ali', lastName: 'ahmed', 'first-name': 'ali' }
console.log(person.firstName)
console.log(person['first-name'])
//? ==> "var" vs "let":

//? ==> "const" vs "let":

//! ======================= (=== vs == vs = , != !==) ======================= !//

console.log(2 == '2') //true
console.log(2 === '2') //false

let x = ''
if (x === 0) {
  console.log('x=5')
}

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
let v2 = ++v1

console.log(v1)
console.log(v2)
//! ======================= ** operator ======================= !//
const v3 = 5 ** 3
console.log(v3)
//! ======================= Ternary operator (?:) ======================= !//
let v4 = 6
if (v4 == 5) {
  console.log('v4=5')
} else {
  console.log('unknown')
}
v4 == 5 ? console.log('v4=5') : console.log('unknown')

//! ======================= syntax of "switch", "while", "do-while", and "for" loops ======================= !//

let iter
iter = 1
//?==>switch:
switch (iter) {
  case 1:
    console.log('switch: iter=1')
  case 2:
    console.log('switch: iter=2')

  default:
    console.log('no case has been matched')
}

//?==>while:
iter = 1
while (iter <= 0) {
  console.log('while:', iter)
  iter++
} // output--> *nothing* (loop wont run)

//?==>do-while:
iter = 1
do {
  console.log('do-while:', iter)
  iter++
} while (iter <= 0) // output--> 'do-while:1' (loop will run at least one time)(event if the condition is false)

//for:
for (let i = 1; i <= 5; i++) {
  console.log('for:', i)
}

//! ======================= arrow functions and regular functions ======================= !//

console.log(sum(1, 4))

function sum(n1, n2) {
  return n1 + n2
}

const sum2 = function (n1, n2) {
  return n1 + n2
}

sum2.key1 = 'key1'

console.log(sum2(1, 2))
console.log(sum2(1, 4))

const sum4 = (n1, n2) => {
  return n1 + n2
}
console.log(sum4(1, 4))

//! ======================= iterating through Arrays ======================= !//
const arr = [1, 2, 3, 4, 5]
//?==> normal for loop:
for (let i = 0; i < arr.length; i++) {
  console.log('i:', i)
  console.log('arr[i]:', arr[i])
}
//?==> forEach(elements):
arr.forEach(el => {
  console.log(el)
})

//?==> for of (elements):
for (const el of arr) {
  console.log(el)
}
//?==> for in (index):
for (const el in arr) {
  console.log(el)
}

//! ======================= iterating through objects ======================= !//
const obj = {
  key1: 1,
  key2: 2,
  key3: 3,
  func: function () {
    console.log('hello')
  },
}

//?==>for in:
for (const key in obj) {
  console.log(obj[key])
}

//?==>for of:
console.log(Object.values(obj))
for (const value of Object.values(obj)) {
  console.log(value)
}
//console.log(Object.values(obj)) //[1,2,3] (returns array of obj values)

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
