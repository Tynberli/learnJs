function convert(cash, well, currency) {
    if (currency === "USD" || currency === "EU" || currency === "CNY") {
        return cash / well;
    } else {
        return null;
    }
}

const operations = (cash = 1000, well, currency) => dollar = convert(cash, well, currency);

console.log(operations(1000, 93.68, "USD"));
console.log(operations(1000, 98.71, "EU"));
console.log(operations(1000, 13.07, "CNY"));
console.log(operations(1000, 113.51, "GBR"));