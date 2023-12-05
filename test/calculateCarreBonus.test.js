const assert = require('assert');
const calculateCarreBonusTest = require('../yams/calculateCarreBonus');

const CARRE_BONUS = 35;

describe('calculateCarreBonusTest', () => {
    it('should return CARRE_BONUS if there is a carre in the dice roll', () => {
        const result = calculateCarreBonusTest([1, 6, 6, 6, 6]);
        assert.strictEqual(result, CARRE_BONUS);
    });

    it('should return 0 if there is no carre in the dice roll', () => {
        const result = calculateCarreBonusTest([1, 2, 3, 4, 5]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for an empty dice roll', () => {
        const result = calculateCarreBonusTest([]);
        assert.strictEqual(result, 0);
    });
});