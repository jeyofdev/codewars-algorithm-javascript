const assert = require('assert');
const multiply = require('../src/8kyu/multiply/multiply');

describe("Multiply", () => {
    it("fixed tests", () => {
        assert.strictEqual(multiply(1, 1), 1);
        assert.strictEqual(multiply(2, 1), 2);
        assert.strictEqual(multiply(2, 2), 4);
        assert.strictEqual(multiply(3, 5), 15);   
    });
});