"use strict"

const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg']
let items = document.getElementsByClassName("items");

for (let i = 0; i < images.length; i++) {
    images.push(`<div class="item"><img src="${images[i]}></div>`);
}