const assert = require('assert');
const sortDiceValuesTest = require('../yams/sortDiceValues');

describe('sortDiceValuesTest', () => {
    it('should return an array sorted in ascending order', () => {
        const result = sortDiceValuesTest([3, 1, 4, 2, 5]);
        assert.deepStrictEqual(result, [1, 2, 3, 4, 5]);
    });

    it('should return an array with duplicate values sorted in ascending order', () => {
        const result = sortDiceValuesTest([3, 1, 4, 4, 2]);
        assert.deepStrictEqual(result, [1, 2, 3, 4, 4]);
    });

    it('should return an empty array if the input array is empty', () => {
        const result = sortDiceValuesTest([]);
        assert.deepStrictEqual(result, []);
    });

    it('should return an array with a single value unchanged', () => {
        const result = sortDiceValuesTest([3]);
        assert.deepStrictEqual(result, [3]);
    });

});
