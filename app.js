function converter(cash = 1000, well, currency) {
    switch (true) {
        case currency === "USD":
        case currency === "EU":
        case currency === "CNY":
            return cash / well;
        default:
            return null;
    }
}

console.log(converter(1000, 93.68, "USD"));
console.log(converter(1000, 98.71, "EU"));
console.log(converter(1000, 13.07, "CNY"));
console.log(converter(1000, 113.51, "GBR"));