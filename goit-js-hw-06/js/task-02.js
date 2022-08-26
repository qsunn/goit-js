const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

let result = '';

ingredients.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    li.classList.add('item');
    result += li.outerHTML;
});

document.querySelector('#ingredients').insertAdjacentHTML('beforeend', result);