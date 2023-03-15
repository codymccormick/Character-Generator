import { genders, races, classes, alignments, occupations, backgrounds, birthplaces, childhoodEnvironments, caretakersOrigins } from '../scripts/data';
import {
	getRandomItemFromArray,
	rollStat,
	generateAge,
	generateRandomItemFromObject,
	generateSiblings
} from '../scripts/helper';
import faker from 'faker';
import { characterStore } from '../../routes/store';

export function generateCharacter() {

	const { background, backgroundReason } = generateRandomItemFromObject(backgrounds, 'background', 'backgroundReason');
	const { occupation, occupationReason } = generateRandomItemFromObject(occupations, 'occupation', 'occupationReason');
	const { birthplace, birthplaceReason } = generateRandomItemFromObject(birthplaces, 'birthplace', 'birthplaceReason');
	const { childhoodEnvironment, childhoodEnvironmentReason } = generateRandomItemFromObject(childhoodEnvironments, 'childhoodEnvironment', 'childhoodEnvironmentReason');
	const { caretakersOrigin, caretakersOriginReason } = generateRandomItemFromObject(caretakersOrigins, 'caretakersOrigin', 'caretakersOriginReason');
	
	let character = {
		name: faker.name.findName(),
		age: generateAge(),
		race: getRandomItemFromArray(races),
		gender: getRandomItemFromArray(genders),
		class: getRandomItemFromArray(classes),
		alignment: getRandomItemFromArray(alignments),
		birthplace,
		birthplaceReason,
		childhoodEnvironment,
		childhoodEnvironmentReason,
		caretakersOrigin,
		caretakersOriginReason,
		siblings: generateSiblings(),
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
};
