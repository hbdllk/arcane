// Сокращения
const doc = document;
const body = doc.body;
const ls = localStorage;

// 1. Контейнеры
    // Новые поставки
const contNew = doc.querySelector('.arrivals-box');
    // Часть каталога
const contFeat = doc.querySelector('.featured-box');
    // Все товары
const catalog = doc.querySelector('.catalog__cont-box');

let bodyTheme = window.getComputedStyle(body).colorScheme;
let theme = ls.getItem('theme') || bodyTheme;