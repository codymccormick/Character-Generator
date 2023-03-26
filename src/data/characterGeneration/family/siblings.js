import { randomInRange } from '../../../helpers/random';
import { rollFate } from './siblingFate';

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
