const countOccurences = require('../yams/countOccurences');

const BONUS_BRELAN = 28;
const BONUS_CARRE = 35;
const BONUS_FULL = 30;
const BONUS_GRANDE_SUITE = 40;
const BONUS_YAMS = 50;

function calculatePoints(diceRolls) {
    //TODO : implement
}

const diceRolls = [
    [1, 2, 3, 4, 5],
    [1, 1, 1, 3, 3],
];

const totalPoints = calculatePoints(diceRolls);
console.log("Your points :", totalPoints);