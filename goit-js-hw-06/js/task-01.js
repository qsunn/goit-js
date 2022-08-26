const categories = [...document.querySelector('#categories').children];
console.log('Number of categories: ' + categories.length);
categories.forEach(item => {
    console.log('\nCategory: ' + [...item.children].find(item => item.tagName === 'H2').innerHTML);
    console.log('Elements: ' + [...item.children].find(item => item.tagName === 'UL').children.length);
});