const categories = [...document.querySelector('#categories').children];
console.log('Number of categories: ' + categories.length);
categories.forEach(item => {
    console.log('\nCategory: ' + item.children[0].innerText);
    console.log('Elements: ' + item.children[1].children.length);
});