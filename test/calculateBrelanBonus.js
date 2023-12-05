const assert = require('assert');
const calculateBrelanBonus = require('../yams/calculateBrelanBonus');

const BRELAN_BONUS = 28;

describe('calculateBrelanBonus', () => {
    it('should return BRELAN_BONUS if there is a brelan in the dice roll', () => {
        const result = calculateBrelanBonus([1, 6, 6, 6, 6]);
        assert.strictEqual(result, BRELAN_BONUS);
    });

    it('should return 0 if there is no brelan in the dice roll', () => {
        const result = calculateBrelanBonus([1, 2, 3, 4, 5]);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for an empty dice roll', () => {
        const result = calculateBrelanBonus([]);
        assert.strictEqual(result, 0);
    });
});