import { rollFate, rollMisfortune, rollDeath } from '../../helpers/helper';
import { randomInRange, generateRandomItemFromObject } from '../../helpers/random';
import { caretakersOrigins, familyBackgrounds } from './data';

// Generates a sibling object with birth order, gender, and fate
export const generateSibling = () => ({
	birthOrder: randomInRange(1, 12) <= 6 ? 'younger' : 'older',
	gender: randomInRange(1, 12) % 2 ? 'brother' : 'sister',
	fate: rollFate()
});

// Generates an array of sibling objects
export const generateSiblings = () =>
	randomInRange(1, 6) !== 6
		? Array.from({ length: randomInRange(1, 12) }, () => generateSibling())
		: [];

// Determines the caretaker status based on a random roll
export const rollCaretakerStatus = () => {
	const roll = randomInRange(1, 12);
	const result = {};

	if (roll <= 6) {
		result.status = 'Alive and well';
		result.description = 'Your parents or guardians are both doing well';
	} else if (roll <= 10) {
		result.status = 'Misfortune';
		result.misfortune = rollParentEvent('misfortune');
	} else {
		result.status = 'Death';
		result.death = rollParentEvent('death');
	}

	return result;
};

// Generates an event for parents based on eventType ('misfortune' or 'death')
export const rollParentEvent = (eventType) => {
	const eventRoll = randomInRange(1, 6);
	const isEven = eventRoll % 2 === 0;
	const parentToAffect = isEven ? null : randomInRange(0, 1); // null for both parents, 0 for dad, 1 for mom

	const events = Array.from({ length: 2 }, (_, i) =>
		isEven || parentToAffect === i
			? eventType === 'misfortune'
				? rollMisfortune()
				: rollDeath()
			: null
	);

	const eventDescription = events
		.map((e, i) =>
			e
				? { parent: i === 0 ? 'Dad' : 'Mom', eventName: e[eventType], description: e.description }
				: null
		)
		.filter((d) => d);

	return { [eventType]: events, [`${eventType}Description`]: eventDescription };
};

// Generates a description for the parent event, combining eventType, affectedParents, and description
export const generateParentEventDescription = (events, affectedParents, eventType) => {
	const eventDescriptions = events
		.map((e, i) => {
			if (e && e[eventType]) {
				const parent = i === 0 ? 'Dad' : 'Mom';
				const eventName = e[eventType];
				const description = e.description;
				return { parent, eventName, description };
			}
			return null;
		})
		.filter((d) => d);

	return eventDescriptions;
};

// Generates a random caretaker origin and reason
export const generateCaretakerOrigin = () =>
	generateRandomItemFromObject(caretakersOrigins, 'caretakersOrigin', 'caretakersOriginReason');

export const generateFamilyBackground = () =>
	generateRandomItemFromObject(familyBackgrounds, 'familyBackground', 'familyBackgroundReason');
