import { characterStore } from "./store";
import { BaseCharacter } from "./characterGeneration/BaseCharacter";
import { generateBirthplace } from "./characterGeneration/origins/birthplace";
import { generateChildhoodEnvironment } from "./characterGeneration/origins/childhoodEnvironment";
import { generateCaretakerOrigin } from "./characterGeneration/family/caretakerOrigins";
import { rollCaretakerStatus } from "./characterGeneration/family/caretakerStatus";
import { generateFamilyBackground } from "./characterGeneration/family/familyBackground";
import { generateSiblings } from "./characterGeneration/family/siblings";
import { generateFateEvents } from "./characterGeneration/significantEvents/fate";

export class GeneratedCharacter extends BaseCharacter {
	constructor() {
		super();

		this.birthplace = generateBirthplace();
		Object.assign(this, generateChildhoodEnvironment());
		Object.assign(this, generateCaretakerOrigin());

		this.caretakerStatus = rollCaretakerStatus();
		Object.assign(this, generateFamilyBackground());
		this.siblings = generateSiblings();

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
	const character = new GeneratedCharacter();
	characterStore.set(character);
	console.log(character);
	return character;
  };
