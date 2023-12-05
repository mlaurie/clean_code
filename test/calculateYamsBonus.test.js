const assert = require('assert');
const calculateYamsBonus = require('../yams/calculateYamsBonus');

const YAMS_BONUS = 50;

describe('calculateYamsBonus', () => {
    it('should return YAMS_BONUS when there are five occurrences of the same dice value', () => {
        const result = calculateYamsBonus([1, 1, 1, 1, 1]);
        assert.strictEqual(result, YAMS_BONUS);
    });

    it('should return 0 when there are not five occurrences of the same dice value', () => {
        const result = calculateYamsBonus([1, 2, 3, 4, 5]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 when the input is an empty array', () => {
        const result = calculateYamsBonus([]);
        assert.strictEqual(result, 0);
    });
});