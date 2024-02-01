const userArray = ['vasya', 'pupkin', 24];
console.log(userArray);
const user = {
    name: 'vasya',
    surname: 'pupkin',
    age: 24,
    skills: [
        'proggrammer',
        'cooking'
    ],
    eduBasic: 'school 10',
    eduPro: 'KGU'
}
console.log(user);
console.log(user.name);
console.log(user.skills[0]);

console.log(user['skills']);
const level = 'Pro';
console.log(user['edu' + level]);

const res = prompt('Введите свойство')
console.log(user[res]);
user['city'] = 'msk'
console.log(user);
console.log(user.city);

user.age = 30;
console.log(user)

//отсортировать по возрасту 

const users = [
    { name: 'Вася', age: 30 },
    { name: 'Катя', age: 18 },
    { name: 'Аня', age: 40 },
    { name: 'Петя', age: 25 },
];

console.log(users.sort((a, b) => {
    return a.age - b.age;
}))
// преобразовать пользователей до вида  {fullName: 'Катя Белова', skillName: 1}
const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'Dev0ps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    },
]
const userData = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillName: user.skills.length
    }
})
console.log(userData);

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    // getFullName: function (name, surname) {
    //    return name + ' ' + surname;
    //}, 
    getFullName: function () {
        //return user.name + ' ' + user.surname;
        console.log(this)
        return this.name + ' ' + this.surname;
    },
}
function getFullName(user) {
    return user.name + ' ' + user.surname;
}
console.log(getFullName(user));

console.log(user.getFullName());
console.log(user);

//const arr = [1, 2];
//arr.sort();

/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
    balance: 0,
    operations: [],
    increase: function (sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum,
        })
        return true;
    },
    decrease: function (sum, reason) {
        if (this.balance < sum) {
            console.log('недостаточно баланса')
            return false;
        }
        this.operations.push({
            reason: reason,
            sum: -sum,
        })
        this.balance -= sum;
        return true;
    },
    getOperationLength: function () {
        return this.operations.length;
    }
};
console.log(wallet.increase(1000, 'зп'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(2000, 'Оплата налогов'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(500, 'Оплата налогов'));
console.log(wallet.balance);
console.log(wallet.operations);


//Enhance object literals
const initialBalance = 7;
const wallet = {
    balance: initialBalance,
    operations: [],
}

console.log(wallet)
//Итерирование по объекту
const cities = {
    msk: {
        let: 200,
        temp: 25
    },
    spb: {
        let: 100,
        temp: 20
    },
}
let sumTemp = 0;
//let citiesCount = 0;
console.log(Object.keys(cities))
let citiesCount = Object.keys(cities).length;
for (const key in cities) {
    //console.log(key);
    //citiesCount++;
    sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount);

for (const key of Object.keys(cities)) {
    console.log(key);
}

//Деструктуризация и rest
//const arr = [1, 2, 4];
//const [z, y, x] = arr;
//console.log(y);
let user = {
    name: 'vasya',
    age: 20,
    city: 'MSK',
};
//const { age, name } = user;
//console.log(age)
//console.log(name)
const { age, ...userWithouAge } = user;
console.log(age);
console.log(userWithouAge);

const additionalData = {
    skills: ['Dev', 'Design'],
    creditCard: '3242-7903-4242-3432',
};
//user.skills = additionalData.skills;
//user.creditCar = additionalData.creditCar;
user = {//let
    ...user,
    ...additionalData
}
console.log(user);


//Optional chaining

const cities = {
    msk: {
        temp: {
            celcies: 25,
        }
    },
    spb: {
    },
}
console.log(cities.msk.temp.celcies);

if (cities.spb && cities.spb.temp) {
    console.log(cities.spb.temp.celcies);
}
const city = 'msk'
if (cities[city] != undefined && cities[city].temp != undefined) {
    console.log(cities[city].temp.celcies);
}

console.log(cities[city]?.temp?.celcies);


/*Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса*/
const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return existedGood = this.goods.find(g => g.id == id);
    },
    addGood: function (good) {
        const existedGood = this.findGoodById(good.id);
        if (existedGood) {
            console.log('Этот товар уже есть на складе');
            return;
        }
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, el) =>
            acc += el.weight?.kg ? el.weight.kg : 0,
            0
        )
    },
};
/* Товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
}
const chair = {
    id: 2,
    weight: {
        kg: 2
    }
}
const paper = {
    id: 3,
    color: 'red'
}
warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
let findedItem = warehouse.findGoodById(6);
console.log(findedItem);
findedItem = warehouse.findGoodById(1);
console.log(findedItem);
const w = warehouse.getWeightKg();
console.log(w);



/* let obj = {

    a: {
        b: 1
    }
};
console.log(obj.a['b']);

let arr = [
    { name: 'Вася' },
    { name: 'Петя' },
];
console.log(arr.map(e => e.name).reduce((acc, e) => acc += e[0], ''));
let a = {
    b: 1,
    add: function (num) {
        this.b += num
    }
}
a.add(2);
console.log(a.b);
let c = {
    b: 1,
    add: function (num) {
        c.num += this.b
    }
}
c.add(2);
console.log(c.num); 
let a = 'a';
a = { a };
console.log(a.a);
let obj = {
    a: {
        b: {
            d: 1
        }
    },
  };
  console.log(obj.a?.c.d);*/
/* Написать функцуию которая принимает обхект query параметров и возвращает строку для вставки
{
    search: 'Вася', 
    take: 10,
} 
//search=Вася&take=10
*/

function buildQueryString(query) {
    let queryString = '';
    for (let key in query) {
        if (queryString !== '') {
            queryString += '&';
        }
        queryString += `${key}=${query[key]}`;
    }
    return queryString;
}

const query = {
    search: 'Вася',
    take: 10,
};

const queryString = buildQueryString(query);
console.log(queryString); // search=Вася&take=10