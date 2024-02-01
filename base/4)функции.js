function logName(name, surname) {
    console.log(`My name ${name} ${surname}`)
}
logName('Sasha', 'Fedorchuk');

function countDepositSum(depositInUSD, mouth, rate) {
    const sum = depositInUSD * (1 + rate / 12) ** mouth;
    return sum;
}
const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);
//Анонимные функции
function powerOfTwo(num) {
    return num * num;
}

console.log(powerOfTwo(5));

const poft = function (num) {
    return num * num;
}

console.log(poft(7));

// стрелочные функции
function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(5));

//const poft = (num) => num * num;
const poft = num => {
    console.log(num);
    return num * num;
}
console.log(poft(7));

function toPower(num, power) {
    const res = num ** power;
    return res;
}
console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3))
//параметры по умолчанию
function toPower(num, power) {
    const power2 = power ?? 2;
    const res = num ** power2;
    return res;
}
console.log(toPower(2, 3));
console.log(toPower(2,));
//условия в функциях
function canAccessWebsite(age) {
    if (age < 18) {
        return false;
    }

    return true;
}
console.log(canAccessWebsite(16));

const canAccessWebsite2 = age => age < 18 ? 'No' : 'Yes';
console.log(canAccessWebsite2(22));
//функции в функциях
const KG_IN_USD = 7;
const KM_IN_USD = 5;

function getExchangePrice(present1, present2, distance) {
    const price1 = present1 * KG_IN_USD;
    const price2 = present2 * KG_IN_USD;
    const distancePrice = distance * KM_IN_USD;
    return price1 + price2 + distancePrice;
}
console.log(getExchangePrice(1, 2, 10));

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKM(distance) {
    return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKM(distance);
    return price1 + price2 + distancePrice;
}
console.log(getExchangePrice(1, 2, 10));
//упражнение

//const macBook = 2000;
//const yearsUser = 21;
//const moneyUser = 1500;
//const workHave = false;
//
//if (yearsUser >= 24 && workHave === true) {
//    console.log(`Дадут 500 долларов`);
//} else if (yearsUser >= 24 && workHave != true) {
//    console.log(`Дадут 100 долларов`);
//} else {
//    console.log(`Дадут 0 долларов`);
//}

const macBook = 2000;
const moneyUser = 1600;

function credit(yearsUser, workHave) {
    if (yearsUser >= 24 && workHave === true) {
        return 500;
    } else if (yearsUser >= 24 && workHave != true) {
        return 100;
    } else {
        return 0;
    }
}
console.log(credit(24, true));

const canBuy = (credit) => {
    if ((credit + moneyUser) >= macBook) {
        return 'Может купить ноутбук'
    } else {
        return 'Не может купить ноутбук'
    }

}
console.log(canBuy(credit(24, false)));



const btnSub = document.querySelector('.submenu');
const menuSub = document.querySelector('.header__container-nav-list-item-link-submenu');
const btnBurger = document.querySelector('.header__container-burger');
const menuBurger = document.querySelector('.header__container-nav');
function headerMenu(parent, child) {
    child.onclick = function () {
        child.classList.toggle('active');
        parent.classList.toggle('active');
    }
    window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest(parent) && !target.closest(child)) {
            parent.classList.remove('active');
        }
    })
}
headerMenu(menuSub, btnSub);
headerMenu(menuBurger, btnBurger);

//функция высшего порядка

//callback
function add(a, b) {
    return a + b;
}
function sbutract(a, b) {
    return a - b;
}
function power(a, b) {
    return a ** b;
}
function str(a, b) {
    return `${a} ${b}`;
}

function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}
let res = calculate(3, 5, add);
console.log(res);
res = sbutract(3, 5, add);
console.log(res);
res = power(3, 5, add);
console.log(res);
res = str('Привет', 'Мир', add);
console.log(res);
//Возврат функции

function power(pow) {
    return function (num) {
        return num ** pow;
    }
}

const power = (pow) => {
    return num = (num) => {
        return num ** pow;
    }
}
const power = pow => num => num ** pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

console.log(power(5)(4));