const countOccurences = require('../yams/countOccurences');

const YAMS_BONUS = 50;

function calculateYamsBonus(diceRoll) {
    const occurences = countOccurences(diceRoll);
    for (const diceValue in occurences) {
        if (occurences[diceValue] === 5) {
            return YAMS_BONUS;
        }
    }
    return 0;
}

module.exports = calculateYamsBonus;