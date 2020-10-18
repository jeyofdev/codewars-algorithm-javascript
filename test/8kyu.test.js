const assert = require('assert');
const multiply = require('../src/8kyu/1-multiply/multiply');
const even_or_odd = require('../src/8kyu/2-even_or_odd/even_or_odd');

describe("multiply", () => {
    it("Return the multiplication between 2 number", () => {
        assert.strictEqual(multiply(1, 1), 1);
        assert.strictEqual(multiply(2, 1), 2);
        assert.strictEqual(multiply(2, 2), 4);
        assert.strictEqual(multiply(3, 5), 15);   
    });
});


describe("even_or_odd", () => {
    it("Check that a number is odd or even", () => {
        assert.strictEqual(even_or_odd(2), "Even");
        assert.strictEqual(even_or_odd(0), "Even");
        assert.strictEqual(even_or_odd(7), "Odd");
        assert.strictEqual(even_or_odd(1), "Odd");   
    });
});