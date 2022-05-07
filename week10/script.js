// ! ============ 1. window and document objects ============ !//
//? ==> window:
// console.log(window)

//? ==> document:
// console.log(window.document)
// console.log(document)
// console.log(document.head)
// console.log(document.body) //TODO: use document.body to demonstrate defer vs async

// ! ============ 2. selecting elements ============ !//
//? ==> getElementById() //TODO: mention getElementByClassName , TagName, ...etc

//? ==> querySelector()

// document.querySelector('.class-div')

//? ==> querySelectorAll()

const elements = document.querySelectorAll('.class-div') //TODO: change to: '#id-div'

for (const el of elements) {
  el.style.color = 'red'
  el.style.backgroundColor = 'green'
}

// ! ============ 3. modifying selected elements ============ !//
//? ==> .innerHTML
// document.querySelector('#id-div').innerHTML = '<h1>hi</h1>'

//? ==> .innerText
// document.querySelector('#id-div').innerText = '<h1>hi</h1>'

//? ==> (Optional) .textContent
// document.querySelector('#id-div').textContent = '<h1>bye</h1>'
//  (Optional) https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

//? ==> .value (for form elements)
// document.querySelector('#username').value = 'Ahmed'

// ! ============ 4. Creating elements using js ============ !//
// Creating and appending elements with js
const h2 = document.createElement('h2')
h2.textContent = 'Hello World (H2)'
document.body.appendChild(h2)

// ! ============ 5. adding event Listeners ============ !//
// Element Events: https://developer.mozilla.org/en-US/docs/Web/API/Element#events

function colorOnClick(event) {
  alert('div is clicked (event 1)')
  console.log(event)
  event.target.style.color = 'blue'
}

const idDiv = document.querySelector('#id-div')

idDiv.addEventListener('click', colorOnClick)

//? ==> add two event listeners to the same element (both run in the order of register)
idDiv.addEventListener('click', e => {
  alert('div is clicked (event 2)')
})

//? ==> remove event listener
idDiv.removeEventListener('click', colorOnClick)
