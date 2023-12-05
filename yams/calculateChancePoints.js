function calculateChancePoints(diceRoll) {
    return diceRoll.reduce((acc, diceValue) => acc + diceValue, 0);
}

module.exports = calculateChancePoints;