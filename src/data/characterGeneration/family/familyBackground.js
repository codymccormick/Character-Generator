import { generateRandomItemFromObject } from '../../../helpers/random';

// Generates a random family background and reason
export const generateFamilyBackground = () =>
	generateRandomItemFromObject(familyBackgrounds, 'familyBackground', 'familyBackgroundReason');

export const familyBackgrounds = {
	'Homeless ': ['Pan handling in the streets '],
	Entertainers: ['Bards,Minstrels, Poets, Actors '],
	'Serfs/Servants': ['In service to a feudal lord'],
	'Free Laborers': ['Self sufficient farmers, fishermen or other subsistence trade'],
	'Monks or Scholars': ['Parents were immersed in a higher calling'],
	Military: ['Career soldiers or mercenaries'],
	Tradesman: ['Practiced a minor trade'],
	Guild: ['Practiced a popular trade as members of a broad guild'],
	Merchant: ['From peddlers to gypsies, trade in everything and anything'],
	'Minor Noble': ["Part of a knight's, minor liege lord or other minor household"],
	'Major Noble': ['Member of a recognized noble family with ties to dukes and barons'],
	Royalty: ['In the same bloodline as the ruling family']
};
