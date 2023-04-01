import { characterStore } from "./store";
import { BaseCharacter } from "./BaseCharacter";
import { generateBirthplace } from "./characterGeneration/origins/birthplace";
import { generateChildhoodEnvironment } from "./characterGeneration/origins/childhoodEnvironment";
import { generateRaisedBy } from "./characterGeneration/family/raisedBy";
import { generateFamilyBackground } from "./characterGeneration/family/familyBackground";
import { generateSiblings } from "./characterGeneration/family/siblings";
import { generateFateEvents } from "./characterGeneration/events/fate";
import { generateParents } from "./characterGeneration/family/caretaker";
import { getSiblingsAges } from "./characterGeneration/family/siblings";

export class MainCharacter extends BaseCharacter {
	constructor() {
		super();

		this.siblings = [];
		this.birthplace = generateBirthplace();
		this.childhoodEnvironment = generateChildhoodEnvironment();

		const maxChildAge = Math.max(this.age, ...getSiblingsAges(this.siblings));
		this.parents = generateParents(maxChildAge);

		// Add all siblings to the main character's siblings property
		this.siblings.forEach((sibling) => {
			this.siblings.push(sibling);
		});

		Object.assign(this.raisedBy = generateRaisedBy(this.parents));

		// this.caretakerStatus = rollCaretakerStatus();
		this.familyBackground = generateFamilyBackground();

		this.fateEvents = generateFateEvents();
		this.enemies = [];
		this.friends = [];

		// Generate siblings after initializing all other properties
		const siblingsData = generateSiblings(this);
		this.siblings.push(...siblingsData);

		for (const event of this.fateEvents) {
			if (event.title === "Made an enemy") {
				this.enemies.push(event);
			} else if (event.title === "Made a friend") {
				this.friends.push(event);
			}
		}
	}
}

export const generateCharacter = () => {
	const character = new MainCharacter();
	characterStore.set(character);
	console.dir(character);
	return character;
};
