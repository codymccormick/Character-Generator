import { generateRandomItemFromObject } from "../../../helpers/random";

// Generates a random birthplace with a reason
export const generateBirthplace = () => {
	return generateRandomItemFromObject(
	  birthplaces,
	  'birthplace',
	  'birthplaceReason'
	);
  }

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
