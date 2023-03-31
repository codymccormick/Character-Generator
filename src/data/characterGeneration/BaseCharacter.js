import faker from "faker";
import { generateAge } from "../characterGeneration/misc/age";
import { generateRace } from "../characterGeneration/origins/race";
import { alignments } from "../characterGeneration/misc/alignments";
import { getRandomItemFromArray } from "../../helpers/random";
import { classes } from "../characterGeneration/misc/classes";
import { generateOccupation } from "./misc/occupation";
import { rollStat } from "../../helpers/helper";
import { generateAlignment } from "../characterGeneration/misc/alignments";

export class BaseCharacter {
	constructor() {
		this.name = faker.name.findName();
		this.age = generateAge();
		this.race = generateRace();
		this.gender = Math.random() > 0.5 ? "Male" : "Female";
		this.alignment = generateAlignment();
		this.class = getRandomItemFromArray(classes);
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
