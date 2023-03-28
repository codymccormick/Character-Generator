import { characterStore } from "./store";
import { BaseCharacter } from "./characterGeneration/BaseCharacter";
import { generateBirthplace } from "./characterGeneration/origins/birthplace";
import { generateChildhoodEnvironment } from "./characterGeneration/origins/childhoodEnvironment";
import { generateRaisedBy } from "./characterGeneration/family/raisedBy";
// import { rollCaretakerStatus } from "./characterGeneration/family/caretaker";
import { generateFamilyBackground } from "./characterGeneration/family/familyBackground";
import { generateSiblings } from "./characterGeneration/family/siblings";
import { generateFateEvents } from "./characterGeneration/significantEvents/fate";
// import { generateCaretaker } from "./characterGeneration/family/caretaker";
import { generateParents } from "./characterGeneration/family/caretaker";

export class MainCharacter extends BaseCharacter {
	constructor() {
		super();

		this.birthplace = generateBirthplace();
		Object.assign(this, generateChildhoodEnvironment());

		this.siblings = generateSiblings(this.age);
		const maxChildAge = Math.max(this.age, ...this.siblings.map((sibling) => sibling.age));
		this.parents = generateParents(maxChildAge); // Pass maxChildAge as an argument

		Object.assign(this, generateRaisedBy(this.parents));

		// this.caretakerStatus = rollCaretakerStatus();
		Object.assign(this, generateFamilyBackground());

		this.fateEvents = generateFateEvents();
		this.enemies = [];
		this.friends = [];

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
