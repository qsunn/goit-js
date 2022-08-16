function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const text = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => document.body.style.backgroundColor = getRandomHexColor());