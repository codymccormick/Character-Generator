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
    let parentToAffect;
    if (isEven) {
        parentToAffect = null;
    } else {
        parentToAffect = randomInRange(0, 1);
    }

    const events = [];
    for (let i = 0; i < 2; i++) {
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
        if (events[i]) {
            const parent = i === 0 ? 'Dad' : 'Mom';
            const eventName = events[i][eventType];
            const description = events[i].description;
            eventDescription.push({ parent, eventName, description });
        }
    }

    return { [eventType]: events, [`${eventType}Description`]: eventDescription };
};

export const generateParentEventDescription = (events, eventType) => {
    const eventDescriptions = [];
    for (let i = 0; i < events.length; i++) {
        if (events[i] && events[i][eventType]) {
            const parent = i === 0 ? 'Dad' : 'Mom';
            const eventName = events[i][eventType];
            const description = events[i].description;
            eventDescriptions.push({ parent, eventName, description });
        }
    }
    return eventDescriptions;
};

// Generates a random caretaker origin and reason
export const generateCaretakerOrigin = () =>
	generateRandomItemFromObject(caretakersOrigins, 'caretakersOrigin', 'caretakersOriginReason');

export const generateFamilyBackground = () =>
	generateRandomItemFromObject(familyBackgrounds, 'familyBackground', 'familyBackgroundReason');
