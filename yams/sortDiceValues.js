function sortDiceValues(diceRoll) {
   return [...diceRoll].sort((firstValue, secondValue) => firstValue - secondValue);
}

module.exports = sortDiceValues;