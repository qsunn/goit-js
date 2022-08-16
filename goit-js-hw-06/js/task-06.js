const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const dataLength = +[...input.attributes].find(attr => attr.name === 'data-length').value;
    if (input.value.length === dataLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
})