import {
	genders,
	classes,
	alignments,
	occupations,
	backgrounds,
	caretakersOrigins,
	familyBackgrounds
} from './characterGeneration/data';
import { rollStat, generateAge } from '../helpers/helper';
import faker from 'faker';
import { characterStore } from './store';
import {
	generateRace,
	generateBirthplace,
	generateChildhoodEnvironment
} from './characterGeneration/origin';
import { generateSiblings, rollCaretakerStatus } from './characterGeneration/family';
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
	const { caretakersOrigin, caretakersOriginReason } = generateRandomItemFromObject(
		caretakersOrigins,
		'caretakersOrigin',
		'caretakersOriginReason'
	);
	const { familyBackground, familyBackgroundReason } = generateRandomItemFromObject(
		familyBackgrounds,
		'familyBackground',
		'familyBackgroundReason'
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
		caretakersOrigin,
		caretakersOriginReason,
		caretakerStatus: rollCaretakerStatus(),
		familyBackground,
		familyBackgroundReason,
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
}