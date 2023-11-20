//const score = [5, 10, 0, 15];
//for (const [i, el] of score.entries()) {
//    console.log(`Раунд: ${i + 1}:${el}`)
//}
//
//score.forEach((el, i) => {
//    console.log(`Раунд: ${i + 1}:${el}`)
//})
//score.forEach((el, i, arr) => {
//    console.log(`Раунд: ${i + 1}:${el}:${arr}`)
//})

///////////////////////

/* const transactionsInUSD = [10, -7, 50, -10, 100];
const transactionsInRUB = [];
for (const transactions of transactionsInUSD) {
    transactionsInRUB.push(transactions * 60);
}
console.log(transactionsInUSD);
console.log(transactionsInRUB);
const transactionsInRUB2 = transactionsInUSD.map((transactions, i) => {
    return transactions * 60;
})
const transactionsInRUB2 = transactionsInUSD.map((transactions, i) => transactions * 60);
console.log(transactionsInUSD);
console.log(transactionsInRUB2); */

///////////////////////
/* const operations = [100, -20, 7, -20, 50];
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
console.log(positiveRUbOp); */

//const prices = [[100, 200], [120, 100], [200, 350]];
//
//const result = prices
//    .map(product => product[1] - product[0])
//    .filter(price => price > 0);
//    console.log(result); 
/////


//const operations = [100, -20, 7, -30, 50];

///let balance = 0;
///for (const operation of operations) {
///    balance = balance + operation;
///    //balance += operation;
///}
///console.log(balance);

/* const finalBalance = operations.reduce(function (acc, operation, i) {
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

console.log(minElem); */
/*
Найти среднее значение последоватедьности
чисел с помощью reduce

const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, el, i) => {
    if (i != arr.length - 1) {
        return acc + el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0);
console.log(avg);*/

//find и findIndex
/* const arr = [2, 4, 4, 10, 20];

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
console.log(elGT5Index); */

/*
Написать функцию, которая возвращает true,
если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

function some(arr, num) {
    let res = arr.find(el => num < arr.length);
    return res;

}
console.log(some(arr, 4))