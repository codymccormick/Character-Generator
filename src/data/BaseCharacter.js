import faker from "faker";
import { generateAge } from "./characterGeneration/misc/age";
import { generateRace } from "./characterGeneration/origins/race";
import { generateOccupation } from "./characterGeneration/misc/occupation";
import { rollStat } from "../helpers/helper";
import { generateAlignment } from "./characterGeneration/misc/alignments";
import { generateClass } from "./characterGeneration/misc/classes";

export class BaseCharacter {
	constructor() {
		this.name = faker.name.findName();
		this.age = generateAge();
		this.race = generateRace();
		this.gender = Math.random() > 0.5 ? "Male" : "Female";
		this.alignment = generateAlignment();
		this.class = generateClass();
		this.occupation = generateOccupation();

		// Roll ability scores
		this.stats = {
			strength: rollStat(),
			dexterity: rollStat(),
			constitution: rollStat(),
			intelligence: rollStat(),
			wisdom: rollStat(),
			charisma: rollStat(),
		};
	}
}
