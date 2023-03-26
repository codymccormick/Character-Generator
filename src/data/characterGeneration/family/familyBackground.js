import { generateRandomItemFromObject } from '../../../helpers/random';

// Generates a random family background and reason
export const generateFamilyBackground = () =>
	generateRandomItemFromObject(familyBackgrounds, 'familyBackground', 'familyBackgroundReason');

export const familyBackgrounds = {
	'Homeless': [
		'Pan handling in the streets ',
		'Begging for food and shelter',
		'Surviving on their wits and resourcefulness'
	],
	Entertainers: [
		'Bards, Minstrels, Poets, Actors',
		'Acrobats, Jugglers, Circus Performers',
		'Artists, Painters, Sculptors'
	],
	'Serfs/Servants': [
		'In service to a feudal lord',
		"Working in a rich merchant's household",
		'Attending to the needs of a religious institution'
	],
	'Free Laborers': [
		'Self sufficient farmers, fishermen or other subsistence trade',
		'Lumberjacks, Miners, Hunters',
		'Cottage industry workers, like weavers or potters'
	],
	'Monks or Scholars': [
		'Parents were immersed in a higher calling',
		'Raised in a monastery or library',
		'Apprenticed to a wise hermit or sage'
	],
	Military: [
		'Career soldiers or mercenaries',
		'Parents were part of an elite military unit',
		'Descended from a long line of proud warriors'
	],
	Tradesman: [
		'Practiced a minor trade',
		'Skilled leatherworkers, blacksmiths, or tailors',
		'Ran a small shop or business in town'
	],
	Guild: [
		'Practiced a popular trade as members of a broad guild',
		'Masons, Carpenters, or Shipwrights',
		'Alchemists, Herbalists, or Apothecaries'
	],
	Merchant: [
		'From peddlers to gypsies, trade in everything and anything',
		'Owned a successful trading company',
		'Traveled far and wide as part of a merchant caravan'
	],
	'Minor Noble': [
		"Part of a knight's, minor liege lord or other minor household",
		'Landed gentry with a small estate',
		'An influential family in a small town or city'
	],
	'Major Noble': [
		'Member of a recognized noble family with ties to dukes and barons',
		'In line for a significant inheritance or title',
		"Known for their family's exceptional talents or abilities"
	],
	Royalty: [
		'In the same bloodline as the ruling family',
		'Raised in a luxurious palace or castle',
		'Expected to uphold the family legacy and traditions'
	],
	'Explorers and Adventurers': [
		'Descended from a famous explorer or adventurer',
		'Raised in a family with a thirst for discovery',
		'Traveled extensively from a young age'
	],
	'Mystics and Seers': [
		'Born into a family of gifted mystics or seers',
		'Raised with an understanding of the supernatural',
		'Learned the secrets of the arcane arts from family members'
	],
	'Pirates and Smugglers': [
		'Grew up among a crew of pirates or smugglers',
		'Learned the art of deception and stealth from a young age',
		'Inherited a hidden treasure or secret map from a family member'
	],
	'Outcasts and Exiles': [
		'Born into a family that was banished from their homeland',
		'Raised on the fringes of society',
		'Family carries a dark secret or curse'
	]
};
