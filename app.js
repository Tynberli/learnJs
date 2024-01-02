//Работа со строками
/* const userName = 'Vasya Pupkin';
console.log(userName[0]);
console.log(userName.charAt(2));
console.log(userName.length);
console.log(userName.indexOf('a'));
console.log(userName.lastIndexOf('a'));
console.log(userName.includes('sya'));
console.log(userName.includes('syas'));
console.log(userName.slice(5));
console.log(userName.slice(5, 8));
 */
/* 
const user = 'Vasya aka Terminator Pupkin';
console.log(user);
//const userName = user.slice(0, 5);
const userName = user.slice(0, user.indexOf(' '));
console.log(userName);
//const serName = user.slice(-6);
const serName = user.slice(user.lastIndexOf(' ') + 1,
    user.length);
console.log(serName); */
//преоразование строк
/* const str = 'Vasya Pupkin';
console.log(str.includes('a'));
console.log(str.startsWith('V'));
console.log(str.endsWith('n'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('V', 'M'));
console.log(str.replaceAll('a', 'u'));

const str2 = '   Vasya Pupkin   \n ';
console.log(str2.trim()) */

///
//Задание: проверить является ли это номером телефона России
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function currNumber(phone) {
    console.log(phone);

    const delSpace = phone.trim();
    console.log(delSpace);
    if (phone.startsWith(8 || +7)) {
        return true;
    } else {
        return false;
    }

}

console.log(currNumber(num5))