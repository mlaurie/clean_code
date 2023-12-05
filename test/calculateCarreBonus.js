const assert = require('assert');
const calculateCarreBonus = require('../yams/calculateCarreBonus');

const CARRE_BONUS = 35;

describe('calculateCarreBonus', () => {
    it('should return CARRE_BONUS if there is a carre in the dice roll', () => {
        const result = calculateCarreBonus([1, 6, 6, 6, 6]);
        assert.strictEqual(result, CARRE_BONUS);
    });

    it('should return 0 if there is no carre in the dice roll', () => {
        const result = calculateCarreBonus([1, 2, 3, 4, 5]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for an empty dice roll', () => {
        const result = calculateCarreBonus([]);
        assert.strictEqual(result, 0);
    });
});