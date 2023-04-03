import { randomInRange } from "../../../helpers/random";

// Function to generate age based on specified age ranges and roll values
export const generateAge = () => {
	// Define age ranges and their corresponding roll ranges
	const ageRanges = [
		{ rollRange: [1, 20], ageRange: { min: 10, max: 20 } },
		{ rollRange: [21, 59], ageRange: { min: 21, max: 30 } },
		{ rollRange: [60, 69], ageRange: { min: 31, max: 40 } },
		{ rollRange: [70, 89], ageRange: { min: 41, max: 50 } },
		{ rollRange: [90, 99], ageRange: { min: 51, max: 60 } },
		{ rollRange: [100], ageRange: { min: 61, max: 100 } },
	];

	let age;
	// Loop until a valid age is generated based on the roll
	while (!age) {
		// Generate a random roll value
		const roll = randomInRange(1, 100);
		// Find the corresponding age range for the roll
		const ageRange = ageRanges.find(({ rollRange }) => rollRange.includes(roll));
		// Generate a random age within the age range
		age = ageRange && randomInRange(ageRange.ageRange.min, ageRange.ageRange.max);
	}
	// Return the generated age
	return age;
};

// Function to get ages of all siblings from a siblings object
export const getSiblingsAges = (siblings) => {
	// Map over sibling objects and return their ages
	return Object.values(siblings).map((sibling) => sibling.age);
};
