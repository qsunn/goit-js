function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnDestroy.disabled = true;

btnCreate.addEventListener('click', () => {
    const amount = +input.value;
    if (amount > 0) {
        btnCreate.disabled = true;
        btnDestroy.disabled = false;

        for (let i = 0; i < amount; i++) {
            const div = document.createElement('div');
            div.style.cssText = `width: ${30 + i * 10}px; height: ${30 + i * 10}px; background: ${getRandomHexColor()}`;
            boxes.append(div);
        }
        
        input.value = '';
    }
});

btnDestroy.addEventListener('click', () => {
    boxes.innerHTML = '';
    btnCreate.disabled = false;
    btnDestroy.disabled = true;
});