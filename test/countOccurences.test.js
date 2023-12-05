const assert = require('assert');
const countOccurences = require('../yams/countOccurences');

describe('countOccurences', () => {
    it('should return the correct occurrences for a given dice roll', () => {
        const result = countOccurences([1, 2, 4, 4, 4]);
        assert.deepStrictEqual(result, { 1: 1, 2: 1, 4: 3 });
    });

    it('should return an empty occurrences object for an empty dice roll', () => {
        const result = countOccurences([]);
        assert.deepStrictEqual(result, {});
    });

    it('should return occurrences with a single value', () => {
        const result = countOccurences([3]);
        assert.deepStrictEqual(result, { 3: 1 });
    });
});