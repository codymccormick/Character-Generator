import {
  genders,
  classes,
  alignments,
  occupations,
  backgrounds,
} from "./characterGeneration/data";
import { rollStat, generateAge } from "../helpers/helper";
import faker from "faker";
import { characterStore } from "./store";
import {
  generateRace,
  generateBirthplace,
  generateChildhoodEnvironment,
} from "./characterGeneration/origin";
import {
  generateSiblings,
  rollCaretakerStatus,
  generateFamilyBackground,
  generateCaretakerOrigin,
} from "./characterGeneration/family";
import {
  generateRandomItemFromObject,
  getRandomItemFromArray,
} from "../helpers/random";

class Character {
  constructor() {
    this.name = faker.name.findName();
    this.age = generateAge();
    this.race = generateRace();
    this.gender = getRandomItemFromArray(genders);
    this.class = getRandomItemFromArray(classes);
    this.alignment = getRandomItemFromArray(alignments);
    Object.assign(this, generateBirthplace());
    Object.assign(this, generateChildhoodEnvironment());
    Object.assign(this, generateCaretakerOrigin());
    this.caretakerStatus = rollCaretakerStatus();
    Object.assign(this, generateFamilyBackground());
    this.siblings = generateSiblings();
    this.strength = rollStat();
    this.dexterity = rollStat();
    this.constitution = rollStat();
    this.intelligence = rollStat();
    this.wisdom = rollStat();
    this.charisma = rollStat();

    const { background, backgroundReason } = generateRandomItemFromObject(
      backgrounds,
      "background",
      "backgroundReason"
    );
    const { occupation, occupationReason } = generateRandomItemFromObject(
      occupations,
      "occupation",
      "occupationReason"
    );

    this.occupation = occupation;
    this.occupationReason = occupationReason;
    this.background = background;
    this.backgroundReason = backgroundReason;
  }
}

export const generateCharacter = () => {
	const character = new Character();
	characterStore.set(character);
	console.log(character);
	return character;
  };