import { genders, races, classes, alignments } from '../scripts/data';
import {
	getRandomItemFromArray,
	rollStat,
	generateAge,
	generateBackground,
	generateOccupation
} from '../scripts/helper';
import faker from 'faker';
import { characterStore } from '../../routes/store';

export function generateCharacter() {
	const { background, backgroundReason } = generateBackground();
	const { occupation, occupationReason } = generateOccupation();
	
	let character = {
		name: faker.name.findName(),
		age: generateAge(),
		race: getRandomItemFromArray(races),
		gender: getRandomItemFromArray(genders),
		class: getRandomItemFromArray(classes),
		alignment: getRandomItemFromArray(alignments),
		occupation,
		occupationReason,
		background,
		backgroundReason,
		strength: rollStat(),
		dexterity: rollStat(),
		constitution: rollStat(),
		intelligence: rollStat(),
		wisdom: rollStat(),
		charisma: rollStat()
	};
	characterStore.set(character);
	console.log(character);
	return character;
}
