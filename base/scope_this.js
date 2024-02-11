'use strict'
const succesMessage = 'Успех';
const user = {
    name: 'vasya',
    roles: [],
}
function addRole(user, role) {
    if (role !== 'admin') {
        const message = 'Errore';
        console.log(message);
        return user;
    }
    user.role.push(role);
    succesMessage = 'uar'
    console.log(succesMessage);

    function logRoles() {
        console.log(user.roles)
    }
    logRoles();
    return user;
}

console.log(addRole(user, 'dev'))

//поднятие
addUser();
console.log(b);
const a = 3;
var b = 2;
function addUser() {
    // console.log('user added')
}
addUser();

//Пример использования this
console.log(this);

function addNum(num1, num2) {
    console.log(this);
    return num1 + num2;
}

const addNum2 = (num1, num2) => {
    console.log(this);
    return num1 + num2;
}

//addNum2()
const user = {
    name: 'vasya',
    surname: 'pupkin',
    getFullName: function () {
        console.log(this);
        return this.name + ' ' + this.surname;
    }
}
user.getFullName();

const user2 = {
    name: 'marina',
    surname: 'kac',

}
user2.getFullName = user.getFullName;
user2.getFullName();

const getFullName = user2.getFullName;
getFullName();


const user = {
    firstName: 'vasya',
    lastName: 'pupkin',
    age: 20,
    getUserInfo: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    getUserInfoArrow: () => {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
user.getUserInfo();
user.getUserInfoArrow();


/*Дополнить объект методом для получения имени:
- компании
- сео
- сотрудника*/

const company = {
    name: "ООО Агро",
    employees: [
        {
            name: "Света",
            getName: function () {
                return this.name;
            }
        },
    ],
    ceo: {
        name: "Вася",
        getName: function () {
            return this.name;
        }
    },
    getName: function () {
        return this.name;
    }
};

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employees => employees.getName()));

//EOL для методов

const b = 1;
const a = {
    b,
    getB: function () {
        return this.b;
    },
    getBAlt() {
        return this.b;
    }
}
console.log(a.getBAlt());

//Call, apply
const audi = {
    make: 'Audi',
    model: 'AZ',
    year: 2021,
    damage: [],
    addDamage(part, rate) {
        console.log
            (`У авто ${this.make} ${this.model} ${this.year}
добавлено: - повреждение: ${part} со степенью ${rate} `);
        this.damage.push({
            part,
            rate,
        });
    }
}
audi.addDamage('колесо', 1);
const bmw = {
    make: 'bmw',
    model: 'x5',
    year: 2020,
    damage: [],
}
bmw.addDamage = audi.addDamage;
//bmw.addDamage('бампер', 2);


const addDamageFunc = audi.addDamage;
addDamageFunc.call(bmw, 'бампер', 2);
addDamageFunc.call(audi, 'стекло', 3);


addDamageFunc.apply(bmw, ['бампер2', 4])
addDamageFunc.apply(audi, ['стекло3', 5])

//Bind
const audi = {
    make: 'Audi',
    model: 'AZ',
    damages: [],
};
const carManupulation = {
    addDamage(part, rate) {
        this.damages.push({ part, rate });
        console.log(`Добавить повреждения на ${this.make} ${this.model}`)
    }
}

const addDamageAudi = carManupulation.addDamage.bind(audi);
addDamageAudi('Крыло', 3);
console.log(audi);

const addDamageAudiRoof = carManupulation.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);
console.log(audi);

/*Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля*/

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}
const user = {
    login: 'a@a.ru',
    password: '12345',
}
const resetUserPass = removePassword.bind(user, true);
resetUserPass();
console.log(user);


//IIFE

function init() {
    console.log('Start')
};
init();

(function () {
    console.log('Start IIFE')
});
//Замыкания

function changeBalance() {
    let balance = 0;
    let key = 'asd';
    return function (sum) {
        balance += sum;
        key = 'asdf'
        console.log(`Баланс ${balance}`);

    }
}

const change = changeBalance();
change(100);
change(-50);
change(200);
console.dir(change);
const change2 = changeBalance();
change2(100);
console.dir(change2);
//
/* Сделать функию пользователя которая берет за основу 
userInfo и за счет замыкания создает новый объект, 
с которым можно работать как user1().increase(100) */
const userInfo = {
    balance: 0,
    operations: 0,
    increase(sum) {
        this.balance += sum;
        this.operations++;
    },
};

function user() {
    const userObj = userInfo;
    return function () {
        return userObj;
    }
}
const user1 = user();
user1().increase(100);
user1().increase(100);
console.log(user1());


const user2 = user();
user2().increase(100);
console.log(user2());