'use strict';
import gallery from "./gallery-items.js"

const galleryRef = document.querySelector(".js-gallery");
const modalWrapperRef = document.querySelector(".js-lightbox");
const modalContentRef = document.querySelector(".lightbox__content");
const modalImageRef = document.querySelector(".lightbox__image");
const exitModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');

const doHtmlMarkup = gallery.map((image, index) => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.setAttribute('src', `${image.preview}`);
    img.setAttribute('data-source', `${image.original}`);
    img.setAttribute('alt', `${image.description}`);

    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery__link');
    imageLink.setAttribute('href', `${image.original}`);

    imageLink.append(img);
    li.append(imageLink);

    return li;
});

galleryRef.append(...doHtmlMarkup);

const galleryImage = document.querySelectorAll('.gallery__image');

galleryRef.addEventListener('click', (event) => {
    event.preventDefault(); /* предотвращение перехода по ссылке */
    if(event.target.nodeName == 'IMG') {
        modalImageRef.setAttribute('src', event.target.getAttribute('data-source'));
        modalImageRef.setAttribute('alt', event.target.getAttribute('alt'));
        modalWrapperRef.classList.add('is-open');
    }
})