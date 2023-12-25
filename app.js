function convert(cash, currency) {
    if (currency === "USD") {
        return cash / 93.68;
    }
    else if (currency === "EU") {
        return cash / 98.71;
    }

    else if (currency === "CNY") {
        return cash / 13.07;
    }
    else{
        return null;
    }

}

const operations = (cash, currency) => dollar = convert(cash, currency);

console.log(operations(1000, "USD"));
console.log(operations(1000, "EU"));
console.log(operations(1000, "CNY"));
console.log(operations(1000, "GBR"));
