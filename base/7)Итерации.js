const score = [5, 10, 0, 15];
for (const [i, el] of score.entries()) {
    console.log(`Раунд: ${i + 1}:${el}`)
}

score.forEach((el, i) => {
    console.log(`Раунд: ${i + 1}:${el}`)
})
score.forEach((el, i, arr) => {
    console.log(`Раунд: ${i + 1}: ${el}: ${arr}`)
})

//  map

const transactionsInUSD = [10, -7, 50, -10, 100];
const transactionsInRUB = [];
for (const transactions of transactionsInUSD) {
    transactionsInRUB.push(transactions * 60);
}
console.log(transactionsInRUB);
const transactionsInRUB2 = transactionsInUSD.map((transactions, i) => {
    return transactions * 60;
})
//const transactionsInRUB2 = transactionsInUSD.map((transactions, i) => transactions * 60);

console.log(transactionsInRUB2);

///filter
const operations = [100, -20, 7, -20, 50];
const positiveOp = [];
for (const operation of operations) {
    if (operation > 0) {
        positiveOp.push(operation);
    }
}
console.log(positiveOp);
const positiveOp = operations.filter(operations => {
    return operations > 0;
})
const positiveRUbOp = operations
    .filter(operation => {
        return operation > 0;
    })
    .map(operation => operation * 60)
console.log(positiveRUbOp);


///////////////////////
/* Имеется массив изменения цен prices, где внутри

1й элемент массива является ценой в момент Х, 2й - ценой в момент Y.

Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен: [100, 150] */
const prices = [[100, 200], [120, 100], [200, 350]];

const result = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0);
console.log(result);
/////

//reduce
const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
    balance = balance + operation;
    //balance += operation;
}
console.log(balance);

const finalBalance = operations.reduce(function (acc, operation, i) {
    console.log(`Итерация ${i}, acc:  ${acc}, operation ${operation}`)
    return acc += operation;
}, 0);
const minElem = operations.reduce(function (acc, operation, i) {
    if (operation > acc) {
        return acc;
    } else {
        return operation;
    }
}, 0);

console.log(minElem);
/*
Найти среднее значение последоватедьности
чисел с помощью reduce
*/
const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, el, i) => {
    if (i != arr.length - 1) {
        return acc + el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0);
console.log(avg);

//find и findIndex
const arr = [2, 4, 4, 10, 20];

let elGT5;
for (const el of arr) {
    if (el > 5) {
        elGT5 = el;
        break;
    }
}

console.log(elGT5);

elGT5 = arr.find(el => el > 5);
elGT5Index = arr.findIndex(el => el > 5);
console.log(elGT5);
console.log(elGT5Index);

/* 
Написать функцию, которая возвращает true,
если элемент есть, и false, если нет.
 */

const arr = [2, 4, 4, 10, 20];

let some = (arr,  ) => {

    const res = arr.find(el => el === elem);

    return res == undefined ? false : true;

}
console.log(some(arr, 3))

/////flat и flatMap
const prices = [[2, 4], [3, 4], [10, 20, [10, 20]]];
console.log(prices);
const res = prices.flat(2);
const res2 = prices.flatMap(el => el.concat([1]));
console.log(res);
console.log(res2);

///sort

const users = ['Vasya', 'Masha', 'Anya'];
console.log(users);
users.sort();
console.log(users);
const operations = [100, -300, 200, 50, 400];
console.log(operations);

//<0-a,b-сохраняем порядок
//>0-b,a-меняем
operations.sort((a, b) => a - b);
console.log(operations);

operations.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
});
console.log(operations);

/// 
let arr = [1, 2, 3];
let res = arr.map(e => [e * 2]).flat().reduce((acc, el) => acc -= el, 0)
console.log(res);
let arr = [1, 2, 10, 15];
arr.sort()
console.log(arr);

/* Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] */

arr.forEach((el) => {
    console.log(el);
    if (el === '10-02-2022') {
        return el;
    }
})
const sortDate = (arr) => {
    return arr.sort()
}

console.log(sortDate(arr));
