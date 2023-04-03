import { characterStore } from "../../helpers/store";
import { BaseCharacter } from "./BaseCharacter";
import { generateBirthplace } from "./origins/birthplace";
import { generateChildhoodEnvironment } from "./origins/childhoodEnvironment";
import { generateRaisedBy } from "./family/raisedBy";
import { generateFamilyBackground } from "./family/familyBackground";
import { generateSiblings } from "./family/siblings";
import { generateFateEvents } from "./events/fate";
import { generateParents } from "./family/caretaker";
import { getSiblingsAges } from "./misc/age";

// Define the MainCharacter class that extends the BaseCharacter class
export class MainCharacter extends BaseCharacter {
	constructor() {
		super();
		// Initialize empty arrays for siblings, enemies, and friends
		this.siblings = [];
		this.enemies = [];
		this.friends = [];

		// Generate character's birthplace and childhood environment
		this.birthplace = generateBirthplace();
		this.childhoodEnvironment = generateChildhoodEnvironment();

		// Calculate the maximum age among the character and their siblings
		const maxChildAge = Math.max(this.age, ...getSiblingsAges(this.siblings));
		// Generate character's parents based on the maximum age
		this.parents = generateParents(maxChildAge);

		// Add all siblings to the main character's siblings property
		this.siblings.forEach((sibling) => {
			this.siblings.push(sibling);
		});

		// Assign the result of generateRaisedBy function to the main character's raisedBy property
		Object.assign((this.raisedBy = generateRaisedBy(this.parents)));

		// Generate character's family background
		this.familyBackground = generateFamilyBackground();

		// Generate character's fate events
		this.fateEvents = generateFateEvents();

		// Generate siblings after initializing all other properties
		const siblingsData = generateSiblings(this);
		this.siblings.push(...siblingsData);

		// Process fate events and add them to the character's enemies or friends arrays
		for (const event of this.fateEvents) {
			if (event.type === "Enemy") {
				this.enemies.push(event);
			} else if (event.type === "Friend") {
				this.friends.push(event);
			}
		}
	}
}

// Define a function to generate a new MainCharacter and store it in characterStore
export const generateCharacter = () => {
	const character = new MainCharacter();
	characterStore.set(character);
	console.dir(character);
	return character;
};
