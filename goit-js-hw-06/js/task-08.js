const form = document.querySelector('.login-form');
const inputs = [...document.querySelectorAll('input')];

const reset = () => inputs.forEach(input => input.value = '');
const submitHandler = (event) => {
    event.preventDefault();
    const validate = inputs.filter(input => input.value.trim()).length === inputs.length;
    if (validate) {
        const data = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        };
        console.log(data);
        reset();
    } else {
        alert('Всі поля повинні бути заповнені.');
    };
}

form.addEventListener('submit', submitHandler);