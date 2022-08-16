const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrement.addEventListener('click', () => value.innerHTML = --counterValue);
increment.addEventListener('click', () => value.innerHTML = ++counterValue);