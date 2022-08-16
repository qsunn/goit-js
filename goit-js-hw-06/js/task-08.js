const form = document.querySelector('.login-form');
const inputs = [...form.elements];
const submit = inputs.pop();
const data = {};

const reset = () => inputs.forEach(input => input.value = '');
const submitHandler = (event) => {
    event.preventDefault();
    const validate = inputs.filter(input => input.value.trim()).length === inputs.length;
    if (validate) {
        data.email = inputs.find(input => input.name === 'email').value;
        data.password = inputs.find(input => input.name === 'password').value;
        console.log(data);
        reset();
    } else {
        alert('Всі поля повинні бути заповнені.');
    };
}

form.addEventListener('submit', submitHandler);