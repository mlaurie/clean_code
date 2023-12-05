const countOccurences = require('../yams/countOccurences');

const CARRE_BONUS = 35;
const FULL_BONUS = 30;
const GRANDE_SUITE_BONUS = 40;
const YAMS_BONUS = 50;

function calculatePoints(diceRolls) {
    //TODO : implement
}

const diceRolls = [
    [1, 2, 3, 4, 5],
    [1, 1, 1, 3, 3],
];

const totalPoints = calculatePoints(diceRolls);
console.log("Your points :", totalPoints);