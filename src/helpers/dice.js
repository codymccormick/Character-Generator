import { randomInRange } from './random';

// Roll a die with a specified number of sides
export const rollDie = (sides) => {
	return randomInRange(1, sides);
};

// Roll multiple dice with the same number of sides and return the sum of the results
export const rollDice = (numDice, sides) => {
	let total = 0;
	for (let i = 0; i < numDice; i++) {
		total += rollDie(sides);
	}
	return total;
};

//Roll multiple dice with the same number of sides and return an array of individual results:
export const rollDiceArray = (numDice, sides) => {
	const results = [];
	for (let i = 0; i < numDice; i++) {
		results.push(rollDie(sides));
	}
	return results;
};

//Roll dice using the standard "XdY" notation (e.g., "3d6"):
export const rollDiceNotation = (notation) => {
	const [numDice, sides] = notation.split('d').map(Number);
	return rollDice(numDice, sides);
};

// Roll dice using the standard "XdY" notation with modifiers, e.g., "1d20+5"
export const rollDiceWithModifier = (notation) => {
	const [dice, modifier] = notation.split('+');
	const result = rollDiceNotation(dice);

	return result + Number(modifier);
};

// Roll two dice and return the higher or lower value based on the advantage/disadvantage flag
export const rollWithAdvantageOrDisadvantage = (sides, advantage = true) => {
	const roll1 = rollDie(sides);
	const roll2 = rollDie(sides);

	return advantage ? Math.max(roll1, roll2) : Math.min(roll1, roll2);
};
