const assert = require('assert');
const calculateFullBonus = require('../yams/calculateFullBonus');

const BONUS_BRELAN = 30;

describe('calculerFullBonus', () => {
    it('should return FULL_BONUS if there is a full in the dice roll', () => {
        const result = calculateFullBonus([1, 1, 1, 2, 2]);
        assert.strictEqual(result, BONUS_BRELAN);
    });

    it('should return 0 if there is no full in the dice roll', () => {
        const result = calculateFullBonus([1, 2, 3, 4, 5]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for an empty dice roll', () => {
        const result = calculateFullBonus([]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for a dice roll with only a brelan', () => {
        const result = calculateFullBonus([3, 3, 3, 4, 5]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for a dice roll with only a paire', () => {
        const result = calculateFullBonus([2, 2, 3, 4, 5]);
        assert.strictEqual(result, 0);
    });
});