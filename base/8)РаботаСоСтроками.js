//Работа со строками
const userName = 'Vasya Pupkin';
console.log(userName[0]);
console.log(userName.charAt(2));
console.log(userName.length);
console.log(userName.indexOf('a'));
console.log(userName.lastIndexOf('a'));
console.log(userName.includes('sya'));
console.log(userName.includes('syas'));
console.log(userName.slice(5));
console.log(userName.slice(5, 8));

///
const user = 'Vasya aka Terminator Pupkin';
console.log(user);
//const userName = user.slice(0, 5);
const userName = user.slice(0, user.indexOf(' '));
console.log(userName);
//const serName = user.slice(-6);
const serName = user.slice(user.lastIndexOf(' ') + 1,
    user.length);
console.log(serName);


//преоразование строк
const str = 'Vasya Pupkin';
console.log(str.includes('a'));
console.log(str.startsWith('V'));
console.log(str.endsWith('n'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('V', 'M'));
console.log(str.replaceAll('a', 'u'));

const str2 = '   Vasya Pupkin   \n ';
console.log(str2.trim())

///
//Задание: проверить является ли это номером телефона России
/* //верные
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
//не верные
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356'; */
//моё решение
function currNumber(phone) {
    console.log(phone);
    const delSpace = phone.trim()
        .replaceAll('-', '')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll(' ', '');
    console.log(delSpace);
    if (
        (
            (delSpace.startsWith('+') && delSpace.charAt(1) === '7')
            || (delSpace.startsWith('8') && delSpace.charAt(1) === '9')
        )
        && (delSpace.length <= 12 && delSpace.length >= 11)
    ) {
        return !isNaN(Number(delSpace));
    } else {
        return false;
    }
}
console.log(currNumber(num2));

//ларычев
function isPhoneNumber(num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    }
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll(' ', '');
    num = num.replaceAll('-', '');
    if (num.length != 11) {
        return false;
    }
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}


///Строки и массивы
const userFullName = 'Vasya Vasilevich Pupkin';
console.log(userFullName.split(' '))
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);
console.log(familyName);
console.log(lastName);
const arr = ['you', 'know', 'js'];
console.log(arr.join(' '));

//Дополнение строк
const film = 'Stars wars';
 console.log(film.padStart(20));
console.log(film.padStart(20, '*'));
console.log(film.padEnd(20, '*'));
console.log(film.repeat(10));

//
const cardNumber = '23428345034508353';
console.log(cardNumber.slice(-4).padStart(16, '*'))
//console.log(cardNumber.replaceAll('2', '*'));
//console.log(cardNumber.slice(0,-4).replaceAll('', '*'));

let str = 'Hi 😄! How are you?';
console.log(str[7]); 
let str = 'How are you?';
console.log(str.toUpperCase().indexOf('A'));
let str = 'How are you?';
console.log(str.split(' ')[1]);
let str = 'How are you?';
str = str.padStart(1, '%');
console.log(str);
let str = 'How are you?';
str = str.padStart(15, '*');
console.log(str);


/* Написать функцию проверки номера карты алгоритма Луна. 
В функцию передаётся карта 4561-2612-1234-5464. 
а функция возвращает true если акарта проходит алгоритм
 и false если нет */
 const card = '4561-2612-1234-5464';
 const card2 = '5561-2612-1234-5464';
 function luna(card) {
     const delTrash = card.replaceAll('-', '').split('').map(Number);
     console.log(delTrash);
     if (delTrash.length === 16) {
         for (let i = delTrash.length - 2; i >= 0; i -= 2 /* i = i - 2 || i--  */) {
             console.log(i);
             delTrash[i] *= 2;
             
             if (delTrash[i] > 9) {
                 delTrash[i] -= 9;
             }
         }
         let sum = delTrash.reduce(function (acc, curr) {
             return acc + curr;
         }, 0);
         console.log(sum);
         return sum % 10 === 0;
     }
     else {
         return false;
     }
 }
 console.log(luna(card));
