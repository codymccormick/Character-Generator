import { randomInRange, getRandomItemFromArray } from "../../../helpers/random";
import { BaseCharacter } from "../../BaseCharacter";
import { generateMisfortune } from "../events/misfortune";
import { generateDeath } from "../events/death";

//Creates a sibling object
export class Sibling extends BaseCharacter {
	constructor() {
		super();
	}
}

export const generateSibling = (mainCharacterAge, parents) => {
	const sibling = new Sibling();
	sibling.birthOrder = randomInRange(1, 12) % 2 ? "younger" : "older";
	sibling.fate = generateSiblingFate();
	sibling.parents = parents;

	// Determine sibling age based on main character's age and birth order
	const ageDifference = randomInRange(1, 6);
	if (sibling.birthOrder === "younger") {
		sibling.age = Math.max(mainCharacterAge - ageDifference, 1);
	} else {
		sibling.age = mainCharacterAge + ageDifference;
	}

	return sibling;
};

export const generateSiblings = (mainCharacter) => {
	const siblingsCount = randomInRange(1, 6) !== 6 ? randomInRange(1, 6) : 0;
	const siblingsArr = [];

	for (let i = 0; i < siblingsCount; i++) {
		siblingsArr.push(generateSibling(mainCharacter.age, mainCharacter.parents));
	}

	// Add the main character as a sibling for each sibling
	for (const sibling of siblingsArr) {
		sibling.siblings = [mainCharacter, ...siblingsArr.filter((s) => s !== sibling)];
	}

	return siblingsArr;
};

// The generateSiblingFate function determines fate based on a random roll
export const generateSiblingFate = () => {
	return getRandomItemFromArray(siblingFates)
}

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
]

