const form = document.querySelector('.login-form');

const submitHandler = (event) => {
    event.preventDefault();
    
    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;

    const validate = email.trim() && password.trim();
    if (validate) {
        const data = {
            email: email,
            password: password
        };
        console.log(data);

        event.target.elements.email.value = '';
        event.target.elements.password.value = '';
    } else {
        alert('Всі поля повинні бути заповнені.');
    };
}

form.addEventListener('submit', submitHandler);