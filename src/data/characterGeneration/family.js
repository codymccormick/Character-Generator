import { rollFate, rollMisfortune, rollDeath } from '../../helpers/helper';
import { randomInRange, generateRandomItemFromObject } from '../../helpers/random';
import { caretakersOrigins, familyBackgrounds, } from './data';

// Generates a sibling object with birth order, gender, and fate
export const generateSibling = () => {
	const age = randomInRange(1, 12);
	const gender = age % 2 ? 'brother' : 'sister';
	const birthOrder = age <= 6 ? 'younger' : 'older';
	const fate = rollFate();
	return { birthOrder, gender, fate };
};

// Generates an array of sibling objects
export const generateSiblings = () => {
    const hasSiblings = randomInRange(1, 6) !== 6;
    const siblings = [];

    if (hasSiblings) {
        const numSiblings = randomInRange(1, 12);
        for (let i = 0; i < numSiblings; i++) {
            siblings.push(generateSibling());
        }
    }

    return siblings;
};

// Determines the status of the character's caretakers and returns an object with relevant data
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
    const parentToAffect = randomInRange(0, 1); // 0 for dad, 1 for mom

    const events = Array.from({ length: 2 }, (_, i) => {
        if (isEven || i === parentToAffect) {
            const eventResult = eventType === 'misfortune' ? rollMisfortune() : rollDeath();
            return eventResult;
        } else {
            return null;
        }
    });

    const affectedParents = events
        .map((e, i) => (e ? (i === 0 ? 'dad' : 'mom') : null))
        .filter((p) => p);

    const eventDescription = generateParentEventDescription(events, affectedParents, eventType);
    console.log({[`${eventType}Description`]: eventDescription});
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
                return `${parent}<br />${eventName}<br />${description}`;
            }
            return null;
        })
        .filter((d) => d)
        .join('<br /><br />');

    return eventDescriptions;
};

// Generates a random caretaker origin and reason
export const generateCaretakerOrigin = () => {
	return generateRandomItemFromObject(
		caretakersOrigins,
		'caretakersOrigin',
		'caretakersOriginReason'
	);
};

// Generates a random family background and reason
export const generateFamilyBackground = () => {
	return generateRandomItemFromObject(
		familyBackgrounds,
		'familyBackground',
		'familyBackgroundReason'
	);
};
