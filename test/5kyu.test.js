const assert = require('assert');
const orderWeight = require('../src/5kyu/1-weight_for_weight/orderWeight');
const perimeter = require('../src/5kyu/2-perimeter_of_squares_in_a_rectangle/perimeter');


describe("5kyu", () => {
    describe("orderWeight", () => {
        it("Define a number (sum of digits) for each weight in a list and return them in ascending order", () => {
            assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
            assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");
        });
    });



    describe("perimeter", () => {
        it("Return the sum of the perimeters of the squares of a rectangle according to the Fibonacci sequence", () => {
            assert.strictEqual(perimeter(0), 4)
            assert.strictEqual(perimeter(5), 80)
            assert.strictEqual(perimeter(7), 216)
            assert.strictEqual(perimeter(20), 114624)
            assert.strictEqual(perimeter(30), 14098308)
        });
    });
});
