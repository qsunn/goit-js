const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('keyup', (event) => {
    output.innerHTML = event.target.value.trim() ? event.target.value : 'Anonymous';
})