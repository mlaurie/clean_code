const countOccurences = require('../yams/countOccurences');

const FULL_BONUS = 30;

function calculateFullBonus(diceRoll) {
    const occurences = countOccurences(diceRoll);
    let hasBrelan = false;
    let hasPaire = false;

    for (const diceValue in occurences) {
        if (occurences[diceValue] === 3) {
            hasBrelan = true;
        } else if (occurences[diceValue] === 2) {
            hasPaire = true;
        }
    }

    if (hasBrelan && hasPaire) {
        return FULL_BONUS;
    }

    return 0;
}

module.exports = calculateFullBonus;