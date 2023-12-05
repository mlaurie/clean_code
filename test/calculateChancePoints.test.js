const assert = require('assert');
const calculateChancePoints = require('../yams/calculateChancePoints');

describe('calculateChancePoints', () => {
    it('should return the sum of all dice values', () => {
        const result = calculateChancePoints([2, 2, 2, 4, 6]);
        assert.strictEqual(result, 16);
    });


    it('should return 0 when the input is an empty array', () => {
        const result = calculateChancePoints([]);
        assert.strictEqual(result, 0);
    });
});