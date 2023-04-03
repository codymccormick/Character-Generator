import { BaseCharacter } from "../BaseCharacter";
import { randomInRange } from "../../../helpers/random";
import { generateDeath } from "../events/death";
import { generateMisfortune } from "../events/misfortune";

// Define Caretaker class that inherits from BaseCharacter
export class Caretaker extends BaseCharacter {
	constructor(type) {
		super();
		this.type = type;
	}
}

// Generate a caretaker with specified type
export const generateCaretaker = (type) => {
	return new Caretaker(type);
};

// Generate parents of a child with the maximum age `maxChildAge`
export const generateParents = (maxChildAge) => {
	// Function to create a parent object with the specified gender
	const createParent = (gender) => {
		// Create a caretaker object
		const parent = generateCaretaker("parent");
		// Set the age of the parent as the maximum child age plus a random value between 16 and 30
		parent.age = maxChildAge + randomInRange(16, 30);
		// Set the gender of the parent
		parent.gender = gender;

		// Determine the caretaker status by rolling a random number
		const caretakerStatus = rollCaretakerStatus();
		// Set the caretaker status of the parent
		parent.caretakerStatus = caretakerStatus.status;

		// Generate an event for the caretaker based on their status
		const events = {};
		if (caretakerStatus.status === "Death") {
			const deathEvent = generateDeath();
			if (deathEvent) {
				events.death = deathEvent;
			}
		} else if (caretakerStatus.status === "Misfortune") {
			const misfortuneEvent = generateMisfortune();
			if (misfortuneEvent) {
				events.misfortune = misfortuneEvent;
			}
		}

		// Set the events of the parent
		parent.events = events;
		// Return the parent object
		return parent;
	};

	// Create a father and a mother object
	const father = createParent("Male");
	const mother = createParent("Female");

	// Return the father and mother objects as an object
	return { father, mother };
};

// Roll for the caretaker status and return an object with the status and description
export const rollCaretakerStatus = () => {
	const roll = randomInRange(1, 12);

	if (roll <= 6) {
		return {
			status: "Alive and well",
			description: "Your parents or guardians are both doing well",
		};
	} else if (roll <= 10) {
		return {
			status: "Misfortune",
			description: "Your parents or guardians have experienced misfortune",
		};
	} else {
		return {
			status: "Death",
			description: "Your parents or guardians have experienced death",
		};
	}
};
