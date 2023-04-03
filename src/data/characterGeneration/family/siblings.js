import { randomInRange, getRandomItemFromArray } from "../../../helpers/random";
import { BaseCharacter } from "../BaseCharacter";
import { generateMisfortune } from "../events/misfortune";
import { generateDeath } from "../events/death";

// Define the Sibling class
export class Sibling extends BaseCharacter {
	constructor() {
		super();
	}
}

// Generate a single sibling
export const generateSibling = (mainCharacterAge, parents) => {
	// Create a new Sibling object
	const sibling = new Sibling();

	// Determine sibling birth order and fate
	sibling.birthOrder = randomInRange(1, 12) % 2 ? "younger" : "older";
	sibling.fate = generateSiblingFate();

	// Set sibling's parents
	sibling.parents = parents;

	// Determine sibling age based on main character's age and birth order
	const ageDifference = randomInRange(1, 6);
	if (sibling.birthOrder === "younger") {
		sibling.age = Math.max(mainCharacterAge - ageDifference, 1);
	} else {
		sibling.age = mainCharacterAge + ageDifference;
	}

	// Return the generated sibling
	return sibling;
};

// Generate an array of siblings for the main character
export const generateSiblings = (mainCharacter) => {
	// Determine how many siblings to generate
	const siblingsCount = randomInRange(1, 6) !== 6 ? randomInRange(1, 6) : 0;

	// Create an array to hold the generated siblings
	const siblingsArr = [];

	// Generate each sibling
	for (let i = 0; i < siblingsCount; i++) {
		siblingsArr.push(generateSibling(mainCharacter.age, mainCharacter.parents));
	}

	// Add the main character as a sibling for each sibling
	for (const sibling of siblingsArr) {
		sibling.siblings = [mainCharacter, ...siblingsArr.filter((s) => s !== sibling)];
	}

	// Return the generated siblings
	return siblingsArr;
};

// Object that defines different fate scenarios for a sibling
const siblingFates = [
	{
		title: "Lost Touch",
		type: "Sibling Fate",
		description: "It is unknown to you what became of this sibling.",
	},
	{
		title: "Lives with Parents",
		type: "Sibling Fate",
		description: "This sibling is home with your parents.",
	},
	{ 
		title: "Misfortune", 
		description: "This sibling has had bad luck in life." ,
		type: "Sibling Fate",
		misfortune: generateMisfortune(),
	},
	{
		title: "Keeps in Touch",
		type: "Sibling Fate",
		description: "This sibling is enjoying his or her own life, apart, but keeps in touch.",
	},
	{
		title: "They Hate You",
		type: "Sibling Fate",
		description: "This sibling despises you for some past transgression.",
	},
	{ 
		title: "Dead", 
		type: "Sibling Fate",
		description: "This sibling has died.",
		death: generateDeath()
	},
];

// Function that randomly selects a fate scenario for a sibling
export const generateSiblingFate = () => {
	return getRandomItemFromArray(siblingFates)
};
