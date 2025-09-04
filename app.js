// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// 1 EUR (Euro) = 1.07 USD (US Dollar)
const oneEurois = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}
const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEurois.USD;
    let yenes = euros * oneEurois.JPY;
    return yenes;
}

const fromEuroToDollar = (euros) => {
    return euros * oneEurois.USD;
}

const fromYenToPound = (yenes) => {
    let euros= yenes / oneEurois.JPY;
    let pounds= euros * oneEurois.GBP;
    return pounds;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};

