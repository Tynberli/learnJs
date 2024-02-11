let currentYear = new Date().getFullYear();
console.log(currentYear);
const user = {
    name: 'Вася',
    born: 1993,
    age: function (currYear) {
        console.log(this)
        return currYear - this.born;
    }
}
console.log(user);
console.log(user.age(currentYear));
console.log(user);

