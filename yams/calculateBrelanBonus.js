const countOccurences = require('../yams/countOccurences');

const BRELAN_BONUS = 28;

function calculateBrelanBonus(diceRoll) {
    const occurences = countOccurences(diceRoll);
    for (const diceValue in occurences) {
        if (occurences[diceValue] >= 3) {
            return BRELAN_BONUS;
        }
    }
    return 0;
}

module.exports = calculateBrelanBonus;