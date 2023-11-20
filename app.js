const passwordUser = 'qwer1234';
console.log(passwordUser);

function crypto(password) {
    return password.split('').reverse().join('');
}

let cryptoPass = crypto(passwordUser);

console.log(cryptoPass);

function check(cryptoPass, password) {
    let arr2 = cryptoPass.split('').reverse().join('');
    if (arr2 === password) {
        return true;
    } else {
        return false;
    }
}

console.log(check(cryptoPass, 'qwer1234'));