const arr = [1, -7, 3, -5, 10, 0];

const filterRange = (arr, a) => {
    return arr.filter(item => (a <= item));
}

let filtered = filterRange(arr, 0);
console.log(arr);
console.log(filtered);

