const assert = require('assert');
const calculateGrandeSuiteBonus = require('../yams/calculateGrandeSuiteBonus');

const GRANDE_SUITE_BONUS = 40;

describe('calculateGrandeSuiteBonus', () => {
    it('should return GRANDE_SUITE_BONUS for a grande suite in the dice roll', () => {
        const result = calculateGrandeSuiteBonus([1, 2, 3, 4, 5]);
        assert.strictEqual(result, GRANDE_SUITE_BONUS);
    });

    it('should return 0 for a non-grande suite in the dice roll', () => {
        const result = calculateGrandeSuiteBonus([1, 2, 3, 4, 6]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for an empty dice roll', () => {
        const result = calculateGrandeSuiteBonus([]);
        assert.strictEqual(result, 0);
    });

    it('should return GRANDE_SUITE_BONUS for a shuffled grande suite in the dice roll', () => {
        const result = calculateGrandeSuiteBonus([3, 1, 5, 4, 2]);
        assert.strictEqual(result, GRANDE_SUITE_BONUS);
    });
});