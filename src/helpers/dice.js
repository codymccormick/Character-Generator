import { randomInRange } from './random';

//roll die
export function rollDie(sides) {
	return randomInRange(1, sides);
}

//Roll mutiple dice
export function rollDice(numDice, sides) {
	let total = 0;
	for (let i = 0; i < numDice; i++) {
		total += rollDie(sides);
	}
	return total;
}

//Roll multiple dice with the same number of sides and return an array of individual results:
export function rollDiceArray(numDice, sides) {
	const results = [];
	for (let i = 0; i < numDice; i++) {
		results.push(rollDie(sides));
	}
	return results;
}

//Roll dice using the standard "XdY" notation (e.g., "3d6"):
export function rollDiceNotation(notation) {
	const [numDice, sides] = notation.split('d').map(Number);
	return rollDice(numDice, sides);
}
