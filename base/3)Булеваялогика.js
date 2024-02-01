// Логические операторы
const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);//&& - и
console.log(`Обычный файл ${isAdmin || canWrite}`);//||  - или
console.log(`Инвертируем права админа ${!isAdmin}`);//! - инвертирование значения

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл с редактированием ${isAdmin && canWrite && (!isEdited || isSuperAdmin)
    }`);

//6.3. Операторы с другими типами 
console.log('Вася' || 'Олег');
console.log(false || 'Олег');

console.log('Вася' && 'Олег');
console.log(false && 'Олег');

let a = 'Марина';
const username = a || 'Петя';
console.log(username)
// Оператор нулевого слияния
let username = 0;
console.log(username || 'Default Username');
console.log(username ?? 'Default Username');

let canBuy = true;
let balanceUser = 1001;
let bonusUser = 101;

let isBanned = false;
let isExist = true;
let isSelling = true;

if ((balanceUser >= 1000 || balanceUser >= 100) && isExist === true && isSelling === true && isBanned === false) {
    console.log(`Может купить игру`);
} else {
    console.log(`Не может купить игру`);
}
console.log(!'' && true && 'Yes' && Boolean('true') && 'PS') 
