// Import the function sum from the app.js file
const { fromDollarToYen, fromEuroToDollar, fromYenToPound, sum} = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test('One euro should be 1.07 dollars', () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test('One dollar should be 146.26 yenes (approximately)', () => {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5; // ≈ 146.26
    expect(yenes).toBeCloseTo(expected, 2);
});

test('One yen should be 0.0056 pounds (approximately)', () => {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87; // ≈ 0.0056
    expect(pounds).toBeCloseTo(expected, 4);
});