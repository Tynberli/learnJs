for (let i = 1; i < 10; i++) {
    console.log(`Наш баланс ${i}$`);
}
//Break и continue

const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

console.log(tasks[0]);
for (let i = 0; i < 2; i++) {
    console.log(tasks[i]);
}

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        continue;
    }
    console.log(tasks[i]);
}
console.log('-------------');
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        break;
    }
    console.log(tasks[i]);
}
//
/* Задача вывести в консоль строку "Я люблю JS !" из массива,
проходя циклом в обратном порядке, не используя метод reverse.
const arr = ['!', 'JS', 'люблю', 'Я']; */

const arr = ['!', 'JS', 'люблю', 'я'];
const resultArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);

}
console.log(resultArray.join(' '));

//Цикл в цикле
for (let i = 1; i < 5; i++) {
    console.log(`Цикл 1 - ${i}`);
    for (let j = 1; j < 5; j++) {
        console.log(`Цикл 2 - ${j}`);
    }
}

const tasks = [[1, 'Задача 1'], [2, 'Задача 2']];

for (let i = 0; i < tasks.length; i++) {
    for (let j = 0; j < tasks[i].length; j++) {
        console.log(tasks[i][j]);
    }
}
//Цикл while
for (let i = 1; i < 5; i++) {
    console.log(`Вывод - ${i}`);
}
let i = 1;
while (i < 5) {
    console.log(`Вывод - ${i}`);
    i++;
}
const arr = [1, 4, 8, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
        break;
    }
    console.log(arr[i]);
}
let i = 0;
while (arr[i] <= 5 && arr.length) {
    console.log(arr[i]);
    i++;
}
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 0)

//Циклы for of и for in

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);
}
console.log('---------------');
for (let element of arr) {
    console.log(element);
}
console.log('---------------');
for (let index in arr) {
    console.log(arr[index]);
}


/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчета:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
- Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
//for (let i = 0; i < operations.length; i++) {
//
//    console.log(operations[i]);
//}
const startBalance = 100;
function balance(operations) {
    const sumOperations = operations.reduce((a, b) => a + b);
    console.log(sumOperations);
    return sumOperations;

}
console.log(balance(operations) + startBalance);

function negative(balance) {
    if (balance < 0) {
        return false;
    } else {
        return true;
    }
}

console.log(negative(balance(operations) + startBalance));

////////////////////////////

const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;
const getBalance = (arrayOfOperations, initialBalance) => {
    for (const element of arrayOfOperations) {
        initialBalance += element;
    }
    return initialBalance;
}
console.log(getBalance(operations, startBalance));

function checkOperations(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let isOk = true;
    for (const element of arrayOfOperations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

console.log(checkOperations(operations, startBalance));




const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;
const getBalance = (arrayOfOperations, initialBalance) => {
    for (const element of arrayOfOperations) {
        initialBalance += element;
    }
    return initialBalance;
}
console.log(getBalance(operations, startBalance));

function checkOperations(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let isOk = true;
    for (const element of arrayOfOperations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}

console.log(checkOperations(operations, startBalance));

/* function middleOperations(arrayOfOperations) {
    let balansPlus = [];
    let balansMinus = [];
    for (const element of arrayOfOperations) {
        if (element >= 0) {
            balansPlus.push(element);
            return ((element + element) / element.length);

            console.log(element)

        }
         if (element < 0) {
             balansMinus.push(element);
         }
    }

}
console.log(middleOperations(operations)); */

function avarageOperations(arrayOfOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;
    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveCount++;
            positiveSum = + element;
        }
        if (element < 0) {
            negativeCount++;
            negativeSum = + element;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount];
}
console.log(avarageOperations(operations)); 