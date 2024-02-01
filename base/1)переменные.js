//типы данных
const width = 10;
const height = 3;
console.log(width * height);


let a = 5;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = 'string';
console.log(typeof a);
let isAdmin = false;
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;

console.log(d == null);
//упражнение
const price = 80;
const week = 7;
let workDay = week - 2;
let workHours = 5;
let timeForWork = 40;
let dayForWork = timeForWork / workHours;
let chill = 11;
console.log('Успею ли я сделать работу? ' + (dayForWork <= chill));
console.log('Стоимость работ ' + (timeForWork * price));

//шаблонные строки 
const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template = author + ' заказал ' + projectName + ' по цене ' + price;
console.log(template)

const template2 = `${author} заказал ${projectName} по цене ${price}`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;

console.log(template4);
//Преобразование типов
const age = '18';
console.log(Number(age) + 5);
console.log(Boolean('5') + 9);


