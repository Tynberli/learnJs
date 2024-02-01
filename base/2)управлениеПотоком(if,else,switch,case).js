//If else
const money = 10;
const canBuy = money >= 50;
if (money >= 50) {
    console.log('Может купить наш продукт');
} else if (money > 5) {
    console.log('куплен мини продукт');
} else {
    console.log('не может');
}
/* Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
 Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада и остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах */
const deposit = 12000;
const rate = 0.07;
const depositLenght = 24;
const priceHouse = 13500;

const capitalisation = deposit * (1 + rate / 12) ** depositLenght;
//const capitalisation = (deposit * 0.07) * 2;
console.log(capitalisation);
//const depositEnd = deposit + capitalisation;
if (capitalisation >= priceHouse) {
    console.log(`Вася сможет купить дом. Останется ${capitalisation - priceHouse}$`);
} else {
    console.log(`Вася не сможет купить дом. Нехватает ${priceHouse - capitalisation}$`);
}

//Операторы равенства
/* == не строгое
=== стргое равенсттво */

//Switch
const role = 'manager';

if (role === 'manager') {
    console.log('Менеджер')
} else if (role === 'admin') {
    console.log('админ')
} else if (role === 'ceo') {
    console.log('CEO')
} else {
    console.log('Мы тебя не знаем')
}

switch (role) {
    case 'manager'://role === 'manager'
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log('Мы тебя не знаем');
}


switch (role) {
    case 'manager':
    case 'admin':
        console.log('НЕ босс');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log('Мы тебя не знаем');
}
const num = 1;

switch (true) {
    case num > 0:
        console.log('Положительный');
        break;
    case num < 0:
        console.log('отрицательный');
        break;
    default:
        console.log('ноль');
}
//Тернарные операторы
const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message;

if (budget > 100000) {
    message = 'BMW';
} else if (budget > fordFocusPrice) {
    message = 'FORD';
} else {
    message = 'Велосипед';
}

10 > 0 ? console.log('Больше 0') : console.log('не больше ');
if (10 > 0) {
    console.log('Больше 0');
} else {
    console.log('не больше ');
}

const str = 10 > 0 ? 'Больше 0' : 'не больше ';
console.log(str);
console.log(`я хочу купить ${message}`);

console.log(`я хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);

let message2 = budget > bmwX3Price ? 'BMW'
    : budget > fordFocusPrice ? 'FORD'
        : 'Велосипед';
console.log(message2)

/* Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?".
 Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!",
 а если он введёт "Я не робот", то тоже "Успех". */


let question = prompt('Сколько будет 7 + или - 15')
alert(question);
if (question === '22') {
    console.log('Успех')
} else if (question === '-8') {
    console.log('Успех')
} else if (question === 'Я не робот') {
    console.log('Успех')
} else {
    console.log('Вы робот')
}

switch (question) {
    case '22':
    case '-8':
    case 'Я не робот':
        console.log('Успех');
        break;
    default:
        console.log('Вы робот');
}
switch (true) {
    case Number(question) === 22:
    case Number(question) === -8:
    case question === 'Я не робот':
        console.log('Успех');
        break;
    default:
        console.log('Вы робот');
} 