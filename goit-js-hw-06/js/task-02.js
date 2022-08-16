const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

ingredients.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    li.classList.add('item');
    document.querySelector('#ingredients').append(li);
});