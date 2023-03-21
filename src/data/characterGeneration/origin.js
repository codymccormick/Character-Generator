import { getRandomItemFromArray, generateRandomItemFromObject } from '../../helpers/random';

export const races = [
	'Human',
	'Dwarf',
	'Elf',
	'Halfling',
	'Dragonborn',
	'Gnome',
	'Half-Elf',
	'Half-Orc',
	'Tiefling'
];

export const birthplaces = {
	'Out in the wilderness': [
		'You were born outside the confines of civilization',
	],
	'A Rural Hamlet/Village': [
		'A few houses, isolated from any one kingdom. Not on the map'
	],
	'Slave Pit': [
		'You were born amongst slaves'
	],
	'Town': [
		'Medium size town, part of a kingdom and usually on a map or Scholarly Institution'
	],
	'Religious' : [
		'You were born in a monastery or university or similar setting'
	],
	'Fortress': [
		'A structure built for military use'
	],
	'Palace': [	
		'Place of residence of the royal family'
	],
	'Major metropolis, Capital City': [	
		'A sprawling conglomeration of residences and businesses, always on the map'
	],
	'Caravan or other mobile': [
		'You were born on the move, by nomads or on a ship, maybe the circus.'
	],
	'Alien racial environment': [
		'Raised in the forest by an elven family, or in a cave by wolves, etc.'
	],
	'Alien racial city': [	
		'Raised by another race or species in a conglomeration of said species.'
	],
	'Extraplanar': [	
		'Raised in a plane other than the prime material'
	],
		
};

export const childhoodEnvironments = {
	'No Adult Supervision': [
		'No one was around a majority of the time, or at all, to supervise. No real structure.',
	],
	'Abusive': [
		'Caretakers provided significant physical and/or mental abuse'
	],
	'Sheltered': [
		'Constant supervision by adults or others, kept you confined to "safe" areas.'
	],
	'Supportive': [
		'You were provided guidance and care and allowed room to grow and explore'
	],
	'Gang' : [
		'You were raised by a gang, band or other group'
	],
	'Strict': [
		'Most of your care was left up to monks, military schools or other strict institutions'
	],
	'Owned': [	
		'Put to work from early or outright owned, very little care given'
	],
	'Apprenticed': [	
		'Given over to a Master to be apprenticed from an early age'
	],		
};

// Generates a random race from the races array
export const generateRace = () => {
  return getRandomItemFromArray(races);
}

// Generates a random birthplace with a reason
export const generateBirthplace = () => {
  return generateRandomItemFromObject(
    birthplaces,
    'birthplace',
    'birthplaceReason'
  );
}

// Generates a random childhood environment with a reason
export const generateChildhoodEnvironment = () => {
  return generateRandomItemFromObject(
    childhoodEnvironments,
    'childhoodEnvironment',
    'childhoodEnvironmentReason'
  );
}
