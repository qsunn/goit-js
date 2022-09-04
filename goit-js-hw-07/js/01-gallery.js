import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js';

const gallery = document.querySelector('.gallery');

const generateGallery = gallery => {
    return gallery
        .map(item => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
        </div>
        `
        })
        .join('');
};

gallery.insertAdjacentHTML('beforeend', generateGallery(galleryItems));

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
        basicLightbox
            .create(`<img src="${event.target.getAttribute('data-source')}" width="800" height="600">`)
            .show();
    }
})