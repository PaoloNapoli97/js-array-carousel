"use strict"

const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const items = document.querySelector('.container .items');
let active = 0;


for (let i = 0; i < images.length; i++) {
    items.innerHTML += (`<div class="item"><img src="${images[i]}"></div>`);
}
// document.querySelector('.item').classList.remove('item');
document.querySelector('.item').classList.add('item-active');
// document.querySelector('.item').classList.remove('item');
let img = document.querySelectorAll('.item');

document.querySelector('.next').addEventListener("click" , function(){

    img[active].classList.remove('item-active');
    active += 1;
    img[active].classList.add('item-active');
    if(active == img.length - 1){
        img[active].classList.remove('item-active');
        active = 0;
        img[active].classList.add('item-active');
    }
})

document.querySelector('.prev').addEventListener("click" , function(){
    img[active].classList.remove('item-active');
    active -= 1;
    img[active].classList.add('item-active');
})