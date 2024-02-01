const role1 = 'admin';
const role3 = 'user';
const role4 = 'superuser';

const role = ['admin', 'user', 'superuser'];
const userInfo = ['Anya', 25];
console.log(role);
console.log(role[0]);
console.log(role.length);
console.log(role[role.length - 1]);

console.log(role.at(0));
console.log(role.at(-1));

//const usersAge = [2040 - 2022, 20 - '6'];
const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0];
console.log(usersAge);

const usersNames = new Array('Vasya', 'Petya', 'Kate');
console.log(usersNames);


function square(el) {
    return el * el;
}
console.log(square(5))
//управление элементами массива
const users = ['Vasya', 'Petya', 'Kate'];
console.log(users);
users[2] = 'Kristi';
console.log(users);
//users[7] = 'Nikita';
//console.log(users);

const arrLenght = users.push('Nikita');
console.log(users);
console.log(arrLenght);

users.unshift('Vika');
console.log(users);

const el = users.pop();
console.log(el);
console.log(users);

const el2 = users.shift();
console.log(el2);
console.log(users);
//Поиск элемента
const roles = ['user', 'admin', 'manager'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);
const elIndex2 = roles.indexOf('superuser');
console.log(elIndex2);

if (roles.indexOf('admin') >= 0) {
    console.log('Acces')
}

console.log(roles.includes('admin'));

//Slice, splice, concat, reverse

const roles = ['user', 'admin', 'manager', 'superuser'];
const res = roles.slice(2);
console.log(roles);
console.log(res);

const res2 = roles.slice(0, 2);
console.log(res2);

console.log(roles);

const res5 = roles.splice(2);
console.log(res5);
console.log(roles);

const res6 = roles.reverse();
console.log(res6);
const res7 = res6.concat('puper');
console.log(res7);

const url = '/auth/user/login';
//const res = url.split('/');
console.log(res);

console.log(roles.join('-'))

///
/* Дан список задач

const tasks = ['Задача 1']; Сделать функции:

Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив */

const tasks = ['Задача 1'];
console.log(tasks);


function Add(task) {
    tasks.push(task);
    return tasks;
}

function Remove(task) {
    const index = tasks.indexOf(task);
    if (index === - 1) {
        return;
    }
    tasks.splice(index, 1)
    //return index;
}

function Prioritize(task) {
    const index = tasks.indexOf(task);
    if (index === - 1) {
        return;
    }
    const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
}
Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 4')
console.log(tasks);
Prioritize('Задача 1');
console.log(tasks);

const tasks = ['Задача 1'];


function Add(task) {
    tasks.push(task);
    return tasks;
}

function Remove(task) {
    const index = tasks.indexOf(task);
    if (index === - 1) {
        return;
    }
    return tasks.splice(index, 1);
}

function Prioritize(task) {
    const result = Remove(task);
    if (!result) {
        return;
    }
    tasks.unshift(result[0]);
}
Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 2')
console.log(tasks);
Prioritize('Задача 3');
console.log(tasks);

//деструктуризация
const userData = ['Anton', 18, 'Moskow'];
function getData() {
    return ['Anton', 18, 'Moskow'];
}
const userName = userData[0];
const age = userData[1];
const city = userData[2];
const [userName, age, city] = getData();

console.log(userName, age, city)

//Rest оператор
const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others)

///
/* Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:
Протокол (https)
Доменное имя (purpleschool.ru)
Путь внутри сайта (/course/javascript) */


const url = 'https://purpleschool.ru/course/javascript';
console.log(url);
function getUrlParts(url) {
    const [protocol, _, host, ...path] = url.split('/');
    console.log(protocol, _, host, path);
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${host}`);
    console.log(`Путь внутри сайта: /${path.join('/')}`);
}
getUrlParts(url);

let array = [1, 2, 3, 4];
const res = array.push(5);
console.log(res);