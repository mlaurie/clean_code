function countOccurences(diceRoll) {
    const OCCURENCES = {};
    const DEFAULT_VALUE = 0;
    const INCREMENT_VALUE = 1;

    for (const diceValue of diceRoll) {
        OCCURENCES[diceValue] = (OCCURENCES[diceValue] || DEFAULT_VALUE) + INCREMENT_VALUE;
    }
    return OCCURENCES;
}

module.exports = countOccurences;