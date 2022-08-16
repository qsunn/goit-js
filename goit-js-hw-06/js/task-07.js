const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('change', () => {
    const fontSize = fontSizeControl.valueAsNumber;
    text.style.fontSize = `${fontSize}px`;
})