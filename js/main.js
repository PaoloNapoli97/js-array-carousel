"use strict"

const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const target = document.querySelector('.container .items');

for (let i = 0; i < images.length; i++) {
    var item = document.createElement('div') = `<div class="item"><img src="${images[i]}"></div>`;
    document.body.appendChild(item);
}