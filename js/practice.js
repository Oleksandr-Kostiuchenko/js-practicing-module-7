'use strict';

//! ====================================== Познайомимось з об'єктною моделлю документа (DOM) ====================================== !//
//TODO: 1. Пошук елементів у DOM
//? Знайдіть і змініть текст заголовка <h1> на сторінці за допомогою querySelector.
const pageTitle = document.querySelector('.page-title');
console.log(pageTitle.textContent);

pageTitle.textContent = 'Page title: Hello world!';

//? Знайдіть усі <li> у списку і додайте їм клас highlight.
const liList = document.querySelectorAll('li');
liList.forEach(el => el.classList.add('highlight'));

//? Отримайте елемент з ID main, використовуючи querySelector, і змініть його фон.
const image = document.querySelector(`#main`);
image.setAttribute('src', '../src/img/javascript-developer-tips.jpg');