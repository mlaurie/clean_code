const sortDiceValues = require('./sortDiceValues');

const GRANDE_SUITE_BONUS = 40;

function calculateGrandeSuiteBonus(diceRoll) {
    const sortedDiceValues = sortDiceValues(diceRoll);
    const sortingModel = [1, 2, 3, 4, 5];

    if (JSON.stringify(sortedDiceValues) === JSON.stringify(sortingModel)) {
        return GRANDE_SUITE_BONUS;
    }

    return 0;
}

module.exports = calculateGrandeSuiteBonus;