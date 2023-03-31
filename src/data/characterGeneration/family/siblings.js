import { randomInRange } from "../../../helpers/random";
import { generateOccupation } from "../misc/occupation";
import { getRandomItemFromArray } from "../../../helpers/random";
import { alignments } from "../misc/alignments";
import { BaseCharacter } from "../BaseCharacter";
import { rollMisfortune } from "../significantEvents/misfortune";
import { rollDeath } from "../significantEvents/death";

//Creates a sibling object
export class Sibling extends BaseCharacter {
	constructor() {
		super();

		this.siblings = null; // Set this value when creating the GeneratedCharacter instance
		this.parents = null; // Set this value when creating the GeneratedCharacter instance
	}
}

export const generateSibling = (mainCharacterAge, parents) => {
	const sibling = new Sibling();
	sibling.birthOrder = randomInRange(1, 12) % 2 ? "younger" : "older";
	sibling.gender = randomInRange(1, 12) % 2 ? "brother" : "sister";
	sibling.alignment = getRandomItemFromArray(alignments);
	sibling.occupation = generateOccupation();
	sibling.fate = rollFate();
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

export const getSiblingsAges = (siblings) => {
	return Object.values(siblings).map((sibling) => sibling.age);
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

// The rollFate function determines fate based on a random roll
export const rollFate = () => {
	const roll = randomInRange(1, 12);
	let result;

	switch (roll) {
		case 1:
		case 2:
			result = {
				fate: "Lost Touch",
				description: "It is unknown to you what became of this sibling.",
			};
			break;
		case 3:
		case 4:
			result = {
				fate: "Lives with Parents",
				description: "This sibling is home with your parents.",
			};
			break;
		case 5:
		case 6:
			result = { fate: "Misfortune", description: "This sibling has had bad luck in life." };
			result.misfortune = rollMisfortune();
			break;
		case 7:
		case 8:
			result = {
				fate: "Keeps in Touch",
				description: "This sibling is enjoying his or her own life, apart, but keeps in touch.",
			};
			break;
		case 9:
		case 10:
			result = {
				fate: "They Hate You",
				description: "This sibling despises you for some past transgression.",
			};
			break;
		case 11:
		case 12:
			result = { fate: "Dead", description: "This sibling has died." };
			result.death = rollDeath();
			break;
	}

	return result;
};
