import { randomInRange } from "../../../helpers/random";

// Generate a character age based on a random roll and predefined age ranges
export const generateAge = () => {
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
		const roll = randomInRange(1, 100);
		const ageRange = ageRanges.find(({ rollRange }) => rollRange.includes(roll));
		age = ageRange && randomInRange(ageRange.ageRange.min, ageRange.ageRange.max);
	}
	return age;
};

export const getSiblingsAges = (siblings) => {
	return Object.values(siblings).map((sibling) => sibling.age);
};