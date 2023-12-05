const assert = require('assert');
const sortDiceValues = require('../yams/sortDiceValues');

describe('sortDiceValues', () => {
    it('should return an array sorted in ascending order', () => {
        const result = sortDiceValues([3, 1, 4, 2, 5]);
        assert.deepStrictEqual(result, [1, 2, 3, 4, 5]);
    });

    it('should return an array with duplicate values sorted in ascending order', () => {
        const result = sortDiceValues([3, 1, 4, 4, 2]);
        assert.deepStrictEqual(result, [1, 2, 3, 4, 4]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = sortDiceValues([]);
        assert.deepStrictEqual(result, []);
    });

    it('should return an array with a single value unchanged', () => {
        const result = sortDiceValues([3]);
        assert.deepStrictEqual(result, [3]);
    });

});
