import { characterStore } from "../../helpers/store"
import { BaseCharacter } from "./BaseCharacter";
import { generateBirthplace } from "./origins/birthplace";
import { generateChildhoodEnvironment } from "./origins/childhoodEnvironment";
import { generateRaisedBy } from "./family/raisedBy";
import { generateFamilyBackground } from "./family/familyBackground";
import { generateSiblings } from "./family/siblings";
import { generateFateEvents } from "./events/fate";
import { generateParents } from "./family/caretaker";
import { getSiblingsAges } from "./misc/age";

export class MainCharacter extends BaseCharacter {
	constructor() {
		super();
		this.siblings = [];
		this.enemies = [];
		this.friends = [];
		this.birthplace = generateBirthplace();
		this.childhoodEnvironment = generateChildhoodEnvironment();

		const maxChildAge = Math.max(this.age, ...getSiblingsAges(this.siblings));
		this.parents = generateParents(maxChildAge);

		// Add all siblings to the main character's siblings property
		this.siblings.forEach((sibling) => {
			this.siblings.push(sibling);
		});

		Object.assign((this.raisedBy = generateRaisedBy(this.parents)));

		this.familyBackground = generateFamilyBackground();

		this.fateEvents = generateFateEvents();
		
		// Generate siblings after initializing all other properties
		const siblingsData = generateSiblings(this);
		this.siblings.push(...siblingsData);

		for (const event of this.fateEvents) {
			if (event.type === "Enemy") {
				this.enemies.push(event);
			} else if (event.type === "Friend") {
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
