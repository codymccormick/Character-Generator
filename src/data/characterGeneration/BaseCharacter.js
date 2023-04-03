import faker from "faker";
import { generateAge } from "./misc/age";
import { generateRace } from "./origins/race";
import { generateOccupation } from "./misc/occupation";
import { rollStat } from "../../helpers/helper";
import { generateAlignment } from "../characterGeneration/misc/alignments";
import { generateClass } from "../characterGeneration/misc/classes";

// Define the BaseCharacter class
export class BaseCharacter {
	constructor() {
		// Generate a random name using the faker library
		this.name = faker.name.findName();
		// Generate a random age using the generateAge function
		this.age = generateAge();
		// Generate a random race using the generateRace function
		this.race = generateRace();
		// Generate a random gender (50% chance of Male or Female)
		this.gender = Math.random() > 0.5 ? "Male" : "Female";
		// Generate a random alignment using the generateAlignment function
		this.alignment = generateAlignment();
		// Generate a random class using the generateClass function
		this.class = generateClass();
		// Generate a random occupation using the generateOccupation function
		this.occupation = generateOccupation();

		// Roll ability scores using the rollStat function
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
