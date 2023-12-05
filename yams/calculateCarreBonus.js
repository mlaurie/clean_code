const countOccurences = require('../yams/countOccurences');

const CARRE_BONUS = 35;

function calculateCarreBonus(diceRoll) {
    const occurences = countOccurences(diceRoll);
    for (const diceValue in occurences) {
        if (occurences[diceValue] >= 4) {
            return CARRE_BONUS;
        }
    }
    return 0;
}

module.exports = calculateCarreBonus;