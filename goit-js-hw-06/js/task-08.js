const form = document.querySelector('.login-form');

const submitHandler = (event) => {
    event.preventDefault();
    const validate = event.target.elements.email.value.trim() && event.target.elements.email.value.trim();
    if (validate) {
        const data = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        };
        console.log(data);
        
        event.target.elements.email.value = '';
        event.target.elements.password.value = '';
    } else {
        alert('Всі поля повинні бути заповнені.');
    };
}

form.addEventListener('submit', submitHandler);