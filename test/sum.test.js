const assert = require('assert');
const sum = require('../sum');

describe('sum function', function() {
    it('should return the sum of two numbers', function() {
        const result = sum(2, 3);
        assert.strictEqual(result, 5);
    });

    it('should handle negative numbers', function() {
        const result = sum(-2, 5);
        assert.strictEqual(result, 3);
    });

    it('should handle zero values', function() {
        const result = sum(0, 7);
        assert.strictEqual(result, 7);
    });
});