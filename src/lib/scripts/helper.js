import { backgrounds, birthplaces, occupations } from '../scripts/data';

export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function getRandomItemFromArray(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

export function rollStat() {
	const rolls = [];
	for (let i = 0; i < 4; i++) {
		rolls.push(Math.floor(Math.random() * 6) + 1);
	}
	rolls.sort((a, b) => a - b);
	return rolls[1] + rolls[2] + rolls[3];
}

export function generateAge() {
	const ageRanges = [
		{ rollRange: [1, 20], ageRange: { min: 10, max: 20 } },
		{ rollRange: [21, 59], ageRange: { min: 21, max: 30 } },
		{ rollRange: [60, 69], ageRange: { min: 31, max: 40 } },
		{ rollRange: [70, 89], ageRange: { min: 41, max: 50 } },
		{ rollRange: [90, 99], ageRange: { min: 51, max: 60 } },
		{ rollRange: [100], ageRange: { min: 61, max: 100 } }
	];

	let age;
	while (!age) {
		const roll = Math.floor(Math.random() * 100) + 1;
		const ageRange = ageRanges.find(({ rollRange }) => rollRange.includes(roll));
		age = ageRange && randomInRange(ageRange.ageRange.min, ageRange.ageRange.max);
	}
	return age;
}

export function generateBackground() {
	const backgroundKeys = Object.keys(backgrounds);
	const randomBackground = getRandomItemFromArray(backgroundKeys);
	const backgroundReasons = backgrounds[randomBackground];
	const randomReason = getRandomItemFromArray(backgroundReasons);
	return {
		background: randomBackground,
		backgroundReason: randomReason
	};
}

export function generateOccupation() {
	const occupationKeys = Object.keys(occupations);
	const randomOccupation = getRandomItemFromArray(occupationKeys);
	const occupationReasons = occupations[randomOccupation];
	const randomReason = getRandomItemFromArray(occupationReasons);
	return {
		occupation: randomOccupation,
		occupationReason: randomReason
	};
}

export function generatebirthplace() {
	const birthplaceKeys = Object.keys(birthplaces);
	const randomBirthplace = getRandomItemFromArray(birthplaceKeys);
	const birthplaceReasons = birthplaces[randomBirthplace];
	const randomReason = getRandomItemFromArray(birthplaceReasons);
	return {
		birthplace: randomBirthplace,
		birthplaceReason: randomReason
	};
}
