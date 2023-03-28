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

		this.birthplace = null; // Set this value when creating the GeneratedCharacter instance
		this.siblings = null; // Set this value when creating the GeneratedCharacter instance
		this.childhoodEnvironment = null; // Set this value when creating the GeneratedCharacter instance
		this.caretakerOrigin = null; // Set this value when creating the GeneratedCharacter instance
	}
}

//Generates a sibling object
export const generateSibling = (mainCharacterAge) => {
	const sibling = new Sibling();
	sibling.birthOrder = randomInRange(1, 12) % 2 ? "younger" : "older";
	sibling.gender = randomInRange(1, 12) % 2 ? "brother" : "sister";
	sibling.alignment = getRandomItemFromArray(alignments);
	sibling.occupation = generateOccupation();
	sibling.fate = rollFate();

	// Determine sibling age based on main character's age and birth order
	const ageDifference = randomInRange(1, 6);
	if (sibling.birthOrder === "younger") {
		sibling.age = Math.max(mainCharacterAge - ageDifference, 1);
	} else {
		sibling.age = mainCharacterAge + ageDifference;
	}

	return sibling;
};

// Generates an array of sibling objects
export const generateSiblings = (mainCharacterAge) =>
	randomInRange(1, 6) !== 6
		? Array.from({ length: randomInRange(1, 6) }, () => generateSibling(mainCharacterAge))
		: [];

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
