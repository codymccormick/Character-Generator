import faker from 'faker';
import { characterStore } from './store';
import { rollStat } from '../helpers/helper';
import { getRandomItemFromArray } from '../helpers/random';
import { classes } from './characterGeneration/misc/classes';
import { generateAge } from './characterGeneration/misc/age';
import { generateRace } from './characterGeneration/origins/race';
import { alignments } from './characterGeneration/misc/alignments';
import { generateOccupation } from './characterGeneration/occupation';
import { generateSiblings } from './characterGeneration/family/siblings';
import { generateBirthplace } from './characterGeneration/origins/birthplace';
import { rollCaretakerStatus } from './characterGeneration/family/caretakerStatus';
import { generateCaretakerOrigin } from './characterGeneration/family/caretakerOrigins';
import { generateFamilyBackground } from './characterGeneration/family/familyBackground';
import { generateChildhoodEnvironment } from './characterGeneration/origins/childhoodEnvironment';
import { generateFateEvents } from './characterGeneration/significantEvents/fate';

class Character {
	constructor() {
		this.name = faker.name.findName();
		this.age = generateAge();
		this.race = generateRace();
		this.gender = Math.random() > 0.5 ? 'Male' : 'Female';
		this.class = getRandomItemFromArray(classes);
		this.alignment = getRandomItemFromArray(alignments);

		// Add birthplace, childhood environment, and caretaker origin properties
		Object.assign(this, generateBirthplace());
		Object.assign(this, generateChildhoodEnvironment());
		Object.assign(this, generateCaretakerOrigin());

		this.caretakerStatus = rollCaretakerStatus();
		Object.assign(this, generateFamilyBackground());
		this.siblings = generateSiblings();

		Object.assign(this, generateOccupation());

		this.fateEvents = generateFateEvents();

		// Roll ability scores
		this.strength = rollStat();
		this.dexterity = rollStat();
		this.constitution = rollStat();
		this.intelligence = rollStat();
		this.wisdom = rollStat();
		this.charisma = rollStat();
	}
}

export const generateCharacter = () => {
	const character = new Character();
	characterStore.set(character);
	console.log(character);
	return character;
};
