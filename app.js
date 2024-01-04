const card = '4561-2612-1234-5464';
const card2 = '5561-2612-1234-5464';
function luna(card) {
    const delTrash = card.replaceAll('-', '').split('').map(Number);
    console.log(delTrash);
    if (delTrash.length === 16) {
        for (let i = delTrash.length - 2; i >= 0; i -= 2) {
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