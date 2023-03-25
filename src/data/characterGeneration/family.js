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
		// 50% chance of parents/guardians being alive and well
		result.status = 'Alive and well';
		result.description = 'Your parents or guardians are both doing well';
	} else if (roll <= 10) {
		// 33% chance of parents/guardians experiencing misfortune
		result.status = 'Misfortune';
		result.misfortune = rollParentEvent('misfortune');
	} else {
		// 17% chance of parents/guardians experiencing death
		result.status = 'Death';
		result.death = rollParentEvent('death');
	}

	return result;
};

// Generates an event for parents based on eventType ('misfortune' or 'death')
export const rollParentEvent = (eventType) => {
	const eventRoll = randomInRange(1, 6);
	const isEven = eventRoll % 2 === 0;
	let parentToAffect;
	if (isEven) {
		// 50% chance of both parents being affected by the event
		parentToAffect = null;
	} else {
		// 50% chance of one parent being affected by the event
		parentToAffect = randomInRange(0, 1); // 0 for dad, 1 for mom
	}

	const events = [];
	for (let i = 0; i < 2; i++) {
		// generate events for both parents
		if (isEven || parentToAffect === i) {
			if (eventType === 'misfortune') {
				events.push(rollMisfortune());
			} else {
				events.push(rollDeath());
			}
		} else {
			events.push(null);
		}
	}

	const eventDescription = [];
	for (let i = 0; i < events.length; i++) {
		// generate descriptions for each event
		if (events[i]) {
			const parent = i === 0 ? 'Dad' : 'Mom';
			const eventName = events[i][eventType];
			const description = events[i].description;
			eventDescription.push({ parent, eventName, description });
		}
	}

	return { [eventType]: events, [`${eventType}Description`]: eventDescription };
};

// Generates descriptions of events generated by rollParentEvent()
export const generateParentEventDescription = (events, eventType) => {
	const eventDescriptions = [];
	for (let i = 0; i < events.length; i++) {
		// loop through each event in the array
		if (events[i] && events[i][eventType]) {
			const parent = i === 0 ? 'Dad' : 'Mom'; // determine which parent the event applies to
			const eventName = events[i][eventType]; // get the name of the event
			const description = events[i].description; // get the event description
			eventDescriptions.push({ parent, eventName, description }); // add a new object with the event details to the array of event descriptions
		}
	}
	return eventDescriptions; // return the array of event descriptions
};

// Generates a random caretaker origin and reason
export const generateCaretakerOrigin = () =>
	generateRandomItemFromObject(caretakersOrigins, 'caretakersOrigin', 'caretakersOriginReason');

// Generates a random family background and reason
export const generateFamilyBackground = () =>
	generateRandomItemFromObject(familyBackgrounds, 'familyBackground', 'familyBackgroundReason');
