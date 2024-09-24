const toggle = document.querySelector('.toggle');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');

btn1.addEventListener('click', function () {
    text1.classList.toggle('activeBlack')
})

btn2.addEventListener('click', function () {
    text2.classList.toggle('activeRed')
})

btn3.addEventListener('click', function () {
    text3.classList.toggle('activeBlue')
})