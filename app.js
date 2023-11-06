const passwordUser = 'qwer1234';
console.log(passwordUser);

function crypto(password) {
    let arr = password.split('');
    let random = arr.reverse();
    let str = random.join('');
    return str;
}

let cryptoPass = crypto(passwordUser);

console.log(cryptoPass);

function check(cryptoPass, password) {

    let arr2 = cryptoPass.split('');
    let reverte = arr2.reverse();
    let str2 = reverte.join('');
    console.log(str2);

    if (str2 === password) {
        return true;
    } else {
        return false;
    }
}

console.log(check(cryptoPass, 'qwer1234'));