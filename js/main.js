"use strict"

const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const items = document.querySelector('.container .items');
let active = 0;


for (let i = 0; i < images.length; i++) {
    items.innerHTML += (`<div class="item"><img src="${images[i]}"></div>`);
}
document.querySelector('.item').classList.add('item-active');

const itemslist = document.querySelectorAll(".item");

document.querySelector('.next').addEventListener("click" , function(){
    const itemslist = document.querySelectorAll(".item");
    itemslist[active].classList.remove("item-active");
    if(active === images.length -1){
        active = 0;
    }
    else{
        active++;
    }
    itemslist[active].classList.add("item-active");
})

document.querySelector('.prev').addEventListener("click" , function(){

    itemslist[active].classList.remove("item-active");
    if(active === 0){
        active = images.length -1;
    }
    else{
        active--;
    }
    itemslist[active].classList.add("item-active");
})