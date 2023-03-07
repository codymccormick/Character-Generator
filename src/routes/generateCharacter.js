import { genders, races, classes, alignments, occupations, backgrounds } from './data';
import { getRandomItemFromArray, rollStat, generateAge } from './helper';
import faker from 'faker';

export function generateCharacter() {
	let character = {
		name: faker.name.findName(),
		age: generateAge(),
		race: getRandomItemFromArray(races),
		gender: getRandomItemFromArray(genders),
		class: getRandomItemFromArray(classes),
		alignment: getRandomItemFromArray(alignments),
		occupation: getRandomItemFromArray(occupations),
		background: getRandomItemFromArray(backgrounds),
		strength: rollStat(),
		dexterity: rollStat(),
		constitution: rollStat(),
		intelligence: rollStat(),
		wisdom: rollStat(),
		charisma: rollStat()
	};
	console.log(character);
	return character;
}
