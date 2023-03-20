import { rollFate, rollMisfortune, rollDeath } from '../../helpers/helper';
import { randomInRange, generateRandomItemFromObject } from '../../helpers/random';
import { caretakersOrigins, familyBackgrounds, } from './data';

export const generateSibling = () => {
	const age = randomInRange(1, 12);
	const gender = age % 2 ? 'brother' : 'sister';
	const birthOrder = age <= 6 ? 'younger' : 'older';
	const fate = rollFate();
	return { birthOrder, gender, fate };
};

export const generateSiblings = () => {
	const hasSiblings = randomInRange(1, 6) !== 6;
	const siblings = [];

	if (hasSiblings) {
		const numSiblings = randomInRange(1, 12);
		for (let i = 0; i < numSiblings; i++) {
			siblings.push(generateSibling());
		}
	} else {
		siblings.push({ gender: null, birthOrder: null, fate: null });
	}

	return siblings;
};

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

export const rollParentEvent = (eventType) => {
	const eventRoll = randomInRange(1, 6);
	const isEven = eventRoll % 2 === 0;
	const events = Array.from({ length: 2 }, (_, i) => {
		if (isEven || i === (eventRoll % 2) - 1) {
			const eventResult = eventType === 'misfortune' ? rollMisfortune() : rollDeath();
			return eventResult[eventType];
		} else {
			return null;
		}
	});

	const affectedParents = events
		.map((e, i) => (e ? (i === 0 ? 'dad' : 'mom') : null))
		.filter((p) => p);

	const eventDescription = generateParentEventDescription(events, affectedParents, eventType);
	return { [eventType]: events, [`${eventType}Description`]: eventDescription };
};

export const generateParentEventDescription = (events, affectedParents, eventType) => {
	const affected = affectedParents.length === 2 ? 'Both' : affectedParents[0];
	const description = events.find((e) => e && e.description)?.description;
	return `${affected} parent${affectedParents.length > 1 ? 's' : ''} or guardian${
		affectedParents.length > 1 ? 's are' : ' is'
	} affected: ${description}`;
};

export const generateCaretakerOrigin = () => {
	return generateRandomItemFromObject(
		caretakersOrigins,
		'caretakersOrigin',
		'caretakersOriginReason'
	);
};

export const generateFamilyBackground = () => {
	return generateRandomItemFromObject(
		familyBackgrounds,
		'familyBackground',
		'familyBackgroundReason'
	);
};
