// /** Fixed increment increase and decrease */
// function add(step) {
//     // accessing html element by id name 'number'
//     let numberElement = document.getElementById('number');
//     // use innerText property to access inside element
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText =number;
// }

// function subtract(step) {
//     let numberElement = document.getElementById('number');
//     let number = numberElement.innerText;
//     number = parseInt(number) - step;
//     numberElement.innerText =number;
// }

// function reset() {
//     let numberElement = document.getElementById('number');
//     numberElement.innerText = 0;
// }

// /** User value entry - option 1 */

// let numberElement = document.getElementById('number');

// function add() {
//     let userInput = document.getElementById('userInput').value;
//     let currentNumber = parseInt(numberElement.innerText);
//     numberElement.innerText = currentNumber + parseInt (userInput);
// }

// function subtract() {
//     let userInput = document.getElementById('userInput').value;
//     let currentNumber = parseInt(numberElement.innerText);
//     numberElement.innerText = currentNumber - parseInt (userInput);
// }

// function reset() {
//     numberElement.innerText = 0;
// }


/** User value entry - option 2 */
// code source: https://www.geeksforgeeks.org/design-a-simple-counter-using-html-css-and-javascript/

let counter = 0;
const counterElement = doucment.getElementById('counter');
const userInput = document.getElementById('userInput');
const addBtn= document.getElementById('addBtn');
const subtractBtn= document.getElementById('subtractBtn');
const resetBtn= document.getElementById('resetBtn');


addBtn.addEventListener('click', () => {
    counter++;
    counterElement.innerText = counter;
});

subtractBtn.addEventListener('click', () => {
    counter--;
    counterElement.innerText = counter;
});

function reset() {
    let counterElement = document.getElementById('counter');
    counterElement.innerText = 0 ;
}