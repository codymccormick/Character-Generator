import { generateRandomItemFromObject } from '../../../helpers/random';

// Generates a random caretaker origin and reason
export const generateCaretakerOrigin = () =>
	generateRandomItemFromObject(caretakersOrigins, 'caretakersOrigin', 'caretakersOriginReason');

// Different caretaker origins for characters
export const caretakersOrigins = {
	'Original Parents': [
		'Raised by the ones that gave birth to you'
	],
	'Close Family': [
		'You were raised by your aunt and uncle',
		'You were raised by your grandparents'
	],
	Adopted: [
		'Never knew original parents. Raised by a couple not related to you.'
	],
	Institution: [
		'Raised at an institution, be it an orphanage, monastery or other.' //Skip to Significant Times in Your Life
	],
	Master: [
		'Sold or given or kidnapped at an early age and raised as property.' //Skip to Significant Times in Your Life
	],
	'On Your Own': [
		'Have had to rely on yourself for as long as you can remember. ' //Skip to Significant Times in Your Life
	]
};