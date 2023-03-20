import { genders, classes, alignments, occupations, backgrounds } from './characterGeneration/data';
import { rollStat, generateAge } from '../helpers/helper';
import faker from 'faker';
import { characterStore } from './store';
import {
	generateRace,
	generateBirthplace,
	generateChildhoodEnvironment
} from './characterGeneration/origin';
import {
	generateSiblings,
	rollCaretakerStatus,
	generateFamilyBackground,
	generateCaretakerOrigin
} from './characterGeneration/family';
import { generateRandomItemFromObject, getRandomItemFromArray } from '../helpers/random';

export const generateCharacter = () => {
	const { background, backgroundReason } = generateRandomItemFromObject(
		backgrounds,
		'background',
		'backgroundReason'
	);
	const { occupation, occupationReason } = generateRandomItemFromObject(
		occupations,
		'occupation',
		'occupationReason'
	);

	let character = {
		name: faker.name.findName(),
		age: generateAge(),
		race: generateRace(),
		gender: getRandomItemFromArray(genders),
		class: getRandomItemFromArray(classes),
		alignment: getRandomItemFromArray(alignments),
		...generateBirthplace(),
		...generateChildhoodEnvironment(),
		...generateCaretakerOrigin(),
		caretakerStatus: rollCaretakerStatus(),
		...generateFamilyBackground(),
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
