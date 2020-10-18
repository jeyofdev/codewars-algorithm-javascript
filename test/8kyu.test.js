const assert = require('assert');
const multiply = require('../src/8kyu/1-multiply/multiply');
const even_or_odd = require('../src/8kyu/2-even_or_odd/even_or_odd');
const opposite_number = require('../src/8kyu/3-opposite_number/opposite_number');


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


describe("opposite_number", () => {
    it("Return the opposite number", () => {
        assert.strictEqual(opposite_number(1), -1);
        assert.strictEqual(opposite_number(14), -14);
        assert.strictEqual(opposite_number(0), 0);
        assert.strictEqual(opposite_number(4.25), -4.25); 
        assert.strictEqual(opposite_number(-34), 34); 
        assert.strictEqual(opposite_number(3.3333333), -3.3333333); 
        assert.strictEqual(opposite_number(12525220.3325), -12525220.3325); 
    });
});